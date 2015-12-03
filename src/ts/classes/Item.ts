/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import itemType from '../constants/itemType';

class Item  {
  id: string;
  type: itemType;
  name: string;
  description: string;
  resourceId: number;

  constructor(item = <Item>{}) {
    this.id = item.id ||  "";
    this.type = item.type ||  itemType.NONE;
    this.name = item.name ||  "";
    this.description = item.description ||  "";
    this.resourceId = item.resourceId ||  0;
  }

  static create() {
    let a = new Item();
    return a;
  }

}

export default Item;
