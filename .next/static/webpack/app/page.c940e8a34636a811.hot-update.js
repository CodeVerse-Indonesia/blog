"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx":
/*!************************************************!*\
  !*** ./src/components/authLinks/AuthLinks.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authLinks.module.css */ \"(app-pages-browser)/./src/components/authLinks/authLinks.module.css\");\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AuthLinks = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // sementara\n    const { status } = useSession();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            status == \"notauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: \"Masuk\"\n            }, void 0, false, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/write\",\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                        children: \"Tulis\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                        children: \"Keluar\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger),\n                onClick: ()=>setOpen(!open),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().responsiveMenu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Tentang\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Kontak\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    status == \"notauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        children: \"Masuk\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/write\",\n                                children: \"Tulis\"\n                            }, void 0, false, {\n                                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Keluar\"\n                            }, void 0, false, {\n                                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AuthLinks, \"NDL8hEj+xPpMNhJ8RcHE74wD8pc=\", true);\n_c = AuthLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthLinks);\nvar _c;\n$RefreshReg$(_c, \"AuthLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGhMaW5rcy9BdXRoTGlua3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUNmO0FBRTdCLE1BQU1HLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxZQUFZO0lBQ1osTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0M7SUFDbkIscUJBQ0U7O1lBQ0dELFVBQVUsbUNBQ1QsOERBQUNKLGtEQUFJQTtnQkFBQ00sTUFBSztnQkFBU0MsV0FBV1IsbUVBQVc7MEJBQUU7Ozs7OzBDQUk1Qzs7a0NBQ0UsOERBQUNDLGtEQUFJQTt3QkFBQ00sTUFBSzt3QkFBU0MsV0FBV1IsbUVBQVc7a0NBQUU7Ozs7OztrQ0FHNUMsOERBQUNVO3dCQUFLRixXQUFXUixtRUFBVztrQ0FBRTs7Ozs7Ozs7MEJBR2xDLDhEQUFDVztnQkFBSUgsV0FBV1IscUVBQWE7Z0JBQUVhLFNBQVMsSUFBTVQsUUFBUSxDQUFDRDs7a0NBQ3JELDhEQUFDUTt3QkFBSUgsV0FBV1IsbUVBQVc7Ozs7OztrQ0FDM0IsOERBQUNXO3dCQUFJSCxXQUFXUixtRUFBVzs7Ozs7O2tDQUMzQiw4REFBQ1c7d0JBQUlILFdBQVdSLG1FQUFXOzs7Ozs7Ozs7Ozs7WUFFNUJHLHNCQUNDLDhEQUFDUTtnQkFBSUgsV0FBV1IsNkVBQXFCOztrQ0FDbkMsOERBQUNDLGtEQUFJQTt3QkFBQ00sTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDTixrREFBSUE7d0JBQUNNLE1BQUs7a0NBQUk7Ozs7OztrQ0FDZiw4REFBQ04sa0RBQUlBO3dCQUFDTSxNQUFLO2tDQUFJOzs7Ozs7b0JBQ2RGLFVBQVUsbUNBQ1QsOERBQUNKLGtEQUFJQTt3QkFBQ00sTUFBSztrQ0FBUzs7Ozs7a0RBRXBCOzswQ0FDRSw4REFBQ04sa0RBQUlBO2dDQUFDTSxNQUFLOzBDQUFTOzs7Ozs7MENBQ3BCLDhEQUFDRzswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtHQXhDTVI7S0FBQUE7QUEwQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aExpbmtzL0F1dGhMaW5rcy5qc3g/YTlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXV0aExpbmtzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQXV0aExpbmtzID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHNlbWVudGFyYVxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c3RhdHVzID09IFwibm90YXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgTWFzdWtcbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICBUdWxpc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5LZWx1YXI8L3NwYW4+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXNwb25zaXZlTWVudX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lcGFnZTwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlRlbnRhbmc8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Lb250YWs8L0xpbms+XG4gICAgICAgICAge3N0YXR1cyA9PSBcIm5vdGF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5NYXN1azwvTGluaz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlR1bGlzPC9MaW5rPlxuICAgICAgICAgICAgICA8c3Bhbj5LZWx1YXI8L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoTGlua3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJMaW5rIiwiQXV0aExpbmtzIiwib3BlbiIsInNldE9wZW4iLCJzdGF0dXMiLCJ1c2VTZXNzaW9uIiwiaHJlZiIsImNsYXNzTmFtZSIsImxpbmsiLCJzcGFuIiwiZGl2IiwiYnVyZ2VyIiwib25DbGljayIsImxpbmUiLCJyZXNwb25zaXZlTWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx\n"));

/***/ })

});