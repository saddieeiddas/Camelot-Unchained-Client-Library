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

var _coreClassesConfig = require('../../core/classes/Config');

var _coreClassesConfig2 = _interopRequireDefault(_coreClassesConfig);

var _coreClassesConfigVar = require('../../core/classes/ConfigVar');

var _coreClassesConfigVar2 = _interopRequireDefault(_coreClassesConfigVar);

var _coreConstantsTags = require('../../core/constants/tags');

var _coreConstantsTags2 = _interopRequireDefault(_coreConstantsTags);

function run(emitter, topic) {
    var config = new _coreClassesConfig2['default']();
    var queue = [];
    var tagsArray = Object.keys(_coreConstantsTags2['default']).filter(function (id) {
        return !isNaN(id);
    });
    var reloadingAllConfig = false;
    _coreClient2['default'].OnReceiveConfigVars(function (rawConfigVars) {
        var configVars = JSON.parse(rawConfigVars);
        var tag = queue.length > 0 ? parseInt(queue.shift(), 10) : null;
        for (var id in configVars) {
            var value = configVars[id];
            if (value === 'true') {
                value = true;
            } else if (value === 'false') {
                value = false;
            }
            var index = config.getVarIndex(id);
            if (index < 0) {
                var configVar = new _coreClassesConfigVar2['default']({
                    id: id,
                    tag: tag,
                    value: value
                });
                config.vars.push(configVar);
            } else {
                var _index = config.getVarIndex(id);
                config.vars[_index].value = value;
            }
        }
        if (queue.length === 0) {
            reloadingAllConfig = false;
            emitter.emit(topic, config);
        }
    });
    _coreClient2['default'].OnReceiveConfigVar(function (configVars) {
        for (var id in configVars) {
            var value = configVars[id];
            if (value === 'true') {
                value = true;
            } else if (value === 'false') {
                value = false;
            }
            var index = config.getVarIndex(id);
            config.vars[index].value = value;
        }
        emitter.emit(topic, config);
    });
    _coreClient2['default'].OnConfigVarChanged(function (isChangeSuccessful) {
        if (!isChangeSuccessful) {
            console.warn('Could not change ConfigVar value');
        }
        if (!reloadingAllConfig) {
            reloadAllConfig();
        }
    });
    _coreClient2['default'].OnSavedConfigChanges(function () {
        reloadAllConfig();
    });
    reloadAllConfig();
    function reloadAllConfig() {
        reloadingAllConfig = true;
        tagsArray.forEach(function (tag) {
            queue.push(tag);
            _coreClient2['default'].GetConfigVars(parseInt(tag, 10));
        });
    }
}

