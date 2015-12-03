/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function run(emitter, topic) {
    cuAPI.OnChat(function (type, from, body, nick, iscse) {
        emitter.emit(topic, {
            type: type,
            from: from,
            body: body,
            nick: nick,
            iscse: iscse
        });
    });
}

var ChatListener = (function () {
    function ChatListener(handles) {
        _classCallCheck(this, ChatListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(ChatListener, [{
        key: "start",
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return ChatListener;
})();

exports["default"] = ChatListener;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9saXN0ZW5lcnMvQ2hhdC50cyJdLCJuYW1lcyI6WyJydW4iLCJDaGF0TGlzdGVuZXIiLCJDaGF0TGlzdGVuZXIuY29uc3RydWN0b3IiLCJDaGF0TGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxTQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxJQUFZQSxFQUFFQSxJQUFZQSxFQUFFQSxJQUFZQSxFQUFFQSxJQUFZQSxFQUFFQSxLQUFjQSxFQUFBQTtBQUNsRkEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDbEJBLGdCQUFJQSxFQUFFQSxJQUFJQTtBQUNWQSxnQkFBSUEsRUFBRUEsSUFBSUE7QUFDVkEsZ0JBQUlBLEVBQUVBLElBQUlBO0FBQ1ZBLGdCQUFJQSxFQUFFQSxJQUFJQTtBQUNWQSxpQkFBS0EsRUFBRUEsS0FBS0E7U0FDYkEsQ0FBQ0EsQ0FBQ0E7S0FDSkEsQ0FBQ0EsQ0FBQ0E7Q0FDSkE7O0lBRUQsWUFBQTtBQUlFQyxhQUpGLFlBQUEsQ0FJY0EsT0FBb0JBLEVBQUFBOzhCQUpsQyxZQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUl6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7S0FDeEJBOztpQkFOSCxZQUFBOztlQU9PRCxlQUFDQSxPQUFxQkEsRUFBQUE7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUNuQkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDbENBO1NBQ0ZBOzs7V0FaSCxZQUFBOzs7cUJBQUEsWUFBQSIsImZpbGUiOiJ0cy9ldmVudHMvbGlzdGVuZXJzL0NoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgSGFuZGxlc0NoYXQgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQ2hhdCc7XG5cbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBjdUFQSS5PbkNoYXQoKHR5cGU6IG51bWJlciwgZnJvbTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG5pY2s6IHN0cmluZywgaXNjc2U6IGJvb2xlYW4pID0+IHtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgYm9keTogYm9keSxcbiAgICAgIG5pY2s6IG5pY2ssXG4gICAgICBpc2NzZTogaXNjc2VcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0eXBlOiBzdHJpbmc7XG4gIGhhbmRsZXM6IEhhbmRsZXNDaGF0O1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ2hhdCkge1xuICAgIHRoaXMuaGFuZGxlcyA9IGhhbmRsZXM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMuaGFuZGxlcy50b3BpYyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
