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

var KeyBindConfigVar = (function (_ConfigVar) {
    _inherits(KeyBindConfigVar, _ConfigVar);

    function KeyBindConfigVar() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, KeyBindConfigVar);

        _get(Object.getPrototypeOf(KeyBindConfigVar.prototype), 'constructor', this).call(this, config);
    }

    _createClass(KeyBindConfigVar, [{
        key: 'create',
        value: function create() {
            var c = new KeyBindConfigVar();
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

    return KeyBindConfigVar;
})(_ConfigVar3['default']);

exports['default'] = KeyBindConfigVar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL0tleUJpbmRDb25maWdWYXIudHMiXSwibmFtZXMiOlsiS2V5QmluZENvbmZpZ1ZhciIsIktleUJpbmRDb25maWdWYXIuY29uc3RydWN0b3IiLCJLZXlCaW5kQ29uZmlnVmFyLmNyZWF0ZSIsIktleUJpbmRDb25maWdWYXIudmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNc0IsYUFBYTs7OztJQUluQyxnQkFBQTtjQUFBLGdCQUFBOztBQVdFQSxhQVhGLGdCQUFBLEdBVzREQTtZQUE5Q0EsTUFBTUEseURBQXNDQSxFQUFFQTs7OEJBWDVELGdCQUFBOztBQVlJQyxtQ0FaSixnQkFBQSw2Q0FZcUJBLE1BQU1BLEVBQUVBO0tBQzFCQTs7aUJBYkgsZ0JBQUE7O2VBZWVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsZ0JBQWdCQSxFQUFFQSxDQUFDQTtBQUMvQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7YUFmUUYsZUFBQUE7QUFDUEcsbUJBQU9BLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1NBQ3BCQTthQUVRSCxhQUFFQSxDQUFVQSxFQUFBQTtBQUNuQkcsZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO1NBQ2pCQTs7O1dBVEgsZ0JBQUE7OztxQkFxQmUsZ0JBQWdCIiwiZmlsZSI6ImNvcmUvY29uZmlnL0tleUJpbmRDb25maWdWYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IENvbmZpZ1ZhciBmcm9tICcuL0NvbmZpZ1Zhcic7XG5pbXBvcnQgY29uZmlnQ2F0ZWdvcnkgZnJvbSAnLi9jb25maWdDYXRlZ29yeSc7XG5pbXBvcnQgS2V5QmluZCBmcm9tICcuL0tleUJpbmQnO1xuXG5jbGFzcyBLZXlCaW5kQ29uZmlnVmFyIGV4dGVuZHMgQ29uZmlnVmFyICB7XG4gIHB1YmxpYyBfdmFsdWU6IEtleUJpbmQ7XG4gIFxuICBnZXQgdmFsdWUgKCk6S2V5QmluZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIFxuICBzZXQgdmFsdWUgKHY6IEtleUJpbmQpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzpLZXlCaW5kQ29uZmlnVmFyID0gPEtleUJpbmRDb25maWdWYXI+e30pIHtcbiAgICBzdXBlcig8Q29uZmlnVmFyPmNvbmZpZyk7XG4gIH1cbiAgXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGMgPSBuZXcgS2V5QmluZENvbmZpZ1ZhcigpO1xuICAgIHJldHVybiBjO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleUJpbmRDb25maWdWYXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
