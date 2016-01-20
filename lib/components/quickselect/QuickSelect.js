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

var QuickSelect = (function (_React$Component) {
    _inherits(QuickSelect, _React$Component);

    function QuickSelect(props) {
        var _this = this;

        _classCallCheck(this, QuickSelect);

        _get(Object.getPrototypeOf(QuickSelect.prototype), 'constructor', this).call(this, props);
        this.uniqueId = 'QuickSelect-' + QuickSelect.idCounter++;
        this.onItemSelect = function (item, itemIndex) {
            _this.setState({ selectedIndex: itemIndex });
            _this.props.onSelectedItemChanged(item);
        };
        this.buildListItem = function (item, itemIndex) {
            return React.createElement("div", { "key": itemIndex, "onClick": _this.onItemSelect.bind(_this, item, itemIndex), "className": 'quickselect-auto-width' }, _this.props.listViewComponentGenerator(item));
        };
        this.state = {
            selectedIndex: 0
        };
    }

    _createClass(QuickSelect, [{
        key: 'render',
        value: function render() {
            if (this.props.items.length == 0) return React.createElement("div", null, "No Elements");
            return React.createElement("div", null, React.createElement("div", { "className": 'dropdown-button quickselect-auto-width', "data-beloworigin": 'true', "data-constrainwidth": 'false', "data-verticaloffset": '0', "data-activates": this.uniqueId, "data-style": 'quickselect-default' }, this.props.activeViewComponentGenerator(this.props.items[this.state.selectedIndex])), React.createElement("div", { "id": this.uniqueId, "className": 'quickselect-default' }, this.props.items.map(this.buildListItem)));
        }
    }]);

    return QuickSelect;
})(React.Component);

