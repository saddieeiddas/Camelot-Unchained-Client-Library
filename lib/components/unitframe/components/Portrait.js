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

var _constantsRace = require('../../../constants/race');

var _constantsRace2 = _interopRequireDefault(_constantsRace);

var Portrait = React.createClass({
    displayName: 'Portrait',

    // Portrait maps race ID to name because the name is used to pick up
    // the correct portrait image (a resource we own).
    portrait: function portrait() {
        switch (this.props.race) {
            // case race.TUATHA:	   return "Tuatha";
            case _constantsRace2['default'].HAMADRYAD:
                return "hamadryad";
            case _constantsRace2['default'].LUCHORPAN:
                return "luchorpan";
            case _constantsRace2['default'].FIRBOG:
                return "firbog";
            case _constantsRace2['default'].VALKYRIE:
                return "valkyrie";
            case _constantsRace2['default'].HELBOUND:
                return "helbound";
            case _constantsRace2['default'].FROSTGIANT:
                return "frostgiant";
            // case race.DVERGR:      return "Dverger";
            case _constantsRace2['default'].STRM:
                return "strm";
            case _constantsRace2['default'].CAITSITH:
                return "caitsith";
            case _constantsRace2['default'].GOLEM:
                return "golem";
            // case race.GARGOYLE:    return "Gargoyle";
            case _constantsRace2['default'].STORMRIDERT:
                return "stormridert";
            case _constantsRace2['default'].STORMRIDERA:
                return "stormridera";
            case _constantsRace2['default'].STORMRIDERV:
                return "stormriderv";
            case _constantsRace2['default'].HUMANMALEV:
                return "humanmalev";
            case _constantsRace2['default'].HUMANMALEA:
                return "humanmalea";
            case _constantsRace2['default'].HUMANMALET:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvUG9ydHJhaXQudHN4Il0sIm5hbWVzIjpbInBvcnRyYWl0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7OzZCQUNBLHlCQUF5Qjs7OztBQUUxQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFXOzs7OztBQUczQyxZQUFRLEVBQUEsb0JBQUE7QUFDTkEsZ0JBQVFBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBOztBQUVyQkEsaUJBQUtBLDJCQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSwyQkFBS0EsU0FBU0E7QUFBRUEsdUJBQU9BLFdBQVdBLENBQUNBO0FBQUFBLEFBQ3hDQSxpQkFBS0EsMkJBQUtBLE1BQU1BO0FBQUVBLHVCQUFPQSxRQUFRQSxDQUFDQTtBQUFBQSxBQUNsQ0EsaUJBQUtBLDJCQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSwyQkFBS0EsUUFBUUE7QUFBRUEsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3RDQSxpQkFBS0EsMkJBQUtBLFVBQVVBO0FBQUVBLHVCQUFPQSxZQUFZQSxDQUFDQTtBQUFBQTtBQUUxQ0EsaUJBQUtBLDJCQUFLQSxJQUFJQTtBQUFFQSx1QkFBT0EsTUFBTUEsQ0FBQ0E7QUFBQUEsQUFDOUJBLGlCQUFLQSwyQkFBS0EsUUFBUUE7QUFBRUEsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3RDQSxpQkFBS0EsMkJBQUtBLEtBQUtBO0FBQUVBLHVCQUFPQSxPQUFPQSxDQUFDQTtBQUFBQTtBQUVoQ0EsaUJBQUtBLDJCQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSwyQkFBS0EsV0FBV0E7QUFBRUEsdUJBQU9BLGFBQWFBLENBQUNBO0FBQUFBLEFBQzVDQSxpQkFBS0EsMkJBQUtBLFdBQVdBO0FBQUVBLHVCQUFPQSxhQUFhQSxDQUFDQTtBQUFBQSxBQUM1Q0EsaUJBQUtBLDJCQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSwyQkFBS0EsVUFBVUE7QUFBRUEsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBLEFBQzFDQSxpQkFBS0EsMkJBQUtBLFVBQVVBO0FBQUVBLHVCQUFPQSxZQUFZQSxDQUFDQTtBQUFBQSxTQUMzQ0E7QUFDREEsZUFBT0EsRUFBRUEsQ0FBQ0E7S0FDWEE7QUFDRCxVQUFNLEVBQUEsa0JBQUE7QUFDSkMsWUFBTUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7QUFDakNBLGVBQVFBLEtBQUFBLENBQUFBLGFBQUFBLENBQUFBLEtBQUlBLEVBQUFBLEVBQUFBLElBQUdBLEVBQUNBLFVBQVVBLEVBQUFBLFdBQVVBLEVBQUVBLFFBQVNBLEVBQUFBLENBQU9BLENBQUVBO0tBQ3pEQTtDQUNGLENBQUMsQ0FBQztxQkFFWSxRQUFRIiwiZmlsZSI6InRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvUG9ydHJhaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL3JhY2UnO1xuXG5jb25zdCBQb3J0cmFpdCA9IFJlYWN0LmNyZWF0ZUNsYXNzPGFueSwgYW55Pih7XG4gIC8vIFBvcnRyYWl0IG1hcHMgcmFjZSBJRCB0byBuYW1lIGJlY2F1c2UgdGhlIG5hbWUgaXMgdXNlZCB0byBwaWNrIHVwXG4gIC8vIHRoZSBjb3JyZWN0IHBvcnRyYWl0IGltYWdlIChhIHJlc291cmNlIHdlIG93bikuXG4gIHBvcnRyYWl0KCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnJhY2UpIHtcbiAgICAgIC8vIGNhc2UgcmFjZS5UVUFUSEE6XHQgICByZXR1cm4gXCJUdWF0aGFcIjtcbiAgICAgIGNhc2UgcmFjZS5IQU1BRFJZQUQ6IHJldHVybiBcImhhbWFkcnlhZFwiO1xuICAgICAgY2FzZSByYWNlLkxVQ0hPUlBBTjogcmV0dXJuIFwibHVjaG9ycGFuXCI7XG4gICAgICBjYXNlIHJhY2UuRklSQk9HOiByZXR1cm4gXCJmaXJib2dcIjtcbiAgICAgIGNhc2UgcmFjZS5WQUxLWVJJRTogcmV0dXJuIFwidmFsa3lyaWVcIjtcbiAgICAgIGNhc2UgcmFjZS5IRUxCT1VORDogcmV0dXJuIFwiaGVsYm91bmRcIjtcbiAgICAgIGNhc2UgcmFjZS5GUk9TVEdJQU5UOiByZXR1cm4gXCJmcm9zdGdpYW50XCI7XG4gICAgICAvLyBjYXNlIHJhY2UuRFZFUkdSOiAgICAgIHJldHVybiBcIkR2ZXJnZXJcIjtcbiAgICAgIGNhc2UgcmFjZS5TVFJNOiByZXR1cm4gXCJzdHJtXCI7XG4gICAgICBjYXNlIHJhY2UuQ0FJVFNJVEg6IHJldHVybiBcImNhaXRzaXRoXCI7XG4gICAgICBjYXNlIHJhY2UuR09MRU06IHJldHVybiBcImdvbGVtXCI7XG4gICAgICAvLyBjYXNlIHJhY2UuR0FSR09ZTEU6ICAgIHJldHVybiBcIkdhcmdveWxlXCI7XG4gICAgICBjYXNlIHJhY2UuU1RPUk1SSURFUlQ6IHJldHVybiBcInN0b3JtcmlkZXJ0XCI7XG4gICAgICBjYXNlIHJhY2UuU1RPUk1SSURFUkE6IHJldHVybiBcInN0b3JtcmlkZXJhXCI7XG4gICAgICBjYXNlIHJhY2UuU1RPUk1SSURFUlY6IHJldHVybiBcInN0b3JtcmlkZXJ2XCI7XG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFVjogcmV0dXJuIFwiaHVtYW5tYWxldlwiO1xuICAgICAgY2FzZSByYWNlLkhVTUFOTUFMRUE6IHJldHVybiBcImh1bWFubWFsZWFcIjtcbiAgICAgIGNhc2UgcmFjZS5IVU1BTk1BTEVUOiByZXR1cm4gXCJodW1hbm1hbGV0XCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9LFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9ydHJhaXQgPSB0aGlzLnBvcnRyYWl0KCk7XG4gICAgcmV0dXJuICg8ZGl2IGlkPVwicG9ydHJhaXRcIiBjbGFzc05hbWU9e3BvcnRyYWl0fT48L2Rpdj4pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUG9ydHJhaXQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
