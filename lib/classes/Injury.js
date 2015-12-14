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
            this.health = injury.health || 0;
            this.maxHealth = injury.maxHealth || 0;
            this.wounds = injury.wounds || 0;
            this.empty = this.maxHealth == 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvSW5qdXJ5LnRzIl0sIm5hbWVzIjpbIkluanVyeSIsIkluanVyeS5jb25zdHJ1Y3RvciIsIkluanVyeS5yZWZyZXNoIiwiSW5qdXJ5LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBTUEsTUFBQTtBQU9FQSxhQVBGLE1BQUEsR0FPaUNBO1lBQW5CQSxNQUFNQSx5REFBV0EsRUFBRUE7OzhCQVBqQyxNQUFBOztBQVFJQyxZQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtLQUN0QkE7O2lCQVRILE1BQUE7O2VBV1NELG1CQUFvQkE7Z0JBQW5CQSxNQUFNQSx5REFBV0EsRUFBRUE7O0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDN0JBLGdCQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNqQ0EsZ0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZDQSxnQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDakNBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxBQUFDQSxDQUFDQTtTQUNwQ0E7OztlQUVZRixrQkFBQUE7QUFDWEcsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0FBQ3JCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXRCSCxNQUFBOzs7cUJBeUJlLE1BQU0iLCJmaWxlIjoidHMvY2xhc3Nlcy9Jbmp1cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuY2xhc3MgSW5qdXJ5IHtcbiAgcGFydDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHdvdW5kczogbnVtYmVyO1xuICBlbXB0eTogYm9vbGVhbjsgLy8gcGxhY2Vob2xkZXJcblxuICBjb25zdHJ1Y3Rvcihpbmp1cnkgPSA8SW5qdXJ5Pnt9KSB7XG4gICAgdGhpcy5yZWZyZXNoKGluanVyeSk7XG4gIH1cblxuICByZWZyZXNoKGluanVyeSA9IDxJbmp1cnk+e30pIHtcbiAgICB0aGlzLnBhcnQgPSBpbmp1cnkucGFydCB8fCAwO1xuICAgIHRoaXMuaGVhbHRoID0gaW5qdXJ5LmhlYWx0aCB8fCAwO1xuICAgIHRoaXMubWF4SGVhbHRoID0gaW5qdXJ5Lm1heEhlYWx0aCB8fCAwO1xuICAgIHRoaXMud291bmRzID0gaW5qdXJ5LndvdW5kcyB8fCAwO1xuICAgIHRoaXMuZW1wdHkgPSAodGhpcy5tYXhIZWFsdGggPT0gMCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEluanVyeSgpO1xuICAgIHJldHVybiBhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluanVyeTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
