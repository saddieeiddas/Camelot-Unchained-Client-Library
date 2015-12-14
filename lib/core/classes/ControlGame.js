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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Db250cm9sR2FtZS50cyJdLCJuYW1lcyI6WyJDb250cm9sR2FtZSIsIkNvbnRyb2xHYW1lLmNvbnN0cnVjdG9yIiwiQ29udHJvbEdhbWUuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQyxDQUFDOztJQUVGLFdBQUE7QUFTRUEsYUFURixXQUFBLEdBUzJDQTtZQUE3QkEsV0FBV0EseURBQWdCQSxFQUFFQTs7OEJBVDNDLFdBQUE7OztBQVlJQyxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHNUNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFdBQVdBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3REQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFdBQVdBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaEVBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBOztBQUdoREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBRzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxXQUFXQSxDQUFDQSxhQUFhQSxJQUFvQkEsRUFBRUEsQ0FBQ0E7S0FDdEVBOztpQkF4QkgsV0FBQTs7ZUEwQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDMUJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBN0JILFdBQUE7OztxQkFpQ2UsV0FBVyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvQ29udHJvbEdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sUG9pbnQge1xuICBmYWN0aW9uOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHNpemU6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59O1xuXG5jbGFzcyBDb250cm9sR2FtZSB7XG5cbiAgYXJ0aHVyaWFuU2NvcmU6IG51bWJlcjtcbiAgY29udHJvbFBvaW50czogQ29udHJvbFBvaW50W107XG4gIGdhbWVTdGF0ZTogbnVtYmVyO1xuICB0aW1lTGVmdDogbnVtYmVyO1xuICB0dWF0aGFEZURhbmFublNjb3JlOiBudW1iZXI7XG4gIHZpa2luZ1Njb3JlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoY29udHJvbEdhbWUgPSA8Q29udHJvbEdhbWU+e30pIHtcblxuICAgIC8vIEdhbWUgU3RhdGVcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IGNvbnRyb2xHYW1lLmdhbWVTdGF0ZSB8fCAwO1xuXG4gICAgLy8gR2FtZSBTY29yZVxuICAgIHRoaXMuYXJ0aHVyaWFuU2NvcmUgPSBjb250cm9sR2FtZS5hcnRodXJpYW5TY29yZSB8fCAwO1xuICAgIHRoaXMudHVhdGhhRGVEYW5hbm5TY29yZSA9IGNvbnRyb2xHYW1lLnR1YXRoYURlRGFuYW5uU2NvcmUgfHwgMDtcbiAgICB0aGlzLnZpa2luZ1Njb3JlID0gY29udHJvbEdhbWUudmlraW5nU2NvcmUgfHwgMDtcblxuICAgIC8vIFRpbWUgcmVtYWluaW5nXG4gICAgdGhpcy50aW1lTGVmdCA9IGNvbnRyb2xHYW1lLnRpbWVMZWZ0IHx8IDA7XG5cbiAgICAvLyBDb250cm9sIFBvaW50cyAoaWYgaW5jbHVkZWQpXG4gICAgdGhpcy5jb250cm9sUG9pbnRzID0gY29udHJvbEdhbWUuY29udHJvbFBvaW50cyB8fCA8Q29udHJvbFBvaW50W10+W107XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IENvbnRyb2xHYW1lKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sR2FtZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
