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

var EVENT_NAME = 'init';
var initialised = false;
function run(emitter) {
    function notify() {
        emitter.emit(EVENT_NAME, {});
    }
    if (initialised) {
        notify();
    } else {
        _coreClient2['default'].OnInitialized(function () {
            initialised = true;
            notify();
        });
    }
}

var InitListener = (function () {
    function InitListener() {
        _classCallCheck(this, InitListener);

        this.once = true;
    }

    _createClass(InitListener, [{
        key: 'start',
        value: function start(emitter) {
            // for the init listener, we always want to run it
            // because it may be called post-init, in which case
            // it needs to fire the handler immediately
            run(emitter);
        }
    }]);

    return InitListener;
})();

exports['default'] = InitListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvSW5pdC50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4ubm90aWZ5IiwiSW5pdExpc3RlbmVyIiwiSW5pdExpc3RlbmVyLmNvbnN0cnVjdG9yIiwiSW5pdExpc3RlbmVyLnN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzswQkEwQm1CLG1CQUFtQjs7OztBQUV0QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDMUIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBRXhCLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUE7QUFDaENBLGFBQUFBLE1BQUFBLEdBQUFBO0FBQ0VDLGVBQU9BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0tBQzlCQTtBQUNERCxRQUFJQSxXQUFXQSxFQUFFQTtBQUNmQSxjQUFNQSxFQUFFQSxDQUFDQTtLQUNWQSxNQUFNQTtBQUNMQSxnQ0FBT0EsYUFBYUEsQ0FBQ0EsWUFBQUE7QUFDbkJBLHVCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNuQkEsa0JBQU1BLEVBQUVBLENBQUNBO1NBQ1ZBLENBQUNBLENBQUNBO0tBQ0pBO0NBQ0ZBOztJQUVELFlBQUE7QUFFRUUsYUFGRixZQUFBLEdBRUVBOzhCQUZGLFlBQUE7O0FBR0lDLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0tBQ2xCQTs7aUJBSkgsWUFBQTs7ZUFLT0QsZUFBQ0EsT0FBcUJBLEVBQUFBOzs7O0FBSXpCRSxlQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtTQUNkQTs7O1dBVkgsWUFBQTs7O3FCQUFBLFlBQUEiLCJmaWxlIjoiZXZlbnRzL2xpc3RlbmVycy9Jbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbi8vIFRoaXMgbGlzdGVuZXIgaGFuZGxlcyB0aGUgY3VBUEkuT25Jbml0aWFsaXplZC4gIFdoZW4gdGhlIGN1QVBJIGlzXG4vLyBpbml0aWFsaXNlZCwgYW55IGhhbmRsZXJzIGZvciB0aGUgXCJpbml0XCIgdG9waWMgKHNlZSBjdS1ldmVudHMub24oKSlcbi8vIGFyZSB0cmlnZ2VyZWQuICBJZiBhIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgdGhlIHRvcGljIGFmdGVyXG4vLyBpbml0aWFsaXNhdGlvbiBoYXMgYWxyZWFkeSBvY2N1cmVkLCBpdCBpcyB0cmlnZ2VyZWQgaW1tZWRpYXRlbHkuXG4vL1xuLy8gVGhlIGN1LWV2ZW50cy5vbigpIG1ldGhvZCBhbHdheXMgY2FsbHMgYSBsaXN0ZW5lcnMgc3RhcnQgbWV0aG9kIHRvXG4vLyBlbnN1cmUgaXQgaXMgc3RhcnRlZCwgdGhpcyBhbGxvd3MgdGhpcyBsaXN0ZW5lciB0byByZXNwb25kIHRvIHBvc3Rcbi8vIGluaXQgcmVxdWVzdHMgZm9yIG5vdGlmaWNhdGlvbiB0aGF0IGluaXRpYWxzaWF0aW9uIGhhcyBhY2N1cmVkLlxuLy8gSXQgYWxzbyBjaGVja3MgYSBsaXN0ZW5lcidzIG9uY2UgcHJvcGVydHkgd2hpY2ggaWYgc2V0IGNhdXNlcyB0aGVcbi8vIHJlZ2lzdGVyZWQgaGFuZGxlciB0byBiZSBkZXJlZ2lzdGVyZWQgYXMgc29vbiBhcyBpdCBpcyBmaXJlZCxcbi8vIChvbmNlIHRpbWUgb25seSBldmVudHMpLlxuLy9cbi8vXHRVc2FnZTpcbi8vXHRcdGltcG9ydCBldmVudHMgZnJvbSAnY3UtZXZlbnRzJztcbi8vXHRcdGV2ZW50cy5vbihcImluaXRcIiwgKCkgPT4ge1xuLy9cdFx0XHQvLyBjdUFQSSBpbml0aWFsaXNlZCAvIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4vLyAgXHR9KTtcbi8vXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jb3JlL2NsaWVudCc7XG5cbmNvbnN0IEVWRU5UX05BTUUgPSAnaW5pdCc7XG5sZXQgaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xuICBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgZW1pdHRlci5lbWl0KEVWRU5UX05BTUUsIHt9KTtcbiAgfVxuICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICBub3RpZnkoKTtcbiAgfSBlbHNlIHtcbiAgICBjbGllbnQuT25Jbml0aWFsaXplZCgoKSA9PiB7XG4gICAgICBpbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICBub3RpZnkoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0TGlzdGVuZXIge1xuICBvbmNlOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uY2UgPSB0cnVlO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIC8vIGZvciB0aGUgaW5pdCBsaXN0ZW5lciwgd2UgYWx3YXlzIHdhbnQgdG8gcnVuIGl0XG4gICAgLy8gYmVjYXVzZSBpdCBtYXkgYmUgY2FsbGVkIHBvc3QtaW5pdCwgaW4gd2hpY2ggY2FzZVxuICAgIC8vIGl0IG5lZWRzIHRvIGZpcmUgdGhlIGhhbmRsZXIgaW1tZWRpYXRlbHlcbiAgICBydW4oZW1pdHRlcik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
