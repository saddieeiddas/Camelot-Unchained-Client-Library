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

var _eventsEvents = require('../../events/events');

var _eventsEvents2 = _interopRequireDefault(_eventsEvents);

var _classesCombatant = require('../../classes/Combatant');

var _classesCombatant2 = _interopRequireDefault(_classesCombatant);

var _UnitFrame = {
    started: false,
    init: function init() {
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        this.info = new _classesCombatant2['default']({});
    },
    start: function start() {
        var store = this;
        // If this store has already been started, then ingore subsequent start
        // request
        if (this.started) return;
        this.started = true;
        // Listen to the event group for this unit frame
        _eventsEvents2['default'].on(this.handles.topic, function (instance) {
            // Update store info
            store.info = instance;
            // Trigger changed notification for this store
            store.trigger(store.info);
        });
    },
    stop: function stop() {
        // TODO()
    }
};
exports['default'] = _UnitFrame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3N0b3Jlcy9jbGFzc2VzL19Vbml0RnJhbWUudHMiXSwibmFtZXMiOlsiaW5pdCIsInN0YXJ0Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs0QkFNbUIscUJBQXFCOzs7O2dDQUNsQix5QkFBeUI7Ozs7QUFFL0MsSUFBTSxVQUFVLEdBQUc7QUFDakIsV0FBTyxFQUFFLEtBQUs7QUFDZCxRQUFJLEVBQUEsZ0JBQUE7OztBQUdGQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxrQ0FBeUJBLEVBQUVBLENBQUNBLENBQUNBO0tBQzFDQTtBQUNELFNBQUssRUFBQSxpQkFBQTtBQUNIQyxZQUFNQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTs7O0FBSW5CQSxZQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7O0FBR3BCQSxrQ0FBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsUUFBbUJBLEVBQUFBOztBQUdoREEsaUJBQUtBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBOztBQUd0QkEsaUJBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1NBQzNCQSxDQUFDQSxDQUFDQTtLQUNKQTtBQUNELFFBQUksRUFBQSxnQkFBQTs7S0FFSEM7Q0FDRixDQUFDO3FCQUVhLFVBQVUiLCJmaWxlIjoidHMvc3RvcmVzL2NsYXNzZXMvX1VuaXRGcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL2V2ZW50cy9ldmVudHMnO1xuaW1wb3J0IENvbWJhdGFudCBmcm9tICcuLi8uLi9jbGFzc2VzL0NvbWJhdGFudCc7XG5cbmNvbnN0IF9Vbml0RnJhbWUgPSB7XG4gIHN0YXJ0ZWQ6IGZhbHNlLFxuICBpbml0KCkge1xuICAgIC8vIEluaXRpYWxpc2UgdGhlIHN0b3JlIGlzIGJhc2ljIGluZm8uICBUaGlzIGlzIHNvIHRoYXQgUmVhY3QgY29tcG9uZW50c1xuICAgIC8vIGNhbiB1c2UgdGhlIFN0b3JlIHRvIGluaXRpYWxpc2UgdGhlaXIgc3RhdGUgaW4gZ2V0RGVmYXVsdFN0YXRlKCkuXG4gICAgdGhpcy5pbmZvID0gbmV3IENvbWJhdGFudCg8Q29tYmF0YW50Pnt9KTtcbiAgfSxcbiAgc3RhcnQoKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzO1xuXG4gICAgLy8gSWYgdGhpcyBzdG9yZSBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWQsIHRoZW4gaW5nb3JlIHN1YnNlcXVlbnQgc3RhcnRcbiAgICAvLyByZXF1ZXN0XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGV2ZW50IGdyb3VwIGZvciB0aGlzIHVuaXQgZnJhbWVcbiAgICBldmVudHMub24odGhpcy5oYW5kbGVzLnRvcGljLCAoaW5zdGFuY2U6IENvbWJhdGFudCkgPT4ge1xuXG4gICAgICAvLyBVcGRhdGUgc3RvcmUgaW5mb1xuICAgICAgc3RvcmUuaW5mbyA9IGluc3RhbmNlO1xuXG4gICAgICAvLyBUcmlnZ2VyIGNoYW5nZWQgbm90aWZpY2F0aW9uIGZvciB0aGlzIHN0b3JlXG4gICAgICBzdG9yZS50cmlnZ2VyKHN0b3JlLmluZm8pO1xuICAgIH0pO1xuICB9LFxuICBzdG9wKCkge1xuICAgIC8vIFRPRE8oKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfVW5pdEZyYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
