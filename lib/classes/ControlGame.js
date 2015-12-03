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

;

var ControlGame = (function () {
    function ControlGame() {
        var controlGame = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ControlGame);

        // Game State
        this.gameState = controlGame.gameState || 0;
        // Game Score
        this.arthurianScore = controlGame.arthurianScore || 0;
        this.tuathaDeDanannScore = controlGame.tuathaDeDanannScore || 0;
        this.vikingScore = controlGame.vikingScore || 0;
        // Time remaining
        this.timeLeft = controlGame.timeLeft || 0;
        // Control Points (if included)
        this.controlPoints = controlGame.controlPoints || [];
    }

    _createClass(ControlGame, null, [{
        key: "create",
        value: function create() {
            var a = new ControlGame();
            return a;
        }
    }]);

    return ControlGame;
})();

exports["default"] = ControlGame;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsiQ29udHJvbEdhbWUiLCJDb250cm9sR2FtZS5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUMsQ0FBQzs7SUFFRixXQUFBO0FBU0VBLGFBVEYsV0FBQSxHQVMyQ0E7WUFBN0JBLFdBQVdBLHlEQUFnQkEsRUFBRUE7OzhCQVQzQyxXQUFBOzs7QUFZSUMsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsV0FBV0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBRzVDQSxZQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxXQUFXQSxDQUFDQSxjQUFjQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0REEsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxXQUFXQSxDQUFDQSxtQkFBbUJBLElBQUlBLENBQUNBLENBQUNBO0FBQ2hFQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHaERBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFdBQVdBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBOztBQUcxQ0EsWUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsV0FBV0EsQ0FBQ0EsYUFBYUEsSUFBb0JBLEVBQUVBLENBQUNBO0tBQ3RFQTs7aUJBeEJILFdBQUE7O2VBMEJlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFdBQVdBLEVBQUVBLENBQUNBO0FBQzFCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTdCSCxXQUFBOzs7cUJBaUNlLFdBQVciLCJmaWxlIjoidHMvY2xhc3Nlcy9Db250cm9sR2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xQb2ludCB7XG4gIGZhY3Rpb246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgc2l6ZTogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn07XG5cbmNsYXNzIENvbnRyb2xHYW1lIHtcblxuICBhcnRodXJpYW5TY29yZTogbnVtYmVyO1xuICBjb250cm9sUG9pbnRzOiBDb250cm9sUG9pbnRbXTtcbiAgZ2FtZVN0YXRlOiBudW1iZXI7XG4gIHRpbWVMZWZ0OiBudW1iZXI7XG4gIHR1YXRoYURlRGFuYW5uU2NvcmU6IG51bWJlcjtcbiAgdmlraW5nU2NvcmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sR2FtZSA9IDxDb250cm9sR2FtZT57fSkge1xuXG4gICAgLy8gR2FtZSBTdGF0ZVxuICAgIHRoaXMuZ2FtZVN0YXRlID0gY29udHJvbEdhbWUuZ2FtZVN0YXRlIHx8IDA7XG5cbiAgICAvLyBHYW1lIFNjb3JlXG4gICAgdGhpcy5hcnRodXJpYW5TY29yZSA9IGNvbnRyb2xHYW1lLmFydGh1cmlhblNjb3JlIHx8IDA7XG4gICAgdGhpcy50dWF0aGFEZURhbmFublNjb3JlID0gY29udHJvbEdhbWUudHVhdGhhRGVEYW5hbm5TY29yZSB8fCAwO1xuICAgIHRoaXMudmlraW5nU2NvcmUgPSBjb250cm9sR2FtZS52aWtpbmdTY29yZSB8fCAwO1xuXG4gICAgLy8gVGltZSByZW1haW5pbmdcbiAgICB0aGlzLnRpbWVMZWZ0ID0gY29udHJvbEdhbWUudGltZUxlZnQgfHwgMDtcblxuICAgIC8vIENvbnRyb2wgUG9pbnRzIChpZiBpbmNsdWRlZClcbiAgICB0aGlzLmNvbnRyb2xQb2ludHMgPSBjb250cm9sR2FtZS5jb250cm9sUG9pbnRzIHx8IDxDb250cm9sUG9pbnRbXT5bXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ29udHJvbEdhbWUoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xHYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
