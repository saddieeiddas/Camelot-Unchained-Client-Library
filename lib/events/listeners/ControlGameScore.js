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

var _coreClassesPopulation = require('../../core/classes/Population');

var _coreClassesPopulation2 = _interopRequireDefault(_coreClassesPopulation);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    var rest = new _restapiRestAPI2['default']();
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
            info.score = new _coreClassesControlGame2['default'](data);
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
        // and player counts
        rest.players().then(function (data) {
            info.players = new _coreClassesPopulation2['default'](data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzhCQU1pQix1QkFBdUI7Ozs7c0NBRWhCLGdDQUFnQzs7OztxQ0FDakMsK0JBQStCOzs7O0FBR3RELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLEtBQVUsWUFBQSxDQUFDO0FBRWYsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLFFBQUlBLElBQUlBLEdBQUdBLGlDQUFVQSxDQUFDQTtBQUN0QkEsUUFBSUEsSUFBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7O0FBR25CQSxhQUFBQSxJQUFBQSxHQUFBQTtBQUNFQyxZQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTs7O0FBSWRBLGlCQUFBQSxJQUFBQSxHQUFBQTtBQUNFQyxpQkFBS0EsRUFBRUEsQ0FBQ0E7QUFDUkEsZ0JBQUlBLEtBQUtBLEtBQUtBLENBQUNBLEVBQUVBO0FBQ2ZBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQkEsb0JBQUlBLEdBQUdBLEVBQUVBLENBQUNBO2FBQ1hBO1NBQ0ZBOztBQUdERCxZQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQSxvQkFBb0JBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLENBQzlDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFpQkEsRUFBQUE7QUFDdEJBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSx3Q0FBZ0JBLElBQUlBLENBQUNBLENBQUNBO0FBQ25DQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDckRBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTs7QUFHTEEsWUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FDWEEsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBZ0JBLEVBQUFBO0FBQ3JCQSxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsdUNBQWVBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDckRBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTtLQUNOQTs7QUFHREQsUUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDVkEsYUFBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7S0FDMUNBO0NBQ0ZBOztJQUVELHdCQUFBO0FBR0VHLGFBSEYsd0JBQUEsQ0FHY0EsT0FBZ0NBLEVBQUFBOzhCQUg5Qyx3QkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzVCQTs7aUJBTEgsd0JBQUE7O2VBTU9ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUMxQkE7U0FDRkE7OztlQUNHRixnQkFBQUE7QUFDRkcsZ0JBQUlBLEtBQUtBLEVBQUVBO0FBQ1RBLDRCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNwQkEscUJBQUtBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2JBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTthQUN4QkE7U0FDRkE7OztXQWxCSCx3QkFBQTs7O3FCQUFBLHdCQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgUkVTVCBmcm9tICcuLi8uLi9yZXN0YXBpL1Jlc3RBUEknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUnO1xuaW1wb3J0IENvbnRyb2xHYW1lIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9Db250cm9sR2FtZSc7XG5pbXBvcnQgUG9wdWxhdGlvbiBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvUG9wdWxhdGlvbic7XG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmNvbnN0IFBPTExfSU5URVJWQUwgPSA1MDAwO1xubGV0IHRpbWVyOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3QgPSBuZXcgUkVTVCgpO1xuICBsZXQgaW5mbzogYW55ID0ge307XG5cbiAgLy8gSGFuZGxlIHRpY2tcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBsZXQgY291bnQgPSAyO1xuXG4gICAgLy8gd2FpdCBmb3IgYm90aCByZXF1ZXN0cyB0byBmaW5pc2ggYmVmb3JlIHRyaWdnZXJpbmdcbiAgICAvLyB0aGUgZXZlbnRcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY291bnQtLTtcbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluZm8pO1xuICAgICAgICBpbmZvID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvbnRyb2wgZ2FtZSAoc2NvcmUgb25seSlcbiAgICByZXN0LmNvbnRyb2xHYW1lKHsgaW5jbHVkZUNvbnRyb2xQb2ludHM6IGZhbHNlIH0pXG4gICAgICAudGhlbigoZGF0YTogQ29udHJvbEdhbWUpID0+IHtcbiAgICAgICAgaW5mby5zY29yZSA9IG5ldyBDb250cm9sR2FtZShkYXRhKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGluZm8uZXJyb3IgPSB7IHN0YXR1czogc3RhdHVzLCByZWFzb246IGVycm9yVGhyb3duIH07XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gYW5kIHBsYXllciBjb3VudHNcbiAgICByZXN0LnBsYXllcnMoKVxuICAgICAgLnRoZW4oKGRhdGE6IFBvcHVsYXRpb24pID0+IHtcbiAgICAgICAgaW5mby5wbGF5ZXJzID0gbmV3IFBvcHVsYXRpb24oZGF0YSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIChzdGF0dXM6IHN0cmluZywgZXJyb3JUaHJvd246IHN0cmluZykgPT4ge1xuICAgICAgICBpbmZvLmVycm9yID0geyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9O1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIHRpbWVyIG5vdCBydW5uaW5nLCBzdGFydCBpdFxuICBpZiAoIXRpbWVyKSB7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCh0aWNrLCBQT0xMX0lOVEVSVkFMKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9waWM6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUpIHtcbiAgICB0aGlzLnRvcGljID0gaGFuZGxlcy50b3BpYztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
