/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
import { SVGCircle, SVGRect } from '../resources/Shapes';
export interface SvgState {
}
export interface SvgProps {
    className?: string;
    box: string;
    key?: string;
    id: string;
    color: string;
    polygon?: string;
    path?: string;
    circle?: SVGCircle;
    rect?: SVGRect;
    stroke?: string;
    strokeML?: string;
}
export declare class Svg extends React.Component<SvgProps, SvgState> {
    constructor(props: SvgProps);
    render(): JSX.Element;
}
export default Svg;
