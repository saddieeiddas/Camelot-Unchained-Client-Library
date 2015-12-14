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

var Population = (function () {
    function Population() {
        var population = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Population);

        // Population limit
        this.max = population.max || 0;
        // Current Population by realm
        this.arthurians = population.arthurians || 0;
        this.tuathaDeDanann = population.tuathaDeDanann || 0;
        this.vikings = population.vikings || 0;
    }

    _createClass(Population, null, [{
        key: "create",
        value: function create() {
            var a = new Population();
            return a;
        }
    }]);

    return Population;
})();

exports["default"] = Population;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Qb3B1bGF0aW9uLnRzIl0sIm5hbWVzIjpbIlBvcHVsYXRpb24iLCJQb3B1bGF0aW9uLmNvbnN0cnVjdG9yIiwiUG9wdWxhdGlvbi5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUtBLFVBQUE7QUFPRUEsYUFQRixVQUFBLEdBT3lDQTtZQUEzQkEsVUFBVUEseURBQWVBLEVBQUVBOzs4QkFQekMsVUFBQTs7O0FBVUlDLFlBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBOztBQUcvQkEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDN0NBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFVBQVVBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3JEQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFVQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUN4Q0E7O2lCQWhCSCxVQUFBOztlQWtCZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtBQUN6QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FyQkgsVUFBQTs7O3FCQXlCZSxVQUFVIiwiZmlsZSI6ImNvcmUvY2xhc3Nlcy9Qb3B1bGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5jbGFzcyBQb3B1bGF0aW9uIHtcblxuICBhcnRodXJpYW5zOiBudW1iZXI7XG4gIHR1YXRoYURlRGFuYW5uOiBudW1iZXI7XG4gIHZpa2luZ3M6IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocG9wdWxhdGlvbiA9IDxQb3B1bGF0aW9uPnt9KSB7XG5cbiAgICAvLyBQb3B1bGF0aW9uIGxpbWl0XG4gICAgdGhpcy5tYXggPSBwb3B1bGF0aW9uLm1heCB8fCAwO1xuXG4gICAgLy8gQ3VycmVudCBQb3B1bGF0aW9uIGJ5IHJlYWxtXG4gICAgdGhpcy5hcnRodXJpYW5zID0gcG9wdWxhdGlvbi5hcnRodXJpYW5zIHx8IDA7XG4gICAgdGhpcy50dWF0aGFEZURhbmFubiA9IHBvcHVsYXRpb24udHVhdGhhRGVEYW5hbm4gfHwgMDtcbiAgICB0aGlzLnZpa2luZ3MgPSBwb3B1bGF0aW9uLnZpa2luZ3MgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgUG9wdWxhdGlvbigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
