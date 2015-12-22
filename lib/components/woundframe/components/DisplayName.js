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

var DisplayName = (function (_React$Component) {
    _inherits(DisplayName, _React$Component);

    function DisplayName(props) {
        _classCallCheck(this, DisplayName);

        _get(Object.getPrototypeOf(DisplayName.prototype), "constructor", this).call(this, props);
    }

    _createClass(DisplayName, [{
        key: "render",
        value: function render() {
            return React.createElement("div", { "className": 'name' }, React.createElement("label", { "className": 'label' }, this.props.name));
        }
    }]);

    return DisplayName;
})(React.Component);

exports.DisplayName = DisplayName;
exports["default"] = DisplayName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0Rpc3BsYXlOYW1lLnRzeCJdLCJuYW1lcyI6WyJEaXNwbGF5TmFtZSIsIkRpc3BsYXlOYW1lLmNvbnN0cnVjdG9yIiwiRGlzcGxheU5hbWUucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O0lBT2pCLFdBQUE7Y0FBQSxXQUFBOztBQUNFQSxhQURGLFdBQUEsQ0FDY0EsS0FBdUJBLEVBQUFBOzhCQURyQyxXQUFBOztBQUVJQyxtQ0FGSixXQUFBLDZDQUVVQSxLQUFLQSxFQUFFQTtLQUNkQTs7aUJBSEgsV0FBQTs7ZUFJUUQsa0JBQUFBO0FBQ0pFLG1CQUNFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxXQUFVQSxFQUFFQSxNQUFPQSxFQUFBQSxFQUNyQkEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsT0FBTUEsRUFBQUEsRUFBQUEsV0FBVUEsRUFBRUEsT0FBUUEsRUFBQUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBS0EsQ0FBUUEsQ0FDaERBLENBQ05BO1NBQ0hBOzs7V0FWSCxXQUFBO0dBQWlDLEtBQUssQ0FBQyxTQUFTOzs7cUJBYWpDLFdBQVciLCJmaWxlIjoiY29tcG9uZW50cy93b3VuZGZyYW1lL2NvbXBvbmVudHMvRGlzcGxheU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlOYW1lU3RhdGUgeyB9XG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlOYW1lUHJvcHMge1xuICBuYW1lOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5TmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEaXNwbGF5TmFtZVByb3BzLCBEaXNwbGF5TmFtZVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBEaXNwbGF5TmFtZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyduYW1lJ30+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydsYWJlbCd9Pnt0aGlzLnByb3BzLm5hbWV9PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheU5hbWU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
