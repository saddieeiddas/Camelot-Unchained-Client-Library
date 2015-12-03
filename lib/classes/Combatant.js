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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQ29tYmF0YW50LnRzIl0sIm5hbWVzIjpbIkNvbWJhdGFudCIsIkNvbWJhdGFudC5jb25zdHJ1Y3RvciIsIkNvbWJhdGFudC5yZXNldCIsIkNvbWJhdGFudC5zZXRSYWNlIiwiQ29tYmF0YW50LnNldEFyY2hldHlwZSIsIkNvbWJhdGFudC5zZXROYW1lIiwiQ29tYmF0YW50LnNldEhlYWx0aCIsIkNvbWJhdGFudC5zZXRTdGFtaW5hIiwiQ29tYmF0YW50LnNldEluanVyeSIsIkNvbWJhdGFudC5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQWdCQSxTQUFBO0FBVUVBLGFBVkYsU0FBQSxHQVV1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBVnZDLFNBQUE7O0FBV0lDLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2pDQSxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBY0EsRUFBRUEsQ0FBQ0E7S0FDcERBOzs7Ozs7aUJBakJILFNBQUE7O2VBc0JPRCxpQkFBQUE7QUFDSEUsZ0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO0FBQ2ZBLGdCQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNoQkEsZ0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO0FBQ25CQSxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7QUFDakJBLGdCQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNwQkEsZ0JBQUlBLENBQUNBLFFBQVFBLEdBQWFBLEVBQUVBLENBQUNBO1NBQzlCQTs7O2VBRU1GLGlCQUFDQSxJQUFVQSxFQUFBQSxFQUFLRzs7OztlQUNYSCxzQkFBQ0EsU0FBb0JBLEVBQUFBLEVBQU1JOzs7O2VBRWhDSixpQkFBQ0EsSUFBWUEsRUFBQUE7QUFDbEJLLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVRTCxtQkFBQ0EsTUFBY0EsRUFBRUEsU0FBaUJBLEVBQUFBO0FBQ3pDTSxnQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDckJBLGdCQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtTQUM1QkE7OztlQUVTTixvQkFBQ0EsT0FBZUEsRUFBRUEsVUFBa0JBLEVBQUFBO0FBQzVDTyxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7QUFDdkJBLGdCQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtTQUM5QkE7OztlQUVRUCxtQkFBQ0EsSUFBWUEsRUFBRUEsTUFBY0EsRUFBRUEsU0FBaUJBLEVBQUVBLE1BQWNBLEVBQUFBO0FBQ3ZFUSxnQkFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBWUEsRUFBRUEsQ0FBQ0E7QUFDckVBLGtCQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNuQkEsa0JBQU1BLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO0FBQ3ZCQSxrQkFBTUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7QUFDN0JBLGtCQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtTQUN4QkE7OztlQUVZUixrQkFBQUE7QUFDWFMsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTNESCxTQUFBOzs7cUJBK0RlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9Db21iYXRhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xuaW1wb3J0IGFyY2hldHlwZSBmcm9tICcuLi9jb25zdGFudHMvYXJjaGV0eXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbmp1cnkge1xuICBwYXJ0OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgd291bmRzOiBudW1iZXI7XG59XG5cbmNsYXNzIENvbWJhdGFudCB7XG5cbiAgbmFtZTogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHN0YW1pbmE6IG51bWJlcjtcbiAgbWF4U3RhbWluYTogbnVtYmVyO1xuXG4gIGluanVyaWVzOiBJbmp1cnlbXTtcblxuICBjb25zdHJ1Y3Rvcihjb21iYXRhbnQgPSA8Q29tYmF0YW50Pnt9KSB7XG4gICAgdGhpcy5uYW1lID0gY29tYmF0YW50Lm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmhlYWx0aCA9IGNvbWJhdGFudC5oZWFsdGggfHwgMDtcbiAgICB0aGlzLm1heEhlYWx0aCA9IGNvbWJhdGFudC5tYXhIZWFsdGggfHwgMDtcbiAgICB0aGlzLnN0YW1pbmEgPSBjb21iYXRhbnQuc3RhbWluYSB8fCAwO1xuICAgIHRoaXMubWF4U3RhbWluYSA9IGNvbWJhdGFudC5tYXhTdGFtaW5hIHx8IDA7XG4gICAgdGhpcy5pbmp1cmllcyA9IGNvbWJhdGFudC5pbmp1cmllcyB8fCA8SW5qdXJ5W10+W107XG4gIH1cblxuICAvKipcbiAgICogIFJlc2V0IGNvbWJhdGFudCBzdGF0ZSB0byBuaWwgW2ZvciB3aGVuIG5vdCBnb3QgYSB0YXJnZXRdXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgIHRoaXMuaGVhbHRoID0gMDtcbiAgICB0aGlzLm1heEhlYWx0aCA9IDA7XG4gICAgdGhpcy5zdGFtaW5hID0gMDtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSAwO1xuICAgIHRoaXMuaW5qdXJpZXMgPSA8SW5qdXJ5W10+W107XG4gIH1cblxuICBzZXRSYWNlKHJhY2U6IHJhY2UpIHsgfSAvLyBvdmVycmlkZSB0byBzdXBwb3J0IHJhY2VcbiAgc2V0QXJjaGV0eXBlKGFyY2hldHlwZTogYXJjaGV0eXBlKSAgeyB9IC8vLyBvdmVycmlkZSB0byBzdXBwb3J0IGFyY2hldHlwZVxuXG4gIHNldE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEhlYWx0aChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICB0aGlzLm1heEhlYWx0aCA9IG1heEhlYWx0aDtcbiAgfVxuXG4gIHNldFN0YW1pbmEoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YW1pbmEgPSBzdGFtaW5hO1xuICAgIHRoaXMubWF4U3RhbWluYSA9IG1heFN0YW1pbmE7XG4gIH1cblxuICBzZXRJbmp1cnkocGFydDogbnVtYmVyLCBoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIsIHdvdW5kczogbnVtYmVyKSB7XG4gICAgbGV0IGluanVyeSA9IHRoaXMuaW5qdXJpZXNbcGFydF0gPSB0aGlzLmluanVyaWVzW3BhcnRdIHx8IDxJbmp1cnk+e307XG4gICAgaW5qdXJ5LnBhcnQgPSBwYXJ0O1xuICAgIGluanVyeS5oZWFsdGggPSBoZWFsdGg7XG4gICAgaW5qdXJ5Lm1heEhlYWx0aCA9IG1heEhlYWx0aDtcbiAgICBpbmp1cnkud291bmRzID0gd291bmRzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDb21iYXRhbnQoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJhdGFudDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
