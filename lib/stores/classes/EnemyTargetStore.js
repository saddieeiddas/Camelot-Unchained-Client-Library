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

var _reflux = require('reflux');

var Reflux = _interopRequireWildcard(_reflux);

var _eventsEvents = require('../../events/events');

var _eventsEvents2 = _interopRequireDefault(_eventsEvents);

var _UnitFrame2 = require('./_UnitFrame');

var _UnitFrame3 = _interopRequireDefault(_UnitFrame2);

var EnemyTargetStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            mixins: [_UnitFrame3['default']],
            handles: _eventsEvents2['default'].handlesEnemyTarget,
            listenables: actions
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = EnemyTargetStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3N0b3Jlcy9jbGFzc2VzL0VuZW15VGFyZ2V0U3RvcmUudHMiXSwibmFtZXMiOlsiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7c0JBTXdCLFFBQVE7O0lBQXBCLE1BQU07OzRCQUNDLHFCQUFxQjs7OzswQkFDakIsY0FBYzs7OztBQUVyQyxJQUFNLGdCQUFnQixHQUFHO0FBQ3ZCLFVBQU0sRUFBQSxrQkFBQTtBQUNKQSxZQUFNQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBTUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDL0JBLGtCQUFNQSxFQUFFQSx3QkFBWUE7QUFDcEJBLG1CQUFPQSxFQUFFQSwwQkFBT0Esa0JBQWtCQTtBQUNsQ0EsdUJBQVdBLEVBQUVBLE9BQU9BO1NBQ3JCQSxDQUFDQSxDQUFDQTtBQUNIQSxlQUFPQTtBQUNMQSxpQkFBS0EsRUFBRUEsS0FBS0E7QUFDWkEsbUJBQU9BLEVBQUVBLE9BQU9BO1NBQ2pCQSxDQUFDQTtLQUNIQTtDQUNGLENBQUM7cUJBRWEsZ0JBQWdCIiwiZmlsZSI6InRzL3N0b3Jlcy9jbGFzc2VzL0VuZW15VGFyZ2V0U3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL2V2ZW50cy9ldmVudHMnO1xuaW1wb3J0IF9Vbml0RnJhbWUgZnJvbSAnLi9fVW5pdEZyYW1lJztcblxuY29uc3QgRW5lbXlUYXJnZXRTdG9yZSA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyhbJ3N0YXJ0JywgJ3N0b3AnXSk7XG4gICAgY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICAgICAgbWl4aW5zOiBbX1VuaXRGcmFtZV0sXG4gICAgICBoYW5kbGVzOiBldmVudHMuaGFuZGxlc0VuZW15VGFyZ2V0LFxuICAgICAgbGlzdGVuYWJsZXM6IGFjdGlvbnNcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15VGFyZ2V0U3RvcmU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
