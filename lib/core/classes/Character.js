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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7Ozt5QkFFckIsYUFBYTs7OztxQkFFakIsU0FBUzs7OztJQUczQixTQUFBO2NBQUEsU0FBQTs7QUFZRUEsYUFaRixTQUFBLEdBWXVDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFadkMsU0FBQTs7QUFhSUMsbUNBYkosU0FBQSw2Q0FhVUEsU0FBU0EsRUFBQ0E7QUFDaEJBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLDRCQUFlQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsU0FBU0EsQ0FBQ0EsYUFBYUEsSUFBSUEsZ0NBQW1CQSxDQUFDQTtBQUNwRUEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsNEJBQWVBLENBQUNBO0FBQ3hEQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFpQkEsRUFBRUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQWlCQSxFQUFFQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLHdCQUFXQSxDQUFDQTtLQUs3Q0E7O2lCQXpCSCxTQUFBOztlQTJCZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0E5QkgsU0FBQTs7O3FCQWtDZSxTQUFTIiwiZmlsZSI6ImNvcmUvY2xhc3Nlcy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL0ludmVudG9yeSc7XG5pbXBvcnQgRXF1aXBwZWRJdGVtcyBmcm9tICcuL0VxdWlwcGVkSXRlbXMnO1xuaW1wb3J0IEJhbmVCb29uIGZyb20gJy4vQmFuZUJvb24nO1xuaW1wb3J0IFNwZWxsQm9vayBmcm9tICcuL1NwZWxsQm9vayc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgU3RhdHMgZnJvbSAnLi9TdGF0cyc7XG5cblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUGxheWVye1xuXG4gIGludmVudG9yeTogSW52ZW50b3J5O1xuICBiYW5lczogQmFuZUJvb25bXTtcbiAgYm9vbnM6IEJhbmVCb29uW107XG4gIGVxdWlwcGVkSXRlbXM6IEVxdWlwcGVkSXRlbXM7XG4gIHNwZWxsQm9vazogU3BlbGxCb29rO1xuICBncm91cDogR3JvdXA7XG4gIHN0YXRzOiBTdGF0cztcblxuXG5cbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyID0gPENoYXJhY3Rlcj57fSkge1xuICAgIHN1cGVyKGNoYXJhY3RlcilcbiAgICB0aGlzLmludmVudG9yeSA9IGNoYXJhY3Rlci5pbnZlbnRvcnkgfHwgbmV3IEludmVudG9yeSgpO1xuICAgIHRoaXMuZXF1aXBwZWRJdGVtcyA9IGNoYXJhY3Rlci5lcXVpcHBlZEl0ZW1zIHx8IG5ldyBFcXVpcHBlZEl0ZW1zKCk7XG4gICAgdGhpcy5zcGVsbEJvb2sgPSBjaGFyYWN0ZXIuc3BlbGxCb29rIHx8IG5ldyBTcGVsbEJvb2soKTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJhbmVzIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJvb25zIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmdyb3VwID0gY2hhcmFjdGVyLmdyb3VwIHx8ICBudWxsO1xuICAgIHRoaXMuc3RhdHMgPSBjaGFyYWN0ZXIuc3RhdHMgfHwgbmV3IFN0YXRzKCk7XG5cblxuXG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ2hhcmFjdGVyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
