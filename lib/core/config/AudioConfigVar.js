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

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ConfigVar2 = require('./ConfigVar');

var _ConfigVar3 = _interopRequireDefault(_ConfigVar2);

var AudioConfigVar = (function (_ConfigVar) {
    _inherits(AudioConfigVar, _ConfigVar);

    function AudioConfigVar() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, AudioConfigVar);

        _get(Object.getPrototypeOf(AudioConfigVar.prototype), 'constructor', this).call(this, config);
    }

    _createClass(AudioConfigVar, [{
        key: 'create',
        value: function create() {
            var c = new AudioConfigVar();
            return c;
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(v) {
            this._value = v;
        }
    }]);

    return AudioConfigVar;
})(_ConfigVar3['default']);

exports['default'] = AudioConfigVar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL0F1ZGlvQ29uZmlnVmFyLnRzIl0sIm5hbWVzIjpbIkF1ZGlvQ29uZmlnVmFyIiwiQXVkaW9Db25maWdWYXIuY29uc3RydWN0b3IiLCJBdWRpb0NvbmZpZ1Zhci5jcmVhdGUiLCJBdWRpb0NvbmZpZ1Zhci52YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1zQixhQUFhOzs7O0lBSW5DLGNBQUE7Y0FBQSxjQUFBOztBQVdFQSxhQVhGLGNBQUEsR0FXd0RBO1lBQTFDQSxNQUFNQSx5REFBa0NBLEVBQUVBOzs4QkFYeEQsY0FBQTs7QUFZSUMsbUNBWkosY0FBQSw2Q0FZcUJBLE1BQU1BLEVBQUVBO0tBQzFCQTs7aUJBYkgsY0FBQTs7ZUFlZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQTtBQUM3QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7YUFmUUYsZUFBQUE7QUFDUEcsbUJBQU9BLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1NBQ3BCQTthQUVRSCxhQUFFQSxDQUFlQSxFQUFBQTtBQUN4QkcsZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO1NBQ2pCQTs7O1dBVEgsY0FBQTs7O3FCQXFCZSxjQUFjIiwiZmlsZSI6ImNvcmUvY29uZmlnL0F1ZGlvQ29uZmlnVmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBDb25maWdWYXIgZnJvbSAnLi9Db25maWdWYXInO1xuaW1wb3J0IGNvbmZpZ0NhdGVnb3J5IGZyb20gJy4vY29uZmlnQ2F0ZWdvcnknO1xuaW1wb3J0IHtBdWRpb1NldHRpbmd9IGZyb20gJy4vQXVkaW9TZXR0aW5nJztcblxuY2xhc3MgQXVkaW9Db25maWdWYXIgZXh0ZW5kcyBDb25maWdWYXIgIHtcbiAgcHVibGljIF92YWx1ZTogQXVkaW9TZXR0aW5nO1xuICBcbiAgZ2V0IHZhbHVlICgpOkF1ZGlvU2V0dGluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIFxuICBzZXQgdmFsdWUgKHY6IEF1ZGlvU2V0dGluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoY29uZmlnOkF1ZGlvQ29uZmlnVmFyID0gPEF1ZGlvQ29uZmlnVmFyPnt9KSB7XG4gICAgc3VwZXIoPENvbmZpZ1Zhcj5jb25maWcpO1xuICB9XG4gIFxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIGxldCBjID0gbmV3IEF1ZGlvQ29uZmlnVmFyKCk7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db25maWdWYXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
