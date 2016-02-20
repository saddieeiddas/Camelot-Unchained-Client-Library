/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import race from '../constants/race';
import archetype from '../constants/archetype';
export interface Injury {
    part: number;
    health: number;
    maxHealth: number;
    wounds: number;
}
declare class Combatant {
    name: string;
    health: number;
    maxHealth: number;
    stamina: number;
    maxStamina: number;
    injuries: Injury[];
    constructor(combatant?: Combatant);
    /**
     *  Reset combatant state to nil [for when not got a target]
     */
    reset(): void;
    setRace(race: race): void;
    setArchetype(archetype: archetype): void;
    setName(name: string): void;
    setHealth(health: number, maxHealth: number): void;
    setStamina(stamina: number, maxStamina: number): void;
    setInjury(part: number, health: number, maxHealth: number, wounds: number): void;
    static create(): Combatant;
}
export default Combatant;
