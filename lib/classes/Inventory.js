"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = (function () {
    function Inventory() {
        var inventory = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Inventory);

        this.items = inventory.items || [];
    }

    _createClass(Inventory, null, [{
        key: "create",
        value: function create() {
            var a = new Inventory();
            return a;
        }
    }]);

    return Inventory;
})();

exports["default"] = Inventory;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvSW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbIkludmVudG9yeSIsIkludmVudG9yeS5jb25zdHJ1Y3RvciIsIkludmVudG9yeS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQSxTQUFBO0FBR0VBLGFBSEYsU0FBQSxHQUd1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBSHZDLFNBQUE7O0FBSUlDLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQWFBLEVBQUVBLENBQUNBO0tBQzdDQTs7aUJBTEgsU0FBQTs7ZUFPZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FWSCxTQUFBOzs7cUJBY2UsU0FBUyIsImZpbGUiOiJ0cy9jbGFzc2VzL0ludmVudG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuY2xhc3MgSW52ZW50b3J5ICB7XG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgY29uc3RydWN0b3IoaW52ZW50b3J5ID0gPEludmVudG9yeT57fSkge1xuICAgIHRoaXMuaXRlbXMgPSBpbnZlbnRvcnkuaXRlbXMgfHwgIDxJdGVtW10+W107XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEludmVudG9yeSgpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
