/* eslint-disable react/jsx-handler-names */
import React, { useState } from "react";
import * as topojson from "topojson-client";
import { scaleQuantize } from "@visx/scale";
import { CustomProjection, Graticule } from "@visx/geo";
import { Projection } from "@visx/geo/lib/types";
import { Zoom } from "@visx/zoom";
import { geoConicConformal } from "d3-geo";

import { geoInterruptedMollweideHemispheres } from "d3-geo-projection";

import topology from "../data/world-topo.json";

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

export const background = "#252b7e";
const purple = "#201c4e";
const PROJECTIONS: { [projection: string]: Projection } = {
  geoInterruptedMollweideHemispheres,
};

// @ts-expect-error
const world = topojson.feature(topology, topology.objects.units) as {
  type: "FeatureCollection";
  features: FeatureShape[];
};

const color = scaleQuantize({
  domain: [
    Math.min(...world.features.map((f) => f.geometry.coordinates.length)),
    Math.max(...world.features.map((f) => f.geometry.coordinates.length)),
  ],
  range: [
    "#ffb01d",
    "#ffa020",
    "#ff9221",
    "#ff8424",
    "#ff7425",
    "#fc5e2f",
    "#f94b3a",
    "#f63a48",
  ],
});

// Next step: fit it to this: https://observablehq.com/d/42ba08f1bd210bc8
// possible solving: https://gist.github.com/mbostock/4498292
export function GeoCustom({ width, height, events = false }: GeoCustomProps) {
  const [projection, setProjection] = useState<keyof typeof PROJECTIONS>(
    "geoInterruptedMollweideHemispheres"
  );

  const centerX = width / 2;
  const centerY = height / 2;
  const initialScale = (width / 630) * 100;

  return width < 10 ? null : (
    <>
      <Zoom<SVGSVGElement>
        width={width}
        height={height}
        scaleXMin={100}
        scaleXMax={1000}
        scaleYMin={100}
        scaleYMax={1000}
        initialTransformMatrix={{
          scaleX: initialScale,
          scaleY: initialScale,
          translateX: centerX,
          translateY: centerY,
          skewX: 0,
          skewY: 0,
        }}
      >
        {(zoom) => (
          <div className="container">
            <svg width={width} height={height}>
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={"#fff"}
                rx={14}
              />
              <CustomProjection<FeatureShape>
                projection={PROJECTIONS[projection]}
                data={world.features}
                scale={zoom.transformMatrix.scaleX}
                translate={[
                  zoom.transformMatrix.translateX,
                  zoom.transformMatrix.translateY,
                ]}
              >
                {(customProjection) => (
                  <g>
                    <Graticule
                      graticule={(g) => customProjection.path(g) || ""}
                      stroke={"#000"}
                    />
                    {customProjection.features.map(({ feature, path }, i) => (
                      <path
                        key={`map-feature-${i}`}
                        d={path || ""}
                        fill={color(feature.geometry.coordinates.length)}
                        stroke={background}
                        strokeWidth={0.5}
                        onClick={() => {
                          if (events)
                            alert(
                              `Clicked: ${feature.properties.name} (${feature.id})`
                            );
                        }}
                      />
                    ))}
                  </g>
                )}
              </CustomProjection>

              {/** intercept all mouse events */}
            </svg>
          </div>
        )}
      </Zoom>
    </>
  );
}
