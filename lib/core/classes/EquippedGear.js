/**
 * EquippedGear
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EquippedGear = (function () {
    function EquippedGear() {
        var equippedgear = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, EquippedGear);

        this.items = equippedgear.items || [];
    }

    /**
     * Get the item in specific gear slot
     * @param  {gearSlot} slot - the gear slot to get item for
     * @return {Item} the item in gear slot, or null if there is no item equipped
     */

    _createClass(EquippedGear, [{
        key: "getItemInGearSlot",
        value: function getItemInGearSlot(slot) {
            var gearSlotItems = this.items.filter(function (item) {
                return item.gearSlot == slot;
            });
            if (gearSlotItems.length > 0) {
                return gearSlotItems[0];
            } else {
                return null;
            }
        }

        /**
         * Check if the equippedgear contains an item
         * @param  {string} id - the id of item to look for
         * @return {boolean} returns true if the item existing in the equippedgear
         */
    }, {
        key: "hasItem",
        value: function hasItem(id) {
            return this.items.filter(function (item) {
                return item.id == id;
            }).length > 0;
        }

        /**
         * Removes an item from given gear slot
         * @param {gearSlot} slot the gear slot to remove item from
         */
    }, {
        key: "removeItemInGearSlot",
        value: function removeItemInGearSlot(slot) {
            var _this = this;

            var ids = [];
            this.items.forEach(function (item) {
                if (item.gearSlot == slot) {
                    ids.push(item.id);
                }
            });
            ids.forEach(function (id) {
                _this.removeItem(id);
            });
        }

        /**
         * Adds an item to the equippedgear
         * @param {Item} item - the item to add to equippedgear
         */
    }, {
        key: "addItem",
        value: function addItem(item) {
            this.removeItemInGearSlot(item.gearSlot);
            this.items.push(item);
        }

        /**
         * Removes an item from the equippedgear with the given item id
         * @param {string} id - the item id to remove
         */
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            var itemIndex = null;
            this.items.forEach(function (item, index) {
                if (item.id == id) {
                    itemIndex = index;
                }
            });
            if (itemIndex != null) {
                this.items.splice(itemIndex, 1);
            }
        }

        /**
         * Get a list of all item ID's currently in the equippedgear
         * @return {string[]} an array of item ID's
         */
    }, {
        key: "getItemIDs",
        value: function getItemIDs() {
            var itemIDs = [];
            this.items.forEach(function (item) {
                itemIDs.push(item.id);
            });
            return itemIDs;
        }
    }], [{
        key: "create",
        value: function create() {
            var a = new EquippedGear();
            return a;
        }
    }]);

    return EquippedGear;
})();

