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

require('isomorphic-fetch');

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

    return fetch(makeQueryString(makeAPIUrl(endpoint, useHttps), query)).then(checkStatus).then(parseJSON);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhcGkvUmVzdEFQSS50cyJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIlNldHRpbmdzLmNvbnN0cnVjdG9yIiwiU2V0dGluZ3MuZ2V0QXBpS2V5IiwibWFrZUFQSVVybCIsImNoZWNrU3RhdHVzIiwicGFyc2VKU09OIiwibWFrZVF1ZXJ5U3RyaW5nIiwiZ2V0SlNPTiIsImdldEZhY3Rpb25zIiwiZ2V0Q3JhZnRlZEFiaWxpdGllcyIsImdldEtpbGxzIiwiZ2V0U2NoZWR1bGVkRXZlbnRzIiwiZ2V0QmFubmVycyIsImdldFBhdGNoTm90ZXMiLCJnZXRDb250cm9sR2FtZSIsImdldEFsbEF0dHJpYnV0ZXMiLCJnZXRBbGxCb29ucyIsImdldEFsbEJhbmVzIiwiZ2V0QWxsUGxheWVycyIsImdldEFsbFJhY2VzIiwiZ2V0QWxsRmFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBTU8sa0JBQWtCOztnQ0FHQSxzQkFBc0I7Ozs7c0NBQ3pCLDZCQUE2Qjs7OzswQkFDaEIsZ0JBQWdCOzs7OzRCQUNoQyxrQkFBa0I7Ozs7Ozs7Ozs7SUFPckMsUUFBQTtBQU9DQSxhQVBELFFBQUEsQ0FPYUEsT0FBaUJBLEVBQUFBOzhCQVA5QixRQUFBOztBQVFFQyxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxtQ0FBa0JBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDcEJBLGdCQUFPQSxPQUFPQTtBQUNiQSxpQkFBS0Esb0NBQVVBLFFBQVFBO0FBQ3RCQSxvQkFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsK0JBQStCQSxDQUFDQTs7QUFFM0NBLG9CQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtBQUN0Q0Esc0JBQU1BO0FBQUFBLEFBQ1BBLGlCQUFLQSxv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QSxLQUFLQSxFQUFFQSxFQUFDQSxvQkFBb0JBLEVBQUVBLG9CQUFvQkEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Q0FDekZBOztBQUVELFNBQUEsZ0JBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO0NBQ25DQTs7QUFFRCxTQUFBLFdBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtDQUM5QkE7O0FBRUQsU0FBQSxXQUFBLEdBQUE7QUFDRUMsV0FBT0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Q0FDOUJBOztBQUVELFNBQUEsYUFBQSxHQUFBO0FBQ0VDLFdBQU9BLE9BQU9BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0NBQ2hDQTs7QUFFRCxTQUFBLFdBQUEsR0FBQTtBQUNFQyxXQUFPQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtDQUM5QkE7O0FBRUQsU0FBQSxjQUFBLEdBQUE7QUFDRUMsV0FBT0EsT0FBT0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Q0FDakNBIiwiZmlsZSI6InJlc3RhcGkvUmVzdEFQSS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmltcG9ydCBDb3JlU2V0dGluZ3MgZnJvbSAnLi4vY29yZS9Db3JlU2V0dGluZ3MnO1xuaW1wb3J0IGNoYW5uZWxJZCBmcm9tICcuLi9jb3JlL2NvbnN0YW50cy9jaGFubmVsSWQnO1xuaW1wb3J0IGNsaWVudCwge2hhc0NsaWVudEFQSX0gZnJvbSAnLi4vY29yZS9jbGllbnQnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMvZXZlbnRzJztcblxuLy8gVE9ETzogSSB3YW50ZWQgdGhpcyB0byBleHRlbmQgQ29yZVNldHRpbmdzIGJ1dCBDb3JlU2V0dGluZ3Ncbi8vIHdvbid0IGFsbG93IHN1cGVyIHRvIGFjY2VzcyBpdHMgbWVtZWJlcnMsIG9yIHBhc3MgYW55dGhpbmdcbi8vIGJ1dCBhIGRlZmF1bHQgQ29yZVNldHRpbmdzIG9iamVjdCB0byBpdHMgY29uc3RydWN0b3IsIHNvXG4vLyB5b3UgY2FuJ3QgY3VzdG9taXNlIHRoZSBzZXR0aW5ncyBhdCBhbGwgKGUuZy4gbGlrZSBkZWZpbmVcbi8vIHRoZSBhcGkga2V5IG9yIGN1cnJlbnQgY2hhbm5lbClcbmNsYXNzIFNldHRpbmdzIHtcblx0Y29yZTogQ29yZVNldHRpbmdzO1xuXHR1cmw6IHN0cmluZztcblx0cG9ydDogbnVtYmVyO1xuXHRhcGlLZXk6IHN0cmluZztcblx0Y2hhbm5lbElkOiBjaGFubmVsSWQ7XG5cdHRpbWVvdXQ6IG51bWJlcjtcblx0Y29uc3RydWN0b3IoY2hhbm5lbDpjaGFubmVsSWQpIHtcblx0XHR0aGlzLmNvcmUgPSBuZXcgQ29yZVNldHRpbmdzKCk7XHRcdFx0Ly8gVE9ETzogVGhpcyBjbGFzcyBpcyBhIGJpdCB3ZWlyZFxuXHRcdHRoaXMuY2hhbm5lbElkID0gY2hhbm5lbDtcblx0XHR0aGlzLnRpbWVvdXQgPSAyMDAwO1x0XHRcdFx0XHQvLyBkZWZhdWx0IHRpbWVvdXRcblx0XHRzd2l0Y2goY2hhbm5lbCkge1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuSEFUQ0hFUlk6XG5cdFx0XHRcdHRoaXMudXJsID0gJ2hhdGNoZXJ5LmNhbWVsb3R1bmNoYWluZWQuY29tJztcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUuaGF0Y2hlcnlBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS5oYXRjaGVyeUFwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBjaGFubmVsSWQuV1lSTUxJTkc6XG5cdFx0XHRcdHRoaXMudXJsID0gJ3d5cm1saW5nLmNhbWVsb3R1bmNoYWluZWQuY29tJztcblx0XHRcdFx0Ly8gQlVHOiAocmV0dXJucyBodHRwczovLykgdGhpcy51cmwgPSB0aGlzLmNvcmUud3lybWxpbmdBcGlVcmw7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHRoaXMuY29yZS53eXJtbGluZ0FwaVBvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRnZXRBcGlLZXkoKSB7XG5cdFx0aWYgKCF0aGlzLmFwaUtleSkge1xuXHRcdFx0dGhpcy5hcGlLZXkgPSBjbGllbnQubG9naW5Ub2tlbjtcdFx0Ly8gaW4gZmFrZSBBUEkgd2lsbCBwcm9tcHQgZm9yIHRva2VuXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmFwaUtleTtcblx0fVxufVxuXG4vLyBkZWZhdWx0IHRvIEhhdGNoZXJ5XG5sZXQgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoNCk7XG5pZiAoaGFzQ2xpZW50QVBJKCkpIHtcbiAgICBldmVudHMub24oJ2luaXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoY2xpZW50LnBhdGNoUmVzb3VyY2VDaGFubmVsKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUFQSVVybChlbmRwb2ludDogc3RyaW5nLCB1c2VIdHRwczogYm9vbGVhbik6IHN0cmluZyB7XG4gIGlmIChlbmRwb2ludC5pbmRleE9mKCc6Ly8nKSAhPSAtMSkgcmV0dXJuOyAvLyB3ZSBhbHJlYWR5IGhhdmUgYSBmdWxseSBmb3JtZWQgdXJsLCBza2lwXG4gIHZhciBwcm90b2NvbCA9IHVzZUh0dHBzID8gJ2h0dHBzJyA6ICdodHRwJztcbiAgdmFyIHBvcnQgPSB1c2VIdHRwcyA/ICc0NDQzJyA6ICc4MDAwJztcbiAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyBzZXR0aW5ncy51cmwgKyAnOicgKyBwb3J0ICsgJy9hcGkvJyArIGVuZHBvaW50O1xufVxuXG5mdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZTogYW55KSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgKDxhbnk+ZXJyb3IpLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlOiBhbnkpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZnVuY3Rpb24gbWFrZVF1ZXJ5U3RyaW5nKHVybDogc3RyaW5nLCBwYXJhbXM6IGFueSA9IHt9KTogc3RyaW5nIHtcbiAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XG4gIFxuICBsZXQga2V5OiBzdHJpbmc7XG4gIGxldCBxczogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBxcy5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSk7XG4gICAgfVxuICB9XG4gIGlmIChxcy5sZW5ndGgpIHtcbiAgICB1cmwgKz0gXCI/XCIgKyBxcy5qb2luKFwiJlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihlbmRwb2ludDogc3RyaW5nLCB1c2VIdHRwczogYm9vbGVhbiA9IGZhbHNlLCBxdWVyeTogYW55ID0ge30pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2gobWFrZVF1ZXJ5U3RyaW5nKG1ha2VBUElVcmwoZW5kcG9pbnQsIHVzZUh0dHBzKSwgcXVlcnkpKVxuICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICAgIC50aGVuKHBhcnNlSlNPTik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYWN0aW9ucygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2dhbWUvZmFjdGlvbnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyYWZ0ZWRBYmlsaXRpZXMobG9naW5Ub2tlbjogc3RyaW5nLCBjaGFyYWN0ZXJJRDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRKU09OKCdjcmFmdGVkYWJpbGl0aWVzJywgZmFsc2UsIHtcbiAgICAgIGxvZ2luVG9rZW46IGxvZ2luVG9rZW4sXG4gICAgICBjaGFyYWN0ZXJJRDogY2hhcmFjdGVySURcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtpbGxzKHF1ZXJ5OiBPYmplY3QgPSB7fSkge1xuICByZXR1cm4gZ2V0SlNPTigna2lsbHMnLCBmYWxzZSwgcXVlcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZWR1bGVkRXZlbnRzKCkge1xuICByZXR1cm4gZ2V0SlNPTignc2NoZWR1bGVkZXZlbnRzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYW5uZXJzKCkge1xuICByZXR1cm4gZ2V0SlNPTignYmFubmVycycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0Y2hOb3RlcygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ3BhdGNobm90ZXMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xHYW1lKGluY2x1ZGVDb250cm9sUG9pbnRzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2dhbWUvY29udHJvbGdhbWUnLCBmYWxzZSwge2luY2x1ZGVDb250cm9sUG9pbnRzOiBpbmNsdWRlQ29udHJvbFBvaW50c30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQXR0cmlidXRlcygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2dhbWUvYXR0cmlidXRlcycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQm9vbnMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2Jvb25zJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxCYW5lcygpIHtcbiAgcmV0dXJuIGdldEpTT04oJ2dhbWUvYmFuZXMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBsYXllcnMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL3BsYXllcnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFJhY2VzKCkge1xuICByZXR1cm4gZ2V0SlNPTignZ2FtZS9yYWNlcycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRmFjdGlvbnMoKSB7XG4gIHJldHVybiBnZXRKU09OKCdnYW1lL2ZhY3Rpb25zJyk7XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