QuickSelect.idCounter = 0;
exports['default'] = QuickSelect;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVpY2tzZWxlY3QvUXVpY2tTZWxlY3QudHN4Il0sIm5hbWVzIjpbIlF1aWNrU2VsZWN0IiwiUXVpY2tTZWxlY3QuY29uc3RydWN0b3IiLCJRdWlja1NlbGVjdC5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFnQ3VCLE9BQU87O0lBQWxCLEtBQUs7O0lBYWpCLFdBQUE7Y0FBQSxXQUFBOztBQUlFQSxhQUpGLFdBQUEsQ0FJY0EsS0FBdUJBLEVBQUFBOzs7OEJBSnJDLFdBQUE7O0FBS0lDLG1DQUxKLFdBQUEsNkNBS1VBLEtBQUtBLEVBQUVBO0FBSFBBLFlBQUFBLENBQUFBLFFBQVFBLEdBQVdBLGNBQWNBLEdBQUdBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO0FBU3BFQSxZQUFBQSxDQUFBQSxZQUFZQSxHQUFHQSxVQUFDQSxJQUFTQSxFQUFFQSxTQUFpQkEsRUFBQUE7QUFDMUNBLGtCQUFLQSxRQUFRQSxDQUFDQSxFQUFDQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFDQSxDQUFDQSxDQUFDQTtBQUMxQ0Esa0JBQUtBLEtBQUtBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7U0FDeENBLENBQUFBO0FBRURBLFlBQUFBLENBQUFBLGFBQWFBLEdBQUdBLFVBQUNBLElBQVNBLEVBQUVBLFNBQWlCQSxFQUFBQTtBQUMzQ0EsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLEtBQUlBLEVBQUVBLFNBQVVBLEVBQUFBLFNBQVFBLEVBQUVBLE1BQUtBLFlBQVlBLENBQUNBLElBQUlBLFFBQU9BLElBQUlBLEVBQUVBLFNBQVNBLENBQUVBLEVBQUFBLFdBQVVBLEVBQUNBLHdCQUF3QkEsRUFBQUEsRUFDNUdBLE1BQUtBLEtBQUtBLENBQUNBLDBCQUEwQkEsQ0FBQ0EsSUFBSUEsQ0FBRUEsQ0FDekNBLENBQ05BO1NBQ0hBLENBQUFBO0FBaEJDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQTtBQUNYQSx5QkFBYUEsRUFBRUEsQ0FBQ0E7U0FDakJBLENBQUNBO0tBQ0hBOztpQkFUSCxXQUFBOztlQXdCUUQsa0JBQUFBO0FBQ0pFLGdCQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxFQUFFQSxPQUFPQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxJQUFBQSxFQUFBQSxhQUFBQSxDQUFrQkEsQ0FBQ0E7QUFDaEVBLG1CQUNFQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxJQUFBQSxFQUNGQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxXQUFVQSxFQUFFQSx3Q0FBeUNBLEVBQUFBLGtCQUFpQkEsRUFBQ0EsTUFBTUEsRUFBQUEscUJBQzVEQSxFQUFDQSxPQUFPQSxFQUFBQSxxQkFBb0JBLEVBQUNBLEdBQUdBLEVBQUFBLGdCQUFlQSxFQUFFQSxJQUFJQSxDQUFDQSxRQUFTQSxFQUFBQSxZQUN4RUEsRUFBRUEscUJBQXNCQSxFQUFBQSxFQUNqQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsNEJBQTRCQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFFQSxDQUNqRkEsRUFDTkEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsRUFBQUEsSUFBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsUUFBU0EsRUFBQUEsV0FBVUEsRUFBQ0EscUJBQXFCQSxFQUFBQSxFQUNwREEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBRUEsQ0FDdENBLENBQ0ZBLENBQ05BO1NBQ0hBOzs7V0F0Q0gsV0FBQTtHQUEwQixLQUFLLENBQUMsU0FBUzs7QUFDeEIsV0FBQSxDQUFBLFNBQVMsR0FBVyxDQUFDLENBc0NyQztxQkFFYyxXQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvcXVpY2tzZWxlY3QvUXVpY2tTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuLyoqXG4gKiBNYXRlcmlhbGl6ZSBkcm9wZG93biBpbnNwaXJlZCBxdWlja3NlbGVjdCBsaXN0LlxuICogXG4gKiAqcmVxdWlyZXMgbWF0ZXJpYWxpemUganMgJiBjc3MgdG8gYmUgaW5jbHVkZWQgb24geW91ciBodG1sIHBhZ2UuXG4gKiBcbiAqIFVTQUdFOlxuICogXG4gKiBjbGFzcyBNeVF1aWNrU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gKiAgIGdlbmVyYXRlQWN0aXZlVmlldyA9IChpdGVtOiBhbnkpID0+IHtcbiAqICAgICByZXR1cm4gPGRpdj57aXRlbS5mb299PC9kaXY+O1xuICogICB9XG4gKiAgIGdlbmVyYXRlTGlzdFZpZXcgPSAoaXRlbTogYW55KSA9PiB7XG4gKiAgICAgcmV0dXJuIDxkaXY+e2l0ZW0uZm9vfTwvZGl2PjsgIFxuICogICB9XG4gKiAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlZCA9IChpdGVtOiBhbnkpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgaXRlbSBpcyAnICsgaXRlbS5mb28pO1xuICogICB9XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICBsZXQgaXRlbXMgPSBbe2ZvbzonSGVsbG8nfSx7Zm9vOidXb3JsZCd9XTtcbiAqICAgICByZXR1cm4gPFF1aWNrU2VsZWN0IGl0ZW1zPXtpdGVtc30gYWN0aXZlVmlld0NvbXBvbmVudEdlbmVyYXRvcj17dGhpcy5nZW5lcmF0ZUFjdGl2ZVZpZXd9XG4gICAgICAgICAgbGlzdFZpZXdDb21wb25lbnRHZW5lcmF0b3I9e3RoaXMuZ2VuZXJhdGVMaXN0Vmlld30gb25TZWxlY3RlZEl0ZW1DaGFuZ2VkPXt0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZH0gLz47XG4gKiAgIH1cbiAqIH1cbiAqIFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBRdWlja1NlbGVjdFByb3BzIHtcbiAgaXRlbXM6IEFycmF5PGFueT47XG4gIGFjdGl2ZVZpZXdDb21wb25lbnRHZW5lcmF0b3I6IChpdGVtOiBhbnkpID0+IGFueTtcbiAgbGlzdFZpZXdDb21wb25lbnRHZW5lcmF0b3I6IChpdGVtOiBhbnkpID0+IGFueTtcbiAgb25TZWxlY3RlZEl0ZW1DaGFuZ2VkOiAoaXRlbTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrU2VsZWN0U3RhdGUge1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG59XG5cbmNsYXNzIFF1aWNrU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFF1aWNrU2VsZWN0UHJvcHMsIFF1aWNrU2VsZWN0U3RhdGU+IHtcbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudGVyOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHVuaXF1ZUlkOiBzdHJpbmcgPSAnUXVpY2tTZWxlY3QtJyArIFF1aWNrU2VsZWN0LmlkQ291bnRlcisrO1xuICBcbiAgY29uc3RydWN0b3IocHJvcHM6IFF1aWNrU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDBcbiAgICB9O1xuICB9XG4gIFxuICBvbkl0ZW1TZWxlY3QgPSAoaXRlbTogYW55LCBpdGVtSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSW5kZXg6IGl0ZW1JbmRleH0pO1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RlZEl0ZW1DaGFuZ2VkKGl0ZW0pO1xuICB9XG4gIFxuICBidWlsZExpc3RJdGVtID0gKGl0ZW06IGFueSwgaXRlbUluZGV4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW1JbmRleH0gb25DbGljaz17dGhpcy5vbkl0ZW1TZWxlY3QuYmluZCh0aGlzLCBpdGVtLCBpdGVtSW5kZXgpfSBjbGFzc05hbWU9J3F1aWNrc2VsZWN0LWF1dG8td2lkdGgnPlxuICAgICAgICB7dGhpcy5wcm9wcy5saXN0Vmlld0NvbXBvbmVudEdlbmVyYXRvcihpdGVtKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID09IDApIHJldHVybiA8ZGl2Pk5vIEVsZW1lbnRzPC9kaXY+O1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZHJvcGRvd24tYnV0dG9uIHF1aWNrc2VsZWN0LWF1dG8td2lkdGgnfSBkYXRhLWJlbG93b3JpZ2luPSd0cnVlJ1xuICAgICAgICAgIGRhdGEtY29uc3RyYWlud2lkdGg9J2ZhbHNlJyBkYXRhLXZlcnRpY2Fsb2Zmc2V0PScwJyBkYXRhLWFjdGl2YXRlcz17dGhpcy51bmlxdWVJZH1cbiAgICAgICAgICBkYXRhLXN0eWxlPXsncXVpY2tzZWxlY3QtZGVmYXVsdCd9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGl2ZVZpZXdDb21wb25lbnRHZW5lcmF0b3IodGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXhdKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9e3RoaXMudW5pcXVlSWR9IGNsYXNzTmFtZT0ncXVpY2tzZWxlY3QtZGVmYXVsdCc+XG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKHRoaXMuYnVpbGRMaXN0SXRlbSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWlja1NlbGVjdDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
