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

exports.getJSON = getJSON;
exports.getFactions = getFactions;
exports.getCraftedAbilities = getCraftedAbilities;
exports.getKills = getKills;
exports.getScheduledEvents = getScheduledEvents;
exports.getBanners = getBanners;
exports.getPatchNotes = getPatchNotes;
exports.getControlGame = getControlGame;
exports.getAllAttributes = getAllAttributes;
exports.getAllBoons = getAllBoons;
exports.getAllBanes = getAllBanes;
exports.getAllPlayers = getAllPlayers;
exports.getAllRaces = getAllRaces;
exports.getAllFactions = getAllFactions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _isomorphicFetch = require('isomorphic-fetch');

var _coreCoreSettings = require('../core/CoreSettings');

var _coreCoreSettings2 = _interopRequireDefault(_coreCoreSettings);

var _coreConstantsChannelId = require('../core/constants/channelId');

var _coreConstantsChannelId2 = _interopRequireDefault(_coreConstantsChannelId);

var _coreClient = require('../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

var _eventsEvents = require('../events/events');

var _eventsEvents2 = _interopRequireDefault(_eventsEvents);

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

    // default to Hatchery

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

var settings = new Settings(4);
if ((0, _coreClient.hasClientAPI)()) {
    _eventsEvents2['default'].on('init', function () {
        settings = new Settings(_coreClient2['default'].patchResourceChannel);
    });
}
function makeAPIUrl(endpoint, useHttps) {
    if (endpoint.indexOf('://') != -1) return; // we already have a fully formed url, skip
    var protocol = useHttps ? 'https' : 'http';
    var port = useHttps ? '4443' : '8000';
    return protocol + '://' + settings.url + ':' + port + '/api/' + endpoint;
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
function parseJSON(response) {
    return response.json();
}
function makeQueryString(url) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (!params) return url;
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

function getJSON(endpoint) {
    var useHttps = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var query = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return (0, _isomorphicFetch.fetch)(makeQueryString(makeAPIUrl(endpoint, useHttps), query)).then(checkStatus).then(parseJSON);
}

function getFactions() {
    return getJSON('game/factions');
}

function getCraftedAbilities(loginToken, characterID) {
    return getJSON('craftedabilities', false, {
        loginToken: loginToken,
        characterID: characterID
    });
}

function getKills() {
    var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return getJSON('kills', false, query);
}

function getScheduledEvents() {
    return getJSON('scheduledevents');
}

function getBanners() {
    return getJSON('banners');
}

function getPatchNotes() {
    return getJSON('patchnotes');
}

function getControlGame() {
    var includeControlPoints = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    return getJSON('game/controlgame', false, { includeControlPoints: includeControlPoints });
}

function getAllAttributes() {
    return getJSON('game/attributes');
}

function getAllBoons() {
    return getJSON('game/boons');
}

function getAllBanes() {
    return getJSON('game/banes');
}

function getAllPlayers() {
    return getJSON('game/players');
}

function getAllRaces() {
    return getJSON('game/races');
}

function getAllFactions() {
    return getJSON('game/factions');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhcGkvUmVzdEFQSS50cyJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIlNldHRpbmdzLmNvbnN0cnVjdG9yIiwiU2V0dGluZ3MuZ2V0QXBpS2V5IiwibWFrZUFQSVVybCIsImNoZWNrU3RhdHVzIiwicGFyc2VKU09OIiwibWFrZVF1ZXJ5U3RyaW5nIiwiZ2V0SlNPTiIsImdldEZhY3Rpb25zIiwiZ2V0Q3JhZnRlZEFiaWxpdGllcyIsImdldEtpbGxzIiwiZ2V0U2NoZWR1bGVkRXZlbnRzIiwiZ2V0QmFubmVycyIsImdldFBhdGNoTm90ZXMiLCJnZXRDb250cm9sR2FtZSIsImdldEFsbEF0dHJpYnV0ZXMiLCJnZXRBbGxCb29ucyIsImdldEFsbEJhbmVzIiwiZ2V0QWxsUGxheWVycyIsImdldEFsbFJhY2VzIiwiZ2V0QWxsRmFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQU1vQixrQkFBa0I7O2dDQUdiLHNCQUFzQjs7OztzQ0FDekIsNkJBQTZCOzs7OzBCQUNoQixnQkFBZ0I7Ozs7NEJBQ2hDLGtCQUFrQjs7Ozs7Ozs7OztJQU9yQyxRQUFBO0FBT0NBLGFBUEQsUUFBQSxDQU9hQSxPQUFpQkEsRUFBQUE7OEJBUDlCLFFBQUE7O0FBUUVDLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLG1DQUFrQkEsQ0FBQ0E7QUFDL0JBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBO0FBQ3pCQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNwQkEsZ0JBQU9BLE9BQU9BO0FBQ2JBLGlCQUFLQSxvQ0FBVUEsUUFBUUE7QUFDdEJBLG9CQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSwrQkFBK0JBLENBQUNBOztBQUUzQ0Esb0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBO0FBQ3RDQSxzQkFBTUE7QUFBQUEsQUFDUEEsaUJBQUtB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QUFLQSxFQUFFQSxFQUFDQSxvQkFBb0JBLEVBQUVBLG9CQUFvQkEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Q0FDekZBOztBQUVELFNBQUEsZ0JBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO0NBQ25DQTs7QUFFRCxTQUFBLFdBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtDQUM5QkE7O0FBRUQsU0FBQSxXQUFBLEdBQUE7QUFDRUMsV0FBT0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Q0FDOUJBOztBQUVELFNBQUEsYUFBQSxHQUFBO0FBQ0VDLFdBQU9BLE9BQU9BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0NBQ2hDQTs7QUFFRCxTQUFBLFdBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtDQUM5QkE7O0FBRUQsU0FBQSxjQUFBLEdBQUE7QUFDRUMsV0FBT0EsT0FBT0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Q0FDakNBIiwiZmlsZSI6InJlc3RhcGkvUmVzdEFQSS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQge2ZldGNofSBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCB7UHJvbWlzZX0gZnJvbSAnZXM2LXByb21pc2UnO1xuXG5pbXBvcnQgQ29yZVNldHRpbmdzIGZyb20gJy4uL2NvcmUvQ29yZVNldHRpbmdzJztcbmltcG9ydCBjaGFubmVsSWQgZnJvbSAnLi4vY29yZS9jb25zdGFudHMvY2hhbm5lbElkJztcbmltcG9ydCBjbGllbnQsIHtoYXNDbGllbnRBUEl9IGZyb20gJy4uL2NvcmUvY2xpZW50JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzL2V2ZW50cyc7XG5cbi8vIFRPRE86IEkgd2FudGVkIHRoaXMgdG8gZXh0ZW5kIENvcmVTZXR0aW5ncyBidXQgQ29yZVNldHRpbmdzXG4vLyB3b24ndCBhbGxvdyBzdXBlciB0byBhY2Nlc3MgaXRzIG1lbWViZXJzLCBvciBwYXNzIGFueXRoaW5nXG4vLyBidXQgYSBkZWZhdWx0IENvcmVTZXR0aW5ncyBvYmplY3QgdG8gaXRzIGNvbnN0cnVjdG9yLCBzb1xuLy8geW91IGNhbid0IGN1c3RvbWlzZSB0aGUgc2V0dGluZ3MgYXQgYWxsIChlLmcuIGxpa2UgZGVmaW5lXG4vLyB0aGUgYXBpIGtleSBvciBjdXJyZW50IGNoYW5uZWwpXG5jbGFzcyBTZXR0aW5ncyB7XG5cdGNvcmU6IENvcmVTZXR0aW5ncztcblx0dXJsOiBzdHJpbmc7XG5cdHBvcnQ6IG51bWJlcjtcblx0YXBpS2V5OiBzdHJpbmc7XG5cdGNoYW5uZWxJZDogY2hhbm5lbElkO1xuXHR0aW1lb3V0OiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKGNoYW5uZWw6Y2hhbm5lbElkKSB7XG5cdFx0dGhpcy5jb3JlID0gbmV3IENvcmVTZXR0aW5ncygpO1x0XHRcdC8vIFRPRE86IFRoaXMgY2xhc3MgaXMgYSBiaXQgd2VpcmRcblx0XHR0aGlzLmNoYW5uZWxJZCA9IGNoYW5uZWw7XG5cdFx0dGhpcy50aW1lb3V0ID0gMjAwMDtcdFx0XHRcdFx0Ly8gZGVmYXVsdCB0aW1lb3V0XG5cdFx0c3dpdGNoKGNoYW5uZWwpIHtcblx0XHRcdGNhc2UgY2hhbm5lbElkLkhBVENIRVJZOlxuXHRcdFx0XHR0aGlzLnVybCA9ICdoYXRjaGVyeS5jYW1lbG90dW5jaGFpbmVkLmNvbSc7XG5cdFx0XHRcdC8vIEJVRzogKHJldHVybnMgaHR0cHM6Ly8pIHRoaXMudXJsID0gdGhpcy5jb3JlLmhhdGNoZXJ5QXBpVXJsO1xuXHRcdFx0XHR0aGlzLnBvcnQgPSB0aGlzLmNvcmUuaGF0Y2hlcnlBcGlQb3J0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgY2hhbm5lbElkLldZUk1MSU5HOlxuXHRcdFx0XHR0aGlzLnVybCA9ICd3eXJtbGluZy5jYW1lbG90dW5jaGFpbmVkLmNvbSc7XG5cdFx0XHRcdC8vIEJVRzogKHJldHVybnMgaHR0cHM6Ly8pIHRoaXMudXJsID0gdGhpcy5jb3JlLnd5cm1saW5nQXBpVXJsO1xuXHRcdFx0XHR0aGlzLnBvcnQgPSB0aGlzLmNvcmUud3lybWxpbmdBcGlQb3J0O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Z2V0QXBpS2V5KCkge1xuXHRcdGlmICghdGhpcy5hcGlLZXkpIHtcblx0XHRcdHRoaXMuYXBpS2V5ID0gY2xpZW50LmxvZ2luVG9rZW47XHRcdC8vIGluIGZha2UgQVBJIHdpbGwgcHJvbXB0IGZvciB0b2tlblxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5hcGlLZXk7XG5cdH1cbn1cblxuLy8gZGVmYXVsdCB0byBIYXRjaGVyeVxubGV0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKDQpO1xuaWYgKGhhc0NsaWVudEFQSSgpKSB7XG4gICAgZXZlbnRzLm9uKCdpbml0JywgKCkgPT4ge1xuICAgIHNldHRpbmdzID0gbmV3IFNldHRpbmdzKGNsaWVudC5wYXRjaFJlc291cmNlQ2hhbm5lbCk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VBUElVcmwoZW5kcG9pbnQ6IHN0cmluZywgdXNlSHR0cHM6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBpZiAoZW5kcG9pbnQuaW5kZXhPZignOi8vJykgIT0gLTEpIHJldHVybjsgLy8gd2UgYWxyZWFkeSBoYXZlIGEgZnVsbHkgZm9ybWVkIHVybCwgc2tpcFxuICB2YXIgcHJvdG9jb2wgPSB1c2VIdHRwcyA/ICdodHRwcycgOiAnaHR0cCc7XG4gIHZhciBwb3J0ID0gdXNlSHR0cHMgPyAnNDQ0MycgOiAnODAwMCc7XG4gIHJldHVybiBwcm90b2NvbCArICc6Ly8nICsgc2V0dGluZ3MudXJsICsgJzonICsgcG9ydCArICcvYXBpLycgKyBlbmRwb2ludDtcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2U6IGFueSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICg8YW55PmVycm9yKS5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSlNPTihyZXNwb25zZTogYW55KSB7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VRdWVyeVN0cmluZyh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnkgPSB7fSk6IHN0cmluZyB7XG4gIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xuICBcbiAgbGV0IGtleTogc3RyaW5nO1xuICBsZXQgcXM6IHN0cmluZ1tdID0gW107XG4gIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcXMucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkpO1xuICAgIH1cbiAgfVxuICBpZiAocXMubGVuZ3RoKSB7XG4gICAgdXJsICs9IFwiP1wiICsgcXMuam9pbihcIiZcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT04oZW5kcG9pbnQ6IHN0cmluZywgdXNlSHR0cHM6IGJvb2xlYW4gPSBmYWxzZSwgcXVlcnk6IGFueSA9IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKG1ha2VRdWVyeVN0cmluZyhtYWtlQVBJVXJsKGVuZHBvaW50LCB1c2VIdHRwcyksIHF1ZXJ5KSlcbiAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAudGhlbihwYXJzZUpTT04pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFjdGlvbnMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2ZhY3Rpb25zJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDcmFmdGVkQWJpbGl0aWVzKGxvZ2luVG9rZW46IHN0cmluZywgY2hhcmFjdGVySUQ6IHN0cmluZykge1xuICByZXR1cm4gZ2V0SlNPTignY3JhZnRlZGFiaWxpdGllcycsIGZhbHNlLCB7XG4gICAgICBsb2dpblRva2VuOiBsb2dpblRva2VuLFxuICAgICAgY2hhcmFjdGVySUQ6IGNoYXJhY3RlcklEXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLaWxscyhxdWVyeTogT2JqZWN0ID0ge30pIHtcbiAgcmV0dXJuIGdldEpTT04oJ2tpbGxzJywgZmFsc2UsIHF1ZXJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVkdWxlZEV2ZW50cygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ3NjaGVkdWxlZGV2ZW50cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFubmVycygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2Jhbm5lcnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdGNoTm90ZXMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdwYXRjaG5vdGVzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cm9sR2FtZShpbmNsdWRlQ29udHJvbFBvaW50czogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2NvbnRyb2xnYW1lJywgZmFsc2UsIHtpbmNsdWRlQ29udHJvbFBvaW50czogaW5jbHVkZUNvbnRyb2xQb2ludHN9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEF0dHJpYnV0ZXMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2F0dHJpYnV0ZXMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEJvb25zKCkge1xuICByZXR1cm4gZ2V0SlNPTignZ2FtZS9ib29ucycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQmFuZXMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2JhbmVzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQbGF5ZXJzKCkge1xuICByZXR1cm4gZ2V0SlNPTignZ2FtZS9wbGF5ZXJzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxSYWNlcygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2dhbWUvcmFjZXMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEZhY3Rpb25zKCkge1xuICByZXR1cm4gZ2V0SlNPTignZ2FtZS9mYWN0aW9ucycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
