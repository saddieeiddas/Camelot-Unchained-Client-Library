/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import EventEmitter from '../classes/EventEmitter';
import HandlesInventory from '../classes/HandlesInventory';
import client from '../../core/client';
import Inventory from '../../core/classes/Inventory';
import Item from '../../core/classes/Item';

function run(emitter: EventEmitter, topic: string) {
  const inventory = new Inventory();
  const queue: string[] = [];
  client.OnItemEquipped((id: string) => {
    inventory.removeItem(id);
  });
  client.OnItemUnequipped((id: string) => {
    queue.push(id);
    client.GetItem(id);
  });
  client.OnInventoryItemIDsChanged((ids: string[]) => {
    const existingItemIDs = inventory.getItemIDs();
    ids.forEach((id: string) => {
      if (inventory.hasItem(id)) {
        existingItemIDs.splice(existingItemIDs.indexOf(id), 1);
      } else {
        queue.push(id);
      }
    });
    existingItemIDs.forEach((id: string) => {
      inventory.removeItem(id);
    });
    if (queue.length > 0) {
      queue.forEach((id: string) => {
        client.GetItem(id);
      });
    } else {
      emitter.emit(topic, inventory);
    }
  });
  client.OnGetItem((item: any) => {
    item.id = item.itemID;
    if (queue.indexOf(item.id) >= 0) {
      queue.splice(queue.indexOf(item.id), 1);
      inventory.addItem(new Item(item));
      if (queue.length === 0) {
        emitter.emit(topic, inventory);
      }
    }
  });
}

export default class InventoryListener {
  listening: boolean = false;
  type: string;
  handles: HandlesInventory;
  constructor(handles: HandlesInventory) {
    this.handles = handles;
  }
  start(emitter: EventEmitter): void {
    if (!this.listening) {
      this.listening = true;
      run(emitter, this.handles.topic);
    }
  }
}
