/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _coreClassesChatMessage = require('../../core/classes/ChatMessage');

var _coreClassesChatMessage2 = _interopRequireDefault(_coreClassesChatMessage);

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

function run(emitter, topic) {
    _coreClient2['default'].OnChat(function (type, from, body, nick, iscse) {
        emitter.emit(topic, new _coreClassesChatMessage2['default']({
            type: type,
            from: from,
            body: body,
            nick: nick,
            iscse: iscse
        }));
    });
}

var ChatListener = (function () {
    function ChatListener(handles) {
        _classCallCheck(this, ChatListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(ChatListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return ChatListener;
})();

exports['default'] = ChatListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ2hhdC50cyJdLCJuYW1lcyI6WyJydW4iLCJDaGF0TGlzdGVuZXIiLCJDaGF0TGlzdGVuZXIuY29uc3RydWN0b3IiLCJDaGF0TGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVF3QixnQ0FBZ0M7Ozs7MEJBQ3JDLG1CQUFtQjs7OztBQUV0QyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsNEJBQU9BLE1BQU1BLENBQUNBLFVBQUNBLElBQVlBLEVBQUVBLElBQVlBLEVBQUVBLElBQVlBLEVBQUVBLElBQVlBLEVBQUVBLEtBQWNBLEVBQUFBO0FBQ25GQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSx3Q0FBZ0JBO0FBQ2xDQSxnQkFBSUEsRUFBRUEsSUFBSUE7QUFDVkEsZ0JBQUlBLEVBQUVBLElBQUlBO0FBQ1ZBLGdCQUFJQSxFQUFFQSxJQUFJQTtBQUNWQSxnQkFBSUEsRUFBRUEsSUFBSUE7QUFDVkEsaUJBQUtBLEVBQUVBLEtBQUtBO1NBQ2JBLENBQUNBLENBQUNBLENBQUNBO0tBQ0xBLENBQUNBLENBQUNBO0NBQ0pBOztJQUVELFlBQUE7QUFJRUMsYUFKRixZQUFBLENBSWNBLE9BQW9CQSxFQUFBQTs4QkFKbEMsWUFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFJekJBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0tBQ3hCQTs7aUJBTkgsWUFBQTs7ZUFPT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQ2xDQTtTQUNGQTs7O1dBWkgsWUFBQTs7O3FCQUFBLFlBQUEiLCJmaWxlIjoiZXZlbnRzL2xpc3RlbmVycy9DaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEhhbmRsZXNDaGF0IGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NoYXQnO1xuaW1wb3J0IENoYXRNZXNzYWdlIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9DaGF0TWVzc2FnZSc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NvcmUvY2xpZW50JztcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBjbGllbnQuT25DaGF0KCh0eXBlOiBudW1iZXIsIGZyb206IHN0cmluZywgYm9keTogc3RyaW5nLCBuaWNrOiBzdHJpbmcsIGlzY3NlOiBib29sZWFuKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBuZXcgQ2hhdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGZyb206IGZyb20sXG4gICAgICBib2R5OiBib2R5LFxuICAgICAgbmljazogbmljayxcbiAgICAgIGlzY3NlOiBpc2NzZVxuICAgIH0pKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0eXBlOiBzdHJpbmc7XG4gIGhhbmRsZXM6IEhhbmRsZXNDaGF0O1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ2hhdCkge1xuICAgIHRoaXMuaGFuZGxlcyA9IGhhbmRsZXM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMuaGFuZGxlcy50b3BpYyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