var ConfigListener = (function () {
    function ConfigListener(handles) {
        _classCallCheck(this, ConfigListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(ConfigListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return ConfigListener;
})();

exports['default'] = ConfigListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ29uZmlnLnRzIl0sIm5hbWVzIjpbInJ1biIsInJ1bi5yZWxvYWRBbGxDb25maWciLCJDb25maWdMaXN0ZW5lciIsIkNvbmZpZ0xpc3RlbmVyLmNvbnN0cnVjdG9yIiwiQ29uZmlnTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFtQixtQkFBbUI7Ozs7aUNBQ25CLDJCQUEyQjs7OztvQ0FDeEIsOEJBQThCOzs7O2lDQUNuQywyQkFBMkI7Ozs7QUFFNUMsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLFFBQU1BLE1BQU1BLEdBQUdBLG9DQUFZQSxDQUFDQTtBQUM1QkEsUUFBTUEsS0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFDeEJBLFFBQU1BLFNBQVNBLEdBQVVBLE1BQU1BLENBQUNBLElBQUlBLGdDQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFPQSxFQUFBQTtBQUN4REEsZUFBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7S0FDbkJBLENBQUNBLENBQUNBO0FBQ0hBLFFBQUlBLGtCQUFrQkEsR0FBR0EsS0FBS0EsQ0FBQ0E7QUFFL0JBLDRCQUFPQSxtQkFBbUJBLENBQUNBLFVBQUNBLGFBQXFCQSxFQUFBQTtBQUMvQ0EsWUFBTUEsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7QUFDN0NBLFlBQU1BLEdBQUdBLEdBQVFBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3ZFQSxhQUFLQSxJQUFNQSxFQUFFQSxJQUFJQSxVQUFVQSxFQUFFQTtBQUMzQkEsZ0JBQUlBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBLEVBQUVB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LG9DQUFPQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtTQUN6Q0EsQ0FBQ0EsQ0FBQ0E7S0FDSkE7Q0FFRkQ7O0lBRUQsY0FBQTtBQUlFRSxhQUpGLGNBQUEsQ0FJY0EsT0FBc0JBLEVBQUFBOzhCQUpwQyxjQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUl6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7S0FDeEJBOztpQkFOSCxjQUFBOztlQU9PRCxlQUFDQSxPQUFxQkEsRUFBQUE7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUNuQkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDbENBO1NBQ0ZBOzs7V0FaSCxjQUFBOzs7cUJBQUEsY0FBQSIsImZpbGUiOiJldmVudHMvbGlzdGVuZXJzL0NvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBIYW5kbGVzQ29uZmlnIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbmZpZyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NvcmUvY2xpZW50JztcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29yZS9jbGFzc2VzL0NvbmZpZyc7XG5pbXBvcnQgQ29uZmlnVmFyIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9Db25maWdWYXInO1xuaW1wb3J0IHRhZ3MgZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMvdGFncyc7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZygpO1xuICBjb25zdCBxdWV1ZTogYW55W10gPSBbXTtcbiAgY29uc3QgdGFnc0FycmF5OiBhbnlbXSA9IE9iamVjdC5rZXlzKHRhZ3MpLmZpbHRlcigoaWQ6IGFueSkgPT4ge1xuICAgIHJldHVybiAhaXNOYU4oaWQpO1xuICB9KTtcbiAgbGV0IHJlbG9hZGluZ0FsbENvbmZpZyA9IGZhbHNlO1xuXG4gIGNsaWVudC5PblJlY2VpdmVDb25maWdWYXJzKChyYXdDb25maWdWYXJzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb25maWdWYXJzID0gSlNPTi5wYXJzZShyYXdDb25maWdWYXJzKTtcbiAgICBjb25zdCB0YWc6IGFueSA9IHF1ZXVlLmxlbmd0aCA+IDAgPyBwYXJzZUludChxdWV1ZS5zaGlmdCgpLCAxMCkgOiBudWxsO1xuICAgIGZvciAoY29uc3QgaWQgaW4gY29uZmlnVmFycykge1xuICAgICAgbGV0IHZhbHVlID0gY29uZmlnVmFyc1tpZF07XG4gICAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGNvbmZpZy5nZXRWYXJJbmRleChpZCk7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ1ZhciA9IG5ldyBDb25maWdWYXIoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy52YXJzLnB1c2goY29uZmlnVmFyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gY29uZmlnLmdldFZhckluZGV4KGlkKTtcbiAgICAgICAgY29uZmlnLnZhcnNbaW5kZXhdLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlbG9hZGluZ0FsbENvbmZpZyA9IGZhbHNlO1xuICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBjb25maWcpO1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5PblJlY2VpdmVDb25maWdWYXIoKGNvbmZpZ1ZhcnM6IGFueSkgPT4ge1xuICAgIGZvciAoY29uc3QgaWQgaW4gY29uZmlnVmFycykge1xuICAgICAgbGV0IHZhbHVlOiBhbnkgPSBjb25maWdWYXJzW2lkXTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gY29uZmlnLmdldFZhckluZGV4KGlkKTtcbiAgICAgIGNvbmZpZy52YXJzW2luZGV4XS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIGNvbmZpZyk7XG4gIH0pO1xuICBjbGllbnQuT25Db25maWdWYXJDaGFuZ2VkKChpc0NoYW5nZVN1Y2Nlc3NmdWw6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIWlzQ2hhbmdlU3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgY2hhbmdlIENvbmZpZ1ZhciB2YWx1ZScpO1xuICAgIH1cbiAgICBpZiAoIXJlbG9hZGluZ0FsbENvbmZpZykge1xuICAgICAgcmVsb2FkQWxsQ29uZmlnKCk7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lk9uU2F2ZWRDb25maWdDaGFuZ2VzKCgpID0+IHtcbiAgICByZWxvYWRBbGxDb25maWcoKTtcbiAgfSk7XG5cbiAgcmVsb2FkQWxsQ29uZmlnKCk7XG5cbiAgZnVuY3Rpb24gcmVsb2FkQWxsQ29uZmlnKCkge1xuICAgIHJlbG9hZGluZ0FsbENvbmZpZyA9IHRydWU7XG4gICAgdGFnc0FycmF5LmZvckVhY2goKHRhZzogYW55KSA9PiB7XG4gICAgICBxdWV1ZS5wdXNoKHRhZyk7XG4gICAgICBjbGllbnQuR2V0Q29uZmlnVmFycyhwYXJzZUludCh0YWcsIDEwKSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWdMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0eXBlOiBzdHJpbmc7XG4gIGhhbmRsZXM6IEhhbmRsZXNDb25maWc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNDb25maWcpIHtcbiAgICB0aGlzLmhhbmRsZXMgPSBoYW5kbGVzO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLmhhbmRsZXMudG9waWMpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
