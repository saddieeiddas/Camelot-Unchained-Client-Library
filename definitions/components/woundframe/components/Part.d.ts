/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface PartState {
}
export interface PartProps {
    key: string;
    part: number;
    health: number;
    max: number;
    wounds: number;
    state: number;
    color: string;
}
export declare class Part extends React.Component<PartProps, PartState> {
    constructor(props: PartProps);
    render(): JSX.Element;
}
