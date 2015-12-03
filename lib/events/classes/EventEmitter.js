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

var internalId = 0;

var Listener = function Listener(topic, once, callback) {
    _classCallCheck(this, Listener);

    this.topic = topic;
    this.once = once;
    this.callback = callback;
    this.id = ++internalId;
};

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    /**
     * addListener() is called to register a listener for a topic.
     *
     * @param topic {string}         Topic name
     * @param once {boolean}         Fire event only once (auto-unregister) [optional]
     * @param callback {function}    Handler to call when topic is fired
     */

    _createClass(EventEmitter, [{
        key: "addListener",
        value: function addListener(topic, once, callback) {
            if (once === undefined) once = false;

            var listeners = this.events[topic] = this.events[topic] || [];
            var listener = new Listener(topic, once, callback);
            var i = listeners.indexOf(null);
            if (i === -1) {
                listeners.push(listener);
            } else {
                listeners[i] = listener;
            }
            return listener;
        }

        /**
         * on() is called to register a listener for a topic.
         *
         * @param topic {string}         Topic name
         * @param callback {function}    Handler to call when topic is fired
         */
    }, {
        key: "on",
        value: function on(topic, callback) {
            return this.addListener(topic, false, callback);
        }

        /**
         * listenOnce() is called to register a listener for a topic that will
         * fire only once before being auto-removed.
         *
         * @param topic {string}         Topic name
         * @param callback {function}    Handler to call when topic is fired
         */
    }, {
        key: "listenOnce",
        value: function listenOnce(topic, callback) {
            return this.addListener(topic, true, callback);
        }

        /**
         * removeListener() is called to deregister an existing listener
         *
         * @param listener {any}   Handle returned by previous call to addListener()
         */
    }, {
        key: "removeListener",
        value: function removeListener(listener) {
            var listeners = this.events[listener.topic];
            if (listeners && listeners.length) {
                for (var i = 0; i < listeners.length; i++) {
                    if (listeners[i] && listeners[i].id === listener.id) {
                        listeners[i] = null;
                        return;
                    }
                }
            }
        }

        /**
         * emit() is called to pass the supplied data to the registered handlers for the topic
         *
         * @param topic {string}         Topic name
         * @param data {any}  The data being passed (depends on topic)
         */
    }, {
        key: "emit",
        value: function emit(topic, data) {
            var listeners = this.events[topic];
            if (listeners && listeners.length) {
                for (var i = 0; i < listeners.length; i++) {
                    if (listeners[i]) {
                        var listener = listeners[i];
                        if (listener.once) {
                            listeners[i] = null;
                        }
                        listener.callback(data);
                    }
                }
            }
        }
    }]);

    return EventEmitter;
})();

