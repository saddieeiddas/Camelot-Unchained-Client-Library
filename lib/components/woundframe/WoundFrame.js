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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _componentsDoll = require('./components/Doll');

var _componentsStats = require('./components/Stats');

var _componentsBuffs = require('./components/Buffs');

var WoundsProps = function WoundsProps() {
    _classCallCheck(this, WoundsProps);
};

exports.WoundsProps = WoundsProps;

var WoundsState = function WoundsState() {
    _classCallCheck(this, WoundsState);
};

exports.WoundsState = WoundsState;

var WoundFrame = (function (_React$Component) {
    _inherits(WoundFrame, _React$Component);

    function WoundFrame(props) {
        _classCallCheck(this, WoundFrame);

        _get(Object.getPrototypeOf(WoundFrame.prototype), 'constructor', this).call(this, props);
    }

    _createClass(WoundFrame, [{
        key: 'render',
        value: function render() {
            return React.createElement("div", null, React.createElement(_componentsDoll.Doll, { "injuries": this.props.injuries }), React.createElement(_componentsBuffs.Buffs, { "type": "boon" }), React.createElement(_componentsBuffs.Buffs, { "type": "bane" }), React.createElement(_componentsStats.Stats, { "blood": this.props.health, "bloodMax": this.props.healthMax, "stamina": this.props.stamina, "staminaMax": this.props.staminaMax, "panic": 15, "panicMax": 55, "temp": 72, "tempMax": 96 }));
        }
    }]);

    return WoundFrame;
})(React.Component);

exports['default'] = WoundFrame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9Xb3VuZEZyYW1lLnRzeCJdLCJuYW1lcyI6WyJXb3VuZEZyYW1lIiwiV291bmRGcmFtZS5jb25zdHJ1Y3RvciIsIldvdW5kRnJhbWUucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7OzhCQUNJLG1CQUFtQjs7K0JBQ2xCLG9CQUFvQjs7K0JBQ3BCLG9CQUFvQjs7SUFHMUMsV0FBQSxZQUFBLFdBQUE7MEJBQUEsV0FBQTs7Ozs7SUFhQSxXQUFBLFlBQUEsV0FBQTswQkFBQSxXQUFBOzs7OztJQUVBLFVBQUE7Y0FBQSxVQUFBOztBQUNFQSxhQURGLFVBQUEsQ0FDY0EsS0FBa0JBLEVBQUFBOzhCQURoQyxVQUFBOztBQUVJQyxtQ0FGSixVQUFBLDZDQUVVQSxLQUFLQSxFQUFFQTtLQUNkQTs7aUJBSEgsVUFBQTs7ZUFJUUQsa0JBQUFBO0FBQ0pFLG1CQUNFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxJQUFBQSxFQUNGQSxLQUFBQSxDQUFBQSxhQUFBQSx1QkFBS0EsRUFBQUEsVUFBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBU0EsRUFBQUEsQ0FBR0EsRUFDdkNBLEtBQUFBLENBQUFBLGFBQUFBLHlCQUFNQSxFQUFBQSxNQUFLQSxFQUFDQSxNQUFNQSxFQUFBQSxDQUFFQSxFQUNwQkEsS0FBQUEsQ0FBQUEsYUFBQUEseUJBQU1BLEVBQUFBLE1BQUtBLEVBQUNBLE1BQU1BLEVBQUFBLENBQUVBLEVBQ3BCQSxLQUFBQSxDQUFBQSxhQUFBQSx5QkFBTUEsRUFBQUEsT0FDQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBT0EsRUFBQUEsVUFBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBVUEsRUFBQUEsU0FDbERBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQVFBLEVBQUFBLFlBQVdBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVdBLEVBQUFBLE9BQzFEQSxFQUFFQSxFQUFHQSxFQUFBQSxVQUFTQSxFQUFFQSxFQUFHQSxFQUFBQSxNQUNwQkEsRUFBRUEsRUFBR0EsRUFBQUEsU0FBUUEsRUFBRUEsRUFBR0EsRUFBQUEsQ0FDcEJBLENBQ0FBLENBQ05BO1NBQ0hBOzs7V0FsQkgsVUFBQTtHQUF5QixLQUFLLENBQUMsU0FBUzs7cUJBcUJ6QixVQUFVIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9Xb3VuZEZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERvbGwgfSBmcm9tICcuL2NvbXBvbmVudHMvRG9sbCc7XG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gJy4vY29tcG9uZW50cy9TdGF0cyc7XG5pbXBvcnQgeyBCdWZmcyB9IGZyb20gJy4vY29tcG9uZW50cy9CdWZmcyc7XG5pbXBvcnQgeyBXb3VuZENvbG9ycyB9IGZyb20gJy4vY2xhc3Nlcy9Xb3VuZENvbG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBXb3VuZHNQcm9wcyB7XG4gIGluanVyaWVzOiBhbnlbXTtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGhlYWx0aE1heDogbnVtYmVyO1xuICBzdGFtaW5hOiBudW1iZXI7XG4gIHN0YW1pbmFNYXg6IG51bWJlcjtcbiAgLy9wYW5pYzogbnVtYmVyO1xuICAvL3BhbmljTWF4OiBudW1iZXI7XG4gIC8vdGVtcDogbnVtYmVyO1xuICAvL3RlbXBNYXg6IG51bWJlcjtcbiAgLy9jb2xvcnM6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFdvdW5kc1N0YXRlIHsgfVxuXG5jbGFzcyBXb3VuZEZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdvdW5kc1Byb3BzLCBXb3VuZHNTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogV291bmRzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RG9sbCBpbmp1cmllcz17dGhpcy5wcm9wcy5pbmp1cmllc30gLz5cbiAgICAgICAgPEJ1ZmZzIHR5cGU9XCJib29uXCIvPlxuICAgICAgICA8QnVmZnMgdHlwZT1cImJhbmVcIi8+XG4gICAgICAgIDxTdGF0c1xuICAgICAgICAgIGJsb29kPXt0aGlzLnByb3BzLmhlYWx0aH0gYmxvb2RNYXg9e3RoaXMucHJvcHMuaGVhbHRoTWF4fVxuICAgICAgICAgIHN0YW1pbmE9e3RoaXMucHJvcHMuc3RhbWluYX0gc3RhbWluYU1heD17dGhpcy5wcm9wcy5zdGFtaW5hTWF4fVxuICAgICAgICAgIHBhbmljPXsxNX0gcGFuaWNNYXg9ezU1fVxuICAgICAgICAgIHRlbXA9ezcyfSB0ZW1wTWF4PXs5Nn1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3VuZEZyYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
