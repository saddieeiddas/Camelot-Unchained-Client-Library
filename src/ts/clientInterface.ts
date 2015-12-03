/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import tags from './constants/tags';
import race from './constants/race';

interface clientInterface {
  // These are the only things that are guaranteed to exist from the time
  // the page is created. Everything else will be constructed over the course
  // of the client's setup, concurrent to the page load and inital script
  // execution. Anything you need to do in setup should be attached to
  // cu.OnInitialized(), which will be called after the page is loaded
  // and this is fully set up.
  initialized: boolean;
  OnInitialized(c: () => void): number;
  CancelOnInitialized(c: number): void;

  // Everything else only exists after this.initialized is set and the
  // OnInitialized callbacks are invoked.

  /* Client Options */
  muteVolume: boolean;
  mainVolume: number;

  /* Shared */

  patchResourceChannel: number;
  loginToken: string;
  pktHash: string;
  webAPIHost: string;
  serverURL: string;
  serverTime: number;
  vsync: number;

  FOV(degrees: number): void;
  DropLight(intensity: number, radius: number, red: number, green: number, blue: number): void;
  ResetLights(): void;

  OnServerConnected(c: (isConnected: boolean) => void): number;
  CancelOnServerConnected(c: number): void;
  PlaySoundEvent(id: number): void;
  ToggleCamera(): void;
  OpenUI(name: string): void;
  CloseUI(name: string): void;
  HideUI(name: string): void;
  ShowUI(name: string): void;
  ToggleUIVisibility(name: string): void;
  FocusUI(name: string): void;
  RequestInputOwnership(): void;
  ReleaseInputOwnership(): void;
  Quit(): void;
  CrashTheGame(): void;
  OnUpdateNameplate(c: (cell: number, colorMod: number, name: string, gtag: string, title: string) => void): void;
  OnOpenUI(callback: (name: string) => void): void;
  OnCloseUI(callback: (name: string) => void): void;
  OnShowUI(callback: (name: string) => void): void;
  OnHideUI(callback: (name: string) => void): void;

  Listen(event: string): void;
  Ignore(event: string): void;
  Fire(event: string, ...args: any[]): void;
  OnEvent(callback: (event: string, ...args: any[]) => void): void;

  /* Respawn */
  Respawn(id: string): void;

  /* Abilities */

  OnAbilityNumbersChanged(callback: (abilityNumbers: string[]) => void): void;

  Attack(abilityID: string): void;

  OnAbilityCooldown(c: (cooldownID: number, timeStarted: number, duration: number) => void): number;
  CancelOnAbilityCooldown(c: number): void;

  OnAbilityActive(c: (currentAbility: string, timeStarted: number, timeTriggered: number, queuedAbility: string) => any): number;
  CancelOnAbilityActive(c: number): void;

  OnAbilityError(c: (message: string) => void): void;

  /* Items */

  GetItem(itemID: string): void;
  OnGetItem(callback: (itemID: string, data: string) => void): void;

  OnItemEquipped(callback: (itemID: string) => void): void;
  OnItemUnequipped(callback: (itemID: string) => void): void;

  /* Equipped Gear */

  OnEquippedGearItemIDsChanged(callback: (gearItemIDs: string[]) => void): void;

  UnequipItem(itemID: string): void;

  /* Inventory */

  OnInventoryItemIDsChanged(callback: (inventoryItemIDs: string[]) => void): void;

  EquipItem(itemID: string): void;

  /* Config */

  OnReceiveConfigVars(c: (configs: string) => void): void;
  OnReceiveConfigVar(c: (config: any) => void): void;
  OnConfigVarChanged(c: (isChangeSuccessful: boolean) => void): void;
  SaveConfigChanges(): void;
  OnSavedConfigChanges(c: () => void): void;
  RestoreConfigDefaults(tag: tags): void;
  ChangeConfigVar(variable: string, value: string): void;
  CancelChangeConfig(variable: string): void;
  CancelAllConfigChanges(tag: tags): void;
  GetConfigVars(tag: tags): void;
  GetConfigVar(variable: string): void;

