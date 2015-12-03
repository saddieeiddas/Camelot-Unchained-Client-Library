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

var _classesCombatant = require('../../classes/Combatant');

var _classesCombatant2 = _interopRequireDefault(_classesCombatant);

var _classesPlayer = require('../../classes/Player');

var _classesPlayer2 = _interopRequireDefault(_classesPlayer);

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
            instance = new _classesPlayer2['default']({});
            cuAPI.OnCharacterNameChanged(nameChanged);
            cuAPI.OnCharacterRaceChanged(raceChanged);
            cuAPI.OnCharacterHealthChanged(healthChanged);
            cuAPI.OnCharacterStaminaChanged(staminaChanged);
            cuAPI.OnCharacterInjuriesChanged(injuriesChanged);
            break;
        case 'enemytarget':
            instance = new _classesCombatant2['default']({});
            cuAPI.OnEnemyTargetNameChanged(nameChanged);
            cuAPI.OnEnemyTargetHealthChanged(healthChanged);
            cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
            cuAPI.OnEnemyTargetInjuriesChanged(injuriesChanged);
            break;
        case 'friendlytarget':
            instance = new _classesCombatant2['default']({});
            cuAPI.OnFriendlyTargetNameChanged(nameChanged);
            cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
            cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
            cuAPI.OnFriendlyTargetInjuriesChanged(injuriesChanged);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9saXN0ZW5lcnMvX1VuaXRGcmFtZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4ubmFtZUNoYW5nZWQiLCJydW4ucmFjZUNoYW5nZWQiLCJydW4uaGVhbHRoQ2hhbmdlZCIsInJ1bi5zdGFtaW5hQ2hhbmdlZCIsInJ1bi5pbmp1cmllc0NoYW5nZWQiLCJVbml0RnJhbWVMaXN0ZW5lciIsIlVuaXRGcmFtZUxpc3RlbmVyLmNvbnN0cnVjdG9yIiwiVW5pdEZyYW1lTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU9zQix5QkFBeUI7Ozs7NkJBQzVCLHNCQUFzQjs7OztBQUl6QyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBTUEsSUFBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7QUFDckJBLFFBQUlBLFFBQW1CQSxZQUFBQSxDQUFDQTs7QUFHeEJBLGFBQUFBLFdBQUFBLENBQXFCQSxJQUFZQSxFQUFBQTtBQUMvQkMsWUFBSUEsSUFBSUEsS0FBS0EsRUFBRUEsRUFBRUE7QUFDZkEsb0JBQVFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1NBQ2xCQTtBQUNEQSxnQkFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkJBLGVBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0tBQy9CQTtBQUVERCxhQUFBQSxXQUFBQSxDQUFxQkEsSUFBVUEsRUFBQUE7QUFDN0JFLGdCQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN2QkEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7S0FDL0JBO0FBRURGLGFBQUFBLGFBQUFBLENBQXVCQSxNQUFjQSxFQUFFQSxTQUFpQkEsRUFBQUE7QUFDdERHLGdCQUFRQSxDQUFDQSxTQUFTQSxDQUFD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QUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDMUJBO1NBQ0ZBOzs7V0FYSCxpQkFBQTs7O3FCQUFBLGlCQUFBIiwiZmlsZSI6InRzL2V2ZW50cy9saXN0ZW5lcnMvX1VuaXRGcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi4vLi4vY2xhc3Nlcy9Db21iYXRhbnQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi8uLi9jbGFzc2VzL1BsYXllcic7XG5pbXBvcnQgcmFjZSBmcm9tICcuLi8uLi9jb25zdGFudHMvcmFjZSc7XG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5mbzogYW55ID0ge307XG4gIGxldCBpbnN0YW5jZTogQ29tYmF0YW50O1xuXG4gIC8vIEV2ZW50IHJlY2VpdmVyc1xuICBmdW5jdGlvbiBuYW1lQ2hhbmdlZChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJcIikge1xuICAgICAgaW5zdGFuY2UucmVzZXQoKTsgICAgICAgICAgICAgLy8gcmVzZXQgaWYgbm8gdGFyZ2V0XG4gICAgfVxuICAgIGluc3RhbmNlLnNldE5hbWUobmFtZSk7XG4gICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiByYWNlQ2hhbmdlZChyYWNlOiByYWNlKSB7XG4gICAgaW5zdGFuY2Uuc2V0UmFjZShyYWNlKTtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWx0aENoYW5nZWQoaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyKSB7XG4gICAgaW5zdGFuY2Uuc2V0SGVhbHRoKGhlYWx0aCwgbWF4SGVhbHRoKTtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YW1pbmFDaGFuZ2VkKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSB7XG4gICAgaW5zdGFuY2Uuc2V0U3RhbWluYShzdGFtaW5hLCBtYXhTdGFtaW5hKTtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluanVyaWVzQ2hhbmdlZChwYXJ0OiBudW1iZXIsIGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlciwgd291bmRzOiBudW1iZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0SW5qdXJ5KHBhcnQsIGhlYWx0aCwgbWF4SGVhbHRoLCB3b3VuZHMpO1xuICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSG9vayB1cCBldmVudCByZWNlaXZlcnMgdG8gdGhlIHJlbGV2YW50IGN1QVBJIG1ldGhvZHNcbiAgc3dpdGNoICh0b3BpYykge1xuICAgIGNhc2UgJ2NoYXJhY3Rlcic6XG4gICAgICBpbnN0YW5jZSA9IG5ldyBQbGF5ZXIoPFBsYXllcj57fSk7XG4gICAgICBjdUFQSS5PbkNoYXJhY3Rlck5hbWVDaGFuZ2VkKG5hbWVDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uQ2hhcmFjdGVyUmFjZUNoYW5nZWQocmFjZUNoYW5nZWQpO1xuICAgICAgY3VBUEkuT25DaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkKGhlYWx0aENoYW5nZWQpO1xuICAgICAgY3VBUEkuT25DaGFyYWN0ZXJTdGFtaW5hQ2hhbmdlZChzdGFtaW5hQ2hhbmdlZCk7XG4gICAgICBjdUFQSS5PbkNoYXJhY3RlckluanVyaWVzQ2hhbmdlZChpbmp1cmllc0NoYW5nZWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5lbXl0YXJnZXQnOlxuICAgICAgaW5zdGFuY2UgPSBuZXcgQ29tYmF0YW50KDxDb21iYXRhbnQ+e30pO1xuICAgICAgY3VBUEkuT25FbmVteVRhcmdldE5hbWVDaGFuZ2VkKG5hbWVDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uRW5lbXlUYXJnZXRIZWFsdGhDaGFuZ2VkKGhlYWx0aENoYW5nZWQpO1xuICAgICAgY3VBUEkuT25FbmVteVRhcmdldFN0YW1pbmFDaGFuZ2VkKHN0YW1pbmFDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uRW5lbXlUYXJnZXRJbmp1cmllc0NoYW5nZWQoaW5qdXJpZXNDaGFuZ2VkKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ZyaWVuZGx5dGFyZ2V0JzpcbiAgICAgIGluc3RhbmNlID0gbmV3IENvbWJhdGFudCg8Q29tYmF0YW50Pnt9KTtcbiAgICAgIGN1QVBJLk9uRnJpZW5kbHlUYXJnZXROYW1lQ2hhbmdlZChuYW1lQ2hhbmdlZCk7XG4gICAgICBjdUFQSS5PbkZyaWVuZGx5VGFyZ2V0SGVhbHRoQ2hhbmdlZChoZWFsdGhDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uRnJpZW5kbHlUYXJnZXRTdGFtaW5hQ2hhbmdlZChzdGFtaW5hQ2hhbmdlZCk7XG4gICAgICBjdUFQSS5PbkZyaWVuZGx5VGFyZ2V0SW5qdXJpZXNDaGFuZ2VkKGluanVyaWVzQ2hhbmdlZCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml0RnJhbWVMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0b3BpYzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBhbnkpIHtcbiAgICB0aGlzLnRvcGljID0gaGFuZGxlcy50b3BpYztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
