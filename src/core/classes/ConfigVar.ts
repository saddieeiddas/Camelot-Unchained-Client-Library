/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import tags from '../constants/tags';

class ConfigVar {
  id: string;
  tag: tags;
  value: any;

  constructor(configVar = <ConfigVar>{}) {
    this.id = configVar.id;
    this.tag = configVar.tag;
    this.value = configVar.value;
  }

  static create() {
    let a = new ConfigVar();
    return a;
  }
}

export default ConfigVar;
