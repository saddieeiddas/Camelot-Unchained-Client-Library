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

var _coreClassesEquippedGear = require('../../core/classes/EquippedGear');

var _coreClassesEquippedGear2 = _interopRequireDefault(_coreClassesEquippedGear);

var _coreClassesItem = require('../../core/classes/Item');

var _coreClassesItem2 = _interopRequireDefault(_coreClassesItem);

function run(emitter, topic) {
    var equippedgear = new _coreClassesEquippedGear2['default']();
    var queue = [];
    _coreClient2['default'].OnItemEquipped(function (id) {
        queue.push(id);
        _coreClient2['default'].GetItem(id);
    });
    _coreClient2['default'].OnItemUnequipped(function (id) {
        equippedgear.removeItem(id);
        emitter.emit(topic, equippedgear);
    });
    _coreClient2['default'].OnEquippedGearItemIDsChanged(function (ids) {
        var existingItemIDs = equippedgear.getItemIDs();
        ids.forEach(function (id) {
            if (equippedgear.hasItem(id)) {
                existingItemIDs.splice(existingItemIDs.indexOf(id), 1);
            } else {
                queue.push(id);
            }
        });
        existingItemIDs.forEach(function (id) {
            equippedgear.removeItem(id);
        });
        if (queue.length > 0) {
            queue.forEach(function (id) {
                _coreClient2['default'].GetItem(id);
            });
        } else {
            emitter.emit(topic, equippedgear);
        }
    });
    _coreClient2['default'].OnGetItem(function (item) {
        item.id = item.itemID;
        if (queue.indexOf(item.id) >= 0) {
            queue.splice(queue.indexOf(item.id), 1);
            equippedgear.addItem(new _coreClassesItem2['default'](item));
            if (queue.length === 0) {
                emitter.emit(topic, equippedgear);
            }
        }
    });
}

