/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import tags from '../constants/tags';
import ConfigVar from './ConfigVar';
import client from '../client';

class Config  {
  vars: ConfigVar[];
  private tagsArray: string[];

  constructor(config = <Config>{}) {
    this.vars = config.vars || [];
    this.tagsArray = Object.keys(tags).filter((id: any) => {
      return !isNaN(id);
    });
  }

  getVarsByTag(tag: tags) {
    return this.vars.filter((configVar: ConfigVar) => {
      return configVar.tag == tag;
    });
  }

  getVar(id: string): ConfigVar {
    const configVars = this.vars.filter((configVar: ConfigVar) => {
      return configVar.id == id;
    });
    return configVars.length > 0 ? configVars[0] : null;
  }

  getVarIndex(id: string): number {
    let varIndex: number = -1;
    this.vars.forEach((configVar: ConfigVar, index: number) => {
      if (configVar.id == id) {
        varIndex = index;
      }
    });
    return varIndex;
  }

  updateVar(configVar: ConfigVar): void {
    let value: any = configVar.value;
    if (value === true) {
      value = 'true';
    } else if (value === false) {
      value = 'false';
    }
    client.ChangeConfigVar(configVar.id, value);
  }

  updateVars(configVars: ConfigVar[]): void {
    configVars.forEach((configVar: ConfigVar) => {
      this.updateVar(configVar);
    });
  }

  saveChanges(): void {
    client.SaveConfigChanges();
  }

  cancelAllChangesByTag(tag: tags): void {
    client.CancelAllConfigChanges(tag);
  }

  cancelAllChanges(): void {
    this.tagsArray.forEach((tag: any) => {
      this.cancelAllChangesByTag(parseInt(tag, 10));
    });
  }

  cancelChanges(configVar: ConfigVar): void {
    client.CancelChangeConfig(configVar.id);
  }

  restoreConfigDefaultsByTag(tag: tags): void {
    client.RestoreConfigDefaults(tag);
  }

  restoreAllConfigDefaults(): void {
    this.tagsArray.forEach((tag: any) => {
      this.restoreConfigDefaultsByTag(parseInt(tag, 10));
    });
  }

  static create() {
    let a = new Config();
    return a;
  }
}

export default Config;
