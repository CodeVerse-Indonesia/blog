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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authLinks.module.css */ \"(app-pages-browser)/./src/components/authLinks/authLinks.module.css\");\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthLinks = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // sementara\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            status == \"notauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                children: \"Masuk\"\n            }, void 0, false, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/write\",\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                        children: \"Tulis\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                        children: \"Keluar\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger),\n                onClick: ()=>setOpen(!open),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().line)\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().responsiveMenu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Tentang\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Kontak\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    status === \"notauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        children: \"Masuk\"\n                    }, void 0, false, {\n                        fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/write\",\n                                children: \"Tulis\"\n                            }, void 0, false, {\n                                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                children: \"Keluar\"\n                            }, void 0, false, {\n                                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/muhamad/Documents/blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AuthLinks, \"NDL8hEj+xPpMNhJ8RcHE74wD8pc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = AuthLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthLinks);\nvar _c;\n$RefreshReg$(_c, \"AuthLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGhMaW5rcy9BdXRoTGlua3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVpQztBQUNXO0FBQ2Y7QUFDeUI7QUFFdEQsTUFBTUssWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLFlBQVk7SUFDWixNQUFNLEVBQUVRLE1BQU0sRUFBRSxHQUFHSiwyREFBVUE7SUFDN0IscUJBQ0U7O1lBQ0dJLFVBQVUsbUNBQ1QsOERBQUNOLGtEQUFJQTtnQkFBQ08sTUFBSztnQkFBU0MsV0FBV1QsbUVBQVc7MEJBQUU7Ozs7OzBDQUk1Qzs7a0NBQ0UsOERBQUNDLGtEQUFJQTt3QkFBQ08sTUFBSzt3QkFBU0MsV0FBV1QsbUVBQVc7a0NBQUU7Ozs7OztrQ0FHNUMsOERBQUNXO3dCQUFLRixXQUFXVCxtRUFBVzt3QkFBRVksU0FBU1Ysb0RBQU9BO2tDQUFFOzs7Ozs7OzswQkFLcEQsOERBQUNXO2dCQUFJSixXQUFXVCxxRUFBYTtnQkFBRVksU0FBUyxJQUFNTixRQUFRLENBQUNEOztrQ0FDckQsOERBQUNRO3dCQUFJSixXQUFXVCxtRUFBVzs7Ozs7O2tDQUMzQiw4REFBQ2E7d0JBQUlKLFdBQVdULG1FQUFXOzs7Ozs7a0NBQzNCLDhEQUFDYTt3QkFBSUosV0FBV1QsbUVBQVc7Ozs7Ozs7Ozs7OztZQUU1Qkssc0JBQ0MsOERBQUNRO2dCQUFJSixXQUFXVCw2RUFBcUI7O2tDQUNuQyw4REFBQ0Msa0RBQUlBO3dCQUFDTyxNQUFLO2tDQUFJOzs7Ozs7a0NBQ2YsOERBQUNQLGtEQUFJQTt3QkFBQ08sTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDUCxrREFBSUE7d0JBQUNPLE1BQUs7a0NBQUk7Ozs7OztvQkFDZEQsV0FBVyxtQ0FDViw4REFBQ04sa0RBQUlBO3dCQUFDTyxNQUFLO2tDQUFTOzs7OztrREFFcEI7OzBDQUNFLDhEQUFDUCxrREFBSUE7Z0NBQUNPLE1BQUs7MENBQVM7Ozs7OzswQ0FDcEIsOERBQUNHO2dDQUFLRixXQUFXVCxtRUFBVzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU81QztHQTFDTUk7O1FBR2VELHVEQUFVQTs7O0tBSHpCQztBQTRDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoTGlua3MvQXV0aExpbmtzLmpzeD9hOWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hdXRoTGlua3MubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgQXV0aExpbmtzID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHNlbWVudGFyYVxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c3RhdHVzID09IFwibm90YXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgTWFzdWtcbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICBUdWxpc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBvbkNsaWNrPXtzaWduT3V0fT5cbiAgICAgICAgICAgIEtlbHVhclxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge29wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNpdmVNZW51fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWVwYWdlPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+VGVudGFuZzwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPktvbnRhazwvTGluaz5cbiAgICAgICAgICB7c3RhdHVzID09PSBcIm5vdGF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5NYXN1azwvTGluaz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlR1bGlzPC9MaW5rPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5LZWx1YXI8L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoTGlua3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJMaW5rIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJBdXRoTGlua3MiLCJvcGVuIiwic2V0T3BlbiIsInN0YXR1cyIsImhyZWYiLCJjbGFzc05hbWUiLCJsaW5rIiwic3BhbiIsIm9uQ2xpY2siLCJkaXYiLCJidXJnZXIiLCJsaW5lIiwicmVzcG9uc2l2ZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx\n"));

/***/ })

});