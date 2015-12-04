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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var Stat = (function (_React$Component) {
    _inherits(Stat, _React$Component);

    function Stat(props) {
        _classCallCheck(this, Stat);

        _get(Object.getPrototypeOf(Stat.prototype), "constructor", this).call(this, props);
    }

    _createClass(Stat, [{
        key: "render",
        value: function render() {
            var pct = this.props.value / this.props.max * 100;
            return React.createElement("div", { "className": "stat " + this.props.type }, React.createElement("label", null, this.props.type[0].toUpperCase() + this.props.type.substr(1)), React.createElement("div", { "className": "bar" }, React.createElement("div", { "className": "fill", "style": { width: pct + '%' } })));
        }
    }]);

    return Stat;
})(React.Component);

exports.Stat = Stat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1N0YXQudHN4Il0sIm5hbWVzIjpbIlN0YXQiLCJTdGF0LmNvbnN0cnVjdG9yIiwiU3RhdC5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7SUFTakIsSUFBQTtjQUFBLElBQUE7O0FBQ0VBLGFBREYsSUFBQSxDQUNjQSxLQUFnQkEsRUFBQUE7OEJBRDlCLElBQUE7O0FBRUlDLG1DQUZKLElBQUEsNkNBRVVBLEtBQUtBLEVBQUVBO0tBQ2RBOztpQkFISCxJQUFBOztlQUlRRCxrQkFBQUE7QUFDSkUsZ0JBQU1BLEdBQUdBLEdBQVdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0FBQzVEQSxtQkFDRUEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsRUFBQUEsV0FBVUEsRUFBRUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBS0EsRUFBQUEsRUFDeENBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLE9BQU1BLEVBQUFBLElBQUFBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFdBQVdBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUVBLENBQVFBLEVBQzdFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxXQUFVQSxFQUFDQSxLQUFLQSxFQUFBQSxFQUNsQkEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsRUFBQUEsV0FBVUEsRUFBQ0EsTUFBTUEsRUFBQUEsT0FBTUEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsR0FBR0EsR0FBR0EsR0FBR0EsRUFBR0EsRUFBQUEsQ0FDNUNBLENBQ0ZBLENBQ0ZBLENBQ05BO1NBQ0hBOzs7V0FmSCxJQUFBO0dBQTBCLEtBQUssQ0FBQyxTQUFTIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1N0YXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRTdGF0ZSB7IH1cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdFByb3BzIHtcbiAgdHlwZTogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBtYXg6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgU3RhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTdGF0UHJvcHMsIFN0YXRTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3RhdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwY3Q6IG51bWJlciA9IHRoaXMucHJvcHMudmFsdWUgLyB0aGlzLnByb3BzLm1heCAqIDEwMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3RhdCBcIiArIHRoaXMucHJvcHMudHlwZX0+XG4gICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BzLnR5cGUuc3Vic3RyKDEpfTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxsXCIgc3R5bGU9e3sgd2lkdGg6IHBjdCArICclJyB9fT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
