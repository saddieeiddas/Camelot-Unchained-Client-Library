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

var _coreClassesConsoleMessage = require('../../core/classes/ConsoleMessage');

var _coreClassesConsoleMessage2 = _interopRequireDefault(_coreClassesConsoleMessage);

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

function run(emitter, topic) {
    _coreClient2['default'].OnConsoleText(function (text) {
        emitter.emit(topic, new _coreClassesConsoleMessage2['default']({ text: text }));
    });
}

var ConsoleListener = (function () {
    function ConsoleListener(handles) {
        _classCallCheck(this, ConsoleListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(ConsoleListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return ConsoleListener;
})();

exports['default'] = ConsoleListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29uc29sZS50cyJdLCJuYW1lcyI6WyJydW4iLCJDb25zb2xlTGlzdGVuZXIiLCJDb25zb2xlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb25zb2xlTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQVEyQixtQ0FBbUM7Ozs7MEJBQzNDLG1CQUFtQjs7OztBQUV0QyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsNEJBQU9BLGFBQWFBLENBQUNBLFVBQUNBLElBQVlBLEVBQUFBO0FBQ2hDQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSwyQ0FBbUJBLEVBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBO0tBQ3ZEQSxDQUFDQSxDQUFDQTtDQUNKQTs7SUFFRCxlQUFBO0FBSUVDLGFBSkYsZUFBQSxDQUljQSxPQUF1QkEsRUFBQUE7OEJBSnJDLGVBQUE7O0FBQ0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO0FBSXpCQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtLQUN4QkE7O2lCQU5ILGVBQUE7O2VBT09ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUNsQ0E7U0FDRkE7OztXQVpILGVBQUE7OztxQkFBQSxlQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvQ29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBIYW5kbGVzQ29uc29sZSBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNDb25zb2xlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZSBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvQ29uc29sZU1lc3NhZ2UnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jb3JlL2NsaWVudCc7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgY2xpZW50Lk9uQ29uc29sZVRleHQoKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgbmV3IENvbnNvbGVNZXNzYWdlKHt0ZXh0OiB0ZXh0fSkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHR5cGU6IHN0cmluZztcbiAgaGFuZGxlczogSGFuZGxlc0NvbnNvbGU7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNDb25zb2xlKSB7XG4gICAgdGhpcy5oYW5kbGVzID0gaGFuZGxlcztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy5oYW5kbGVzLnRvcGljKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
