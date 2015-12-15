'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restapiRestAPI = require('../../restapi/RestAPI');

var _restapiRestAPI2 = _interopRequireDefault(_restapiRestAPI);

var _coreClassesControlGame = require('../../core/classes/ControlGame');

var _coreClassesControlGame2 = _interopRequireDefault(_coreClassesControlGame);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    var rest = new _restapiRestAPI2['default']();
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: true }).then(function (data) {
            var instance = new _coreClassesControlGame2['default'](data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs4QkFNaUIsdUJBQXVCOzs7O3NDQUVoQixnQ0FBZ0M7Ozs7QUFJeEQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQUksS0FBVSxZQUFBLENBQUM7QUFFZixTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBSUEsSUFBSUEsR0FBR0EsaUNBQVVBLENBQUNBO0FBRXRCQSxhQUFBQSxJQUFBQSxHQUFBQTs7QUFFRUMsWUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsb0JBQW9CQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFpQkEsRUFBQUE7QUFDdEVBLGdCQUFNQSxRQUFRQSxHQUFHQSx3Q0FBZ0JBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZDQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7U0FDL0JBLEVBQUVBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQSxFQUFBQTtBQUNyQ0EsbUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEtBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO1NBQ3hFQSxDQUFDQSxDQUFDQTtLQUNKQTtBQUNERCxRQUFJQSxDQUFDQSxLQUFLQSxFQUFFQTtBQUNWQSxtQkFBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7S0FDbENBO0NBQ0ZBOztJQUVELG1CQUFBO0FBR0VFLGFBSEYsbUJBQUEsQ0FHY0EsT0FBMkJBLEVBQUFBOzhCQUh6QyxtQkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzVCQTs7aUJBTEgsbUJBQUE7O2VBTU9ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUMxQkE7U0FDRkE7OztlQUNHRixnQkFBQUE7QUFDRkcsZ0JBQUlBLEtBQUtBLEVBQUVBO0FBQ1RBLDRCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNwQkEscUJBQUtBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2JBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTthQUN4QkE7U0FDRkE7OztXQWxCSCxtQkFBQTs7O3FCQUFBLG1CQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IFJFU1QgZnJvbSAnLi4vLi4vcmVzdGFwaS9SZXN0QVBJJztcbmltcG9ydCBIYW5kbGVzQ29udHJvbEdhbWUgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQ29udHJvbEdhbWUnO1xuaW1wb3J0IENvbnRyb2xHYW1lIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9Db250cm9sR2FtZSc7XG5cbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuY29uc3QgUE9MTF9JTlRFUlZBTCA9IDUwMDA7XG5sZXQgdGltZXI6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBsZXQgcmVzdCA9IG5ldyBSRVNUKCk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAvLyBUT0RPOiBzd2l0Y2ggdG8gdXNpbmcgY3UtcmVzdGFwaVxuICAgIHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogdHJ1ZSB9KS50aGVuKChkYXRhOiBDb250cm9sR2FtZSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29udHJvbEdhbWUoZGF0YSk7XG4gICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgICB9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgeyBlcnJvcjogeyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9fSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCF0aW1lcikge1xuICAgIHNldEludGVydmFsKHRpY2ssIFBPTExfSU5URVJWQUwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xHYW1lTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9waWM6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NvbnRyb2xHYW1lKSB7XG4gICAgdGhpcy50b3BpYyA9IGhhbmRsZXMudG9waWM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMudG9waWMpO1xuICAgIH1cbiAgfVxuICBzdG9wKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
