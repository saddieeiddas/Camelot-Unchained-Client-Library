/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utilRestAPI = require('../util/RestAPI');

var _utilRestAPI2 = _interopRequireDefault(_utilRestAPI);

var Ability = (function () {
    function Ability() {
        var ability = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Ability);

        this.cooldowns = [];
        this.buttons = [];
        this.awaitingUpdate = null;
        this.id = ability.id || "";
        this.icon = ability.icon || "";
        this.cooldowns = ability.cooldowns || [];
        this.duration = ability.duration || 0;
        this.triggerTimeOffset = ability.triggerTimeOffset || 0;
        this.name = ability.name || "";
        this.tooltip = ability.tooltip || "";
        this.buttons = ability.buttons || [];
        this.awaitingUpdate = ability.awaitingUpdate || null;
        this.abilityComponents = ability.abilityComponents || [];
    }

    _createClass(Ability, null, [{
        key: "getAllAbilities",
        value: function getAllAbilities(logonToken, characterID, callback) {
            var rest = new _utilRestAPI2["default"]();
            rest.craftedAbilities(logonToken, characterID).then(function (data) {
                if (callback) {
                    callback(data.map(function (o) {
                        return new Ability(o);
                    }));
                }
            }, function (status, errorThrown) {
                console.log('status: ' + status + ' reason:' + errorThrown);
            });
        }
    }]);

    return Ability;
})();

exports["default"] = Ability;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQWJpbGl0eS50cyJdLCJuYW1lcyI6WyJBYmlsaXR5IiwiQWJpbGl0eS5jb25zdHJ1Y3RvciIsIkFiaWxpdHkuZ2V0QWxsQWJpbGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFPb0IsaUJBQWlCOzs7O0lBR3JDLE9BQUE7QUFjRUEsYUFkRixPQUFBLEdBY21DQTtZQUFyQkEsT0FBT0EseURBQVlBLEVBQUVBOzs4QkFkbkMsT0FBQTs7QUFHRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFRdEJBLFlBQUFBLENBQUFBLE9BQU9BLEdBQVVBLEVBQUVBLENBQUNBO0FBQ3BCQSxZQUFBQSxDQUFBQSxjQUFjQSxHQUE0QkEsSUFBSUEsQ0FBQ0E7QUFHN0NBLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE9BQU9BLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQzNCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDekNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLE9BQU9BLENBQUNBLGlCQUFpQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNyQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDckNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLE9BQU9BLENBQUNBLGNBQWNBLElBQUlBLElBQUlBLENBQUNBO0FBQ3JEQSxZQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLE9BQU9BLENBQUNBLGlCQUFpQkEsSUFBd0JBLEVBQUVBLENBQUNBO0tBQzlFQTs7aUJBekJILE9BQUE7O2VBMkIrQkQseUJBQUNBLFVBQWtCQSxFQUFFQSxXQUFtQkEsRUFBRUEsUUFBd0NBLEVBQUFBO0FBQzdHRSxnQkFBSUEsSUFBSUEsR0FBR0EsOEJBQWFBLENBQUNBO0FBQ3pCQSxnQkFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFjQSxFQUFBQTtBQUMxRSxvQkFBSSxRQUFRLEVBQUU7QUFDWiw0QkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDOytCQUFLLElBQUksT0FBTyxDQUFVLENBQUMsQ0FBQztxQkFBQSxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7YUFDRixFQUFFQSxVQUFVQSxNQUFXQSxFQUFFQSxXQUFnQkEsRUFBQUE7QUFDeEMsdUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDN0QsQ0FBQ0EsQ0FBQ0E7U0FDSkE7OztXQXBDSCxPQUFBOzs7cUJBdUNlLE9BQU8iLCJmaWxlIjoidHMvY2xhc3Nlcy9BYmlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbi8vaW1wb3J0ICogYXMgUmVzdCBmcm9tICcuLi91dGlsL1Jlc3RBUEknO1xuaW1wb3J0IFJlc3RBUEkgZnJvbSAnLi4vdXRpbC9SZXN0QVBJJztcblxuaW1wb3J0IEFiaWxpdHlDb21wb25lbnQgZnJvbSAnLi9BYmlsaXR5Q29tcG9uZW50JztcbmNsYXNzIEFiaWxpdHkge1xuICBpZDogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGNvb2xkb3duczogYW55W10gPSBbXTtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgdHJpZ2dlclRpbWVPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICB0b29sdGlwOiBzdHJpbmc7XG4gICAgXG4gIGFiaWxpdHlDb21wb25lbnRzOiBBYmlsaXR5Q29tcG9uZW50W107XG5cbiAgYnV0dG9uczogYW55W10gPSBbXTtcbiAgYXdhaXRpbmdVcGRhdGU6IHsgKGE6IEFiaWxpdHkpOiBhbnkgfVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhYmlsaXR5ID0gPEFiaWxpdHk+e30pIHtcbiAgICB0aGlzLmlkID0gYWJpbGl0eS5pZCB8fCBcIlwiO1xuICAgIHRoaXMuaWNvbiA9IGFiaWxpdHkuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29vbGRvd25zID0gYWJpbGl0eS5jb29sZG93bnMgfHwgW107XG4gICAgdGhpcy5kdXJhdGlvbiA9IGFiaWxpdHkuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnRyaWdnZXJUaW1lT2Zmc2V0ID0gYWJpbGl0eS50cmlnZ2VyVGltZU9mZnNldCB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGFiaWxpdHkubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMudG9vbHRpcCA9IGFiaWxpdHkudG9vbHRpcCB8fCBcIlwiO1xuICAgIHRoaXMuYnV0dG9ucyA9IGFiaWxpdHkuYnV0dG9ucyB8fCBbXTtcbiAgICB0aGlzLmF3YWl0aW5nVXBkYXRlID0gYWJpbGl0eS5hd2FpdGluZ1VwZGF0ZSB8fCBudWxsO1xuICAgIHRoaXMuYWJpbGl0eUNvbXBvbmVudHMgPSBhYmlsaXR5LmFiaWxpdHlDb21wb25lbnRzIHx8IDxBYmlsaXR5Q29tcG9uZW50W10+W107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEFsbEFiaWxpdGllcyhsb2dvblRva2VuOiBzdHJpbmcsIGNoYXJhY3RlcklEOiBzdHJpbmcsIGNhbGxiYWNrOiAoYWJpbGl0aWVzOiBBYmlsaXR5W10pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVzdCA9IG5ldyBSZXN0QVBJKCk7XG4gICAgcmVzdC5jcmFmdGVkQWJpbGl0aWVzKGxvZ29uVG9rZW4sIGNoYXJhY3RlcklEKS50aGVuKGZ1bmN0aW9uIChkYXRhOiBPYmplY3RbXSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEubWFwKChvKSA9PiBuZXcgQWJpbGl0eSg8QWJpbGl0eT5vKSkpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChzdGF0dXM6IGFueSwgZXJyb3JUaHJvd246IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXR1czogJyArIHN0YXR1cyArICcgcmVhc29uOicgKyBlcnJvclRocm93bik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0eTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
