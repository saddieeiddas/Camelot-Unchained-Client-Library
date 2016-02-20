/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
import HandlesEquippedGear from '../classes/HandlesEquippedGear';
export default class EquippedGearListener {
    listening: boolean;
    type: string;
    handles: HandlesEquippedGear;
    constructor(handles: HandlesEquippedGear);
    start(emitter: EventEmitter): void;
}
