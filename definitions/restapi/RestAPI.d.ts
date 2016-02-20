/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
export declare function getJSON(endpoint: string, useHttps?: boolean, query?: any): Promise<any>;
export declare function postJSON(endpoint: string, useHttps?: boolean, requireAuth?: boolean, data?: any, version?: number): Promise<any>;
export declare function getFactions(): Promise<any>;
export declare function getCraftedAbilities(loginToken: string, characterID: string): Promise<any>;
export declare function getKills(query?: Object): Promise<any>;
export declare function getScheduledEvents(): Promise<any>;
export declare function getBanners(): Promise<any>;
export declare function getPatchNotes(): Promise<any>;
export declare function getControlGame(includeControlPoints?: boolean): Promise<any>;
export declare function getAllAttributes(): Promise<any>;
export declare function getAllBoons(): Promise<any>;
export declare function getAllBanes(): Promise<any>;
export declare function getAllPlayers(): Promise<any>;
export declare function getAllRaces(): Promise<any>;
export declare function getAllFactions(): Promise<any>;
export declare function postPlotPermissions(query: Object): Promise<any>;
