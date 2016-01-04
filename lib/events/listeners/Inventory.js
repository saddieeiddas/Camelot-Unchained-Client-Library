/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

var _coreClassesInventory = require('../../core/classes/Inventory');

var _coreClassesInventory2 = _interopRequireDefault(_coreClassesInventory);

var _coreClassesItem = require('../../core/classes/Item');

var _coreClassesItem2 = _interopRequireDefault(_coreClassesItem);

function run(emitter, topic) {
    var inventory = new _coreClassesInventory2['default']();
    var queue = [];
    _coreClient2['default'].OnItemEquipped(function (id) {
        inventory.removeItem(id);
    });
    _coreClient2['default'].OnItemUnequipped(function (id) {
        queue.push(id);
        _coreClient2['default'].GetItem(id);
    });
    _coreClient2['default'].OnInventoryItemIDsChanged(function (ids) {
        var existingItemIDs = inventory.getItemIDs();
        ids.forEach(function (id) {
            if (inventory.hasItem(id)) {
                existingItemIDs.splice(existingItemIDs.indexOf(id), 1);
            } else {
                queue.push(id);
            }
        });
        existingItemIDs.forEach(function (id) {
            inventory.removeItem(id);
        });
        if (queue.length > 0) {
            queue.forEach(function (id) {
                _coreClient2['default'].GetItem(id);
            });
        } else {
            emitter.emit(topic, inventory);
        }
    });
    _coreClient2['default'].OnGetItem(function (item) {
        item.id = item.itemID;
        if (queue.indexOf(item.id) >= 0) {
            queue.splice(queue.indexOf(item.id), 1);
            inventory.addItem(new _coreClassesItem2['default'](item));
            if (queue.length === 0) {
                emitter.emit(topic, inventory);
            }
        }
    });
}

