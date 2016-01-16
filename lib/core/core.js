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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFNeUIsZ0JBQWdCOzs7O3NCQUV0QixVQUFVOzs7O29EQUdMLDBDQUEwQzs7Ozt5Q0FDckMsOEJBQThCOzs7O2tDQUNyQyx1QkFBdUI7Ozs7b0NBQ3JCLHlCQUF5Qjs7OztrQ0FDM0IsdUJBQXVCOzs7OytCQUMxQixvQkFBb0I7Ozs7NkJBQ3RCLGtCQUFrQjs7OztvQ0FDWCx5QkFBeUI7Ozs7MENBQ25CLCtCQUErQjs7OztpQ0FDeEMsc0JBQXNCOzs7O2lDQUN0QixzQkFBc0I7Ozs7Ozs4QkFNdkIsbUJBQW1COzs7O21DQUNkLHdCQUF3Qjs7OztnQ0FDM0IscUJBQXFCOzs7OzZCQUN4QixrQkFBa0I7Ozs7Z0NBQ2YscUJBQXFCOzs7O2tDQUNuQix1QkFBdUI7Ozs7NkJBQzVCLGtCQUFrQjs7OztpQ0FDZCxzQkFBc0I7Ozs7Z0NBQ3ZCLHFCQUFxQjs7OzsyQkFDMUIsZ0JBQWdCOzs7O21DQUNSLHdCQUF3Qjs7Ozs0QkFibkMsaUJBQWlCOzs7O1FBaUI3QixZQUFZO1FBRVosTUFBTTtRQUdOLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFdBQVc7UUFDWCxTQUFTO1FBQ1QsTUFBTTtRQUNOLElBQUk7UUFDSixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixRQUFRO1FBR1IsT0FBTztRQUNQLFlBQVk7UUFDWixTQUFTO1FBQ1QsTUFBTTtRQUNOLFNBQVM7UUFDVCxXQUFXO1FBQ1gsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsSUFBSTtRQUNKLFlBQVkiLCJmaWxlIjoiY29yZS9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBDb3JlU2V0dGluZ3MgZnJvbSAnLi9Db3JlU2V0dGluZ3MnO1xuaW1wb3J0IGNsaWVudEludGVyZmFjZSBmcm9tICcuL2NsaWVudEludGVyZmFjZSc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcblxuLy8gY29uc3RhbnRzXG5pbXBvcnQgYWJpbGl0eVRhZ3MgZnJvbSAnLi9jb25zdGFudHMvYWJpbGl0eUNvbnN0YW50cy9hYmlsaXR5VGFncyc7XG5pbXBvcnQgYW5ub3VuY2VtZW50VHlwZSBmcm9tICcuL2NvbnN0YW50cy9hbm5vdW5jZW1lbnRUeXBlJztcbmltcG9ydCBhcmNoZXR5cGUgZnJvbSAnLi9jb25zdGFudHMvYXJjaGV0eXBlJztcbmltcG9ydCBidWlsZFVJTW9kZSBmcm9tICcuL2NvbnN0YW50cy9idWlsZFVJTW9kZSc7XG5pbXBvcnQgY2hhbm5lbElkIGZyb20gJy4vY29uc3RhbnRzL2NoYW5uZWxJZCc7XG5pbXBvcnQgZW1vdGVzIGZyb20gJy4vY29uc3RhbnRzL2Vtb3Rlcyc7XG5pbXBvcnQgcmFjZSBmcm9tICcuL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBzb3VuZEV2ZW50cyBmcm9tICcuL2NvbnN0YW50cy9zb3VuZEV2ZW50cyc7XG5pbXBvcnQgdGFnQ29uc3RyYWludFR5cGUgZnJvbSAnLi9jb25zdGFudHMvdGFnQ29uc3RyYWludFR5cGUnO1xuaW1wb3J0IGl0ZW1UeXBlIGZyb20gJy4vY29uc3RhbnRzL2l0ZW1UeXBlJztcbmltcG9ydCBnZWFyU2xvdCBmcm9tICcuL2NvbnN0YW50cy9nZWFyU2xvdCc7XG5cbi8vIGNvbmZpZ1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvY29uZmlnJztcblxuLy8gY2xhc3Nlc1xuaW1wb3J0IEFiaWxpdHkgZnJvbSAnLi9jbGFzc2VzL0FiaWxpdHknO1xuaW1wb3J0IEFubm91bmNlbWVudCBmcm9tICcuL2NsYXNzZXMvQW5ub3VuY2VtZW50JztcbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9jbGFzc2VzL0NvbWJhdGFudCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY2xhc3Nlcy9QbGF5ZXInO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL2NsYXNzZXMvQ2hhcmFjdGVyJztcbmltcG9ydCBDb250cm9sR2FtZSBmcm9tICcuL2NsYXNzZXMvQ29udHJvbEdhbWUnO1xuaW1wb3J0IEluanVyeSBmcm9tICcuL2NsYXNzZXMvSW5qdXJ5JztcbmltcG9ydCBQb3B1bGF0aW9uIGZyb20gJy4vY2xhc3Nlcy9Qb3B1bGF0aW9uJztcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9jbGFzc2VzL0ludmVudG9yeSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2NsYXNzZXMvSXRlbSc7XG5pbXBvcnQgRXF1aXBwZWRHZWFyIGZyb20gJy4vY2xhc3Nlcy9FcXVpcHBlZEdlYXInO1xuXG5leHBvcnQge1xuICAvLyBjb3JlXG4gIENvcmVTZXR0aW5ncyxcbiAgY2xpZW50SW50ZXJmYWNlLFxuICBjbGllbnQsXG5cbiAgLy8gY29yZSBjb25zdGFudHNcbiAgYWJpbGl0eVRhZ3MsXG4gIGFubm91bmNlbWVudFR5cGUsXG4gIGFyY2hldHlwZSxcbiAgYnVpbGRVSU1vZGUsXG4gIGNoYW5uZWxJZCxcbiAgZW1vdGVzLFxuICByYWNlLFxuICBzb3VuZEV2ZW50cyxcbiAgdGFnQ29uc3RyYWludFR5cGUsXG4gIGl0ZW1UeXBlLFxuICBnZWFyU2xvdCxcblxuICAvLyBjb3JlIGNsYXNzZXNcbiAgQWJpbGl0eSxcbiAgQW5ub3VuY2VtZW50LFxuICBDb21iYXRhbnQsXG4gIFBsYXllcixcbiAgQ2hhcmFjdGVyLFxuICBDb250cm9sR2FtZSxcbiAgSW5qdXJ5LFxuICBQb3B1bGF0aW9uLFxuICBJbnZlbnRvcnksXG4gIEl0ZW0sXG4gIEVxdWlwcGVkR2Vhcixcbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
