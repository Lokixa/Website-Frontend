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
            lineNumber: 21,
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
            lineNumber: 35,
            columnNumber: 11
          }
        }, "Can't connect to database");
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 10
        }
      }, this.state.items);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzSW5kZXgiLCJpdGVtcyIsIkFycmF5IiwiaSIsInByb3BzIiwiZGF0YSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwibmFtZSIsImxhbmd1YWdlIiwidXJsIiwibGljZW5zZSIsImRlc2NyaXB0aW9uIiwiaGFzRmFpbGVkIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQVlNQSxhOzs7Ozs7Ozs7Ozs7O3dDQUNlO0FBQ25CLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBcEMsRUFBNENILENBQUMsRUFBN0MsRUFBaUQ7QUFDaEQsWUFBSUksT0FBTyxHQUFHLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsQ0FBaEIsQ0FBZDtBQUNBRixhQUFLLENBQUNPLElBQU4sQ0FDQyxNQUFDLCtEQUFEO0FBQ0MsY0FBSSxFQUFFRCxPQUFPLENBQUNFLElBRGY7QUFFQyxrQkFBUSxFQUFFRixPQUFPLENBQUNHLFFBRm5CO0FBR0MsYUFBRyxFQUFFSCxPQUFPLENBQUNJLEdBSGQ7QUFJQyxpQkFBTyxFQUFFSixPQUFPLENBQUNLLE9BSmxCO0FBS0MscUJBQVcsRUFBRUwsT0FBTyxDQUFDTSxXQUx0QjtBQU1DLGFBQUcsRUFBRU4sT0FBTyxDQUFDRSxJQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVVBO0FBQ0Q7Ozs2QkFFUTtBQUNSLFVBQUksS0FBS0wsS0FBTCxDQUFXVSxTQUFmLEVBQTBCO0FBQ3pCLGVBQU8sTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFQO0FBQ0E7O0FBQ0QsYUFBTyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlCLEtBQUtDLEtBQUwsQ0FBV2QsS0FBNUIsQ0FBUDtBQUNBOzs7O0VBdkIwQmUsNENBQUssQ0FBQ0MsUzs7O0FBeUJuQmpCLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjE1MGRlNWMwY2MyMzZlZjQ0ZjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdGF0dXNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9EYk1vZGVscy9Qcm9qZWN0XCI7XHJcbmltcG9ydCBEYlNlcnZpY2UgZnJvbSBcIi4uLy4uL1NlcnZpY2VzL0RiU2VydmljZXNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0ZGF0YTogUHJvamVjdFtdO1xyXG5cdGhhc0ZhaWxlZDogYm9vbGVhbjtcclxufVxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG5cdGl0ZW1zOiBKU1guRWxlbWVudFtdIHwgbnVsbDtcclxufVxyXG5cclxuY2xhc3MgUHJvamVjdHNJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5PEpTWC5FbGVtZW50PigpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHByb2plY3QgPSB0aGlzLnByb3BzLmRhdGFbaV07XHJcblx0XHRcdGl0ZW1zLnB1c2goXHJcblx0XHRcdFx0PFByb2plY3RDYXJkXHJcblx0XHRcdFx0XHRuYW1lPXtwcm9qZWN0Lm5hbWV9XHJcblx0XHRcdFx0XHRsYW5ndWFnZT17cHJvamVjdC5sYW5ndWFnZX1cclxuXHRcdFx0XHRcdHVybD17cHJvamVjdC51cmx9XHJcblx0XHRcdFx0XHRsaWNlbnNlPXtwcm9qZWN0LmxpY2Vuc2V9XHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdGtleT17cHJvamVjdC5uYW1lfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5oYXNGYWlsZWQpIHtcclxuXHRcdFx0cmV0dXJuIDxTdGF0dXM+Q2FuJ3QgY29ubmVjdCB0byBkYXRhYmFzZTwvU3RhdHVzPjtcclxuXHRcdH1cclxuXHRcdHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e3RoaXMuc3RhdGUuaXRlbXN9PC9SZWFjdC5GcmFnbWVudD47XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzSW5kZXg7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdGxldCBkYXRhID0gYXdhaXQgRGJTZXJ2aWNlLmdldFByb2plY3RzKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdGhhc0ZhaWxlZDogZmFsc2UsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==