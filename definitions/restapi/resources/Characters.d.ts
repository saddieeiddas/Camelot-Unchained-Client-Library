/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Promise } from 'es6-promise';
import channelId from '../../core/constants/channelId';
import archetype from '../../core/constants/archetype';
import faction from '../../core/constants/faction';
import gender from '../../core/constants/gender';
import race from '../../core/constants/race';
export declare function getCharacters(): Promise<SimpleCharacter[]>;
export declare function getCharactersOnShard(shardID?: number): Promise<SimpleCharacter[]>;
export declare function getCharacterOnShard(shardID: number, characterID: string): Promise<Character>;
export declare function deleteCharacterOnShard(shardID: number, characterID: string): Promise<any>;
export declare function createCharacter(shardID: number, channelId: channelId, data: CharacterCreateRequest): Promise<any>;
export interface SimpleCharacter {
    archetype: archetype;
    faction: faction;
    gender: gender;
    id: string;
    lastLogin: string;
    name: string;
    race: race;
    shardID: number;
}
export interface Character {
    archetype: archetype;
    faction: faction;
    gender: gender;
    id: string;
    lastLogin: string;
    name: string;
    race: race;
    shardID: any;
    attributes: any;
    banes: any;
    boons: any;
}
export interface CharacterCreateRequest {
    name: string;
    faction: faction;
    race: race;
    gender: gender;
    attributes: {
        strength: number;
        dexterity: number;
        agility: number;
        vitality: number;
        endurance: number;
        attunement: number;
        will: number;
        faith: number;
        resonance: number;
        eyesight: number;
    };
    boons: {
        [index: string]: number;
    };
    banes: {
        [index: string]: number;
    };
}
