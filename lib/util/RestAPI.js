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

var _CoreSettings = require('../CoreSettings');

var _CoreSettings2 = _interopRequireDefault(_CoreSettings);

var _constantsChannelId = require('../constants/channelId');

var _constantsChannelId2 = _interopRequireDefault(_constantsChannelId);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

// TODO: I wanted this to extend CoreSettings but CoreSettings
// won't allow super to access its memebers, or pass anything
// but a default CoreSettings object to its constructor, so
// you can't customise the settings at all (e.g. like define
// the api key or current channel)

var Settings = (function () {
    function Settings(channel) {
        _classCallCheck(this, Settings);

        this.core = new _CoreSettings2['default'](); // TODO: This class is a bit weird
        this.channelId = channel;
        this.timeout = 2000; // default timeout
        switch (channel) {
            case _constantsChannelId2['default'].HATCHERY:
                this.url = 'http://hatchery.camelotunchained.com';
                // BUG: (returns https://) this.url = this.core.hatcheryApiUrl;
                this.port = this.core.hatcheryApiPort;
                break;
            case _constantsChannelId2['default'].WYRMLING:
                this.url = 'http://wyrmling.camelotunchained.com';
                // BUG: (returns https://) this.url = this.core.wyrmlingApiUrl;
                this.port = this.core.wyrmlingApiPort;
                break;
        }
    }

    _createClass(Settings, [{
        key: 'getApiKey',
        value: function getApiKey() {
            if (!this.apiKey) {
                this.apiKey = _client2['default'].loginToken; // in fake API will prompt for token
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
        value: function makeUrl(verb) {
            return this.settings.url + ":" + this.settings.port + "/api/" + verb;
        }
    }, {
        key: 'request',
        value: function request(method, verb, params) {
            var key = undefined;
            var url = undefined;
            // construct request URL
            url = this.makeUrl(verb);
            // add params
            var query = params.query;
            if (query) {
                var qs = [];
                for (key in query) {
                    if (query.hasOwnProperty(key)) {
                        qs.push(key + "=" + encodeURIComponent(query[key]));
                    }
                }
                if (qs.length) {
                    url += "?" + qs.join("&");
                }
            }
            function executor(resolve, reject) {
                var XHR = new XMLHttpRequest();
                // Set timeout
                XHR.timeout = params.timeout || this.api.settings.timeout;
                // TODO: Implement progressive timeouts
                XHR.open(method, url, true);
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
                XHR.send();
            }
            return new Promise(executor);
        }
    }, {
        key: 'GET',
        value: function GET(verb) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return this.request("GET", verb, params);
        }
    }]);

    return Rest;
})();

exports.Rest = Rest;

var RestAPI = (function () {
    function RestAPI() {
        _classCallCheck(this, RestAPI);

        this.api = new Rest();
        var server = _client2['default'].webAPIHost.split(".");
        switch (server[0]) {
            case "hatchery":
                this.api.selectServer(_constantsChannelId2['default'].HATCHERY);
                break;
            case "wyrmling":
                this.api.selectServer(_constantsChannelId2['default'].WYRMLING);
                break;
        }
    }

    _createClass(RestAPI, [{
        key: 'factions',
        value: function factions() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/factions", { timeout: timeout });
        }
    }, {
        key: 'races',
        value: function races() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/races", { timeout: timeout });
        }
    }, {
        key: 'players',
        value: function players() {
            var timeout = arguments.length <= 0 || arguments[0] === undefined ? 2000 : arguments[0];

            return this.api.GET("game/players", { timeout: timeout });
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

            return this.api.GET("game/controlgame", { query: query, timeout: timeout });
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

            return this.api.GET("kills", { query: query, timeout: timeout });
        }
    }]);

    return RestAPI;
})();

