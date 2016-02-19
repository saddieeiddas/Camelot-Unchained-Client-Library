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

var _coreClassesPopulation = require('../../core/classes/Population');

var _coreClassesPopulation2 = _interopRequireDefault(_coreClassesPopulation);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
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
        (0, _restapiRestAPI.getControlGame)(false).then(function (data) {
            info.score = new _coreClassesControlGame2['default'](data);
            done();
        })['catch'](function (error) {
            info.error = { status: error.response.status, reason: error.message };
            done();
        });
        // and player counts
        (0, _restapiRestAPI.getAllPlayers)().then(function (data) {
            info.players = new _coreClassesPopulation2['default'](data);
            done();
        })['catch'](function (error) {
            info.error = { status: error.response.status, reason: error.message };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzhCQU00Qyx1QkFBdUI7O3NDQUUzQyxnQ0FBZ0M7Ozs7cUNBQ2pDLCtCQUErQjs7OztBQUV0RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBSSxLQUFVLFlBQUEsQ0FBQztBQUVmLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxRQUFJQSxJQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTs7QUFHbkJBLGFBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLFlBQUlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBOzs7QUFJZEEsaUJBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLGlCQUFLQSxFQUFFQSxDQUFDQTtBQUNSQSxnQkFBSUEsS0FBS0EsS0FBS0EsQ0FBQ0EsRUFBRUE7QUFDZkEsdUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0FBQzFCQSxvQkFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7YUFDWEE7U0FDRkE7O0FBR0RELDRDQUFlQSxLQUFLQSxDQUFDQSxDQUNsQkEsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBaUJBLEVBQUFBO0FBQ3RCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0Esd0NBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNuQ0EsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLENBQUNBLFNBQ0lBLENBQUNBLFVBQUNBLEtBQVlBLEVBQUFBO0FBQ2xCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBUUEsS0FBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7QUFDN0VBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTs7QUFHTEEsNENBQWVBLENBQ1pBLElBQUlBLENBQUNBLFVBQUNBLElBQWdCQSxFQUFBQTtBQUNyQkEsZ0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLHVDQUFlQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLENBQUNBLFNBQ0lBLENBQUNBLFVBQUNBLEtBQVlBLEVBQUFBO0FBQ2xCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBUUEsS0FBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7QUFDN0VBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTtLQUNOQTs7QUFHREQsUUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDVkEsYUFBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7S0FDMUNBO0NBQ0ZBOztJQUVELHdCQUFBO0FBR0VHLGFBSEYsd0JBQUEsQ0FHY0EsT0FBZ0NBLEVBQUFBOzhCQUg5Qyx3QkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzVCQTs7aUJBTEgsd0JBQUE7O2VBTU9ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUMxQkE7U0FDRkE7OztlQUNHRixnQkFBQUE7QUFDRkcsZ0JBQUlBLEtBQUtBLEVBQUVBO0FBQ1RBLDRCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNwQkEscUJBQUtBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2JBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTthQUN4QkE7U0FDRkE7OztXQWxCSCx3QkFBQTs7O3FCQUFBLHdCQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQge2dldENvbnRyb2xHYW1lLCBnZXRBbGxQbGF5ZXJzfSBmcm9tICcuLi8uLi9yZXN0YXBpL1Jlc3RBUEknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUnO1xuaW1wb3J0IENvbnRyb2xHYW1lIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9Db250cm9sR2FtZSc7XG5pbXBvcnQgUG9wdWxhdGlvbiBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvUG9wdWxhdGlvbic7XG5cbmNvbnN0IFBPTExfSU5URVJWQUwgPSA1MDAwO1xubGV0IHRpbWVyOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgbGV0IGluZm86IGFueSA9IHt9O1xuXG4gIC8vIEhhbmRsZSB0aWNrXG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgbGV0IGNvdW50ID0gMjtcblxuICAgIC8vIHdhaXQgZm9yIGJvdGggcmVxdWVzdHMgdG8gZmluaXNoIGJlZm9yZSB0cmlnZ2VyaW5nXG4gICAgLy8gdGhlIGV2ZW50XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvdW50LS07XG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbmZvKTtcbiAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBjb250cm9sIGdhbWUgKHNjb3JlIG9ubHkpXG4gICAgZ2V0Q29udHJvbEdhbWUoZmFsc2UpXG4gICAgICAudGhlbigoZGF0YTogQ29udHJvbEdhbWUpID0+IHtcbiAgICAgICAgaW5mby5zY29yZSA9IG5ldyBDb250cm9sR2FtZShkYXRhKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIGluZm8uZXJyb3IgPSB7IHN0YXR1czogKDxhbnk+ZXJyb3IpLnJlc3BvbnNlLnN0YXR1cywgcmVhc29uOiBlcnJvci5tZXNzYWdlIH07XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gYW5kIHBsYXllciBjb3VudHNcbiAgICBnZXRBbGxQbGF5ZXJzKClcbiAgICAgIC50aGVuKChkYXRhOiBQb3B1bGF0aW9uKSA9PiB7XG4gICAgICAgIGluZm8ucGxheWVycyA9IG5ldyBQb3B1bGF0aW9uKGRhdGEpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgaW5mby5lcnJvciA9IHsgc3RhdHVzOiAoPGFueT5lcnJvcikucmVzcG9uc2Uuc3RhdHVzLCByZWFzb246IGVycm9yLm1lc3NhZ2UgfTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBpZiB0aW1lciBub3QgcnVubmluZywgc3RhcnQgaXRcbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwodGljaywgUE9MTF9JTlRFUlZBTCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbEdhbWVTY29yZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlKSB7XG4gICAgdGhpcy50b3BpYyA9IGhhbmRsZXMudG9waWM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMudG9waWMpO1xuICAgIH1cbiAgfVxuICBzdG9wKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
