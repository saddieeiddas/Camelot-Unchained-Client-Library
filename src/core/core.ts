/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import CoreSettings from './CoreSettings';
import clientInterface from './clientInterface';
import client from './client';

// constants
import abilityTags from './constants/abilityConstants/abilityTags';
import archetype from './constants/archetype';
import buildUIMode from './constants/buildUIMode';
import channelId from './constants/channelId';
import dxKeyCodes from './constants/dxKeyCodes';
import emotes from './constants/emotes';
import jsKeyCodes from './constants/jsKeyCodes';
import jsToDXKeyCodeMap from './constants/jsToDXKeyCodeMap';
import race from './constants/race';
import soundEvents from './constants/soundEvents';
import tagConstraintType from './constants/tagConstraintType';
import tags from './constants/tags';
import itemType from './constants/itemType';
import gearSlot from './constants/gearSlot';

// classes
import Ability from './classes/Ability';
import Combatant from './classes/Combatant';
import Player from './classes/Player';
import Character from './classes/Character';
import ControlGame from './classes/ControlGame';
import Injury from './classes/Injury';
import Population from './classes/Population';
import Inventory from './classes/Inventory';
import Item from './classes/Item';
import EquippedGear from './classes/EquippedGear';
import LogMessage from './classes/LogMessage';
import ChatMessage from './classes/ChatMessage';
import ConsoleMessage from './classes/ConsoleMessage';
import Config from './classes/Config';
import ConfigVar from './classes/ConfigVar';

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
  LogMessage,
  ChatMessage,
  ConsoleMessage,
  Config,
  ConfigVar,
}
