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

var _constantsChannelId = require('../constants/channelId');

var _constantsChannelId2 = _interopRequireDefault(_constantsChannelId);

var _constantsBaneBoonCategory = require('../constants/baneBoonCategory');

var _constantsBaneBoonCategory2 = _interopRequireDefault(_constantsBaneBoonCategory);

var BaneBoon = (function () {
    function BaneBoon() {
        var boonbane = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, BaneBoon);

        this.id = boonbane.id || "";
        this.channelId = boonbane.channelId || _constantsChannelId2['default'].NONE;
        this.name = boonbane.name || "";
        this.description = boonbane.description || "";
        this.category = boonbane.category || _constantsBaneBoonCategory2['default'].NONE;
        this.categoryId = boonbane.categoryId || 0;
        this.icon = boonbane.icon || "";
        this.costPerRank = boonbane.costPerRank || 0;
        this.maxRanks = boonbane.maxRanks || 0;
        this.prerequisite = boonbane.prerequisite || "";
        this.x = boonbane.x || 0;
        this.y = boonbane.y || 0;
    }

    _createClass(BaneBoon, null, [{
        key: 'create',
        value: function create() {
            var a = new BaneBoon();
            return a;
        }
    }]);

    return BaneBoon;
})();

exports['default'] = BaneBoon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY2xhc3Nlcy9CYW5lQm9vbi50cyJdLCJuYW1lcyI6WyJCYW5lQm9vbiIsIkJhbmVCb29uLmNvbnN0cnVjdG9yIiwiQmFuZUJvb24uY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNc0Isd0JBQXdCOzs7O3lDQUNqQiwrQkFBK0I7Ozs7SUFFNUQsUUFBQTtBQWdCRUEsYUFoQkYsUUFBQSxHQWdCcUNBO1lBQXZCQSxRQUFRQSx5REFBYUEsRUFBRUE7OzhCQWhCckMsUUFBQTs7QUFpQklDLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQzVCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQSxTQUFTQSxJQUFJQSxnQ0FBVUEsSUFBSUEsQ0FBQ0E7QUFDdERBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxXQUFXQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUM5Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsUUFBUUEsSUFBS0EsdUNBQWlCQSxJQUFJQSxDQUFDQTtBQUM1REEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDM0NBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM3Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLFlBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFFBQVFBLENBQUNBLFlBQVlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FDMUJBOztpQkE3QkgsUUFBQTs7ZUErQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsUUFBUUEsRUFBRUEsQ0FBQ0E7QUFDdkJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBbENILFFBQUE7OztxQkFzQ2UsUUFBUSIsImZpbGUiOiJjb3JlL2NsYXNzZXMvQmFuZUJvb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IGNoYW5uZWxJZCBmcm9tICcuLi9jb25zdGFudHMvY2hhbm5lbElkJztcbmltcG9ydCBiYW5lQm9vbkNhdGVnb3J5IGZyb20gJy4uL2NvbnN0YW50cy9iYW5lQm9vbkNhdGVnb3J5JztcblxuY2xhc3MgQmFuZUJvb24gIHtcblxuICBpZDogc3RyaW5nO1xuICBjaGFubmVsSWQ6IGNoYW5uZWxJZDtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogYmFuZUJvb25DYXRlZ29yeTtcbiAgY2F0ZWdvcnlJZDogbnVtYmVyO1xuICBpY29uOiBzdHJpbmc7XG4gIGNvc3RQZXJSYW5rOiBudW1iZXI7XG4gIG1heFJhbmtzOiBudW1iZXI7XG4gIHByZXJlcXVpc2l0ZTogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKGJvb25iYW5lID0gPEJhbmVCb29uPnt9KSB7XG4gICAgdGhpcy5pZCA9IGJvb25iYW5lLmlkIHx8IFwiXCI7XG4gICAgdGhpcy5jaGFubmVsSWQgPSBib29uYmFuZS5jaGFubmVsSWQgfHwgY2hhbm5lbElkLk5PTkU7XG4gICAgdGhpcy5uYW1lID0gYm9vbmJhbmUubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBib29uYmFuZS5kZXNjcmlwdGlvbiB8fCBcIlwiO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBib29uYmFuZS5jYXRlZ29yeSB8fCAgYmFuZUJvb25DYXRlZ29yeS5OT05FO1xuICAgIHRoaXMuY2F0ZWdvcnlJZCA9IGJvb25iYW5lLmNhdGVnb3J5SWQgfHwgMDtcbiAgICB0aGlzLmljb24gPSBib29uYmFuZS5pY29uIHx8IFwiXCI7XG4gICAgdGhpcy5jb3N0UGVyUmFuayA9IGJvb25iYW5lLmNvc3RQZXJSYW5rIHx8IDA7XG4gICAgdGhpcy5tYXhSYW5rcyA9IGJvb25iYW5lLm1heFJhbmtzIHx8IDA7XG4gICAgdGhpcy5wcmVyZXF1aXNpdGUgPSBib29uYmFuZS5wcmVyZXF1aXNpdGUgfHwgXCJcIjtcbiAgICB0aGlzLnggPSBib29uYmFuZS54IHx8IDA7XG4gICAgdGhpcy55ID0gYm9vbmJhbmUueSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBCYW5lQm9vbigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuZUJvb247XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
