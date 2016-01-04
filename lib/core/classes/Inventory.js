/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * Inventory
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = (function () {
    /**
     * Inventory Constructor
     * @param  {Inventory = <Inventory>{}} inventory - provide an existing inventory to copy all items into new inventory
     */

    function Inventory() {
        var inventory = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Inventory);

        this.items = inventory.items || [];
    }

    /**
     * Check if the inventory contains an item
     * @param  {string} id - the id of item to look for
     * @return {boolean} returns true if the item existing in the inventory
     */

    _createClass(Inventory, [{
        key: "hasItem",
        value: function hasItem(id) {
            return this.items.filter(function (item) {
                return item.id == id;
            }).length > 0;
        }

        /**
         * Adds an item to the inventory
         * @param {Item} item - the item to add to inventory
         */
    }, {
        key: "addItem",
        value: function addItem(item) {
            if (this.hasItem(item.id) == false) {
                this.items.push(item);
            }
        }

        /**
         * Removes an item from the inventory with the given item id
         * @param {string} id - the item id to remove
         */
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            if (this.hasItem(id)) {
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
        }

        /**
         * Get a list of all item ID's currently in the inventory
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
            var a = new Inventory();
            return a;
        }
    }]);

    return Inventory;
})();

exports["default"] = Inventory;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9JbnZlbnRvcnkudHMiXSwibmFtZXMiOlsiSW52ZW50b3J5IiwiSW52ZW50b3J5LmNvbnN0cnVjdG9yIiwiSW52ZW50b3J5Lmhhc0l0ZW0iLCJJbnZlbnRvcnkuYWRkSXRlbSIsIkludmVudG9yeS5yZW1vdmVJdGVtIiwiSW52ZW50b3J5LmdldEl0ZW1JRHMiLCJJbnZlbnRvcnkuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXQSxTQUFBOzs7Ozs7QUFZRUEsYUFaRixTQUFBLEdBWWtEQTtZQUFwQ0EsU0FBU0EseURBQXlCQSxFQUFFQTs7OEJBWmxELFNBQUE7O0FBYUlDLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQVlBLEVBQUVBLENBQUNBO0tBQzVDQTs7Ozs7Ozs7aUJBZEgsU0FBQTs7ZUFxQlNELGlCQUFDQSxFQUFVQSxFQUFBQTtBQUNoQkUsbUJBQU9BLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLFVBQUNBLElBQVVBLEVBQUFBO0FBQ2xDQSx1QkFBT0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7YUFDdEJBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO1NBQ2ZBOzs7Ozs7OztlQU1NRixpQkFBQ0EsSUFBVUEsRUFBQUE7QUFDaEJHLGdCQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQTtBQUNsQ0Esb0JBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2FBQ3ZCQTtTQUNGQTs7Ozs7Ozs7ZUFNU0gsb0JBQUNBLEVBQVVBLEVBQUFBO0FBQ25CSSxnQkFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUE7QUFDcEJBLG9CQUFJQSxTQUFTQSxHQUFXQSxJQUFJQSxDQUFDQTtBQUM3QkEsb0JBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLElBQVVBLEVBQUVBLEtBQWFBLEVBQUFBO0FBQzNDQSx3QkFBSUEsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsRUFBRUE7QUFDakJBLGlDQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtxQkFDbkJBO2lCQUNGQSxDQUFDQSxDQUFDQTtBQUNIQSxvQkFBSUEsU0FBU0EsSUFBSUEsSUFBSUEsRUFBRUE7QUFDckJBLHdCQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtpQkFDakNBO2FBQ0ZBO1NBQ0ZBOzs7Ozs7OztlQU1TSixzQkFBQUE7QUFDUkssZ0JBQU1BLE9BQU9BLEdBQWFBLEVBQUVBLENBQUNBO0FBQzdCQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBVUEsRUFBQUE7QUFDNUJBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTthQUN2QkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsbUJBQU9BLE9BQU9BLENBQUNBO1NBQ2hCQTs7O2VBRVlMLGtCQUFBQTtBQUNYTSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBdEVILFNBQUE7OztxQkEwRWUsU0FBUyIsImZpbGUiOiJjb3JlL2NsYXNzZXMvSW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbi8qKlxuICogSW52ZW50b3J5XG4gKi9cbmNsYXNzIEludmVudG9yeSAge1xuXG4gIC8qKlxuICAgKiBUaGUgaXRlbXMgY3VycmVudGx5IGluIHRoZSBpbnZlbnRvcnlcbiAgICogQHR5cGUge0l0ZW1bXX1cbiAgICovXG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgLyoqXG4gICAqIEludmVudG9yeSBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtJbnZlbnRvcnkgPSA8SW52ZW50b3J5Pnt9fSBpbnZlbnRvcnkgLSBwcm92aWRlIGFuIGV4aXN0aW5nIGludmVudG9yeSB0byBjb3B5IGFsbCBpdGVtcyBpbnRvIG5ldyBpbnZlbnRvcnlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5ID0gPEludmVudG9yeT57fSkge1xuICAgIHRoaXMuaXRlbXMgPSBpbnZlbnRvcnkuaXRlbXMgfHwgPEl0ZW1bXT5bXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgaW52ZW50b3J5IGNvbnRhaW5zIGFuIGl0ZW1cbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiBpdGVtIHRvIGxvb2sgZm9yXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHJldHVybnMgdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdGluZyBpbiB0aGUgaW52ZW50b3J5XG4gICAqL1xuICBoYXNJdGVtKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmlkID09IGlkO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSBpbnZlbnRvcnlcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIC0gdGhlIGl0ZW0gdG8gYWRkIHRvIGludmVudG9yeVxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzSXRlbShpdGVtLmlkKSA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgaW52ZW50b3J5IHdpdGggdGhlIGdpdmVuIGl0ZW0gaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGl0ZW0gaWQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNJdGVtKGlkKSkge1xuICAgICAgbGV0IGl0ZW1JbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PSBpZCkge1xuICAgICAgICAgIGl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpdGVtSW5kZXggIT0gbnVsbCkge1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGFsbCBpdGVtIElEJ3MgY3VycmVudGx5IGluIHRoZSBpbnZlbnRvcnlcbiAgICogQHJldHVybiB7c3RyaW5nW119IGFuIGFycmF5IG9mIGl0ZW0gSUQnc1xuICAgKi9cbiAgZ2V0SXRlbUlEcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaXRlbUlEczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgIGl0ZW1JRHMucHVzaChpdGVtLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbUlEcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgSW52ZW50b3J5KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
