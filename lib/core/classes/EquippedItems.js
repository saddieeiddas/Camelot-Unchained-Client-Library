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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9FcXVpcHBlZEl0ZW1zLnRzIl0sIm5hbWVzIjpbIkVxdWlwcGVkSXRlbXMiLCJFcXVpcHBlZEl0ZW1zLmNvbnN0cnVjdG9yIiwiRXF1aXBwZWRJdGVtcy5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQSxhQUFBO0FBWUVBLGFBWkYsYUFBQSxHQVkrQ0E7WUFBakNBLGFBQWFBLHlEQUFrQkEsRUFBRUE7OzhCQVovQyxhQUFBOztBQWFJQyxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQSxNQUFNQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLGFBQWFBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxhQUFhQSxDQUFDQSxLQUFLQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsYUFBYUEsQ0FBQ0EsUUFBUUEsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBLFNBQVNBLElBQUtBLElBQUlBLENBQUNBO0FBQ2xEQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxhQUFhQSxDQUFDQSxTQUFTQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsYUFBYUEsQ0FBQ0EsVUFBVUEsSUFBS0EsSUFBSUEsQ0FBQ0E7S0FFckRBOztpQkF0QkgsYUFBQTs7ZUF3QmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsYUFBYUEsRUFBRUEsQ0FBQ0E7QUFDNUJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBM0JILGFBQUE7OztxQkErQmUsYUFBYSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvRXF1aXBwZWRJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuY2xhc3MgRXF1aXBwZWRJdGVtcyAge1xuXG4gIGhlbG1ldDogSXRlbTtcbiAgY2hlc3Q6IEl0ZW07XG4gIHBhbnRzOiBJdGVtO1xuICBib290czogSXRlbTtcbiAgbGVmdEhhbmQ6IEl0ZW07XG4gIHJpZ2h0SGFuZDogSXRlbTtcbiAgbGVmdEdsb3ZlOiBJdGVtO1xuICByaWdodEdsb3ZlOiBJdGVtO1xuXG5cbiAgY29uc3RydWN0b3IoZXF1aXBwZWRpdGVtcyA9IDxFcXVpcHBlZEl0ZW1zPnt9KSB7XG4gICAgdGhpcy5oZWxtZXQgPSBlcXVpcHBlZGl0ZW1zLmhlbG1ldCB8fCAgbnVsbDtcbiAgICB0aGlzLmNoZXN0ID0gZXF1aXBwZWRpdGVtcy5jaGVzdCB8fCAgbnVsbDtcbiAgICB0aGlzLnBhbnRzID0gZXF1aXBwZWRpdGVtcy5wYW50cyB8fCAgbnVsbDtcbiAgICB0aGlzLmJvb3RzID0gZXF1aXBwZWRpdGVtcy5ib290cyB8fCAgbnVsbDtcbiAgICB0aGlzLmxlZnRIYW5kID0gZXF1aXBwZWRpdGVtcy5sZWZ0SGFuZCB8fCAgbnVsbDtcbiAgICB0aGlzLnJpZ2h0SGFuZCA9IGVxdWlwcGVkaXRlbXMucmlnaHRIYW5kIHx8ICBudWxsO1xuICAgIHRoaXMubGVmdEdsb3ZlID0gZXF1aXBwZWRpdGVtcy5sZWZ0R2xvdmUgfHwgIG51bGw7XG4gICAgdGhpcy5yaWdodEdsb3ZlID0gZXF1aXBwZWRpdGVtcy5yaWdodEdsb3ZlIHx8ICBudWxsO1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEVxdWlwcGVkSXRlbXMoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwcGVkSXRlbXM7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
