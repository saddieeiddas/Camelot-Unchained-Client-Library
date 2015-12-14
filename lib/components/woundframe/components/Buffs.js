/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _resourcesShapes = require('../resources/Shapes');

var _Svg = require('./Svg');

var buffIcons = (function () {
    function buffIcons(count) {
        _classCallCheck(this, buffIcons);

        this.size = 0;
        this.svg = [];
        this.state = [];
        if (count < 1) {
            console.log("Number of icons must be (1) or greater.");
            return;
        }
        this.size = count - 1;
        for (var i = this.size; i >= 0; i--) {
            this.setState(i, i == 2);
            this.svg.push(this.build(i));
        }
    }

    _createClass(buffIcons, [{
        key: 'build',
        value: function build(idx) {
            var icon = _resourcesShapes.icons[idx];
            var color = this.getState(idx) ? ['#19B24B', 'yellow'] : ['#202020', '#202020'];
            return React.createElement(_Svg.Svg, { "key": "icon" + idx, "id": "icon" + idx, "className": "icon", "stroke": color[1], "strokeML": "10", "color": color[0], "box": icon.box, "rect": icon.rect, "polygon": icon.polygon, "path": icon.path, "circle": icon.circle });
        }
    }, {
        key: 'checkIndex',
        value: function checkIndex(idx) {
            if (idx < 0 && idx > this.size) {
                console.log("BuffIcon Index {$idx} not found.");
                return false;
            }
            return true;
        }
    }, {
        key: 'refresh',
        value: function refresh(idx) {
            if (!this.checkIndex(idx)) {
                return;
            }
            this.svg[idx] = this.build(idx);
        }
    }, {
        key: 'getState',
        value: function getState(idx) {
            if (!this.checkIndex(idx)) {
                return false;
            }
            return this.state[idx];
        }
    }, {
        key: 'setState',
        value: function setState(idx, active) {
            if (!this.checkIndex(idx)) {
                return;
            }
            this.state[idx] = active;
        }
    }, {
        key: 'getList',
        value: function getList() {
            return this.svg;
        }
    }]);

    return buffIcons;
})();

