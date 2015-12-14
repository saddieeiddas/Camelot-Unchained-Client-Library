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

var ControlGameScoreStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _eventsEvents2['default'].handlesControlGameScore,
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
                _eventsEvents2['default'].on(this.handles.topic, function (controlGameScore) {
                    // Update store info
                    store.info = controlGameScore;
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
exports['default'] = ControlGameScoreStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9jbGFzc2VzL0NvbnRyb2xHYW1lU2NvcmVTdG9yZS50cyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJjcmVhdGUuaW5pdCIsImNyZWF0ZS5zdGFydCIsImNyZWF0ZS5zdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7c0JBTXdCLFFBQVE7O0lBQXBCLE1BQU07OzRCQUNDLHFCQUFxQjs7OztBQUV4QyxJQUFNLHFCQUFxQixHQUFHO0FBQzVCLFVBQU0sRUFBQSxrQkFBQTtBQUNKQSxZQUFNQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBTUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDL0JBLG1CQUFPQSxFQUFFQSwwQkFBT0EsdUJBQXVCQTtBQUN2Q0EsdUJBQVdBLEVBQUVBLE9BQU9BO0FBQ3BCQSxnQkFBSUEsRUFBQUEsZ0JBQUFBOzs7QUFHRkMsb0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBRVhBLENBQUNBO2FBQ0hBO0FBQ0RELGlCQUFLQSxFQUFBQSxpQkFBQUE7QUFDSEUsb0JBQU1BLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBOzs7QUFJbkJBLG9CQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsb0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBOztBQUdwQkEsMENBQU9BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLFVBQUNBLGdCQUFxQkEsRUFBQUE7O0FBR2xEQSx5QkFBS0EsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQWdCQSxDQUFDQTs7QUFHOUJBLHlCQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtpQkFDM0JBLENBQUNBLENBQUNBO2FBQ0pBO0FBQ0RGLGdCQUFJQSxFQUFBQSxnQkFBQUE7O2FBRUhHO1NBQ0ZILENBQUNBLENBQUNBO0FBRUhBLGVBQU9BO0FBQ0xBLGlCQUFLQSxFQUFFQSxLQUFLQTtBQUNaQSxtQkFBT0EsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO0tBQ0hBO0NBQ0YsQ0FBQztxQkFFYSxxQkFBcUIiLCJmaWxlIjoic3RvcmVzL2NsYXNzZXMvQ29udHJvbEdhbWVTY29yZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi8uLi9ldmVudHMvZXZlbnRzJztcblxuY29uc3QgQ29udHJvbEdhbWVTY29yZVN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBoYW5kbGVzOiBldmVudHMuaGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUsXG4gICAgICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgICAgIGluaXQoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIHN0b3JlIGlzIGJhc2ljIGluZm8uICBUaGlzIGlzIHNvIHRoYXQgUmVhY3QgY29tcG9uZW50c1xuICAgICAgICAvLyBjYW4gdXNlIHRoZSBTdG9yZSB0byBpbml0aWFsaXNlIHRoZWlyIHN0YXRlIGluIGdldERlZmF1bHRTdGF0ZSgpLlxuICAgICAgICB0aGlzLmluZm8gPSB7XG5cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgc3RvcmUgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkLCB0aGVuIGluZ29yZSBzdWJzZXF1ZW50IHN0YXJ0XG4gICAgICAgIC8vIHJlcXVlc3RcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgZXZlbnQgZ3JvdXAgZm9yIHRoaXMgdW5pdCBmcmFtZVxuICAgICAgICBldmVudHMub24odGhpcy5oYW5kbGVzLnRvcGljLCAoY29udHJvbEdhbWVTY29yZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgc3RvcmUgaW5mb1xuICAgICAgICAgIHN0b3JlLmluZm8gPSBjb250cm9sR2FtZVNjb3JlO1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2VkIG5vdGlmaWNhdGlvbiBmb3IgdGhpcyBzdG9yZVxuICAgICAgICAgIHN0b3JlLnRyaWdnZXIoc3RvcmUuaW5mbyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHN0b3AoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWVTY29yZVN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
