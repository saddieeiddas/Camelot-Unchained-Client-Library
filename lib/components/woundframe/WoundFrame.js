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

var _componentsDisplayName = require('./components/DisplayName');

var _componentsDisplayName2 = _interopRequireDefault(_componentsDisplayName);

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
            return React.createElement("div", null, React.createElement(_componentsDisplayName2['default'], { "name": this.props.name }), React.createElement(_componentsDoll2['default'], { "injuries": this.props.injuries }), React.createElement(_componentsBuffs2['default'], { "type": "boon" }), React.createElement(_componentsBuffs2['default'], { "type": "bane" }), React.createElement(_componentsStats2['default'], { "blood": this.props.health, "bloodMax": this.props.healthMax, "stamina": this.props.stamina, "staminaMax": this.props.staminaMax, "panic": this.props.panic, "panicMax": this.props.panicMax, "temp": this.props.temp, "tempMax": this.props.tempMax }));
        }
    }]);

    return WoundFrame;
})(React.Component);

exports['default'] = WoundFrame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9Xb3VuZEZyYW1lLnRzeCJdLCJuYW1lcyI6WyJXb3VuZEZyYW1lIiwiV291bmRGcmFtZS5jb25zdHJ1Y3RvciIsIldvdW5kRnJhbWUucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7cUNBQ08sMEJBQTBCOzs7OzhCQUNqQyxtQkFBbUI7Ozs7K0JBQ2xCLG9CQUFvQjs7OzsrQkFDcEIsb0JBQW9COzs7O0lBR3RDLFdBQUEsWUFBQSxXQUFBOzBCQUFBLFdBQUE7Ozs7O0lBYUEsV0FBQSxZQUFBLFdBQUE7MEJBQUEsV0FBQTs7Ozs7SUFFQSxVQUFBO2NBQUEsVUFBQTs7QUFDRUEsYUFERixVQUFBLENBQ2NBLEtBQWtCQSxFQUFBQTs4QkFEaEMsVUFBQTs7QUFFSUMsbUNBRkosVUFBQSw2Q0FFVUEsS0FBS0EsRUFBRUE7S0FDZEE7O2lCQUhILFVBQUE7O2VBSVFELGtCQUFBQTtBQUNKRSxtQkFDRUEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsSUFBQUEsRUFDRkEsS0FBQUEsQ0FBQUEsYUFBQUEscUNBQVlBLEVBQUFBLE1BQUtBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUtBLEVBQUFBLENBQUdBLEVBQ3RDQSxLQUFBQSxDQUFBQSxhQUFBQSw4QkFBS0EsRUFBQUEsVUFBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBU0EsRUFBQUEsQ0FBR0EsRUFDdkNBLEtBQUFBLENBQUFBLGFBQUFBLCtCQUFNQSxFQUFBQSxNQUFLQSxFQUFDQSxNQUFNQSxFQUFBQSxDQUFFQSxFQUNwQkEsS0FBQUEsQ0FBQUEsYUFBQUEsK0JBQU1BLEVBQUFBLE1BQUtBLEVBQUNBLE1BQU1BLEVBQUFBLENBQUVBLEVBQ3BCQSxLQUFBQSxDQUFBQSxhQUFBQSwrQkFBTUEsRUFBQUEsT0FDQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBT0EsRUFBQUEsVUFBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBVUEsRUFBQUEsU0FDbERBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQVFBLEVBQUFBLFlBQVdBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVdBLEVBQUFBLE9BQzFEQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFNQSxFQUFBQSxVQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFTQSxFQUFBQSxNQUNuREEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBS0EsRUFBQUEsU0FBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBUUEsRUFBQUEsQ0FDakRBLENBQ0FBLENBQ05BO1NBQ0hBOzs7V0FuQkgsVUFBQTtHQUF5QixLQUFLLENBQUMsU0FBUzs7cUJBc0J6QixVQUFVIiwiZmlsZSI6ImNvbXBvbmVudHMvd291bmRmcmFtZS9Xb3VuZEZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaXNwbGF5TmFtZSBmcm9tICcuL2NvbXBvbmVudHMvRGlzcGxheU5hbWUnO1xuaW1wb3J0IERvbGwgZnJvbSAnLi9jb21wb25lbnRzL0RvbGwnO1xuaW1wb3J0IFN0YXRzIGZyb20gJy4vY29tcG9uZW50cy9TdGF0cyc7XG5pbXBvcnQgQnVmZnMgZnJvbSAnLi9jb21wb25lbnRzL0J1ZmZzJztcbmltcG9ydCBXb3VuZENvbG9ycyBmcm9tICcuL2NsYXNzZXMvV291bmRDb2xvcnMnO1xuXG5leHBvcnQgY2xhc3MgV291bmRzUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGluanVyaWVzOiBhbnlbXTtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGhlYWx0aE1heDogbnVtYmVyO1xuICBzdGFtaW5hOiBudW1iZXI7XG4gIHN0YW1pbmFNYXg6IG51bWJlcjtcbiAgcGFuaWM6IG51bWJlcjtcbiAgcGFuaWNNYXg6IG51bWJlcjtcbiAgdGVtcDogbnVtYmVyO1xuICB0ZW1wTWF4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBXb3VuZHNTdGF0ZSB7IH1cblxuY2xhc3MgV291bmRGcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXb3VuZHNQcm9wcywgV291bmRzU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFdvdW5kc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpc3BsYXlOYW1lIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gLz5cbiAgICAgICAgPERvbGwgaW5qdXJpZXM9e3RoaXMucHJvcHMuaW5qdXJpZXN9IC8+XG4gICAgICAgIDxCdWZmcyB0eXBlPVwiYm9vblwiLz5cbiAgICAgICAgPEJ1ZmZzIHR5cGU9XCJiYW5lXCIvPlxuICAgICAgICA8U3RhdHNcbiAgICAgICAgICBibG9vZD17dGhpcy5wcm9wcy5oZWFsdGh9IGJsb29kTWF4PXt0aGlzLnByb3BzLmhlYWx0aE1heH1cbiAgICAgICAgICBzdGFtaW5hPXt0aGlzLnByb3BzLnN0YW1pbmF9IHN0YW1pbmFNYXg9e3RoaXMucHJvcHMuc3RhbWluYU1heH1cbiAgICAgICAgICBwYW5pYz17dGhpcy5wcm9wcy5wYW5pY30gcGFuaWNNYXg9e3RoaXMucHJvcHMucGFuaWNNYXh9IC8vMTUgNTVcbiAgICAgICAgICB0ZW1wPXt0aGlzLnByb3BzLnRlbXB9IHRlbXBNYXg9e3RoaXMucHJvcHMudGVtcE1heH0gLy8gNzIgOTZcbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3VuZEZyYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
