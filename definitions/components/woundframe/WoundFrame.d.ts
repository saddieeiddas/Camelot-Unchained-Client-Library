/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export declare class WoundsProps {
    name: string;
    injuries: any[];
    health: number;
    healthMax: number;
    stamina: number;
    staminaMax: number;
    panic: number;
    panicMax: number;
    temp: number;
    tempMax: number;
}
export declare class WoundsState {
}
declare class WoundFrame extends React.Component<WoundsProps, WoundsState> {
    constructor(props: WoundsProps);
    render(): JSX.Element;
}
export default WoundFrame;
