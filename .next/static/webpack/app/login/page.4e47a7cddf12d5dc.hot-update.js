"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.jsx":
/*!********************************!*\
  !*** ./src/app/login/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loginPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage.module.css */ \"(app-pages-browser)/./src/app/login/loginPage.module.css\");\n/* harmony import */ var _loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LoginPage = ()=>{\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log(data, status);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (status === \"authenticated\") {\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    children: \"Masuk dengan Google\"\n                }, void 0, false, {\n                    fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButton),\n                    children: \"Masuk dengan Github\"\n                }, void 0, false, {\n                    fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_loginPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButton),\n                    children: \"Masuk dengan Facebook\"\n                }, void 0, false, {\n                    fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/muhamad/Documents/blog/src/app/login/page.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"H1a9HdVcQdmPZqkUFV9G+j8pnzM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUQ7QUFDVDtBQUU1QyxNQUFNRyxZQUFZOztJQUNoQixNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdKLDJEQUFVQTtJQUNuQ0ssUUFBUUMsR0FBRyxDQUFDSCxNQUFNQztJQUNsQixJQUFJQSxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNHO1lBQUlDLFdBQVdQLHNFQUFjO3NCQUFFOzs7Ozs7SUFDekM7SUFDQSxJQUFJRyxXQUFXLGlCQUFpQjtRQUM5Qk0sT0FBT0MsSUFBSSxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0o7UUFBSUMsV0FBV1Asd0VBQWdCO2tCQUM5Qiw0RUFBQ007WUFBSUMsV0FBV1Asc0VBQWM7OzhCQUM1Qiw4REFBQ007b0JBQUlDLFdBQVdQLDJFQUFtQjtvQkFBRWMsU0FBUyxJQUFNaEIsdURBQU1BLENBQUM7OEJBQVc7Ozs7Ozs4QkFHdEUsOERBQUNRO29CQUFJQyxXQUFXUCwyRUFBbUI7OEJBQUU7Ozs7Ozs4QkFDckMsOERBQUNNO29CQUFJQyxXQUFXUCwyRUFBbUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0dBcEJNQzs7UUFDcUJGLHVEQUFVQTs7O0tBRC9CRTtBQXNCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanN4PzMyODQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvZ2luUGFnZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc29sZS5sb2coZGF0YSwgc3RhdHVzKTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxCdXR0b259IG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdvb2dsZVwiKX0+XG4gICAgICAgICAgTWFzdWsgZGVuZ2FuIEdvb2dsZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxCdXR0b259Pk1hc3VrIGRlbmdhbiBHaXRodWI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxCdXR0b259Pk1hc3VrIGRlbmdhbiBGYWNlYm9vazwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsic2lnbkluIiwidXNlU2Vzc2lvbiIsInN0eWxlcyIsIkxvZ2luUGFnZSIsImRhdGEiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZyIsInJvdXRlciIsInB1c2giLCJjb250YWluZXIiLCJ3cmFwcGVyIiwic29jaWFsQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.jsx\n"));

/***/ })

});