  /* Building */
  OnBuildingModeChanged(c: (buildingMode: boolean) => void): void;
  OnReceiveBlocks(c: (buildingDict: any) => void): void;
  OnReceiveScreenShot(c: (screenShotString: any) => void): void;
  OnReceiveBlockTags(c: (blockID: number, tagDict: any) => void): void;
  OnCopyBlueprint(c: () => void): void;
  OnNewBlueprint(c: (index: number, name: string) => void): void;
  ToggleBuildingMode(): void;
  SetBuildingMode(c: (newMode: number) => void): void;
  RequestBlocks(): void;
  RequestBlockTags(c: (blockID: number) => void): void;
  ChangeBlockType(c: (newType: number) => void): void;
  SelectBlueprint(c: (index: number) => void): void;
  SaveBlueprint(c: (name: string) => void): void;
  RequestBlueprints(): void;
  CommitBlock(): void;
  CancelBlockPlacement(): void;
  BlockRotateX(): void;
  BlockRotateY(): void;
  BlockRotateZ(): void;
  RemoveIslands(): void;
  ApplyStability(): void;
  BlockFlipX(): void;
  BlockFlipY(): void;
  BlockFlipZ(): void;
  CopyBlueprint(): void;
  PasteBlueprint(): void;

  OpenScreenshotShare(): void;
  TakeScreenshot(): void;

  /* Announcement */

  OnAnnouncement(c: (message: string, type: number) => void): void;

  /* Character */

  OnCharacterIDChanged(c: (id: string) => void): void;
  OnCharacterFactionChanged(c: (faction: number) => void): void;
  OnCharacterRaceChanged(c: (race: race) => void): void;
  OnCharacterNameChanged(c: (name: string) => void): void;
  OnCharacterHealthChanged(c: (health: number, maxHealth: number) => void): void;
  OnCharacterStaminaChanged(c: (stamina: number, maxStamina: number) => void): void;
  OnCharacterEffectsChanged(c: (effects: string) => void): void;

  /* EMOTE */

  Emote(emote: number): void;

  /* Enemy Target */

  OnEnemyTargetNameChanged(callback: (name: string) => void): void;
  OnEnemyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void;
  OnEnemyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void;
  OnEnemyTargetEffectsChanged(callback: (effects: string) => void): void;

  /* Friendly Target */

  OnFriendlyTargetNameChanged(callback: (name: string) => void): void;
  OnFriendlyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void;
  OnFriendlyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void;
  OnFriendlyTargetEffectsChanged(callback: (effects: string) => void): void;

  /* Chat */

  OnBeginChat(c: (commandMode: number, text: string) => void): void;
  OnChat(c: (type: number, from: string, body: string, nick: string, iscse: boolean) => void): void;
  SendChat(type: number, to: string, body: string): void;
  JoinMUC(room: string): void;
  LeaveMUC(room: string): void;
  SendSlashCommand(command: string, parameters: string): void;
  Stuck(): void;
  ChangeZone(zoneID: number): void;

  /* Ability Crafting */

  ShowAbility(abilityID: string): void;
  OnShowAbility(callback: (abilityID: string) => void): void;

  EditAbility(abilityID: string): void;
  OnEditAbility(callback: (abilityID: string) => void): void;

  AbilityCreated(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string, ability: string): void;
  OnAbilityCreated(callback: (abilityID: string, ability: string) => void): void;

  AbilityDeleted(abilityID: string): void;
  OnAbilityDeleted(callback: (abilityID: string) => void): void;

  RegisterAbility(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string): void;
  OnAbilityRegistered(callback: (abilityID: string, cooldowns: string, duration: number, triggerTime: number) => void): void;

  /* Stats */

  fps: number;
  frameTime: number;
  netstats_udpPackets: number;
  netstats_udpBytes: number;
  netstats_tcpMessages: number;
  netstats_tcpBytes: number;
  netstats_players_updateBits: number;
  netstats_players_updateCount: number;
  netstats_players_newCount: number;
  netstats_players_newBits: number;
  netstats_lag: number;
  netstats_delay: number;
  netstats_selfUpdatesPerSec: number;
  netstats_syncsPerSec: number;
  particlesRenderedCount: number;
  characters: number;
  terrain: number;
  perfHUD: string;

  /* Physics Debugging */

  locationX: number;
  locationY: number;
  locationZ: number;
  serverLocationX: number;
  serverLocationY: number;
  serverLocationZ: number;
  facing: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
  speed: number;
  horizontalSpeed: number;
  velFacing: number;
  downCollisionAngle: number;
  terrainCollisionAngle: number;

  /* Console */

  OnConsoleText(c: (text: string) => void): void;
  ConsoleCommand(body: string): void;

  /* Login */

  Connect(host: string, port: string, character: string, webAPIHost: string): void;

  /* Logging */
  OnLogMessage(c: (category: string, level: number, time: string, process: number, thread: number, message: string) => void): void;
}

export default clientInterface;
