"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./..");

// Copyright (c) 2022 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var CloudStorageItems = [{
  label: 'Save',
  icon: _.Icons.Save2,
  key: 'data',
  onClick: function onClick(props) {
    return props.onSaveMap;
  }
}, {
  label: 'Settings',
  icon: _.Icons.Gear,
  key: 'settings',
  onClick: function onClick(props) {
    return props.onExportData;
  }
}];
var PanelHeaderDropdown = (0, _.PanelHeaderDropdownFactory)();

var CloudStorageDropdown = function CloudStorageDropdown(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
    items: CloudStorageItems,
    show: show,
    onClose: onClose,
    id: "cloud-storage"
  });
};

var _default = CloudStorageDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY2xvdWQtc3RvcmFnZS1kcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJDbG91ZFN0b3JhZ2VJdGVtcyIsImxhYmVsIiwiaWNvbiIsIkljb25zIiwiU2F2ZTIiLCJrZXkiLCJvbkNsaWNrIiwicHJvcHMiLCJvblNhdmVNYXAiLCJHZWFyIiwib25FeHBvcnREYXRhIiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIkNsb3VkU3RvcmFnZURyb3Bkb3duIiwic2hvdyIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxpQkFBaUIsR0FBRyxDQUN4QjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFQyxFQUFBQSxJQUFJLEVBQUVDLFFBQU1DLEtBRmQ7QUFHRUMsRUFBQUEsR0FBRyxFQUFFLE1BSFA7QUFJRUMsRUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxTQUFWO0FBQUE7QUFKaEIsQ0FEd0IsRUFPeEI7QUFDRVAsRUFBQUEsS0FBSyxFQUFFLFVBRFQ7QUFFRUMsRUFBQUEsSUFBSSxFQUFFQyxRQUFNTSxJQUZkO0FBR0VKLEVBQUFBLEdBQUcsRUFBRSxVQUhQO0FBSUVDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csWUFBVjtBQUFBO0FBSmhCLENBUHdCLENBQTFCO0FBZUEsSUFBTUMsbUJBQW1CLEdBQUcsbUNBQTVCOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBcUI7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ2hELHNCQUNFLGdDQUFDLG1CQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVkLGlCQURUO0FBRUUsSUFBQSxJQUFJLEVBQUVhLElBRlI7QUFHRSxJQUFBLE9BQU8sRUFBRUMsT0FIWDtBQUlFLElBQUEsRUFBRSxFQUFDO0FBSkwsSUFERjtBQVFELENBVEQ7O2VBV2VGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnksIEljb25zfSBmcm9tICdjb21wb25lbnRzJztcblxuY29uc3QgQ2xvdWRTdG9yYWdlSXRlbXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NhdmUnLFxuICAgIGljb246IEljb25zLlNhdmUyLFxuICAgIGtleTogJ2RhdGEnLFxuICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZU1hcFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTZXR0aW5ncycsXG4gICAgaWNvbjogSWNvbnMuR2VhcixcbiAgICBrZXk6ICdzZXR0aW5ncycsXG4gICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnREYXRhXG4gIH1cbl07XG5cbmNvbnN0IFBhbmVsSGVhZGVyRHJvcGRvd24gPSBQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeSgpO1xuXG5jb25zdCBDbG91ZFN0b3JhZ2VEcm9wZG93biA9ICh7c2hvdywgb25DbG9zZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFuZWxIZWFkZXJEcm9wZG93blxuICAgICAgaXRlbXM9e0Nsb3VkU3RvcmFnZUl0ZW1zfVxuICAgICAgc2hvdz17c2hvd31cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICBpZD1cImNsb3VkLXN0b3JhZ2VcIlxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG91ZFN0b3JhZ2VEcm9wZG93bjtcbiJdfQ==