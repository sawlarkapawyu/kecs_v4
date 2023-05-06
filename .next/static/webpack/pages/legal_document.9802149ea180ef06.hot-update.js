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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _components_elements_Counterup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/Counterup */ \"./components/elements/Counterup.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LegalDocument = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient)();\n    const [documents, setDocuments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filteredDocuments, setFilteredDocuments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterType, setFilterType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterDepartment, setFilterDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterIssueDate, setFilterIssueDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchDocuments();\n    }, []);\n    const fetchDocuments = async ()=>{\n        const { data , error  } = await supabase.from(\"legal_document\").select(\"*\").order(\"id\", {\n            ascending: false\n        });\n        if (error) {\n            console.error(\"Error fetching documents:\", error.message);\n        } else {\n            setDocuments(data);\n            setFilteredDocuments(data);\n        }\n    };\n    const handleSearch = (e)=>{\n        setSearchTerm(e.target.value);\n        filterDocuments(e.target.value, filterType, filterDepartment, filterIssueDate);\n    };\n    const handleTypeFilter = (e)=>{\n        setFilterType(e.target.value);\n        filterDocuments(searchTerm, e.target.value, filterDepartment, filterIssueDate);\n    };\n    const handleDepartmentFilter = (e)=>{\n        setFilterDepartment(e.target.value);\n        filterDocuments(searchTerm, filterType, e.target.value, filterIssueDate);\n    };\n    const handleIssueDateFilter = (e)=>{\n        setFilterIssueDate(e.target.value);\n        filterDocuments(searchTerm, filterType, filterDepartment, e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pt-40 pb-12 -mt-24 bg-blueGray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated\",\n                            children: \"Business License Registration\"\n                        }, void 0, false, {\n                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex pb-12 text-sm text-gray-500 lg:text-sm wow animate__animated animate__fadeIn animated\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-800 hover:text-blue-500\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            className: \"w-auto h-5 text-gray-300\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-800 hover:text-blue-500\",\n                                            children: \"Resources\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            className: \"w-auto h-5 text-gray-300\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Legal Documents\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LegalDocument, \"aKJxv/OwoLstbPzeOuADx46c9Hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient\n    ];\n});\n_c = LegalDocument;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LegalDocument);\nvar _c;\n$RefreshReg$(_c, \"LegalDocument\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFVO2dEQUFVQyxHQUFFO2dEQUFxSEMsYUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR25LLDhEQUFDVDtvQ0FBR0osV0FBVTs4Q0FDViw0RUFBQ2M7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdEM7R0FuRk0vQzs7UUFDYUQsa0RBQVNBO1FBQ1BELDJFQUFpQkE7OztLQUZoQ0U7QUFxRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVnYWxfZG9jdW1lbnQvaW5kZXguanM/MTY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgQ291bnRlclVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VsZW1lbnRzL0NvdW50ZXJ1cFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBMZWdhbERvY3VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcbiAgICBcbiAgICBjb25zdCBbZG9jdW1lbnRzLCBzZXREb2N1bWVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmaWx0ZXJlZERvY3VtZW50cywgc2V0RmlsdGVyZWREb2N1bWVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZmlsdGVyVHlwZSwgc2V0RmlsdGVyVHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2ZpbHRlckRlcGFydG1lbnQsIHNldEZpbHRlckRlcGFydG1lbnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtmaWx0ZXJJc3N1ZURhdGUsIHNldEZpbHRlcklzc3VlRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEb2N1bWVudHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBmZXRjaERvY3VtZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgIC5mcm9tKCdsZWdhbF9kb2N1bWVudCcpXG4gICAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgICAgICAgICAgIC5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkb2N1bWVudHM6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXREb2N1bWVudHMoZGF0YSk7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZERvY3VtZW50cyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICAgIGZpbHRlckRvY3VtZW50cyhlLnRhcmdldC52YWx1ZSwgZmlsdGVyVHlwZSwgZmlsdGVyRGVwYXJ0bWVudCwgZmlsdGVySXNzdWVEYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVHlwZUZpbHRlciA9IChlKSA9PiB7XG4gICAgc2V0RmlsdGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgZmlsdGVyRG9jdW1lbnRzKHNlYXJjaFRlcm0sIGUudGFyZ2V0LnZhbHVlLCBmaWx0ZXJEZXBhcnRtZW50LCBmaWx0ZXJJc3N1ZURhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZXBhcnRtZW50RmlsdGVyID0gKGUpID0+IHtcbiAgICBzZXRGaWx0ZXJEZXBhcnRtZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBmaWx0ZXJEb2N1bWVudHMoc2VhcmNoVGVybSwgZmlsdGVyVHlwZSwgZS50YXJnZXQudmFsdWUsIGZpbHRlcklzc3VlRGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUlzc3VlRGF0ZUZpbHRlciA9IChlKSA9PiB7XG4gICAgc2V0RmlsdGVySXNzdWVEYXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBmaWx0ZXJEb2N1bWVudHMoc2VhcmNoVGVybSwgZmlsdGVyVHlwZSwgZmlsdGVyRGVwYXJ0bWVudCwgZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtNDAgcGItMTIgLW10LTI0IGJnLWJsdWVHcmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC0yeGwgZm9udC1ib2xkIGxnOnRleHQtNXhsIHdvdyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZWRcIj5CdXNpbmVzcyBMaWNlbnNlIFJlZ2lzdHJhdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBwYi0xMiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbGc6dGV4dC1zbSB3b3cgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBjbGFzc05hbWU9XCJ3LWF1dG8gaC01IHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuMjkzIDE0LjcwN2ExIDEgMCAwMTAtMS40MTRMMTAuNTg2IDEwIDcuMjkzIDYuNzA3YTEgMSAwIDAxMS40MTQtMS40MTRsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgY2xhc3NOYW1lPVwidy1hdXRvIGgtNSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxlZ2FsIERvY3VtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWdhbERvY3VtZW50OyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJDb3VudGVyVXAiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwidXNlUm91dGVyIiwiTGVnYWxEb2N1bWVudCIsInJvdXRlciIsInN1cGFiYXNlIiwiZG9jdW1lbnRzIiwic2V0RG9jdW1lbnRzIiwiZmlsdGVyZWREb2N1bWVudHMiLCJzZXRGaWx0ZXJlZERvY3VtZW50cyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmlsdGVyVHlwZSIsInNldEZpbHRlclR5cGUiLCJmaWx0ZXJEZXBhcnRtZW50Iiwic2V0RmlsdGVyRGVwYXJ0bWVudCIsImZpbHRlcklzc3VlRGF0ZSIsInNldEZpbHRlcklzc3VlRGF0ZSIsImZldGNoRG9jdW1lbnRzIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJEb2N1bWVudHMiLCJoYW5kbGVUeXBlRmlsdGVyIiwiaGFuZGxlRGVwYXJ0bWVudEZpbHRlciIsImhhbmRsZUlzc3VlRGF0ZUZpbHRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJhIiwiaHJlZiIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/legal_document/index.js\n"));

/***/ })

});