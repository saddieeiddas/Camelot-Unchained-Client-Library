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

var _InjuryLocation = require('./InjuryLocation');

var _InjuryLocation2 = _interopRequireDefault(_InjuryLocation);

var _InjuryBar = require('./InjuryBar');

var _InjuryBar2 = _interopRequireDefault(_InjuryBar);

var _InjuryText = require('./InjuryText');

var _InjuryText2 = _interopRequireDefault(_InjuryText);

var _InjuryWounds = require('./InjuryWounds');

var _InjuryWounds2 = _interopRequireDefault(_InjuryWounds);

// Display list of injuries.  Only injuries not 100% are shown
var Injury = React.createClass({
    displayName: 'Injury',

    getInitialState: function getInitialState() {
        return {
            healthWidth: 0
        };
    },
    componentDidMount: function componentDidMount() {
        // get runtime widths of the health and stamina bars.
        this.setState({
            healthWidth: this.refs.injuryText.getDOMNode().offsetWidth
        });
    },
    render: function render() {
        var injury = this.props.injury;
        var width = injury.maxHealth ? injury.health / injury.maxHealth * this.state.healthWidth : 0;
        return React.createElement("div", { "id": "injury-" + injury.part, "className": "cse-injury" }, React.createElement(_InjuryLocation2['default'], { "part": injury.part }), React.createElement(_InjuryBar2['default'], { "width": width }), React.createElement(_InjuryText2['default'], { "ref": "injuryText", "health": injury.health, "maxHealth": injury.maxHealth }), React.createElement(_InjuryWounds2['default'], { "wounds": injury.wounds }));
    }
});
exports['default'] = Injury;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL2NvbXBvbmVudHMvSW5qdXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7OzhCQUVVLGtCQUFrQjs7Ozt5QkFDdkIsYUFBYTs7OzswQkFDWixjQUFjOzs7OzRCQUNaLGdCQUFnQjs7Ozs7QUFHekMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7O0FBQ3pDLG1CQUFlLEVBQUUsMkJBQUE7QUFDZixlQUFPO0FBQ0wsdUJBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztLQUNIO0FBQ0QscUJBQWlCLEVBQUUsNkJBQUE7O0FBRWpCLFlBQUksQ0FBQyxRQUFRLENBQUM7QUFDWix1QkFBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVc7U0FDM0QsQ0FBQyxDQUFDO0tBQ0o7QUFDRCxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNqQyxZQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLEFBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNqRyxlQUNFLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsSUFBRyxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSyxFQUFBLFdBQVUsRUFBQyxZQUFZLEVBQUEsRUFDdEQsS0FBQSxDQUFBLGFBQUEsOEJBQWUsRUFBQSxNQUFLLEVBQUUsTUFBTSxDQUFDLElBQUssRUFBQSxDQUFFLEVBQ3BDLEtBQUEsQ0FBQSxhQUFBLHlCQUFVLEVBQUEsT0FBTSxFQUFFLEtBQU0sRUFBQSxDQUFFLEVBQzFCLEtBQUEsQ0FBQSxhQUFBLDBCQUFXLEVBQUEsS0FBSSxFQUFDLFlBQVksRUFBQSxRQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU8sRUFBQSxXQUFVLEVBQUUsTUFBTSxDQUFDLFNBQVUsRUFBQSxDQUFFLEVBQ2xGLEtBQUEsQ0FBQSxhQUFBLDRCQUFhLEVBQUEsUUFBTyxFQUFFLE1BQU0sQ0FBQyxNQUFPLEVBQUEsQ0FBRSxDQUNsQyxDQUNOO0tBQ0g7Q0FDRixDQUFDLENBQUM7cUJBRVksTUFBTSIsImZpbGUiOiJ0cy9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL0luanVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbmp1cnlMb2NhdGlvbiBmcm9tICcuL0luanVyeUxvY2F0aW9uJztcbmltcG9ydCBJbmp1cnlCYXIgZnJvbSAnLi9Jbmp1cnlCYXInO1xuaW1wb3J0IEluanVyeVRleHQgZnJvbSAnLi9Jbmp1cnlUZXh0JztcbmltcG9ydCBJbmp1cnlXb3VuZHMgZnJvbSAnLi9Jbmp1cnlXb3VuZHMnO1xuXG4vLyBEaXNwbGF5IGxpc3Qgb2YgaW5qdXJpZXMuICBPbmx5IGluanVyaWVzIG5vdCAxMDAlIGFyZSBzaG93blxuY29uc3QgSW5qdXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhbHRoV2lkdGg6IDAsXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIGdldCBydW50aW1lIHdpZHRocyBvZiB0aGUgaGVhbHRoIGFuZCBzdGFtaW5hIGJhcnMuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoZWFsdGhXaWR0aDogdGhpcy5yZWZzLmluanVyeVRleHQuZ2V0RE9NTm9kZSgpLm9mZnNldFdpZHRoLFxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluanVyeSA9IHRoaXMucHJvcHMuaW5qdXJ5O1xuICAgIGNvbnN0IHdpZHRoID0gaW5qdXJ5Lm1heEhlYWx0aCA/IChpbmp1cnkuaGVhbHRoIC8gaW5qdXJ5Lm1heEhlYWx0aCkgKiB0aGlzLnN0YXRlLmhlYWx0aFdpZHRoIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17XCJpbmp1cnktXCIgKyBpbmp1cnkucGFydH0gY2xhc3NOYW1lPVwiY3NlLWluanVyeVwiPlxuICAgICAgICA8SW5qdXJ5TG9jYXRpb24gcGFydD17aW5qdXJ5LnBhcnR9Lz5cbiAgICAgICAgPEluanVyeUJhciB3aWR0aD17d2lkdGh9Lz5cbiAgICAgICAgPEluanVyeVRleHQgcmVmPVwiaW5qdXJ5VGV4dFwiIGhlYWx0aD17aW5qdXJ5LmhlYWx0aH0gbWF4SGVhbHRoPXtpbmp1cnkubWF4SGVhbHRofS8+XG4gICAgICAgIDxJbmp1cnlXb3VuZHMgd291bmRzPXtpbmp1cnkud291bmRzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5qdXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
