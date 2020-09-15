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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ProjectCard */ "./components/ProjectCard.tsx");
/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Status */ "./components/Status.tsx");







var _jsxFileName = "C:\\Users\\lubas\\source\\js\\frontend-next\\pages\\projects\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ProjectsIndex = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectsIndex, _React$Component);

  var _super = _createSuper(ProjectsIndex);

  function ProjectsIndex() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectsIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      items: null
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.items) {
        var items = new Array();

        for (var i = 0; i < this.props.data.length; i++) {
          var project = this.props.data[i];
          items.push(__jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: project.name,
            language: project.language,
            url: project.url,
            license: project.license,
            description: project.description,
            key: project.name,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 6
            }
          }));
        }

        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.hasFailed) {
        return __jsx(_components_Status__WEBPACK_IMPORTED_MODULE_9__["Status"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }
        }, "Can't connect to database");
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 10
        }
      }, this.state.items);
    }
  }]);

  return ProjectsIndex;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzSW5kZXgiLCJpdGVtcyIsInN0YXRlIiwiQXJyYXkiLCJpIiwicHJvcHMiLCJkYXRhIiwibGVuZ3RoIiwicHJvamVjdCIsInB1c2giLCJuYW1lIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsaWNlbnNlIiwiZGVzY3JpcHRpb24iLCJzZXRTdGF0ZSIsImhhc0ZhaWxlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQVlNQSxhOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNVO0FBQ2RDLFdBQUssRUFBRTtBQURPLEs7Ozs7Ozs7d0NBR0s7QUFDbkIsVUFBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBaEIsRUFBdUI7QUFDdEIsWUFBTUEsS0FBSyxHQUFHLElBQUlFLEtBQUosRUFBZDs7QUFDQSxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFwQyxFQUE0Q0gsQ0FBQyxFQUE3QyxFQUFpRDtBQUNoRCxjQUFJSSxPQUFPLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCRixDQUFoQixDQUFkO0FBQ0FILGVBQUssQ0FBQ1EsSUFBTixDQUNDLE1BQUMsK0RBQUQ7QUFDQyxnQkFBSSxFQUFFRCxPQUFPLENBQUNFLElBRGY7QUFFQyxvQkFBUSxFQUFFRixPQUFPLENBQUNHLFFBRm5CO0FBR0MsZUFBRyxFQUFFSCxPQUFPLENBQUNJLEdBSGQ7QUFJQyxtQkFBTyxFQUFFSixPQUFPLENBQUNLLE9BSmxCO0FBS0MsdUJBQVcsRUFBRUwsT0FBTyxDQUFDTSxXQUx0QjtBQU1DLGVBQUcsRUFBRU4sT0FBTyxDQUFDRSxJQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQVVBOztBQUNELGFBQUtLLFFBQUwsQ0FBYztBQUFFZCxlQUFLLEVBQUxBO0FBQUYsU0FBZDtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUNSLFVBQUksS0FBS0ksS0FBTCxDQUFXVyxTQUFmLEVBQTBCO0FBQ3pCLGVBQU8sTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFQO0FBQ0E7O0FBQ0QsYUFBTyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlCLEtBQUtkLEtBQUwsQ0FBV0QsS0FBNUIsQ0FBUDtBQUNBOzs7O0VBN0IwQmdCLDRDQUFLLENBQUNDLFM7OztBQStCbkJsQiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4yYWEzZGIzZGU1MmFkZTY2YTU3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RhdHVzXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvRGJNb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgRGJTZXJ2aWNlIGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9EYlNlcnZpY2VzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdGRhdGE6IFByb2plY3RbXTtcclxuXHRoYXNGYWlsZWQ6IGJvb2xlYW47XHJcbn1cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRpdGVtczogSlNYLkVsZW1lbnRbXSB8IG51bGw7XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3RzSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblx0c3RhdGU6IFN0YXRlID0ge1xyXG5cdFx0aXRlbXM6IG51bGwsXHJcblx0fTtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGlmICghdGhpcy5zdGF0ZS5pdGVtcykge1xyXG5cdFx0XHRjb25zdCBpdGVtcyA9IG5ldyBBcnJheTxKU1guRWxlbWVudD4oKTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgcHJvamVjdCA9IHRoaXMucHJvcHMuZGF0YVtpXTtcclxuXHRcdFx0XHRpdGVtcy5wdXNoKFxyXG5cdFx0XHRcdFx0PFByb2plY3RDYXJkXHJcblx0XHRcdFx0XHRcdG5hbWU9e3Byb2plY3QubmFtZX1cclxuXHRcdFx0XHRcdFx0bGFuZ3VhZ2U9e3Byb2plY3QubGFuZ3VhZ2V9XHJcblx0XHRcdFx0XHRcdHVybD17cHJvamVjdC51cmx9XHJcblx0XHRcdFx0XHRcdGxpY2Vuc2U9e3Byb2plY3QubGljZW5zZX1cclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdGtleT17cHJvamVjdC5uYW1lfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpdGVtcyB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGlmICh0aGlzLnByb3BzLmhhc0ZhaWxlZCkge1xyXG5cdFx0XHRyZXR1cm4gPFN0YXR1cz5DYW4ndCBjb25uZWN0IHRvIGRhdGFiYXNlPC9TdGF0dXM+O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57dGhpcy5zdGF0ZS5pdGVtc308L1JlYWN0LkZyYWdtZW50PjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNJbmRleDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0bGV0IGRhdGEgPSBhd2FpdCBEYlNlcnZpY2UuZ2V0UHJvamVjdHMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZGF0YSxcclxuXHRcdFx0aGFzRmFpbGVkOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9