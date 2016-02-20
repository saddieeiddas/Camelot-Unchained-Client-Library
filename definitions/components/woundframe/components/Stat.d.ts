/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface StatState {
}
export interface StatProps {
    type: string;
    value: number;
    max: number;
}
export declare class Stat extends React.Component<StatProps, StatState> {
    constructor(props: StatProps);
    render(): JSX.Element;
}
export default Stat;
