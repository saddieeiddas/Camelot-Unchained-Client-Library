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

        this.key = "cse.wound.colors";
        this.load();
    }

    _createClass(WoundColors, [{
        key: 'load',
        value: function load() {
            var value = localStorage.getItem(this.key);
            if (value && typeof value === "string") {
                this.colors = value.split(",");
                // stored color validation
                for (var i = 0; i < this.colors.length; i++) {
                    var color = this.colors[i];
                    if (color.length !== 7 && color.substring(0, 0) !== "#") {
                        this.colors[i] = "#ffffff";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvd291bmRmcmFtZS9jbGFzc2VzL1dvdW5kQ29sb3JzLnRzeCJdLCJuYW1lcyI6WyJXb3VuZENvbG9ycyIsIldvdW5kQ29sb3JzLmNvbnN0cnVjdG9yIiwiV291bmRDb2xvcnMubG9hZCIsIldvdW5kQ29sb3JzLnNhdmUiLCJXb3VuZENvbG9ycy5nZXRDb2xvckZvcldvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGFBQWEsR0FBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztJQUU3RSxXQUFBO0FBR0VBLGFBSEYsV0FBQSxHQUdFQTs4QkFIRixXQUFBOztBQUNVQyxZQUFBQSxDQUFBQSxHQUFHQSxHQUFXQSxrQkFBa0JBLENBQUNBO0FBR3ZDQSxZQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtLQUNiQTs7aUJBTEgsV0FBQTs7ZUFNTUQsZ0JBQUFBO0FBQ0ZFLGdCQUFNQSxLQUFLQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUM3Q0EsZ0JBQUlBLEtBQUtBLElBQUlBLE9BQU9BLEtBQUtBLEtBQUtBLFFBQVFBLEVBQUVBO0FBQ3RDQSxvQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7O0FBRy9CQSxxQkFBS0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUE7QUFDM0NBLHdCQUFNQSxLQUFLQSxHQUFXQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNyQ0Esd0JBQUlBLEtBQUtBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBO0FBQ3REQSw0QkFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0E7cUJBQzVCQTtpQkFDRkE7YUFDRkEsTUFBTUE7QUFDTEEsb0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLGFBQWFBLENBQUNBO2FBQzdCQTtTQUNGQTs7O2VBQ0dGLGdCQUFBQTtBQUNGRyx3QkFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7U0FDdkRBOzs7ZUFDc0JILDBCQUFDQSxLQUFZQSxFQUFBQTtBQUNsQ0ksbUJBQU9BLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1NBQy9DQTs7O1dBM0JILFdBQUEiLCJmaWxlIjoidHMvY29tcG9uZW50cy93b3VuZGZyYW1lL2NsYXNzZXMvV291bmRDb2xvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuY29uc3QgZGVmYXVsdENvbG9yczogc3RyaW5nW10gPSBbJyMxOWIyNGInLCAnI2ZlZWIwMCcsICcjZmUxZTE0JywgJyMyMDAwMDAnXTtcblxuZXhwb3J0IGNsYXNzIFdvdW5kQ29sb3JzIHtcbiAgcHJpdmF0ZSBrZXk6IHN0cmluZyA9IFwiY3NlLndvdW5kLmNvbG9yc1wiO1xuICBwcml2YXRlIGNvbG9yczogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIGxvYWQoKSA6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuY29sb3JzID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xuXG4gICAgICAvLyBzdG9yZWQgY29sb3IgdmFsaWRhdGlvblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb2xvcjogc3RyaW5nID0gdGhpcy5jb2xvcnNbaV07XG4gICAgICAgIGlmIChjb2xvci5sZW5ndGggIT09IDcgJiYgY29sb3Iuc3Vic3RyaW5nKDAsMCkgIT09IFwiI1wiKSB7XG4gICAgICAgICAgdGhpcy5jb2xvcnNbaV0gPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9ycyA9IGRlZmF1bHRDb2xvcnM7XG4gICAgfVxuICB9XG4gIHNhdmUoKSA6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCB0aGlzLmNvbG9ycy5qb2luKCcsJykpO1xuICB9XG4gIHB1YmxpYyBnZXRDb2xvckZvcldvdW5kKHdvdW5kOm51bWJlcikgOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yc1t3b3VuZF0gfHwgZGVmYXVsdENvbG9yc1swXTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
