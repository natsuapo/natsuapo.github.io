"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _timeRangeFilter = _interopRequireDefault(require("../time-range-filter"));

var _icons = require("../../common/icons");

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

var _filterPanelWithFieldSelect = _interopRequireDefault(require("./filter-panel-with-field-select"));

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
TimeRangeFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _timeRangeFilter["default"], _sourceDataSelector["default"]];

function TimeRangeFilterPanelFactory(FieldPanelWithFieldSelect, TimeRangeFilter) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var TimeRangeFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        setFilter = _ref.setFilter,
        removeFilter = _ref.removeFilter,
        toggleAnimation = _ref.toggleAnimation;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    var panelActions = (0, _react.useMemo)(function () {
      return [{
        id: filter.id,
        onClick: enlargeFilter,
        tooltip: 'tooltip.timePlayback',
        iconComponent: _icons.Clock,
        active: filter.enlarged
      }];
    }, [filter.id, filter.enlarged, enlargeFilter]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter,
      panelActions: panelActions
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(TimeRangeFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  TimeRangeFilterPanel.displayName = 'TimeRangeFilterPanel';
  return TimeRangeFilterPanel;
}

var _default = TimeRangeFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy90aW1lLXJhbmdlLWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3QiLCJUaW1lUmFuZ2VGaWx0ZXIiLCJUaW1lUmFuZ2VGaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImRhdGFzZXRzIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiZmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJlbmxhcmdlRmlsdGVyIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwib25TZXRGaWx0ZXIiLCJ2YWx1ZSIsInBhbmVsQWN0aW9ucyIsImlkIiwib25DbGljayIsInRvb2x0aXAiLCJpY29uQ29tcG9uZW50IiwiQ2xvY2siLCJhY3RpdmUiLCJlbmxhcmdlZCIsInR5cGUiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUFBLDJCQUEyQixDQUFDQyxJQUE1QixHQUFtQyxDQUNqQ0Msc0NBRGlDLEVBRWpDQywyQkFGaUMsRUFHakNDLDhCQUhpQyxDQUFuQzs7QUFNQSxTQUFTSiwyQkFBVCxDQUFxQ0sseUJBQXJDLEVBQWdFQyxlQUFoRSxFQUFpRjtBQUMvRTtBQUNBLE1BQU1DLG9CQUFvQixnQkFBR0Msa0JBQU1DLElBQU4sQ0FDM0IsZ0JBVU07QUFBQSxRQVRKQyxHQVNJLFFBVEpBLEdBU0k7QUFBQSxRQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxRQVBKQyxrQkFPSSxRQVBKQSxrQkFPSTtBQUFBLFFBTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLFFBTEpDLG9CQUtJLFFBTEpBLG9CQUtJO0FBQUEsUUFKSkMsYUFJSSxRQUpKQSxhQUlJO0FBQUEsUUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsUUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsUUFESkMsZUFDSSxRQURKQSxlQUNJO0FBQ0osUUFBTUMsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJSixTQUFTLENBQUNOLEdBQUQsRUFBTSxPQUFOLEVBQWVVLEtBQWYsQ0FBYjtBQUFBLEtBQWpCLEVBQXFELENBQUNWLEdBQUQsRUFBTU0sU0FBTixDQUFyRCxDQUFwQjtBQUVBLFFBQU1LLFlBQVksR0FBRyxvQkFDbkI7QUFBQSxhQUFNLENBQ0o7QUFDRUMsUUFBQUEsRUFBRSxFQUFFVCxNQUFNLENBQUNTLEVBRGI7QUFFRUMsUUFBQUEsT0FBTyxFQUFFUixhQUZYO0FBR0VTLFFBQUFBLE9BQU8sRUFBRSxzQkFIWDtBQUlFQyxRQUFBQSxhQUFhLEVBQUVDLFlBSmpCO0FBS0VDLFFBQUFBLE1BQU0sRUFBRWQsTUFBTSxDQUFDZTtBQUxqQixPQURJLENBQU47QUFBQSxLQURtQixFQVVuQixDQUFDZixNQUFNLENBQUNTLEVBQVIsRUFBWVQsTUFBTSxDQUFDZSxRQUFuQixFQUE2QmIsYUFBN0IsQ0FWbUIsQ0FBckI7QUFhQSx3QkFDRSwrRUFDRSxnQ0FBQyx5QkFBRDtBQUNFLE1BQUEsa0JBQWtCLEVBQUVILGtCQUR0QjtBQUVFLE1BQUEsUUFBUSxFQUFFRCxRQUZaO0FBR0UsTUFBQSxNQUFNLEVBQUVFLE1BSFY7QUFJRSxNQUFBLEdBQUcsRUFBRUgsR0FKUDtBQUtFLE1BQUEsWUFBWSxFQUFFTyxZQUxoQjtBQU1FLE1BQUEsU0FBUyxFQUFFRCxTQU5iO0FBT0UsTUFBQSxZQUFZLEVBQUVLO0FBUGhCLE9BU0dSLE1BQU0sQ0FBQ2dCLElBQVAsSUFBZSxDQUFDaEIsTUFBTSxDQUFDZSxRQUF2QixpQkFDQztBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsZUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFZixNQURWO0FBRUUsTUFBQSxHQUFHLEVBQUVILEdBRlA7QUFHRSxNQUFBLG9CQUFvQixFQUFFSSxvQkFIeEI7QUFJRSxNQUFBLGVBQWUsRUFBRUksZUFKbkI7QUFLRSxNQUFBLFNBQVMsRUFBRUM7QUFMYixNQURGLENBVkosQ0FERixDQURGO0FBeUJELEdBcEQwQixDQUE3Qjs7QUF1REFaLEVBQUFBLG9CQUFvQixDQUFDdUIsV0FBckIsR0FBbUMsc0JBQW5DO0FBRUEsU0FBT3ZCLG9CQUFQO0FBQ0Q7O2VBRWNQLDJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy90aW1lLXJhbmdlLWZpbHRlcic7XG5pbXBvcnQge0Nsb2NrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QnO1xuXG5UaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnksXG4gIFRpbWVSYW5nZUZpbHRlckZhY3RvcnksXG4gIFNvdXJjZURhdGFTZWxlY3RvckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIFRpbWVSYW5nZUZpbHRlclBhbmVsRmFjdG9yeShGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0LCBUaW1lUmFuZ2VGaWx0ZXIpIHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vZmlsdGVyLXBhbmVsLXR5cGVzJykuRmlsdGVyUGFuZWxDb21wb25lbnR9ICovXG4gIGNvbnN0IFRpbWVSYW5nZUZpbHRlclBhbmVsID0gUmVhY3QubWVtbyhcbiAgICAoe1xuICAgICAgaWR4LFxuICAgICAgZGF0YXNldHMsXG4gICAgICBhbGxBdmFpbGFibGVGaWVsZHMsXG4gICAgICBmaWx0ZXIsXG4gICAgICBpc0FueUZpbHRlckFuaW1hdGluZyxcbiAgICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgICBzZXRGaWx0ZXIsXG4gICAgICByZW1vdmVGaWx0ZXIsXG4gICAgICB0b2dnbGVBbmltYXRpb25cbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBvblNldEZpbHRlciA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHNldEZpbHRlcihpZHgsICd2YWx1ZScsIHZhbHVlKSwgW2lkeCwgc2V0RmlsdGVyXSk7XG5cbiAgICAgIGNvbnN0IHBhbmVsQWN0aW9ucyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogZmlsdGVyLmlkLFxuICAgICAgICAgICAgb25DbGljazogZW5sYXJnZUZpbHRlcixcbiAgICAgICAgICAgIHRvb2x0aXA6ICd0b29sdGlwLnRpbWVQbGF5YmFjaycsXG4gICAgICAgICAgICBpY29uQ29tcG9uZW50OiBDbG9jayxcbiAgICAgICAgICAgIGFjdGl2ZTogZmlsdGVyLmVubGFyZ2VkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBbZmlsdGVyLmlkLCBmaWx0ZXIuZW5sYXJnZWQsIGVubGFyZ2VGaWx0ZXJdXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0XG4gICAgICAgICAgICBhbGxBdmFpbGFibGVGaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn1cbiAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgICAgcGFuZWxBY3Rpb25zPXtwYW5lbEFjdGlvbnN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpbHRlci50eXBlICYmICFmaWx0ZXIuZW5sYXJnZWQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPFRpbWVSYW5nZUZpbHRlclxuICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyPXtvblNldEZpbHRlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIFRpbWVSYW5nZUZpbHRlclBhbmVsLmRpc3BsYXlOYW1lID0gJ1RpbWVSYW5nZUZpbHRlclBhbmVsJztcblxuICByZXR1cm4gVGltZVJhbmdlRmlsdGVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVSYW5nZUZpbHRlclBhbmVsRmFjdG9yeTtcbiJdfQ==