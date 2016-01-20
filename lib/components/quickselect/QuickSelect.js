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

// constants
var qsDropDownId = 0;

var QuickSelectProps = function QuickSelectProps() {
    _classCallCheck(this, QuickSelectProps);
};

exports.QuickSelectProps = QuickSelectProps;

var QuickSelectState = function QuickSelectState() {
    _classCallCheck(this, QuickSelectState);
};

exports.QuickSelectState = QuickSelectState;

var QuickSelect = (function (_React$Component) {
    _inherits(QuickSelect, _React$Component);

    function QuickSelect(props) {
        _classCallCheck(this, QuickSelect);

        _get(Object.getPrototypeOf(QuickSelect.prototype), 'constructor', this).call(this, props);
    }

    _createClass(QuickSelect, [{
        key: 'componentWillMount',
        value: function componentWillMount(props, state) {
            this.setState({ index: 0, uniqueId: 'QS-Dropdown-' + qsDropDownId++ });
        }
    }, {
        key: 'handleItemOnClick',
        value: function handleItemOnClick(event, index, value) {
            this.setState({ index: index, uniqueId: this.state.uniqueId });
            this.props.onSelect(index, value, this.state.uniqueId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var dropDownOutput = [];
            //create list
            if (this.props.list.length === this.props.values.length && this.props.list.length > 0) {
                var _loop = function (i) {
                    var item = _this.props.list[i];
                    var value = _this.props.values[i];
                    dropDownOutput.push(React.createElement("div", { "key": i, "onClick": function onClick(event) {
                            return _this.handleItemOnClick(event, i, value);
                        } }, React.createElement("div", { "className": 'quickselect-auto-width ' + _this.props.styleList }, item)));
                };

                for (var i = 0; i < this.props.list.length; i++) {
                    _loop(i);
                }
            }
            // Draw the selected item
            var currentLabel = this.props.label;
            if (this.props.list[this.state.index]) {
                currentLabel = this.props.list[this.state.index];
            }
            return React.createElement("div", null, React.createElement("div", { "className": 'dropdown-button quickselect-auto-width ' + this.props.styleButton, "data-beloworigin": 'true', "data-constrainwidth": 'false', "data-verticaloffset": '0', "data-activates": this.state.uniqueId, "data-style": 'quickselect-default' }, currentLabel), React.createElement("div", { "id": this.state.uniqueId, "className": 'quickselect-default' }, dropDownOutput));
        }
    }]);

    return QuickSelect;
})(React.Component);

exports['default'] = QuickSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVpY2tzZWxlY3QvUXVpY2tTZWxlY3QudHN4Il0sIm5hbWVzIjpbIlF1aWNrU2VsZWN0IiwiUXVpY2tTZWxlY3QuY29uc3RydWN0b3IiLCJRdWlja1NlbGVjdC5jb21wb25lbnRXaWxsTW91bnQiLCJRdWlja1NlbGVjdC5oYW5kbGVJdGVtT25DbGljayIsIlF1aWNrU2VsZWN0LnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQVd1QixPQUFPOztJQUFsQixLQUFLOzs7QUFJakIsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDOztJQUU3QixnQkFBQSxZQUFBLGdCQUFBOzBCQUFBLGdCQUFBOzs7OztJQVNBLGdCQUFBLFlBQUEsZ0JBQUE7MEJBQUEsZ0JBQUE7Ozs7O0lBS0EsV0FBQTtjQUFBLFdBQUE7O0FBQ0VBLGFBREYsV0FBQSxDQUNjQSxLQUF1QkEsRUFBQUE7OEJBRHJDLFdBQUE7O0FBRUlDLG1DQUZKLFdBQUEsNkNBRVVBLEtBQUtBLEVBQUVBO0tBQ2RBOztpQkFISCxXQUFBOztlQUlvQkQsNEJBQUNBLEtBQXVCQSxFQUFFQSxLQUF1QkEsRUFBQUE7QUFDakVFLGdCQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxFQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFFQSxRQUFRQSxFQUFFQSxjQUFjQSxHQUFHQSxZQUFZQSxFQUFFQSxFQUFxQkEsQ0FBQ0EsQ0FBQ0E7U0FDMUZBOzs7ZUFDZ0JGLDJCQUFDQSxLQUFVQSxFQUFFQSxLQUFhQSxFQUFFQSxLQUFVQSxFQUFBQTtBQUNyREcsZ0JBQUlBLENBQUNBLFFBQVFBLENBQUNBLEVBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLEVBQUVBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQXFCQSxDQUFDQSxDQUFDQTtBQUVqRkEsZ0JBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLEVBQUVB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KlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vKipcbiAqIE1hdGVyaWFsaXplIERyb3Bkb3duIExpc3RcbiAqIEFjY2VwdHMgY3VzdG9tIGNvbXBvbmVudHMgZm9yIGJ1dHRvbiBhbmQgbGlzdCBpdGVtc1xuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gY29uc3RhbnRzXG5cbmxldCBxc0Ryb3BEb3duSWQ6IG51bWJlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBRdWlja1NlbGVjdFByb3BzIHtcbiAgbGFiZWw6IGFueTtcbiAgbGlzdDogYW55W107XG4gIHZhbHVlczogYW55W107XG4gIHN0eWxlQnV0dG9uOiBhbnk7XG4gIHN0eWxlTGlzdDogYW55O1xuICBvblNlbGVjdDogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tTZWxlY3RTdGF0ZSB7XG4gIHVuaXF1ZUlkOiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmNsYXNzIFF1aWNrU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFF1aWNrU2VsZWN0UHJvcHMsIFF1aWNrU2VsZWN0U3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFF1aWNrU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KHByb3BzOiBRdWlja1NlbGVjdFByb3BzLCBzdGF0ZTogUXVpY2tTZWxlY3RTdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiAwLCB1bmlxdWVJZDogJ1FTLURyb3Bkb3duLScgKyBxc0Ryb3BEb3duSWQrK30gYXMgUXVpY2tTZWxlY3RTdGF0ZSk7XG4gIH1cbiAgaGFuZGxlSXRlbU9uQ2xpY2soZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiBpbmRleCwgdW5pcXVlSWQ6IHRoaXMuc3RhdGUudW5pcXVlSWR9IGFzIFF1aWNrU2VsZWN0U3RhdGUpO1xuICAgIFxuICAgIHRoaXMucHJvcHMub25TZWxlY3QoaW5kZXgsIHZhbHVlLCB0aGlzLnN0YXRlLnVuaXF1ZUlkKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZHJvcERvd25PdXRwdXQ6IGFueVtdID0gW107XG4gICAgXG4gICAgLy9jcmVhdGUgbGlzdFxuICAgIGlmKHRoaXMucHJvcHMubGlzdC5sZW5ndGggPT09IHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMubGlzdFtpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGRyb3BEb3duT3V0cHV0LnB1c2goXG4gICAgICAgICAgPGRpdiBrZXk9e2l9IG9uQ2xpY2s9eyhldmVudDogYW55KSA9PiB0aGlzLmhhbmRsZUl0ZW1PbkNsaWNrKGV2ZW50LCBpLCB2YWx1ZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydxdWlja3NlbGVjdC1hdXRvLXdpZHRoICcgKyB0aGlzLnByb3BzLnN0eWxlTGlzdH0+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gRHJhdyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgIHZhciBjdXJyZW50TGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsO1xuICAgIGlmICh0aGlzLnByb3BzLmxpc3RbdGhpcy5zdGF0ZS5pbmRleF0pIHtcbiAgICAgIGN1cnJlbnRMYWJlbCA9IHRoaXMucHJvcHMubGlzdFt0aGlzLnN0YXRlLmluZGV4XTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Ryb3Bkb3duLWJ1dHRvbiBxdWlja3NlbGVjdC1hdXRvLXdpZHRoICcgKyB0aGlzLnByb3BzLnN0eWxlQnV0dG9ufSBkYXRhLWJlbG93b3JpZ2luPSd0cnVlJyBkYXRhLWNvbnN0cmFpbndpZHRoPSdmYWxzZScgZGF0YS12ZXJ0aWNhbG9mZnNldD0nMCcgZGF0YS1hY3RpdmF0ZXM9e3RoaXMuc3RhdGUudW5pcXVlSWR9IGRhdGEtc3R5bGU9eydxdWlja3NlbGVjdC1kZWZhdWx0J30+XG4gICAgICAgICAge2N1cnJlbnRMYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9e3RoaXMuc3RhdGUudW5pcXVlSWR9IGNsYXNzTmFtZT0ncXVpY2tzZWxlY3QtZGVmYXVsdCc+XG4gICAgICAgICAge2Ryb3BEb3duT3V0cHV0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tTZWxlY3Q7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
