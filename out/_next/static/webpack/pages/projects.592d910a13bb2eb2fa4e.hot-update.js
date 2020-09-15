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
      var projects = this.props.data;
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
            lineNumber: 22,
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
            lineNumber: 36,
            columnNumber: 11
          }
        }, "Can't connect to database");
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzSW5kZXgiLCJwcm9qZWN0cyIsInByb3BzIiwiZGF0YSIsIml0ZW1zIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwicHJvamVjdCIsInB1c2giLCJuYW1lIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsaWNlbnNlIiwiZGVzY3JpcHRpb24iLCJoYXNGYWlsZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQVlNQSxhOzs7Ozs7Ozs7Ozs7O3dDQUNlO0FBQ25CLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxLQUFMLENBQVdDLElBQTVCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0osS0FBTCxDQUFXQyxJQUFYLENBQWdCSSxNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFpRDtBQUNoRCxZQUFJRSxPQUFPLEdBQUcsS0FBS04sS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxDQUFoQixDQUFkO0FBQ0FGLGFBQUssQ0FBQ0ssSUFBTixDQUNDLE1BQUMsK0RBQUQ7QUFDQyxjQUFJLEVBQUVELE9BQU8sQ0FBQ0UsSUFEZjtBQUVDLGtCQUFRLEVBQUVGLE9BQU8sQ0FBQ0csUUFGbkI7QUFHQyxhQUFHLEVBQUVILE9BQU8sQ0FBQ0ksR0FIZDtBQUlDLGlCQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssT0FKbEI7QUFLQyxxQkFBVyxFQUFFTCxPQUFPLENBQUNNLFdBTHRCO0FBTUMsYUFBRyxFQUFFTixPQUFPLENBQUNFLElBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBVUE7QUFDRDs7OzZCQUVRO0FBQ1IsVUFBSSxLQUFLUixLQUFMLENBQVdhLFNBQWYsRUFBMEI7QUFDekIsZUFBTyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQVA7QUFDQTs7QUFDRCxhQUFPLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBaUIsS0FBS2IsS0FBTCxDQUFXRSxLQUE1QixDQUFQO0FBQ0E7Ozs7RUF4QjBCWSw0Q0FBSyxDQUFDQyxTOzs7QUEwQm5CakIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuNTkyZDkxMGExM2JiMmViMmZhNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0YXR1c1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VzL0RiTW9kZWxzL1Byb2plY3RcIjtcclxuaW1wb3J0IERiU2VydmljZSBmcm9tIFwiLi4vLi4vU2VydmljZXMvRGJTZXJ2aWNlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuXHRkYXRhOiBhbnk7XHJcblx0aGFzRmFpbGVkOiBib29sZWFuO1xyXG59XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcblx0aXRlbXM6IEpTWC5FbGVtZW50W10gfCBudWxsO1xyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0c0luZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zdCBwcm9qZWN0cyA9IHRoaXMucHJvcHMuZGF0YSBhcyBQcm9qZWN0W107XHJcblx0XHRjb25zdCBpdGVtcyA9IG5ldyBBcnJheTxKU1guRWxlbWVudD4oKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwcm9qZWN0ID0gdGhpcy5wcm9wcy5kYXRhW2ldO1xyXG5cdFx0XHRpdGVtcy5wdXNoKFxyXG5cdFx0XHRcdDxQcm9qZWN0Q2FyZFxyXG5cdFx0XHRcdFx0bmFtZT17cHJvamVjdC5uYW1lfVxyXG5cdFx0XHRcdFx0bGFuZ3VhZ2U9e3Byb2plY3QubGFuZ3VhZ2V9XHJcblx0XHRcdFx0XHR1cmw9e3Byb2plY3QudXJsfVxyXG5cdFx0XHRcdFx0bGljZW5zZT17cHJvamVjdC5saWNlbnNlfVxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRrZXk9e3Byb2plY3QubmFtZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMuaGFzRmFpbGVkKSB7XHJcblx0XHRcdHJldHVybiA8U3RhdHVzPkNhbid0IGNvbm5lY3QgdG8gZGF0YWJhc2U8L1N0YXR1cz47XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0aGlzLnByb3BzLml0ZW1zfTwvUmVhY3QuRnJhZ21lbnQ+O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0luZGV4O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRsZXQgZGF0YSA9IGF3YWl0IERiU2VydmljZS5nZXRQcm9qZWN0cygpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRkYXRhLFxyXG5cdFx0XHRoYXNGYWlsZWQ6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=