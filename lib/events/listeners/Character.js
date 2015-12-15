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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _UnitFrame = require('./_UnitFrame');

var _UnitFrame2 = _interopRequireDefault(_UnitFrame);

var CharacterListener = (function (_UnitFrameListener) {
    _inherits(CharacterListener, _UnitFrameListener);

    function CharacterListener(handles) {
        _classCallCheck(this, CharacterListener);

        _get(Object.getPrototypeOf(CharacterListener.prototype), 'constructor', this).call(this, handles);
    }

    return CharacterListener;
})(_UnitFrame2['default']);

exports['default'] = CharacterListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9saXN0ZW5lcnMvQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbIkNoYXJhY3Rlckxpc3RlbmVyIiwiQ2hhcmFjdGVyTGlzdGVuZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBTThCLGNBQWM7Ozs7SUFHNUMsaUJBQUE7Y0FBQSxpQkFBQTs7QUFDRUEsYUFERixpQkFBQSxDQUNjQSxPQUF5QkEsRUFBQUE7OEJBRHZDLGlCQUFBOztBQUVJQyxtQ0FGSixpQkFBQSw2Q0FFVUEsT0FBT0EsRUFBRUE7S0FDaEJBOztXQUhILGlCQUFBOzs7cUJBQUEsaUJBQUEiLCJmaWxlIjoiZXZlbnRzL2xpc3RlbmVycy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IFVuaXRGcmFtZUxpc3RlbmVyIGZyb20gJy4vX1VuaXRGcmFtZSc7XG5pbXBvcnQgSGFuZGxlc0NoYXJhY3RlciBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNDaGFyYWN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJMaXN0ZW5lciBleHRlbmRzIFVuaXRGcmFtZUxpc3RlbmVyIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NoYXJhY3Rlcikge1xuICAgIHN1cGVyKGhhbmRsZXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
