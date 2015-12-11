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
                this.url = 'hatchery.camelotunchained.com';
                // BUG: (returns https://) this.url = this.core.hatcheryApiUrl;
                this.port = this.core.hatcheryApiPort;
                break;
            case _constantsChannelId2['default'].WYRMLING:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3V0aWwvUmVzdEFQSS50cyJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIlNldHRpbmdzLmNvbnN0cnVjdG9yIiwiU2V0dGluZ3MuZ2V0QXBpS2V5IiwiUmVzdCIsIlJlc3QuY29uc3RydWN0b3IiLCJSZXN0LnNlbGVjdFNlcnZlciIsIlJlc3QubWFrZVVybCIsIlJlc3QucmVxdWVzdCIsIlJlc3QucmVxdWVzdC5leGVjdXRvciIsIlJlc3QuR0VUIiwiUmVzdEFQSSIsIlJlc3RBUEkuY29uc3RydWN0b3IiLCJSZXN0QVBJLmZhY3Rpb25zIiwiUmVzdEFQSS5yYWNlcyIsIlJlc3RBUEkucGxheWVycyIsIlJlc3RBUEkuYmFuZXMiLCJSZXN0QVBJLmJvb25zIiwiUmVzdEFQSS5hdHRyaWJ1dGVzIiwiUmVzdEFQSS5jb250cm9sR2FtZSIsIlJlc3RBUEkucGF0Y2hub3RlcyIsIlJlc3RBUEkuYmFubmVycyIsIlJlc3RBUEkuc2NoZWR1bGVkRXZlbnRzIiwiUmVzdEFQSS5raWxscyIsIlJlc3RBUEkuY3JhZnRlZEFiaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTXlCLGlCQUFpQjs7OztrQ0FDcEIsd0JBQXdCOzs7O3NCQUMzQixXQUFXOzs7Ozs7Ozs7O0lBVzlCLFFBQUE7QUFPQ0EsYUFQRCxRQUFBLENBT2FBLE9BQWlCQSxFQUFBQTs4QkFQOUIsUUFBQTs7QUFRRUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsK0JBQWtCQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0E7QUFDekJBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO0FBQ3BCQSxnQkFBT0EsT0FBT0E7QUFDYkEsaUJBQUtBLGdDQUFVQSxRQUFRQTtBQUN0QkEsb0JBQUlBLENBQUNBLEdBQUdBLEdBQUdBLCtCQUErQkEsQ0FBQ0E7O0FBRTNDQSxvQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0Es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Q0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtTQUN2Q0E7OztlQUNJWCxpQkFBZ0RBO2dCQUEvQ0EsS0FBS0EseURBQVVBLFNBQVNBO2dCQUFFQSxPQUFPQSx5REFBVUEsSUFBSUE7O0FBQ3BEWSxtQkFBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsS0FBS0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7U0FDNUNBOzs7ZUFFc0JaLDBCQUFDQSxVQUFrQkEsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQzdEYSxtQkFBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQSxVQUFVQSxFQUFFQSxXQUFXQSxFQUFFQSxXQUFXQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtTQUN4R0E7OztXQXhESCxPQUFBOzs7cUJBQUEsT0FBQSIsImZpbGUiOiJ0cy91dGlsL1Jlc3RBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IENvcmVTZXR0aW5ncyBmcm9tICcuLi9Db3JlU2V0dGluZ3MnO1xuaW1wb3J0IGNoYW5uZWxJZCBmcm9tICcuLi9jb25zdGFudHMvY2hhbm5lbElkJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcblxuLy8gVE9ETzogRGVmaW5lIHByb21pc2UgcHJvcGVybHkuICBDYW4ndCB1c2UgdGhpcyBhcyBhIHJldHVybiB0eXBlIFxuLy8gZm9yIG1ldGhvZHMgcmV0dXJuaW5nIGEgcHJvbWlzZS5cbmRlY2xhcmUgY29uc3QgUHJvbWlzZTogYW55O1xuXG4vLyBUT0RPOiBJIHdhbnRlZCB0aGlzIHRvIGV4dGVuZCBDb3JlU2V0dGluZ3MgYnV0IENvcmVTZXR0aW5ncyBcbi8vIHdvbid0IGFsbG93IHN1cGVyIHRvIGFjY2VzcyBpdHMgbWVtZWJlcnMsIG9yIHBhc3MgYW55dGhpbmdcbi8vIGJ1dCBhIGRlZmF1bHQgQ29yZVNldHRpbmdzIG9iamVjdCB0byBpdHMgY29uc3RydWN0b3IsIHNvXG4vLyB5b3UgY2FuJ3QgY3VzdG9taXNlIHRoZSBzZXR0aW5ncyBhdCBhbGwgKGUuZy4gbGlrZSBkZWZpbmVcbi8vIHRoZSBhcGkga2V5IG9yIGN1cnJlbnQgY2hhbm5lbClcbmNsYXNzIFNldHRpbmdzIHtcblx0Y29yZTogQ29yZVNldHRpbmdzO1xuXHR1cmw6IHN0cmluZztcblx0cG9ydDogbnVtYmVyO1xuXHRhcGlLZXk6IHN0cmluZztcblx0Y2hhbm5lbElkOiBjaGFubmVsSWQ7XG5cdHRpbWVvdXQ6IG51bWJlcjtcblx0Y29uc3RydWN0b3IoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLmNvcmUgPSBuZXcgQ29yZVNldHRpbmdzKCk7XHRcdFx0Ly8gVE9ETzogVGhpcyBjbGFzcyBpcyBhIGJpdCB3ZWlyZFxuXHRcdHRoaXMuY2hhbm5lbElkID0gY2hhbm5lbDtcblx0XHR0aGlzLnRpbWVvdXQgPSAyMDAwO1x0XHRcdFx0XHQvLyBkZWZhdWx0IHRpbWVvdXRcblx0XHRzd2l0Y2goY2hhbm5lbCkge1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuSEFUQ0hFUlk6XG5cdFx0XHRcdHRoaXMudXJsID0gJ2hhdGNoZXJ5LmNhbWVsb3R1bmNoYWluZWQuY29tJztcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUuaGF0Y2hlcnlBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS5oYXRjaGVyeUFwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuV1lSTUxJTkc6XG5cdFx0XHRcdHRoaXMudXJsID0gJ3d5cm1saW5nLmNhbWVsb3R1bmNoYWluZWQuY29tJzsgXG5cdFx0XHRcdC8vIEJVRzogKHJldHVybnMgaHR0cHM6Ly8pIHRoaXMudXJsID0gdGhpcy5jb3JlLnd5cm1saW5nQXBpVXJsO1xuXHRcdFx0XHR0aGlzLnBvcnQgPSB0aGlzLmNvcmUud3lybWxpbmdBcGlQb3J0O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Z2V0QXBpS2V5KCkge1xuXHRcdGlmICghdGhpcy5hcGlLZXkpIHtcblx0XHRcdHRoaXMuYXBpS2V5ID0gY2xpZW50LmxvZ2luVG9rZW47XHRcdC8vIGluIGZha2UgQVBJIHdpbGwgcHJvbXB0IGZvciB0b2tlblxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5hcGlLZXk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3Qge1xuXG5cdHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0c2VsZWN0U2VydmVyKGNoYW5uZWw6Y2hhbm5lbElkKSB7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyhjaGFubmVsKTtcblx0fVxuXG4gIG1ha2VVcmwodmVyYjogc3RyaW5nLCB1c2VIdHRwczogYm9vbGVhbikge1xuICAgIHZhciBwcm90b2NvbCA9IHVzZUh0dHBzID8gJ2h0dHBzJyA6ICdodHRwJztcbiAgICB2YXIgcG9ydCA9IHVzZUh0dHBzID8gJzQ0NDMnIDogJzgwMDAnO1xuICAgIHJldHVybiBwcm90b2NvbCArICc6Ly8nICsgdGhpcy5zZXR0aW5ncy51cmwgKyAnOicgKyBwb3J0ICsgJy9hcGkvJyArIHZlcmI7XG4gIH1cblxuICByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB2ZXJiOiBzdHJpbmcsIHBhcmFtczogYW55ID0ge30sIHVzZUh0dHBzOmJvb2xlYW4gPSBmYWxzZSwgdGltZW91dDogbnVtYmVyID0gMCkge1xuXHRcdGxldCB1cmw6IHN0cmluZztcblxuXHRcdC8vIGNvbnN0cnVjdCByZXF1ZXN0IFVSTFxuICAgIHVybCA9IHRoaXMubWFrZVVybCh2ZXJiLCB1c2VIdHRwcyk7XG5cblx0XHQvLyBhZGQgcGFyYW1zXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgbGV0IHFzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHFzLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHFzLmxlbmd0aCkge1xuICAgICAgICB1cmwgKz0gXCI/XCIgKyBxcy5qb2luKFwiJlwiKTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHRmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkLCByZWplY3Q6IChzdGF0dXM6IHN0cmluZywgZXJyb3JUaHJvd246IHN0cmluZykgPT4gdm9pZCkge1xuXHRcdFx0Y29uc3QgWEhSIDogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0Ly8gU2V0IHRpbWVvdXRcbiAgICAgIGlmICgwIDwgdGltZW91dCkge1xuICAgICAgICBYSFIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qXG4gICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9Vc2luZ19YTUxIdHRwUmVxdWVzdFxuICAgICAgKiBjbGFpbXMgbGlzdGVuZXJzIG5lZWQgdG8gYmUgYWRkZWQgYmVmb3JlIGNhbGxpbmcgb3BlblxuICAgICAgKi9cbiAgICAgIFhIUi5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGV2KTtcbiAgICAgIH0pO1xuXG4gICAgICBYSFIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2OiBVSUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PT0gNCAmJiBYSFIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55ID0gSlNPTi5wYXJzZShYSFIucmVzcG9uc2UpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoXCJwYXJzZS1mYWlsXCIsIGUubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgWEhSLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoZXY6IFVJRXZlbnQpID0+IHtcbiAgICAgICAgcmVqZWN0KFwiYWJvcnRcIiwgXCJhYm9ydGVkXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIFhIUi5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGV2OiBVSUV2ZW50KSA9PiB7XG4gICAgICAgIHJlamVjdChcImVycm9yXCIsIFwiZXJyb3JlZFwiKTtcbiAgICAgIH0pO1xuXG5cdFx0XHQvLyBUT0RPOiBJbXBsZW1lbnQgcHJvZ3Jlc3NpdmUgdGltZW91dHMgXG5cdFx0XHRYSFIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cdFx0XHRYSFIuc2VuZCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG5cdH1cblxuICBHRVQodmVyYjogc3RyaW5nLCBwYXJhbXM6IE9iamVjdCA9IHt9LCB0aW1lb3V0OiBudW1iZXIgPSAwLCB1c2VIdHRwczogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcIkdFVFwiLCB2ZXJiLCBwYXJhbXMsIHVzZUh0dHBzLCB0aW1lb3V0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0QVBJIHtcblx0cHJpdmF0ZSBhcGk6IFJlc3Q7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYXBpID0gbmV3IFJlc3QoKTtcblx0XHRsZXQgc2VydmVyOiBzdHJpbmcgW10gPSBjbGllbnQud2ViQVBJSG9zdC5zcGxpdChcIi5cIik7XG5cdFx0c3dpdGNoKHNlcnZlclswXSkge1xuXHRcdFx0Y2FzZSBcImhhdGNoZXJ5XCI6XG5cdFx0XHRcdHRoaXMuYXBpLnNlbGVjdFNlcnZlcihjaGFubmVsSWQuSEFUQ0hFUlkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ3eXJtbGluZ1wiOlxuXHRcdFx0XHR0aGlzLmFwaS5zZWxlY3RTZXJ2ZXIoY2hhbm5lbElkLldZUk1MSU5HKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cbiAgZmFjdGlvbnModGltZW91dDogbnVtYmVyID0gMjAwMCkge1xuICAgIHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2ZhY3Rpb25zXCIsIHt9LCB0aW1lb3V0KTtcblx0fVxuXHRyYWNlcyh0aW1lb3V0OiBudW1iZXIgPSAyMDAwKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLkdFVChcImdhbWUvcmFjZXNcIiwge30sIHRpbWVvdXQpO1xuXHR9XG5cdHBsYXllcnModGltZW91dDogbnVtYmVyID0gMjAwMCkge1xuICAgIHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL3BsYXllcnNcIiwge30sIHRpbWVvdXQpO1xuXHR9XG5cdGJhbmVzKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2JhbmVzXCIpO1xuXHR9XG5cdGJvb25zKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2Jvb25zXCIpO1xuXHR9XG5cdGF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpLkdFVChcImdhbWUvYXR0cmlidXRlc1wiKTtcblx0fVxuXG5cdC8vXHRPcHRpb25hbCBRdWVyeSBQYXJhbWV0ZXJzOiB7XG5cdC8vXHRcdGluY2x1ZGVDb250cm9sUG9pbnRzOiBmYWxzZSBcdFx0Ly8gdHJ1ZS9mYWxzZVxuICAvL1x0fVxuICBjb250cm9sR2FtZShxdWVyeTogT2JqZWN0ID0gdW5kZWZpbmVkLCB0aW1lb3V0ID0gMzAwMCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJnYW1lL2NvbnRyb2xnYW1lXCIsIHF1ZXJ5LCB0aW1lb3V0KTtcblx0fVxuXG5cdHBhdGNobm90ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpLkdFVChcInBhdGNobm90ZXNcIik7XG5cdH1cblx0YmFubmVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGkuR0VUKFwiYmFubmVyc1wiKTtcblx0fVxuXHRzY2hlZHVsZWRFdmVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpLkdFVChcInNjaGVkdWxlZGV2ZW50c1wiKTtcblx0fVxuXHRraWxscyhxdWVyeTpPYmplY3QgPSB1bmRlZmluZWQsIHRpbWVvdXQ6bnVtYmVyID0gMjAwMCkge1xuXHRcdHJldHVybiB0aGlzLmFwaS5HRVQoXCJraWxsc1wiLCBxdWVyeSwgdGltZW91dCk7XG4gIH1cblxuICBwdWJsaWMgY3JhZnRlZEFiaWxpdGllcyhsb2dpblRva2VuOiBzdHJpbmcsIGNoYXJhY3RlcklEOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hcGkuR0VUKFwiY3JhZnRlZGFiaWxpdGllc1wiLCB7IGxvZ2luVG9rZW46IGxvZ2luVG9rZW4sIGNoYXJhY3RlcklEOiBjaGFyYWN0ZXJJRCB9LCAwLCB0cnVlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
