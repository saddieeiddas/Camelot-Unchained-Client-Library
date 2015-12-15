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

var _coreCoreSettings = require('../core/CoreSettings');

var _coreCoreSettings2 = _interopRequireDefault(_coreCoreSettings);

var _coreConstantsChannelId = require('../core/constants/channelId');

var _coreConstantsChannelId2 = _interopRequireDefault(_coreConstantsChannelId);

var _coreClient = require('../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

// TODO: I wanted this to extend CoreSettings but CoreSettings
// won't allow super to access its memebers, or pass anything
// but a default CoreSettings object to its constructor, so
// you can't customise the settings at all (e.g. like define
// the api key or current channel)

var Settings = (function () {
    function Settings(channel) {
        _classCallCheck(this, Settings);

        this.core = new _coreCoreSettings2['default'](); // TODO: This class is a bit weird
        this.channelId = channel;
        this.timeout = 2000; // default timeout
        switch (channel) {
            case _coreConstantsChannelId2['default'].HATCHERY:
                this.url = 'hatchery.camelotunchained.com';
                // BUG: (returns https://) this.url = this.core.hatcheryApiUrl;
                this.port = this.core.hatcheryApiPort;
                break;
            case _coreConstantsChannelId2['default'].WYRMLING:
                this.url = 'wyrmling.camelotunchained.com';
                // BUG: (returns https://) this.url = this.core.wyrmlingApiUrl;
                this.port = this.core.wyrmlingApiPort;
                break;
        }
    }

    _createClass(Settings, [{
        key: 'getApiKey',
        value: function getApiKey() {
            if (!this.apiKey) {
                this.apiKey = _coreClient2['default'].loginToken; // in fake API will prompt for token
            }
            return this.apiKey;
        }
    }]);

    return Settings;
})();

var Rest = (function () {
    function Rest() {
        _classCallCheck(this, Rest);
    }

    _createClass(Rest, [{
        key: 'selectServer',
        value: function selectServer(channel) {
            this.settings = new Settings(channel);
        }
    }, {
        key: 'makeUrl',
        value: function makeUrl(verb, useHttps) {
            var protocol = useHttps ? 'https' : 'http';
            var port = useHttps ? '4443' : '8000';
            return protocol + '://' + this.settings.url + ':' + port + '/api/' + verb;
        }
    }, {
        key: 'request',
        value: function request(method, verb) {
            var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
            var useHttps = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
            var timeout = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

            var url = undefined;
            // construct request URL
            url = this.makeUrl(verb, useHttps);
            // add params
            if (params) {
                var key = undefined;
                var qs = [];
                for (key in params) {
                    if (params.hasOwnProperty(key)) {
                        qs.push(key + "=" + encodeURIComponent(params[key]));
                    }
                }
                if (qs.length) {
                    url += "?" + qs.join("&");
                }
            }
            function executor(resolve, reject) {
                var XHR = new XMLHttpRequest();
                // Set timeout
                if (0 < timeout) {
                    XHR.timeout = timeout;
                }
                /*
                * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
                * claims listeners need to be added before calling open
                */
                XHR.addEventListener("progress", function (ev) {
                    console.dir(ev);
                });
                XHR.addEventListener("load", function (ev) {
                    if (XHR.readyState === 4 && XHR.status === 200) {
                        try {
                            var data = JSON.parse(XHR.response);
                            resolve(data);
                        } catch (e) {
                            reject("parse-fail", e.message);
                        }
                    }
                });
                XHR.addEventListener("abort", function (ev) {
                    reject("abort", "aborted");
                });
                XHR.addEventListener("error", function (ev) {
                    reject("error", "errored");
                });
                // TODO: Implement progressive timeouts
                XHR.open(method, url, true);
                XHR.send();
            }
            return new Promise(executor);
        }
    }, {
        key: 'GET',
        value: function GET(verb) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var timeout = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
            var useHttps = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            return this.request("GET", verb, params, useHttps, timeout);
        }
    }]);

    return Rest;
})();

exports.Rest = Rest;

