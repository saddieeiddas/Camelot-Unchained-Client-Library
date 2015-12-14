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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Jbmp1cnkudHMiXSwibmFtZXMiOlsiSW5qdXJ5IiwiSW5qdXJ5LmNvbnN0cnVjdG9yIiwiSW5qdXJ5LnJlZnJlc2giLCJJbmp1cnkuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFNQSxNQUFBO0FBT0VBLGFBUEYsTUFBQSxHQU9pQ0E7WUFBbkJBLE1BQU1BLHlEQUFXQSxFQUFFQTs7OEJBUGpDLE1BQUE7O0FBUUlDLFlBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0tBQ3RCQTs7aUJBVEgsTUFBQTs7ZUFXU0QsbUJBQW9CQTtnQkFBbkJBLE1BQU1BLHlEQUFXQSxFQUFFQTs7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM3QkEsZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ2pDQSxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLGdCQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNqQ0EsZ0JBQUlBLENBQUNBLEtBQUtBLEdBQUlBLElBQUlBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLEFBQUNBLENBQUNBO1NBQ3BDQTs7O2VBRVlGLGtCQUFBQTtBQUNYRyxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7QUFDckJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBdEJILE1BQUE7OztxQkF5QmUsTUFBTSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvSW5qdXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmNsYXNzIEluanVyeSB7XG4gIHBhcnQ6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICB3b3VuZHM6IG51bWJlcjtcbiAgZW1wdHk6IGJvb2xlYW47IC8vIHBsYWNlaG9sZGVyXG5cbiAgY29uc3RydWN0b3IoaW5qdXJ5ID0gPEluanVyeT57fSkge1xuICAgIHRoaXMucmVmcmVzaChpbmp1cnkpO1xuICB9XG5cbiAgcmVmcmVzaChpbmp1cnkgPSA8SW5qdXJ5Pnt9KSB7XG4gICAgdGhpcy5wYXJ0ID0gaW5qdXJ5LnBhcnQgfHwgMDtcbiAgICB0aGlzLmhlYWx0aCA9IGluanVyeS5oZWFsdGggfHwgMDtcbiAgICB0aGlzLm1heEhlYWx0aCA9IGluanVyeS5tYXhIZWFsdGggfHwgMDtcbiAgICB0aGlzLndvdW5kcyA9IGluanVyeS53b3VuZHMgfHwgMDtcbiAgICB0aGlzLmVtcHR5ID0gKHRoaXMubWF4SGVhbHRoID09IDApO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBJbmp1cnkoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmp1cnk7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
