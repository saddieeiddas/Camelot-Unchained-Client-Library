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

var _componentsPortrait = require('./components/Portrait');

var _componentsPortrait2 = _interopRequireDefault(_componentsPortrait);

var _componentsName = require('./components/Name');

var _componentsName2 = _interopRequireDefault(_componentsName);

var _componentsHealthBar = require('./components/HealthBar');

var _componentsHealthBar2 = _interopRequireDefault(_componentsHealthBar);

var _componentsHealthText = require('./components/HealthText');

var _componentsHealthText2 = _interopRequireDefault(_componentsHealthText);

var _componentsStaminaBar = require('./components/StaminaBar');

var _componentsStaminaBar2 = _interopRequireDefault(_componentsStaminaBar);

var _componentsStaminaText = require('./components/StaminaText');

var _componentsStaminaText2 = _interopRequireDefault(_componentsStaminaText);

var _componentsEffects = require('./components/Effects');

var _componentsEffects2 = _interopRequireDefault(_componentsEffects);

var _componentsInjuries = require('./components/Injuries');

var _componentsInjuries2 = _interopRequireDefault(_componentsInjuries);

var UnitFrame = React.createClass({
    displayName: 'UnitFrame',

    getInitialState: function getInitialState() {
        return {
            healthWidth: 0,
            staminaWidth: 0
        };
    },
    componentDidMount: function componentDidMount() {
        // get runtime widths of the health and stamina bars.
        this.setState({
            healthWidth: this.refs.healthText.getDOMNode().offsetWidth,
            staminaWidth: this.refs.staminaText.getDOMNode().offsetWidth
        });
    },
    render: function render() {
        var portrait = undefined,
            injuries = undefined,
            visible = undefined;
        // work out the amount of health and stamina to show
        var healthWidth = this.props.maxHealth ? this.props.health / this.props.maxHealth * this.state.healthWidth : 0;
        var staminaWidth = this.props.maxStamina ? this.props.stamina / this.props.maxStamina * this.state.staminaWidth : 0;
        // If this unit frame includes a race (name) display a portrait.
        if (this.props.race !== undefined) {
            portrait = React.createElement(_componentsPortrait2['default'], { "race": this.props.race });
        }
        // If the unit frame has an active target, make sure it is visible.
        // By default Target Unit Frames are not visible (see styles)
        if (this.props.name) {
            visible = { visibility: 'visible' };
        }
        if (this.props.injuries && this.props.injuries.length) {
            injuries = React.createElement(_componentsInjuries2['default'], { "injuries": this.props.injuries });
        }
        // Render the unit frame
        return React.createElement("div", { "id": "unitframe", "className": this.props.className, "style": visible }, portrait, React.createElement(_componentsName2['default'], { "name": this.props.name }), React.createElement(_componentsHealthBar2['default'], { "width": healthWidth }), React.createElement(_componentsHealthText2['default'], { "ref": "healthText", "health": this.props.health, "maxHealth": this.props.maxHealth }), React.createElement(_componentsStaminaBar2['default'], { "width": staminaWidth }), React.createElement(_componentsStaminaText2['default'], { "ref": "staminaText", "stamina": this.props.stamina, "maxStamina": this.props.maxStamina }), injuries, React.createElement(_componentsEffects2['default'], null));
    }
});
exports['default'] = UnitFrame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbXBvbmVudHMvdW5pdGZyYW1lL1VuaXRGcmFtZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3FCQU11QixPQUFPOztJQUFsQixLQUFLOztrQ0FFSSx1QkFBdUI7Ozs7OEJBQzNCLG1CQUFtQjs7OzttQ0FDZCx3QkFBd0I7Ozs7b0NBQ3ZCLHlCQUF5Qjs7OztvQ0FDekIseUJBQXlCOzs7O3FDQUN4QiwwQkFBMEI7Ozs7aUNBQzlCLHNCQUFzQjs7OztrQ0FDckIsdUJBQXVCOzs7O0FBRTVDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUM1QyxtQkFBZSxFQUFFLDJCQUFBO0FBQ2YsZUFBTztBQUNMLHVCQUFXLEVBQUUsQ0FBQztBQUNkLHdCQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO0tBQ0g7QUFDRCxxQkFBaUIsRUFBRSw2QkFBQTs7QUFFakIsWUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLHVCQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVztBQUMxRCx3QkFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVc7U0FDN0QsQ0FBQyxDQUFDO0tBQ0o7QUFDRCxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLFFBQWEsWUFBQTtZQUFFLFFBQWEsWUFBQTtZQUFFLE9BQVksWUFBQSxDQUFDOztBQUcvQyxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNuSCxZQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFHeEgsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDakMsb0JBQVEsR0FBRyxLQUFBLENBQUEsYUFBQSxrQ0FBUyxFQUFBLE1BQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUssRUFBQSxDQUFFLENBQUM7U0FDL0M7OztBQUlELFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsbUJBQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUNyQztBQUVELFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQ3JELG9CQUFRLEdBQUcsS0FBQSxDQUFBLGFBQUEsa0NBQVMsRUFBQSxVQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLEVBQUEsQ0FBRSxDQUFBO1NBQ3REOztBQUdELGVBQ0UsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxJQUFHLEVBQUMsV0FBVyxFQUFBLFdBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVUsRUFBQSxPQUFNLEVBQUUsT0FBUSxFQUFBLEVBQ2pFLFFBQVMsRUFDVixLQUFBLENBQUEsYUFBQSw4QkFBSyxFQUFBLE1BQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUssRUFBQSxDQUFFLEVBQzlCLEtBQUEsQ0FBQSxhQUFBLG1DQUFVLEVBQUEsT0FBTSxFQUFFLFdBQVksRUFBQSxDQUFHLEVBQ2pDLEtBQUEsQ0FBQSxhQUFBLG9DQUFXLEVBQUEsS0FBSSxFQUFDLFlBQVksRUFBQSxRQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFPLEVBQUEsV0FBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVSxFQUFBLENBQUcsRUFDM0YsS0FBQSxDQUFBLGFBQUEsb0NBQVcsRUFBQSxPQUFNLEVBQUUsWUFBYSxFQUFBLENBQUcsRUFDbkMsS0FBQSxDQUFBLGFBQUEscUNBQVksRUFBQSxLQUFJLEVBQUMsYUFBYSxFQUFBLFNBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVEsRUFBQSxZQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFXLEVBQUEsQ0FBRyxFQUNoRyxRQUFTLEVBQ1YsS0FBQSxDQUFBLGFBQUEsaUNBQVEsSUFBQSxDQUFFLENBQ04sQ0FDTjtLQUNIO0NBQ0YsQ0FBQyxDQUFDO3FCQUVZLFNBQVMiLCJmaWxlIjoidHMvY29tcG9uZW50cy91bml0ZnJhbWUvVW5pdEZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBvcnRyYWl0IGZyb20gJy4vY29tcG9uZW50cy9Qb3J0cmFpdCc7XG5pbXBvcnQgTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvTmFtZSc7XG5pbXBvcnQgSGVhbHRoQmFyIGZyb20gJy4vY29tcG9uZW50cy9IZWFsdGhCYXInO1xuaW1wb3J0IEhlYWx0aFRleHQgZnJvbSAnLi9jb21wb25lbnRzL0hlYWx0aFRleHQnO1xuaW1wb3J0IFN0YW1pbmFCYXIgZnJvbSAnLi9jb21wb25lbnRzL1N0YW1pbmFCYXInO1xuaW1wb3J0IFN0YW1pbmFUZXh0IGZyb20gJy4vY29tcG9uZW50cy9TdGFtaW5hVGV4dCc7XG5pbXBvcnQgRWZmZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvRWZmZWN0cyc7XG5pbXBvcnQgSW5qdXJpZXMgZnJvbSAnLi9jb21wb25lbnRzL0luanVyaWVzJztcblxuY29uc3QgVW5pdEZyYW1lID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhbHRoV2lkdGg6IDAsXG4gICAgICBzdGFtaW5hV2lkdGg6IDAsXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIGdldCBydW50aW1lIHdpZHRocyBvZiB0aGUgaGVhbHRoIGFuZCBzdGFtaW5hIGJhcnMuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoZWFsdGhXaWR0aDogdGhpcy5yZWZzLmhlYWx0aFRleHQuZ2V0RE9NTm9kZSgpLm9mZnNldFdpZHRoLFxuICAgICAgc3RhbWluYVdpZHRoOiB0aGlzLnJlZnMuc3RhbWluYVRleHQuZ2V0RE9NTm9kZSgpLm9mZnNldFdpZHRoXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHBvcnRyYWl0OiBhbnksIGluanVyaWVzOiBhbnksIHZpc2libGU6IGFueTtcblxuICAgIC8vIHdvcmsgb3V0IHRoZSBhbW91bnQgb2YgaGVhbHRoIGFuZCBzdGFtaW5hIHRvIHNob3dcbiAgICBjb25zdCBoZWFsdGhXaWR0aCA9IHRoaXMucHJvcHMubWF4SGVhbHRoID8gKHRoaXMucHJvcHMuaGVhbHRoIC8gdGhpcy5wcm9wcy5tYXhIZWFsdGgpICogdGhpcy5zdGF0ZS5oZWFsdGhXaWR0aCA6IDA7XG4gICAgY29uc3Qgc3RhbWluYVdpZHRoID0gdGhpcy5wcm9wcy5tYXhTdGFtaW5hID8gKHRoaXMucHJvcHMuc3RhbWluYSAvIHRoaXMucHJvcHMubWF4U3RhbWluYSkgKiB0aGlzLnN0YXRlLnN0YW1pbmFXaWR0aCA6IDA7XG5cbiAgICAvLyBJZiB0aGlzIHVuaXQgZnJhbWUgaW5jbHVkZXMgYSByYWNlIChuYW1lKSBkaXNwbGF5IGEgcG9ydHJhaXQuXG4gICAgaWYgKHRoaXMucHJvcHMucmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb3J0cmFpdCA9IDxQb3J0cmFpdCByYWNlPXt0aGlzLnByb3BzLnJhY2V9Lz47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVuaXQgZnJhbWUgaGFzIGFuIGFjdGl2ZSB0YXJnZXQsIG1ha2Ugc3VyZSBpdCBpcyB2aXNpYmxlLlxuICAgIC8vIEJ5IGRlZmF1bHQgVGFyZ2V0IFVuaXQgRnJhbWVzIGFyZSBub3QgdmlzaWJsZSAoc2VlIHN0eWxlcylcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICB2aXNpYmxlID0geyB2aXNpYmlsaXR5OiAndmlzaWJsZScgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmp1cmllcyAmJiB0aGlzLnByb3BzLmluanVyaWVzLmxlbmd0aCkge1xuICAgICAgaW5qdXJpZXMgPSA8SW5qdXJpZXMgaW5qdXJpZXM9e3RoaXMucHJvcHMuaW5qdXJpZXN9Lz5cbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgdGhlIHVuaXQgZnJhbWVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInVuaXRmcmFtZVwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt2aXNpYmxlfT5cbiAgICAgICAge3BvcnRyYWl0fVxuICAgICAgICA8TmFtZSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9Lz5cbiAgICAgICAgPEhlYWx0aEJhciB3aWR0aD17aGVhbHRoV2lkdGh9IC8+XG4gICAgICAgIDxIZWFsdGhUZXh0IHJlZj1cImhlYWx0aFRleHRcIiBoZWFsdGg9e3RoaXMucHJvcHMuaGVhbHRofSBtYXhIZWFsdGg9e3RoaXMucHJvcHMubWF4SGVhbHRofSAvPlxuICAgICAgICA8U3RhbWluYUJhciB3aWR0aD17c3RhbWluYVdpZHRofSAvPlxuICAgICAgICA8U3RhbWluYVRleHQgcmVmPVwic3RhbWluYVRleHRcIiBzdGFtaW5hPXt0aGlzLnByb3BzLnN0YW1pbmF9IG1heFN0YW1pbmE9e3RoaXMucHJvcHMubWF4U3RhbWluYX0gLz5cbiAgICAgICAge2luanVyaWVzfVxuICAgICAgICA8RWZmZWN0cy8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVW5pdEZyYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
