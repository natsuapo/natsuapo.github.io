"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

/** @typedef {import('./progress-bar').ProgressBarProps} ProgressBarProps */
var StyledBar = _styledComponents["default"].span.attrs({
  className: 'progress-bar__bar'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  /* transition: width 200ms; */\n  display: block;\n"])), function (props) {
  return props.barColor || props.theme.progressBarColor;
});

var StyledTrack = _styledComponents["default"].div.attrs({
  className: 'progress-bar'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n"])), function (props) {
  return props.trackColor || props.theme.progressBarTrackColor;
});
/** @type {React.FunctionComponent<ProgressBarProps>} */


var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 4 : _ref$height,
      isLoading = _ref.isLoading,
      barColor = _ref.barColor,
      trackColor = _ref.trackColor,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledTrack, {
    trackColor: trackColor,
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(StyledBar, {
    barColor: barColor,
    style: {
      width: percent,
      height: "".concat(height, "px"),
      opacity: isLoading ? 1 : 0
    }
  }));
};

var _default = ProgressBar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wcm9ncmVzcy1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkQmFyIiwic3R5bGVkIiwic3BhbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJiYXJDb2xvciIsInRoZW1lIiwicHJvZ3Jlc3NCYXJDb2xvciIsIlN0eWxlZFRyYWNrIiwiZGl2IiwidHJhY2tDb2xvciIsInByb2dyZXNzQmFyVHJhY2tDb2xvciIsIlByb2dyZXNzQmFyIiwicGVyY2VudCIsImhlaWdodCIsImlzTG9hZGluZyIsIndpZHRoIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFrQjtBQUNsQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHVCLENBQWxCLENBQUgseUtBR08sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGdCQUFsQztBQUFBLENBSFosQ0FBZjs7QUFPQSxJQUFNQyxXQUFXLEdBQUdSLDZCQUFPUyxHQUFQLENBQVdQLEtBQVgsQ0FBaUI7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRTtBQUR3QixDQUFqQixDQUFILHNIQUdLLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLFVBQU4sSUFBb0JOLEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxxQkFBcEM7QUFBQSxDQUhWLENBQWpCO0FBTUE7OztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEseUJBQVdDLE1BQVg7QUFBQSxNQUFXQSxNQUFYLDRCQUFvQixDQUFwQjtBQUFBLE1BQXVCQyxTQUF2QixRQUF1QkEsU0FBdkI7QUFBQSxNQUFrQ1YsUUFBbEMsUUFBa0NBLFFBQWxDO0FBQUEsTUFBNENLLFVBQTVDLFFBQTRDQSxVQUE1QztBQUFBLE1BQXdESixLQUF4RCxRQUF3REEsS0FBeEQ7QUFBQSxzQkFDbEIsZ0NBQUMsV0FBRDtBQUFhLElBQUEsVUFBVSxFQUFFSSxVQUF6QjtBQUFxQyxJQUFBLEtBQUssRUFBRUo7QUFBNUMsa0JBQ0UsZ0NBQUMsU0FBRDtBQUNFLElBQUEsUUFBUSxFQUFFRCxRQURaO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFBQ1csTUFBQUEsS0FBSyxFQUFFSCxPQUFSO0FBQWlCQyxNQUFBQSxNQUFNLFlBQUtBLE1BQUwsT0FBdkI7QUFBd0NHLE1BQUFBLE9BQU8sRUFBRUYsU0FBUyxHQUFHLENBQUgsR0FBTztBQUFqRTtBQUZULElBREYsQ0FEa0I7QUFBQSxDQUFwQjs7ZUFTZUgsVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMiBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcHJvZ3Jlc3MtYmFyJykuUHJvZ3Jlc3NCYXJQcm9wc30gUHJvZ3Jlc3NCYXJQcm9wcyAqL1xuXG5jb25zdCBTdHlsZWRCYXIgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3Byb2dyZXNzLWJhcl9fYmFyJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFyQ29sb3IgfHwgcHJvcHMudGhlbWUucHJvZ3Jlc3NCYXJDb2xvcn07XG4gIC8qIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zOyAqL1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5jb25zdCBTdHlsZWRUcmFjayA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdwcm9ncmVzcy1iYXInXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50cmFja0NvbG9yIHx8IHByb3BzLnRoZW1lLnByb2dyZXNzQmFyVHJhY2tDb2xvcn07XG5gO1xuXG4vKiogQHR5cGUge1JlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb2dyZXNzQmFyUHJvcHM+fSAqL1xuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoe3BlcmNlbnQsIGhlaWdodCA9IDQsIGlzTG9hZGluZywgYmFyQ29sb3IsIHRyYWNrQ29sb3IsIHRoZW1lfSkgPT4gKFxuICA8U3R5bGVkVHJhY2sgdHJhY2tDb2xvcj17dHJhY2tDb2xvcn0gdGhlbWU9e3RoZW1lfT5cbiAgICA8U3R5bGVkQmFyXG4gICAgICBiYXJDb2xvcj17YmFyQ29sb3J9XG4gICAgICBzdHlsZT17e3dpZHRoOiBwZXJjZW50LCBoZWlnaHQ6IGAke2hlaWdodH1weGAsIG9wYWNpdHk6IGlzTG9hZGluZyA/IDEgOiAwfX1cbiAgICAvPlxuICA8L1N0eWxlZFRyYWNrPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0=