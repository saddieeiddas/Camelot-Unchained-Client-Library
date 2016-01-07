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

var _coreClassesCombatant = require('../../core/classes/Combatant');

var _coreClassesCombatant2 = _interopRequireDefault(_coreClassesCombatant);

var _coreClassesPlayer = require('../../core/classes/Player');

var _coreClassesPlayer2 = _interopRequireDefault(_coreClassesPlayer);

var _coreClient = require('../../core/client');

var _coreClient2 = _interopRequireDefault(_coreClient);

function run(emitter, topic) {
    var info = {};
    var instance = undefined;
    // Event receivers
    function nameChanged(name) {
        if (name === "") {
            instance.reset(); // reset if no target
        }
        instance.setName(name);
        emitter.emit(topic, instance);
    }
    function raceChanged(race) {
        instance.setRace(race);
        emitter.emit(topic, instance);
    }
    function healthChanged(health, maxHealth) {
        instance.setHealth(health, maxHealth);
        emitter.emit(topic, instance);
    }
    function staminaChanged(stamina, maxStamina) {
        instance.setStamina(stamina, maxStamina);
        emitter.emit(topic, instance);
    }
    function injuriesChanged(part, health, maxHealth, wounds) {
        if (instance.name) {
            instance.setInjury(part, health, maxHealth, wounds);
            emitter.emit(topic, instance);
        }
    }
    // Hook up event receivers to the relevant cuAPI methods
    switch (topic) {
        case 'character':
            instance = new _coreClassesPlayer2['default']({});
            _coreClient2['default'].OnCharacterNameChanged(nameChanged);
            _coreClient2['default'].OnCharacterRaceChanged(raceChanged);
            _coreClient2['default'].OnCharacterHealthChanged(healthChanged);
            _coreClient2['default'].OnCharacterStaminaChanged(staminaChanged);
            _coreClient2['default'].OnCharacterInjuriesChanged(injuriesChanged);
            break;
        case 'enemytarget':
            instance = new _coreClassesCombatant2['default']({});
            _coreClient2['default'].OnEnemyTargetNameChanged(nameChanged);
            _coreClient2['default'].OnEnemyTargetHealthChanged(healthChanged);
            _coreClient2['default'].OnEnemyTargetStaminaChanged(staminaChanged);
            _coreClient2['default'].OnEnemyTargetInjuriesChanged(injuriesChanged);
            break;
        case 'friendlytarget':
            instance = new _coreClassesCombatant2['default']({});
            _coreClient2['default'].OnFriendlyTargetNameChanged(nameChanged);
            _coreClient2['default'].OnFriendlyTargetHealthChanged(healthChanged);
            _coreClient2['default'].OnFriendlyTargetStaminaChanged(staminaChanged);
            _coreClient2['default'].OnFriendlyTargetInjuriesChanged(injuriesChanged);
            break;
    }
}

var UnitFrameListener = (function () {
    function UnitFrameListener(handles) {
        _classCallCheck(this, UnitFrameListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(UnitFrameListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.topic);
            }
        }
    }]);

    return UnitFrameListener;
})();

