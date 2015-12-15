/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _coreConstantsRace = require('../../../core/constants/race');

var _coreConstantsRace2 = _interopRequireDefault(_coreConstantsRace);

var Portrait = React.createClass({
    displayName: 'Portrait',

    // Portrait maps race ID to name because the name is used to pick up
    // the correct portrait image (a resource we own).
    portrait: function portrait() {
        switch (this.props.race) {
            // case race.TUATHA:	   return "Tuatha";
            case _coreConstantsRace2['default'].HAMADRYAD:
                return "hamadryad";
            case _coreConstantsRace2['default'].LUCHORPAN:
                return "luchorpan";
            case _coreConstantsRace2['default'].FIRBOG:
                return "firbog";
            case _coreConstantsRace2['default'].VALKYRIE:
                return "valkyrie";
            case _coreConstantsRace2['default'].HELBOUND:
                return "helbound";
            case _coreConstantsRace2['default'].FROSTGIANT:
                return "frostgiant";
            // case race.DVERGR:      return "Dverger";
            case _coreConstantsRace2['default'].STRM:
                return "strm";
            case _coreConstantsRace2['default'].CAITSITH:
                return "caitsith";
            case _coreConstantsRace2['default'].GOLEM:
                return "golem";
            // case race.GARGOYLE:    return "Gargoyle";
            case _coreConstantsRace2['default'].STORMRIDERT:
                return "stormridert";
            case _coreConstantsRace2['default'].STORMRIDERA:
                return "stormridera";
            case _coreConstantsRace2['default'].STORMRIDERV:
                return "stormriderv";
            case _coreConstantsRace2['default'].HUMANMALEV:
                return "humanmalev";
            case _coreConstantsRace2['default'].HUMANMALEA:
                return "humanmalea";
            case _coreConstantsRace2['default'].HUMANMALET:
                return "humanmalet";
        }
        return "";
    },
    render: function render() {
        var portrait = this.portrait();
        return React.createElement("div", { "id": "portrait", "className": portrait });
    }
});
exports['default'] = Portrait;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvUG9ydHJhaXQudHN4Il0sIm5hbWVzIjpbInBvcnRyYWl0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O2lDQUNBLDhCQUE4Qjs7OztBQUUvQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFXOzs7OztBQUczQyxZQUFRLEVBQUEsb0JBQUE7QUFDTkEsZ0JBQVFBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBOztBQUVyQkEsaUJBQUtBLCtCQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSwrQkFBS0EsU0FBU0E7QUFBRUEsdUJBQU9BLFdBQVdBLENBQUNBO0FBQUFBLEFBQ3hDQSxpQkFBS0EsK0JBQUtBLE1BQU1BO0FBQUVBLHVCQUFPQSxRQUFRQSxDQUFDQTtBQUFBQSxBQUNsQ0EsaUJBQUtBLCtCQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSwrQkFBS0EsUUFBUUE7QUFBRUEsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3RDQSxpQkFBS0EsK0JBQUtBLFVBQVVBO0FBQUVBLHVCQUFPQSxZQUFZQSxDQUFDQTtBQUFBQTtBQUUxQ0EsaUJBQUtBLCtCQUFLQSxJQUFJQTtBQUFFQSx1QkFBT0EsTUFBTUEsQ0FBQ0E7QUFBQUEsQUFDOUJBLGlCQUFLQSwrQkFBS0EsUUFBUUE7QUFBRUEsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3RDQSxpQkFBS0EsK0JBQUtBLEtBQUtBO0FBQUVBLHVCQUFPQSxPQUFPQSxDQUFDQTtBQUFBQTtBQUVoQ0EsaUJBQUtBLCtCQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSwrQkFBS0EsV0FBV0E7QUFBRUEsdUJBQU9BLGFBQWFBLENBQUNBO0FBQUFBLEFBQzVDQSxpQkFBS0EsK0JBQUtBLFdBQVdBO0FBQUVBLHVCQUFPQSxhQUFhQSxDQUFDQTtBQUFBQSxBQUM1Q0EsaUJBQUtBLCtCQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSwrQkFBS0EsVUFBVUE7QUFBRUEsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBLEFBQzFDQSxpQkFBS0EsK0JBQUtBLFVBQVVBO0FBQUVBLHVCQUFPQSxZQUFZQSxDQUFDQTtBQUFBQSxTQUMzQ0E7QUFDREEsZUFBT0EsRUFBRUEsQ0FBQ0E7S0FDWEE7QUFDRCxVQUFNLEVBQUEsa0JBQUE7QUFDSkMsWUFBTUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7QUFDakNBLGVBQVFBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLElBQUdBLEVBQUNBLFVBQVVBLEVBQUFBLFdBQVVBLEVBQUVBLFFBQVNBLEVBQUFBLENBQU9BLENBQUVBO0tBQ3pEQTtDQUNGLENBQUMsQ0FBQztxQkFFWSxRQUFRIiwiZmlsZSI6ImNvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvUG9ydHJhaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdGFudHMvcmFjZSc7XG5cbmNvbnN0IFBvcnRyYWl0ID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcbiAgLy8gUG9ydHJhaXQgbWFwcyByYWNlIElEIHRvIG5hbWUgYmVjYXVzZSB0aGUgbmFtZSBpcyB1c2VkIHRvIHBpY2sgdXBcbiAgLy8gdGhlIGNvcnJlY3QgcG9ydHJhaXQgaW1hZ2UgKGEgcmVzb3VyY2Ugd2Ugb3duKS5cbiAgcG9ydHJhaXQoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucmFjZSkge1xuICAgICAgLy8gY2FzZSByYWNlLlRVQVRIQTpcdCAgIHJldHVybiBcIlR1YXRoYVwiO1xuICAgICAgY2FzZSByYWNlLkhBTUFEUllBRDogcmV0dXJuIFwiaGFtYWRyeWFkXCI7XG4gICAgICBjYXNlIHJhY2UuTFVDSE9SUEFOOiByZXR1cm4gXCJsdWNob3JwYW5cIjtcbiAgICAgIGNhc2UgcmFjZS5GSVJCT0c6IHJldHVybiBcImZpcmJvZ1wiO1xuICAgICAgY2FzZSByYWNlLlZBTEtZUklFOiByZXR1cm4gXCJ2YWxreXJpZVwiO1xuICAgICAgY2FzZSByYWNlLkhFTEJPVU5EOiByZXR1cm4gXCJoZWxib3VuZFwiO1xuICAgICAgY2FzZSByYWNlLkZST1NUR0lBTlQ6IHJldHVybiBcImZyb3N0Z2lhbnRcIjtcbiAgICAgIC8vIGNhc2UgcmFjZS5EVkVSR1I6ICAgICAgcmV0dXJuIFwiRHZlcmdlclwiO1xuICAgICAgY2FzZSByYWNlLlNUUk06IHJldHVybiBcInN0cm1cIjtcbiAgICAgIGNhc2UgcmFjZS5DQUlUU0lUSDogcmV0dXJuIFwiY2FpdHNpdGhcIjtcbiAgICAgIGNhc2UgcmFjZS5HT0xFTTogcmV0dXJuIFwiZ29sZW1cIjtcbiAgICAgIC8vIGNhc2UgcmFjZS5HQVJHT1lMRTogICAgcmV0dXJuIFwiR2FyZ295bGVcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSVDogcmV0dXJuIFwic3Rvcm1yaWRlcnRcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSQTogcmV0dXJuIFwic3Rvcm1yaWRlcmFcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSVjogcmV0dXJuIFwic3Rvcm1yaWRlcnZcIjtcbiAgICAgIGNhc2UgcmFjZS5IVU1BTk1BTEVWOiByZXR1cm4gXCJodW1hbm1hbGV2XCI7XG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFQTogcmV0dXJuIFwiaHVtYW5tYWxlYVwiO1xuICAgICAgY2FzZSByYWNlLkhVTUFOTUFMRVQ6IHJldHVybiBcImh1bWFubWFsZXRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRoaXMucG9ydHJhaXQoKTtcbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJwb3J0cmFpdFwiIGNsYXNzTmFtZT17cG9ydHJhaXR9PjwvZGl2Pik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0cmFpdDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
