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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var Svg = (function (_React$Component) {
    _inherits(Svg, _React$Component);

    function Svg(props) {
        _classCallCheck(this, Svg);

        _get(Object.getPrototypeOf(Svg.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Svg, [{
        key: 'render',
        value: function render() {
            // Build shape style from attributes
            var style = '';
            if (this.props.color) {
                style += 'fill:' + this.props.color + ';';
            }
            if (this.props.stroke) {
                style += 'stroke:' + this.props.stroke + ';';
            }
            if (this.props.strokeML) {
                style += 'stroke-mitrelimit:' + this.props.strokeML + ';';
            }
            return React.createElement("svg", { "className": this.props.className, "viewBox": this.props.box }, React.createElement("style", { "type": "text/css" }, '.' + this.props.id + ' {' + style + '}'), React.createElement("g", null, this.props.polygon ? React.createElement("polygon", { "points": this.props.polygon, "fill": this.props.color }) : undefined, this.props.path ? React.createElement("path", { d: this.props.path, "fill": this.props.color }) : undefined, this.props.circle ? React.createElement("circle", { "cx": this.props.circle.cx, "cy": this.props.circle.cy, r: this.props.circle.r, "fill": this.props.color }) : undefined, this.props.rect ? React.createElement("rect", { x: this.props.rect.x, y: this.props.rect.y, "transform": this.props.rect.transform, "width": this.props.rect.width, "height": this.props.rect.height, "fill": this.props.color }) : undefined));
        }
    }]);

    return Svg;
})(React.Component);

exports.Svg = Svg;
exports['default'] = Svg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jb21wb25lbnRzL1N2Zy50c3giXSwibmFtZXMiOlsiU3ZnIiwiU3ZnLmNvbnN0cnVjdG9yIiwiU3ZnLnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQU11QixPQUFPOztJQUFsQixLQUFLOztJQWtCakIsR0FBQTtjQUFBLEdBQUE7O0FBQ0VBLGFBREYsR0FBQSxDQUNjQSxLQUFlQSxFQUFBQTs4QkFEN0IsR0FBQTs7QUFFSUMsbUNBRkosR0FBQSw2Q0FFVUEsS0FBS0EsRUFBRUE7S0FDZEE7O2lCQUhILEdBQUE7O2VBSVFELGtCQUFBQTs7QUFFSkUsZ0JBQUlBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO0FBQ2ZBLGdCQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQTtBQUNwQkEscUJBQUtBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBO2FBQzNDQTtBQUNEQSxnQkFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUE7QUFDckJBLHFCQUFLQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTthQUM5Q0E7QUFDREEsZ0JBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBO0FBQ3ZCQSxxQkFBS0EsSUFBSUEsb0JBQW9CQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTthQUMzREE7QUFDREEsbUJBQ0VBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLFdBQVVBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFNBQVVBLEVBQUFBLFNBQVFBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUlBLEVBQUFBLEVBQzVEQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxPQUFNQSxFQUFBQSxFQUFBQSxNQUFLQSxFQUFDQSxVQUFVQSxFQUFBQSxFQUNuQkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsR0FBR0EsS0FBS0EsR0FBR0EsR0FBSUEsQ0FDcENBLEVBQ1JBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEdBQUVBLEVBQUFBLElBQUFBLEVBQ0NBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQ2pCQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxTQUFRQSxFQUFBQSxFQUFBQSxRQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFRQSxFQUFBQSxNQUNoQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBTUEsRUFBQUEsQ0FBRUEsR0FDdkJBLFNBQVdBLEVBQ2RBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEdBQ2RBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLE1BQUtBLEVBQUFBLEVBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUtBLEVBQUFBLE1BQ3JCQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFNQSxFQUFBQSxDQUFFQSxHQUN2QkEsU0FBV0EsRUFDZEEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FDaEJBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLFFBQU9BLEVBQUFBLEVBQUFBLElBQUdBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUdBLEVBQUFBLElBQUdBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUdBLEVBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUVBLEVBQUFBLE1BQy9FQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFNQSxFQUFBQSxDQUFFQSxHQUN2QkEsU0FBV0EsRUFDZEEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsR0FDZEEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsTUFBS0EsRUFBQUEsRUFDSEEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBRUEsRUFDckJBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUVBLEVBQUFBLFdBQ1pBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVVBLEVBQUFBLE9BQ2hDQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFNQSxFQUFBQSxRQUN2QkEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBT0EsRUFBQUEsTUFDM0JBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQU1BLEVBQUFBLENBQ3JCQSxHQUNGQSxTQUFXQSxDQUNiQSxDQUNBQSxDQUNOQTtTQUNIQTs7O1dBL0NILEdBQUE7R0FBeUIsS0FBSyxDQUFDLFNBQVM7OztxQkFrRHpCLEdBQUciLCJmaWxlIjoidHMvY29tcG9uZW50cy93b3VuZGZyYW1lL2NvbXBvbmVudHMvU3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNWR0NpcmNsZSwgU1ZHUmVjdCB9IGZyb20gJy4uL3Jlc291cmNlcy9TaGFwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z1N0YXRlIHsgfVxuZXhwb3J0IGludGVyZmFjZSBTdmdQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYm94OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbiAgcG9seWdvbj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgY2lyY2xlPzogU1ZHQ2lyY2xlO1xuICByZWN0PzogU1ZHUmVjdDtcbiAgc3Ryb2tlPzogc3RyaW5nO1xuICBzdHJva2VNTD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN2ZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTdmdQcm9wcywgU3ZnU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFN2Z1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBCdWlsZCBzaGFwZSBzdHlsZSBmcm9tIGF0dHJpYnV0ZXNcbiAgICBsZXQgc3R5bGUgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5jb2xvcikge1xuICAgICAgc3R5bGUgKz0gJ2ZpbGw6JyArIHRoaXMucHJvcHMuY29sb3IgKyAnOyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnN0cm9rZSkge1xuICAgICAgc3R5bGUgKz0gJ3N0cm9rZTonICsgdGhpcy5wcm9wcy5zdHJva2UgKyAnOyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnN0cm9rZU1MKSB7XG4gICAgICBzdHlsZSArPSAnc3Ryb2tlLW1pdHJlbGltaXQ6JyArIHRoaXMucHJvcHMuc3Ryb2tlTUwgKyAnOyc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHZpZXdCb3g9e3RoaXMucHJvcHMuYm94fT5cbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgIHsnLicgKyB0aGlzLnByb3BzLmlkICsgJyB7JyArIHN0eWxlICsgJ30nfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Zz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5wb2x5Z29uID9cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz17dGhpcy5wcm9wcy5wb2x5Z29ufVxuICAgICAgICAgICAgZmlsbD17dGhpcy5wcm9wcy5jb2xvcn0vPlxuICAgICAgICAgICAgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnBhdGggP1xuICAgICAgICAgICAgPHBhdGggZD17dGhpcy5wcm9wcy5wYXRofVxuICAgICAgICAgICAgZmlsbD17dGhpcy5wcm9wcy5jb2xvcn0vPlxuICAgICAgICAgICAgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNpcmNsZSA/XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PXt0aGlzLnByb3BzLmNpcmNsZS5jeH0gY3k9e3RoaXMucHJvcHMuY2lyY2xlLmN5fSByPXt0aGlzLnByb3BzLmNpcmNsZS5yfVxuICAgICAgICAgICAgZmlsbD17dGhpcy5wcm9wcy5jb2xvcn0vPlxuICAgICAgICAgICAgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlY3QgP1xuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD17dGhpcy5wcm9wcy5yZWN0Lnh9XG4gICAgICAgICAgICAgIHk9e3RoaXMucHJvcHMucmVjdC55fVxuICAgICAgICAgICAgICB0cmFuc2Zvcm09e3RoaXMucHJvcHMucmVjdC50cmFuc2Zvcm19XG4gICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLnJlY3Qud2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5yZWN0LmhlaWdodH1cbiAgICAgICAgICAgICAgZmlsbD17dGhpcy5wcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
