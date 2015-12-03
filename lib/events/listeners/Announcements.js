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
    cuAPI.OnAnnouncement(function (message, type) {
        emitter.emit(topic, {
            message: message,
            type: type
        });
    });
}

var AnnouncementsListener = (function () {
    function AnnouncementsListener(handles) {
        _classCallCheck(this, AnnouncementsListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(AnnouncementsListener, [{
        key: "start",
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return AnnouncementsListener;
})();

exports["default"] = AnnouncementsListener;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9saXN0ZW5lcnMvQW5ub3VuY2VtZW50cy50cyJdLCJuYW1lcyI6WyJydW4iLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIiLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIuY29uc3RydWN0b3IiLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxTQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFDQSxPQUFlQSxFQUFFQSxJQUFZQSxFQUFBQTtBQUNqREEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDbEJBLG1CQUFPQSxFQUFFQSxPQUFPQTtBQUNoQkEsZ0JBQUlBLEVBQUVBLElBQUlBO1NBQ1hBLENBQUNBLENBQUNBO0tBQ0pBLENBQUNBLENBQUNBO0NBQ0pBOztJQUVELHFCQUFBO0FBSUVDLGFBSkYscUJBQUEsQ0FJY0EsT0FBNkJBLEVBQUFBOzhCQUozQyxxQkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFJekJBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0tBQ3hCQTs7aUJBTkgscUJBQUE7O2VBT09ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUNsQ0E7U0FDRkE7OztXQVpILHFCQUFBOzs7cUJBQUEscUJBQUEiLCJmaWxlIjoidHMvZXZlbnRzL2xpc3RlbmVycy9Bbm5vdW5jZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEhhbmRsZXNBbm5vdW5jZW1lbnRzIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0Fubm91bmNlbWVudHMnO1xuXG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgY3VBUEkuT25Bbm5vdW5jZW1lbnQoKG1lc3NhZ2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCB7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ub3VuY2VtZW50c0xpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHR5cGU6IHN0cmluZztcbiAgaGFuZGxlczogSGFuZGxlc0Fubm91bmNlbWVudHM7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNBbm5vdW5jZW1lbnRzKSB7XG4gICAgdGhpcy5oYW5kbGVzID0gaGFuZGxlcztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy5oYW5kbGVzLnRvcGljKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
