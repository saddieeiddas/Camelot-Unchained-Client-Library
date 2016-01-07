/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogMessage = (function () {
    function LogMessage() {
        var logMessage = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, LogMessage);

        this.category = logMessage.category;
        this.level = logMessage.level;
        this.time = logMessage.time;
        this.process = logMessage.process;
        this.thread = logMessage.thread;
        this.message = logMessage.message;
    }

    _createClass(LogMessage, null, [{
        key: "create",
        value: function create() {
            var a = new LogMessage();
            return a;
        }
    }]);

    return LogMessage;
})();

exports["default"] = LogMessage;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Mb2dNZXNzYWdlLnRzIl0sIm5hbWVzIjpbIkxvZ01lc3NhZ2UiLCJMb2dNZXNzYWdlLmNvbnN0cnVjdG9yIiwiTG9nTWVzc2FnZS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQU1BLFVBQUE7QUFRRUEsYUFSRixVQUFBLEdBUXlDQTtZQUEzQkEsVUFBVUEseURBQWVBLEVBQUVBOzs4QkFSekMsVUFBQTs7QUFTSUMsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO0FBQzlCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUM1QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQTtLQUNuQ0E7O2lCQWZILFVBQUE7O2VBaUJlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFVBQVVBLEVBQUVBLENBQUNBO0FBQ3pCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXBCSCxVQUFBOzs7cUJBdUJlLFVBQVUiLCJmaWxlIjoiY29yZS9jbGFzc2VzL0xvZ01lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuY2xhc3MgTG9nTWVzc2FnZSAge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG4gIHByb2Nlc3M6IG51bWJlcjtcbiAgdGhyZWFkOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihsb2dNZXNzYWdlID0gPExvZ01lc3NhZ2U+e30pIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gbG9nTWVzc2FnZS5jYXRlZ29yeTtcbiAgICB0aGlzLmxldmVsID0gbG9nTWVzc2FnZS5sZXZlbDtcbiAgICB0aGlzLnRpbWUgPSBsb2dNZXNzYWdlLnRpbWU7XG4gICAgdGhpcy5wcm9jZXNzID0gbG9nTWVzc2FnZS5wcm9jZXNzO1xuICAgIHRoaXMudGhyZWFkID0gbG9nTWVzc2FnZS50aHJlYWQ7XG4gICAgdGhpcy5tZXNzYWdlID0gbG9nTWVzc2FnZS5tZXNzYWdlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBMb2dNZXNzYWdlKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nTWVzc2FnZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
