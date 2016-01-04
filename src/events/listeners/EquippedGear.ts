/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import EventEmitter from '../classes/EventEmitter';
import HandlesEquippedGear from '../classes/HandlesEquippedGear';
import client from '../../core/client';
import EquippedGear from '../../core/classes/EquippedGear';
import Item from '../../core/classes/Item';

function run(emitter: EventEmitter, topic: string) {
  const equippedgear = new EquippedGear();
  const queue: string[] = [];
  client.OnItemEquipped((id: string) => {
    queue.push(id);
    client.GetItem(id);
  });
  client.OnItemUnequipped((id: string) => {
    equippedgear.removeItem(id);
    emitter.emit(topic, equippedgear);
  });
  client.OnEquippedGearItemIDsChanged((ids: string[]) => {
    const existingItemIDs = equippedgear.getItemIDs();
    ids.forEach((id: string) => {
      if (equippedgear.hasItem(id)) {
        existingItemIDs.splice(existingItemIDs.indexOf(id), 1);
      } else {
        queue.push(id);
      }
    });
    existingItemIDs.forEach((id: string) => {
      equippedgear.removeItem(id);
    });
    if (queue.length > 0) {
      queue.forEach((id: string) => {
        client.GetItem(id);
      });
    } else {
      emitter.emit(topic, equippedgear);
    }
  });
  client.OnGetItem((item: any) => {
    item.id = item.itemID;
    if (queue.indexOf(item.id) >= 0) {
      queue.splice(queue.indexOf(item.id), 1);
      equippedgear.addItem(new Item(item));
      if (queue.length === 0) {
        emitter.emit(topic, equippedgear);
      }
    }
  });
}

export default class EquippedGearListener {
  listening: boolean = false;
  type: string;
  handles: HandlesEquippedGear;
  constructor(handles: HandlesEquippedGear) {
    this.handles = handles;
  }
  start(emitter: EventEmitter): void {
    if (!this.listening) {
      this.listening = true;
      run(emitter, this.handles.topic);
    }
  }
}
