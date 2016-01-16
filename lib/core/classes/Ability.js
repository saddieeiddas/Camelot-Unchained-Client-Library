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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _restapiRestAPI = require('../../restapi/RestAPI');

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
        value: function getAllAbilities(loginToken, characterID, callback) {
            (0, _restapiRestAPI.getCraftedAbilities)(loginToken, characterID).then(function (data) {
                if (callback) {
                    callback(data.map(function (o) {
                        return new Ability(o);
                    }));
                }
            })["catch"](function (error) {
                console.log("error: " + error.message + " | response: " + error.response);
            });
        }
    }]);

    return Ability;
})();

exports["default"] = Ability;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9BYmlsaXR5LnRzIl0sIm5hbWVzIjpbIkFiaWxpdHkiLCJBYmlsaXR5LmNvbnN0cnVjdG9yIiwiQWJpbGl0eS5nZXRBbGxBYmlsaXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPa0MsdUJBQXVCOztJQUd6RCxPQUFBO0FBY0VBLGFBZEYsT0FBQSxHQWNtQ0E7WUFBckJBLE9BQU9BLHlEQUFZQSxFQUFFQTs7OEJBZG5DLE9BQUE7O0FBR0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVVBLEVBQUVBLENBQUNBO0FBUXRCQSxZQUFBQSxDQUFBQSxPQUFPQSxHQUFVQSxFQUFFQSxDQUFDQTtBQUNwQkEsWUFBQUEsQ0FBQUEsY0FBY0EsR0FBNEJBLElBQUlBLENBQUNBO0FBRzdDQSxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxPQUFPQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMzQkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDL0JBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3pDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxPQUFPQSxDQUFDQSxpQkFBaUJBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hEQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDckNBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLElBQUlBLEVBQUVBLENBQUNBO0FBQ3JDQSxZQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQSxjQUFjQSxJQUFJQSxJQUFJQSxDQUFDQTtBQUNyREEsWUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxPQUFPQSxDQUFDQSxpQkFBaUJBLElBQXdCQSxFQUFFQSxDQUFDQTtLQUM5RUE7O2lCQXpCSCxPQUFBOztlQTJCK0JELHlCQUFDQSxVQUFrQkEsRUFBRUEsV0FBbUJBLEVBQUVBLFFBQXdDQSxFQUFBQTtBQUM3R0UscURBQW9CQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUN6Q0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBY0EsRUFBQUE7QUFDbkJBLG9CQUFJQSxRQUFRQSxFQUFFQTtBQUNaQSw0QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsQ0FBQ0E7K0JBQUtBLElBQUlBLE9BQU9BLENBQVVBLENBQUNBLENBQUNBO3FCQUFBQSxDQUFDQSxDQUFDQSxDQUFDQTtpQkFDcERBO2FBQ0ZBLENBQUNBLFNBQ0lBLENBQUNBLFVBQUNBLEtBQVlBLEVBQUFBO0FBQ2xCQSx1QkFBT0EsQ0FBQ0EsR0FBR0EsYUFBV0EsS0FBS0EsQ0FBQ0EsT0FBT0EscUJBQXNCQSxLQUFNQSxDQUFDQSxRQUFRQSxDQUFHQSxDQUFDQTthQUM3RUEsQ0FBQ0EsQ0FBQ0E7U0FDTkE7OztXQXJDSCxPQUFBOzs7cUJBd0NlLE9BQU8iLCJmaWxlIjoiY29yZS9jbGFzc2VzL0FiaWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuLy9pbXBvcnQgKiBhcyBSZXN0IGZyb20gJy4uL3V0aWwvUmVzdEFQSSc7XG5pbXBvcnQge2dldENyYWZ0ZWRBYmlsaXRpZXN9IGZyb20gJy4uLy4uL3Jlc3RhcGkvUmVzdEFQSSc7XG5cbmltcG9ydCBBYmlsaXR5Q29tcG9uZW50IGZyb20gJy4vQWJpbGl0eUNvbXBvbmVudCc7XG5jbGFzcyBBYmlsaXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb29sZG93bnM6IGFueVtdID0gW107XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHRyaWdnZXJUaW1lT2Zmc2V0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgdG9vbHRpcDogc3RyaW5nO1xuXG4gIGFiaWxpdHlDb21wb25lbnRzOiBBYmlsaXR5Q29tcG9uZW50W107XG5cbiAgYnV0dG9uczogYW55W10gPSBbXTtcbiAgYXdhaXRpbmdVcGRhdGU6IHsgKGE6IEFiaWxpdHkpOiBhbnkgfVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhYmlsaXR5ID0gPEFiaWxpdHk+e30pIHtcbiAgICB0aGlzLmlkID0gYWJpbGl0eS5pZCB8fCBcIlwiO1xuICAgIHRoaXMuaWNvbiA9IGFiaWxpdHkuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29vbGRvd25zID0gYWJpbGl0eS5jb29sZG93bnMgfHwgW107XG4gICAgdGhpcy5kdXJhdGlvbiA9IGFiaWxpdHkuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnRyaWdnZXJUaW1lT2Zmc2V0ID0gYWJpbGl0eS50cmlnZ2VyVGltZU9mZnNldCB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGFiaWxpdHkubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMudG9vbHRpcCA9IGFiaWxpdHkudG9vbHRpcCB8fCBcIlwiO1xuICAgIHRoaXMuYnV0dG9ucyA9IGFiaWxpdHkuYnV0dG9ucyB8fCBbXTtcbiAgICB0aGlzLmF3YWl0aW5nVXBkYXRlID0gYWJpbGl0eS5hd2FpdGluZ1VwZGF0ZSB8fCBudWxsO1xuICAgIHRoaXMuYWJpbGl0eUNvbXBvbmVudHMgPSBhYmlsaXR5LmFiaWxpdHlDb21wb25lbnRzIHx8IDxBYmlsaXR5Q29tcG9uZW50W10+W107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEFsbEFiaWxpdGllcyhsb2dpblRva2VuOiBzdHJpbmcsIGNoYXJhY3RlcklEOiBzdHJpbmcsIGNhbGxiYWNrOiAoYWJpbGl0aWVzOiBBYmlsaXR5W10pID0+IHZvaWQpIHtcbiAgICBnZXRDcmFmdGVkQWJpbGl0aWVzKGxvZ2luVG9rZW4sIGNoYXJhY3RlcklEKVxuICAgICAgLnRoZW4oKGRhdGE6IE9iamVjdFtdKSA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGRhdGEubWFwKChvKSA9PiBuZXcgQWJpbGl0eSg8QWJpbGl0eT5vKSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9IHwgcmVzcG9uc2U6ICR7KDxhbnk+ZXJyb3IpLnJlc3BvbnNlfWApO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0eTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
