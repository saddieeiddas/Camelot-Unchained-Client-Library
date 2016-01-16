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

var _configCategory = require('./configCategory');

var _configCategory2 = _interopRequireDefault(_configCategory);

var _configGroup = require('./configGroup');

var _configGroup2 = _interopRequireDefault(_configGroup);

var _ConfigVar = require('./ConfigVar');

var _ConfigVar2 = _interopRequireDefault(_ConfigVar);

var _dxKeyCodes = require('./dxKeyCodes');

var _dxKeyCodes2 = _interopRequireDefault(_dxKeyCodes);

var _jsKeyCodes = require('./jsKeyCodes');

var _jsKeyCodes2 = _interopRequireDefault(_jsKeyCodes);

var _jsToDXKeyCodeMap = require('./jsToDXKeyCodeMap');

var _jsToDXKeyCodeMap2 = _interopRequireDefault(_jsToDXKeyCodeMap);

var _KeyBind = require('./KeyBind');

var _KeyBind2 = _interopRequireDefault(_KeyBind);

var _KeyBindConfigVar = require('./KeyBindConfigVar');

var _KeyBindConfigVar2 = _interopRequireDefault(_KeyBindConfigVar);

var _keyboardModifier = require('./keyboardModifier');

var _keyboardModifier2 = _interopRequireDefault(_keyboardModifier);

var _AudioConfigVar = require('./AudioConfigVar');

var _AudioConfigVar2 = _interopRequireDefault(_AudioConfigVar);

var _AudioSetting = require('./AudioSetting');

_defaults(exports, _interopExportWildcard(_AudioSetting, _defaults));

exports.configCategory = _configCategory2['default'];
exports.configGroup = _configGroup2['default'];
exports.ConfigVar = _ConfigVar2['default'];
exports.dxKeyCodes = _dxKeyCodes2['default'];
exports.jsKeyCodes = _jsKeyCodes2['default'];
exports.jsToDXKeyCodeMap = _jsToDXKeyCodeMap2['default'];
exports.KeyBind = _KeyBind2['default'];
exports.KeyBindConfigVar = _KeyBindConfigVar2['default'];
exports.keyboardModifier = _keyboardModifier2['default'];
exports.AudioConfigVar = _AudioConfigVar2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNMkIsa0JBQWtCOzs7OzJCQUNyQixlQUFlOzs7O3lCQUNqQixhQUFhOzs7OzBCQUNaLGNBQWM7Ozs7MEJBQ2QsY0FBYzs7OztnQ0FDUixvQkFBb0I7Ozs7dUJBQzdCLFdBQVc7Ozs7Z0NBQ0Ysb0JBQW9COzs7O2dDQUNwQixvQkFBb0I7Ozs7OEJBQ3RCLGtCQUFrQjs7Ozs0QkFDL0IsZ0JBQWdCOzs7O1FBRzVCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWMiLCJmaWxlIjoiY29yZS9jb25maWcvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBjb25maWdDYXRlZ29yeSBmcm9tICcuL2NvbmZpZ0NhdGVnb3J5JztcbmltcG9ydCBjb25maWdHcm91cCBmcm9tICcuL2NvbmZpZ0dyb3VwJztcbmltcG9ydCBDb25maWdWYXIgZnJvbSAnLi9Db25maWdWYXInO1xuaW1wb3J0IGR4S2V5Q29kZXMgZnJvbSAnLi9keEtleUNvZGVzJztcbmltcG9ydCBqc0tleUNvZGVzIGZyb20gJy4vanNLZXlDb2Rlcyc7XG5pbXBvcnQganNUb0RYS2V5Q29kZU1hcCBmcm9tICcuL2pzVG9EWEtleUNvZGVNYXAnO1xuaW1wb3J0IEtleUJpbmQgZnJvbSAnLi9LZXlCaW5kJztcbmltcG9ydCBLZXlCaW5kQ29uZmlnVmFyIGZyb20gJy4vS2V5QmluZENvbmZpZ1Zhcic7XG5pbXBvcnQga2V5Ym9hcmRNb2RpZmllciBmcm9tICcuL2tleWJvYXJkTW9kaWZpZXInO1xuaW1wb3J0IEF1ZGlvQ29uZmlnVmFyIGZyb20gJy4vQXVkaW9Db25maWdWYXInO1xuZXhwb3J0ICogZnJvbSAnLi9BdWRpb1NldHRpbmcnO1xuXG5leHBvcnQge1xuICBjb25maWdDYXRlZ29yeSxcbiAgY29uZmlnR3JvdXAsXG4gIENvbmZpZ1ZhcixcbiAgZHhLZXlDb2RlcyxcbiAganNLZXlDb2RlcyxcbiAganNUb0RYS2V5Q29kZU1hcCxcbiAgS2V5QmluZCxcbiAgS2V5QmluZENvbmZpZ1ZhcixcbiAga2V5Ym9hcmRNb2RpZmllcixcbiAgQXVkaW9Db25maWdWYXJcbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
