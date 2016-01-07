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

var ChatMessage = (function () {
    function ChatMessage() {
        var chatMessage = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ChatMessage);

        this.type = chatMessage.type;
        this.from = chatMessage.from;
        this.body = chatMessage.body;
        this.nick = chatMessage.nick;
        this.iscse = chatMessage.iscse;
    }

    _createClass(ChatMessage, null, [{
        key: "create",
        value: function create() {
            var a = new ChatMessage();
            return a;
        }
    }]);

    return ChatMessage;
})();

exports["default"] = ChatMessage;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9DaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6WyJDaGF0TWVzc2FnZSIsIkNoYXRNZXNzYWdlLmNvbnN0cnVjdG9yIiwiQ2hhdE1lc3NhZ2UuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFNQSxXQUFBO0FBT0VBLGFBUEYsV0FBQSxHQU8yQ0E7WUFBN0JBLFdBQVdBLHlEQUFnQkEsRUFBRUE7OzhCQVAzQyxXQUFBOztBQVFJQyxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUM3QkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDN0JBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBO0FBQzdCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUM3QkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDaENBOztpQkFiSCxXQUFBOztlQWVlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFdBQVdBLEVBQUVBLENBQUNBO0FBQzFCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWxCSCxXQUFBOzs7cUJBcUJlLFdBQVciLCJmaWxlIjoiY29yZS9jbGFzc2VzL0NoYXRNZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmNsYXNzIENoYXRNZXNzYWdlICB7XG4gIHR5cGU6IG51bWJlcjtcbiAgZnJvbTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIG5pY2s6IHN0cmluZztcbiAgaXNjc2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY2hhdE1lc3NhZ2UgPSA8Q2hhdE1lc3NhZ2U+e30pIHtcbiAgICB0aGlzLnR5cGUgPSBjaGF0TWVzc2FnZS50eXBlO1xuICAgIHRoaXMuZnJvbSA9IGNoYXRNZXNzYWdlLmZyb207XG4gICAgdGhpcy5ib2R5ID0gY2hhdE1lc3NhZ2UuYm9keTtcbiAgICB0aGlzLm5pY2sgPSBjaGF0TWVzc2FnZS5uaWNrO1xuICAgIHRoaXMuaXNjc2UgPSBjaGF0TWVzc2FnZS5pc2NzZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ2hhdE1lc3NhZ2UoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0TWVzc2FnZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
