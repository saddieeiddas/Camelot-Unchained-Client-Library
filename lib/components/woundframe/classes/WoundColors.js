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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var defaultColors = ['#19b24b', '#feeb00', '#fe1e14', '#200000'];

var WoundColors = (function () {
    function WoundColors() {
        _classCallCheck(this, WoundColors);

        this.key = 'cse.wound.colors';
        this.load();
    }

    _createClass(WoundColors, [{
        key: 'load',
        value: function load() {
            var value = localStorage.getItem(this.key);
            if (value && typeof value === 'string') {
                this.colors = value.split(',');
                // stored color validation
                for (var i = 0; i < this.colors.length; i++) {
                    var color = this.colors[i];
                    var isValidColor = /(^#[0-9A-F]{6}$)/i.test(color) && color.length == 7;
                    if (!isValidColor) {
                        this.colors[i] = '#ffffff';
                    }
                }
            } else {
                this.colors = defaultColors;
            }
        }
    }, {
        key: 'save',
        value: function save() {
            localStorage.setItem(this.key, this.colors.join(','));
        }
    }, {
        key: 'getColorForWound',
        value: function getColorForWound(wound) {
            return this.colors[wound] || defaultColors[0];
        }
    }]);

    return WoundColors;
})();

exports.WoundColors = WoundColors;
exports['default'] = WoundColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd291bmRmcmFtZS9jbGFzc2VzL1dvdW5kQ29sb3JzLnRzeCJdLCJuYW1lcyI6WyJXb3VuZENvbG9ycyIsIldvdW5kQ29sb3JzLmNvbnN0cnVjdG9yIiwiV291bmRDb2xvcnMubG9hZCIsIldvdW5kQ29sb3JzLnNhdmUiLCJXb3VuZENvbG9ycy5nZXRDb2xvckZvcldvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGFBQWEsR0FBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztJQUU3RSxXQUFBO0FBR0VBLGFBSEYsV0FBQSxHQUdFQTs4QkFIRixXQUFBOztBQUNVQyxZQUFBQSxDQUFBQSxHQUFHQSxHQUFXQSxrQkFBa0JBLENBQUNBO0FBR3ZDQSxZQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtLQUNiQTs7aUJBTEgsV0FBQTs7ZUFNTUQsZ0JBQUFBO0FBQ0ZFLGdCQUFNQSxLQUFLQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUM3Q0EsZ0JBQUlBLEtBQUtBLElBQUlBLE9BQU9BLEtBQUtBLEtBQUtBLFFBQVFBLEVBQUVBO0FBQ3RDQSxvQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7O0FBRy9CQSxxQkFBS0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUE7QUFDM0NBLHdCQUFNQSxLQUFLQSxHQUFXQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNyQ0Esd0JBQU1BLFlBQVlBLEdBQUlBLEFBQUNBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBS0EsS0FBS0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQUFBQ0EsQ0FBQ0E7QUFDOUVBLHdCQUFJQSxDQUFDQSxZQUFZQSxFQUFFQTtBQUNqQkEsNEJBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBO3FCQUM1QkE7aUJBQ0ZBO2FBQ0ZBLE1BQU1BO0FBQ0xBLG9CQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQTthQUM3QkE7U0FDRkE7OztlQUNHRixnQkFBQUE7QUFDRkcsd0JBQVlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1NBQ3ZEQTs7O2VBQ3NCSCwwQkFBQ0EsS0FBWUEsRUFBQUE7QUFDbENJLG1CQUFPQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtTQUMvQ0E7OztXQTVCSCxXQUFBOzs7O3FCQStCZSxXQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvd291bmRmcmFtZS9jbGFzc2VzL1dvdW5kQ29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmNvbnN0IGRlZmF1bHRDb2xvcnM6IHN0cmluZ1tdID0gWycjMTliMjRiJywgJyNmZWViMDAnLCAnI2ZlMWUxNCcsICcjMjAwMDAwJ107XG5cbmV4cG9ydCBjbGFzcyBXb3VuZENvbG9ycyB7XG4gIHByaXZhdGUga2V5OiBzdHJpbmcgPSAnY3NlLndvdW5kLmNvbG9ycyc7XG4gIHByaXZhdGUgY29sb3JzOiBzdHJpbmdbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cbiAgbG9hZCgpIDogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY29sb3JzID0gdmFsdWUuc3BsaXQoJywnKTtcblxuICAgICAgLy8gc3RvcmVkIGNvbG9yIHZhbGlkYXRpb25cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sb3I6IHN0cmluZyA9IHRoaXMuY29sb3JzW2ldO1xuICAgICAgICBjb25zdCBpc1ZhbGlkQ29sb3IgPSAoKC8oXiNbMC05QS1GXXs2fSQpL2kudGVzdChjb2xvcikpICYmIGNvbG9yLmxlbmd0aCA9PSA3KTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yc1tpXSA9ICcjZmZmZmZmJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9ycyA9IGRlZmF1bHRDb2xvcnM7XG4gICAgfVxuICB9XG4gIHNhdmUoKSA6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCB0aGlzLmNvbG9ycy5qb2luKCcsJykpO1xuICB9XG4gIHB1YmxpYyBnZXRDb2xvckZvcldvdW5kKHdvdW5kOm51bWJlcikgOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yc1t3b3VuZF0gfHwgZGVmYXVsdENvbG9yc1swXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3VuZENvbG9ycztcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
