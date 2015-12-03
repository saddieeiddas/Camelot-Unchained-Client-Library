"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EquippedItems = (function () {
    function EquippedItems() {
        var equippeditems = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, EquippedItems);

        this.helmet = equippeditems.helmet || null;
        this.chest = equippeditems.chest || null;
        this.pants = equippeditems.pants || null;
        this.boots = equippeditems.boots || null;
        this.leftHand = equippeditems.leftHand || null;
        this.rightHand = equippeditems.rightHand || null;
        this.leftGlove = equippeditems.leftGlove || null;
        this.rightGlove = equippeditems.rightGlove || null;
    }

    _createClass(EquippedItems, null, [{
        key: "create",
        value: function create() {
            var a = new EquippedItems();
            return a;
        }
    }]);

    return EquippedItems;
})();

exports["default"] = EquippedItems;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvRXF1aXBwZWRJdGVtcy50cyJdLCJuYW1lcyI6WyJFcXVpcHBlZEl0ZW1zIiwiRXF1aXBwZWRJdGVtcy5jb25zdHJ1Y3RvciIsIkVxdWlwcGVkSXRlbXMuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0EsYUFBQTtBQVlFQSxhQVpGLGFBQUEsR0FZK0NBO1lBQWpDQSxhQUFhQSx5REFBa0JBLEVBQUVBOzs4QkFaL0MsYUFBQTs7QUFhSUMsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsYUFBYUEsQ0FBQ0EsTUFBTUEsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLGFBQWFBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxhQUFhQSxDQUFDQSxLQUFLQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLGFBQWFBLENBQUNBLFFBQVFBLElBQUtBLElBQUlBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxhQUFhQSxDQUFDQSxTQUFTQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsYUFBYUEsQ0FBQ0EsU0FBU0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDbERBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGFBQWFBLENBQUNBLFVBQVVBLElBQUtBLElBQUlBLENBQUNBO0tBRXJEQTs7aUJBdEJILGFBQUE7O2VBd0JlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLGFBQWFBLEVBQUVBLENBQUNBO0FBQzVCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTNCSCxhQUFBOzs7cUJBK0JlLGFBQWEiLCJmaWxlIjoidHMvY2xhc3Nlcy9FcXVpcHBlZEl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5jbGFzcyBFcXVpcHBlZEl0ZW1zICB7XG5cbiAgaGVsbWV0OiBJdGVtO1xuICBjaGVzdDogSXRlbTtcbiAgcGFudHM6IEl0ZW07XG4gIGJvb3RzOiBJdGVtO1xuICBsZWZ0SGFuZDogSXRlbTtcbiAgcmlnaHRIYW5kOiBJdGVtO1xuICBsZWZ0R2xvdmU6IEl0ZW07XG4gIHJpZ2h0R2xvdmU6IEl0ZW07XG5cblxuICBjb25zdHJ1Y3RvcihlcXVpcHBlZGl0ZW1zID0gPEVxdWlwcGVkSXRlbXM+e30pIHtcbiAgICB0aGlzLmhlbG1ldCA9IGVxdWlwcGVkaXRlbXMuaGVsbWV0IHx8ICBudWxsO1xuICAgIHRoaXMuY2hlc3QgPSBlcXVpcHBlZGl0ZW1zLmNoZXN0IHx8ICBudWxsO1xuICAgIHRoaXMucGFudHMgPSBlcXVpcHBlZGl0ZW1zLnBhbnRzIHx8ICBudWxsO1xuICAgIHRoaXMuYm9vdHMgPSBlcXVpcHBlZGl0ZW1zLmJvb3RzIHx8ICBudWxsO1xuICAgIHRoaXMubGVmdEhhbmQgPSBlcXVpcHBlZGl0ZW1zLmxlZnRIYW5kIHx8ICBudWxsO1xuICAgIHRoaXMucmlnaHRIYW5kID0gZXF1aXBwZWRpdGVtcy5yaWdodEhhbmQgfHwgIG51bGw7XG4gICAgdGhpcy5sZWZ0R2xvdmUgPSBlcXVpcHBlZGl0ZW1zLmxlZnRHbG92ZSB8fCAgbnVsbDtcbiAgICB0aGlzLnJpZ2h0R2xvdmUgPSBlcXVpcHBlZGl0ZW1zLnJpZ2h0R2xvdmUgfHwgIG51bGw7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgRXF1aXBwZWRJdGVtcygpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBwZWRJdGVtcztcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
