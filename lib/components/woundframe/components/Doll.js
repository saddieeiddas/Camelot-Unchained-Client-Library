/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _main = require('../../../main');

var _Part = require('./Part');

var _Label = require('./Label');

var _classesWoundColors = require('../classes/WoundColors');

var colors = new _classesWoundColors.WoundColors();
var pct66 = 2.0 / 3.0;
var pct33 = 1.0 / 3.0;
function getState(damage, max) {
    var pct = damage / max;
    if (pct > pct66) return 0;
    if (pct > pct33) return 1;
    if (pct > 0.0) return 2;
    return 3;
}
// TEMP: Until we know the official client Part ID map
function getPart(clientId) {
    switch (clientId) {
        case 0:
            return 3;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 0;
        case 4:
            return 4;
        case 5:
            return 5;
    }
    return -1;
}
// Maps part IDs to injury objects.  If an injury for a part is not availale, returns
// an injury that represents full health

var InjuryMap = (function () {
    function InjuryMap() {
        _classCallCheck(this, InjuryMap);

        this.map = [];
        this.length = 6;
        for (var i = 0; i < this.length; i++) {
            this.map[i] = new _main.Injury();
        }
    }

    _createClass(InjuryMap, [{
        key: 'addInjury',
        value: function addInjury(injury) {
            this.map[injury.part].refresh(injury);
        }
    }, {
        key: 'getInjury',
        value: function getInjury(i) {
            if (this.length > i && i >= 0) {
                return this.map[i];
            }
            var defaultInjury = new _main.Injury();
            return defaultInjury;
        }
    }]);

    return InjuryMap;
})();

