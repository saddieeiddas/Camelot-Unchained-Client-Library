"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = (function () {
    function Inventory() {
        var inventory = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Inventory);

        this.items = inventory.items || [];
    }

    _createClass(Inventory, null, [{
        key: "create",
        value: function create() {
            var a = new Inventory();
            return a;
        }
    }]);

    return Inventory;
})();

exports["default"] = Inventory;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9JbnZlbnRvcnkudHMiXSwibmFtZXMiOlsiSW52ZW50b3J5IiwiSW52ZW50b3J5LmNvbnN0cnVjdG9yIiwiSW52ZW50b3J5LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BLFNBQUE7QUFHRUEsYUFIRixTQUFBLEdBR3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFIdkMsU0FBQTs7QUFJSUMsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBYUEsRUFBRUEsQ0FBQ0E7S0FDN0NBOztpQkFMSCxTQUFBOztlQU9lRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQVZILFNBQUE7OztxQkFjZSxTQUFTIiwiZmlsZSI6ImNvcmUvY2xhc3Nlcy9JbnZlbnRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmNsYXNzIEludmVudG9yeSAge1xuICBpdGVtczogSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKGludmVudG9yeSA9IDxJbnZlbnRvcnk+e30pIHtcbiAgICB0aGlzLml0ZW1zID0gaW52ZW50b3J5Lml0ZW1zIHx8ICA8SXRlbVtdPltdO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludmVudG9yeTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
