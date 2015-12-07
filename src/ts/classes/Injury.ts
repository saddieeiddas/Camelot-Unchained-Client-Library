/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

class Injury {
  part: number;
  health: number;
  maxHealth: number;
  wounds: number;

  constructor(injury = <Injury>{}) {
    this.refresh(injury);
  }

  refresh(injury = <Injury>{}) {
    this.part = injury.part || 0;
    this.health = injury.health || 25;
    this.maxHealth = injury.maxHealth || 25;
    this.wounds = injury.wounds || 0;
  }

  static create() {
    let a = new Injury();
    return a;
  }
}

export default Injury;
