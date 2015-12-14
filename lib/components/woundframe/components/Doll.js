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

var _coreCore = require('../../../core/core');

var _Part = require('./Part');

var _Label = require('./Label');

var _classesWoundColors = require('../classes/WoundColors');

var colors = new _classesWoundColors.WoundColors();
var pct66 = 2.0 / 3.0;
var pct33 = 1.0 / 3.0;
function getState(damage, max) {
    if (max == 0) return 0;
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
            this.map[i] = new _coreCore.Injury();
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
            var defaultInjury = new _coreCore.Injury();
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
                var part = injury.empty ? getPart(i) : getPart(injury.part);
                var maxHealth = injury.maxHealth * 3;
                var currentHealth = injury.wounds < 3 ? (2 - injury.wounds) * injury.maxHealth + injury.health : 0;
                var state = getState(currentHealth, maxHealth);
                var color = injury.empty ? colors.getColorForWound(0) : colors.getColorForWound(injury.health == 0 ? injury.wounds + 1 : injury.wounds);
                parts.push(React.createElement(_Part.Part, { "key": 'part.' + part, "part": part, "health": currentHealth, "max": maxHealth, "wounds": injury.wounds, "state": state, "color": color }));
                if (!injury.empty) {
                    labels.push(React.createElement(_Label.Label, { "key": 'part.' + part, "part": part, "value": currentHealth, "max": maxHealth, "color": color }));
                }
            }
            return React.createElement("div", { "className": "doll" }, parts, labels);
        }
    }]);

    return Doll;
})(React.Component);

