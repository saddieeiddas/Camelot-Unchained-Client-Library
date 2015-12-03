/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var InjuryText = React.createClass({
    displayName: 'InjuryText',

    render: function render() {
        var text = '';
        if (this.props.maxHealth) {
            text = this.props.health + '/' + this.props.maxHealth;
        }
        return React.createElement("div", { "id": "injury-text" }, text);
    }
});
exports['default'] = InjuryText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvSW5qdXJ5VGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7QUFFakIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7O0FBQzdDLFVBQU0sRUFBRSxrQkFBQTtBQUNOLFlBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDeEIsZ0JBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDdkQ7QUFDRCxlQUFRLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsSUFBRyxFQUFDLGFBQWEsRUFBQSxFQUFFLElBQUssQ0FBTSxDQUFFO0tBQzdDO0NBQ0YsQ0FBQyxDQUFDO3FCQUVZLFVBQVUiLCJmaWxlIjoidHMvY29tcG9uZW50cy91bml0ZnJhbWUvY29tcG9uZW50cy9Jbmp1cnlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5qdXJ5VGV4dCA9IFJlYWN0LmNyZWF0ZUNsYXNzPGFueSwgYW55Pih7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRleHQgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhIZWFsdGgpIHtcbiAgICAgIHRleHQgPSB0aGlzLnByb3BzLmhlYWx0aCArICcvJyArIHRoaXMucHJvcHMubWF4SGVhbHRoO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJpbmp1cnktdGV4dFwiPnt0ZXh0fTwvZGl2Pik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmp1cnlUZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