var Buffs = (function (_React$Component) {
    _inherits(Buffs, _React$Component);

    function Buffs(props) {
        _classCallCheck(this, Buffs);

        _get(Object.getPrototypeOf(Buffs.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Buffs, [{
        key: 'componentWillMount',
        value: function componentWillMount(props, state) {
            this.state = { buffList: new buffIcons(4) };
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement("div", { "className": "buffs " + this.props.type }, this.state.buffList.getList());
        }
    }]);

    return Buffs;
})(React.Component);

exports.Buffs = Buffs;
exports['default'] = Buffs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL0J1ZmZzLnRzeCJdLCJuYW1lcyI6WyJidWZmSWNvbnMiLCJidWZmSWNvbnMuY29uc3RydWN0b3IiLCJidWZmSWNvbnMuYnVpbGQiLCJidWZmSWNvbnMuY2hlY2tJbmRleCIsImJ1ZmZJY29ucy5yZWZyZXNoIiwiYnVmZkljb25zLmdldFN0YXRlIiwiYnVmZkljb25zLnNldFN0YXRlIiwiYnVmZkljb25zLmdldExpc3QiLCJCdWZmcyIsIkJ1ZmZzLmNvbnN0cnVjdG9yIiwiQnVmZnMuY29tcG9uZW50V2lsbE1vdW50IiwiQnVmZnMucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7OytCQUNHLHFCQUFxQjs7bUJBQ3ZCLE9BQU87O0lBU3pCLFNBQUE7QUFJRUEsYUFKRixTQUFBLENBSWNBLEtBQWFBLEVBQUFBOzhCQUozQixTQUFBOztBQUNTQyxZQUFBQSxDQUFBQSxJQUFJQSxHQUFXQSxDQUFDQSxDQUFDQTtBQUNoQkEsWUFBQUEsQ0FBQUEsR0FBR0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFDaEJBLFlBQUFBLENBQUFBLEtBQUtBLEdBQWFBLEVBQUVBLENBQUNBO0FBRTNCQSxZQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxFQUFFQTtBQUNiQSxtQkFBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtBQUN2REEsbUJBQU9BO1NBQ1JBO0FBQ0RBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLEdBQUNBLENBQUNBLENBQUNBO0FBQ3BCQSxhQUFLQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFHQSxDQUFDQSxFQUFFQSxFQUFFQTtBQUNwQ0EsZ0JBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLEVBQUdBLENBQUNBLElBQUlBLENBQUNB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QUNBLEtBQWlCQSxFQUFFQSxLQUFpQkEsRUFBQUE7QUFDckRFLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFDQSxDQUFDQTtTQUMzQ0E7OztlQUNLRixrQkFBQUE7QUFDSkcsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLFdBQVVBLEVBQUdBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQU1BLEVBQUFBLEVBQzFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFHQSxDQUMzQkEsQ0FDTkE7U0FDSEE7OztXQWJILEtBQUE7R0FBMkIsS0FBSyxDQUFDLFNBQVM7OztxQkFnQjNCLEtBQUsiLCJmaWxlIjoiY29tcG9uZW50cy93b3VuZGZyYW1lL2NvbXBvbmVudHMvQnVmZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpY29uc30gZnJvbSAnLi4vcmVzb3VyY2VzL1NoYXBlcyc7XG5pbXBvcnQge1N2Z30gZnJvbSAnLi9TdmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZmZzU3RhdGUge1xuICBidWZmTGlzdDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBCdWZmc1Byb3BzIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5jbGFzcyBidWZmSWNvbnMge1xuICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzdmc6IGFueVtdID0gW107XG4gIHByaXZhdGUgc3RhdGU6Ym9vbGVhbltdID0gW107XG4gIGNvbnN0cnVjdG9yKGNvdW50OiBudW1iZXIpIHtcbiAgICBpZiAoY291bnQgPCAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBpY29ucyBtdXN0IGJlICgxKSBvciBncmVhdGVyLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaXplID0gY291bnQtMTtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zaXplOyBpID49IDAgOyBpLS0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoaSwgKGkgPT0gMikpO1xuICAgICAgdGhpcy5zdmcucHVzaCh0aGlzLmJ1aWxkKGkpKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBidWlsZChpZHg6IG51bWJlcikge1xuICAgIGNvbnN0IGljb24gPSBpY29uc1tpZHhdO1xuICAgIGNvbnN0IGNvbG9yIDogc3RyaW5nW10gPSB0aGlzLmdldFN0YXRlKGlkeCkgPyBbICcjMTlCMjRCJywgJ3llbGxvdycgXSA6IFsgJyMyMDIwMjAnLCAnIzIwMjAyMCcgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPFN2ZyBrZXk9eyBcImljb25cIiArIGlkeCB9XG4gICAgICAgIGlkPXsgXCJpY29uXCIgKyBpZHggfVxuICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICAgICAgc3Ryb2tlPXtjb2xvclsxXX1cbiAgICAgICAgc3Ryb2tlTUw9XCIxMFwiXG4gICAgICAgIGNvbG9yPXtjb2xvclswXX1cbiAgICAgICAgYm94PXtpY29uLmJveH1cbiAgICAgICAgcmVjdD17aWNvbi5yZWN0fVxuICAgICAgICBwb2x5Z29uPXtpY29uLnBvbHlnb259XG4gICAgICAgIHBhdGg9e2ljb24ucGF0aH1cbiAgICAgICAgY2lyY2xlPXtpY29uLmNpcmNsZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgY2hlY2tJbmRleChpZHg6IG51bWJlcikge1xuICAgIGlmIChpZHggPCAwICYmIGlkeCA+IHRoaXMuc2l6ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJCdWZmSWNvbiBJbmRleCB7JGlkeH0gbm90IGZvdW5kLlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcHVibGljIHJlZnJlc2goaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tJbmRleChpZHgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3ZnW2lkeF0gPSB0aGlzLmJ1aWxkKGlkeCk7XG4gIH1cbiAgcHVibGljIGdldFN0YXRlKGlkeDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrSW5kZXgoaWR4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtpZHhdO1xuICB9XG4gIHB1YmxpYyBzZXRTdGF0ZShpZHg6bnVtYmVyLCBhY3RpdmU6Ym9vbGVhbikge1xuICAgIGlmICghdGhpcy5jaGVja0luZGV4KGlkeCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZVtpZHhdID0gYWN0aXZlO1xuICB9XG4gIHB1YmxpYyBnZXRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnN2ZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnVmZnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnVmZnNQcm9wcywgQnVmZnNTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQnVmZnNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQocHJvcHM6IEJ1ZmZzUHJvcHMsIHN0YXRlOiBCdWZmc1N0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtidWZmTGlzdDogbmV3IGJ1ZmZJY29ucyg0KX07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IFwiYnVmZnMgXCIgKyB0aGlzLnByb3BzLnR5cGUgfT5cbiAgICAgICAge3RoaXMuc3RhdGUuYnVmZkxpc3QuZ2V0TGlzdCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmcztcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
