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

var ControlGameStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _eventsEvents2['default'].handlesControlGame,
            listenables: actions,
            init: function init() {
                // Initialise the store is basic info.  This is so that React components
                // can use the Store to initialise their state in getDefaultState().
                this.info = {};
            },
            start: function start() {
                var store = this;
                // If this store has already been started, then ingore subsequent start
                // request
                if (this.started) return;
                this.started = true;
                // Listen to the event group for this unit frame
                _eventsEvents2['default'].on(this.handles.topic, function (controlGame) {
                    // Update store info
                    store.info = controlGame;
                    // Trigger changed notification for this store
                    store.trigger(store.info);
                });
            },
            stop: function stop() {
                // TODO
            }
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = ControlGameStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9jbGFzc2VzL0NvbnRyb2xHYW1lU3RvcmUudHMiXSwibmFtZXMiOlsiY3JlYXRlIiwiY3JlYXRlLmluaXQiLCJjcmVhdGUuc3RhcnQiLCJjcmVhdGUuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU13QixRQUFROztJQUFwQixNQUFNOzs0QkFDQyxxQkFBcUI7Ozs7QUFFeEMsSUFBTSxnQkFBZ0IsR0FBRztBQUN2QixVQUFNLEVBQUEsa0JBQUE7QUFDSkEsWUFBTUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDeERBLFlBQU1BLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0FBQy9CQSxtQkFBT0EsRUFBRUEsMEJBQU9BLGtCQUFrQkE7QUFDbENBLHVCQUFXQSxFQUFFQSxPQUFPQTtBQUNwQkEsZ0JBQUlBLEVBQUFBLGdCQUFBQTs7O0FBR0ZDLG9CQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUVYQSxDQUFDQTthQUNIQTtBQUNERCxpQkFBS0EsRUFBQUEsaUJBQUFBO0FBQ0hFLG9CQUFNQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTs7O0FBSW5CQSxvQkFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0E7QUFDekJBLG9CQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTs7QUFJcEJBLDBDQUFPQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxXQUFnQkEsRUFBQUE7O0FBRzdDQSx5QkFBS0EsQ0FBQ0EsSUFBSUEsR0FBR0EsV0FBV0EsQ0FBQ0E7O0FBR3pCQSx5QkFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7aUJBQzNCQSxDQUFDQSxDQUFDQTthQUNKQTtBQUNERixnQkFBSUEsRUFBQUEsZ0JBQUFBOzthQUVIRztTQUNGSCxDQUFDQSxDQUFDQTtBQUNIQSxlQUFPQTtBQUNMQSxpQkFBS0EsRUFBRUEsS0FBS0E7QUFDWkEsbUJBQU9BLEVBQUVBLE9BQU9BO1NBQ2pCQSxDQUFDQTtLQUNIQTtDQUNGLENBQUM7cUJBRWEsZ0JBQWdCIiwiZmlsZSI6InN0b3Jlcy9jbGFzc2VzL0NvbnRyb2xHYW1lU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL2V2ZW50cy9ldmVudHMnO1xuXG5jb25zdCBDb250cm9sR2FtZVN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBoYW5kbGVzOiBldmVudHMuaGFuZGxlc0NvbnRyb2xHYW1lLFxuICAgICAgbGlzdGVuYWJsZXM6IGFjdGlvbnMsXG4gICAgICBpbml0KCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBzdG9yZSBpcyBiYXNpYyBpbmZvLiAgVGhpcyBpcyBzbyB0aGF0IFJlYWN0IGNvbXBvbmVudHNcbiAgICAgICAgLy8gY2FuIHVzZSB0aGUgU3RvcmUgdG8gaW5pdGlhbGlzZSB0aGVpciBzdGF0ZSBpbiBnZXREZWZhdWx0U3RhdGUoKS5cbiAgICAgICAgdGhpcy5pbmZvID0ge1xuXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGlzIHN0b3JlIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCwgdGhlbiBpbmdvcmUgc3Vic2VxdWVudCBzdGFydFxuICAgICAgICAvLyByZXF1ZXN0XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgZXZlbnQgZ3JvdXAgZm9yIHRoaXMgdW5pdCBmcmFtZVxuICAgICAgICBldmVudHMub24odGhpcy5oYW5kbGVzLnRvcGljLCAoY29udHJvbEdhbWU6IGFueSkgPT4ge1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHN0b3JlIGluZm9cbiAgICAgICAgICBzdG9yZS5pbmZvID0gY29udHJvbEdhbWU7XG5cbiAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZWQgbm90aWZpY2F0aW9uIGZvciB0aGlzIHN0b3JlXG4gICAgICAgICAgc3RvcmUudHJpZ2dlcihzdG9yZS5pbmZvKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc3RvcCgpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWVTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
