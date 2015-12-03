"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ability = (function () {
    function Ability() {
        var ability = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Ability);

        this.cooldowns = [];
        this.buttons = [];
        this.awaitingUpdate = null;
        this.id = ability.id || "";
        this.icon = ability.icon || "";
        this.cooldowns = ability.cooldowns || [];
        this.duration = ability.duration || 0;
        this.triggerTimeOffset = ability.triggerTimeOffset || 0;
        this.name = ability.name || "";
        this.tooltip = ability.tooltip || "";
        this.buttons = ability.buttons || [];
        this.awaitingUpdate = ability.awaitingUpdate || null;
        this.abilityComponents = ability.abilityComponents || [];
    }

    _createClass(Ability, null, [{
        key: "create",
        value: function create() {
            var a = new Ability();
            return a;
        }
    }]);

    return Ability;
})();

exports["default"] = Ability;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQWJpbGl0eS50cyJdLCJuYW1lcyI6WyJBYmlsaXR5IiwiQWJpbGl0eS5jb25zdHJ1Y3RvciIsIkFiaWxpdHkuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTUEsT0FBQTtBQWNFQSxhQWRGLE9BQUEsR0FjbUNBO1lBQXJCQSxPQUFPQSx5REFBWUEsRUFBRUE7OzhCQWRuQyxPQUFBOztBQUdFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFVQSxFQUFFQSxDQUFDQTtBQVF0QkEsWUFBQUEsQ0FBQUEsT0FBT0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFDcEJBLFlBQUFBLENBQUFBLGNBQWNBLEdBQTRCQSxJQUFJQSxDQUFDQTtBQUc3Q0EsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsT0FBT0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDM0JBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUN6Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDL0JBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLElBQUlBLEVBQUVBLENBQUNBO0FBQ3JDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNyQ0EsWUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsT0FBT0EsQ0FBQ0EsY0FBY0EsSUFBSUEsSUFBSUEsQ0FBQ0E7QUFDckRBLFlBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxJQUF5QkEsRUFBRUEsQ0FBQ0E7S0FDL0VBOztpQkF6QkgsT0FBQTs7ZUEyQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsT0FBT0EsRUFBRUEsQ0FBQ0E7QUFDdEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBOUJILE9BQUE7OztxQkFrQ2UsT0FBTyIsImZpbGUiOiJ0cy9jbGFzc2VzL0FiaWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBBYmlsaXR5Q29tcG9uZW50IGZyb20gJy4vQWJpbGl0eUNvbXBvbmVudCc7XG5jbGFzcyBBYmlsaXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb29sZG93bnM6IGFueVtdID0gW107XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHRyaWdnZXJUaW1lT2Zmc2V0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgdG9vbHRpcDogc3RyaW5nO1xuICAgIFxuICBhYmlsaXR5Q29tcG9uZW50czogQWJpbGl0eUNvbXBvbmVudFtdO1xuXG4gIGJ1dHRvbnM6IGFueVtdID0gW107XG4gIGF3YWl0aW5nVXBkYXRlOiB7IChhOiBBYmlsaXR5KTogYW55IH1bXSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYWJpbGl0eSA9IDxBYmlsaXR5Pnt9KSB7XG4gICAgdGhpcy5pZCA9IGFiaWxpdHkuaWQgfHwgXCJcIjtcbiAgICB0aGlzLmljb24gPSBhYmlsaXR5Lmljb24gfHwgXCJcIjtcbiAgICB0aGlzLmNvb2xkb3ducyA9IGFiaWxpdHkuY29vbGRvd25zIHx8IFtdO1xuICAgIHRoaXMuZHVyYXRpb24gPSBhYmlsaXR5LmR1cmF0aW9uIHx8IDA7XG4gICAgdGhpcy50cmlnZ2VyVGltZU9mZnNldCA9IGFiaWxpdHkudHJpZ2dlclRpbWVPZmZzZXQgfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBhYmlsaXR5Lm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnRvb2x0aXAgPSBhYmlsaXR5LnRvb2x0aXAgfHwgXCJcIjtcbiAgICB0aGlzLmJ1dHRvbnMgPSBhYmlsaXR5LmJ1dHRvbnMgfHwgW107XG4gICAgdGhpcy5hd2FpdGluZ1VwZGF0ZSA9IGFiaWxpdHkuYXdhaXRpbmdVcGRhdGUgfHwgbnVsbDtcbiAgICB0aGlzLmFiaWxpdHlDb21wb25lbnRzID0gYWJpbGl0eS5hYmlsaXR5Q29tcG9uZW50cyB8fCAgPEFiaWxpdHlDb21wb25lbnRbXT5bXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQWJpbGl0eSgpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0eTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