exports["default"] = EquippedGear;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9FcXVpcHBlZEdlYXIudHMiXSwibmFtZXMiOlsiRXF1aXBwZWRHZWFyIiwiRXF1aXBwZWRHZWFyLmNvbnN0cnVjdG9yIiwiRXF1aXBwZWRHZWFyLmdldEl0ZW1JbkdlYXJTbG90IiwiRXF1aXBwZWRHZWFyLmhhc0l0ZW0iLCJFcXVpcHBlZEdlYXIucmVtb3ZlSXRlbUluR2VhclNsb3QiLCJFcXVpcHBlZEdlYXIuYWRkSXRlbSIsIkVxdWlwcGVkR2Vhci5yZW1vdmVJdGVtIiwiRXF1aXBwZWRHZWFyLmdldEl0ZW1JRHMiLCJFcXVpcHBlZEdlYXIuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBV0EsWUFBQTtBQVFFQSxhQVJGLFlBQUEsR0FRMkRBO1lBQTdDQSxZQUFZQSx5REFBK0JBLEVBQUVBOzs4QkFSM0QsWUFBQTs7QUFTSUMsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsWUFBWUEsQ0FBQ0EsS0FBS0EsSUFBWUEsRUFBRUEsQ0FBQ0E7S0FDL0NBOzs7Ozs7OztpQkFWSCxZQUFBOztlQWlCbUJELDJCQUFDQSxJQUFxQkEsRUFBQUE7QUFDckNFLGdCQUFJQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxJQUFVQSxFQUFBQTtBQUMvQ0EsdUJBQU9BLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBO2FBQzlCQSxDQUFDQSxDQUFDQTtBQUNIQSxnQkFBSUEsYUFBYUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUE7QUFDNUJBLHVCQUFPQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTthQUN6QkEsTUFBTUE7QUFDTEEsdUJBQU9BLElBQUlBLENBQUNBO2FBQ2JBO1NBQ0ZBOzs7Ozs7Ozs7ZUFPTUYsaUJBQUNBLEVBQVVBLEVBQUFBO0FBQ2hCRyxtQkFBT0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBVUEsRUFBQUE7QUFDbENBLHVCQUFPQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTthQUN0QkEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7U0FDZkE7Ozs7Ozs7O2VBTW1CSCw4QkFBQ0EsSUFBY0EsRUFBQUE7OztBQUNqQ0ksZ0JBQU1BLEdBQUdBLEdBQWFBLEVBQUVBLENBQUNBO0FBQ3pCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBVUEsRUFBQUE7QUFDNUJBLG9CQUFJQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxFQUFFQTtBQUN6QkEsdUJBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2lCQUNuQkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsZUFBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsRUFBVUEsRUFBQUE7QUFDckJBLHNCQUFLQSxVQUFVQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTthQUNyQkEsQ0FBQ0EsQ0FBQ0E7U0FDSkE7Ozs7Ozs7O2VBTU1KLGlCQUFDQSxJQUFVQSxFQUFBQTtBQUNoQkssZ0JBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLGdCQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtTQUN2QkE7Ozs7Ozs7O2VBTVNMLG9CQUFDQSxFQUFVQSxFQUFBQTtBQUNuQk0sZ0JBQUlBLFNBQVNBLEdBQVdBLElBQUlBLENBQUNBO0FBQzdCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBVUEsRUFBRUEsS0FBYUEsRUFBQUE7QUFDM0NBLG9CQUFJQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQTtBQUNqQkEsNkJBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2lCQUNuQkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsZ0JBQUlBLFNBQVNBLElBQUlBLElBQUlBLEVBQUVBO0FBQ3JCQSxvQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7YUFDakNBO1NBQ0ZBOzs7Ozs7OztlQU1TTixzQkFBQUE7QUFDUk8sZ0JBQU1BLE9BQU9BLEdBQWFBLEVBQUVBLENBQUNBO0FBQzdCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBVUEsRUFBQUE7QUFDNUJBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTthQUN2QkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsbUJBQU9BLE9BQU9BLENBQUNBO1NBQ2hCQTs7O2VBRVlQLGtCQUFBQTtBQUNYUSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsWUFBWUEsRUFBRUEsQ0FBQ0E7QUFDM0JBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBL0ZILFlBQUE7OztxQkFtR2UsWUFBWSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvRXF1aXBwZWRHZWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IGdlYXJTbG90IGZyb20gJy4uL2NvbnN0YW50cy9nZWFyU2xvdCc7XG5cbi8qKlxuICogRXF1aXBwZWRHZWFyXG4gKi9cbmNsYXNzIEVxdWlwcGVkR2VhciAge1xuXG4gIC8qKlxuICAgKiBUaGUgaXRlbXMgY3VycmVudGx5IGluIHRoZSBlcXVpcHBlZGdlYXJcbiAgICogQHR5cGUge0l0ZW1bXX1cbiAgICovXG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgY29uc3RydWN0b3IoZXF1aXBwZWRnZWFyOiBFcXVpcHBlZEdlYXIgPSA8RXF1aXBwZWRHZWFyPnt9KSB7XG4gICAgdGhpcy5pdGVtcyA9IGVxdWlwcGVkZ2Vhci5pdGVtcyB8fCA8SXRlbVtdPltdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaXRlbSBpbiBzcGVjaWZpYyBnZWFyIHNsb3RcbiAgICogQHBhcmFtICB7Z2VhclNsb3R9IHNsb3QgLSB0aGUgZ2VhciBzbG90IHRvIGdldCBpdGVtIGZvclxuICAgKiBAcmV0dXJuIHtJdGVtfSB0aGUgaXRlbSBpbiBnZWFyIHNsb3QsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gaXRlbSBlcXVpcHBlZFxuICAgKi9cbiAgZ2V0SXRlbUluR2VhclNsb3Qoc2xvdDogZ2VhclNsb3R8c3RyaW5nKTogSXRlbSB7XG4gICAgbGV0IGdlYXJTbG90SXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbTogSXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uZ2VhclNsb3QgPT0gc2xvdDtcbiAgICB9KTtcbiAgICBpZiAoZ2VhclNsb3RJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZ2VhclNsb3RJdGVtc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBlcXVpcHBlZGdlYXIgY29udGFpbnMgYW4gaXRlbVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIGl0ZW0gdG8gbG9vayBmb3JcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gcmV0dXJucyB0cnVlIGlmIHRoZSBpdGVtIGV4aXN0aW5nIGluIHRoZSBlcXVpcHBlZGdlYXJcbiAgICovXG4gIGhhc0l0ZW0oaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbTogSXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gaWQ7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBnaXZlbiBnZWFyIHNsb3RcbiAgICogQHBhcmFtIHtnZWFyU2xvdH0gc2xvdCB0aGUgZ2VhciBzbG90IHRvIHJlbW92ZSBpdGVtIGZyb21cbiAgICovXG4gIHJlbW92ZUl0ZW1JbkdlYXJTbG90KHNsb3Q6IGdlYXJTbG90KTogdm9pZCB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbTogSXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uZ2VhclNsb3QgPT0gc2xvdCkge1xuICAgICAgICBpZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVJdGVtKGlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGl0ZW0gdG8gdGhlIGVxdWlwcGVkZ2VhclxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gLSB0aGUgaXRlbSB0byBhZGQgdG8gZXF1aXBwZWRnZWFyXG4gICAqL1xuICBhZGRJdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUl0ZW1JbkdlYXJTbG90KGl0ZW0uZ2VhclNsb3QpO1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgZXF1aXBwZWRnZWFyIHdpdGggdGhlIGdpdmVuIGl0ZW0gaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGl0ZW0gaWQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgaXRlbUluZGV4OiBudW1iZXIgPSBudWxsO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT0gaWQpIHtcbiAgICAgICAgaXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGl0ZW1JbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGFsbCBpdGVtIElEJ3MgY3VycmVudGx5IGluIHRoZSBlcXVpcHBlZGdlYXJcbiAgICogQHJldHVybiB7c3RyaW5nW119IGFuIGFycmF5IG9mIGl0ZW0gSUQnc1xuICAgKi9cbiAgZ2V0SXRlbUlEcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaXRlbUlEczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgIGl0ZW1JRHMucHVzaChpdGVtLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbUlEcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgRXF1aXBwZWRHZWFyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcHBlZEdlYXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
