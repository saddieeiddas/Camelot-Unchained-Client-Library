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

var ConfigVar = (function () {
    function ConfigVar() {
        var configVar = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ConfigVar);

        this.id = configVar.id;
        this.tag = configVar.tag;
        this.value = configVar.value;
    }

    _createClass(ConfigVar, null, [{
        key: "create",
        value: function create() {
            var a = new ConfigVar();
            return a;
        }
    }]);

    return ConfigVar;
})();

exports["default"] = ConfigVar;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Db25maWdWYXIudHMiXSwibmFtZXMiOlsiQ29uZmlnVmFyIiwiQ29uZmlnVmFyLmNvbnN0cnVjdG9yIiwiQ29uZmlnVmFyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBUUEsU0FBQTtBQUtFQSxhQUxGLFNBQUEsR0FLdUNBO1lBQXpCQSxTQUFTQSx5REFBY0EsRUFBRUE7OzhCQUx2QyxTQUFBOztBQU1JQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQTtBQUN2QkEsWUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7QUFDekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBO0tBQzlCQTs7aUJBVEgsU0FBQTs7ZUFXZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FkSCxTQUFBOzs7cUJBaUJlLFNBQVMiLCJmaWxlIjoiY29yZS9jbGFzc2VzL0NvbmZpZ1Zhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgdGFncyBmcm9tICcuLi9jb25zdGFudHMvdGFncyc7XG5cbmNsYXNzIENvbmZpZ1ZhciB7XG4gIGlkOiBzdHJpbmc7XG4gIHRhZzogdGFncztcbiAgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdWYXIgPSA8Q29uZmlnVmFyPnt9KSB7XG4gICAgdGhpcy5pZCA9IGNvbmZpZ1Zhci5pZDtcbiAgICB0aGlzLnRhZyA9IGNvbmZpZ1Zhci50YWc7XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZ1Zhci52YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ29uZmlnVmFyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnVmFyO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
