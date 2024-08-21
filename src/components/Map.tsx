/* eslint-disable react/jsx-handler-names */
import React, { useState, useCallback, useEffect } from "react";
import * as topojson from "topojson-client";
import { scaleQuantize, scaleOrdinal } from "@visx/scale";
import { CustomProjection, Graticule } from "@visx/geo";
import { Projection } from "@visx/geo/lib/types";
import { Zoom } from "@visx/zoom";
import { geoPath, geoGraticule10 } from "d3-geo";

import { withTooltip, defaultStyles, TooltipWithBounds } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { getTimezonesForCountry } from "countries-and-timezones";
import { DateTime } from "luxon";

import { geoInterruptedMollweideHemispheres } from "d3-geo-projection";
import { vizColors } from "../styling/stylingConstants";
import {
  CountryPathHoverEffect,
  DateWrapper,
  TimeDiv,
  TooltipDiv,
} from "../styling/mapStyle";

import topology from "../data/world-topo.json";
import dateData from "../data/dateData.json";
import { dateColors, defaultDateFormatter } from "./utils";

export type GeoCustomProps = {
  width: number;
  height: number;
  type?: string;
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
  countryCode: string;
  dateFormat: string;
  dateFormatDefault: string;
  punctuation: string;
  color: string;
};
const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: "white",
  border: "1px solid black",
};

function TooltipSubtitle(dateFormatString: string) {
  switch (dateFormatString) {
    case "DMY":
      return "This country primarily uses the DMY format for dates or (*) has no date format specified so defaults to the international standard.";
    case "DMY, YMD":
      return "This country uses a mix of DMY and YMD formats.";
    case "YMD":
      return "This country primarily uses the YMD format for dates.";
    case "MDY, YMD":
      return "Primarily using MDY for dates, this country also uses the YMD formats.";
    case "DMY, MDY":
      return "This country uses a mix of DMY and MDY formats.";
    case "MDY, YMD, DMY":
      return "This country uses a mix of MDY, YMD and DMY formats.";
    default:
      return "Multiple Date Formats";
  }
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
                        <CountryPathHoverEffect
                          key={`map-feature-${i}`}
                          d={path || ""}
                          fill={dateColors(
                            dateData.filter(
                              (x) => x.FullName === feature.properties.name
                            )[0]?.DateFormat
                          )}
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
                <TooltipWithBounds
                  top={tooltipTop}
                  left={tooltipLeft}
                  style={tooltipStyles}
                >
                  <TooltipDiv>
                    <h3>{tooltipData.country}</h3>

                    <DateWrapper>
                      <TimeDiv timeframe={tooltipData.dateFormat}>
                        <h2>
                          {" "}
                          {tooltipData &&
                            tooltipData.dateFormatDefault &&
                            DateTime.now()
                              .setZone(
                                getTimezonesForCountry(
                                  tooltipData.countryCode
                                )?.map((x) => x.name)[0]
                              )
                              .toFormat(
                                tooltipData.dateFormatDefault ==
                                  "None Specified"
                                  ? defaultDateFormatter(tooltipData.dateFormat)
                                  : tooltipData.dateFormatDefault
                              )
                              .toString()}
                        </h2>
                      </TimeDiv>
                    </DateWrapper>
                    <div>
                      <p>{TooltipSubtitle(tooltipData.dateFormat)}</p>
                    </div>
                  </TooltipDiv>
                </TooltipWithBounds>
              )}
            </div>
          )}
        </Zoom>
      </>
    );
  }
);
