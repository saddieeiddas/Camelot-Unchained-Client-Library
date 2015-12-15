"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _constantsItemType = require('../constants/itemType');

var _constantsItemType2 = _interopRequireDefault(_constantsItemType);

var Item = (function () {
    function Item() {
        var item = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Item);

        this.id = item.id || "";
        this.type = item.type || _constantsItemType2["default"].NONE;
        this.name = item.name || "";
        this.description = item.description || "";
        this.resourceId = item.resourceId || 0;
    }

    _createClass(Item, null, [{
        key: "create",
        value: function create() {
            var a = new Item();
            return a;
        }
    }]);

    return Item;
})();

exports["default"] = Item;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9JdGVtLnRzIl0sIm5hbWVzIjpbIkl0ZW0iLCJJdGVtLmNvbnN0cnVjdG9yIiwiSXRlbS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztpQ0FLcUIsdUJBQXVCOzs7O0lBRTVDLElBQUE7QUFPRUEsYUFQRixJQUFBLEdBTzZCQTtZQUFmQSxJQUFJQSx5REFBU0EsRUFBRUE7OzhCQVA3QixJQUFBOztBQVFJQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBS0EsK0JBQVNBLElBQUlBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUM3QkEsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDM0NBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUtBLENBQUNBLENBQUNBO0tBQ3pDQTs7aUJBYkgsSUFBQTs7ZUFlZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNuQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FsQkgsSUFBQTs7O3FCQXNCZSxJQUFJIiwiZmlsZSI6ImNvcmUvY2xhc3Nlcy9JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgaXRlbVR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2l0ZW1UeXBlJztcblxuY2xhc3MgSXRlbSAge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBpdGVtVHlwZTtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICByZXNvdXJjZUlkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaXRlbSA9IDxJdGVtPnt9KSB7XG4gICAgdGhpcy5pZCA9IGl0ZW0uaWQgfHwgIFwiXCI7XG4gICAgdGhpcy50eXBlID0gaXRlbS50eXBlIHx8ICBpdGVtVHlwZS5OT05FO1xuICAgIHRoaXMubmFtZSA9IGl0ZW0ubmFtZSB8fCAgXCJcIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbiB8fCAgXCJcIjtcbiAgICB0aGlzLnJlc291cmNlSWQgPSBpdGVtLnJlc291cmNlSWQgfHwgIDA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEl0ZW0oKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
