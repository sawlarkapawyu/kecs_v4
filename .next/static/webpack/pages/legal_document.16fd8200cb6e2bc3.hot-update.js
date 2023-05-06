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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _components_elements_Counterup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/Counterup */ \"./components/elements/Counterup.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LegalDocument = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient)();\n    const [documents, setDocuments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filteredDocuments, setFilteredDocuments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterType, setFilterType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterDepartment, setFilterDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filterIssueDate, setFilterIssueDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchDocuments();\n    }, []);\n    const fetchDocuments = async ()=>{\n        const { data , error  } = await supabase.from(\"legal_document\").select(\"*\").order(\"id\", {\n            ascending: false\n        });\n        if (error) {\n            console.error(\"Error fetching documents:\", error.message);\n        } else {\n            setDocuments(data);\n            setFilteredDocuments(data);\n        }\n    };\n    const handleSearch = (e)=>{\n        setSearchTerm(e.target.value);\n        filterDocuments(e.target.value, filterType, filterDepartment, filterIssueDate);\n    };\n    const handleTypeFilter = (e)=>{\n        setFilterType(e.target.value);\n        filterDocuments(searchTerm, e.target.value, filterDepartment, filterIssueDate);\n    };\n    const handleDepartmentFilter = (e)=>{\n        setFilterDepartment(e.target.value);\n        filterDocuments(searchTerm, filterType, e.target.value, filterIssueDate);\n    };\n    const handleIssueDateFilter = (e)=>{\n        setFilterIssueDate(e.target.value);\n        filterDocuments(searchTerm, filterType, filterDepartment, e.target.value);\n    };\n    const filterDocuments = (search, type, department, issueDate)=>{\n        let filtered = documents;\n        if (search) {\n            filtered = filtered.filter((doc)=>doc.title.toLowerCase().includes(search.toLowerCase()) || doc.type.toLowerCase().includes(search.toLowerCase()) || doc.department.toLowerCase().includes(search.toLowerCase()));\n        }\n        if (type) {\n            filtered = filtered.filter((doc)=>doc.type.toLowerCase() === type.toLowerCase());\n        }\n        if (department) {\n            filtered = filtered.filter((doc)=>doc.department.toLowerCase() === department.toLowerCase());\n        }\n        if (issueDate) {\n            filtered = filtered.filter((doc)=>doc.issue_date === issueDate);\n        }\n        setFilteredDocuments(filtered);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pt-40 pb-12 -mt-24 bg-blueGray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated\",\n                            children: \"Business License Registration\"\n                        }, void 0, false, {\n                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex pb-12 text-sm text-gray-500 lg:text-sm wow animate__animated animate__fadeIn animated\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-800 hover:text-blue-500\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            className: \"w-auto h-5 text-gray-300\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-800 hover:text-blue-500\",\n                                            children: \"Resources\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            className: \"w-auto h-5 text-gray-300\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"inline-flex items-center text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Legal Documents\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                lineNumber: 86,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LegalDocument, \"aKJxv/OwoLstbPzeOuADx46c9Hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient\n    ];\n});\n_c = LegalDocument;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LegalDocument);\nvar _c;\n$RefreshReg$(_c, \"LegalDocument\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9OLFdBQVdNLFdBQVc7UUFDN0YsQ0FBQztRQUVELElBQUlMLFdBQVc7WUFDYkMsV0FBV0EsU0FBU0MsTUFBTSxDQUFDLENBQUNDLE1BQVFBLElBQUlJLFVBQVUsS0FBS1A7UUFDekQsQ0FBQztRQUVEN0IscUJBQXFCOEI7SUFDekI7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQzVDLGlFQUFNQTtzQkFDSCw0RUFBQ21EO2dCQUFRQyxXQUFVOzBCQUNmLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFHRixXQUFVO3NDQUFxRjs7Ozs7O3NDQUNuRyw4REFBQ0c7NEJBQUdILFdBQVU7OzhDQUNWLDhEQUFDSTtvQ0FBR0osV0FBVTs7c0RBQ1YsOERBQUNLOzRDQUFFQyxNQUFLOzRDQUFJTixXQUFVO3NEQUFvQzs7Ozs7O3NEQUcxRCw4REFBQ087NENBQUlDLE1BQUs7NENBQWVDLFNBQVE7NENBQVlULFdBQVU7c0RBQ25ELDRFQUFDVTtnREFBS0MsYUFBVTtnREFBVUMsR0FBRTtnREFBcUhDLGFBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUduSyw4REFBQ1Q7b0NBQUdKLFdBQVU7O3NEQUNWLDhEQUFDSzs0Q0FBRUMsTUFBSzs0Q0FBSU4sV0FBVTtzREFBb0M7Ozs7OztzREFHMUQsOERBQUNPOzRDQUFJQyxNQUFLOzRDQUFlQyxTQUFROzRDQUFZVCxXQUFVO3NEQUNuRCw0RUFBQ1U7Z0RBQUtDLGFBQVU7Z0RBQVVDLEdBQUU7Z0RBQXFIQyxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHbkssOERBQUNUO29DQUFHSixXQUFVOzhDQUNWLDRFQUFDYztrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0QztHQTlHTTFEOztRQUNhRCxrREFBU0E7UUFDUEQsMkVBQWlCQTs7O0tBRmhDRTtBQWdITiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWdhbF9kb2N1bWVudC9pbmRleC5qcz8xNjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBDb3VudGVyVXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZWxlbWVudHMvQ291bnRlcnVwXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyLCB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IExlZ2FsRG9jdW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSB1c2VTdXBhYmFzZUNsaWVudCgpO1xuICAgIFxuICAgIGNvbnN0IFtkb2N1bWVudHMsIHNldERvY3VtZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2ZpbHRlcmVkRG9jdW1lbnRzLCBzZXRGaWx0ZXJlZERvY3VtZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBzZXRGaWx0ZXJUeXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZmlsdGVyRGVwYXJ0bWVudCwgc2V0RmlsdGVyRGVwYXJ0bWVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2ZpbHRlcklzc3VlRGF0ZSwgc2V0RmlsdGVySXNzdWVEYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERvY3VtZW50cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoRG9jdW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oJ2xlZ2FsX2RvY3VtZW50JylcbiAgICAgICAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgICAgICAgLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRvY3VtZW50czonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldERvY3VtZW50cyhkYXRhKTtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkRG9jdW1lbnRzKGRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBmaWx0ZXJEb2N1bWVudHMoZS50YXJnZXQudmFsdWUsIGZpbHRlclR5cGUsIGZpbHRlckRlcGFydG1lbnQsIGZpbHRlcklzc3VlRGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVR5cGVGaWx0ZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGaWx0ZXJUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZmlsdGVyRG9jdW1lbnRzKHNlYXJjaFRlcm0sIGUudGFyZ2V0LnZhbHVlLCBmaWx0ZXJEZXBhcnRtZW50LCBmaWx0ZXJJc3N1ZURhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZXBhcnRtZW50RmlsdGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0RmlsdGVyRGVwYXJ0bWVudChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGZpbHRlckRvY3VtZW50cyhzZWFyY2hUZXJtLCBmaWx0ZXJUeXBlLCBlLnRhcmdldC52YWx1ZSwgZmlsdGVySXNzdWVEYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSXNzdWVEYXRlRmlsdGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0RmlsdGVySXNzdWVEYXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZmlsdGVyRG9jdW1lbnRzKHNlYXJjaFRlcm0sIGZpbHRlclR5cGUsIGZpbHRlckRlcGFydG1lbnQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyRG9jdW1lbnRzID0gKHNlYXJjaCwgdHlwZSwgZGVwYXJ0bWVudCwgaXNzdWVEYXRlKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGRvY3VtZW50cztcbiAgICBcbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGRvYykgPT5cbiAgICAgICAgICAgICAgICBkb2MudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICBkb2MudHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgIGRvYy5kZXBhcnRtZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoKGRvYykgPT4gZG9jLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoZGVwYXJ0bWVudCkge1xuICAgICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKChkb2MpID0+IGRvYy5kZXBhcnRtZW50LnRvTG93ZXJDYXNlKCkgPT09IGRlcGFydG1lbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGlzc3VlRGF0ZSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKChkb2MpID0+IGRvYy5pc3N1ZV9kYXRlID09PSBpc3N1ZURhdGUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNldEZpbHRlcmVkRG9jdW1lbnRzKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTQwIHBiLTEyIC1tdC0yNCBiZy1ibHVlR3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtMnhsIGZvbnQtYm9sZCBsZzp0ZXh0LTV4bCB3b3cgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluIGFuaW1hdGVkXCI+QnVzaW5lc3MgTGljZW5zZSBSZWdpc3RyYXRpb248L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggcGItMTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGxnOnRleHQtc20gd293IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiBhbmltYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgY2xhc3NOYW1lPVwidy1hdXRvIGgtNSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGNsYXNzTmFtZT1cInctYXV0byBoLTUgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy4yOTMgMTQuNzA3YTEgMSAwIDAxMC0xLjQxNEwxMC41ODYgMTAgNy4yOTMgNi43MDdhMSAxIDAgMDExLjQxNC0xLjQxNGw0IDRhMSAxIDAgMDEwIDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MZWdhbCBEb2N1bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVnYWxEb2N1bWVudDsiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ291bnRlclVwIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVVzZXIiLCJ1c2VTdXBhYmFzZUNsaWVudCIsInVzZVJvdXRlciIsIkxlZ2FsRG9jdW1lbnQiLCJyb3V0ZXIiLCJzdXBhYmFzZSIsImRvY3VtZW50cyIsInNldERvY3VtZW50cyIsImZpbHRlcmVkRG9jdW1lbnRzIiwic2V0RmlsdGVyZWREb2N1bWVudHMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImZpbHRlclR5cGUiLCJzZXRGaWx0ZXJUeXBlIiwiZmlsdGVyRGVwYXJ0bWVudCIsInNldEZpbHRlckRlcGFydG1lbnQiLCJmaWx0ZXJJc3N1ZURhdGUiLCJzZXRGaWx0ZXJJc3N1ZURhdGUiLCJmZXRjaERvY3VtZW50cyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyRG9jdW1lbnRzIiwiaGFuZGxlVHlwZUZpbHRlciIsImhhbmRsZURlcGFydG1lbnRGaWx0ZXIiLCJoYW5kbGVJc3N1ZURhdGVGaWx0ZXIiLCJzZWFyY2giLCJ0eXBlIiwiZGVwYXJ0bWVudCIsImlzc3VlRGF0ZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiZG9jIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaXNzdWVfZGF0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJhIiwiaHJlZiIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/legal_document/index.js\n"));

/***/ })

});