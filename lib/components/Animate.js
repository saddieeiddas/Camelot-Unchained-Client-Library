// Based on https://github.com/thiagoc7/react-animate.css which is under the MIT license
//
// The MIT License (MIT)
//
// Copyright (c) 2015 Ryan Florence
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var ReactCSSTransitionGroup = _interopRequireWildcard(_reactAddonsCssTransitionGroup);

var Animate = (function (_React$Component) {
    _inherits(Animate, _React$Component);

    function Animate(props) {
        _classCallCheck(this, Animate);

        _get(Object.getPrototypeOf(Animate.prototype), 'constructor', this).call(this, props);
        this.renderStyle = function (animationEnter, animationLeave, durationEnter, durationLeave) {
            return '\n        .default-enter {\n          opacity: 0;\n        }\n        .default-enter.' + animationEnter + ' {\n          animation-duration: ' + durationEnter / 1000 + 's;\n          animation-fill-mode: both;\n          opacity: 1;\n        }\n        .default-leave {\n          opacity: 1;\n        }\n        .default-leave.' + animationLeave + ' {\n          animation-duration: ' + durationLeave / 1000 + 's;\n          animation-fill-mode: both;\n        }\n        ';
        };
    }

    _createClass(Animate, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var animationEnter = _props.animationEnter;
            var animationLeave = _props.animationLeave;
            var durationEnter = _props.durationEnter;
            var durationLeave = _props.durationLeave;

            return React.createElement("div", null, React.createElement("style", { "dangerouslySetInnerHTML": { __html: this.renderStyle(animationEnter, animationLeave, durationEnter, durationLeave) } }), React.createElement(ReactCSSTransitionGroup, { "component": "div", "transitionName": {
                    enter: 'default-enter',
                    enterActive: animationEnter,
                    leave: 'default-leave',
                    leaveActive: animationLeave
                }, "transitionEnterTimeout": durationEnter, "transitionLeaveTimeout": durationLeave }, children));
        }
    }]);

    return Animate;
})(React.Component);

