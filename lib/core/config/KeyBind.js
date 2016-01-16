/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _keyboardModifier = require('./keyboardModifier');

var _keyboardModifier2 = _interopRequireDefault(_keyboardModifier);

var _dxKeyCodes = require('./dxKeyCodes');

var _dxKeyCodes2 = _interopRequireDefault(_dxKeyCodes);

var KeyBind = function KeyBind() {
    var _this = this;

    _classCallCheck(this, KeyBind);

    this.primaryToString = function () {
        var s = '';
        if (_this.primaryModifiers & _keyboardModifier2['default'].CTRL) s += 'CTRL + ';
        if (_this.primaryModifiers & _keyboardModifier2['default'].ALT) s += 'ALT + ';
        if (_this.primaryModifiers & _keyboardModifier2['default'].SHIFT) s += 'SHIFT + ';
        return s + _dxKeyCodes2['default'][_this.primaryKeyCode];
    };
    this.secondaryToString = function () {
        var s = '';
        if (_this.secondaryModifiers & _keyboardModifier2['default'].CTRL) s += 'CTRL + ';
        if (_this.secondaryModifiers & _keyboardModifier2['default'].ALT) s += 'ALT + ';
        if (_this.secondaryModifiers & _keyboardModifier2['default'].SHIFT) s += 'SHIFT + ';
        return s + _dxKeyCodes2['default'][_this.secondaryKeyCode];
    };
};

exports['default'] = KeyBind;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL0tleUJpbmQudHMiXSwibmFtZXMiOlsiS2V5QmluZCIsIktleUJpbmQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztnQ0FNNkIsb0JBQW9COzs7OzBCQUMxQixjQUFjOzs7O0lBRXJDLE9BQUEsR0FBQUEsU0FBQSxPQUFBLEdBQUFBOzs7MEJBQUEsT0FBQTs7QUFTU0MsUUFBQUEsQ0FBQUEsZUFBZUEsR0FBR0EsWUFBQUE7QUFDdkJBLFlBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0FBQ1hBLFlBQUlBLE1BQUtBLGdCQUFnQkEsR0FBR0EsOEJBQWlCQSxJQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQTtBQUNsRUEsWUFBSUEsTUFBS0EsZ0JBQWdCQSxHQUFHQSw4QkFBaUJBLEdBQUdBLEVBQUVBLENBQUNBLElBQUlBLFFBQVFBLENBQUNBO0FBQ2hFQSxZQUFJQSxNQUFLQSxnQkFBZ0JBLEdBQUdBLDhCQUFpQkEsS0FBS0EsRUFBRUEsQ0FBQ0EsSUFBSUEsVUFBVUEsQ0FBQ0E7QUFDcEVBLGVBQU9BLENBQUNBLEdBQUdBLHdCQUFXQSxNQUFLQSxjQUFjQSxDQUFDQSxDQUFDQTtLQUM1Q0EsQ0FBQUE7QUFFTUEsUUFBQUEsQ0FBQUEsaUJBQWlCQSxHQUFHQSxZQUFBQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7QUFDWEEsWUFBSUEsTUFBS0Esa0JBQWtCQSxHQUFHQSw4QkFBaUJBLElBQUlBLEVBQUVBLENBQUNBLElBQUlBLFNBQVNBLENBQUNBO0FBQ3BFQSxZQUFJQSxNQUFLQSxrQkFBa0JBLEdBQUdBLDhCQUFpQkEsR0FBR0EsRUFBRUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0E7QUFDbEVBLFlBQUlBLE1BQUtBLGtCQUFrQkEsR0FBR0EsOEJBQWlCQSxLQUFLQSxFQUFFQSxDQUFDQSxJQUFJQSxVQUFVQSxDQUFDQTtBQUN0RUEsZUFBT0EsQ0FBQ0EsR0FBR0Esd0JBQVdBLE1BQUtBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7S0FDOUNBLENBQUFBO0NBQ0ZBOztxQkFFYyxPQUFPIiwiZmlsZSI6ImNvcmUvY29uZmlnL0tleUJpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IGtleWJvYXJkTW9kaWZpZXIgZnJvbSAnLi9rZXlib2FyZE1vZGlmaWVyJztcbmltcG9ydCBkeEtleUNvZGVzIGZyb20gJy4vZHhLZXlDb2Rlcyc7XG5cbmNsYXNzIEtleUJpbmQge1xuICBwdWJsaWMgcHJpbWFyeUtleUNvZGU6IG51bWJlcjtcbiAgcHVibGljIHByaW1hcnlNb2RpZmllcnM6IGtleWJvYXJkTW9kaWZpZXI7XG4gIHB1YmxpYyBzZWNvbmRhcnlLZXlDb2RlOiBudW1iZXI7XG4gIHB1YmxpYyBzZWNvbmRhcnlNb2RpZmllcnM6IGtleWJvYXJkTW9kaWZpZXI7XG4gIHB1YmxpYyBkZWZhdWx0OiBudW1iZXI7XG4gIHB1YmxpYyBkZWZhdWx0TW9kaWZpZXJzOiBrZXlib2FyZE1vZGlmaWVyO1xuICBcbiAgXG4gIHB1YmxpYyBwcmltYXJ5VG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcbiAgICBsZXQgcyA9ICcnO1xuICAgIGlmICh0aGlzLnByaW1hcnlNb2RpZmllcnMgJiBrZXlib2FyZE1vZGlmaWVyLkNUUkwpIHMgKz0gJ0NUUkwgKyAnO1xuICAgIGlmICh0aGlzLnByaW1hcnlNb2RpZmllcnMgJiBrZXlib2FyZE1vZGlmaWVyLkFMVCkgcyArPSAnQUxUICsgJztcbiAgICBpZiAodGhpcy5wcmltYXJ5TW9kaWZpZXJzICYga2V5Ym9hcmRNb2RpZmllci5TSElGVCkgcyArPSAnU0hJRlQgKyAnO1xuICAgIHJldHVybiBzICsgZHhLZXlDb2Rlc1t0aGlzLnByaW1hcnlLZXlDb2RlXTtcbiAgfVxuICBcbiAgcHVibGljIHNlY29uZGFyeVRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XG4gICAgbGV0IHMgPSAnJztcbiAgICBpZiAodGhpcy5zZWNvbmRhcnlNb2RpZmllcnMgJiBrZXlib2FyZE1vZGlmaWVyLkNUUkwpIHMgKz0gJ0NUUkwgKyAnO1xuICAgIGlmICh0aGlzLnNlY29uZGFyeU1vZGlmaWVycyAmIGtleWJvYXJkTW9kaWZpZXIuQUxUKSBzICs9ICdBTFQgKyAnO1xuICAgIGlmICh0aGlzLnNlY29uZGFyeU1vZGlmaWVycyAmIGtleWJvYXJkTW9kaWZpZXIuU0hJRlQpIHMgKz0gJ1NISUZUICsgJztcbiAgICByZXR1cm4gcyArIGR4S2V5Q29kZXNbdGhpcy5zZWNvbmRhcnlLZXlDb2RlXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
