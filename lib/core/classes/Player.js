'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Combatant2 = require('./Combatant');

var _Combatant3 = _interopRequireDefault(_Combatant2);

var _constantsRace = require('../constants/race');

var _constantsRace2 = _interopRequireDefault(_constantsRace);

var _constantsArchetype = require('../constants/archetype');

var _constantsArchetype2 = _interopRequireDefault(_constantsArchetype);

var Player = (function (_Combatant) {
    _inherits(Player, _Combatant);

    function Player() {
        var player = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, player);
        this.race = player.race || _constantsRace2['default'].NONE;
        this.archetype = player.archetype || _constantsArchetype2['default'].NONE;
    }

    _createClass(Player, [{
        key: 'setRace',
        value: function setRace(race) {
            this.race = race;
        }
    }, {
        key: 'setArchetype',
        value: function setArchetype(archetype) {
            this.archetype = archetype;
        }
    }], [{
        key: 'create',
        value: function create() {
            var a = new Player();
            return a;
        }
    }]);

    return Player;
})(_Combatant3['default']);

exports['default'] = Player;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9QbGF5ZXIudHMiXSwibmFtZXMiOlsiUGxheWVyIiwiUGxheWVyLmNvbnN0cnVjdG9yIiwiUGxheWVyLnNldFJhY2UiLCJQbGF5ZXIuc2V0QXJjaGV0eXBlIiwiUGxheWVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzswQkFLc0IsYUFBYTs7Ozs2QkFDbEIsbUJBQW1COzs7O2tDQUNkLHdCQUF3Qjs7OztJQUU5QyxNQUFBO2NBQUEsTUFBQTs7QUFLRUEsYUFMRixNQUFBLEdBS2lDQTtZQUFuQkEsTUFBTUEseURBQVdBLEVBQUVBOzs4QkFMakMsTUFBQTs7QUFNSUMsbUNBTkosTUFBQSw2Q0FNVUEsTUFBTUEsRUFBQ0E7QUFDYkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsMkJBQUtBLElBQUlBLENBQUNBO0FBQ3JDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxNQUFNQSxDQUFDQSxTQUFTQSxJQUFJQSxnQ0FBVUEsSUFBSUEsQ0FBQ0E7S0FDckRBOztpQkFUSCxNQUFBOztlQVdTRCxpQkFBQ0EsSUFBVUEsRUFBQUE7QUFDaEJFLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVXRixzQkFBQ0EsU0FBb0JBLEVBQUFBO0FBQy9CRyxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7U0FDNUJBOzs7ZUFFWUgsa0JBQUFBO0FBQ1hJLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtBQUNyQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0F0QkgsTUFBQTs7O3FCQTBCZSxNQUFNIiwiZmlsZSI6ImNvcmUvY2xhc3Nlcy9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9Db21iYXRhbnQnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xuaW1wb3J0IGFyY2hldHlwZSBmcm9tICcuLi9jb25zdGFudHMvYXJjaGV0eXBlJztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tYmF0YW50IHtcblxuICByYWNlOiByYWNlO1xuICBhcmNoZXR5cGU6IGFyY2hldHlwZTtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIgPSA8UGxheWVyPnt9KSB7XG4gICAgc3VwZXIocGxheWVyKVxuICAgIHRoaXMucmFjZSA9IHBsYXllci5yYWNlIHx8IHJhY2UuTk9ORTtcbiAgICB0aGlzLmFyY2hldHlwZSA9IHBsYXllci5hcmNoZXR5cGUgfHwgYXJjaGV0eXBlLk5PTkU7XG4gIH1cblxuICBzZXRSYWNlKHJhY2U6IHJhY2UpIHtcbiAgICB0aGlzLnJhY2UgPSByYWNlO1xuICB9XG4gICAgXG4gIHNldEFyY2hldHlwZShhcmNoZXR5cGU6IGFyY2hldHlwZSkge1xuICAgIHRoaXMuYXJjaGV0eXBlID0gYXJjaGV0eXBlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBQbGF5ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
