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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Stat = require('./Stat');

var Stats = (function (_React$Component) {
    _inherits(Stats, _React$Component);

    function Stats(props) {
        _classCallCheck(this, Stats);

        _get(Object.getPrototypeOf(Stats.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Stats, [{
        key: 'render',
        value: function render() {
            return React.createElement("div", { "className": "stats" }, React.createElement(_Stat.Stat, { "type": "blood", "value": this.props.blood, "max": this.props.bloodMax }), React.createElement(_Stat.Stat, { "type": "stamina", "value": this.props.stamina, "max": this.props.staminaMax }), React.createElement(_Stat.Stat, { "type": "panic", "value": this.props.panic, "max": this.props.panicMax }), React.createElement(_Stat.Stat, { "type": "temp", "value": this.props.temp, "max": this.props.tempMax }));
        }
    }]);

    return Stats;
})(React.Component);

exports.Stats = Stats;
exports['default'] = Stats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1N0YXRzLnRzeCJdLCJuYW1lcyI6WyJTdGF0cyIsIlN0YXRzLmNvbnN0cnVjdG9yIiwiU3RhdHMucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O29CQUNJLFFBQVE7O0lBYzdCLEtBQUE7Y0FBQSxLQUFBOztBQUNFQSxhQURGLEtBQUEsQ0FDY0EsS0FBaUJBLEVBQUFBOzhCQUQvQixLQUFBOztBQUVJQyxtQ0FGSixLQUFBLDZDQUVVQSxLQUFLQSxFQUFFQTtLQUNkQTs7aUJBSEgsS0FBQTs7ZUFJUUQsa0JBQUFBO0FBQ0pFLG1CQUNFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxXQUFVQSxFQUFDQSxPQUFPQSxFQUFBQSxFQUNwQkEsS0FBQUEsQ0FBQUEsYUFBQUEsYUFBS0EsRUFBQUEsTUFBS0EsRUFBQ0EsT0FBT0EsRUFBQUEsT0FBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBTUEsRUFBQUEsS0FBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBU0EsRUFBQUEsQ0FBRUEsRUFDdkVBLEtBQUFBLENBQUFBLGFBQUFBLGFBQUtBLEVBQUFBLE1BQUtBLEVBQUNBLFNBQVNBLEVBQUFBLE9BQU1BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQVFBLEVBQUFBLEtBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVdBLEVBQUFBLENBQUVBLEVBQzdFQSxLQUFBQSxDQUFBQSxhQUFBQSxhQUFLQSxFQUFBQSxNQUFLQSxFQUFDQSxPQUFPQSxFQUFBQSxPQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFNQSxFQUFBQSxLQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFTQSxFQUFBQSxDQUFFQSxFQUN2RUEsS0FBQUEsQ0FBQUEsYUFBQUEsYUFBS0EsRUFBQUEsTUFBS0EsRUFBQ0EsTUFBTUEsRUFBQUEsT0FBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBS0EsRUFBQUEsS0FBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBUUEsRUFBQUEsQ0FBRUEsQ0FDaEVBLENBQ05BO1NBQ0hBOzs7V0FiSCxLQUFBO0dBQTJCLEtBQUssQ0FBQyxTQUFTOzs7cUJBZ0IzQixLQUFLIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1N0YXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0YXQgfSBmcm9tICcuL1N0YXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRzU3RhdGUgeyB9XG5leHBvcnQgaW50ZXJmYWNlIFN0YXRzUHJvcHMge1xuICBibG9vZDogbnVtYmVyLFxuICBibG9vZE1heDogbnVtYmVyLFxuICBzdGFtaW5hOiBudW1iZXIsXG4gIHN0YW1pbmFNYXg6IG51bWJlcixcbiAgcGFuaWM6IG51bWJlcixcbiAgcGFuaWNNYXg6IG51bWJlcixcbiAgdGVtcDogbnVtYmVyLFxuICB0ZW1wTWF4OiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN0YXRzUHJvcHMsIFN0YXRzU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFN0YXRzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgIDxTdGF0IHR5cGU9XCJibG9vZFwiIHZhbHVlPXt0aGlzLnByb3BzLmJsb29kfSBtYXg9e3RoaXMucHJvcHMuYmxvb2RNYXh9Lz5cbiAgICAgICAgPFN0YXQgdHlwZT1cInN0YW1pbmFcIiB2YWx1ZT17dGhpcy5wcm9wcy5zdGFtaW5hfSBtYXg9e3RoaXMucHJvcHMuc3RhbWluYU1heH0vPlxuICAgICAgICA8U3RhdCB0eXBlPVwicGFuaWNcIiB2YWx1ZT17dGhpcy5wcm9wcy5wYW5pY30gbWF4PXt0aGlzLnByb3BzLnBhbmljTWF4fS8+XG4gICAgICAgIDxTdGF0IHR5cGU9XCJ0ZW1wXCIgdmFsdWU9e3RoaXMucHJvcHMudGVtcH0gbWF4PXt0aGlzLnByb3BzLnRlbXBNYXh9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
