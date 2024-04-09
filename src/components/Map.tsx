/* eslint-disable react/jsx-handler-names */
import React, { useState, useCallback } from "react";
import * as topojson from "topojson-client";
import { scaleQuantize, scaleOrdinal } from "@visx/scale";
import { CustomProjection, Graticule } from "@visx/geo";
import { Projection } from "@visx/geo/lib/types";
import { Zoom } from "@visx/zoom";
import { geoPath, geoGraticule10 } from "d3-geo";

import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";

import { geoInterruptedMollweideHemispheres } from "d3-geo-projection";
import { vizColors } from "../styling/stylingConstants";

import topology from "../data/world-topo.json";
import dateData from "../data/dateData.json";

export type GeoCustomProps = {
  width: number;
  height: number;
  events?: boolean;
};

interface FeatureShape {
  type: "Feature";
  id: string;
  geometry: { coordinates: [number, number][][]; type: "Polygon" };
  properties: { name: string };
}

type TooltipData = {
  country: string;
  dateFormat: string;
  color: string;
};
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  minHeight: 100,
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
};

// same as projection in Observable
const PROJECTIONS: { [projection: string]: Projection } = {
  geoInterruptedMollweideHemispheres,
};

// world dataset I think
// @ts-expect-error
const world = topojson.feature(topology, topology.objects.units) as {
  type: "FeatureCollection";
  features: FeatureShape[];
};

const dateColors = scaleOrdinal({
  domain: ["DMY", "DMY, YMD", "YMD", "MDY, YMD, DMY", "MDY, YMD", "DMY, MDY"],
  range: [
    vizColors.adamantineBlue,
    vizColors.brightGreen,
    vizColors.neonSeaFoam,
    vizColors.pastelPurple,
    vizColors.pink,
    vizColors.yellow,
  ],
});

export default withTooltip<GeoCustomProps, TooltipData>(
  ({
    width,
    height,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }: GeoCustomProps & WithTooltipProvidedProps<TooltipData>) => {
    // ?? why is this a state we are not planning on changing it
    const [projection, setProjection] = useState<keyof typeof PROJECTIONS>(
      "geoInterruptedMollweideHemispheres"
    );

    // event handlers
    const handleMouseMove = useCallback(
      (event: any, tooltipData: TooltipData) => {
        const containerX = "clientX" in event ? event.nativeEvent.offsetX : 0;
        const containerY = "clientY" in event ? event.nativeEvent.offsetY : 0;
        showTooltip({
          tooltipLeft: containerX,
          tooltipTop: containerY,
          tooltipData,
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [showTooltip]
    );

    let tooltipTimeout: number;

    return width < 10 ? null : (
      <>
        <Zoom<SVGSVGElement>
          width={width}
          height={height}
          scaleXMin={100}
          scaleXMax={1000}
          scaleYMin={100}
          scaleYMax={1000}
        >
          {() => (
            <div>
              <svg viewBox={`0 0 ${width} ${height}`}>
                <rect x={0} y={0} width={width} height={height} fill="none" />
                <path
                  id="sphere"
                  d={geoPath(geoInterruptedMollweideHemispheres())({
                    type: "Sphere",
                  })}
                  fill="#F6F6FF"
                />
                <CustomProjection<FeatureShape>
                  projection={PROJECTIONS[projection]}
                  data={world.features}
                >
                  {(customProjection) => (
                    <g clipPath="url(#clip)">
                      <Graticule
                        graticule={(g) => customProjection.path(g) || ""}
                        stroke={"#fff"}
                      />

                      {customProjection.features.map(({ feature, path }, i) => (
                        <path
                          key={`map-feature-${i}`}
                          d={path || ""}
                          fill={dateColors(
                            dateData.filter(
                              (x) => x.FullName === feature.properties.name
                            )[0]?.DateFormat
                          )}
                          stroke={"#fff"}
                          strokeWidth={0.5}
                          onClick={() => {
                            alert(
                              `Clicked: ${feature.properties.name} (${
                                feature.id
                              }). Date format is ${
                                dateData.filter(
                                  (x) => x.FullName === feature.properties.name
                                )[0]?.DateFormat
                              } `
                            );
                          }}
                          onMouseLeave={() => {
                            tooltipTimeout = window.setTimeout(() => {
                              hideTooltip();
                            }, 300);
                          }}
                          onMouseMove={(e) => {
                            if (tooltipTimeout) clearTimeout(tooltipTimeout);
                            handleMouseMove(e, {
                              country: feature.properties.name,
                              dateFormat: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.DateFormat,
                              color: dateColors(
                                dateData.filter(
                                  (x) => x.FullName === feature.properties.name
                                )[0]?.DateFormat
                              ),
                            });
                          }}
                        />
                      ))}
                      <path
                        id="sphere"
                        d={geoPath(geoInterruptedMollweideHemispheres())({
                          type: "Sphere",
                        })}
                        fill="none"
                        stroke="#AEAEFF"
                        strokeWidth={4}
                      />
                    </g>
                  )}
                </CustomProjection>

                <defs>
                  {/*Sphere outline and related clip path */}
                  <path
                    id="sphere"
                    d={geoPath(geoInterruptedMollweideHemispheres())({
                      type: "Sphere",
                    })}
                  />
                  <clipPath id="clip">
                    <use href="#sphere" />
                  </clipPath>
                </defs>
                {/** intercept all mouse events */}
              </svg>
              {tooltipOpen && tooltipData && (
                <Tooltip
                  top={tooltipTop}
                  left={tooltipLeft}
                  style={tooltipStyles}
                >
                  <h3> {tooltipData.country}</h3>
                  <div>
                    <p style={{ color: tooltipData.color }}>
                      {" "}
                      {tooltipData.dateFormat}
                    </p>
                  </div>
                </Tooltip>
              )}
            </div>
          )}
        </Zoom>
      </>
    );
  }
);
