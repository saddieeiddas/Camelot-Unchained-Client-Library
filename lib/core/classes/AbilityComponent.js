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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentBranch = function ComponentBranch() {
    _classCallCheck(this, ComponentBranch);
};

exports.ComponentBranch = ComponentBranch;

var AbilityComponent = (function () {
    function AbilityComponent() {
        var abilityComponent = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, AbilityComponent);

        this.id = abilityComponent.id || "";
        this.icon = abilityComponent.icon || "";
        this.cooldown = abilityComponent.cooldown || 0;
        this.duration = abilityComponent.duration || 0;
        this.name = abilityComponent.name || "";
        this.tooltip = abilityComponent.tooltip || "";
        this.abilityTags = abilityComponent.abilityTags || [];
        //....
    }

    _createClass(AbilityComponent, null, [{
        key: "create",
        value: function create() {
            var a = new AbilityComponent();
            return a;
        }
    }]);

    return AbilityComponent;
})();

exports.AbilityComponent = AbilityComponent;
exports["default"] = AbilityComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9BYmlsaXR5Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFiaWxpdHlDb21wb25lbnQiLCJBYmlsaXR5Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQWJpbGl0eUNvbXBvbmVudC5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQWFBLGVBQUEsWUFBQSxlQUFBOzBCQUFBLGVBQUE7Ozs7O0lBb0JBLGdCQUFBO0FBdUJFQSxhQXZCRixnQkFBQSxHQXVCcURBO1lBQXZDQSxnQkFBZ0JBLHlEQUFxQkEsRUFBRUE7OzhCQXZCckQsZ0JBQUE7O0FBd0JJQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxnQkFBZ0JBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBZ0JBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxnQkFBZ0JBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQy9DQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxnQkFBZ0JBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQy9DQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBZ0JBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBZ0JBLENBQUNBLE9BQU9BLElBQUlBLEVBQUVBLENBQUNBO0FBQzlDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxnQkFBZ0JBLENBQUNBLFdBQVdBLElBQW1CQSxFQUFFQSxDQUFDQTs7S0FHdEVBOztpQkFqQ0gsZ0JBQUE7O2VBbUNlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7QUFDL0JBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBdENILGdCQUFBOzs7O3FCQTBDZSxnQkFBZ0IiLCJmaWxlIjoiY29yZS9jbGFzc2VzL0FiaWxpdHlDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IGFiaWxpdHlUYWdzIGZyb20gJy4uL2NvbnN0YW50cy9hYmlsaXR5Q29uc3RhbnRzL2FiaWxpdHlUYWdzJztcbmltcG9ydCBjb21wb25lbnRUeXBlIGZyb20gJy4uL2NvbnN0YW50cy9hYmlsaXR5Q29uc3RhbnRzL2NvbXBvbmVudFR5cGUnO1xuaW1wb3J0IGNvbXBvbmVudFBhdGggZnJvbSAnLi4vY29uc3RhbnRzL2FiaWxpdHlDb25zdGFudHMvY29tcG9uZW50UGF0aCc7XG5pbXBvcnQgY29tcG9uZW50U3ViVHlwZSBmcm9tICcuLi9jb25zdGFudHMvYWJpbGl0eUNvbnN0YW50cy9jb21wb25lbnRTdWJUeXBlJztcbmltcG9ydCBjb21wb25lbnRCcmFuY2hTdGF0ZSBmcm9tICcuLi9jb25zdGFudHMvYWJpbGl0eUNvbnN0YW50cy9jb21wb25lbnRCcmFuY2hTdGF0ZSc7XG5pbXBvcnQgc3RhdHMgZnJvbSAnLi9TdGF0cyc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRCcmFuY2gge1xuICAgIHBhcnRzOiBhbnlbXTtcbiAgICBzdGF0ZTogY29tcG9uZW50QnJhbmNoU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50U2xvdCB7XG4gICAgdHlwZTogY29tcG9uZW50VHlwZTtcbiAgICBzdWJUeXBlOiBjb21wb25lbnRTdWJUeXBlO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgcGFyZW50czogQ29tcG9uZW50U2xvdFtdO1xuICAgIGNoaWxkcmVuOiBDb21wb25lbnRTbG90W107XG4gICAgYnJhbmNoOiBDb21wb25lbnRCcmFuY2g7XG4gICAgY29tcG9uZW50OiBBYmlsaXR5Q29tcG9uZW50O1xuICAgIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdG9vbHRpcDogc3RyaW5nO1xuICAgIG9yaWdpbmFsU3ViVHlwZTogY29tcG9uZW50U3ViVHlwZTsgXG4gICAgcXVldWVkQW5pbWF0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBYmlsaXR5Q29tcG9uZW50IHtcblxuICBjb29sZG93bjogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB0b29sdGlwOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGJhc2VDb21wb25lbnRJRDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgdHlwZTogY29tcG9uZW50VHlwZTtcbiAgc3ViVHlwZTogY29tcG9uZW50U3ViVHlwZTtcbiAgcGF0aDogY29tcG9uZW50UGF0aDtcbiAgYWJpbGxpdHlTdGF0czogc3RhdHM7IC8vVE9ETyB1c2UgU3RhdHMgZnJvbSBDaGFyYWN0ZXIgP++/vVxuICBhYmlsaXR5VGFnczogYWJpbGl0eVRhZ3NbXTtcbiAgLy90YWdDb25zdHJhaW50czogQXJyYXk8VGFnQ29uc3RyYWludD47XG4gIHNsb3Q6IENvbXBvbmVudFNsb3Q7XG4gIHJhbms6IG51bWJlcjtcbiAgaXNUcmFpbmVkOiBib29sZWFuO1xuICBpc0hhbHRlZDogYm9vbGVhbjtcbiAgICBcbiAgICBcblxuICBjb25zdHJ1Y3RvcihhYmlsaXR5Q29tcG9uZW50ID0gPEFiaWxpdHlDb21wb25lbnQ+e30pIHtcbiAgICB0aGlzLmlkID0gYWJpbGl0eUNvbXBvbmVudC5pZCB8fCBcIlwiO1xuICAgIHRoaXMuaWNvbiA9IGFiaWxpdHlDb21wb25lbnQuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29vbGRvd24gPSBhYmlsaXR5Q29tcG9uZW50LmNvb2xkb3duIHx8IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGFiaWxpdHlDb21wb25lbnQuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBhYmlsaXR5Q29tcG9uZW50Lm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnRvb2x0aXAgPSBhYmlsaXR5Q29tcG9uZW50LnRvb2x0aXAgfHwgXCJcIjtcbiAgICB0aGlzLmFiaWxpdHlUYWdzID0gYWJpbGl0eUNvbXBvbmVudC5hYmlsaXR5VGFncyB8fCA8YWJpbGl0eVRhZ3NbXT5bXTtcbiAgICAgIC8vLi4uLlxuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEFiaWxpdHlDb21wb25lbnQoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFiaWxpdHlDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
