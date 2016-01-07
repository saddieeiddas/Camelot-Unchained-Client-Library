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

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

function run(emitter, topic) {
    _coreClient2['default'].OnBeginChat(function () {
        emitter.emit(topic, true);
    });
}

var BeginChatListener = (function () {
    function BeginChatListener(handles) {
        _classCallCheck(this, BeginChatListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(BeginChatListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return BeginChatListener;
})();

exports['default'] = BeginChatListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQmVnaW5DaGF0LnRzIl0sIm5hbWVzIjpbInJ1biIsIkJlZ2luQ2hhdExpc3RlbmVyIiwiQmVnaW5DaGF0TGlzdGVuZXIuY29uc3RydWN0b3IiLCJCZWdpbkNoYXRMaXN0ZW5lci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUW1CLG1CQUFtQjs7OztBQUV0QyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsNEJBQU9BLFdBQVdBLENBQUNBLFlBQUFBO0FBQ2pCQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUMzQkEsQ0FBQ0EsQ0FBQ0E7Q0FDSkE7O0lBRUQsaUJBQUE7QUFJRUMsYUFKRixpQkFBQSxDQUljQSxPQUF5QkEsRUFBQUE7OEJBSnZDLGlCQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUl6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7S0FDeEJBOztpQkFOSCxpQkFBQTs7ZUFPT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQ2xDQTtTQUNGQTs7O1dBWkgsaUJBQUE7OztxQkFBQSxpQkFBQSIsImZpbGUiOiJldmVudHMvbGlzdGVuZXJzL0JlZ2luQ2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBIYW5kbGVzQmVnaW5DaGF0IGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0JlZ2luQ2hhdCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NvcmUvY2xpZW50JztcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBjbGllbnQuT25CZWdpbkNoYXQoKCkgPT4ge1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgdHJ1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWdpbkNoYXRMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0eXBlOiBzdHJpbmc7XG4gIGhhbmRsZXM6IEhhbmRsZXNCZWdpbkNoYXQ7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNCZWdpbkNoYXQpIHtcbiAgICB0aGlzLmhhbmRsZXMgPSBoYW5kbGVzO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLmhhbmRsZXMudG9waWMpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
