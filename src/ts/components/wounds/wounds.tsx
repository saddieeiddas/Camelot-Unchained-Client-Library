/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../tsd/tsd.d.ts" />

import * as React from 'react';
import { Doll } from './components/Doll';
import { Stats } from './components/Stats';
import { Buffs } from './components/Buffs';
import { WoundColors } from './classes/WoundColors';

export class WoundsProps {
  injuries: any[];
  health: number;
  healthMax: number;
  stamina: number;
  staminaMax: number;
  //panic: number;
  //panicMax: number;
  //temp: number;
  //tempMax: number;
  //colors: any;
}

export class WoundsState { }

class Wounds extends React.Component<WoundsProps, WoundsState> {
  constructor(props: WoundsProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <Doll injuries={this.props.injuries} />
        <Buffs type="boon"/>
        <Buffs type="bane"/>
        <Stats
          blood={this.props.health} bloodMax={this.props.healthMax}
          stamina={this.props.stamina} staminaMax={this.props.staminaMax}
          panic={15} panicMax={55}
          temp={72} tempMax={96}
          />
      </div>
    );
  }
}

export default Wounds;