exports['default'] = UnitFrameListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvX1VuaXRGcmFtZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4ubmFtZUNoYW5nZWQiLCJydW4ucmFjZUNoYW5nZWQiLCJydW4uaGVhbHRoQ2hhbmdlZCIsInJ1bi5zdGFtaW5hQ2hhbmdlZCIsInJ1bi5pbmp1cmllc0NoYW5nZWQiLCJVbml0RnJhbWVMaXN0ZW5lciIsIlVuaXRGcmFtZUxpc3RlbmVyLmNvbnN0cnVjdG9yIiwiVW5pdEZyYW1lTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQU9zQiw4QkFBOEI7Ozs7aUNBQ2pDLDJCQUEyQjs7OzswQkFFM0IsbUJBQW1COzs7O0FBRXRDLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxRQUFNQSxJQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTtBQUNyQkEsUUFBSUEsUUFBbUJBLFlBQUFBLENBQUNBOztBQUd4QkEsYUFBQUEsV0FBQUEsQ0FBcUJBLElBQVlBLEVBQUFBO0FBQy9CQyxZQUFJQSxJQUFJQSxLQUFLQSxFQUFFQSxFQUFFQTtBQUNmQSxvQkFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7U0FDbEJBO0FBQ0RBLGdCQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN2QkEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7S0FDL0JBO0FBRURELGFBQUFBLFdBQUFBLENBQXFCQSxJQUFVQSxFQUFBQTtBQUM3QkUsZ0JBQVFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZCQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtLQUMvQkE7QUFFREYsYUFBQUEsYUFBQUEsQ0FBdUJBLE1BQWNBLEVBQUVBLFNBQWlCQSxFQUFBQTtBQUN0REcsZ0JBQVFBLENB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QTthQUMxQkE7U0FDRkE7OztXQVhILGlCQUFBOzs7cUJBQUEsaUJBQUEiLCJmaWxlIjoiZXZlbnRzL2xpc3RlbmVycy9fVW5pdEZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IENvbWJhdGFudCBmcm9tICcuLi8uLi9jb3JlL2NsYXNzZXMvQ29tYmF0YW50JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vLi4vY29yZS9jbGFzc2VzL1BsYXllcic7XG5pbXBvcnQgcmFjZSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY29yZS9jbGllbnQnO1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyLCB0b3BpYzogc3RyaW5nKSB7XG4gIGNvbnN0IGluZm86IGFueSA9IHt9O1xuICBsZXQgaW5zdGFuY2U6IENvbWJhdGFudDtcblxuICAvLyBFdmVudCByZWNlaXZlcnNcbiAgZnVuY3Rpb24gbmFtZUNoYW5nZWQobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcbiAgICAgIGluc3RhbmNlLnJlc2V0KCk7ICAgICAgICAgICAgIC8vIHJlc2V0IGlmIG5vIHRhcmdldFxuICAgIH1cbiAgICBpbnN0YW5jZS5zZXROYW1lKG5hbWUpO1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFjZUNoYW5nZWQocmFjZTogcmFjZSkge1xuICAgIGluc3RhbmNlLnNldFJhY2UocmFjZSk7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoZWFsdGhDaGFuZ2VkKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikge1xuICAgIGluc3RhbmNlLnNldEhlYWx0aChoZWFsdGgsIG1heEhlYWx0aCk7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFtaW5hQ2hhbmdlZChzdGFtaW5hOiBudW1iZXIsIG1heFN0YW1pbmE6IG51bWJlcikge1xuICAgIGluc3RhbmNlLnNldFN0YW1pbmEoc3RhbWluYSwgbWF4U3RhbWluYSk7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmp1cmllc0NoYW5nZWQocGFydDogbnVtYmVyLCBoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIsIHdvdW5kczogbnVtYmVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIGluc3RhbmNlLnNldEluanVyeShwYXJ0LCBoZWFsdGgsIG1heEhlYWx0aCwgd291bmRzKTtcbiAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvb2sgdXAgZXZlbnQgcmVjZWl2ZXJzIHRvIHRoZSByZWxldmFudCBjdUFQSSBtZXRob2RzXG4gIHN3aXRjaCAodG9waWMpIHtcbiAgICBjYXNlICdjaGFyYWN0ZXInOlxuICAgICAgaW5zdGFuY2UgPSBuZXcgUGxheWVyKDxQbGF5ZXI+e30pO1xuICAgICAgY2xpZW50Lk9uQ2hhcmFjdGVyTmFtZUNoYW5nZWQobmFtZUNoYW5nZWQpO1xuICAgICAgY2xpZW50Lk9uQ2hhcmFjdGVyUmFjZUNoYW5nZWQocmFjZUNoYW5nZWQpO1xuICAgICAgY2xpZW50Lk9uQ2hhcmFjdGVySGVhbHRoQ2hhbmdlZChoZWFsdGhDaGFuZ2VkKTtcbiAgICAgIGNsaWVudC5PbkNoYXJhY3RlclN0YW1pbmFDaGFuZ2VkKHN0YW1pbmFDaGFuZ2VkKTtcbiAgICAgIGNsaWVudC5PbkNoYXJhY3RlckluanVyaWVzQ2hhbmdlZChpbmp1cmllc0NoYW5nZWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5lbXl0YXJnZXQnOlxuICAgICAgaW5zdGFuY2UgPSBuZXcgQ29tYmF0YW50KDxDb21iYXRhbnQ+e30pO1xuICAgICAgY2xpZW50Lk9uRW5lbXlUYXJnZXROYW1lQ2hhbmdlZChuYW1lQ2hhbmdlZCk7XG4gICAgICBjbGllbnQuT25FbmVteVRhcmdldEhlYWx0aENoYW5nZWQoaGVhbHRoQ2hhbmdlZCk7XG4gICAgICBjbGllbnQuT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkKHN0YW1pbmFDaGFuZ2VkKTtcbiAgICAgIGNsaWVudC5PbkVuZW15VGFyZ2V0SW5qdXJpZXNDaGFuZ2VkKGluanVyaWVzQ2hhbmdlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmcmllbmRseXRhcmdldCc6XG4gICAgICBpbnN0YW5jZSA9IG5ldyBDb21iYXRhbnQoPENvbWJhdGFudD57fSk7XG4gICAgICBjbGllbnQuT25GcmllbmRseVRhcmdldE5hbWVDaGFuZ2VkKG5hbWVDaGFuZ2VkKTtcbiAgICAgIGNsaWVudC5PbkZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZChoZWFsdGhDaGFuZ2VkKTtcbiAgICAgIGNsaWVudC5PbkZyaWVuZGx5VGFyZ2V0U3RhbWluYUNoYW5nZWQoc3RhbWluYUNoYW5nZWQpO1xuICAgICAgY2xpZW50Lk9uRnJpZW5kbHlUYXJnZXRJbmp1cmllc0NoYW5nZWQoaW5qdXJpZXNDaGFuZ2VkKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXRGcmFtZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IGFueSkge1xuICAgIHRoaXMudG9waWMgPSBoYW5kbGVzLnRvcGljO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLnRvcGljKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
