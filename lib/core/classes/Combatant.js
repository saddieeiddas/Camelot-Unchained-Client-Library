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

var Combatant = (function () {
    function Combatant() {
        var combatant = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Combatant);

        this.name = combatant.name || "";
        this.health = combatant.health || 0;
        this.maxHealth = combatant.maxHealth || 0;
        this.stamina = combatant.stamina || 0;
        this.maxStamina = combatant.maxStamina || 0;
        this.injuries = combatant.injuries || [];
    }

    /**
     *  Reset combatant state to nil [for when not got a target]
     */

    _createClass(Combatant, [{
        key: "reset",
        value: function reset() {
            this.name = "";
            this.health = 0;
            this.maxHealth = 0;
            this.stamina = 0;
            this.maxStamina = 0;
            this.injuries = [];
        }
    }, {
        key: "setRace",
        value: function setRace(race) {}
        // override to support race
    }, {
        key: "setArchetype",
        value: function setArchetype(archetype) {}
        /// override to support archetype
    }, {
        key: "setName",
        value: function setName(name) {
            this.name = name;
        }
    }, {
        key: "setHealth",
        value: function setHealth(health, maxHealth) {
            this.health = health;
            this.maxHealth = maxHealth;
        }
    }, {
        key: "setStamina",
        value: function setStamina(stamina, maxStamina) {
            this.stamina = stamina;
            this.maxStamina = maxStamina;
        }
    }, {
        key: "setInjury",
        value: function setInjury(part, health, maxHealth, wounds) {
            var injury = this.injuries[part] = this.injuries[part] || {};
            injury.part = part;
            injury.health = health;
            injury.maxHealth = maxHealth;
            injury.wounds = wounds;
        }
    }], [{
        key: "create",
        value: function create() {
            var a = new Combatant();
            return a;
        }
    }]);

    return Combatant;
})();

