'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Character = require('./Character');

var _Character2 = _interopRequireDefault(_Character);

var Group = (function () {
    function Group() {
        var group = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Group);

        group.self = group.self || new _Character2['default']();
        group.members = group.members || [];
    }

    _createClass(Group, null, [{
        key: 'create',
        value: function create() {
            var a = new Group();
            return a;
        }
    }]);

    return Group;
})();

exports['default'] = Group;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9Hcm91cC50cyJdLCJuYW1lcyI6WyJHcm91cCIsIkdyb3VwLmNvbnN0cnVjdG9yIiwiR3JvdXAuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7eUJBTXNCLGFBQWE7Ozs7SUFDbkMsS0FBQTtBQUlFQSxhQUpGLEtBQUEsR0FJK0JBO1lBQWpCQSxLQUFLQSx5REFBVUEsRUFBRUE7OzhCQUovQixLQUFBOztBQUtJQyxhQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxJQUFLQSw0QkFBZUEsQ0FBQ0E7QUFDNUNBLGFBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLElBQWVBLEVBQUVBLENBQUNBO0tBQ2hEQTs7aUJBUEgsS0FBQTs7ZUFTZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtBQUNwQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FaSCxLQUFBOzs7cUJBZWUsS0FBSyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5jbGFzcyBHcm91cCAge1xuICBzZWxmOiBDaGFyYWN0ZXI7XG4gIG1lbWJlcnM6IFBsYXllcltdO1xuXG4gIGNvbnN0cnVjdG9yKGdyb3VwID0gPEdyb3VwPnt9KSB7XG4gICAgZ3JvdXAuc2VsZiA9IGdyb3VwLnNlbGYgfHwgIG5ldyBDaGFyYWN0ZXIoKTtcbiAgICBncm91cC5tZW1iZXJzID0gZ3JvdXAubWVtYmVycyB8fCAgPFBsYXllcltdPltdO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBHcm91cCgpO1xuICAgIHJldHVybiBhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
