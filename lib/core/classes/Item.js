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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _constantsGearSlot = require('../constants/gearSlot');

var _constantsGearSlot2 = _interopRequireDefault(_constantsGearSlot);

/**
 * Item
 */

var Item = (function () {
    /**
     * Item Constructor
     * @param  {Item = <Item>{}} item - an existing item to create this new item from
     */

    function Item() {
        var item = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Item);

        this.id = item.id || "";
        this.type = item.type;
        this.name = item.name || "";
        this.description = item.description || "";
        this.resourceID = item.resourceID;
        this.carryingRequirement = item.carryingRequirement;
        this.gearSlot = item.gearSlot || _constantsGearSlot2["default"].NONE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9JdGVtLnRzIl0sIm5hbWVzIjpbIkl0ZW0iLCJJdGVtLmNvbnN0cnVjdG9yIiwiSXRlbS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQU9xQix1QkFBdUI7Ozs7Ozs7O0lBSzVDLElBQUE7Ozs7OztBQStDRUEsYUEvQ0YsSUFBQSxHQStDbUNBO1lBQXJCQSxJQUFJQSx5REFBZUEsRUFBRUE7OzhCQS9DbkMsSUFBQTs7QUFnRElDLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLElBQUtBLEVBQUVBLENBQUNBO0FBQ3pCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUN0QkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDN0JBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLElBQUtBLEVBQUVBLENBQUNBO0FBQzNDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxJQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBO0FBQ3BEQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSwrQkFBU0EsSUFBSUEsQ0FBQ0E7S0FDaERBOztpQkF2REgsSUFBQTs7ZUF5RGVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbkJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBNURILElBQUE7OztxQkFnRWUsSUFBSSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgaXRlbVR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2l0ZW1UeXBlJztcbmltcG9ydCBnZWFyU2xvdCBmcm9tICcuLi9jb25zdGFudHMvZ2VhclNsb3QnO1xuXG4vKipcbiAqIEl0ZW1cbiAqL1xuY2xhc3MgSXRlbSAge1xuICAvKipcbiAgICogVGhlIGl0ZW0gSURcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtIFR5cGVcbiAgICogQHR5cGUge2l0ZW1UeXBlfVxuICAgKi9cbiAgdHlwZTogaXRlbVR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSBJdGVtIE5hbWVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIEl0ZW0gRGVzY3JpcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBJdGVtIFJlc291cmNlIElEXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICByZXNvdXJjZUlEOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBJdGVtIGNhcnJ5aW5nUmVxdWlyZW1lbnRcbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIGNhcnJ5aW5nUmVxdWlyZW1lbnQ6IGFueTtcblxuICAvKipcbiAgICogVGhlIEl0ZW0gZ2VhclNsb3RcbiAgICogQHR5cGUge2dlYXJTbG90fVxuICAgKi9cbiAgZ2VhclNsb3Q6IGdlYXJTbG90O1xuXG4gIC8qKlxuICAgKiBJdGVtIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge0l0ZW0gPSA8SXRlbT57fX0gaXRlbSAtIGFuIGV4aXN0aW5nIGl0ZW0gdG8gY3JlYXRlIHRoaXMgbmV3IGl0ZW0gZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoaXRlbTogSXRlbSA9IDxJdGVtPnt9KSB7XG4gICAgdGhpcy5pZCA9IGl0ZW0uaWQgfHwgIFwiXCI7XG4gICAgdGhpcy50eXBlID0gaXRlbS50eXBlO1xuICAgIHRoaXMubmFtZSA9IGl0ZW0ubmFtZSB8fCAgXCJcIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbiB8fCAgXCJcIjtcbiAgICB0aGlzLnJlc291cmNlSUQgPSBpdGVtLnJlc291cmNlSUQ7XG4gICAgdGhpcy5jYXJyeWluZ1JlcXVpcmVtZW50ID0gaXRlbS5jYXJyeWluZ1JlcXVpcmVtZW50O1xuICAgIHRoaXMuZ2VhclNsb3QgPSBpdGVtLmdlYXJTbG90IHx8IGdlYXJTbG90Lk5PTkU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEl0ZW0oKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
