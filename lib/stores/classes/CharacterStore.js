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

var CharacterStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            mixins: [_UnitFrame3['default']],
            handles: _eventsEvents2['default'].handlesCharacter,
            listenables: actions
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = CharacterStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9jbGFzc2VzL0NoYXJhY3RlclN0b3JlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU13QixRQUFROztJQUFwQixNQUFNOzs0QkFDQyxxQkFBcUI7Ozs7MEJBQ2pCLGNBQWM7Ozs7QUFFckMsSUFBTSxjQUFjLEdBQUc7QUFDckIsVUFBTSxFQUFBLGtCQUFBO0FBQ0pBLFlBQU1BLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0FBQ3hEQSxZQUFNQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtBQUMvQkEsa0JBQU1BLEVBQUVBLHdCQUFZQTtBQUNwQkEsbUJBQU9BLEVBQUVBLDBCQUFPQSxnQkFBZ0JBO0FBQ2hDQSx1QkFBV0EsRUFBRUEsT0FBT0E7U0FDckJBLENBQUNBLENBQUNBO0FBQ0hBLGVBQU9BO0FBQ0xBLGlCQUFLQSxFQUFFQSxLQUFLQTtBQUNaQSxtQkFBT0EsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO0tBQ0hBO0NBQ0YsQ0FBQztxQkFFYSxjQUFjIiwiZmlsZSI6InN0b3Jlcy9jbGFzc2VzL0NoYXJhY3RlclN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi8uLi9ldmVudHMvZXZlbnRzJztcbmltcG9ydCBfVW5pdEZyYW1lIGZyb20gJy4vX1VuaXRGcmFtZSc7XG5cbmNvbnN0IENoYXJhY3RlclN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBtaXhpbnM6IFtfVW5pdEZyYW1lXSxcbiAgICAgIGhhbmRsZXM6IGV2ZW50cy5oYW5kbGVzQ2hhcmFjdGVyLFxuICAgICAgbGlzdGVuYWJsZXM6IGFjdGlvbnNcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlclN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
