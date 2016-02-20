/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export interface SVGRect {
    x: string;
    y: string;
    transform: string;
    width: string;
    height: string;
}
export interface SVGCircle {
    cx: string;
    cy: string;
    r: string;
}
export interface SVGShape {
    box: string;
    polygon?: string;
    path?: string;
    circle?: SVGCircle;
    rect?: SVGRect;
}
export declare const icons: SVGShape[];
export declare const shapes: SVGShape[][];
