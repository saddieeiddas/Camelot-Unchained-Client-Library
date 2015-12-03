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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQWJpbGl0eUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBYmlsaXR5Q29tcG9uZW50IiwiQWJpbGl0eUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFiaWxpdHlDb21wb25lbnQuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFhQSxlQUFBLFlBQUEsZUFBQTswQkFBQSxlQUFBOzs7OztJQW9CQSxnQkFBQTtBQXVCRUEsYUF2QkYsZ0JBQUEsR0F1QnFEQTtZQUF2Q0EsZ0JBQWdCQSx5REFBcUJBLEVBQUVBOzs4QkF2QnJELGdCQUFBOztBQXdCSUMsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMvQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMvQ0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUM5Q0EsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxXQUFXQSxJQUFtQkEsRUFBRUEsQ0FBQ0E7O0tBR3RFQTs7aUJBakNILGdCQUFBOztlQW1DZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLEVBQUVBLENBQUNBO0FBQy9CQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXRDSCxnQkFBQTs7OztxQkEwQ2UsZ0JBQWdCIiwiZmlsZSI6InRzL2NsYXNzZXMvQWJpbGl0eUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgYWJpbGl0eVRhZ3MgZnJvbSAnLi4vY29uc3RhbnRzL2FiaWxpdHlDb25zdGFudHMvYWJpbGl0eVRhZ3MnO1xuaW1wb3J0IGNvbXBvbmVudFR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2FiaWxpdHlDb25zdGFudHMvY29tcG9uZW50VHlwZSc7XG5pbXBvcnQgY29tcG9uZW50UGF0aCBmcm9tICcuLi9jb25zdGFudHMvYWJpbGl0eUNvbnN0YW50cy9jb21wb25lbnRQYXRoJztcbmltcG9ydCBjb21wb25lbnRTdWJUeXBlIGZyb20gJy4uL2NvbnN0YW50cy9hYmlsaXR5Q29uc3RhbnRzL2NvbXBvbmVudFN1YlR5cGUnO1xuaW1wb3J0IGNvbXBvbmVudEJyYW5jaFN0YXRlIGZyb20gJy4uL2NvbnN0YW50cy9hYmlsaXR5Q29uc3RhbnRzL2NvbXBvbmVudEJyYW5jaFN0YXRlJztcbmltcG9ydCBzdGF0cyBmcm9tICcuL1N0YXRzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEJyYW5jaCB7XG4gICAgcGFydHM6IGFueVtdO1xuICAgIHN0YXRlOiBjb21wb25lbnRCcmFuY2hTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRTbG90IHtcbiAgICB0eXBlOiBjb21wb25lbnRUeXBlO1xuICAgIHN1YlR5cGU6IGNvbXBvbmVudFN1YlR5cGU7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBwYXJlbnRzOiBDb21wb25lbnRTbG90W107XG4gICAgY2hpbGRyZW46IENvbXBvbmVudFNsb3RbXTtcbiAgICBicmFuY2g6IENvbXBvbmVudEJyYW5jaDtcbiAgICBjb21wb25lbnQ6IEFiaWxpdHlDb21wb25lbnQ7XG4gICAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0b29sdGlwOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxTdWJUeXBlOiBjb21wb25lbnRTdWJUeXBlOyBcbiAgICBxdWV1ZWRBbmltYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFiaWxpdHlDb21wb25lbnQge1xuXG4gIGNvb2xkb3duOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgYmFzZUNvbXBvbmVudElEOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICB0eXBlOiBjb21wb25lbnRUeXBlO1xuICBzdWJUeXBlOiBjb21wb25lbnRTdWJUeXBlO1xuICBwYXRoOiBjb21wb25lbnRQYXRoO1xuICBhYmlsbGl0eVN0YXRzOiBzdGF0czsgLy9UT0RPIHVzZSBTdGF0cyBmcm9tIENoYXJhY3RlciA/77+9XG4gIGFiaWxpdHlUYWdzOiBhYmlsaXR5VGFnc1tdO1xuICAvL3RhZ0NvbnN0cmFpbnRzOiBBcnJheTxUYWdDb25zdHJhaW50PjtcbiAgc2xvdDogQ29tcG9uZW50U2xvdDtcbiAgcmFuazogbnVtYmVyO1xuICBpc1RyYWluZWQ6IGJvb2xlYW47XG4gIGlzSGFsdGVkOiBib29sZWFuO1xuICAgIFxuICAgIFxuXG4gIGNvbnN0cnVjdG9yKGFiaWxpdHlDb21wb25lbnQgPSA8QWJpbGl0eUNvbXBvbmVudD57fSkge1xuICAgIHRoaXMuaWQgPSBhYmlsaXR5Q29tcG9uZW50LmlkIHx8IFwiXCI7XG4gICAgdGhpcy5pY29uID0gYWJpbGl0eUNvbXBvbmVudC5pY29uIHx8IFwiXCI7XG4gICAgdGhpcy5jb29sZG93biA9IGFiaWxpdHlDb21wb25lbnQuY29vbGRvd24gfHwgMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gYWJpbGl0eUNvbXBvbmVudC5kdXJhdGlvbiB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGFiaWxpdHlDb21wb25lbnQubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMudG9vbHRpcCA9IGFiaWxpdHlDb21wb25lbnQudG9vbHRpcCB8fCBcIlwiO1xuICAgIHRoaXMuYWJpbGl0eVRhZ3MgPSBhYmlsaXR5Q29tcG9uZW50LmFiaWxpdHlUYWdzIHx8IDxhYmlsaXR5VGFnc1tdPltdO1xuICAgICAgLy8uLi4uXG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQWJpbGl0eUNvbXBvbmVudCgpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0eUNvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
