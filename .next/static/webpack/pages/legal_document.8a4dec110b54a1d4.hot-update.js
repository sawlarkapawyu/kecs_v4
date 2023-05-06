"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/legal_document",{

/***/ "./pages/legal_document/index.js":
/*!***************************************!*\
  !*** ./pages/legal_document/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _components_elements_Counterup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/Counterup */ \"./components/elements/Counterup.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LegalDocumentsTable = (param)=>{\n    let { legalDocuments  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient)();\n    const [filterTypes, setFilterTypes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filterDepartments, setFilterDepartments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filterIssueDate, setFilterIssueDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const data = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>legalDocuments.map((doc)=>{\n            return {\n                id: doc.id,\n                title: doc.title,\n                type: doc.legal_type.name,\n                department: doc.department.name,\n                issue_date: doc.issue_date,\n                doc_url: doc.doc_url\n            };\n        }), [\n        legalDocuments\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container py-4 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap mt-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LegalDocumentsTable, \"uPCrIbCUAh+ZJIsECFLhOzoaG0c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient\n    ];\n});\n_c = LegalDocumentsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LegalDocumentsTable);\nvar _c;\n$RefreshReg$(_c, \"LegalDocumentsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWdhbF9kb2N1bWVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDTztBQUNSO0FBQ3NCO0FBQ2pDO0FBQ0U7QUFDQztBQUVPO0FBRWxELE1BQU1ZLHNCQUFzQixTQUF3QjtRQUF2QixFQUFFQyxlQUFjLEVBQUU7O0lBQzNDLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNUSxXQUFXVCwrRUFBaUJBO0lBRWxDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2UsbUJBQW1CQyxxQkFBcUIsR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0QsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1tQixPQUFPcEIsb0RBQWEsQ0FDdEIsSUFDRVcsZUFBZVcsR0FBRyxDQUFDLENBQUNDLE1BQVE7WUFDMUIsT0FBTztnQkFDTEMsSUFBSUQsSUFBSUMsRUFBRTtnQkFDVkMsT0FBT0YsSUFBSUUsS0FBSztnQkFDaEJDLE1BQU1ILElBQUlJLFVBQVUsQ0FBQ0MsSUFBSTtnQkFDekJDLFlBQVlOLElBQUlNLFVBQVUsQ0FBQ0QsSUFBSTtnQkFDL0JFLFlBQVlQLElBQUlPLFVBQVU7Z0JBQzFCQyxTQUFTUixJQUFJUSxPQUFPO1lBQ3RCO1FBQ0YsSUFDRjtRQUFDcEI7S0FBZTtJQUdwQixxQkFDSTtrQkFDSSw0RUFBQ2IsaUVBQU1BO3NCQUVILDRFQUFDa0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQztHQXBDTXZCOztRQUNhTCxrREFBU0E7UUFDUEQsMkVBQWlCQTs7O0tBRmhDTTtBQXNDTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlZ2FsX2RvY3VtZW50L2luZGV4LmpzPzE2NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IENvdW50ZXJVcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lbGVtZW50cy9Db3VudGVydXBcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVzZXIsIHVzZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEb3dubG9hZCB9IGZyb20gJ2hlcm9pY29ucy1yZWFjdCc7XG5cbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VGaWx0ZXJzIH0gZnJvbSAncmVhY3QtdGFibGUnXG5cbmNvbnN0IExlZ2FsRG9jdW1lbnRzVGFibGUgPSAoeyBsZWdhbERvY3VtZW50cyB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSB1c2VTdXBhYmFzZUNsaWVudCgpO1xuICAgIFxuICAgIGNvbnN0IFtmaWx0ZXJUeXBlcywgc2V0RmlsdGVyVHlwZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2ZpbHRlckRlcGFydG1lbnRzLCBzZXRGaWx0ZXJEZXBhcnRtZW50c10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbZmlsdGVySXNzdWVEYXRlLCBzZXRGaWx0ZXJJc3N1ZURhdGVdID0gdXNlU3RhdGUoJycpXG4gICAgXG4gICAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgICAgICgpID0+XG4gICAgICAgICAgbGVnYWxEb2N1bWVudHMubWFwKChkb2MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAgIHRpdGxlOiBkb2MudGl0bGUsXG4gICAgICAgICAgICAgIHR5cGU6IGRvYy5sZWdhbF90eXBlLm5hbWUsXG4gICAgICAgICAgICAgIGRlcGFydG1lbnQ6IGRvYy5kZXBhcnRtZW50Lm5hbWUsXG4gICAgICAgICAgICAgIGlzc3VlX2RhdGU6IGRvYy5pc3N1ZV9kYXRlLFxuICAgICAgICAgICAgICBkb2NfdXJsOiBkb2MuZG9jX3VybCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgW2xlZ2FsRG9jdW1lbnRzXVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVnYWxEb2N1bWVudHNUYWJsZTsiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ291bnRlclVwIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVVzZXIiLCJ1c2VTdXBhYmFzZUNsaWVudCIsInVzZVJvdXRlciIsIkRhdGVQaWNrZXIiLCJEb3dubG9hZCIsInVzZVRhYmxlIiwidXNlRmlsdGVycyIsIkxlZ2FsRG9jdW1lbnRzVGFibGUiLCJsZWdhbERvY3VtZW50cyIsInJvdXRlciIsInN1cGFiYXNlIiwiZmlsdGVyVHlwZXMiLCJzZXRGaWx0ZXJUeXBlcyIsImZpbHRlckRlcGFydG1lbnRzIiwic2V0RmlsdGVyRGVwYXJ0bWVudHMiLCJmaWx0ZXJJc3N1ZURhdGUiLCJzZXRGaWx0ZXJJc3N1ZURhdGUiLCJkYXRhIiwidXNlTWVtbyIsIm1hcCIsImRvYyIsImlkIiwidGl0bGUiLCJ0eXBlIiwibGVnYWxfdHlwZSIsIm5hbWUiLCJkZXBhcnRtZW50IiwiaXNzdWVfZGF0ZSIsImRvY191cmwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/legal_document/index.js\n"));

/***/ })

});