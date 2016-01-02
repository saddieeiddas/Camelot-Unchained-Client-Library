/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import itemType from '../constants/itemType';
import gearSlot from '../constants/gearSlot';

/**
 * Item
 */
class Item  {
  /**
   * The item ID
   * @type {string}
   */
  id: string;

  /**
   * The item Type
   * @type {itemType}
   */
  type: itemType;

  /**
   * The Item Name
   * @type {string}
   */
  name: string;

  /**
   * The Item Description
   * @type {string}
   */
  description: string;

  /**
   * The Item Resource ID
   * @type {number}
   */
  resourceID: number;

  /**
   * The Item carryingRequirement
   * @type {any}
   */
  carryingRequirement: any;

  /**
   * The Item gearSlot
   * @type {gearSlot}
   */
  gearSlot: gearSlot;

  /**
   * Item Constructor
   * @param  {Item = <Item>{}} item - an existing item to create this new item from
   */
  constructor(item: Item = <Item>{}) {
    this.id = item.id ||  "";
    this.type = item.type;
    this.name = item.name ||  "";
    this.description = item.description ||  "";
    this.resourceID = item.resourceID;
    this.carryingRequirement = item.carryingRequirement;
    this.gearSlot = item.gearSlot || gearSlot.NONE;
  }

  static create() {
    let a = new Item();
    return a;
  }

}

export default Item;
