"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuantileDomain = getQuantileDomain;
exports.getOrdinalDomain = getOrdinalDomain;
exports.getLinearDomain = getLinearDomain;
exports.getLogDomain = getLogDomain;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _dataUtils = require("./data-utils");

var _d3Array = require("d3-array");

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

/**
 * return quantile domain for an array of data
 * @type {typeof import('./data-scale-utils').getQuantileDomain}
 */
function getQuantileDomain(data, valueAccessor, sortFunc) {
  var values = typeof valueAccessor === 'function' ? data.map(valueAccessor) : data;
  return values.filter(_dataUtils.notNullorUndefined).sort(sortFunc);
}
/**
 * return ordinal domain for a data container
 * @type {typeof import('./data-scale-utils').getOrdinalDomain}
 */


function getOrdinalDomain(dataContainer, valueAccessor) {
  var values = dataContainer.mapIndex(valueAccessor);
  return (0, _dataUtils.unique)(values).filter(_dataUtils.notNullorUndefined).sort();
}
/**
 * return linear domain for an array of data
 * @type {typeof import('./data-scale-utils').getLinearDomain}
 */


function getLinearDomain(data, valueAccessor) {
  var range = typeof valueAccessor === 'function' ? (0, _d3Array.extent)(data, valueAccessor) : (0, _d3Array.extent)(data); // @ts-ignore

  return range.map(function (d, i) {
    return d === undefined ? i : d;
  });
}
/**
 * return linear domain for an array of data. A log scale domain cannot contain 0
 * @type {typeof import('./data-scale-utils').getLogDomain}
 */


