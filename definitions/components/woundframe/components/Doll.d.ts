/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
import { Injury } from '../../../core/core';
export interface DollState {
}
export interface DollProps {
    injuries: Injury[];
}
export declare class Doll extends React.Component<DollProps, DollState> {
    render(): JSX.Element;
}
export default Doll;
