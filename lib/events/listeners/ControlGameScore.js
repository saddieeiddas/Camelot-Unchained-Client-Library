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

var _classesPopulation = require('../../classes/Population');

var _classesPopulation2 = _interopRequireDefault(_classesPopulation);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    var rest = new _utilRestAPI2['default']();
    var info = {};
    // Handle tick
    function tick() {
        var count = 2;
        // wait for both requests to finish before triggering
        // the event
        function done() {
            count--;
            if (count === 0) {
                emitter.emit(topic, info);
                info = {};
            }
        }
        // Get control game (score only)
        rest.controlGame({ includeControlPoints: false }).then(function (data) {
            info.score = new _classesControlGame2['default'](data);
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
        // and player counts
        rest.players().then(function (data) {
            info.players = new _classesPopulation2['default'](data);
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
    }
    // if timer not running, start it
    if (!timer) {
        timer = setInterval(tick, POLL_INTERVAL);
    }
}

var ControlGameScoreListener = (function () {
    function ControlGameScoreListener(handles) {
        _classCallCheck(this, ControlGameScoreListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(ControlGameScoreListener, [{
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

    return ControlGameScoreListener;
})();

exports['default'] = ControlGameScoreListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzJCQU1pQixvQkFBb0I7Ozs7a0NBRWIsMkJBQTJCOzs7O2lDQUM1QiwwQkFBMEI7Ozs7QUFHakQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQUksS0FBVSxZQUFBLENBQUM7QUFFZixTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBSUEsSUFBSUEsR0FBR0EsOEJBQVVBLENBQUNBO0FBQ3RCQSxRQUFJQSxJQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTs7QUFHbkJBLGFBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLFlBQUlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBOzs7QUFJZEEsaUJBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLGlCQUFLQSxFQUFFQSxDQUFDQTtBQUNSQSxnQkFBSUEsS0FBS0EsS0FBS0EsQ0FBQ0EsRUFBRUE7QUFDZkEsdUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0FBQzFCQSxvQkFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7YUFDWEE7U0FDRkE7O0FBR0RELFlBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FDOUNBLElBQUlBLENBQUNBLFVBQUNBLElBQWlCQSxFQUFBQTtBQUN0QkEsZ0JBQUlBLENBQUNBLEtBQUtBLEdBQUdBLG9DQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbkNBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxFQUFFQSxVQUFDQSxNQUFjQSxFQUFFQSxXQUFtQkEsRUFBQUE7QUFDckNBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUNyREEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLENBQUNBLENBQUNBOztBQUdMQSxZQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUNYQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFnQkEsRUFBQUE7QUFDckJBLGdCQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxtQ0FBZUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxFQUFFQSxVQUFDQSxNQUFjQSxFQUFFQSxXQUFtQkEsRUFBQUE7QUFDckNBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUNyREEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLENBQUNBLENBQUNBO0tBQ05BOztBQUdERCxRQUFJQSxDQUFDQSxLQUFLQSxFQUFFQTtBQUNWQSxhQUFLQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtLQUMxQ0E7Q0FDRkE7O0lBRUQsd0JBQUE7QUFHRUcsYUFIRix3QkFBQSxDQUdjQSxPQUFnQ0EsRUFBQUE7OEJBSDlDLHdCQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUd6QkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDNUJBOztpQkFMSCx3QkFBQTs7ZUFNT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQzFCQTtTQUNGQTs7O2VBQ0dGLGdCQUFBQTtBQUNGRyxnQkFBSUEsS0FBS0EsRUFBRUE7QUFDVEEsNEJBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0FBQ3BCQSxxQkFBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDYkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2FBQ3hCQTtTQUNGQTs7O1dBbEJILHdCQUFBOzs7cUJBQUEsd0JBQUEiLCJmaWxlIjoidHMvZXZlbnRzL2xpc3RlbmVycy9Db250cm9sR2FtZVNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBSRVNUIGZyb20gJy4uLy4uL3V0aWwvUmVzdEFQSSc7XG5pbXBvcnQgSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQ29udHJvbEdhbWVTY29yZSc7XG5pbXBvcnQgQ29udHJvbEdhbWUgZnJvbSAnLi4vLi4vY2xhc3Nlcy9Db250cm9sR2FtZSc7XG5pbXBvcnQgUG9wdWxhdGlvbiBmcm9tICcuLi8uLi9jbGFzc2VzL1BvcHVsYXRpb24nO1xuZGVjbGFyZSBjb25zdCBjdUFQSTogYW55O1xuXG5jb25zdCBQT0xMX0lOVEVSVkFMID0gNTAwMDtcbmxldCB0aW1lcjogYW55O1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyLCB0b3BpYzogc3RyaW5nKSB7XG4gIGxldCByZXN0ID0gbmV3IFJFU1QoKTtcbiAgbGV0IGluZm86IGFueSA9IHt9O1xuXG4gIC8vIEhhbmRsZSB0aWNrXG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgbGV0IGNvdW50ID0gMjtcblxuICAgIC8vIHdhaXQgZm9yIGJvdGggcmVxdWVzdHMgdG8gZmluaXNoIGJlZm9yZSB0cmlnZ2VyaW5nXG4gICAgLy8gdGhlIGV2ZW50XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvdW50LS07XG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbmZvKTtcbiAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBjb250cm9sIGdhbWUgKHNjb3JlIG9ubHkpXG4gICAgcmVzdC5jb250cm9sR2FtZSh7IGluY2x1ZGVDb250cm9sUG9pbnRzOiBmYWxzZSB9KVxuICAgICAgLnRoZW4oKGRhdGE6IENvbnRyb2xHYW1lKSA9PiB7XG4gICAgICAgIGluZm8uc2NvcmUgPSBuZXcgQ29udHJvbEdhbWUoZGF0YSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIChzdGF0dXM6IHN0cmluZywgZXJyb3JUaHJvd246IHN0cmluZykgPT4ge1xuICAgICAgICBpbmZvLmVycm9yID0geyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9O1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcblxuICAgIC8vIGFuZCBwbGF5ZXIgY291bnRzXG4gICAgcmVzdC5wbGF5ZXJzKClcbiAgICAgIC50aGVuKChkYXRhOiBQb3B1bGF0aW9uKSA9PiB7XG4gICAgICAgIGluZm8ucGxheWVycyA9IG5ldyBQb3B1bGF0aW9uKGRhdGEpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaW5mby5lcnJvciA9IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBpZiB0aW1lciBub3QgcnVubmluZywgc3RhcnQgaXRcbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwodGljaywgUE9MTF9JTlRFUlZBTCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbEdhbWVTY29yZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlKSB7XG4gICAgdGhpcy50b3BpYyA9IGhhbmRsZXMudG9waWM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMudG9waWMpO1xuICAgIH1cbiAgfVxuICBzdG9wKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