Animate.propTypes = {
    animationEnter: React.PropTypes.string.isRequired,
    animationLeave: React.PropTypes.string.isRequired,
    durationEnter: React.PropTypes.number.isRequired,
    durationLeave: React.PropTypes.number.isRequired
};
exports['default'] = Animate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQW5pbWF0ZS50c3giXSwibmFtZXMiOlsiQW5pbWF0ZSIsIkFuaW1hdGUuY29uc3RydWN0b3IiLCJBbmltYXRlLnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQXdCdUIsT0FBTzs7SUFBbEIsS0FBSzs7NkNBQ3dCLG1DQUFtQzs7SUFBaEUsdUJBQXVCOztJQUVuQyxPQUFBO2NBQUEsT0FBQTs7QUFDRUEsYUFERixPQUFBLENBQ2NBLEtBQVVBLEVBQUFBOzhCQUR4QixPQUFBOztBQUM0QkMsbUNBRDVCLE9BQUEsNkNBQ2tDQSxLQUFLQSxFQUFFQTtBQVN2Q0EsWUFBQUEsQ0FBQUEsV0FBV0EsR0FBR0EsVUFBQ0EsY0FBc0JBLEVBQUVBLGNBQXNCQSxFQUFFQSxhQUFxQkEsRUFBRUEsYUFBcUJBLEVBQUFBO0FBQ3pHQSw2R0FLcUJBLGNBQWNBLDBDQUNQQSxhQUFhQSxHQUFHQSxJQUFJQSx1S0FPM0JBLGNBQWNBLDBDQUNQQSxhQUFhQSxHQUFHQSxJQUFJQSxtRUFJL0NBO1NBQ0ZBLENBQUFBO0tBN0J3Q0E7O2lCQUQzQyxPQUFBOztlQWdDUUQsa0JBQUFBO3lCQUMrRUUsSUFBSUEsQ0FBQ0EsS0FBS0E7Z0JBQXJGQSxRQUFRQSxVQUFSQSxRQUFRQTtnQkFBRUEsY0FBY0EsVUFBZEEsY0FBY0E7Z0JBQUVBLGNBQWNBLFVBQWRBLGNBQWNBO2dCQUFFQSxhQUFhQSxVQUFiQSxhQUFhQTtnQkFBRUEsYUFBYUEsVUFBYkEsYUFBYUE7O0FBRTlFQSxtQkFDSUEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsSUFBQUEsRUFFRkEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsT0FBTUEsRUFBQUEsRUFBQUEseUJBQXdCQSxFQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxjQUFjQSxFQUFFQSxjQUFjQSxFQUFFQSxhQUFhQSxFQUFFQSxhQUFhQSxDQUFDQSxFQUFJQSxFQUFBQSxDQUFHQSxFQUVoSUEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQ0EsdUJBQXVCQSxFQUFBQSxFQUFBQSxXQUNYQSxFQUFDQSxLQUFLQSxFQUFBQSxnQkFDREEsRUFBR0E7QUFDZkEseUJBQUtBLEVBQUVBLGVBQWVBO0FBQ3RCQSwrQkFBV0EsRUFBRUEsY0FBY0E7QUFDM0JBLHlCQUFLQSxFQUFFQSxlQUFlQTtBQUN0QkEsK0JBQVdBLEVBQUVBLGNBQWNBO2lCQUMxQkEsRUFBQUEsd0JBQ21CQSxFQUFFQSxhQUFjQSxFQUFBQSx3QkFDaEJBLEVBQUVBLGFBQWNBLEVBQUFBLEVBRXZDQSxRQUFTQSxDQUVjQSxDQUV0QkEsQ0FDVEE7U0FDRkE7OztXQXpESCxPQUFBO0dBQXNCLEtBQUssQ0FBQyxTQUFTOztBQUc1QixPQUFBLENBQUEsU0FBUyxHQUFHO0FBQ2pCLGtCQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUNqRCxrQkFBYyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDakQsaUJBQWEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ2hELGlCQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtDQUNqRCxDQWtERjtxQkFFYyxPQUFPIiwiZmlsZSI6ImNvbXBvbmVudHMvQW5pbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90aGlhZ29jNy9yZWFjdC1hbmltYXRlLmNzcyB3aGljaCBpcyB1bmRlciB0aGUgTUlUIGxpY2Vuc2Vcbi8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTUgUnlhbiBGbG9yZW5jZVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmNsYXNzIEFuaW1hdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkgeyBzdXBlcihwcm9wcyk7IH1cbiAgXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0aW9uRW50ZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhbmltYXRpb25MZWF2ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGR1cmF0aW9uRW50ZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkdXJhdGlvbkxlYXZlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfVxuICBcbiAgcmVuZGVyU3R5bGUgPSAoYW5pbWF0aW9uRW50ZXI6IHN0cmluZywgYW5pbWF0aW9uTGVhdmU6IHN0cmluZywgZHVyYXRpb25FbnRlcjogbnVtYmVyLCBkdXJhdGlvbkxlYXZlOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBgXG4gICAgICAgIC5kZWZhdWx0LWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kZWZhdWx0LWVudGVyLiR7YW5pbWF0aW9uRW50ZXJ9IHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb25FbnRlciAvIDEwMDB9cztcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZmF1bHQtbGVhdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZmF1bHQtbGVhdmUuJHthbmltYXRpb25MZWF2ZX0ge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbkxlYXZlIC8gMTAwMH1zO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgIClcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFuaW1hdGlvbkVudGVyLCBhbmltYXRpb25MZWF2ZSwgZHVyYXRpb25FbnRlciwgZHVyYXRpb25MZWF2ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiB0aGlzLnJlbmRlclN0eWxlKGFuaW1hdGlvbkVudGVyLCBhbmltYXRpb25MZWF2ZSwgZHVyYXRpb25FbnRlciwgZHVyYXRpb25MZWF2ZSkgfSB9IC8+XG5cbiAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9eyB7XG4gICAgICAgICAgICAgICAgZW50ZXI6ICdkZWZhdWx0LWVudGVyJyxcbiAgICAgICAgICAgICAgICBlbnRlckFjdGl2ZTogYW5pbWF0aW9uRW50ZXIsXG4gICAgICAgICAgICAgICAgbGVhdmU6ICdkZWZhdWx0LWxlYXZlJyxcbiAgICAgICAgICAgICAgICBsZWF2ZUFjdGl2ZTogYW5pbWF0aW9uTGVhdmVcbiAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2R1cmF0aW9uRW50ZXJ9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2R1cmF0aW9uTGVhdmV9PlxuXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
