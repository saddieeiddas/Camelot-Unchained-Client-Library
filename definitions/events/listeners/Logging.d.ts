/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
import HandlesLogging from '../classes/HandlesLogging';
export default class LoggingListener {
    listening: boolean;
    type: string;
    handles: HandlesLogging;
    constructor(handles: HandlesLogging);
    start(emitter: EventEmitter): void;
}
