/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface LabelState {
}
export interface LabelProps {
    key: string;
    part: number;
    value: number;
    max: number;
    color: string;
}
export declare class Label extends React.Component<LabelProps, LabelState> {
    constructor(props: LabelProps);
    render(): JSX.Element;
}
