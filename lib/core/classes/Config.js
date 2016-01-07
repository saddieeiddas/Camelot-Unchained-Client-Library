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

var _constantsTags = require('../constants/tags');

var _constantsTags2 = _interopRequireDefault(_constantsTags);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

var Config = (function () {
    function Config() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Config);

        this.vars = config.vars || [];
        this.tagsArray = Object.keys(_constantsTags2['default']).filter(function (id) {
            return !isNaN(id);
        });
    }

    _createClass(Config, [{
        key: 'getVarsByTag',
        value: function getVarsByTag(tag) {
            return this.vars.filter(function (configVar) {
                return configVar.tag == tag;
            });
        }
    }, {
        key: 'getVar',
        value: function getVar(id) {
            var configVars = this.vars.filter(function (configVar) {
                return configVar.id == id;
            });
            return configVars.length > 0 ? configVars[0] : null;
        }
    }, {
        key: 'getVarIndex',
        value: function getVarIndex(id) {
            var varIndex = -1;
            this.vars.forEach(function (configVar, index) {
                if (configVar.id == id) {
                    varIndex = index;
                }
            });
            return varIndex;
        }
    }, {
        key: 'updateVar',
        value: function updateVar(configVar) {
            var value = configVar.value;
            if (value === true) {
                value = 'true';
            } else if (value === false) {
                value = 'false';
            }
            _client2['default'].ChangeConfigVar(configVar.id, value);
        }
    }, {
        key: 'updateVars',
        value: function updateVars(configVars) {
            var _this = this;

            configVars.forEach(function (configVar) {
                _this.updateVar(configVar);
            });
        }
    }, {
        key: 'saveChanges',
        value: function saveChanges() {
            _client2['default'].SaveConfigChanges();
        }
    }, {
        key: 'cancelAllChangesByTag',
        value: function cancelAllChangesByTag(tag) {
            _client2['default'].CancelAllConfigChanges(tag);
        }
    }, {
        key: 'cancelAllChanges',
        value: function cancelAllChanges() {
            var _this2 = this;

            this.tagsArray.forEach(function (tag) {
                _this2.cancelAllChangesByTag(parseInt(tag, 10));
            });
        }
    }, {
        key: 'cancelChanges',
        value: function cancelChanges(configVar) {
            _client2['default'].CancelChangeConfig(configVar.id);
        }
    }, {
        key: 'restoreConfigDefaultsByTag',
        value: function restoreConfigDefaultsByTag(tag) {
            _client2['default'].RestoreConfigDefaults(tag);
        }
    }, {
        key: 'restoreAllConfigDefaults',
        value: function restoreAllConfigDefaults() {
            var _this3 = this;

            this.tagsArray.forEach(function (tag) {
                _this3.restoreConfigDefaultsByTag(parseInt(tag, 10));
            });
        }
    }], [{
        key: 'create',
        value: function create() {
            var a = new Config();
            return a;
        }
    }]);

    return Config;
})();