var Doll = (function (_React$Component) {
    _inherits(Doll, _React$Component);

    function Doll() {
        _classCallCheck(this, Doll);

        _get(Object.getPrototypeOf(Doll.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Doll, [{
        key: 'render',
        value: function render() {
            var injuries = this.props.injuries;
            var parts = [];
            var labels = [];
            var map = new InjuryMap();
            // Build all 6 parts, assumes full health
            // TODO: Should be necessary when client is sending all parts
            for (var i = 0; i < injuries.length; i++) {
                map.addInjury(injuries[i]);
            }
            // Replace damaged body parts
            for (var i = 0; i < map.length; i++) {
                var injury = map.getInjury(i);
                var part = getPart(i);
                var maxHealth = injury.maxHealth * 3;
                var currentHealth = injury.wounds < 3 ? (2 - injury.wounds) * injury.maxHealth + injury.health : 0;
                var state = getState(currentHealth, maxHealth);
                var color = colors.getColorForWound(injury.health == 0 ? injury.wounds + 1 : injury.wounds);
                parts.push(React.createElement(_Part.Part, { "key": 'part.' + part, "part": part, "health": currentHealth, "max": maxHealth, "wounds": injury.wounds, "state": state, "color": color }));
                labels.push(React.createElement(_Label.Label, { "key": 'part.' + part, "part": part, "value": currentHealth, "max": maxHealth, "color": color }));
            }
            return React.createElement("div", { "className": "doll" }, parts, labels);
        }
    }]);

    return Doll;
})(React.Component);

exports.Doll = Doll;
exports['default'] = Doll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0RvbGwudHN4Il0sIm5hbWVzIjpbImdldFN0YXRlIiwiZ2V0UGFydCIsIkluanVyeU1hcCIsIkluanVyeU1hcC5jb25zdHJ1Y3RvciIsIkluanVyeU1hcC5hZGRJbmp1cnkiLCJJbmp1cnlNYXAuZ2V0SW5qdXJ5IiwiRG9sbCIsIkRvbGwucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O29CQUNNLGVBQWU7O29CQUNqQixRQUFROztxQkFDUCxTQUFTOztrQ0FDSCx3QkFBd0I7O0FBRXBELElBQU0sTUFBTSxHQUFnQixxQ0FBaUIsQ0FBQztBQUU5QyxJQUFNLEtBQUssR0FBVyxHQUFHLEdBQUMsR0FBRyxDQUFDO0FBQzlCLElBQU0sS0FBSyxHQUFXLEdBQUcsR0FBQyxHQUFHLENBQUM7QUFPOUIsU0FBQSxRQUFBLENBQWtCLE1BQWMsRUFBRSxHQUFXLEVBQUE7QUFDM0NBLFFBQU1BLEdBQUdBLEdBQVdBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO0FBQ2pDQSxRQUFJQSxHQUFHQSxHQUFHQSxLQUFLQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtBQUMxQkEsUUFBSUEsR0FBR0EsR0FBR0EsS0FBS0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7QUFDMUJBLFFBQUlBLEdBQUdBLEdBQUdBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO0FBQ3hCQSxXQUFPQSxDQUFDQSxDQUFDQTtDQUNWQTs7QUFHRCxTQUFBLE9BQUEsQ0FBaUIsUUFBZ0IsRUFBQTtBQUMvQkMsWUFBUUEsUUFBUUE7QUFDZEEsYUFBS0EsQ0FBQ0E7QUFBRUEsbUJBQU9BLENBQUNBLENBQUNBO0FBQUFBLEFBQ2pCQSxhQUFLQSxDQUFDQTtBQUFFQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7QUFBQUEsQUFDakJBLGFBQUtBLENBQUNBO0FBQUVBLG1CQUFPQSxD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ImZpbGUiOiJ0cy9jb21wb25lbnRzL3dvdW5kZnJhbWUvY29tcG9uZW50cy9Eb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluanVyeSB9IGZyb20gJy4uLy4uLy4uL21haW4nO1xuaW1wb3J0IHsgUGFydCB9IGZyb20gJy4vUGFydCc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IHsgV291bmRDb2xvcnMgfSBmcm9tICcuLi9jbGFzc2VzL1dvdW5kQ29sb3JzJztcblxuY29uc3QgY29sb3JzOiBXb3VuZENvbG9ycyA9IG5ldyBXb3VuZENvbG9ycygpO1xuXG5jb25zdCBwY3Q2NjogbnVtYmVyID0gMi4wLzMuMDtcbmNvbnN0IHBjdDMzOiBudW1iZXIgPSAxLjAvMy4wO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvbGxTdGF0ZSB7IH1cbmV4cG9ydCBpbnRlcmZhY2UgRG9sbFByb3BzIHtcbiAgaW5qdXJpZXM6IEluanVyeVtdO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZShkYW1hZ2U6IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBwY3Q6IG51bWJlciA9IGRhbWFnZSAvIG1heDtcbiAgaWYgKHBjdCA+IHBjdDY2KSByZXR1cm4gMDtcbiAgaWYgKHBjdCA+IHBjdDMzKSByZXR1cm4gMTtcbiAgaWYgKHBjdCA+IDAuMCkgcmV0dXJuIDI7XG4gIHJldHVybiAzO1xufVxuXG4vLyBURU1QOiBVbnRpbCB3ZSBrbm93IHRoZSBvZmZpY2lhbCBjbGllbnQgUGFydCBJRCBtYXBcbmZ1bmN0aW9uIGdldFBhcnQoY2xpZW50SWQ6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoY2xpZW50SWQpIHtcbiAgICBjYXNlIDA6IHJldHVybiAzO1xuICAgIGNhc2UgMTogcmV0dXJuIDE7XG4gICAgY2FzZSAyOiByZXR1cm4gMjtcbiAgICBjYXNlIDM6IHJldHVybiAwO1xuICAgIGNhc2UgNDogcmV0dXJuIDQ7XG4gICAgY2FzZSA1OiByZXR1cm4gNTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIE1hcHMgcGFydCBJRHMgdG8gaW5qdXJ5IG9iamVjdHMuICBJZiBhbiBpbmp1cnkgZm9yIGEgcGFydCBpcyBub3QgYXZhaWxhbGUsIHJldHVybnNcbi8vIGFuIGluanVyeSB0aGF0IHJlcHJlc2VudHMgZnVsbCBoZWFsdGhcblxuY2xhc3MgSW5qdXJ5TWFwIHtcbiAgcHJpdmF0ZSBtYXAgOiBJbmp1cnlbXSA9IFtdO1xuICBwdWJsaWMgbGVuZ3RoOiBudW1iZXIgPSA2O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubWFwW2ldID0gbmV3IEluanVyeSgpO1xuICAgIH1cbiAgfVxuICBhZGRJbmp1cnkoaW5qdXJ5OkluanVyeSkge1xuICAgIHRoaXMubWFwW2luanVyeS5wYXJ0XS5yZWZyZXNoKGluanVyeSk7XG4gIH1cbiAgZ2V0SW5qdXJ5KGkgOiBudW1iZXIpIDogSW5qdXJ5IHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBpICYmIGkgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwW2ldO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0SW5qdXJ5IDogSW5qdXJ5ID0gbmV3IEluanVyeSgpO1xuICAgIHJldHVybiBkZWZhdWx0SW5qdXJ5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2xsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERvbGxQcm9wcywgRG9sbFN0YXRlPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbmp1cmllcyA9IHRoaXMucHJvcHMuaW5qdXJpZXM7XG4gICAgY29uc3QgcGFydHMgOiBhbnkgW10gPSBbXTtcbiAgICBjb25zdCBsYWJlbHMgOiBhbnkgW10gPSBbXTtcbiAgICBjb25zdCBtYXA6IEluanVyeU1hcCA9IG5ldyBJbmp1cnlNYXAoKTtcblxuICAgIC8vIEJ1aWxkIGFsbCA2IHBhcnRzLCBhc3N1bWVzIGZ1bGwgaGVhbHRoXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIG5lY2Vzc2FyeSB3aGVuIGNsaWVudCBpcyBzZW5kaW5nIGFsbCBwYXJ0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5qdXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hcC5hZGRJbmp1cnkoaW5qdXJpZXNbaV0pO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgZGFtYWdlZCBib2R5IHBhcnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmp1cnkgPSBtYXAuZ2V0SW5qdXJ5KGkpO1xuICAgICAgY29uc3QgcGFydCA9ICBnZXRQYXJ0KGkpO1xuICAgICAgY29uc3QgbWF4SGVhbHRoID0gKGluanVyeS5tYXhIZWFsdGggKiAzKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIZWFsdGggPSBpbmp1cnkud291bmRzIDwgMyA/ICgoMiAtIGluanVyeS53b3VuZHMpICogaW5qdXJ5Lm1heEhlYWx0aCkgKyBpbmp1cnkuaGVhbHRoIDogMDtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoY3VycmVudEhlYWx0aCwgbWF4SGVhbHRoKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzLmdldENvbG9yRm9yV291bmQoaW5qdXJ5LmhlYWx0aCA9PSAwID8gaW5qdXJ5LndvdW5kcyArIDEgOiBpbmp1cnkud291bmRzKTtcbiAgICAgIHBhcnRzLnB1c2goXG4gICAgICAgIDxQYXJ0IGtleT17J3BhcnQuJyArIHBhcnR9XG4gICAgICAgICAgcGFydD17cGFydH1cbiAgICAgICAgICBoZWFsdGg9e2N1cnJlbnRIZWFsdGh9XG4gICAgICAgICAgbWF4PXttYXhIZWFsdGh9XG4gICAgICAgICAgd291bmRzPXtpbmp1cnkud291bmRzfVxuICAgICAgICAgIHN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBsYWJlbHMucHVzaChcbiAgICAgICAgPExhYmVsIGtleT17J3BhcnQuJyArIHBhcnR9XG4gICAgICAgICAgcGFydD17cGFydH1cbiAgICAgICAgICB2YWx1ZT17Y3VycmVudEhlYWx0aH1cbiAgICAgICAgICBtYXg9e21heEhlYWx0aH1cbiAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9sbFwiPlxuICAgICAgICB7cGFydHN9XG4gICAgICAgIHtsYWJlbHN9XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbGw7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9