exports["default"] = Combatant;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Db21iYXRhbnQudHMiXSwibmFtZXMiOlsiQ29tYmF0YW50IiwiQ29tYmF0YW50LmNvbnN0cnVjdG9yIiwiQ29tYmF0YW50LnJlc2V0IiwiQ29tYmF0YW50LnNldFJhY2UiLCJDb21iYXRhbnQuc2V0QXJjaGV0eXBlIiwiQ29tYmF0YW50LnNldE5hbWUiLCJDb21iYXRhbnQuc2V0SGVhbHRoIiwiQ29tYmF0YW50LnNldFN0YW1pbmEiLCJDb21iYXRhbnQuc2V0SW5qdXJ5IiwiQ29tYmF0YW50LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JBLFNBQUE7QUFVRUEsYUFWRixTQUFBLEdBVXVDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFWdkMsU0FBQTs7QUFXSUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDakNBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFjQSxFQUFFQSxDQUFDQTtLQUNwREE7Ozs7OztpQkFqQkgsU0FBQTs7ZUFzQk9ELGlCQUFBQTtBQUNIRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7QUFDZkEsZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO0FBQ2hCQSxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7QUFDbkJBLGdCQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNqQkEsZ0JBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBO0FBQ3BCQSxnQkFBSUEsQ0FBQ0EsUUFBUUEsR0FBYUEsRUFBRUEsQ0FBQ0E7U0FDOUJBOzs7ZUFFTUYsaUJBQUNBLElBQVVBLEVBQUFBLEVBQUtHOzs7O2VBQ1hILHNCQUFDQSxTQUFvQkEsRUFBQUEsRUFBTUk7Ozs7ZUFFaENKLGlCQUFDQSxJQUFZQSxFQUFBQTtBQUNsQkssZ0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1NBQ2xCQTs7O2VBRVFMLG1CQUFDQSxNQUFjQSxFQUFFQSxTQUFpQkEsRUFBQUE7QUFDekNNLGdCQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtBQUNyQkEsZ0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO1NBQzVCQTs7O2VBRVNOLG9CQUFDQSxPQUFlQSxFQUFFQSxVQUFrQkEsRUFBQUE7QUFDNUNPLGdCQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtBQUN2QkEsZ0JBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1NBQzlCQTs7O2VBRVFQLG1CQUFDQSxJQUFZQSxFQUFFQSxNQUFjQSxFQUFFQSxTQUFpQkEsRUFBRUEsTUFBY0EsRUFBQUE7QUFDdkVRLGdCQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFZQSxFQUFFQSxDQUFDQTtBQUNyRUEsa0JBQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0FBQ25CQSxrQkFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDdkJBLGtCQUFNQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtBQUM3QkEsa0JBQU1BLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1NBQ3hCQTs7O2VBRVlSLGtCQUFBQTtBQUNYUyxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBM0RILFNBQUE7OztxQkErRGUsU0FBUyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvQ29tYmF0YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCByYWNlIGZyb20gJy4uL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBhcmNoZXR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2FyY2hldHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5qdXJ5IHtcbiAgcGFydDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHdvdW5kczogbnVtYmVyO1xufVxuXG5jbGFzcyBDb21iYXRhbnQge1xuXG4gIG5hbWU6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzdGFtaW5hOiBudW1iZXI7XG4gIG1heFN0YW1pbmE6IG51bWJlcjtcblxuICBpbmp1cmllczogSW5qdXJ5W107XG5cbiAgY29uc3RydWN0b3IoY29tYmF0YW50ID0gPENvbWJhdGFudD57fSkge1xuICAgIHRoaXMubmFtZSA9IGNvbWJhdGFudC5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5oZWFsdGggPSBjb21iYXRhbnQuaGVhbHRoIHx8IDA7XG4gICAgdGhpcy5tYXhIZWFsdGggPSBjb21iYXRhbnQubWF4SGVhbHRoIHx8IDA7XG4gICAgdGhpcy5zdGFtaW5hID0gY29tYmF0YW50LnN0YW1pbmEgfHwgMDtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSBjb21iYXRhbnQubWF4U3RhbWluYSB8fCAwO1xuICAgIHRoaXMuaW5qdXJpZXMgPSBjb21iYXRhbnQuaW5qdXJpZXMgfHwgPEluanVyeVtdPltdO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXNldCBjb21iYXRhbnQgc3RhdGUgdG8gbmlsIFtmb3Igd2hlbiBub3QgZ290IGEgdGFyZ2V0XVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB0aGlzLmhlYWx0aCA9IDA7XG4gICAgdGhpcy5tYXhIZWFsdGggPSAwO1xuICAgIHRoaXMuc3RhbWluYSA9IDA7XG4gICAgdGhpcy5tYXhTdGFtaW5hID0gMDtcbiAgICB0aGlzLmluanVyaWVzID0gPEluanVyeVtdPltdO1xuICB9XG5cbiAgc2V0UmFjZShyYWNlOiByYWNlKSB7IH0gLy8gb3ZlcnJpZGUgdG8gc3VwcG9ydCByYWNlXG4gIHNldEFyY2hldHlwZShhcmNoZXR5cGU6IGFyY2hldHlwZSkgIHsgfSAvLy8gb3ZlcnJpZGUgdG8gc3VwcG9ydCBhcmNoZXR5cGVcblxuICBzZXROYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gIH1cblxuICBzZXRTdGFtaW5hKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGFtaW5hID0gc3RhbWluYTtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSBtYXhTdGFtaW5hO1xuICB9XG5cbiAgc2V0SW5qdXJ5KHBhcnQ6IG51bWJlciwgaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyLCB3b3VuZHM6IG51bWJlcikge1xuICAgIGxldCBpbmp1cnkgPSB0aGlzLmluanVyaWVzW3BhcnRdID0gdGhpcy5pbmp1cmllc1twYXJ0XSB8fCA8SW5qdXJ5Pnt9O1xuICAgIGluanVyeS5wYXJ0ID0gcGFydDtcbiAgICBpbmp1cnkuaGVhbHRoID0gaGVhbHRoO1xuICAgIGluanVyeS5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gICAgaW5qdXJ5LndvdW5kcyA9IHdvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ29tYmF0YW50KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21iYXRhbnQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
