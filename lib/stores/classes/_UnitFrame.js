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

var _coreClassesCombatant = require('../../core/classes/Combatant');

var _coreClassesCombatant2 = _interopRequireDefault(_coreClassesCombatant);

var _UnitFrame = {
    started: false,
    init: function init() {
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        this.info = new _coreClassesCombatant2['default']({});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9jbGFzc2VzL19Vbml0RnJhbWUudHMiXSwibmFtZXMiOlsiaW5pdCIsInN0YXJ0Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs0QkFNbUIscUJBQXFCOzs7O29DQUNsQiw4QkFBOEI7Ozs7QUFFcEQsSUFBTSxVQUFVLEdBQUc7QUFDakIsV0FBTyxFQUFFLEtBQUs7QUFDZCxRQUFJLEVBQUEsZ0JBQUE7OztBQUdGQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxzQ0FBeUJBLEVBQUVBLENBQUNBLENBQUNBO0tBQzFDQTtBQUNELFNBQUssRUFBQSxpQkFBQTtBQUNIQyxZQUFNQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTs7O0FBSW5CQSxZQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7O0FBR3BCQSxrQ0FBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsUUFBbUJBLEVBQUFBOztBQUdoREEsaUJBQUtBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBOztBQUd0QkEsaUJBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1NBQzNCQSxDQUFDQSxDQUFDQTtLQUNKQTtBQUNELFFBQUksRUFBQSxnQkFBQTs7S0FFSEM7Q0FDRixDQUFDO3FCQUVhLFVBQVUiLCJmaWxlIjoic3RvcmVzL2NsYXNzZXMvX1VuaXRGcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL2V2ZW50cy9ldmVudHMnO1xuaW1wb3J0IENvbWJhdGFudCBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvQ29tYmF0YW50JztcblxuY29uc3QgX1VuaXRGcmFtZSA9IHtcbiAgc3RhcnRlZDogZmFsc2UsXG4gIGluaXQoKSB7XG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgc3RvcmUgaXMgYmFzaWMgaW5mby4gIFRoaXMgaXMgc28gdGhhdCBSZWFjdCBjb21wb25lbnRzXG4gICAgLy8gY2FuIHVzZSB0aGUgU3RvcmUgdG8gaW5pdGlhbGlzZSB0aGVpciBzdGF0ZSBpbiBnZXREZWZhdWx0U3RhdGUoKS5cbiAgICB0aGlzLmluZm8gPSBuZXcgQ29tYmF0YW50KDxDb21iYXRhbnQ+e30pO1xuICB9LFxuICBzdGFydCgpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXM7XG5cbiAgICAvLyBJZiB0aGlzIHN0b3JlIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCwgdGhlbiBpbmdvcmUgc3Vic2VxdWVudCBzdGFydFxuICAgIC8vIHJlcXVlc3RcbiAgICBpZiAodGhpcy5zdGFydGVkKSByZXR1cm47XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgIC8vIExpc3RlbiB0byB0aGUgZXZlbnQgZ3JvdXAgZm9yIHRoaXMgdW5pdCBmcmFtZVxuICAgIGV2ZW50cy5vbih0aGlzLmhhbmRsZXMudG9waWMsIChpbnN0YW5jZTogQ29tYmF0YW50KSA9PiB7XG5cbiAgICAgIC8vIFVwZGF0ZSBzdG9yZSBpbmZvXG4gICAgICBzdG9yZS5pbmZvID0gaW5zdGFuY2U7XG5cbiAgICAgIC8vIFRyaWdnZXIgY2hhbmdlZCBub3RpZmljYXRpb24gZm9yIHRoaXMgc3RvcmVcbiAgICAgIHN0b3JlLnRyaWdnZXIoc3RvcmUuaW5mbyk7XG4gICAgfSk7XG4gIH0sXG4gIHN0b3AoKSB7XG4gICAgLy8gVE9ETygpXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9Vbml0RnJhbWU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