exports['default'] = Config;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Db25maWcudHMiXSwibmFtZXMiOlsiQ29uZmlnIiwiQ29uZmlnLmNvbnN0cnVjdG9yIiwiQ29uZmlnLmdldFZhcnNCeVRhZyIsIkNvbmZpZy5nZXRWYXIiLCJDb25maWcuZ2V0VmFySW5kZXgiLCJDb25maWcudXBkYXRlVmFyIiwiQ29uZmlnLnVwZGF0ZVZhcnMiLCJDb25maWcuc2F2ZUNoYW5nZXMiLCJDb25maWcuY2FuY2VsQWxsQ2hhbmdlc0J5VGFnIiwiQ29uZmlnLmNhbmNlbEFsbENoYW5nZXMiLCJDb25maWcuY2FuY2VsQ2hhbmdlcyIsIkNvbmZpZy5yZXN0b3JlQ29uZmlnRGVmYXVsdHNCeVRhZyIsIkNvbmZpZy5yZXN0b3JlQWxsQ29uZmlnRGVmYXVsdHMiLCJDb25maWcuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFNaUIsbUJBQW1COzs7O3NCQUVqQixXQUFXOzs7O0lBRTlCLE1BQUE7QUFJRUEsYUFKRixNQUFBLEdBSWlDQTtZQUFuQkEsTUFBTUEseURBQVdBLEVBQUVBOzs4QkFKakMsTUFBQTs7QUFLSUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDOUJBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLDRCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFPQSxFQUFBQTtBQUNoREEsbUJBQU9BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1NBQ25CQSxDQUFDQSxDQUFDQTtLQUNKQTs7aUJBVEgsTUFBQTs7ZUFXY0Qsc0JBQUNBLEdBQVNBLEVBQUFBO0FBQ3BCRSxtQkFBT0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsU0FBb0JBLEVBQUFBO0FBQzNDQSx1QkFBT0EsU0FBU0EsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0E7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QUNWQTs7O1dBakZILE1BQUE7OztxQkFvRmUsTUFBTSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCB0YWdzIGZyb20gJy4uL2NvbnN0YW50cy90YWdzJztcbmltcG9ydCBDb25maWdWYXIgZnJvbSAnLi9Db25maWdWYXInO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuXG5jbGFzcyBDb25maWcgIHtcbiAgdmFyczogQ29uZmlnVmFyW107XG4gIHByaXZhdGUgdGFnc0FycmF5OiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcgPSA8Q29uZmlnPnt9KSB7XG4gICAgdGhpcy52YXJzID0gY29uZmlnLnZhcnMgfHwgW107XG4gICAgdGhpcy50YWdzQXJyYXkgPSBPYmplY3Qua2V5cyh0YWdzKS5maWx0ZXIoKGlkOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAhaXNOYU4oaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFyc0J5VGFnKHRhZzogdGFncykge1xuICAgIHJldHVybiB0aGlzLnZhcnMuZmlsdGVyKChjb25maWdWYXI6IENvbmZpZ1ZhcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbmZpZ1Zhci50YWcgPT0gdGFnO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFyKGlkOiBzdHJpbmcpOiBDb25maWdWYXIge1xuICAgIGNvbnN0IGNvbmZpZ1ZhcnMgPSB0aGlzLnZhcnMuZmlsdGVyKChjb25maWdWYXI6IENvbmZpZ1ZhcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbmZpZ1Zhci5pZCA9PSBpZDtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlnVmFycy5sZW5ndGggPiAwID8gY29uZmlnVmFyc1swXSA6IG51bGw7XG4gIH1cblxuICBnZXRWYXJJbmRleChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgdmFySW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHRoaXMudmFycy5mb3JFYWNoKChjb25maWdWYXI6IENvbmZpZ1ZhciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGNvbmZpZ1Zhci5pZCA9PSBpZCkge1xuICAgICAgICB2YXJJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YXJJbmRleDtcbiAgfVxuXG4gIHVwZGF0ZVZhcihjb25maWdWYXI6IENvbmZpZ1Zhcik6IHZvaWQge1xuICAgIGxldCB2YWx1ZTogYW55ID0gY29uZmlnVmFyLnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdmFsdWUgPSAndHJ1ZSc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHZhbHVlID0gJ2ZhbHNlJztcbiAgICB9XG4gICAgY2xpZW50LkNoYW5nZUNvbmZpZ1Zhcihjb25maWdWYXIuaWQsIHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVZhcnMoY29uZmlnVmFyczogQ29uZmlnVmFyW10pOiB2b2lkIHtcbiAgICBjb25maWdWYXJzLmZvckVhY2goKGNvbmZpZ1ZhcjogQ29uZmlnVmFyKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVZhcihjb25maWdWYXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc2F2ZUNoYW5nZXMoKTogdm9pZCB7XG4gICAgY2xpZW50LlNhdmVDb25maWdDaGFuZ2VzKCk7XG4gIH1cblxuICBjYW5jZWxBbGxDaGFuZ2VzQnlUYWcodGFnOiB0YWdzKTogdm9pZCB7XG4gICAgY2xpZW50LkNhbmNlbEFsbENvbmZpZ0NoYW5nZXModGFnKTtcbiAgfVxuXG4gIGNhbmNlbEFsbENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy50YWdzQXJyYXkuZm9yRWFjaCgodGFnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY2FuY2VsQWxsQ2hhbmdlc0J5VGFnKHBhcnNlSW50KHRhZywgMTApKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbENoYW5nZXMoY29uZmlnVmFyOiBDb25maWdWYXIpOiB2b2lkIHtcbiAgICBjbGllbnQuQ2FuY2VsQ2hhbmdlQ29uZmlnKGNvbmZpZ1Zhci5pZCk7XG4gIH1cblxuICByZXN0b3JlQ29uZmlnRGVmYXVsdHNCeVRhZyh0YWc6IHRhZ3MpOiB2b2lkIHtcbiAgICBjbGllbnQuUmVzdG9yZUNvbmZpZ0RlZmF1bHRzKHRhZyk7XG4gIH1cblxuICByZXN0b3JlQWxsQ29uZmlnRGVmYXVsdHMoKTogdm9pZCB7XG4gICAgdGhpcy50YWdzQXJyYXkuZm9yRWFjaCgodGFnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVzdG9yZUNvbmZpZ0RlZmF1bHRzQnlUYWcocGFyc2VJbnQodGFnLCAxMCkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDb25maWcoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