exports['default'] = RestAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3V0aWwvUmVzdEFQSS50cyJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIlNldHRpbmdzLmNvbnN0cnVjdG9yIiwiU2V0dGluZ3MuZ2V0QXBpS2V5IiwiUmVzdCIsIlJlc3QuY29uc3RydWN0b3IiLCJSZXN0LnNlbGVjdFNlcnZlciIsIlJlc3QubWFrZVVybCIsIlJlc3QucmVxdWVzdCIsIlJlc3QucmVxdWVzdC5leGVjdXRvciIsIlJlc3QuR0VUIiwiUmVzdEFQSSIsIlJlc3RBUEkuY29uc3RydWN0b3IiLCJSZXN0QVBJLmZhY3Rpb25zIiwiUmVzdEFQSS5yYWNlcyIsIlJlc3RBUEkucGxheWVycyIsIlJlc3RBUEkuYmFuZXMiLCJSZXN0QVBJLmJvb25zIiwiUmVzdEFQSS5hdHRyaWJ1dGVzIiwiUmVzdEFQSS5jb250cm9sR2FtZSIsIlJlc3RBUEkucGF0Y2hub3RlcyIsIlJlc3RBUEkuYmFubmVycyIsIlJlc3RBUEkuc2NoZWR1bGVkRXZlbnRzIiwiUmVzdEFQSS5raWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTXlCLGlCQUFpQjs7OztrQ0FDcEIsd0JBQXdCOzs7O3NCQUMzQixXQUFXOzs7Ozs7Ozs7O0lBVzlCLFFBQUE7QUFPQ0EsYUFQRCxRQUFBLENBT2FBLE9BQWlCQSxFQUFBQTs4QkFQOUIsUUFBQTs7QUFRRUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsK0JBQWtCQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0E7QUFDekJBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO0FBQ3BCQSxnQkFBT0EsT0FBT0E7QUFDYkEsaUJBQUtBLGdDQUFVQSxRQUFRQTtBQUN0QkEsb0JBQUlBLENBQUNBLEdBQUdBLEdBQUdBLHNDQUFzQ0EsQ0FBQ0E7O0FBRWxEQSxvQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7QUFD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QUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFFQSxDQUFDQSxDQUFDQTtTQUNqRUE7OztXQXBERixPQUFBOzs7cUJBQUEsT0FBQSIsImZpbGUiOiJ0cy91dGlsL1Jlc3RBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IENvcmVTZXR0aW5ncyBmcm9tICcuLi9Db3JlU2V0dGluZ3MnO1xuaW1wb3J0IGNoYW5uZWxJZCBmcm9tICcuLi9jb25zdGFudHMvY2hhbm5lbElkJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcblxuLy8gVE9ETzogRGVmaW5lIHByb21pc2UgcHJvcGVybHkuICBDYW4ndCB1c2UgdGhpcyBhcyBhIHJldHVybiB0eXBlIFxuLy8gZm9yIG1ldGhvZHMgcmV0dXJuaW5nIGEgcHJvbWlzZS5cbmRlY2xhcmUgY29uc3QgUHJvbWlzZTogYW55O1xuXG4vLyBUT0RPOiBJIHdhbnRlZCB0aGlzIHRvIGV4dGVuZCBDb3JlU2V0dGluZ3MgYnV0IENvcmVTZXR0aW5ncyBcbi8vIHdvbid0IGFsbG93IHN1cGVyIHRvIGFjY2VzcyBpdHMgbWVtZWJlcnMsIG9yIHBhc3MgYW55dGhpbmdcbi8vIGJ1dCBhIGRlZmF1bHQgQ29yZVNldHRpbmdzIG9iamVjdCB0byBpdHMgY29uc3RydWN0b3IsIHNvXG4vLyB5b3UgY2FuJ3QgY3VzdG9taXNlIHRoZSBzZXR0aW5ncyBhdCBhbGwgKGUuZy4gbGlrZSBkZWZpbmVcbi8vIHRoZSBhcGkga2V5IG9yIGN1cnJlbnQgY2hhbm5lbClcbmNsYXNzIFNldHRpbmdzIHtcblx0Y29yZTogQ29yZVNldHRpbmdzO1xuXHR1cmw6IHN0cmluZztcblx0cG9ydDogbnVtYmVyO1xuXHRhcGlLZXk6IHN0cmluZztcblx0Y2hhbm5lbElkOiBjaGFubmVsSWQ7XG5cdHRpbWVvdXQ6IG51bWJlcjtcblx0Y29uc3RydWN0b3IoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLmNvcmUgPSBuZXcgQ29yZVNldHRpbmdzKCk7XHRcdFx0Ly8gVE9ETzogVGhpcyBjbGFzcyBpcyBhIGJpdCB3ZWlyZFxuXHRcdHRoaXMuY2hhbm5lbElkID0gY2hhbm5lbDtcblx0XHR0aGlzLnRpbWVvdXQgPSAyMDAwO1x0XHRcdFx0XHQvLyBkZWZhdWx0IHRpbWVvdXRcblx0XHRzd2l0Y2goY2hhbm5lbCkge1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuSEFUQ0hFUlk6XG5cdFx0XHRcdHRoaXMudXJsID0gJ2h0dHA6Ly9oYXRjaGVyeS5jYW1lbG90dW5jaGFpbmVkLmNvbSc7XG5cdFx0XHRcdC8vIEJVRzogKHJldHVybnMgaHR0cHM6Ly8pIHRoaXMudXJsID0gdGhpcy5jb3JlLmhhdGNoZXJ5QXBpVXJsO1xuXHRcdFx0XHR0aGlzLnBvcnQgPSB0aGlzLmNvcmUuaGF0Y2hlcnlBcGlQb3J0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgY2hhbm5lbElkLldZUk1MSU5HOlxuXHRcdFx0XHR0aGlzLnVybCA9ICdodHRwOi8vd3lybWxpbmcuY2FtZWxvdHVuY2hhaW5lZC5jb20nOyBcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUud3lybWxpbmdBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS53eXJtbGluZ0FwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRnZXRBcGlLZXkoKSB7XG5cdFx0aWYgKCF0aGlzLmFwaUtleSkge1xuXHRcdFx0dGhpcy5hcGlLZXkgPSBjbGllbnQubG9naW5Ub2tlbjtcdFx0Ly8gaW4gZmFrZSBBUEkgd2lsbCBwcm9tcHQgZm9yIHRva2VuXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmFwaUtleTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmVzdCB7XG5cblx0cHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRzZWxlY3RTZXJ2ZXIoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKGNoYW5uZWwpO1xuXHR9XG5cblx0bWFrZVVybCh2ZXJiOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncy51cmwgKyBcIjpcIiArIHRoaXMuc2V0dGluZ3MucG9ydCArIFwiL2FwaS9cIiArIHZlcmJcblx0fVxuXG5cdHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHZlcmI6IHN0cmluZywgcGFyYW1zOmFueSkge1xuXHRcdGxldCBrZXk6IHN0cmluZztcblx0XHRsZXQgdXJsOiBzdHJpbmc7XG5cblx0XHQvLyBjb25zdHJ1Y3QgcmVxdWVzdCBVUkxcblx0XHR1cmwgPSB0aGlzLm1ha2VVcmwodmVyYik7XG5cblx0XHQvLyBhZGQgcGFyYW1zXG5cdFx0Y29uc3QgcXVlcnkgPSBwYXJhbXMucXVlcnk7XG5cdFx0aWYgKHF1ZXJ5KSB7XG5cdFx0XHRsZXQgcXMgOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Zm9yIChrZXkgaW4gcXVlcnkpIHtcblx0XHRcdFx0aWYgKHF1ZXJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRxcy5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5W2tleV0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHFzLmxlbmd0aCkge1xuXHRcdFx0XHR1cmwgKz0gXCI/XCIgKyBxcy5qb2luKFwiJlwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkLCByZWplY3Q6IChzdGF0dXM6IHN0cmluZywgZXJyb3JUaHJvd246IHN0cmluZykgPT4gdm9pZCkge1xuXHRcdFx0Y29uc3QgWEhSIDogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0Ly8gU2V0IHRpbWVvdXRcblx0XHRcdFhIUi50aW1lb3V0ID0gcGFyYW1zLnRpbWVvdXQgfHwgdGhpcy5hcGkuc2V0dGluZ3MudGltZW91dDtcblxuXHRcdFx0Ly8gVE9ETzogSW1wbGVtZW50IHByb2dyZXNzaXZlIHRpbWVvdXRzIFxuXHRcdFx0WEhSLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXHRcdFx0WEhSLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZXY6IFByb2dyZXNzRXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5kaXIoZXYpO1xuXHRcdFx0fSk7XG5cdFx0XHRYSFIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2IDogVUlFdmVudCkgPT4ge1xuXHRcdFx0XHRpZiAoWEhSLnJlYWR5U3RhdGUgPT09IDQgJiYgWEhSLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGE6IGFueSA9IEpTT04ucGFyc2UoWEhSLnJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoXCJwYXJzZS1mYWlsXCIsIGUubWVzc2FnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFhIUi5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKGV2OiBVSUV2ZW50KSA9PiB7XG5cdFx0XHRcdHJlamVjdChcImFib3J0XCIsIFwiYWJvcnRlZFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0WEhSLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXYgOiBVSUV2ZW50KSA9PiB7XG5cdFx0XHRcdHJlamVjdChcImVycm9yXCIsIFwiZXJyb3JlZFwiKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRYSFIuc2VuZCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG5cdH1cblxuXHRHRVQodmVyYjogc3RyaW5nLCBwYXJhbXM6YW55ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KFwiR0VUXCIsIHZlcmIsIHBhcmFtcyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdEFQSSB7XG5cdHByaXZhdGUgYXBpOiBSZXN0O1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFwaSA9IG5ldyBSZXN0KCk7XG5cdFx0bGV0IHNlcnZlcjogc3RyaW5nIFtdID0gY2xpZW50LndlYkFQSUhvc3Quc3BsaXQoXCIuXCIpO1xuXHRcdHN3aXRjaChzZXJ2ZXJbMF0pIHtcblx0XHRcdGNhc2UgXCJoYXRjaGVyeVwiOlxuXHRcdFx0XHR0aGlzLmFwaS5zZWxlY3RTZXJ2ZXIoY2hhbm5lbElkLkhBVENIRVJZKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwid3lybWxpbmdcIjpcblx0XHRcdFx0dGhpcy5hcGkuc2VsZWN0U2VydmVyKGNoYW5uZWxJZC5XWVJNTElORyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZhY3Rpb25zKHRpbWVvdXQ6IG51bWJlciA9IDIwMDApIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9mYWN0aW9uc1wiLCB7IHRpbWVvdXQ6IHRpbWVvdXQgfSk7XG5cdH1cblx0cmFjZXModGltZW91dDogbnVtYmVyID0gMjAwMCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL3JhY2VzXCIsIHsgdGltZW91dDogdGltZW91dCB9KTtcblx0fVxuXHRwbGF5ZXJzKHRpbWVvdXQ6IG51bWJlciA9IDIwMDApIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9wbGF5ZXJzXCIsIHsgdGltZW91dDogdGltZW91dCB9KTtcblx0fVxuXHRiYW5lcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9iYW5lc1wiKTtcblx0fVxuXHRib29ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiZ2FtZS9ib29uc1wiKTtcblx0fVxuXHRhdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2F0dHJpYnV0ZXNcIik7XG5cdH1cblxuXHQvL1x0T3B0aW9uYWwgUXVlcnkgUGFyYW1ldGVyczoge1xuXHQvL1x0XHRpbmNsdWRlQ29udHJvbFBvaW50czogZmFsc2UgXHRcdC8vIHRydWUvZmFsc2Vcblx0Ly9cdH1cblx0Y29udHJvbEdhbWUocXVlcnk6YW55ID0gdW5kZWZpbmVkLCB0aW1lb3V0ID0gMzAwMCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2NvbnRyb2xnYW1lXCIsIHsgcXVlcnk6IHF1ZXJ5LCB0aW1lb3V0OiB0aW1lb3V0IH0pO1xuXHR9XG5cblx0cGF0Y2hub3RlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwicGF0Y2hub3Rlc1wiKTtcblx0fVxuXHRiYW5uZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJiYW5uZXJzXCIpO1xuXHR9XG5cdHNjaGVkdWxlZEV2ZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwic2NoZWR1bGVkZXZlbnRzXCIpO1xuXHR9XG5cdGtpbGxzKHF1ZXJ5OmFueSA9IHVuZGVmaW5lZCwgdGltZW91dDpudW1iZXIgPSAyMDAwKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpLkdFVChcImtpbGxzXCIsIHsgcXVlcnk6IHF1ZXJ5LCB0aW1lb3V0OiB0aW1lb3V0IH0pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