function getLogDomain(data, valueAccessor) {
  var _getLinearDomain = getLinearDomain(data, valueAccessor),
      _getLinearDomain2 = (0, _slicedToArray2["default"])(_getLinearDomain, 2),
      d0 = _getLinearDomain2[0],
      d1 = _getLinearDomain2[1];

  return [d0 === 0 ? 1e-5 : d0, d1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhLXNjYWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbImdldFF1YW50aWxlRG9tYWluIiwiZGF0YSIsInZhbHVlQWNjZXNzb3IiLCJzb3J0RnVuYyIsInZhbHVlcyIsIm1hcCIsImZpbHRlciIsIm5vdE51bGxvclVuZGVmaW5lZCIsInNvcnQiLCJnZXRPcmRpbmFsRG9tYWluIiwiZGF0YUNvbnRhaW5lciIsIm1hcEluZGV4IiwiZ2V0TGluZWFyRG9tYWluIiwicmFuZ2UiLCJkIiwiaSIsInVuZGVmaW5lZCIsImdldExvZ0RvbWFpbiIsImQwIiwiZDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsYUFBakMsRUFBZ0RDLFFBQWhELEVBQTBEO0FBQy9ELE1BQU1DLE1BQU0sR0FBRyxPQUFPRixhQUFQLEtBQXlCLFVBQXpCLEdBQXNDRCxJQUFJLENBQUNJLEdBQUwsQ0FBU0gsYUFBVCxDQUF0QyxHQUFnRUQsSUFBL0U7QUFFQSxTQUFPRyxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsNkJBQWQsRUFBa0NDLElBQWxDLENBQXVDTCxRQUF2QyxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU00sZ0JBQVQsQ0FBMEJDLGFBQTFCLEVBQXlDUixhQUF6QyxFQUF3RDtBQUM3RCxNQUFNRSxNQUFNLEdBQUdNLGFBQWEsQ0FBQ0MsUUFBZCxDQUF1QlQsYUFBdkIsQ0FBZjtBQUVBLFNBQU8sdUJBQU9FLE1BQVAsRUFDSkUsTUFESSxDQUNHQyw2QkFESCxFQUVKQyxJQUZJLEVBQVA7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxlQUFULENBQXlCWCxJQUF6QixFQUErQkMsYUFBL0IsRUFBOEM7QUFDbkQsTUFBTVcsS0FBSyxHQUFHLE9BQU9YLGFBQVAsS0FBeUIsVUFBekIsR0FBc0MscUJBQU9ELElBQVAsRUFBYUMsYUFBYixDQUF0QyxHQUFvRSxxQkFBT0QsSUFBUCxDQUFsRixDQURtRCxDQUVuRDs7QUFDQSxTQUFPWSxLQUFLLENBQUNSLEdBQU4sQ0FBVSxVQUFDUyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFXRCxDQUFDLEtBQUtFLFNBQU4sR0FBa0JELENBQWxCLEdBQXNCRCxDQUFqQztBQUFBLEdBQVYsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNHLFlBQVQsQ0FBc0JoQixJQUF0QixFQUE0QkMsYUFBNUIsRUFBMkM7QUFBQSx5QkFDL0JVLGVBQWUsQ0FBQ1gsSUFBRCxFQUFPQyxhQUFQLENBRGdCO0FBQUE7QUFBQSxNQUN6Q2dCLEVBRHlDO0FBQUEsTUFDckNDLEVBRHFDOztBQUVoRCxTQUFPLENBQUNELEVBQUUsS0FBSyxDQUFQLEdBQVcsSUFBWCxHQUFrQkEsRUFBbkIsRUFBdUJDLEVBQXZCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMiBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkLCB1bmlxdWV9IGZyb20gJy4vZGF0YS11dGlscyc7XG5pbXBvcnQge2V4dGVudH0gZnJvbSAnZDMtYXJyYXknO1xuXG4vKipcbiAqIHJldHVybiBxdWFudGlsZSBkb21haW4gZm9yIGFuIGFycmF5IG9mIGRhdGFcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtc2NhbGUtdXRpbHMnKS5nZXRRdWFudGlsZURvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YW50aWxlRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IsIHNvcnRGdW5jKSB7XG4gIGNvbnN0IHZhbHVlcyA9IHR5cGVvZiB2YWx1ZUFjY2Vzc29yID09PSAnZnVuY3Rpb24nID8gZGF0YS5tYXAodmFsdWVBY2Nlc3NvcikgOiBkYXRhO1xuXG4gIHJldHVybiB2YWx1ZXMuZmlsdGVyKG5vdE51bGxvclVuZGVmaW5lZCkuc29ydChzb3J0RnVuYyk7XG59XG5cbi8qKlxuICogcmV0dXJuIG9yZGluYWwgZG9tYWluIGZvciBhIGRhdGEgY29udGFpbmVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXNjYWxlLXV0aWxzJykuZ2V0T3JkaW5hbERvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxEb21haW4oZGF0YUNvbnRhaW5lciwgdmFsdWVBY2Nlc3Nvcikge1xuICBjb25zdCB2YWx1ZXMgPSBkYXRhQ29udGFpbmVyLm1hcEluZGV4KHZhbHVlQWNjZXNzb3IpO1xuXG4gIHJldHVybiB1bmlxdWUodmFsdWVzKVxuICAgIC5maWx0ZXIobm90TnVsbG9yVW5kZWZpbmVkKVxuICAgIC5zb3J0KCk7XG59XG5cbi8qKlxuICogcmV0dXJuIGxpbmVhciBkb21haW4gZm9yIGFuIGFycmF5IG9mIGRhdGFcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtc2NhbGUtdXRpbHMnKS5nZXRMaW5lYXJEb21haW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lYXJEb21haW4oZGF0YSwgdmFsdWVBY2Nlc3Nvcikge1xuICBjb25zdCByYW5nZSA9IHR5cGVvZiB2YWx1ZUFjY2Vzc29yID09PSAnZnVuY3Rpb24nID8gZXh0ZW50KGRhdGEsIHZhbHVlQWNjZXNzb3IpIDogZXh0ZW50KGRhdGEpO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByYW5nZS5tYXAoKGQsIGkpID0+IChkID09PSB1bmRlZmluZWQgPyBpIDogZCkpO1xufVxuXG4vKipcbiAqIHJldHVybiBsaW5lYXIgZG9tYWluIGZvciBhbiBhcnJheSBvZiBkYXRhLiBBIGxvZyBzY2FsZSBkb21haW4gY2Fubm90IGNvbnRhaW4gMFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1zY2FsZS11dGlscycpLmdldExvZ0RvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0RvbWFpbihkYXRhLCB2YWx1ZUFjY2Vzc29yKSB7XG4gIGNvbnN0IFtkMCwgZDFdID0gZ2V0TGluZWFyRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IpO1xuICByZXR1cm4gW2QwID09PSAwID8gMWUtNSA6IGQwLCBkMV07XG59XG4iXX0=