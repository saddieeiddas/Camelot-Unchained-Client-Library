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

var _coreClassesLogMessage = require('../../core/classes/LogMessage');

var _coreClassesLogMessage2 = _interopRequireDefault(_coreClassesLogMessage);

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

function run(emitter, topic) {
    _coreClient2['default'].OnLogMessage(function (category, level, time, process, thread, message) {
        emitter.emit(topic, new _coreClassesLogMessage2['default']({
            category: category,
            level: level,
            time: time,
            process: process,
            thread: thread,
            message: message
        }));
    });
}

var LoggingListener = (function () {
    function LoggingListener(handles) {
        _classCallCheck(this, LoggingListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(LoggingListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return LoggingListener;
})();

exports['default'] = LoggingListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvTG9nZ2luZy50cyJdLCJuYW1lcyI6WyJydW4iLCJMb2dnaW5nTGlzdGVuZXIiLCJMb2dnaW5nTGlzdGVuZXIuY29uc3RydWN0b3IiLCJMb2dnaW5nTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVF1QiwrQkFBK0I7Ozs7MEJBQ25DLG1CQUFtQjs7OztBQUV0QyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsNEJBQU9BLFlBQVlBLENBQUNBLFVBQUNBLFFBQWdCQSxFQUFFQSxLQUFhQSxFQUFFQSxJQUFZQSxFQUFFQSxPQUFlQSxFQUFFQSxNQUFjQSxFQUFFQSxPQUFlQSxFQUFBQTtBQUNsSEEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsdUNBQWVBO0FBQ2pDQSxvQkFBUUEsRUFBRUEsUUFBUUE7QUFDbEJBLGlCQUFLQSxFQUFFQSxLQUFLQTtBQUNaQSxnQkFBSUEsRUFBRUEsSUFBSUE7QUFDVkEsbUJBQU9BLEVBQUVBLE9BQU9BO0FBQ2hCQSxrQkFBTUEsRUFBRUEsTUFBTUE7QUFDZEEsbUJBQU9BLEVBQUVBLE9BQU9BO1NBQ2pCQSxDQUFDQSxDQUFDQSxDQUFDQTtLQUNMQSxDQUFDQSxDQUFDQTtDQUNKQTs7SUFFRCxlQUFBO0FBSUVDLGFBSkYsZUFBQSxDQUljQSxPQUF1QkEsRUFBQUE7OEJBSnJDLGVBQUE7O0FBQ0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO0FBSXpCQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtLQUN4QkE7O2lCQU5ILGVBQUE7O2VBT09ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUNsQ0E7U0FDRkE7OztXQVpILGVBQUE7OztxQkFBQSxlQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvTG9nZ2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBIYW5kbGVzTG9nZ2luZyBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNMb2dnaW5nJztcbmltcG9ydCBMb2dNZXNzYWdlIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9Mb2dNZXNzYWdlJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY29yZS9jbGllbnQnO1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyLCB0b3BpYzogc3RyaW5nKSB7XG4gIGNsaWVudC5PbkxvZ01lc3NhZ2UoKGNhdGVnb3J5OiBzdHJpbmcsIGxldmVsOiBudW1iZXIsIHRpbWU6IHN0cmluZywgcHJvY2VzczogbnVtYmVyLCB0aHJlYWQ6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBuZXcgTG9nTWVzc2FnZSh7XG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICB0aW1lOiB0aW1lLFxuICAgICAgcHJvY2VzczogcHJvY2VzcyxcbiAgICAgIHRocmVhZDogdGhyZWFkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dpbmdMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0eXBlOiBzdHJpbmc7XG4gIGhhbmRsZXM6IEhhbmRsZXNMb2dnaW5nO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzTG9nZ2luZykge1xuICAgIHRoaXMuaGFuZGxlcyA9IGhhbmRsZXM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMuaGFuZGxlcy50b3BpYyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
