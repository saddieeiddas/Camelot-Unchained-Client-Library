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

var AnnouncementsStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _eventsEvents2['default'].handlesAnnouncements,
            listenables: actions,
            init: function init() {
                // Initialise the store is basic info.  This is so that React components
                // can use the Store to initialise their state in getDefaultState().
                this.info = {
                    message: "",
                    type: -1
                };
            },
            start: function start() {
                console.log('in AnnouncementStore:start()');
                var store = this;
                // If this store has already been started, then ingore subsequent start
                // request
                if (this.started) return;
                this.started = true;
                // Listen to the event group for this unit frame
                _eventsEvents2['default'].on(this.handles.topic, function (announcement) {
                    // Update store info
                    store.info = {
                        message: announcement.message,
                        type: announcement.type
                    };
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
exports['default'] = AnnouncementsStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3N0b3Jlcy9jbGFzc2VzL0Fubm91bmNlbWVudHNTdG9yZS50cyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJjcmVhdGUuaW5pdCIsImNyZWF0ZS5zdGFydCIsImNyZWF0ZS5zdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7c0JBTXdCLFFBQVE7O0lBQXBCLE1BQU07OzRCQUNDLHFCQUFxQjs7OztBQUV4QyxJQUFNLGtCQUFrQixHQUFHO0FBQ3pCLFVBQU0sRUFBQSxrQkFBQTtBQUNKQSxZQUFNQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBTUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDL0JBLG1CQUFPQSxFQUFFQSwwQkFBT0Esb0JBQW9CQTtBQUNwQ0EsdUJBQVdBLEVBQUVBLE9BQU9BO0FBQ3BCQSxnQkFBSUEsRUFBQUEsZ0JBQUFBOzs7QUFHRkMsb0JBQUlBLENBQUNBLElBQUlBLEdBQUdBO0FBQ1ZBLDJCQUFPQSxFQUFFQSxFQUFFQTtBQUNYQSx3QkFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7aUJBQ1RBLENBQUNBO2FBQ0hBO0FBQ0RELGlCQUFLQSxFQUFBQSxpQkFBQUE7QUFDSEUsdUJBQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLG9CQUFNQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTs7O0FBSW5CQSxvQkFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0E7QUFDekJBLG9CQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTs7QUFHcEJBLDBDQUFPQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxZQUFpQkEsRUFBQUE7O0FBRzlDQSx5QkFBS0EsQ0FBQ0EsSUFBSUEsR0FBR0E7QUFDWEEsK0JBQU9BLEVBQUVBLFlBQVlBLENBQUNBLE9BQU9BO0FBQzdCQSw0QkFBSUEsRUFBRUEsWUFBWUEsQ0FBQ0EsSUFBSUE7cUJBQ3hCQSxDQUFDQTs7QUFHRkEseUJBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2lCQUMzQkEsQ0FBQ0EsQ0FBQ0E7YUFDSkE7QUFDREYsZ0JBQUlBLEVBQUFBLGdCQUFBQTs7YUFFSEc7U0FDRkgsQ0FBQ0EsQ0FBQ0E7QUFFSEEsZUFBT0E7QUFDTEEsaUJBQUtBLEVBQUVBLEtBQUtBO0FBQ1pBLG1CQUFPQSxFQUFFQSxPQUFPQTtTQUNqQkEsQ0FBQ0E7S0FDSEE7Q0FDRixDQUFDO3FCQUNhLGtCQUFrQiIsImZpbGUiOiJ0cy9zdG9yZXMvY2xhc3Nlcy9Bbm5vdW5jZW1lbnRzU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL2V2ZW50cy9ldmVudHMnO1xuXG5jb25zdCBBbm5vdW5jZW1lbnRzU3RvcmUgPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoWydzdGFydCcsICdzdG9wJ10pO1xuICAgIGNvbnN0IHN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgICAgIGhhbmRsZXM6IGV2ZW50cy5oYW5kbGVzQW5ub3VuY2VtZW50cyxcbiAgICAgIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICAgICAgaW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgc3RvcmUgaXMgYmFzaWMgaW5mby4gIFRoaXMgaXMgc28gdGhhdCBSZWFjdCBjb21wb25lbnRzXG4gICAgICAgIC8vIGNhbiB1c2UgdGhlIFN0b3JlIHRvIGluaXRpYWxpc2UgdGhlaXIgc3RhdGUgaW4gZ2V0RGVmYXVsdFN0YXRlKCkuXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICAgIHR5cGU6IC0xXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBBbm5vdW5jZW1lbnRTdG9yZTpzdGFydCgpJyk7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGlzIHN0b3JlIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCwgdGhlbiBpbmdvcmUgc3Vic2VxdWVudCBzdGFydFxuICAgICAgICAvLyByZXF1ZXN0XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIGV2ZW50IGdyb3VwIGZvciB0aGlzIHVuaXQgZnJhbWVcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMuaGFuZGxlcy50b3BpYywgKGFubm91bmNlbWVudDogYW55KSA9PiB7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgc3RvcmUgaW5mb1xuICAgICAgICAgIHN0b3JlLmluZm8gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBhbm5vdW5jZW1lbnQubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IGFubm91bmNlbWVudC50eXBlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlZCBub3RpZmljYXRpb24gZm9yIHRoaXMgc3RvcmVcbiAgICAgICAgICBzdG9yZS50cmlnZ2VyKHN0b3JlLmluZm8pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdG9wKCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBBbm5vdW5jZW1lbnRzU3RvcmU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
