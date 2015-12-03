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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvUG9wdWxhdGlvbi50cyJdLCJuYW1lcyI6WyJQb3B1bGF0aW9uIiwiUG9wdWxhdGlvbi5jb25zdHJ1Y3RvciIsIlBvcHVsYXRpb24uY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFLQSxVQUFBO0FBT0VBLGFBUEYsVUFBQSxHQU95Q0E7WUFBM0JBLFVBQVVBLHlEQUFlQSxFQUFFQTs7OEJBUHpDLFVBQUE7OztBQVVJQyxZQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxVQUFVQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHL0JBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzdDQSxZQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxVQUFVQSxDQUFDQSxjQUFjQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNyREEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBVUEsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FDeENBOztpQkFoQkgsVUFBQTs7ZUFrQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsVUFBVUEsRUFBRUEsQ0FBQ0E7QUFDekJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBckJILFVBQUE7OztxQkF5QmUsVUFBVSIsImZpbGUiOiJ0cy9jbGFzc2VzL1BvcHVsYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmNsYXNzIFBvcHVsYXRpb24ge1xuXG4gIGFydGh1cmlhbnM6IG51bWJlcjtcbiAgdHVhdGhhRGVEYW5hbm46IG51bWJlcjtcbiAgdmlraW5nczogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwb3B1bGF0aW9uID0gPFBvcHVsYXRpb24+e30pIHtcblxuICAgIC8vIFBvcHVsYXRpb24gbGltaXRcbiAgICB0aGlzLm1heCA9IHBvcHVsYXRpb24ubWF4IHx8IDA7XG5cbiAgICAvLyBDdXJyZW50IFBvcHVsYXRpb24gYnkgcmVhbG1cbiAgICB0aGlzLmFydGh1cmlhbnMgPSBwb3B1bGF0aW9uLmFydGh1cmlhbnMgfHwgMDtcbiAgICB0aGlzLnR1YXRoYURlRGFuYW5uID0gcG9wdWxhdGlvbi50dWF0aGFEZURhbmFubiB8fCAwO1xuICAgIHRoaXMudmlraW5ncyA9IHBvcHVsYXRpb24udmlraW5ncyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBQb3B1bGF0aW9uKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