var InventoryListener = (function () {
    function InventoryListener(handles) {
        _classCallCheck(this, InventoryListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(InventoryListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return InventoryListener;
})();

exports['default'] = InventoryListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvSW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbInJ1biIsIkludmVudG9yeUxpc3RlbmVyIiwiSW52ZW50b3J5TGlzdGVuZXIuY29uc3RydWN0b3IiLCJJbnZlbnRvcnlMaXN0ZW5lci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUW1CLG1CQUFtQjs7OztvQ0FDaEIsOEJBQThCOzs7OytCQUNuQyx5QkFBeUI7Ozs7QUFFMUMsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLFFBQU1BLFNBQVNBLEdBQUdBLHVDQUFlQSxDQUFDQTtBQUNsQ0EsUUFBTUEsS0FBS0EsR0FBYUEsRUFBRUEsQ0FBQ0E7QUFDM0JBLDRCQUFPQSxjQUFjQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUMvQkEsaUJBQVNBLENBQUNBLFVBQVVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0tBQzFCQSxDQUFDQSxDQUFDQTtBQUNIQSw0QkFBT0EsZ0JBQWdCQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUNqQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDZkEsZ0NBQU9BLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0tBQ3BCQSxDQUFDQSxDQUFDQTtBQUNIQSw0QkFBT0EseUJBQXlCQSxDQUFDQSxVQUFDQSxHQUFhQSxFQUFBQTtBQUM3Q0EsWUFBTUEsZUFBZUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7QUFDL0NBLFdBQUdBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEVBQVVBLEVBQUFBO0FBQ3JCQSxnQkFBSUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUE7QUFDekJBLCtCQUFlQSxDQUFDQSxNQUFNQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTthQUN4REEsTUFBTUE7QUFDTEEscUJBQUtBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2FBQ2hCQTtTQUNGQSxDQUFDQSxDQUFDQTtBQUNIQSx1QkFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsRUFBVUEsRUFBQUE7QUFDakNBLHFCQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtTQUMxQkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsWUFBSUEsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUE7QUFDcEJBLGlCQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUN2QkEsd0NBQU9BLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2FBQ3BCQSxDQUFDQSxDQUFDQTtTQUNKQSxNQUFNQTtBQUNMQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7U0FDaENBO0tBQ0ZBLENBQUNBLENBQUNBO0FBQ0hBLDRCQUFPQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQSxFQUFBQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7QUFDdEJBLFlBQUlBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBO0FBQy9CQSxpQkFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDeENBLHFCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxpQ0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDbENBLGdCQUFJQSxLQUFLQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxFQUFFQTtBQUN0QkEsdUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO2FBQ2hDQTtTQUNGQTtLQUNGQSxDQUFDQSxDQUFDQTtDQUNKQTs7SUFFRCxpQkFBQTtBQUlFQyxhQUpGLGlCQUFBLENBSWNBLE9BQXlCQSxFQUFBQTs4QkFKdkMsaUJBQUE7O0FBQ0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO0FBSXpCQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtLQUN4QkE7O2lCQU5ILGlCQUFBOztlQU9PRCxlQUFDQSxPQUFxQkEsRUFBQUE7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUNuQkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDbENBO1NBQ0ZBOzs7V0FaSCxpQkFBQTs7O3FCQUFBLGlCQUFBIiwiZmlsZSI6ImV2ZW50cy9saXN0ZW5lcnMvSW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEhhbmRsZXNJbnZlbnRvcnkgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzSW52ZW50b3J5JztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY29yZS9jbGllbnQnO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvSW52ZW50b3J5JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uL2NvcmUvY2xhc3Nlcy9JdGVtJztcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBjb25zdCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XG4gIGNvbnN0IHF1ZXVlOiBzdHJpbmdbXSA9IFtdO1xuICBjbGllbnQuT25JdGVtRXF1aXBwZWQoKGlkOiBzdHJpbmcpID0+IHtcbiAgICBpbnZlbnRvcnkucmVtb3ZlSXRlbShpZCk7XG4gIH0pO1xuICBjbGllbnQuT25JdGVtVW5lcXVpcHBlZCgoaWQ6IHN0cmluZykgPT4ge1xuICAgIHF1ZXVlLnB1c2goaWQpO1xuICAgIGNsaWVudC5HZXRJdGVtKGlkKTtcbiAgfSk7XG4gIGNsaWVudC5PbkludmVudG9yeUl0ZW1JRHNDaGFuZ2VkKChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtSURzID0gaW52ZW50b3J5LmdldEl0ZW1JRHMoKTtcbiAgICBpZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGludmVudG9yeS5oYXNJdGVtKGlkKSkge1xuICAgICAgICBleGlzdGluZ0l0ZW1JRHMuc3BsaWNlKGV4aXN0aW5nSXRlbUlEcy5pbmRleE9mKGlkKSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZS5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBleGlzdGluZ0l0ZW1JRHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgaW52ZW50b3J5LnJlbW92ZUl0ZW0oaWQpO1xuICAgIH0pO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBxdWV1ZS5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNsaWVudC5HZXRJdGVtKGlkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGludmVudG9yeSk7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lk9uR2V0SXRlbSgoaXRlbTogYW55KSA9PiB7XG4gICAgaXRlbS5pZCA9IGl0ZW0uaXRlbUlEO1xuICAgIGlmIChxdWV1ZS5pbmRleE9mKGl0ZW0uaWQpID49IDApIHtcbiAgICAgIHF1ZXVlLnNwbGljZShxdWV1ZS5pbmRleE9mKGl0ZW0uaWQpLCAxKTtcbiAgICAgIGludmVudG9yeS5hZGRJdGVtKG5ldyBJdGVtKGl0ZW0pKTtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnZlbnRvcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHR5cGU6IHN0cmluZztcbiAgaGFuZGxlczogSGFuZGxlc0ludmVudG9yeTtcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0ludmVudG9yeSkge1xuICAgIHRoaXMuaGFuZGxlcyA9IGhhbmRsZXM7XG4gIH1cbiAgc3RhcnQoZW1pdHRlcjogRXZlbnRFbWl0dGVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgcnVuKGVtaXR0ZXIsIHRoaXMuaGFuZGxlcy50b3BpYyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
