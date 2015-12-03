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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NsYXNzZXMvQmFuZUJvb24udHMiXSwibmFtZXMiOlsiQmFuZUJvb24iLCJCYW5lQm9vbi5jb25zdHJ1Y3RvciIsIkJhbmVCb29uLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXNCLHdCQUF3Qjs7Ozt5Q0FDakIsK0JBQStCOzs7O0lBRTVELFFBQUE7QUFnQkVBLGFBaEJGLFFBQUEsR0FnQnFDQTtZQUF2QkEsUUFBUUEseURBQWFBLEVBQUVBOzs4QkFoQnJDLFFBQUE7O0FBaUJJQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxRQUFRQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUM1QkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0EsU0FBU0EsSUFBSUEsZ0NBQVVBLElBQUlBLENBQUNBO0FBQ3REQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsV0FBV0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDOUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLFFBQVFBLElBQUtBLHVDQUFpQkEsSUFBSUEsQ0FBQ0E7QUFDNURBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFFBQVFBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzNDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDN0NBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZDQSxZQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxRQUFRQSxDQUFDQSxZQUFZQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDekJBLFlBQUlBLENBQUNBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0tBQzFCQTs7aUJBN0JILFFBQUE7O2VBK0JlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFFBQVFBLEVBQUVBLENBQUNBO0FBQ3ZCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWxDSCxRQUFBOzs7cUJBc0NlLFFBQVEiLCJmaWxlIjoidHMvY2xhc3Nlcy9CYW5lQm9vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgY2hhbm5lbElkIGZyb20gJy4uL2NvbnN0YW50cy9jaGFubmVsSWQnO1xuaW1wb3J0IGJhbmVCb29uQ2F0ZWdvcnkgZnJvbSAnLi4vY29uc3RhbnRzL2JhbmVCb29uQ2F0ZWdvcnknO1xuXG5jbGFzcyBCYW5lQm9vbiAge1xuXG4gIGlkOiBzdHJpbmc7XG4gIGNoYW5uZWxJZDogY2hhbm5lbElkO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBiYW5lQm9vbkNhdGVnb3J5O1xuICBjYXRlZ29yeUlkOiBudW1iZXI7XG4gIGljb246IHN0cmluZztcbiAgY29zdFBlclJhbms6IG51bWJlcjtcbiAgbWF4UmFua3M6IG51bWJlcjtcbiAgcHJlcmVxdWlzaXRlOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3IoYm9vbmJhbmUgPSA8QmFuZUJvb24+e30pIHtcbiAgICB0aGlzLmlkID0gYm9vbmJhbmUuaWQgfHwgXCJcIjtcbiAgICB0aGlzLmNoYW5uZWxJZCA9IGJvb25iYW5lLmNoYW5uZWxJZCB8fCBjaGFubmVsSWQuTk9ORTtcbiAgICB0aGlzLm5hbWUgPSBib29uYmFuZS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGJvb25iYW5lLmRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGJvb25iYW5lLmNhdGVnb3J5IHx8ICBiYW5lQm9vbkNhdGVnb3J5Lk5PTkU7XG4gICAgdGhpcy5jYXRlZ29yeUlkID0gYm9vbmJhbmUuY2F0ZWdvcnlJZCB8fCAwO1xuICAgIHRoaXMuaWNvbiA9IGJvb25iYW5lLmljb24gfHwgXCJcIjtcbiAgICB0aGlzLmNvc3RQZXJSYW5rID0gYm9vbmJhbmUuY29zdFBlclJhbmsgfHwgMDtcbiAgICB0aGlzLm1heFJhbmtzID0gYm9vbmJhbmUubWF4UmFua3MgfHwgMDtcbiAgICB0aGlzLnByZXJlcXVpc2l0ZSA9IGJvb25iYW5lLnByZXJlcXVpc2l0ZSB8fCBcIlwiO1xuICAgIHRoaXMueCA9IGJvb25iYW5lLnggfHwgMDtcbiAgICB0aGlzLnkgPSBib29uYmFuZS55IHx8IDA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEJhbmVCb29uKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5lQm9vbjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
