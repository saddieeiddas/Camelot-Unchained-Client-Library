'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restapiRestAPI = require('../../restapi/RestAPI');

var _coreClassesControlGame = require('../../core/classes/ControlGame');

var _coreClassesControlGame2 = _interopRequireDefault(_coreClassesControlGame);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    function tick() {
        // TODO: switch to using cu-restapi
        (0, _restapiRestAPI.getControlGame)(true).then(function (data) {
            var instance = new _coreClassesControlGame2['default'](data);
            emitter.emit(topic, instance);
        })['catch'](function (error) {
            emitter.emit(topic, { error: { status: error.response.status, reason: error.message } });
        });
    }
    if (!timer) {
        setInterval(tick, POLL_INTERVAL);
    }
}

var ControlGameListener = (function () {
    function ControlGameListener(handles) {
        _classCallCheck(this, ControlGameListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(ControlGameListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.topic);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (timer) {
                clearTimeout(timer);
                timer = null;
                this.listening = false;
            }
        }
    }]);

    return ControlGameListener;
})();

exports['default'] = ControlGameListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs4QkFNNkIsdUJBQXVCOztzQ0FFNUIsZ0NBQWdDOzs7O0FBSXhELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLEtBQVUsWUFBQSxDQUFDO0FBRWYsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLGFBQUFBLElBQUFBLEdBQUFBOztBQUVFQyw0Q0FBZUEsSUFBSUEsQ0FBQ0EsQ0FDakJBLElBQUlBLENBQUNBLFVBQUNBLElBQWlCQSxFQUFBQTtBQUN0QkEsZ0JBQU1BLFFBQVFBLEdBQUdBLHdDQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLG1CQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtTQUMvQkEsQ0FBQ0EsU0FDSUEsQ0FBQ0EsVUFBQ0EsS0FBWUEsRUFBQUE7QUFDbEJBLG1CQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFRQSxLQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxFQUFDQSxDQUFDQSxDQUFDQTtTQUNoR0EsQ0FBQ0EsQ0FBQ0E7S0FDTkE7QUFDREQsUUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDVkEsbUJBQVdBLENBQUNBLElBQUlBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO0tBQ2xDQTtDQUNGQTs7SUFFRCxtQkFBQTtBQUdFRSxhQUhGLG1CQUFBLENBR2NBLE9BQTJCQSxFQUFBQTs4QkFIekMsbUJBQUE7O0FBQ0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO0FBR3pCQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtLQUM1QkE7O2lCQUxILG1CQUFBOztlQU1PRCxlQUFDQSxPQUFxQkEsRUFBQUE7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUNuQkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDMUJBO1NBQ0ZBOzs7ZUFDR0YsZ0JBQUFBO0FBQ0ZHLGdCQUFJQSxLQUFLQSxFQUFFQTtBQUNUQSw0QkFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDcEJBLHFCQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNiQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7YUFDeEJBO1NBQ0ZBOzs7V0FsQkgsbUJBQUE7OztxQkFBQSxtQkFBQSIsImZpbGUiOiJldmVudHMvbGlzdGVuZXJzL0NvbnRyb2xHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCB7Z2V0Q29udHJvbEdhbWV9IGZyb20gJy4uLy4uL3Jlc3RhcGkvUmVzdEFQSSc7XG5pbXBvcnQgSGFuZGxlc0NvbnRyb2xHYW1lIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lJztcbmltcG9ydCBDb250cm9sR2FtZSBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvQ29udHJvbEdhbWUnO1xuXG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmNvbnN0IFBPTExfSU5URVJWQUwgPSA1MDAwO1xubGV0IHRpbWVyOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAvLyBUT0RPOiBzd2l0Y2ggdG8gdXNpbmcgY3UtcmVzdGFwaVxuICAgIGdldENvbnRyb2xHYW1lKHRydWUpXG4gICAgICAudGhlbigoZGF0YTogQ29udHJvbEdhbWUpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29udHJvbEdhbWUoZGF0YSk7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgeyBlcnJvcjogeyBzdGF0dXM6ICg8YW55PmVycm9yKS5yZXNwb25zZS5zdGF0dXMsIHJlYXNvbjogZXJyb3IubWVzc2FnZSB9fSk7XG4gICAgICB9KTtcbiAgfVxuICBpZiAoIXRpbWVyKSB7XG4gICAgc2V0SW50ZXJ2YWwodGljaywgUE9MTF9JTlRFUlZBTCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbEdhbWVMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0b3BpYzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ29udHJvbEdhbWUpIHtcbiAgICB0aGlzLnRvcGljID0gaGFuZGxlcy50b3BpYztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
