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

var Label = (function (_React$Component) {
    _inherits(Label, _React$Component);

    function Label(props) {
        _classCallCheck(this, Label);

        _get(Object.getPrototypeOf(Label.prototype), "constructor", this).call(this, props);
    }

    _createClass(Label, [{
        key: "render",
        value: function render() {
            return React.createElement("label", { "className": 'label part-' + this.props.part }, React.createElement("span", { "style": { color: this.props.color } }, this.props.value), "/", this.props.max);
        }
    }]);

    return Label;
})(React.Component);

exports.Label = Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0xhYmVsLnRzeCJdLCJuYW1lcyI6WyJMYWJlbCIsIkxhYmVsLmNvbnN0cnVjdG9yIiwiTGFiZWwucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O0lBV2pCLEtBQUE7Y0FBQSxLQUFBOztBQUNFQSxhQURGLEtBQUEsQ0FDY0EsS0FBaUJBLEVBQUFBOzhCQUQvQixLQUFBOztBQUVJQyxtQ0FGSixLQUFBLDZDQUVVQSxLQUFLQSxFQUFFQTtLQUNkQTs7aUJBSEgsS0FBQTs7ZUFJUUQsa0JBQUFBO0FBQ0pFLG1CQUNFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxPQUFNQSxFQUFBQSxFQUFBQSxXQUFVQSxFQUFHQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFNQSxFQUFBQSxFQUNsREEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsTUFBS0EsRUFBQUEsRUFBQUEsT0FBTUEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsRUFBR0EsRUFBQUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBTUEsQ0FBT0EsRUFBQUEsR0FBQUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBSUEsQ0FDOUVBLENBQ1JBO1NBQ0hBOzs7V0FWSCxLQUFBO0dBQTJCLEtBQUssQ0FBQyxTQUFTIiwiZmlsZSI6ImNvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMYWJlbFN0YXRlIHsgfVxuZXhwb3J0IGludGVyZmFjZSBMYWJlbFByb3BzIHtcbiAga2V5OiBzdHJpbmc7XG4gIHBhcnQ6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYWJlbFByb3BzLCBMYWJlbFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMYWJlbFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ICdsYWJlbCBwYXJ0LScgKyB0aGlzLnByb3BzLnBhcnQgfT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHRoaXMucHJvcHMuY29sb3IgfX0+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPi97dGhpcy5wcm9wcy5tYXh9XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
