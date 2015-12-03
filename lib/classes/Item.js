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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvSXRlbS50cyJdLCJuYW1lcyI6WyJJdGVtIiwiSXRlbS5jb25zdHJ1Y3RvciIsIkl0ZW0uY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7aUNBS3FCLHVCQUF1Qjs7OztJQUU1QyxJQUFBO0FBT0VBLGFBUEYsSUFBQSxHQU82QkE7WUFBZkEsSUFBSUEseURBQVNBLEVBQUVBOzs4QkFQN0IsSUFBQTs7QUFRSUMsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDekJBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLElBQUtBLCtCQUFTQSxJQUFJQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDN0JBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLElBQUtBLEVBQUVBLENBQUNBO0FBQzNDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFLQSxDQUFDQSxDQUFDQTtLQUN6Q0E7O2lCQWJILElBQUE7O2VBZWVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbkJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBbEJILElBQUE7OztxQkFzQmUsSUFBSSIsImZpbGUiOiJ0cy9jbGFzc2VzL0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBpdGVtVHlwZSBmcm9tICcuLi9jb25zdGFudHMvaXRlbVR5cGUnO1xuXG5jbGFzcyBJdGVtICB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IGl0ZW1UeXBlO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJlc291cmNlSWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihpdGVtID0gPEl0ZW0+e30pIHtcbiAgICB0aGlzLmlkID0gaXRlbS5pZCB8fCAgXCJcIjtcbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGUgfHwgIGl0ZW1UeXBlLk5PTkU7XG4gICAgdGhpcy5uYW1lID0gaXRlbS5uYW1lIHx8ICBcIlwiO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uIHx8ICBcIlwiO1xuICAgIHRoaXMucmVzb3VyY2VJZCA9IGl0ZW0ucmVzb3VyY2VJZCB8fCAgMDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgSXRlbSgpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
