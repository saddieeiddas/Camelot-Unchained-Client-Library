/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';

class EquippedItems  {

  helmet: Item;
  chest: Item;
  pants: Item;
  boots: Item;
  leftHand: Item;
  rightHand: Item;
  leftGlove: Item;
  rightGlove: Item;


  constructor(equippeditems = <EquippedItems>{}) {
    this.helmet = equippeditems.helmet ||  null;
    this.chest = equippeditems.chest ||  null;
    this.pants = equippeditems.pants ||  null;
    this.boots = equippeditems.boots ||  null;
    this.leftHand = equippeditems.leftHand ||  null;
    this.rightHand = equippeditems.rightHand ||  null;
    this.leftGlove = equippeditems.leftGlove ||  null;
    this.rightGlove = equippeditems.rightGlove ||  null;

  }

  static create() {
    let a = new EquippedItems();
    return a;
  }

}

export default EquippedItems;
