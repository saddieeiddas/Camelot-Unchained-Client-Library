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

var _restapiRestAPI = require('../../restapi/RestAPI');

var _restapiRestAPI2 = _interopRequireDefault(_restapiRestAPI);

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
            var rest = new _restapiRestAPI2["default"]();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9BYmlsaXR5LnRzIl0sIm5hbWVzIjpbIkFiaWxpdHkiLCJBYmlsaXR5LmNvbnN0cnVjdG9yIiwiQWJpbGl0eS5nZXRBbGxBYmlsaXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9vQix1QkFBdUI7Ozs7SUFHM0MsT0FBQTtBQWNFQSxhQWRGLE9BQUEsR0FjbUNBO1lBQXJCQSxPQUFPQSx5REFBWUEsRUFBRUE7OzhCQWRuQyxPQUFBOztBQUdFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFVQSxFQUFFQSxDQUFDQTtBQVF0QkEsWUFBQUEsQ0FBQUEsT0FBT0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFDcEJBLFlBQUFBLENBQUFBLGNBQWNBLEdBQTRCQSxJQUFJQSxDQUFDQTtBQUc3Q0EsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsT0FBT0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDM0JBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUN6Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDL0JBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLElBQUlBLEVBQUVBLENBQUNBO0FBQ3JDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNyQ0EsWUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsT0FBT0EsQ0FBQ0EsY0FBY0EsSUFBSUEsSUFBSUEsQ0FBQ0E7QUFDckRBLFlBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxJQUF3QkEsRUFBRUEsQ0FBQ0E7S0FDOUVBOztpQkF6QkgsT0FBQTs7ZUEyQitCRCx5QkFBQ0EsVUFBa0JBLEVBQUVBLFdBQW1CQSxFQUFFQSxRQUF3Q0EsRUFBQUE7QUFDN0dFLGdCQUFJQSxJQUFJQSxHQUFHQSxpQ0FBYUEsQ0FBQ0E7QUFDekJBLGdCQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLElBQWNBLEVBQUFBO0FBQzFFLG9CQUFJLFFBQVEsRUFBRTtBQUNaLDRCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7K0JBQUssSUFBSSxPQUFPLENBQVUsQ0FBQyxDQUFDO3FCQUFBLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDthQUNGLEVBQUVBLFVBQVVBLE1BQVdBLEVBQUVBLFdBQWdCQSxFQUFBQTtBQUN4Qyx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQzthQUM3RCxDQUFDQSxDQUFDQTtTQUNKQTs7O1dBcENILE9BQUE7OztxQkF1Q2UsT0FBTyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvQWJpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vL2ltcG9ydCAqIGFzIFJlc3QgZnJvbSAnLi4vdXRpbC9SZXN0QVBJJztcbmltcG9ydCBSZXN0QVBJIGZyb20gJy4uLy4uL3Jlc3RhcGkvUmVzdEFQSSc7XG5cbmltcG9ydCBBYmlsaXR5Q29tcG9uZW50IGZyb20gJy4vQWJpbGl0eUNvbXBvbmVudCc7XG5jbGFzcyBBYmlsaXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb29sZG93bnM6IGFueVtdID0gW107XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHRyaWdnZXJUaW1lT2Zmc2V0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgdG9vbHRpcDogc3RyaW5nO1xuXG4gIGFiaWxpdHlDb21wb25lbnRzOiBBYmlsaXR5Q29tcG9uZW50W107XG5cbiAgYnV0dG9uczogYW55W10gPSBbXTtcbiAgYXdhaXRpbmdVcGRhdGU6IHsgKGE6IEFiaWxpdHkpOiBhbnkgfVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhYmlsaXR5ID0gPEFiaWxpdHk+e30pIHtcbiAgICB0aGlzLmlkID0gYWJpbGl0eS5pZCB8fCBcIlwiO1xuICAgIHRoaXMuaWNvbiA9IGFiaWxpdHkuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29vbGRvd25zID0gYWJpbGl0eS5jb29sZG93bnMgfHwgW107XG4gICAgdGhpcy5kdXJhdGlvbiA9IGFiaWxpdHkuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnRyaWdnZXJUaW1lT2Zmc2V0ID0gYWJpbGl0eS50cmlnZ2VyVGltZU9mZnNldCB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGFiaWxpdHkubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMudG9vbHRpcCA9IGFiaWxpdHkudG9vbHRpcCB8fCBcIlwiO1xuICAgIHRoaXMuYnV0dG9ucyA9IGFiaWxpdHkuYnV0dG9ucyB8fCBbXTtcbiAgICB0aGlzLmF3YWl0aW5nVXBkYXRlID0gYWJpbGl0eS5hd2FpdGluZ1VwZGF0ZSB8fCBudWxsO1xuICAgIHRoaXMuYWJpbGl0eUNvbXBvbmVudHMgPSBhYmlsaXR5LmFiaWxpdHlDb21wb25lbnRzIHx8IDxBYmlsaXR5Q29tcG9uZW50W10+W107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEFsbEFiaWxpdGllcyhsb2dvblRva2VuOiBzdHJpbmcsIGNoYXJhY3RlcklEOiBzdHJpbmcsIGNhbGxiYWNrOiAoYWJpbGl0aWVzOiBBYmlsaXR5W10pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVzdCA9IG5ldyBSZXN0QVBJKCk7XG4gICAgcmVzdC5jcmFmdGVkQWJpbGl0aWVzKGxvZ29uVG9rZW4sIGNoYXJhY3RlcklEKS50aGVuKGZ1bmN0aW9uIChkYXRhOiBPYmplY3RbXSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEubWFwKChvKSA9PiBuZXcgQWJpbGl0eSg8QWJpbGl0eT5vKSkpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChzdGF0dXM6IGFueSwgZXJyb3JUaHJvd246IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXR1czogJyArIHN0YXR1cyArICcgcmVhc29uOicgKyBlcnJvclRocm93bik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0eTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