exports.Doll = Doll;
exports['default'] = Doll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0RvbGwudHN4Il0sIm5hbWVzIjpbImdldFN0YXRlIiwiZ2V0UGFydCIsIkluanVyeU1hcCIsIkluanVyeU1hcC5jb25zdHJ1Y3RvciIsIkluanVyeU1hcC5hZGRJbmp1cnkiLCJJbmp1cnlNYXAuZ2V0SW5qdXJ5IiwiRG9sbCIsIkRvbGwucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O3dCQUNNLG9CQUFvQjs7b0JBQ3RCLFFBQVE7O3FCQUNQLFNBQVM7O2tDQUNILHdCQUF3Qjs7QUFFcEQsSUFBTSxNQUFNLEdBQWdCLHFDQUFpQixDQUFDO0FBRTlDLElBQU0sS0FBSyxHQUFXLEdBQUcsR0FBQyxHQUFHLENBQUM7QUFDOUIsSUFBTSxLQUFLLEdBQVcsR0FBRyxHQUFDLEdBQUcsQ0FBQztBQU85QixTQUFBLFFBQUEsQ0FBa0IsTUFBYyxFQUFFLEdBQVcsRUFBQTtBQUMzQ0EsUUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsRUFDVkEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7QUFFWEEsUUFBTUEsR0FBR0EsR0FBV0EsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7QUFDakNBLFFBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO0FBQzFCQSxRQUFJQSxHQUFHQSxHQUFHQSxLQUFLQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtBQUMxQkEsUUFBSUEsR0FBR0EsR0FBR0EsR0FBR0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7QUFDeEJBLFdBQU9BLENBQUNBLENBQUNBO0NBQ1ZBOztBQUdELFNBQUEsT0FBQSxDQUFpQixRQUFnQixFQUFBO0FBQy9CQyxZQUFRQSxRQUFRQTtBQUNkQSxhQUFLQSxDQUFDQTtBQUFFQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7QUFBQUEsQUFDakJBLGFBQUtBLENBQUNBO0FBQUVBLG1CQUFP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QUFVQSxFQUFBQSxPQUNWQSxFQUFFQSxLQUFNQSxFQUFBQSxDQUNYQSxDQUNMQSxDQUFDQTtpQkFDSEE7YUFDRkE7QUFFREEsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLFdBQVVBLEVBQUNBLE1BQU1BLEVBQUFBLEVBQ2xCQSxLQUFNQSxFQUNOQSxNQUFPQSxDQUNKQSxDQUFFQTtTQUNYQTs7O1dBbERILElBQUE7R0FBMEIsS0FBSyxDQUFDLFNBQVM7OztxQkFxRDFCLElBQUkiLCJmaWxlIjoiY29tcG9uZW50cy93b3VuZGZyYW1lL2NvbXBvbmVudHMvRG9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmp1cnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgUGFydCB9IGZyb20gJy4vUGFydCc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IHsgV291bmRDb2xvcnMgfSBmcm9tICcuLi9jbGFzc2VzL1dvdW5kQ29sb3JzJztcblxuY29uc3QgY29sb3JzOiBXb3VuZENvbG9ycyA9IG5ldyBXb3VuZENvbG9ycygpO1xuXG5jb25zdCBwY3Q2NjogbnVtYmVyID0gMi4wLzMuMDtcbmNvbnN0IHBjdDMzOiBudW1iZXIgPSAxLjAvMy4wO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvbGxTdGF0ZSB7IH1cbmV4cG9ydCBpbnRlcmZhY2UgRG9sbFByb3BzIHtcbiAgaW5qdXJpZXM6IEluanVyeVtdO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZShkYW1hZ2U6IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobWF4ID09IDApXG4gICAgcmV0dXJuIDA7XG5cbiAgY29uc3QgcGN0OiBudW1iZXIgPSBkYW1hZ2UgLyBtYXg7XG4gIGlmIChwY3QgPiBwY3Q2NikgcmV0dXJuIDA7XG4gIGlmIChwY3QgPiBwY3QzMykgcmV0dXJuIDE7XG4gIGlmIChwY3QgPiAwLjApIHJldHVybiAyO1xuICByZXR1cm4gMztcbn1cblxuLy8gVEVNUDogVW50aWwgd2Uga25vdyB0aGUgb2ZmaWNpYWwgY2xpZW50IFBhcnQgSUQgbWFwXG5mdW5jdGlvbiBnZXRQYXJ0KGNsaWVudElkOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNsaWVudElkKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMztcbiAgICBjYXNlIDE6IHJldHVybiAxO1xuICAgIGNhc2UgMjogcmV0dXJuIDI7XG4gICAgY2FzZSAzOiByZXR1cm4gMDtcbiAgICBjYXNlIDQ6IHJldHVybiA0O1xuICAgIGNhc2UgNTogcmV0dXJuIDU7XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vLyBNYXBzIHBhcnQgSURzIHRvIGluanVyeSBvYmplY3RzLiAgSWYgYW4gaW5qdXJ5IGZvciBhIHBhcnQgaXMgbm90IGF2YWlsYWxlLCByZXR1cm5zXG4vLyBhbiBpbmp1cnkgdGhhdCByZXByZXNlbnRzIGZ1bGwgaGVhbHRoXG5cbmNsYXNzIEluanVyeU1hcCB7XG4gIHByaXZhdGUgbWFwIDogSW5qdXJ5W10gPSBbXTtcbiAgcHVibGljIGxlbmd0aDogbnVtYmVyID0gNjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1hcFtpXSA9IG5ldyBJbmp1cnkoKTtcbiAgICB9XG4gIH1cbiAgYWRkSW5qdXJ5KGluanVyeTpJbmp1cnkpIHtcbiAgICB0aGlzLm1hcFtpbmp1cnkucGFydF0ucmVmcmVzaChpbmp1cnkpO1xuICB9XG4gIGdldEluanVyeShpIDogbnVtYmVyKSA6IEluanVyeSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gaSAmJiBpID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcFtpXTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdEluanVyeSA6IEluanVyeSA9IG5ldyBJbmp1cnkoKTtcbiAgICByZXR1cm4gZGVmYXVsdEluanVyeTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9sbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEb2xsUHJvcHMsIERvbGxTdGF0ZT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5qdXJpZXMgPSB0aGlzLnByb3BzLmluanVyaWVzO1xuICAgIGNvbnN0IHBhcnRzIDogYW55IFtdID0gW107XG4gICAgY29uc3QgbGFiZWxzIDogYW55IFtdID0gW107XG4gICAgY29uc3QgbWFwOiBJbmp1cnlNYXAgPSBuZXcgSW5qdXJ5TWFwKCk7XG5cbiAgICAvLyBCdWlsZCBhbGwgNiBwYXJ0cywgYXNzdW1lcyBmdWxsIGhlYWx0aFxuICAgIC8vIFRPRE86IFNob3VsZCBiZSBuZWNlc3Nhcnkgd2hlbiBjbGllbnQgaXMgc2VuZGluZyBhbGwgcGFydHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluanVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtYXAuYWRkSW5qdXJ5KGluanVyaWVzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIGRhbWFnZWQgYm9keSBwYXJ0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW5qdXJ5ID0gbWFwLmdldEluanVyeShpKTtcbiAgICAgIGNvbnN0IHBhcnQgPSAgaW5qdXJ5LmVtcHR5ID8gZ2V0UGFydChpKSA6IGdldFBhcnQoaW5qdXJ5LnBhcnQpO1xuICAgICAgY29uc3QgbWF4SGVhbHRoID0gKGluanVyeS5tYXhIZWFsdGggKiAzKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIZWFsdGggPSBpbmp1cnkud291bmRzIDwgMyA/ICgoMiAtIGluanVyeS53b3VuZHMpICogaW5qdXJ5Lm1heEhlYWx0aCkgKyBpbmp1cnkuaGVhbHRoIDogMDtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoY3VycmVudEhlYWx0aCwgbWF4SGVhbHRoKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gaW5qdXJ5LmVtcHR5ID8gY29sb3JzLmdldENvbG9yRm9yV291bmQoMCkgOiBjb2xvcnMuZ2V0Q29sb3JGb3JXb3VuZChpbmp1cnkuaGVhbHRoID09IDAgPyBpbmp1cnkud291bmRzICsgMSA6IGluanVyeS53b3VuZHMpO1xuXG4gICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICA8UGFydCBrZXk9eydwYXJ0LicgKyBwYXJ0fVxuICAgICAgICAgIHBhcnQ9e3BhcnR9XG4gICAgICAgICAgaGVhbHRoPXtjdXJyZW50SGVhbHRofVxuICAgICAgICAgIG1heD17bWF4SGVhbHRofVxuICAgICAgICAgIHdvdW5kcz17aW5qdXJ5LndvdW5kc31cbiAgICAgICAgICBzdGF0ZT17c3RhdGV9XG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgICBpZiAoIWluanVyeS5lbXB0eSkge1xuICAgICAgICBsYWJlbHMucHVzaChcbiAgICAgICAgICA8TGFiZWwga2V5PXsncGFydC4nICsgcGFydH1cbiAgICAgICAgICAgIHBhcnQ9e3BhcnR9XG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEhlYWx0aH1cbiAgICAgICAgICAgIG1heD17bWF4SGVhbHRofVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2xsXCI+XG4gICAgICAgIHtwYXJ0c31cbiAgICAgICAge2xhYmVsc31cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9sbDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
