/* eslint-disable react/jsx-handler-names */
import React, { useCallback } from "react";
import * as topojson from "topojson-client";
import { CustomProjection, Graticule } from "@visx/geo";
import { Projection } from "@visx/geo/lib/types";
import { Zoom } from "@visx/zoom";
import { geoPath } from "d3-geo";

import { withTooltip, TooltipWithBounds } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";

import { geoInterruptedMollweideHemispheres } from "d3-geo-projection";
import { CountryPathHoverEffect } from "../styling/mapStyle";

import topology from "../data/world-topo.json";
import dateData from "../data/dateData.json";
import {
  clockTypeColors,
  dateColors,
  daylightSavingsColors,
  firstDayColors,
  workWeekColors,
} from "./utils";
import { MapTooltipContents, TooltipData, tooltipStyles } from "./MapTooltips";

export type GeoCustomProps = {
  width: number;
  height: number;
  type: string;
  events?: boolean;
};
interface FeatureShape {
  type: "Feature";
  id: string;
  geometry: { coordinates: [number, number][][]; type: "Polygon" };
  properties: { name: string };
}

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

function mapColorChooser({
  category,
  feature,
}: {
  category: string;
  feature: any;
}) {
  switch (category) {
    case "dateformat":
      return dateColors(
        dateData.filter((x: any) => x.FullName === feature.properties.name)[0]
          ?.DateFormat
      );
    case "weekdayweekend":
      return workWeekColors(
        dateData.filter((x: any) => x.FullName === feature.properties.name)[0]
          ?.WorkWeek
      );
    case "firstday":
      return firstDayColors(
        dateData.filter((x: any) => x.FullName === feature.properties.name)[0]
          ?.FirstDayofWeek
      );
    case "clocktype":
      return clockTypeColors(
        dateData.filter((x: any) => x.FullName === feature.properties.name)[0]
          ?.ClockTypeHour
      );
    case "daylightsavings":
      return daylightSavingsColors(
        dateData.filter((x: any) => x.FullName === feature.properties.name)[0]
          ?.DaylightSavings
      );
    default:
      return "#fff";
  }
}

export default withTooltip<GeoCustomProps, TooltipData>(
  ({
    width,
    height,
    type,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }: GeoCustomProps & WithTooltipProvidedProps<TooltipData>) => {
    const projection = "geoInterruptedMollweideHemispheres";

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
              {/* SVG OF THE GLOBE  */}
              <svg viewBox={`0 0 ${width} ${height}`}>
                <rect x={0} y={0} width={width} height={height} fill="none" />
                <path
                  id="sphere"
                  d={
                    geoPath(geoInterruptedMollweideHemispheres())({
                      type: "Sphere",
                    })!
                  }
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
                        <CountryPathHoverEffect
                          key={`map-feature-${i}`}
                          d={path || ""}
                          fill={mapColorChooser({
                            category: type,
                            feature: feature,
                          })}
                          onMouseLeave={() => {
                            tooltipTimeout = window.setTimeout(() => {
                              hideTooltip();
                            }, 300);
                          }}
                          onMouseEnter={(e) => {
                            //gets time in country at one instant
                            // this removes the country and then reappends it to map so that it is at the top of the stack
                            // might need to check it's not just infinitely duplicating itself but for now, good.
                            let target = e.currentTarget;
                            let parent = e.currentTarget.parentElement;
                            target.remove();
                            parent?.append(target);
                          }}
                          onMouseMove={(e) => {
                            if (tooltipTimeout) clearTimeout(tooltipTimeout);
                            handleMouseMove(e, {
                              //Where data for tooltip gets inputted
                              country: feature.properties.name,
                              countryCode: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.CountryCode,
                              dateFormatDefault: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.DateFormatDefault,
                              punctuation: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.Punctuation,
                              dateFormat: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.DateFormat,
                              workWeek: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.WorkWeek,
                              firstDay: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.FirstDayofWeek,
                              clockType: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.ClockTypeHour,
                              daylightSavings: dateData.filter(
                                (x) => x.FullName === feature.properties.name
                              )[0]?.DaylightSavings,
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
                        d={
                          geoPath(geoInterruptedMollweideHemispheres())({
                            type: "Sphere",
                          })!
                        }
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
                    d={
                      geoPath(geoInterruptedMollweideHemispheres())({
                        type: "Sphere",
                      })!
                    }
                  />
                  <clipPath id="clip">
                    <use href="#sphere" />
                  </clipPath>
                </defs>
              </svg>

              {/*  TOOLTIP ON SVG */}
              {tooltipOpen && tooltipData && (
                <TooltipWithBounds
                  top={tooltipTop}
                  left={tooltipLeft}
                  style={tooltipStyles}
                >
                  {MapTooltipContents({ tooltipData, type })}
                </TooltipWithBounds>
              )}
            </div>
          )}
        </Zoom>
      </>
    );
  }
);
