/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CoreSettings = require('./CoreSettings');

var _CoreSettings2 = _interopRequireDefault(_CoreSettings);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _constantsAbilityConstantsAbilityTags = require('./constants/abilityConstants/abilityTags');

var _constantsAbilityConstantsAbilityTags2 = _interopRequireDefault(_constantsAbilityConstantsAbilityTags);

var _constantsAnnouncementType = require('./constants/announcementType');

var _constantsAnnouncementType2 = _interopRequireDefault(_constantsAnnouncementType);

var _constantsArchetype = require('./constants/archetype');

var _constantsArchetype2 = _interopRequireDefault(_constantsArchetype);

var _constantsBuildUIMode = require('./constants/buildUIMode');

var _constantsBuildUIMode2 = _interopRequireDefault(_constantsBuildUIMode);

var _constantsChannelId = require('./constants/channelId');

var _constantsChannelId2 = _interopRequireDefault(_constantsChannelId);

var _constantsEmotes = require('./constants/emotes');

var _constantsEmotes2 = _interopRequireDefault(_constantsEmotes);

var _constantsRace = require('./constants/race');

var _constantsRace2 = _interopRequireDefault(_constantsRace);

var _constantsSoundEvents = require('./constants/soundEvents');

var _constantsSoundEvents2 = _interopRequireDefault(_constantsSoundEvents);

var _constantsTagConstraintType = require('./constants/tagConstraintType');

var _constantsTagConstraintType2 = _interopRequireDefault(_constantsTagConstraintType);

var _constantsItemType = require('./constants/itemType');

var _constantsItemType2 = _interopRequireDefault(_constantsItemType);

var _constantsGearSlot = require('./constants/gearSlot');

var _constantsGearSlot2 = _interopRequireDefault(_constantsGearSlot);

// config

var _classesAbility = require('./classes/Ability');

var _classesAbility2 = _interopRequireDefault(_classesAbility);

var _classesAnnouncement = require('./classes/Announcement');

var _classesAnnouncement2 = _interopRequireDefault(_classesAnnouncement);

var _classesCombatant = require('./classes/Combatant');

var _classesCombatant2 = _interopRequireDefault(_classesCombatant);

var _classesPlayer = require('./classes/Player');

var _classesPlayer2 = _interopRequireDefault(_classesPlayer);

var _classesCharacter = require('./classes/Character');

var _classesCharacter2 = _interopRequireDefault(_classesCharacter);

var _classesControlGame = require('./classes/ControlGame');

var _classesControlGame2 = _interopRequireDefault(_classesControlGame);

var _classesInjury = require('./classes/Injury');

var _classesInjury2 = _interopRequireDefault(_classesInjury);

var _classesPopulation = require('./classes/Population');

var _classesPopulation2 = _interopRequireDefault(_classesPopulation);

var _classesInventory = require('./classes/Inventory');

var _classesInventory2 = _interopRequireDefault(_classesInventory);

var _classesItem = require('./classes/Item');

var _classesItem2 = _interopRequireDefault(_classesItem);

var _classesEquippedGear = require('./classes/EquippedGear');

var _classesEquippedGear2 = _interopRequireDefault(_classesEquippedGear);

var _classesLogMessage = require('./classes/LogMessage');

var _classesLogMessage2 = _interopRequireDefault(_classesLogMessage);

var _classesChatMessage = require('./classes/ChatMessage');

var _classesChatMessage2 = _interopRequireDefault(_classesChatMessage);

var _classesConsoleMessage = require('./classes/ConsoleMessage');

var _classesConsoleMessage2 = _interopRequireDefault(_classesConsoleMessage);

var _configConfig = require('./config/config');

_defaults(exports, _interopExportWildcard(_configConfig, _defaults));

