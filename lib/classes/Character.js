'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Player2 = require('./Player');

var _Player3 = _interopRequireDefault(_Player2);

var _Inventory = require('./Inventory');

var _Inventory2 = _interopRequireDefault(_Inventory);

var _EquippedItems = require('./EquippedItems');

var _EquippedItems2 = _interopRequireDefault(_EquippedItems);

var _SpellBook = require('./SpellBook');

var _SpellBook2 = _interopRequireDefault(_SpellBook);

var _Stats = require('./Stats');

var _Stats2 = _interopRequireDefault(_Stats);

var Character = (function (_Player) {
    _inherits(Character, _Player);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.inventory = character.inventory || new _Inventory2['default']();
        this.equippedItems = character.equippedItems || new _EquippedItems2['default']();
        this.spellBook = character.spellBook || new _SpellBook2['default']();
        this.banes = character.banes || [];
        this.banes = character.boons || [];
        this.group = character.group || null;
        this.stats = character.stats || new _Stats2['default']();
    }

    _createClass(Character, null, [{
        key: 'create',
        value: function create() {
            var a = new Character();
            return a;
        }
    }]);

    return Character;
})(_Player3['default']);

exports['default'] = Character;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIkNoYXJhY3Rlci5jb25zdHJ1Y3RvciIsIkNoYXJhY3Rlci5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS21CLFVBQVU7Ozs7eUJBQ1AsYUFBYTs7Ozs2QkFDVCxpQkFBaUI7Ozs7eUJBRXJCLGFBQWE7Ozs7cUJBRWpCLFNBQVM7Ozs7SUFHM0IsU0FBQTtjQUFBLFNBQUE7O0FBWUVBLGFBWkYsU0FBQSxHQVl1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBWnZDLFNBQUE7O0FBYUlDLG1DQWJKLFNBQUEsNkNBYVVBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLDRCQUFlQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBaUJBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFpQkEsRUFBRUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSx3QkFBV0EsQ0FBQ0E7S0FLN0NBOztpQkF6QkgsU0FBQTs7ZUEyQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBOUJILFNBQUE7OztxQkFrQ2UsU0FBUyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vSW52ZW50b3J5JztcbmltcG9ydCBFcXVpcHBlZEl0ZW1zIGZyb20gJy4vRXF1aXBwZWRJdGVtcyc7XG5pbXBvcnQgQmFuZUJvb24gZnJvbSAnLi9CYW5lQm9vbic7XG5pbXBvcnQgU3BlbGxCb29rIGZyb20gJy4vU3BlbGxCb29rJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBTdGF0cyBmcm9tICcuL1N0YXRzJztcblxuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBQbGF5ZXJ7XG5cbiAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gIGJhbmVzOiBCYW5lQm9vbltdO1xuICBib29uczogQmFuZUJvb25bXTtcbiAgZXF1aXBwZWRJdGVtczogRXF1aXBwZWRJdGVtcztcbiAgc3BlbGxCb29rOiBTcGVsbEJvb2s7XG4gIGdyb3VwOiBHcm91cDtcbiAgc3RhdHM6IFN0YXRzO1xuXG5cblxuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIgPSA8Q2hhcmFjdGVyPnt9KSB7XG4gICAgc3VwZXIoY2hhcmFjdGVyKVxuICAgIHRoaXMuaW52ZW50b3J5ID0gY2hhcmFjdGVyLmludmVudG9yeSB8fCBuZXcgSW52ZW50b3J5KCk7XG4gICAgdGhpcy5lcXVpcHBlZEl0ZW1zID0gY2hhcmFjdGVyLmVxdWlwcGVkSXRlbXMgfHwgbmV3IEVxdWlwcGVkSXRlbXMoKTtcbiAgICB0aGlzLnNwZWxsQm9vayA9IGNoYXJhY3Rlci5zcGVsbEJvb2sgfHwgbmV3IFNwZWxsQm9vaygpO1xuICAgIHRoaXMuYmFuZXMgPSBjaGFyYWN0ZXIuYmFuZXMgfHwgIDxCYW5lQm9vbltdPltdO1xuICAgIHRoaXMuYmFuZXMgPSBjaGFyYWN0ZXIuYm9vbnMgfHwgIDxCYW5lQm9vbltdPltdO1xuICAgIHRoaXMuZ3JvdXAgPSBjaGFyYWN0ZXIuZ3JvdXAgfHwgIG51bGw7XG4gICAgdGhpcy5zdGF0cyA9IGNoYXJhY3Rlci5zdGF0cyB8fCBuZXcgU3RhdHMoKTtcblxuXG5cblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