exports["default"] = EventEmitter;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2V2ZW50cy9jbGFzc2VzL0V2ZW50RW1pdHRlci50cyJdLCJuYW1lcyI6WyJMaXN0ZW5lciIsIkxpc3RlbmVyLmNvbnN0cnVjdG9yIiwiRXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyLmNvbnN0cnVjdG9yIiwiRXZlbnRFbWl0dGVyLmFkZExpc3RlbmVyIiwiRXZlbnRFbWl0dGVyLm9uIiwiRXZlbnRFbWl0dGVyLmxpc3Rlbk9uY2UiLCJFdmVudEVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIiLCJFdmVudEVtaXR0ZXIuZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixRQUFBLEdBS0VBLFNBTEYsUUFBQSxDQUtjQSxLQUFhQSxFQUFFQSxJQUFhQSxFQUFFQSxRQUE2QkEsRUFBQUE7MEJBTHpFLFFBQUE7O0FBTUlDLFFBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO0FBQ25CQSxRQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNqQkEsUUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7QUFDekJBLFFBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLENBQUNBO0NBQ3hCQTs7SUFHSCxZQUFBO0FBRUVDLGFBRkYsWUFBQSxHQUVFQTs4QkFGRixZQUFBOztBQUdJQyxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtLQUNsQkE7Ozs7Ozs7Ozs7aUJBSkgsWUFBQTs7ZUFhYUQscUJBQUNBLEtBQWFBLEVBQUVBLElBQUlBLEVBQW1CQSxRQUE2QkEsRUFBQUE7Z0JBQXBEQSxJQUFJQSxnQkFBSkEsSUFBSUEsR0FBWUEsS0FBS0E7O0FBQzlDRSxnQkFBTUEsU0FBU0EsR0FBZUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDNUVBLGdCQUFNQSxRQUFRQSxHQUFhQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtBQUMvREEsZ0JBQUlBLENBQUNBLEdBQVdBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUE7QUFDWkEseUJBQVNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2FBQzFCQSxNQUFNQTtBQUNMQSx5QkFBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0E7YUFDekJBO0FBQ0RBLG1CQUFPQSxRQUFRQSxDQUFDQTtTQUNqQkE7Ozs7Ozs7Ozs7ZUFRQ0YsWUFBQ0EsS0FBYUEsRUFBRUEsUUFBNkJBLEVBQUFBO0FBQzdDRyxtQkFBT0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7U0FDakRBOzs7Ozs7Ozs7OztlQVVTSCxvQkFBQ0EsS0FBYUEsRUFBRUEsUUFBNkJBLEVBQUFBO0FBQ3JESSxtQkFBT0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7U0FDaERBOzs7Ozs7Ozs7ZUFPYUosd0JBQUNBLFFBQWFBLEVBQUFBO0FBQzFCSyxnQkFBTUEsU0FBU0EsR0FBZUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDMURBLGdCQUFJQSxTQUFTQSxJQUFJQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQTtBQUNqQ0EscUJBQUtBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBO0FBQ3pDQSx3QkFBSUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsUUFBUUEsQ0FBQ0EsRUFBRUEsRUFBRUE7QUFDbkRBLGlDQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNwQkEsK0JBQU9BO3FCQUNSQTtpQkFDRkE7YUFDRkE7U0FDRkE7Ozs7Ozs7Ozs7ZUFRR0wsY0FBQ0EsS0FBYUEsRUFBRUEsSUFBU0EsRUFBQUE7QUFDM0JNLGdCQUFNQSxTQUFTQSxHQUFlQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNqREEsZ0JBQUlBLFNBQVNBLElBQUlBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBO0FBQ2pDQSxxQkFBS0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUE7QUFDekNBLHdCQUFJQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQTtBQUNoQkEsNEJBQU1BLFFBQVFBLEdBQWFBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3hDQSw0QkFBSUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUE7QUFDakJBLHFDQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTt5QkFDckJBO0FBQ0RBLGdDQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtxQkFDekJBO2lCQUNGQTthQUNGQTtTQUNGQTs7O1dBbkZILFlBQUE7OztxQkFBQSxZQUFBIiwiZmlsZSI6InRzL2V2ZW50cy9jbGFzc2VzL0V2ZW50RW1pdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5sZXQgaW50ZXJuYWxJZCA9IDA7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgdG9waWM6IHN0cmluZztcbiAgb25jZTogYm9vbGVhbjtcbiAgY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKHRvcGljOiBzdHJpbmcsIG9uY2U6IGJvb2xlYW4sIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy50b3BpYyA9IHRvcGljO1xuICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuaWQgPSArK2ludGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgZXZlbnRzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gIH1cblxuICAvKipcbiAgICogYWRkTGlzdGVuZXIoKSBpcyBjYWxsZWQgdG8gcmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgYSB0b3BpYy5cbiAgICpcbiAgICogQHBhcmFtIHRvcGljIHtzdHJpbmd9ICAgICAgICAgVG9waWMgbmFtZVxuICAgKiBAcGFyYW0gb25jZSB7Ym9vbGVhbn0gICAgICAgICBGaXJlIGV2ZW50IG9ubHkgb25jZSAoYXV0by11bnJlZ2lzdGVyKSBbb3B0aW9uYWxdXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259ICAgIEhhbmRsZXIgdG8gY2FsbCB3aGVuIHRvcGljIGlzIGZpcmVkXG4gICAqL1xuICBhZGRMaXN0ZW5lcih0b3BpYzogc3RyaW5nLCBvbmNlOiBib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogYW55IHtcbiAgICBjb25zdCBsaXN0ZW5lcnM6IExpc3RlbmVyW10gPSB0aGlzLmV2ZW50c1t0b3BpY10gPSB0aGlzLmV2ZW50c1t0b3BpY10gfHwgW107XG4gICAgY29uc3QgbGlzdGVuZXI6IExpc3RlbmVyID0gbmV3IExpc3RlbmVyKHRvcGljLCBvbmNlLCBjYWxsYmFjayk7XG4gICAgbGV0IGk6IG51bWJlciA9IGxpc3RlbmVycy5pbmRleE9mKG51bGwpO1xuICAgIGlmIChpID09PSAtMSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbaV0gPSBsaXN0ZW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uKCkgaXMgY2FsbGVkIHRvIHJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIGEgdG9waWMuXG4gICAqXG4gICAqIEBwYXJhbSB0b3BpYyB7c3RyaW5nfSAgICAgICAgIFRvcGljIG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gICAgSGFuZGxlciB0byBjYWxsIHdoZW4gdG9waWMgaXMgZmlyZWRcbiAgICovXG4gIG9uKHRvcGljOiBzdHJpbmcsIGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lcih0b3BpYywgZmFsc2UsIGNhbGxiYWNrKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGxpc3Rlbk9uY2UoKSBpcyBjYWxsZWQgdG8gcmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgYSB0b3BpYyB0aGF0IHdpbGxcbiAgICogZmlyZSBvbmx5IG9uY2UgYmVmb3JlIGJlaW5nIGF1dG8tcmVtb3ZlZC5cbiAgICpcbiAgICogQHBhcmFtIHRvcGljIHtzdHJpbmd9ICAgICAgICAgVG9waWMgbmFtZVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufSAgICBIYW5kbGVyIHRvIGNhbGwgd2hlbiB0b3BpYyBpcyBmaXJlZFxuICAgKi9cbiAgbGlzdGVuT25jZSh0b3BpYzogc3RyaW5nLCBjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIodG9waWMsIHRydWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmVMaXN0ZW5lcigpIGlzIGNhbGxlZCB0byBkZXJlZ2lzdGVyIGFuIGV4aXN0aW5nIGxpc3RlbmVyXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7YW55fSAgIEhhbmRsZSByZXR1cm5lZCBieSBwcmV2aW91cyBjYWxsIHRvIGFkZExpc3RlbmVyKClcbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lcnM6IExpc3RlbmVyW10gPSB0aGlzLmV2ZW50c1tsaXN0ZW5lci50b3BpY107XG4gICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdGVuZXJzW2ldICYmIGxpc3RlbmVyc1tpXS5pZCA9PT0gbGlzdGVuZXIuaWQpIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbaV0gPSBudWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0KCkgaXMgY2FsbGVkIHRvIHBhc3MgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoZSB0b3BpY1xuICAgKlxuICAgKiBAcGFyYW0gdG9waWMge3N0cmluZ30gICAgICAgICBUb3BpYyBuYW1lXG4gICAqIEBwYXJhbSBkYXRhIHthbnl9ICBUaGUgZGF0YSBiZWluZyBwYXNzZWQgKGRlcGVuZHMgb24gdG9waWMpXG4gICAqL1xuICBlbWl0KHRvcGljOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RlbmVyczogTGlzdGVuZXJbXSA9IHRoaXMuZXZlbnRzW3RvcGljXTtcbiAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICBjb25zdCBsaXN0ZW5lcjogTGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
