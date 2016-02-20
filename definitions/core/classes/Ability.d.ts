import AbilityComponent from './AbilityComponent';
declare class Ability {
    id: string;
    icon: string;
    cooldowns: any[];
    duration: number;
    triggerTimeOffset: number;
    name: string;
    tooltip: string;
    abilityComponents: AbilityComponent[];
    buttons: any[];
    awaitingUpdate: {
        (a: Ability): any;
    }[];
    constructor(ability?: Ability);
    static getAllAbilities(loginToken: string, characterID: string, callback: (abilities: Ability[]) => void): void;
}
export default Ability;
