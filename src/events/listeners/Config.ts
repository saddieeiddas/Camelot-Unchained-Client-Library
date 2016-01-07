/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import EventEmitter from '../classes/EventEmitter';
import HandlesConfig from '../classes/HandlesConfig';
import client from '../../core/client';
import Config from '../../core/classes/Config';
import ConfigVar from '../../core/classes/ConfigVar';
import tags from '../../core/constants/tags';

function run(emitter: EventEmitter, topic: string) {
  const config = new Config();
  const queue: any[] = [];
  const tagsArray: any[] = Object.keys(tags).filter((id: any) => {
    return !isNaN(id);
  });
  let reloadingAllConfig = false;

  client.OnReceiveConfigVars((rawConfigVars: string) => {
    const configVars = JSON.parse(rawConfigVars);
    const tag: any = queue.length > 0 ? parseInt(queue.shift(), 10) : null;
    for (const id in configVars) {
      let value = configVars[id];
      if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      let index: number = config.getVarIndex(id);
      if (index < 0) {
        const configVar = new ConfigVar({
          id: id,
          tag: tag,
          value: value
        });
        config.vars.push(configVar);
      } else {
        let index: number = config.getVarIndex(id);
        config.vars[index].value = value;
      }
    }
    if (queue.length === 0) {
      reloadingAllConfig = false;
      emitter.emit(topic, config);
    }
  });
  client.OnReceiveConfigVar((configVars: any) => {
    for (const id in configVars) {
      let value: any = configVars[id];
      if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      let index: number = config.getVarIndex(id);
      config.vars[index].value = value;
    }
    emitter.emit(topic, config);
  });
  client.OnConfigVarChanged((isChangeSuccessful: boolean) => {
    if (!isChangeSuccessful) {
      console.warn('Could not change ConfigVar value');
    }
    if (!reloadingAllConfig) {
      reloadAllConfig();
    }
  });
  client.OnSavedConfigChanges(() => {
    reloadAllConfig();
  });

  reloadAllConfig();

  function reloadAllConfig() {
    reloadingAllConfig = true;
    tagsArray.forEach((tag: any) => {
      queue.push(tag);
      client.GetConfigVars(parseInt(tag, 10));
    });
  }

}

export default class ConfigListener {
  listening: boolean = false;
  type: string;
  handles: HandlesConfig;
  constructor(handles: HandlesConfig) {
    this.handles = handles;
  }
  start(emitter: EventEmitter): void {
    if (!this.listening) {
      this.listening = true;
      run(emitter, this.handles.topic);
    }
  }
}