var EquippedGearListener = (function () {
    function EquippedGearListener(handles) {
        _classCallCheck(this, EquippedGearListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(EquippedGearListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return EquippedGearListener;
})();

exports['default'] = EquippedGearListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvRXF1aXBwZWRHZWFyLnRzIl0sIm5hbWVzIjpbInJ1biIsIkVxdWlwcGVkR2Vhckxpc3RlbmVyIiwiRXF1aXBwZWRHZWFyTGlzdGVuZXIuY29uc3RydWN0b3IiLCJFcXVpcHBlZEdlYXJMaXN0ZW5lci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUW1CLG1CQUFtQjs7Ozt1Q0FDYixpQ0FBaUM7Ozs7K0JBQ3pDLHlCQUF5Qjs7OztBQUUxQyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBTUEsWUFBWUEsR0FBR0EsMENBQWtCQSxDQUFDQTtBQUN4Q0EsUUFBTUEsS0FBS0EsR0FBYUEsRUFBRUEsQ0FBQ0E7QUFDM0JBLDRCQUFPQSxjQUFjQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUMvQkEsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDZkEsZ0NBQU9BLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0tBQ3BCQSxDQUFDQSxDQUFDQTtBQUNIQSw0QkFBT0EsZ0JBQWdCQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUNqQ0Esb0JBQVlBLENBQUNBLFVBQVVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0FBQzVCQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtLQUNuQ0EsQ0FBQ0EsQ0FBQ0E7QUFDSEEsNEJBQU9BLDRCQUE0QkEsQ0FBQ0EsVUFBQ0EsR0FBYUEsRUFBQUE7QUFDaERBLFlBQU1BLGVBQWVBLEdBQUdBLFlBQVlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO0FBQ2xEQSxXQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxFQUFVQSxFQUFBQTtBQUNyQkEsZ0JBQUlBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBO0FBQzVCQSwrQkFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7YUFDeERBLE1BQU1BO0FBQ0xBLHFCQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTthQUNoQkE7U0FDRkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsdUJBQWVBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEVBQVVBLEVBQUFBO0FBQ2pDQSx3QkFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7U0FDN0JBLENBQUNBLENBQUNBO0FBQ0hBLFlBQUlBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBO0FBQ3BCQSxpQkFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsRUFBVUEsRUFBQUE7QUFDdkJBLHdDQUFPQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTthQUNwQkEsQ0FBQ0EsQ0FBQ0E7U0FDSkEsTUFBTUE7QUFDTEEsbUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO1NBQ25DQTtLQUNGQSxDQUFDQSxDQUFDQTtBQUNIQSw0QkFBT0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0EsRUFBQUE7QUFDekJBLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0FBQ3RCQSxZQUFJQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQTtBQUMvQkEsaUJBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0FBQ3hDQSx3QkFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUNBQVNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0FBQ3JDQSxnQkFBSUEsS0FBS0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsRUFBRUE7QUFDdEJBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTthQUNuQ0E7U0FDRkE7S0FDRkEsQ0FBQ0EsQ0FBQ0E7Q0FDSkE7O0lBRUQsb0JBQUE7QUFJRUMsYUFKRixvQkFBQSxDQUljQSxPQUE0QkEsRUFBQUE7OEJBSjFDLG9CQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUl6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7S0FDeEJBOztpQkFOSCxvQkFBQTs7ZUFPT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQ2xDQTtTQUNGQTs7O1dBWkgsb0JBQUE7OztxQkFBQSxvQkFBQSIsImZpbGUiOiJldmVudHMvbGlzdGVuZXJzL0VxdWlwcGVkR2Vhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBIYW5kbGVzRXF1aXBwZWRHZWFyIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0VxdWlwcGVkR2Vhcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NvcmUvY2xpZW50JztcbmltcG9ydCBFcXVpcHBlZEdlYXIgZnJvbSAnLi4vLi4vY29yZS9jbGFzc2VzL0VxdWlwcGVkR2Vhcic7XG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvSXRlbSc7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgY29uc3QgZXF1aXBwZWRnZWFyID0gbmV3IEVxdWlwcGVkR2VhcigpO1xuICBjb25zdCBxdWV1ZTogc3RyaW5nW10gPSBbXTtcbiAgY2xpZW50Lk9uSXRlbUVxdWlwcGVkKChpZDogc3RyaW5nKSA9PiB7XG4gICAgcXVldWUucHVzaChpZCk7XG4gICAgY2xpZW50LkdldEl0ZW0oaWQpO1xuICB9KTtcbiAgY2xpZW50Lk9uSXRlbVVuZXF1aXBwZWQoKGlkOiBzdHJpbmcpID0+IHtcbiAgICBlcXVpcHBlZGdlYXIucmVtb3ZlSXRlbShpZCk7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBlcXVpcHBlZGdlYXIpO1xuICB9KTtcbiAgY2xpZW50Lk9uRXF1aXBwZWRHZWFySXRlbUlEc0NoYW5nZWQoKGlkczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1JRHMgPSBlcXVpcHBlZGdlYXIuZ2V0SXRlbUlEcygpO1xuICAgIGlkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoZXF1aXBwZWRnZWFyLmhhc0l0ZW0oaWQpKSB7XG4gICAgICAgIGV4aXN0aW5nSXRlbUlEcy5zcGxpY2UoZXhpc3RpbmdJdGVtSURzLmluZGV4T2YoaWQpLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4aXN0aW5nSXRlbUlEcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICBlcXVpcHBlZGdlYXIucmVtb3ZlSXRlbShpZCk7XG4gICAgfSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXVlLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY2xpZW50LkdldEl0ZW0oaWQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgZXF1aXBwZWRnZWFyKTtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQuT25HZXRJdGVtKChpdGVtOiBhbnkpID0+IHtcbiAgICBpdGVtLmlkID0gaXRlbS5pdGVtSUQ7XG4gICAgaWYgKHF1ZXVlLmluZGV4T2YoaXRlbS5pZCkgPj0gMCkge1xuICAgICAgcXVldWUuc3BsaWNlKHF1ZXVlLmluZGV4T2YoaXRlbS5pZCksIDEpO1xuICAgICAgZXF1aXBwZWRnZWFyLmFkZEl0ZW0obmV3IEl0ZW0oaXRlbSkpO1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGVxdWlwcGVkZ2Vhcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1aXBwZWRHZWFyTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdHlwZTogc3RyaW5nO1xuICBoYW5kbGVzOiBIYW5kbGVzRXF1aXBwZWRHZWFyO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzRXF1aXBwZWRHZWFyKSB7XG4gICAgdGhpcy5oYW5kbGVzID0gaGFuZGxlcztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy5oYW5kbGVzLnRvcGljKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
