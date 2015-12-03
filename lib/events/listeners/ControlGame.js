'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilRestAPI = require('../../util/RestAPI');

var _utilRestAPI2 = _interopRequireDefault(_utilRestAPI);

var _classesControlGame = require('../../classes/ControlGame');

var _classesControlGame2 = _interopRequireDefault(_classesControlGame);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    var rest = new _utilRestAPI2['default']();
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: true }).then(function (data) {
            var instance = new _classesControlGame2['default'](data);
            emitter.emit(topic, instance);
        }, function (status, errorThrown) {
            emitter.emit(topic, { error: { status: status, reason: errorThrown } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzsyQkFNaUIsb0JBQW9COzs7O2tDQUViLDJCQUEyQjs7OztBQUluRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBSSxLQUFVLFlBQUEsQ0FBQztBQUVmLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxRQUFJQSxJQUFJQSxHQUFHQSw4QkFBVUEsQ0FBQ0E7QUFFdEJBLGFBQUFBLElBQUFBLEdBQUFBOztBQUVFQyxZQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQSxvQkFBb0JBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQWlCQSxFQUFBQTtBQUN0RUEsZ0JBQU1BLFFBQVFBLEdBQUdBLG9DQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLG1CQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtTQUMvQkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7U0FDeEVBLENBQUNBLENBQUNBO0tBQ0pBO0FBQ0RELFFBQUlBLENBQUNBLEtBQUtBLEVBQUVBO0FBQ1ZBLG1CQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtLQUNsQ0E7Q0FDRkE7O0lBRUQsbUJBQUE7QUFHRUUsYUFIRixtQkFBQSxDQUdjQSxPQUEyQkEsRUFBQUE7OEJBSHpDLG1CQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUd6QkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDNUJBOztpQkFMSCxtQkFBQTs7ZUFNT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQzFCQTtTQUNGQTs7O2VBQ0dGLGdCQUFBQTtBQUNGRyxnQkFBSUEsS0FBS0EsRUFBRUE7QUFDVEEsNEJBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0FBQ3BCQSxxQkFBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDYkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2FBQ3hCQTtTQUNGQTs7O1dBbEJILG1CQUFBOzs7cUJBQUEsbUJBQUEiLCJmaWxlIjoidHMvZXZlbnRzL2xpc3RlbmVycy9Db250cm9sR2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgUkVTVCBmcm9tICcuLi8uLi91dGlsL1Jlc3RBUEknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZSBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNDb250cm9sR2FtZSc7XG5pbXBvcnQgQ29udHJvbEdhbWUgZnJvbSAnLi4vLi4vY2xhc3Nlcy9Db250cm9sR2FtZSc7XG5cbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuY29uc3QgUE9MTF9JTlRFUlZBTCA9IDUwMDA7XG5sZXQgdGltZXI6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBsZXQgcmVzdCA9IG5ldyBSRVNUKCk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAvLyBUT0RPOiBzd2l0Y2ggdG8gdXNpbmcgY3UtcmVzdGFwaVxuICAgIHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogdHJ1ZSB9KS50aGVuKChkYXRhOiBDb250cm9sR2FtZSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29udHJvbEdhbWUoZGF0YSk7XG4gICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgICB9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgeyBlcnJvcjogeyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9fSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0aW1lcikge1xuICAgIHNldEludGVydmFsKHRpY2ssIFBPTExfSU5URVJWQUwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xHYW1lTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9waWM6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NvbnRyb2xHYW1lKSB7XG4gICAgdGhpcy50b3BpYyA9IGhhbmRsZXMudG9waWM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMudG9waWMpO1xuICAgIH1cbiAgfVxuICBzdG9wKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
