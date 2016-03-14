/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Promise } from 'es6-promise';
import * as GameData from './resources/GameData';
import * as Servers from './resources/Servers';
import * as Characters from './resources/Characters';
declare function getCraftedAbilities(loginToken: string, characterID: string): Promise<any>;
declare function getControlGame(includeControlPoints?: boolean): Promise<any>;
declare function getAllPlayers(): Promise<any>;
declare function postPlotPermissions(query: Object): Promise<any>;
export { getCraftedAbilities, getControlGame, getAllPlayers, postPlotPermissions, GameData, Servers, Characters };
