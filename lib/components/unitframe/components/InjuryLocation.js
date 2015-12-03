/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var InjuryLocation = React.createClass({
    displayName: "InjuryLocation",

    render: function render() {
        var name = undefined;
        switch (this.part) {
            case 0:
                name = "Torso";
                break;
            default:
                name = "Torso";
                break;
        }
        return React.createElement("div", { "id": "injury-location" }, name);
    }
});
exports["default"] = InjuryLocation;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvSW5qdXJ5TG9jYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O0FBRWpCLElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUNqRCxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLElBQWEsWUFBQSxDQUFDO0FBQ2xCLGdCQUFPLElBQUksQ0FBQyxJQUFJO0FBQ2hCLGlCQUFLLENBQUM7QUFBRSxvQkFBSSxHQUFHLE9BQU8sQ0FBQztBQUFDLHNCQUFNO0FBQUEsQUFDOUI7QUFBUyxvQkFBSSxHQUFHLE9BQU8sQ0FBQztBQUFDLHNCQUFNO0FBQUEsU0FDOUI7QUFDRCxlQUFRLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsSUFBRyxFQUFDLGlCQUFpQixFQUFBLEVBQUUsSUFBSyxDQUFNLENBQUU7S0FDakQ7Q0FDRixDQUFDLENBQUM7cUJBRVksY0FBYyIsImZpbGUiOiJ0cy9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL0luanVyeUxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5qdXJ5TG9jYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBuYW1lIDogc3RyaW5nO1xuICAgIHN3aXRjaCh0aGlzLnBhcnQpIHtcbiAgICBjYXNlIDA6IG5hbWUgPSBcIlRvcnNvXCI7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IG5hbWUgPSBcIlRvcnNvXCI7IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJpbmp1cnktbG9jYXRpb25cIj57bmFtZX08L2Rpdj4pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5qdXJ5TG9jYXRpb247XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
