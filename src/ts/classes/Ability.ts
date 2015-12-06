/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

//import * as Rest from '../util/RestAPI';
import RestAPI from '../util/RestAPI';

import AbilityComponent from './AbilityComponent';
class Ability {
  id: string;
  icon: string;
  cooldowns: any[] = [];
  duration: number;
  triggerTimeOffset: number;
  name: string;
  tooltip: string;
    
  abilityComponents: AbilityComponent[];

  buttons: any[] = [];
  awaitingUpdate: { (a: Ability): any }[] = null;

  constructor(ability = <Ability>{}) {
    this.id = ability.id || "";
    this.icon = ability.icon || "";
    this.cooldowns = ability.cooldowns || [];
    this.duration = ability.duration || 0;
    this.triggerTimeOffset = ability.triggerTimeOffset || 0;
    this.name = ability.name || "";
    this.tooltip = ability.tooltip || "";
    this.buttons = ability.buttons || [];
    this.awaitingUpdate = ability.awaitingUpdate || null;
    this.abilityComponents = ability.abilityComponents || <AbilityComponent[]>[];
  }

  private static ObjToAbil(obj: any, index: number) {
    return new Ability(obj);
  }

  public static getAllAbilities(logonToken: string, characterID: string, callback: (abilities: Ability[]) => void) {
    let rest = new RestAPI();
    rest.craftedAbilities(logonToken, characterID).then(function (data: Object[]) {
      if (callback) {
        callback(data.map(Ability.ObjToAbil));
      }
    }, function (status: any, errorThrown: any) {
      console.log('status: ' + status + ' reason:' + errorThrown);
    });
  }

  static create() {
    let a = new Ability();
    return a;
  }

}

export default Ability;