exports.CoreSettings = _CoreSettings2['default'];
exports.client = _client2['default'];
exports.abilityTags = _constantsAbilityConstantsAbilityTags2['default'];
exports.announcementType = _constantsAnnouncementType2['default'];
exports.archetype = _constantsArchetype2['default'];
exports.buildUIMode = _constantsBuildUIMode2['default'];
exports.channelId = _constantsChannelId2['default'];
exports.emotes = _constantsEmotes2['default'];
exports.race = _constantsRace2['default'];
exports.soundEvents = _constantsSoundEvents2['default'];
exports.tagConstraintType = _constantsTagConstraintType2['default'];
exports.itemType = _constantsItemType2['default'];
exports.gearSlot = _constantsGearSlot2['default'];
exports.Ability = _classesAbility2['default'];
exports.Announcement = _classesAnnouncement2['default'];
exports.Combatant = _classesCombatant2['default'];
exports.Player = _classesPlayer2['default'];
exports.Character = _classesCharacter2['default'];
exports.ControlGame = _classesControlGame2['default'];
exports.Injury = _classesInjury2['default'];
exports.Population = _classesPopulation2['default'];
exports.Inventory = _classesInventory2['default'];
exports.Item = _classesItem2['default'];
exports.EquippedGear = _classesEquippedGear2['default'];
exports.LogMessage = _classesLogMessage2['default'];
exports.ChatMessage = _classesChatMessage2['default'];
exports.ConsoleMessage = _classesConsoleMessage2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFNeUIsZ0JBQWdCOzs7O3NCQUV0QixVQUFVOzs7O29EQUdMLDBDQUEwQzs7Ozt5Q0FDckMsOEJBQThCOzs7O2tDQUNyQyx1QkFBdUI7Ozs7b0NBQ3JCLHlCQUF5Qjs7OztrQ0FDM0IsdUJBQXVCOzs7OytCQUMxQixvQkFBb0I7Ozs7NkJBQ3RCLGtCQUFrQjs7OztvQ0FDWCx5QkFBeUI7Ozs7MENBQ25CLCtCQUErQjs7OztpQ0FDeEMsc0JBQXNCOzs7O2lDQUN0QixzQkFBc0I7Ozs7Ozs4QkFNdkIsbUJBQW1COzs7O21DQUNkLHdCQUF3Qjs7OztnQ0FDM0IscUJBQXFCOzs7OzZCQUN4QixrQkFBa0I7Ozs7Z0NBQ2YscUJBQXFCOzs7O2tDQUNuQix1QkFBdUI7Ozs7NkJBQzVCLGtCQUFrQjs7OztpQ0FDZCxzQkFBc0I7Ozs7Z0NBQ3ZCLHFCQUFxQjs7OzsyQkFDMUIsZ0JBQWdCOzs7O21DQUNSLHdCQUF3Qjs7OztpQ0FDMUIsc0JBQXNCOzs7O2tDQUNyQix1QkFBdUI7Ozs7cUNBQ3BCLDBCQUEwQjs7Ozs0QkFoQnZDLGlCQUFpQjs7OztRQW9CN0IsWUFBWTtRQUVaLE1BQU07UUFHTixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsU0FBUztRQUNULE1BQU07UUFDTixJQUFJO1FBQ0osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsUUFBUTtRQUdSLE9BQU87UUFDUCxZQUFZO1FBQ1osU0FBUztRQUNULE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztRQUNYLE1BQU07UUFDTixVQUFVO1FBQ1YsU0FBUztRQUNULElBQUk7UUFDSixZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxjQUFjIiwiZmlsZSI6ImNvcmUvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgQ29yZVNldHRpbmdzIGZyb20gJy4vQ29yZVNldHRpbmdzJztcbmltcG9ydCBjbGllbnRJbnRlcmZhY2UgZnJvbSAnLi9jbGllbnRJbnRlcmZhY2UnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XG5cbi8vIGNvbnN0YW50c1xuaW1wb3J0IGFiaWxpdHlUYWdzIGZyb20gJy4vY29uc3RhbnRzL2FiaWxpdHlDb25zdGFudHMvYWJpbGl0eVRhZ3MnO1xuaW1wb3J0IGFubm91bmNlbWVudFR5cGUgZnJvbSAnLi9jb25zdGFudHMvYW5ub3VuY2VtZW50VHlwZSc7XG5pbXBvcnQgYXJjaGV0eXBlIGZyb20gJy4vY29uc3RhbnRzL2FyY2hldHlwZSc7XG5pbXBvcnQgYnVpbGRVSU1vZGUgZnJvbSAnLi9jb25zdGFudHMvYnVpbGRVSU1vZGUnO1xuaW1wb3J0IGNoYW5uZWxJZCBmcm9tICcuL2NvbnN0YW50cy9jaGFubmVsSWQnO1xuaW1wb3J0IGVtb3RlcyBmcm9tICcuL2NvbnN0YW50cy9lbW90ZXMnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi9jb25zdGFudHMvcmFjZSc7XG5pbXBvcnQgc291bmRFdmVudHMgZnJvbSAnLi9jb25zdGFudHMvc291bmRFdmVudHMnO1xuaW1wb3J0IHRhZ0NvbnN0cmFpbnRUeXBlIGZyb20gJy4vY29uc3RhbnRzL3RhZ0NvbnN0cmFpbnRUeXBlJztcbmltcG9ydCBpdGVtVHlwZSBmcm9tICcuL2NvbnN0YW50cy9pdGVtVHlwZSc7XG5pbXBvcnQgZ2VhclNsb3QgZnJvbSAnLi9jb25zdGFudHMvZ2VhclNsb3QnO1xuXG4vLyBjb25maWdcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5cbi8vIGNsYXNzZXNcbmltcG9ydCBBYmlsaXR5IGZyb20gJy4vY2xhc3Nlcy9BYmlsaXR5JztcbmltcG9ydCBBbm5vdW5jZW1lbnQgZnJvbSAnLi9jbGFzc2VzL0Fubm91bmNlbWVudCc7XG5pbXBvcnQgQ29tYmF0YW50IGZyb20gJy4vY2xhc3Nlcy9Db21iYXRhbnQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2NsYXNzZXMvUGxheWVyJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jbGFzc2VzL0NoYXJhY3Rlcic7XG5pbXBvcnQgQ29udHJvbEdhbWUgZnJvbSAnLi9jbGFzc2VzL0NvbnRyb2xHYW1lJztcbmltcG9ydCBJbmp1cnkgZnJvbSAnLi9jbGFzc2VzL0luanVyeSc7XG5pbXBvcnQgUG9wdWxhdGlvbiBmcm9tICcuL2NsYXNzZXMvUG9wdWxhdGlvbic7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vY2xhc3Nlcy9JbnZlbnRvcnknO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9jbGFzc2VzL0l0ZW0nO1xuaW1wb3J0IEVxdWlwcGVkR2VhciBmcm9tICcuL2NsYXNzZXMvRXF1aXBwZWRHZWFyJztcbmltcG9ydCBMb2dNZXNzYWdlIGZyb20gJy4vY2xhc3Nlcy9Mb2dNZXNzYWdlJztcbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tICcuL2NsYXNzZXMvQ2hhdE1lc3NhZ2UnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlIGZyb20gJy4vY2xhc3Nlcy9Db25zb2xlTWVzc2FnZSc7XG5cbmV4cG9ydCB7XG4gIC8vIGNvcmVcbiAgQ29yZVNldHRpbmdzLFxuICBjbGllbnRJbnRlcmZhY2UsXG4gIGNsaWVudCxcblxuICAvLyBjb3JlIGNvbnN0YW50c1xuICBhYmlsaXR5VGFncyxcbiAgYW5ub3VuY2VtZW50VHlwZSxcbiAgYXJjaGV0eXBlLFxuICBidWlsZFVJTW9kZSxcbiAgY2hhbm5lbElkLFxuICBlbW90ZXMsXG4gIHJhY2UsXG4gIHNvdW5kRXZlbnRzLFxuICB0YWdDb25zdHJhaW50VHlwZSxcbiAgaXRlbVR5cGUsXG4gIGdlYXJTbG90LFxuXG4gIC8vIGNvcmUgY2xhc3Nlc1xuICBBYmlsaXR5LFxuICBBbm5vdW5jZW1lbnQsXG4gIENvbWJhdGFudCxcbiAgUGxheWVyLFxuICBDaGFyYWN0ZXIsXG4gIENvbnRyb2xHYW1lLFxuICBJbmp1cnksXG4gIFBvcHVsYXRpb24sXG4gIEludmVudG9yeSxcbiAgSXRlbSxcbiAgRXF1aXBwZWRHZWFyLFxuICBMb2dNZXNzYWdlLFxuICBDaGF0TWVzc2FnZSxcbiAgQ29uc29sZU1lc3NhZ2UsXG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
