/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ConfigVar = (function () {
    function ConfigVar() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ConfigVar);

        this.id = config.id || -1;
        this.category = config.category || 0;
        this.description = config.description || 'empty';
        this.value = config.value || null;
    }

    _createClass(ConfigVar, [{
        key: 'create',
        value: function create() {
            var c = new ConfigVar();
            return c;
        }
    }]);

    return ConfigVar;
})();

exports['default'] = ConfigVar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL0NvbmZpZ1Zhci50cyJdLCJuYW1lcyI6WyJDb25maWdWYXIiLCJDb25maWdWYXIuY29uc3RydWN0b3IiLCJDb25maWdWYXIuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFRQSxTQUFBO0FBTUVBLGFBTkYsU0FBQSxHQU04Q0E7WUFBaENBLE1BQU1BLHlEQUF3QkEsRUFBRUE7OzhCQU45QyxTQUFBOztBQU9JQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUMxQkEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsSUFBb0JBLENBQUNBLENBQUNBO0FBQ3JEQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxJQUFJQSxPQUFPQSxDQUFDQTtBQUNqREEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0E7S0FDbkNBOztpQkFYSCxTQUFBOztlQWFlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWhCSCxTQUFBOzs7cUJBbUJlLFNBQVMiLCJmaWxlIjoiY29yZS9jb25maWcvQ29uZmlnVmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBjb25maWdDYXRlZ29yeSBmcm9tICcuL2NvbmZpZ0NhdGVnb3J5JztcblxuY2xhc3MgQ29uZmlnVmFyICB7XG4gIHB1YmxpYyBpZDogbnVtYmVyO1xuICBwdWJsaWMgY2F0ZWdvcnk6IGNvbmZpZ0NhdGVnb3J5O1xuICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWc6Q29uZmlnVmFyID0gPENvbmZpZ1Zhcj57fSkge1xuICAgIHRoaXMuaWQgPSBjb25maWcuaWQgfHwgLTE7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNvbmZpZy5jYXRlZ29yeSB8fCA8Y29uZmlnQ2F0ZWdvcnk+MDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uIHx8ICdlbXB0eSc7XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCBudWxsO1xuICB9XG4gIFxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIGxldCBjID0gbmV3IENvbmZpZ1ZhcigpO1xuICAgIHJldHVybiBjO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1ZhcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
