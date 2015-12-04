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

var _resourcesShapes = require('../resources/Shapes');

var _Svg = require('./Svg');

function getShape(part, state) {
    return _resourcesShapes.shapes[part][state];
}

var Part = (function (_React$Component) {
    _inherits(Part, _React$Component);

    function Part(props) {
        _classCallCheck(this, Part);

        _get(Object.getPrototypeOf(Part.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Part, [{
        key: 'render',
        value: function render() {
            var part = this.props.part;
            var shape = getShape(part, this.props.state);
            var id = 'part' + part;
            return React.createElement(_Svg.Svg, { "className": "part", "id": id, "box": shape.box, "color": this.props.color, "polygon": shape.polygon, "path": shape.path });
        }
    }]);

    return Part;
})(React.Component);

exports.Part = Part;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1BhcnQudHN4Il0sIm5hbWVzIjpbImdldFNoYXBlIiwiUGFydCIsIlBhcnQuY29uc3RydWN0b3IiLCJQYXJ0LnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQU11QixPQUFPOztJQUFsQixLQUFLOzsrQkFDZ0IscUJBQXFCOzttQkFDbEMsT0FBTzs7QUFhM0IsU0FBQSxRQUFBLENBQWtCLElBQVksRUFBRSxLQUFhLEVBQUE7QUFDM0NBLFdBQU9BLHdCQUFPQSxJQUFJQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtDQUM1QkE7O0lBRUQsSUFBQTtjQUFBLElBQUE7O0FBQ0VDLGFBREYsSUFBQSxDQUNjQSxLQUFnQkEsRUFBQUE7OEJBRDlCLElBQUE7O0FBRUlDLG1DQUZKLElBQUEsNkNBRVVBLEtBQUtBLEVBQUVBO0tBQ2RBOztpQkFISCxJQUFBOztlQUlRRCxrQkFBQUE7QUFDSkUsZ0JBQU1BLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBO0FBQzdCQSxnQkFBTUEsS0FBS0EsR0FBY0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDMURBLGdCQUFNQSxFQUFFQSxHQUFXQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNqQ0EsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLFdBQUlBLEVBQUFBLFdBQVVBLEVBQUNBLE1BQU1BLEVBQUFBLElBQUdBLEVBQUdBLEVBQUlBLEVBQUFBLEtBQUlBLEVBQUdBLEtBQUtBLENBQUNBLEdBQUtBLEVBQUFBLE9BQU1BLEVBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQU9BLEVBQUFBLFNBQ25FQSxFQUFHQSxLQUFLQSxDQUFDQSxPQUFTQSxFQUFBQSxNQUFLQSxFQUFHQSxLQUFLQSxDQUFDQSxJQUFNQSxFQUFBQSxDQUN6Q0EsQ0FDTkE7U0FDSEE7OztXQWJILElBQUE7R0FBMEIsS0FBSyxDQUFDLFNBQVMiLCJmaWxlIjoidHMvY29tcG9uZW50cy93b3VuZGZyYW1lL2NvbXBvbmVudHMvUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTVkdTaGFwZSwgc2hhcGVzIH0gZnJvbSAnLi4vcmVzb3VyY2VzL1NoYXBlcyc7XG5pbXBvcnQgeyBTdmcgfSBmcm9tICcuL1N2Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydFN0YXRlIHsgfVxuZXhwb3J0IGludGVyZmFjZSBQYXJ0UHJvcHMge1xuICBrZXk6IHN0cmluZztcbiAgcGFydDogbnVtYmVyLFxuICBoZWFsdGg6IG51bWJlcixcbiAgbWF4OiBudW1iZXIsXG4gIHdvdW5kczogbnVtYmVyLFxuICBzdGF0ZTogbnVtYmVyLFxuICBjb2xvcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGdldFNoYXBlKHBhcnQ6IG51bWJlciwgc3RhdGU6IG51bWJlcikgOiBTVkdTaGFwZSB7XG4gIHJldHVybiBzaGFwZXNbcGFydF1bc3RhdGVdO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQYXJ0UHJvcHMsIFBhcnRTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUGFydFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9wcy5wYXJ0O1xuICAgIGNvbnN0IHNoYXBlIDogU1ZHU2hhcGUgPSBnZXRTaGFwZShwYXJ0LCB0aGlzLnByb3BzLnN0YXRlKTtcbiAgICBjb25zdCBpZDogc3RyaW5nID0gJ3BhcnQnICsgcGFydDtcbiAgICByZXR1cm4gKFxuICAgICAgPFN2ZyBjbGFzc05hbWU9XCJwYXJ0XCIgaWQ9eyBpZCB9IGJveD17IHNoYXBlLmJveCB9IGNvbG9yPXsgdGhpcy5wcm9wcy5jb2xvciB9XG4gICAgICAgIHBvbHlnb249eyBzaGFwZS5wb2x5Z29uIH0gcGF0aD17IHNoYXBlLnBhdGggfT5cbiAgICAgIDwvU3ZnPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
