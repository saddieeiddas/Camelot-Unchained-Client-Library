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

var StaminaText = React.createClass({
    displayName: 'StaminaText',

    render: function render() {
        var text = '';
        if (this.props.maxStamina) {
            text = this.props.stamina + '/' + this.props.maxStamina;
        }
        return React.createElement("div", { "id": "stamina-text" }, text);
    }
});
exports['default'] = StaminaText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvU3RhbWluYVRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O0FBRWpCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUM5QyxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxZQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ3pCLGdCQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ3pEO0FBQ0QsZUFBUSxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLElBQUcsRUFBQyxjQUFjLEVBQUEsRUFBRSxJQUFLLENBQU0sQ0FBRTtLQUM5QztDQUNGLENBQUMsQ0FBQztxQkFFWSxXQUFXIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvU3RhbWluYVRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGFtaW5hVGV4dCA9IFJlYWN0LmNyZWF0ZUNsYXNzPGFueSwgYW55Pih7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRleHQgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhTdGFtaW5hKSB7XG4gICAgICB0ZXh0ID0gdGhpcy5wcm9wcy5zdGFtaW5hICsgJy8nICsgdGhpcy5wcm9wcy5tYXhTdGFtaW5hO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJzdGFtaW5hLXRleHRcIj57dGV4dH08L2Rpdj4pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhbWluYVRleHQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
