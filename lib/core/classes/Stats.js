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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9TdGF0cy50cyJdLCJuYW1lcyI6WyJTdGF0cyIsIlN0YXRzLmNvbnN0cnVjdG9yIiwiU3RhdHMuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFPQSxLQUFBO0FBK0JFQSxhQS9CRixLQUFBLEdBK0IrQkE7WUFBakJBLEtBQUtBLHlEQUFVQSxFQUFFQTs7OEJBL0IvQixLQUFBOztBQWlDSUMsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUJBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM5QkEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFcENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUJBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUVwQ0EsWUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsWUFBWUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDOUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxLQUFLQSxDQUFDQSxrQkFBa0JBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hEQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLEtBQUtBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FDM0RBOztpQkExREgsS0FBQTs7ZUE0RGVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsRUFBRUEsQ0FBQ0E7QUFDcEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBL0RILEtBQUE7OztxQkFrRWUsS0FBSyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvU3RhdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwLy9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5cbmNsYXNzIFN0YXRze1xuICAgIFxuICBzdHJlbmd0aDogbnVtYmVyO1xuICBhZ2lsaXR5OiBudW1iZXI7XG4gIGVuZHVyYW5jZTogbnVtYmVyO1xuICB3aWxsOiBudW1iZXI7XG4gIHJlc29uYW5jZTogbnVtYmVyO1xuICBkZXh0ZXJpdHk6IG51bWJlcjtcbiAgdml0YWxpdHk6IG51bWJlcjtcbiAgYXR0dW5lbWVudDogbnVtYmVyO1xuICBmYWl0aDogbnVtYmVyO1xuICBleWVzaWdodDogbnVtYmVyO1xuICAgIFxuICAgIFxuICAgIFxuICBoZWFyaW5nOiBudW1iZXI7XG4gIGNsYXJpdHk6IG51bWJlcjtcbiAgbWFzczogbnVtYmVyO1xuICBwcmVzZW5jZTogbnVtYmVyO1xuICBhZmZpbml0eTogbnVtYmVyO1xuICAgIFxuICAgIFxuICBtYXhNb3ZlU3BlZWQ6IG51bWJlcjtcbiAgdmlzaW9uOiBudW1iZXI7XG4gIGRldGVjdGlvbjogbnVtYmVyO1xuICBjYXJyeUNhcGFjaXR5OiBudW1iZXI7XG4gIG1heFBhbmljOiBudW1iZXI7XG4gIHBhbmljRGVsYXk6IG51bWJlcjtcbiAgaGVhbHRoUmVnZW5lcmF0aW9uOiBudW1iZXI7XG4gIHN0YW1pbmFSZWdlbmVyYXRpb246IG51bWJlcjtcbiAgICBcbiAgY29uc3RydWN0b3Ioc3RhdHMgPSA8U3RhdHM+e30pIHtcbiAgICAgICAgXG4gICAgdGhpcy5zdHJlbmd0aCA9IHN0YXRzLnN0cmVuZ3RoIHx8IDA7XG4gICAgdGhpcy5hZ2lsaXR5ID0gc3RhdHMuYWdpbGl0eSB8fCAwO1xuICAgIHRoaXMuZW5kdXJhbmNlID0gc3RhdHMuZW5kdXJhbmNlIHx8IDA7XG4gICAgdGhpcy53aWxsID0gc3RhdHMud2lsbCB8fCAwO1xuICAgIHRoaXMucmVzb25hbmNlID0gc3RhdHMucmVzb25hbmNlIHx8IDA7XG4gICAgdGhpcy5kZXh0ZXJpdHkgPSBzdGF0cy5kZXh0ZXJpdHkgfHwgMDtcbiAgICB0aGlzLnZpdGFsaXR5ID0gc3RhdHMudml0YWxpdHkgfHwgMDtcbiAgICB0aGlzLmF0dHVuZW1lbnQgPSBzdGF0cy5hdHR1bmVtZW50IHx8IDA7XG4gICAgdGhpcy5mYWl0aCA9IHN0YXRzLmZhaXRoIHx8IDA7XG4gICAgdGhpcy5leWVzaWdodCA9IHN0YXRzLmV5ZXNpZ2h0IHx8IDA7XG5cbiAgICB0aGlzLmhlYXJpbmcgPSBzdGF0cy5oZWFyaW5nIHx8IDA7XG4gICAgdGhpcy5jbGFyaXR5ID0gc3RhdHMuY2xhcml0eSB8fCAwO1xuICAgIHRoaXMubWFzcyA9IHN0YXRzLm1hc3MgfHwgMDtcbiAgICB0aGlzLnByZXNlbmNlID0gc3RhdHMucHJlc2VuY2UgfHwgMDtcbiAgICB0aGlzLmFmZmluaXR5ID0gc3RhdHMuYWZmaW5pdHkgfHwgMDtcblxuICAgIHRoaXMubWF4TW92ZVNwZWVkID0gc3RhdHMubWF4TW92ZVNwZWVkIHx8IDA7XG4gICAgdGhpcy52aXNpb24gPSBzdGF0cy52aXNpb24gfHwgMDtcbiAgICB0aGlzLmRldGVjdGlvbiA9IHN0YXRzLmRldGVjdGlvbiB8fCAwO1xuICAgIHRoaXMuY2FycnlDYXBhY2l0eSA9IHN0YXRzLmNhcnJ5Q2FwYWNpdHkgfHwgMDtcbiAgICB0aGlzLm1heFBhbmljID0gc3RhdHMubWF4UGFuaWMgfHwgMDtcbiAgICB0aGlzLnBhbmljRGVsYXkgPSBzdGF0cy5wYW5pY0RlbGF5IHx8IDA7XG4gICAgdGhpcy5oZWFsdGhSZWdlbmVyYXRpb24gPSBzdGF0cy5oZWFsdGhSZWdlbmVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnN0YW1pbmFSZWdlbmVyYXRpb24gPSBzdGF0cy5zdGFtaW5hUmVnZW5lcmF0aW9uIHx8IDA7XG4gIH1cbiAgICBcbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBTdGF0cygpO1xuICAgIHJldHVybiBhO1xuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
