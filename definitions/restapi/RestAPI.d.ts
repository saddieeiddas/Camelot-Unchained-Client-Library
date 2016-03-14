/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Promise } from 'es6-promise';
export declare function getCraftedAbilities(loginToken: string, characterID: string): Promise<any>;
export declare function getControlGame(includeControlPoints?: boolean): Promise<any>;
export declare function getAllPlayers(): Promise<any>;
export declare function postPlotPermissions(query: Object): Promise<any>;
export * from './resources/GameData';
export * from './resources/Servers';
export * from './resources/Characters';
