/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {Promise} from 'es6-promise';
import * as RestClient from './RestClient';
import * as RestClientLegacy from './RestClientLegacy';

// TODO update this to use new Rest Client
export function getCraftedAbilities(loginToken: string, characterID: string) {
  return RestClientLegacy.getJSON('craftedabilities', false, {
    loginToken: loginToken,
    characterID: characterID
  });
}

// TODO update this to use new Rest Client
export function getControlGame(includeControlPoints: boolean = false) {
  return RestClientLegacy.getJSON('game/controlgame', false, { includeControlPoints: includeControlPoints });
}

// TODO update this to use new Rest Client
export function getAllPlayers() {
  return RestClientLegacy.getJSON('game/players');
}

// TODO update this to use new Rest Client
export function postPlotPermissions(query: Object) {
  return RestClientLegacy.postJSON('plot/modifypermissions', true, false, query);
}
