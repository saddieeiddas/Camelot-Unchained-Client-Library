/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface BuffsState {
    buffList: any;
}
export interface BuffsProps {
    type: string;
}
export declare class Buffs extends React.Component<BuffsProps, BuffsState> {
    constructor(props: BuffsProps);
    componentWillMount(props: BuffsProps, state: BuffsState): void;
    render(): JSX.Element;
}
export default Buffs;
