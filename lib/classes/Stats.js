/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http//mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stats = (function () {
    function Stats() {
        var stats = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Stats);

        this.strength = stats.strength || 0;
        this.agility = stats.agility || 0;
        this.endurance = stats.endurance || 0;
        this.will = stats.will || 0;
        this.resonance = stats.resonance || 0;
        this.dexterity = stats.dexterity || 0;
        this.vitality = stats.vitality || 0;
        this.attunement = stats.attunement || 0;
        this.faith = stats.faith || 0;
        this.eyesight = stats.eyesight || 0;
        this.hearing = stats.hearing || 0;
        this.clarity = stats.clarity || 0;
        this.mass = stats.mass || 0;
        this.presence = stats.presence || 0;
        this.affinity = stats.affinity || 0;
        this.maxMoveSpeed = stats.maxMoveSpeed || 0;
        this.vision = stats.vision || 0;
        this.detection = stats.detection || 0;
        this.carryCapacity = stats.carryCapacity || 0;
        this.maxPanic = stats.maxPanic || 0;
        this.panicDelay = stats.panicDelay || 0;
        this.healthRegeneration = stats.healthRegeneration || 0;
        this.staminaRegeneration = stats.staminaRegeneration || 0;
    }

    _createClass(Stats, null, [{
        key: "create",
        value: function create() {
            var a = new Stats();
            return a;
        }
    }]);

    return Stats;
})();

exports["default"] = Stats;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvU3RhdHMudHMiXSwibmFtZXMiOlsiU3RhdHMiLCJTdGF0cy5jb25zdHJ1Y3RvciIsIlN0YXRzLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBT0EsS0FBQTtBQStCRUEsYUEvQkYsS0FBQSxHQStCK0JBO1lBQWpCQSxLQUFLQSx5REFBVUEsRUFBRUE7OzhCQS9CL0IsS0FBQTs7QUFpQ0lDLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzVCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDOUJBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRXBDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzVCQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFcENBLFlBQUlBLENBQUNBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUtBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLENBQUNBO0FBQzlDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLGtCQUFrQkEsR0FBR0EsS0FBS0EsQ0FBQ0Esa0JBQWtCQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxLQUFLQSxDQUFDQSxtQkFBbUJBLElBQUlBLENBQUNBLENBQUNBO0tBQzNEQTs7aUJBMURILEtBQUE7O2VBNERlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBO0FBQ3BCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQS9ESCxLQUFBOzs7cUJBa0VlLEtBQUsiLCJmaWxlIjoidHMvY2xhc3Nlcy9TdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHAvL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cblxuY2xhc3MgU3RhdHN7XG4gICAgXG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGFnaWxpdHk6IG51bWJlcjtcbiAgZW5kdXJhbmNlOiBudW1iZXI7XG4gIHdpbGw6IG51bWJlcjtcbiAgcmVzb25hbmNlOiBudW1iZXI7XG4gIGRleHRlcml0eTogbnVtYmVyO1xuICB2aXRhbGl0eTogbnVtYmVyO1xuICBhdHR1bmVtZW50OiBudW1iZXI7XG4gIGZhaXRoOiBudW1iZXI7XG4gIGV5ZXNpZ2h0OiBudW1iZXI7XG4gICAgXG4gICAgXG4gICAgXG4gIGhlYXJpbmc6IG51bWJlcjtcbiAgY2xhcml0eTogbnVtYmVyO1xuICBtYXNzOiBudW1iZXI7XG4gIHByZXNlbmNlOiBudW1iZXI7XG4gIGFmZmluaXR5OiBudW1iZXI7XG4gICAgXG4gICAgXG4gIG1heE1vdmVTcGVlZDogbnVtYmVyO1xuICB2aXNpb246IG51bWJlcjtcbiAgZGV0ZWN0aW9uOiBudW1iZXI7XG4gIGNhcnJ5Q2FwYWNpdHk6IG51bWJlcjtcbiAgbWF4UGFuaWM6IG51bWJlcjtcbiAgcGFuaWNEZWxheTogbnVtYmVyO1xuICBoZWFsdGhSZWdlbmVyYXRpb246IG51bWJlcjtcbiAgc3RhbWluYVJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuICAgIFxuICBjb25zdHJ1Y3RvcihzdGF0cyA9IDxTdGF0cz57fSkge1xuICAgICAgICBcbiAgICB0aGlzLnN0cmVuZ3RoID0gc3RhdHMuc3RyZW5ndGggfHwgMDtcbiAgICB0aGlzLmFnaWxpdHkgPSBzdGF0cy5hZ2lsaXR5IHx8IDA7XG4gICAgdGhpcy5lbmR1cmFuY2UgPSBzdGF0cy5lbmR1cmFuY2UgfHwgMDtcbiAgICB0aGlzLndpbGwgPSBzdGF0cy53aWxsIHx8IDA7XG4gICAgdGhpcy5yZXNvbmFuY2UgPSBzdGF0cy5yZXNvbmFuY2UgfHwgMDtcbiAgICB0aGlzLmRleHRlcml0eSA9IHN0YXRzLmRleHRlcml0eSB8fCAwO1xuICAgIHRoaXMudml0YWxpdHkgPSBzdGF0cy52aXRhbGl0eSB8fCAwO1xuICAgIHRoaXMuYXR0dW5lbWVudCA9IHN0YXRzLmF0dHVuZW1lbnQgfHwgMDtcbiAgICB0aGlzLmZhaXRoID0gc3RhdHMuZmFpdGggfHwgMDtcbiAgICB0aGlzLmV5ZXNpZ2h0ID0gc3RhdHMuZXllc2lnaHQgfHwgMDtcblxuICAgIHRoaXMuaGVhcmluZyA9IHN0YXRzLmhlYXJpbmcgfHwgMDtcbiAgICB0aGlzLmNsYXJpdHkgPSBzdGF0cy5jbGFyaXR5IHx8IDA7XG4gICAgdGhpcy5tYXNzID0gc3RhdHMubWFzcyB8fCAwO1xuICAgIHRoaXMucHJlc2VuY2UgPSBzdGF0cy5wcmVzZW5jZSB8fCAwO1xuICAgIHRoaXMuYWZmaW5pdHkgPSBzdGF0cy5hZmZpbml0eSB8fCAwO1xuXG4gICAgdGhpcy5tYXhNb3ZlU3BlZWQgPSBzdGF0cy5tYXhNb3ZlU3BlZWQgfHwgMDtcbiAgICB0aGlzLnZpc2lvbiA9IHN0YXRzLnZpc2lvbiB8fCAwO1xuICAgIHRoaXMuZGV0ZWN0aW9uID0gc3RhdHMuZGV0ZWN0aW9uIHx8IDA7XG4gICAgdGhpcy5jYXJyeUNhcGFjaXR5ID0gc3RhdHMuY2FycnlDYXBhY2l0eSB8fCAwO1xuICAgIHRoaXMubWF4UGFuaWMgPSBzdGF0cy5tYXhQYW5pYyB8fCAwO1xuICAgIHRoaXMucGFuaWNEZWxheSA9IHN0YXRzLnBhbmljRGVsYXkgfHwgMDtcbiAgICB0aGlzLmhlYWx0aFJlZ2VuZXJhdGlvbiA9IHN0YXRzLmhlYWx0aFJlZ2VuZXJhdGlvbiB8fCAwO1xuICAgIHRoaXMuc3RhbWluYVJlZ2VuZXJhdGlvbiA9IHN0YXRzLnN0YW1pbmFSZWdlbmVyYXRpb24gfHwgMDtcbiAgfVxuICAgIFxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IFN0YXRzKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