var RestAPI = (function () {
    function RestAPI() {
        _classCallCheck(this, RestAPI);

        this.api = new Rest();
        var server = _coreClient2['default'].webAPIHost.split(".");
        switch (server[0]) {
            case "hatchery":
                this.api.selectServer(_coreConstantsChannelId2['default'].HATCHERY);
                break;
            case "wyrmling":
                this.api.selectServer(_coreConstantsChannelId2['default'].WYRMLING);
                break;
        }
    }

    _createClass(RestAPI, [{
        key: 'factions',
        value: function factions() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/factions", {}, timeout);
        }
    }, {
        key: 'races',
        value: function races() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/races", {}, timeout);
        }
    }, {
        key: 'players',
        value: function players() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/players", {}, timeout);
        }
    }, {
        key: 'banes',
        value: function banes() {
            return this.api.GET("game/banes");
        }
    }, {
        key: 'boons',
        value: function boons() {
            return this.api.GET("game/boons");
        }
    }, {
        key: 'attributes',
        value: function attributes() {
            return this.api.GET("game/attributes");
        }

        //	Optional Query Parameters: {
        //		includeControlPoints: false 		// true/false
        //	}
    }, {
        key: 'controlGame',
        value: function controlGame() {
            var query = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
            var timeout = arguments.length <= 1 || arguments[1] === undefined ? 3000 : arguments[1];

            return this.api.GET("game/controlgame", query, timeout);
        }
    }, {
        key: 'patchnotes',
        value: function patchnotes() {
            return this.api.GET("patchnotes");
        }
    }, {
        key: 'banners',
        value: function banners() {
            return this.api.GET("banners");
        }
    }, {
        key: 'scheduledEvents',
        value: function scheduledEvents() {
            return this.api.GET("scheduledevents");
        }
    }, {
        key: 'kills',
        value: function kills() {
            var query = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
            var timeout = arguments.length <= 1 || arguments[1] === undefined ? 2000 : arguments[1];

            return this.api.GET("kills", query, timeout);
        }
    }, {
        key: 'craftedAbilities',
        value: function craftedAbilities(loginToken, characterID) {
            return this.api.GET("craftedabilities", { loginToken: loginToken, characterID: characterID }, 0, true);
        }
    }]);

    return RestAPI;
})();

