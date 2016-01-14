/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="./tsd/tsd.d.ts"/>

// core
import CoreSettings from './core/CoreSettings';
import clientInterface from './core/clientInterface';
import client from './core/client';

// constants
import abilityTags from './core/constants/abilityConstants/abilityTags';
import archetype from './core/constants/archetype';
import buildUIMode from './core/constants/buildUIMode';
import channelId from './core/constants/channelId';
import dxKeyCodes from './core/constants/dxKeyCodes';
import emotes from './core/constants/emotes';
import jsKeyCodes from './core/constants/jsKeyCodes';
import jsToDXKeyCodeMap from './core/constants/jsToDXKeyCodeMap';
import race from './core/constants/race';
import soundEvents from './core/constants/soundEvents';
import tagConstraintType from './core/constants/tagConstraintType';
import tags from './core/constants/tags';
import itemType from './core/constants/itemType';
import gearSlot from './core/constants/gearSlot';

// classes
import Ability from './core/classes/Ability';
import Combatant from './core/classes/Combatant';
import Player from './core/classes/Player';
import Character from './core/classes/Character';
import ControlGame from './core/classes/ControlGame';
import Injury from './core/classes/Injury';
import Population from './core/classes/Population';
import Inventory from './core/classes/Inventory';
import Item from './core/classes/Item';
import EquippedGear from './core/classes/EquippedGear';

// libraries
import * as core from './core/core';
import events from './events/events';
import stores from './stores/stores';
import components from './components/components';

export {

  // core
  CoreSettings,
  clientInterface,
  client,

  // core constants
  abilityTags,
  archetype,
  buildUIMode,
  channelId,
  dxKeyCodes,
  emotes,
  jsKeyCodes,
  jsToDXKeyCodeMap,
  race,
  soundEvents,
  tagConstraintType,
  tags,
  itemType,
  gearSlot,

  // core classes
  Ability,
  Combatant,
  Player,
  Character,
  ControlGame,
  Injury,
  Population,
  Inventory,
  Item,
  EquippedGear,

  // libraries
  core,
  events,
  stores,
  components,
}
