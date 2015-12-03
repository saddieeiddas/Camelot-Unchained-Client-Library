/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Injury = require('./Injury');

var _Injury2 = _interopRequireDefault(_Injury);

// Display list of injuries.  Only injuries not 100% are shown
var Injuries = React.createClass({
    displayName: 'Injuries',

    render: function render() {
        var injuries = [];
        if (this.props && this.props.injuries) {
            for (var i = 0; i < this.props.injuries.length; i++) {
                var injury = this.props.injuries[i];
                // TODO: should we only display if health < maxHealth or wounds > 0 ???
                if (injury && (injury.health < injury.maxHealth || injury.wounds > 0)) {
                    injuries.push(React.createElement(_Injury2['default'], { "injury": injury }));
                }
            }
        }
        return React.createElement("div", { "id": "injuries", "className": "cse-injuries" }, injuries);
    }
});
exports['default'] = Injuries;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvSW5qdXJpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7c0JBRUUsVUFBVTs7Ozs7QUFHN0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7O0FBQzNDLFVBQU0sRUFBRSxrQkFBQTtBQUNOLFlBQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztBQUM1QixZQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDckMsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkQsb0JBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV0QyxvQkFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEFBQUMsRUFBRTtBQUNyRSw0QkFBUSxDQUFDLElBQUksQ0FBQyxLQUFBLENBQUEsYUFBQSxzQkFBTyxFQUFBLFFBQU8sRUFBRSxNQUFPLEVBQUEsQ0FBRSxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRjtBQUNELGVBQ0UsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxJQUFHLEVBQUMsVUFBVSxFQUFBLFdBQVUsRUFBQyxjQUFjLEVBQUEsRUFDeEMsUUFBUyxDQUNOLENBQ047S0FDSDtDQUNGLENBQUMsQ0FBQztxQkFFWSxRQUFRIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvSW5qdXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSW5qdXJ5IGZyb20gJy4vSW5qdXJ5JztcblxuLy8gRGlzcGxheSBsaXN0IG9mIGluanVyaWVzLiAgT25seSBpbmp1cmllcyBub3QgMTAwJSBhcmUgc2hvd25cbmNvbnN0IEluanVyaWVzID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbmp1cmllcyA6IGFueVtdID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5pbmp1cmllcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmluanVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluanVyeSA9IHRoaXMucHJvcHMuaW5qdXJpZXNbaV07XG4gICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSBvbmx5IGRpc3BsYXkgaWYgaGVhbHRoIDwgbWF4SGVhbHRoIG9yIHdvdW5kcyA+IDAgPz8/XG4gICAgICAgIGlmIChpbmp1cnkgJiYgKGluanVyeS5oZWFsdGggPCBpbmp1cnkubWF4SGVhbHRoIHx8IGluanVyeS53b3VuZHMgPiAwKSkge1xuICAgICAgICAgIGluanVyaWVzLnB1c2goPEluanVyeSBpbmp1cnk9e2luanVyeX0vPik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJpbmp1cmllc1wiIGNsYXNzTmFtZT1cImNzZS1pbmp1cmllc1wiPlxuICAgICAgICB7aW5qdXJpZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5qdXJpZXM7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