exports['default'] = RestAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhcGkvUmVzdEFQSS50cyJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIlNldHRpbmdzLmNvbnN0cnVjdG9yIiwiU2V0dGluZ3MuZ2V0QXBpS2V5IiwiUmVzdCIsIlJlc3QuY29uc3RydWN0b3IiLCJSZXN0LnNlbGVjdFNlcnZlciIsIlJlc3QubWFrZVVybCIsIlJlc3QucmVxdWVzdCIsIlJlc3QucmVxdWVzdC5leGVjdXRvciIsIlJlc3QuR0VUIiwiUmVzdEFQSSIsIlJlc3RBUEkuY29uc3RydWN0b3IiLCJSZXN0QVBJLmZhY3Rpb25zIiwiUmVzdEFQSS5yYWNlcyIsIlJlc3RBUEkucGxheWVycyIsIlJlc3RBUEkuYmFuZXMiLCJSZXN0QVBJLmJvb25zIiwiUmVzdEFQSS5hdHRyaWJ1dGVzIiwiUmVzdEFQSS5jb250cm9sR2FtZSIsIlJlc3RBUEkucGF0Y2hub3RlcyIsIlJlc3RBUEkuYmFubmVycyIsIlJlc3RBUEkuc2NoZWR1bGVkRXZlbnRzIiwiUmVzdEFQSS5raWxscyIsIlJlc3RBUEkuY3JhZnRlZEFiaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBTXlCLHNCQUFzQjs7OztzQ0FDekIsNkJBQTZCOzs7OzBCQUNoQyxnQkFBZ0I7Ozs7Ozs7Ozs7SUFXbkMsUUFBQTtBQU9DQSxhQVBELFFBQUEsQ0FPYUEsT0FBaUJBLEVBQUFBOzhCQVA5QixRQUFBOztBQVFFQyxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxtQ0FBa0JBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDcEJBLGdCQUFPQSxPQUFPQTtBQUNiQSxpQkFBS0Esb0NBQVVBLFFBQVFBO0FBQ3RCQSxvQkFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsK0JBQStCQSxDQUFDQTs7QUFFM0NBLG9CQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFD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QUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1NBQ3ZDQTs7O2VBQ0lYLGlCQUFnREE7Z0JBQS9DQSxLQUFLQSx5REFBVUEsU0FBU0E7Z0JBQUVBLE9BQU9BLHlEQUFVQSxJQUFJQTs7QUFDcERZLG1CQUFPQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFLQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtTQUM1Q0E7OztlQUVzQlosMEJBQUNBLFVBQWtCQSxFQUFFQSxXQUFtQkEsRUFBQUE7QUFDN0RhLG1CQUFPQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBLFVBQVVBLEVBQUVBLFdBQVdBLEVBQUVBLFdBQVdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1NBQ3hHQTs7O1dBeERILE9BQUE7OztxQkFBQSxPQUFBIiwiZmlsZSI6InJlc3RhcGkvUmVzdEFQSS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgQ29yZVNldHRpbmdzIGZyb20gJy4uL2NvcmUvQ29yZVNldHRpbmdzJztcbmltcG9ydCBjaGFubmVsSWQgZnJvbSAnLi4vY29yZS9jb25zdGFudHMvY2hhbm5lbElkJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY29yZS9jbGllbnQnO1xuXG4vLyBUT0RPOiBEZWZpbmUgcHJvbWlzZSBwcm9wZXJseS4gIENhbid0IHVzZSB0aGlzIGFzIGEgcmV0dXJuIHR5cGVcbi8vIGZvciBtZXRob2RzIHJldHVybmluZyBhIHByb21pc2UuXG5kZWNsYXJlIGNvbnN0IFByb21pc2U6IGFueTtcblxuLy8gVE9ETzogSSB3YW50ZWQgdGhpcyB0byBleHRlbmQgQ29yZVNldHRpbmdzIGJ1dCBDb3JlU2V0dGluZ3Ncbi8vIHdvbid0IGFsbG93IHN1cGVyIHRvIGFjY2VzcyBpdHMgbWVtZWJlcnMsIG9yIHBhc3MgYW55dGhpbmdcbi8vIGJ1dCBhIGRlZmF1bHQgQ29yZVNldHRpbmdzIG9iamVjdCB0byBpdHMgY29uc3RydWN0b3IsIHNvXG4vLyB5b3UgY2FuJ3QgY3VzdG9taXNlIHRoZSBzZXR0aW5ncyBhdCBhbGwgKGUuZy4gbGlrZSBkZWZpbmVcbi8vIHRoZSBhcGkga2V5IG9yIGN1cnJlbnQgY2hhbm5lbClcbmNsYXNzIFNldHRpbmdzIHtcblx0Y29yZTogQ29yZVNldHRpbmdzO1xuXHR1cmw6IHN0cmluZztcblx0cG9ydDogbnVtYmVyO1xuXHRhcGlLZXk6IHN0cmluZztcblx0Y2hhbm5lbElkOiBjaGFubmVsSWQ7XG5cdHRpbWVvdXQ6IG51bWJlcjtcblx0Y29uc3RydWN0b3IoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLmNvcmUgPSBuZXcgQ29yZVNldHRpbmdzKCk7XHRcdFx0Ly8gVE9ETzogVGhpcyBjbGFzcyBpcyBhIGJpdCB3ZWlyZFxuXHRcdHRoaXMuY2hhbm5lbElkID0gY2hhbm5lbDtcblx0XHR0aGlzLnRpbWVvdXQgPSAyMDAwO1x0XHRcdFx0XHQvLyBkZWZhdWx0IHRpbWVvdXRcblx0XHRzd2l0Y2goY2hhbm5lbCkge1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuSEFUQ0hFUlk6XG5cdFx0XHRcdHRoaXMudXJsID0gJ2hhdGNoZXJ5LmNhbWVsb3R1bmNoYWluZWQuY29tJztcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUuaGF0Y2hlcnlBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS5oYXRjaGVyeUFwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuV1lSTUxJTkc6XG5cdFx0XHRcdHRoaXMudXJsID0gJ3d5cm1saW5nLmNhbWVsb3R1bmNoYWluZWQuY29tJztcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUud3lybWxpbmdBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS53eXJtbGluZ0FwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRnZXRBcGlLZXkoKSB7XG5cdFx0aWYgKCF0aGlzLmFwaUtleSkge1xuXHRcdFx0dGhpcy5hcGlLZXkgPSBjbGllbnQubG9naW5Ub2tlbjtcdFx0Ly8gaW4gZmFrZSBBUEkgd2lsbCBwcm9tcHQgZm9yIHRva2VuXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmFwaUtleTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmVzdCB7XG5cblx0cHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRzZWxlY3RTZXJ2ZXIoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKGNoYW5uZWwpO1xuXHR9XG5cbiAgbWFrZVVybCh2ZXJiOiBzdHJpbmcsIHVzZUh0dHBzOiBib29sZWFuKSB7XG4gICAgdmFyIHByb3RvY29sID0gdXNlSHR0cHMgPyAnaHR0cHMnIDogJ2h0dHAnO1xuICAgIHZhciBwb3J0ID0gdXNlSHR0cHMgPyAnNDQ0MycgOiAnODAwMCc7XG4gICAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyB0aGlzLnNldHRpbmdzLnVybCArICc6JyArIHBvcnQgKyAnL2FwaS8nICsgdmVyYjtcbiAgfVxuXG4gIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHZlcmI6IHN0cmluZywgcGFyYW1zOiBhbnkgPSB7fSwgdXNlSHR0cHM6Ym9vbGVhbiA9IGZhbHNlLCB0aW1lb3V0OiBudW1iZXIgPSAwKSB7XG5cdFx0bGV0IHVybDogc3RyaW5nO1xuXG5cdFx0Ly8gY29uc3RydWN0IHJlcXVlc3QgVVJMXG4gICAgdXJsID0gdGhpcy5tYWtlVXJsKHZlcmIsIHVzZUh0dHBzKTtcblxuXHRcdC8vIGFkZCBwYXJhbXNcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICBsZXQgcXM6IHN0cmluZ1tdID0gW107XG4gICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcXMucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocXMubGVuZ3RoKSB7XG4gICAgICAgIHVybCArPSBcIj9cIiArIHFzLmpvaW4oXCImXCIpO1xuICAgICAgfVxuICAgIH1cblxuXHRcdGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmU6IChkYXRhOiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB2b2lkKSB7XG5cdFx0XHRjb25zdCBYSFIgOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0XHQvLyBTZXQgdGltZW91dFxuICAgICAgaWYgKDAgPCB0aW1lb3V0KSB7XG4gICAgICAgIFhIUi50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L1VzaW5nX1hNTEh0dHBSZXF1ZXN0XG4gICAgICAqIGNsYWltcyBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBiZWZvcmUgY2FsbGluZyBvcGVuXG4gICAgICAqL1xuICAgICAgWEhSLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZXY6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5kaXIoZXYpO1xuICAgICAgfSk7XG5cbiAgICAgIFhIUi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXY6IFVJRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFhIUi5yZWFkeVN0YXRlID09PSA0ICYmIFhIUi5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBKU09OLnBhcnNlKFhIUi5yZXNwb25zZSk7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChcInBhcnNlLWZhaWxcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBYSFIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIChldjogVUlFdmVudCkgPT4ge1xuICAgICAgICByZWplY3QoXCJhYm9ydFwiLCBcImFib3J0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgWEhSLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXY6IFVJRXZlbnQpID0+IHtcbiAgICAgICAgcmVqZWN0KFwiZXJyb3JcIiwgXCJlcnJvcmVkXCIpO1xuICAgICAgfSk7XG5cblx0XHRcdC8vIFRPRE86IEltcGxlbWVudCBwcm9ncmVzc2l2ZSB0aW1lb3V0c1xuXHRcdFx0WEhSLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXHRcdFx0WEhSLnNlbmQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpO1xuXHR9XG5cbiAgR0VUKHZlcmI6IHN0cmluZywgcGFyYW1zOiBPYmplY3QgPSB7fSwgdGltZW91dDogbnVtYmVyID0gMCwgdXNlSHR0cHM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXCJHRVRcIiwgdmVyYiwgcGFyYW1zLCB1c2VIdHRwcywgdGltZW91dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdEFQSSB7XG5cdHByaXZhdGUgYXBpOiBSZXN0O1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFwaSA9IG5ldyBSZXN0KCk7XG5cdFx0bGV0IHNlcnZlcjogc3RyaW5nIFtdID0gY2xpZW50LndlYkFQSUhvc3Quc3BsaXQoXCIuXCIpO1xuXHRcdHN3aXRjaChzZXJ2ZXJbMF0pIHtcblx0XHRcdGNhc2UgXCJoYXRjaGVyeVwiOlxuXHRcdFx0XHR0aGlzLmFwaS5zZWxlY3RTZXJ2ZXIoY2hhbm5lbElkLkhBVENIRVJZKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwid3lybWxpbmdcIjpcblx0XHRcdFx0dGhpcy5hcGkuc2VsZWN0U2VydmVyKGNoYW5uZWxJZC5XWVJNTElORyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG4gIGZhY3Rpb25zKHRpbWVvdXQ6IG51bWJlciA9IDIwMDApIHtcbiAgICByZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9mYWN0aW9uc1wiLCB7fSwgdGltZW91dCk7XG5cdH1cblx0cmFjZXModGltZW91dDogbnVtYmVyID0gMjAwMCkge1xuICAgIHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL3JhY2VzXCIsIHt9LCB0aW1lb3V0KTtcblx0fVxuXHRwbGF5ZXJzKHRpbWVvdXQ6IG51bWJlciA9IDIwMDApIHtcbiAgICByZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9wbGF5ZXJzXCIsIHt9LCB0aW1lb3V0KTtcblx0fVxuXHRiYW5lcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9iYW5lc1wiKTtcblx0fVxuXHRib29ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9ib29uc1wiKTtcblx0fVxuXHRhdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2F0dHJpYnV0ZXNcIik7XG5cdH1cblxuXHQvL1x0T3B0aW9uYWwgUXVlcnkgUGFyYW1ldGVyczoge1xuXHQvL1x0XHRpbmNsdWRlQ29udHJvbFBvaW50czogZmFsc2UgXHRcdC8vIHRydWUvZmFsc2VcbiAgLy9cdH1cbiAgY29udHJvbEdhbWUocXVlcnk6IE9iamVjdCA9IHVuZGVmaW5lZCwgdGltZW91dCA9IDMwMDApIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9jb250cm9sZ2FtZVwiLCBxdWVyeSwgdGltZW91dCk7XG5cdH1cblxuXHRwYXRjaG5vdGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJwYXRjaG5vdGVzXCIpO1xuXHR9XG5cdGJhbm5lcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpLkdFVChcImJhbm5lcnNcIik7XG5cdH1cblx0c2NoZWR1bGVkRXZlbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJzY2hlZHVsZWRldmVudHNcIik7XG5cdH1cblx0a2lsbHMocXVlcnk6T2JqZWN0ID0gdW5kZWZpbmVkLCB0aW1lb3V0Om51bWJlciA9IDIwMDApIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwia2lsbHNcIiwgcXVlcnksIHRpbWVvdXQpO1xuICB9XG5cbiAgcHVibGljIGNyYWZ0ZWRBYmlsaXRpZXMobG9naW5Ub2tlbjogc3RyaW5nLCBjaGFyYWN0ZXJJRDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLkdFVChcImNyYWZ0ZWRhYmlsaXRpZXNcIiwgeyBsb2dpblRva2VuOiBsb2dpblRva2VuLCBjaGFyYWN0ZXJJRDogY2hhcmFjdGVySUQgfSwgMCwgdHJ1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
