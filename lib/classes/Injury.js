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

var Injury = (function () {
    function Injury() {
        var injury = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Injury);

        this.refresh(injury);
    }

    _createClass(Injury, [{
        key: "refresh",
        value: function refresh() {
            var injury = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            this.part = injury.part || 0;
            this.health = injury.health || 25;
            this.maxHealth = injury.maxHealth || 25;
            this.wounds = injury.wounds || 0;
        }
    }], [{
        key: "create",
        value: function create() {
            var a = new Injury();
            return a;
        }
    }]);

    return Injury;
})();

exports["default"] = Injury;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvSW5qdXJ5LnRzIl0sIm5hbWVzIjpbIkluanVyeSIsIkluanVyeS5jb25zdHJ1Y3RvciIsIkluanVyeS5yZWZyZXNoIiwiSW5qdXJ5LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBTUEsTUFBQTtBQU1FQSxhQU5GLE1BQUEsR0FNaUNBO1lBQW5CQSxNQUFNQSx5REFBV0EsRUFBRUE7OzhCQU5qQyxNQUFBOztBQU9JQyxZQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtLQUN0QkE7O2lCQVJILE1BQUE7O2VBVVNELG1CQUFvQkE7Z0JBQW5CQSxNQUFNQSx5REFBV0EsRUFBRUE7O0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDN0JBLGdCQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNsQ0EsZ0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3hDQSxnQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7U0FDbENBOzs7ZUFFWUYsa0JBQUFBO0FBQ1hHLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtBQUNyQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FwQkgsTUFBQTs7O3FCQXVCZSxNQUFNIiwiZmlsZSI6InRzL2NsYXNzZXMvSW5qdXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmNsYXNzIEluanVyeSB7XG4gIHBhcnQ6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICB3b3VuZHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihpbmp1cnkgPSA8SW5qdXJ5Pnt9KSB7XG4gICAgdGhpcy5yZWZyZXNoKGluanVyeSk7XG4gIH1cblxuICByZWZyZXNoKGluanVyeSA9IDxJbmp1cnk+e30pIHtcbiAgICB0aGlzLnBhcnQgPSBpbmp1cnkucGFydCB8fCAwO1xuICAgIHRoaXMuaGVhbHRoID0gaW5qdXJ5LmhlYWx0aCB8fCAyNTtcbiAgICB0aGlzLm1heEhlYWx0aCA9IGluanVyeS5tYXhIZWFsdGggfHwgMjU7XG4gICAgdGhpcy53b3VuZHMgPSBpbmp1cnkud291bmRzIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEluanVyeSgpO1xuICAgIHJldHVybiBhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluanVyeTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
