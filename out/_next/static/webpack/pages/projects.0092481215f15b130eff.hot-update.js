webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects/index.tsx":
/*!**********************************!*\
  !*** ./pages/projects/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProjectCard */ "./components/ProjectCard.tsx");
/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Status */ "./components/Status.tsx");





var _jsxFileName = "C:\\Users\\lubas\\source\\js\\frontend-next\\pages\\projects\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ProjectsIndex = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectsIndex, _React$Component);

  var _super = _createSuper(ProjectsIndex);

  function ProjectsIndex() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectsIndex);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var projects = data;
      var items = new Array();

      for (var i = 0; i < this.props.data.length; i++) {
        var project = this.props.data[i];
        items.push(__jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: project.name,
          language: project.language,
          url: project.url,
          license: project.license,
          description: project.description,
          key: project.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.hasFailed) {
        return __jsx(_components_Status__WEBPACK_IMPORTED_MODULE_7__["Status"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }
        }, "Can't connect to database");
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 10
        }
      }, this.props.items);
    }
  }]);

  return ProjectsIndex;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzSW5kZXgiLCJwcm9qZWN0cyIsImRhdGEiLCJpdGVtcyIsIkFycmF5IiwiaSIsInByb3BzIiwibGVuZ3RoIiwicHJvamVjdCIsInB1c2giLCJuYW1lIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsaWNlbnNlIiwiZGVzY3JpcHRpb24iLCJoYXNGYWlsZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQVFNQSxhOzs7Ozs7Ozs7Ozs7O3dDQUNlO0FBQ25CLFVBQU1DLFFBQVEsR0FBR0MsSUFBakI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxLQUFMLENBQVdKLElBQVgsQ0FBZ0JLLE1BQXBDLEVBQTRDRixDQUFDLEVBQTdDLEVBQWlEO0FBQ2hELFlBQUlHLE9BQU8sR0FBRyxLQUFLRixLQUFMLENBQVdKLElBQVgsQ0FBZ0JHLENBQWhCLENBQWQ7QUFDQUYsYUFBSyxDQUFDTSxJQUFOLENBQ0MsTUFBQywrREFBRDtBQUNDLGNBQUksRUFBRUQsT0FBTyxDQUFDRSxJQURmO0FBRUMsa0JBQVEsRUFBRUYsT0FBTyxDQUFDRyxRQUZuQjtBQUdDLGFBQUcsRUFBRUgsT0FBTyxDQUFDSSxHQUhkO0FBSUMsaUJBQU8sRUFBRUosT0FBTyxDQUFDSyxPQUpsQjtBQUtDLHFCQUFXLEVBQUVMLE9BQU8sQ0FBQ00sV0FMdEI7QUFNQyxhQUFHLEVBQUVOLE9BQU8sQ0FBQ0UsSUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFVQTtBQUNEOzs7NkJBRVE7QUFDUixVQUFJLEtBQUtKLEtBQUwsQ0FBV1MsU0FBZixFQUEwQjtBQUN6QixlQUFPLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBUDtBQUNBOztBQUNELGFBQU8sTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFpQixLQUFLVCxLQUFMLENBQVdILEtBQTVCLENBQVA7QUFDQTs7OztFQXhCMEJhLDRDQUFLLENBQUNDLFM7OztBQTBCbkJqQiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4wMDkyNDgxMjE1ZjE1YjEzMGVmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RhdHVzXCI7XHJcbmltcG9ydCBEYlNlcnZpY2UgZnJvbSBcIi4uLy4uL1NlcnZpY2VzL0RiU2VydmljZXNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0c1N0YXRlIHtcclxuXHRkYXRhOiBKU09OO1xyXG5cdGhhc0ZhaWxlZDogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgUHJvamVjdHNJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9qZWN0c1N0YXRlPiB7XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zdCBwcm9qZWN0cyA9IGRhdGEgYXMgUHJvamVjdFtdO1xyXG5cdFx0Y29uc3QgaXRlbXMgPSBuZXcgQXJyYXk8SlNYLkVsZW1lbnQ+KCk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgcHJvamVjdCA9IHRoaXMucHJvcHMuZGF0YVtpXTtcclxuXHRcdFx0aXRlbXMucHVzaChcclxuXHRcdFx0XHQ8UHJvamVjdENhcmRcclxuXHRcdFx0XHRcdG5hbWU9e3Byb2plY3QubmFtZX1cclxuXHRcdFx0XHRcdGxhbmd1YWdlPXtwcm9qZWN0Lmxhbmd1YWdlfVxyXG5cdFx0XHRcdFx0dXJsPXtwcm9qZWN0LnVybH1cclxuXHRcdFx0XHRcdGxpY2Vuc2U9e3Byb2plY3QubGljZW5zZX1cclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0a2V5PXtwcm9qZWN0Lm5hbWV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGlmICh0aGlzLnByb3BzLmhhc0ZhaWxlZCkge1xyXG5cdFx0XHRyZXR1cm4gPFN0YXR1cz5DYW4ndCBjb25uZWN0IHRvIGRhdGFiYXNlPC9TdGF0dXM+O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57dGhpcy5wcm9wcy5pdGVtc308L1JlYWN0LkZyYWdtZW50PjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNJbmRleDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0bGV0IGRhdGEgPSBhd2FpdCBEYlNlcnZpY2UuZ2V0UHJvamVjdHMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZGF0YSxcclxuXHRcdFx0aGFzRmFpbGVkOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9