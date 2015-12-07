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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _componentsDoll = require('./components/Doll');

var _componentsDoll2 = _interopRequireDefault(_componentsDoll);

var _componentsStats = require('./components/Stats');

var _componentsStats2 = _interopRequireDefault(_componentsStats);

var _componentsBuffs = require('./components/Buffs');

var _componentsBuffs2 = _interopRequireDefault(_componentsBuffs);

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
            return React.createElement("div", null, React.createElement(_componentsDoll2['default'], { "injuries": this.props.injuries }), React.createElement(_componentsBuffs2['default'], { "type": "boon" }), React.createElement(_componentsBuffs2['default'], { "type": "bane" }), React.createElement(_componentsStats2['default'], { "blood": this.props.health, "bloodMax": this.props.healthMax, "stamina": this.props.stamina, "staminaMax": this.props.staminaMax, "panic": this.props.panic, "panicMax": this.props.panicMax, "temp": this.props.temp, "tempMax": this.props.tempMax }));
        }
    }]);

    return WoundFrame;
})(React.Component);

exports['default'] = WoundFrame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9Xb3VuZEZyYW1lLnRzeCJdLCJuYW1lcyI6WyJXb3VuZEZyYW1lIiwiV291bmRGcmFtZS5jb25zdHJ1Y3RvciIsIldvdW5kRnJhbWUucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7OEJBQ0EsbUJBQW1COzs7OytCQUNsQixvQkFBb0I7Ozs7K0JBQ3BCLG9CQUFvQjs7OztJQUd0QyxXQUFBLFlBQUEsV0FBQTswQkFBQSxXQUFBOzs7OztJQVlBLFdBQUEsWUFBQSxXQUFBOzBCQUFBLFdBQUE7Ozs7O0lBRUEsVUFBQTtjQUFBLFVBQUE7O0FBQ0VBLGFBREYsVUFBQSxDQUNjQSxLQUFrQkEsRUFBQUE7OEJBRGhDLFVBQUE7O0FBRUlDLG1DQUZKLFVBQUEsNkNBRVVBLEtBQUtBLEVBQUVBO0tBQ2RBOztpQkFISCxVQUFBOztlQUlRRCxrQkFBQUE7QUFDSkUsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLElBQUFBLEVBQ0ZBLEtBQUFBLENBQUFBLGFBQUFBLDhCQUFLQSxFQUFBQSxVQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFTQSxFQUFBQSxDQUFHQSxFQUN2Q0EsS0FBQUEsQ0FBQUEsYUFBQUEsK0JBQU1BLEVBQUFBLE1BQUtBLEVBQUNBLE1BQU1BLEVBQUFBLENBQUVBLEVBQ3BCQSxLQUFBQSxDQUFBQSxhQUFBQSwrQkFBTUEsRUFBQUEsTUFBS0EsRUFBQ0EsTUFBTUEsRUFBQUEsQ0FBRUEsRUFDcEJBLEtBQUFBLENBQUFBLGFBQUFBLCtCQUFNQSxFQUFBQSxPQUNDQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFPQSxFQUFBQSxVQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFVQSxFQUFBQSxTQUNsREEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBUUEsRUFBQUEsWUFBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBV0EsRUFBQUEsT0FDMURBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQU1BLEVBQUFBLFVBQVNBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVNBLEVBQUFBLE1BQ25EQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFLQSxFQUFBQSxTQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFRQSxFQUFBQSxDQUNqREEsQ0FDQUEsQ0FDTkE7U0FDSEE7OztXQWxCSCxVQUFBO0dBQXlCLEtBQUssQ0FBQyxTQUFTOztxQkFxQnpCLFVBQVUiLCJmaWxlIjoidHMvY29tcG9uZW50cy93b3VuZGZyYW1lL1dvdW5kRnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvbGwgZnJvbSAnLi9jb21wb25lbnRzL0RvbGwnO1xuaW1wb3J0IFN0YXRzIGZyb20gJy4vY29tcG9uZW50cy9TdGF0cyc7XG5pbXBvcnQgQnVmZnMgZnJvbSAnLi9jb21wb25lbnRzL0J1ZmZzJztcbmltcG9ydCBXb3VuZENvbG9ycyBmcm9tICcuL2NsYXNzZXMvV291bmRDb2xvcnMnO1xuXG5leHBvcnQgY2xhc3MgV291bmRzUHJvcHMge1xuICBpbmp1cmllczogYW55W107XG4gIGhlYWx0aDogbnVtYmVyO1xuICBoZWFsdGhNYXg6IG51bWJlcjtcbiAgc3RhbWluYTogbnVtYmVyO1xuICBzdGFtaW5hTWF4OiBudW1iZXI7XG4gIHBhbmljOiBudW1iZXI7XG4gIHBhbmljTWF4OiBudW1iZXI7XG4gIHRlbXA6IG51bWJlcjtcbiAgdGVtcE1heDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgV291bmRzU3RhdGUgeyB9XG5cbmNsYXNzIFdvdW5kRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V291bmRzUHJvcHMsIFdvdW5kc1N0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBXb3VuZHNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEb2xsIGluanVyaWVzPXt0aGlzLnByb3BzLmluanVyaWVzfSAvPlxuICAgICAgICA8QnVmZnMgdHlwZT1cImJvb25cIi8+XG4gICAgICAgIDxCdWZmcyB0eXBlPVwiYmFuZVwiLz5cbiAgICAgICAgPFN0YXRzXG4gICAgICAgICAgYmxvb2Q9e3RoaXMucHJvcHMuaGVhbHRofSBibG9vZE1heD17dGhpcy5wcm9wcy5oZWFsdGhNYXh9XG4gICAgICAgICAgc3RhbWluYT17dGhpcy5wcm9wcy5zdGFtaW5hfSBzdGFtaW5hTWF4PXt0aGlzLnByb3BzLnN0YW1pbmFNYXh9XG4gICAgICAgICAgcGFuaWM9e3RoaXMucHJvcHMucGFuaWN9IHBhbmljTWF4PXt0aGlzLnByb3BzLnBhbmljTWF4fSAvLzE1IDU1XG4gICAgICAgICAgdGVtcD17dGhpcy5wcm9wcy50ZW1wfSB0ZW1wTWF4PXt0aGlzLnByb3BzLnRlbXBNYXh9IC8vIDcyIDk2XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV291bmRGcmFtZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
