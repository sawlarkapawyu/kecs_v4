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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _components_elements_Counterup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/Counterup */ \"./components/elements/Counterup.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LegalDocumentsTable = (param)=>{\n    let { legalDocuments  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient)();\n    const [filterTypes, setFilterTypes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filterDepartments, setFilterDepartments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filterIssueDate, setFilterIssueDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const data = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>legalDocuments.map((doc)=>{\n            return {\n                id: doc.id,\n                title: doc.title,\n                type: doc.legal_type.name,\n                department: doc.department.name,\n                issue_date: doc.issue_date,\n                doc_url: doc.doc_url\n            };\n        }), [\n        legalDocuments\n    ]);\n    const columns = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>[\n            {\n                Header: \"No\",\n                accessor: \"id\"\n            },\n            {\n                Header: \"Title\",\n                accessor: \"title\"\n            },\n            {\n                Header: \"Type\",\n                accessor: \"type\",\n                Filter: SelectColumnFilter,\n                filter: \"equals\",\n                filterOptions: [\n                    {\n                        value: \"Law\",\n                        label: \"Law\"\n                    },\n                    {\n                        value: \"Policy\",\n                        label: \"Policy\"\n                    },\n                    {\n                        value: \"Regulation\",\n                        label: \"Regulation\"\n                    },\n                    {\n                        value: \"Decision\",\n                        label: \"Decision\"\n                    }\n                ]\n            },\n            {\n                Header: \"Department\",\n                accessor: \"department\",\n                Filter: SelectColumnFilter,\n                filter: \"equals\",\n                filterOptions: [\n                    {\n                        value: \"dept1\",\n                        label: \"Department 1\"\n                    },\n                    {\n                        value: \"dept2\",\n                        label: \"Department 2\"\n                    },\n                    {\n                        value: \"dept3\",\n                        label: \"Department 3\"\n                    }\n                ]\n            },\n            {\n                Header: \"Issue Date\",\n                accessor: \"issue_date\",\n                Filter: DateRangeColumnFilter,\n                filter: \"between\"\n            },\n            {\n                Header: \"Download File\",\n                accessor: \"doc_url\",\n                Cell: (param)=>/*#__PURE__*/ {\n                    let { cell: { value  }  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: value,\n                        target: \"_blank\",\n                        rel: \"noreferrer\",\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined);\n                }\n            }\n        ], []);\n    const filterTypesOptions = [\n        {\n            value: \"Law\",\n            label: \"Law\"\n        },\n        {\n            value: \"Policy\",\n            label: \"Policy\"\n        },\n        {\n            value: \"Regulation\",\n            label: \"Regulation\"\n        },\n        {\n            value: \"Decision\",\n            label: \"Decision\"\n        }\n    ];\n    const filterDepartmentsOptions = [\n        {\n            value: \"dept1\",\n            label: \"Department 1\"\n        },\n        {\n            value: \"dept2\",\n            label: \"Department 2\"\n        },\n        {\n            value: \"dept3\",\n            label: \"Department 3\"\n        }\n    ];\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow , setFilter  } = (0,react_table__WEBPACK_IMPORTED_MODULE_6__.useTable)({\n        columns,\n        data\n    }, react_table__WEBPACK_IMPORTED_MODULE_6__.useFilters);\n    const handleFilterTypesChange = (selectedOptions)=>{\n        setFilterTypes(selectedOptions);\n        setFilter(\"type\", selectedOptions.map((option)=>option.value));\n    };\n    const handleFilterDepartmentsChange = (selectedOptions)=>{\n        setFilterDepartments(selectedOptions);\n        setFilter(\"department\", selectedOptions.map((option)=>option.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container py-4 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap mt-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                    lineNumber: 136,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n                lineNumber: 135,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/im/myProjects/ktl/kecs_v4/pages/legal_document/index.js\",\n            lineNumber: 133,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(LegalDocumentsTable, \"9CXeiVvkU9ip6jYmdWM0fLlvaR0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSupabaseClient,\n        react_table__WEBPACK_IMPORTED_MODULE_6__.useTable\n    ];\n});\n_c = LegalDocumentsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LegalDocumentsTable);\nvar _c;\n$RefreshReg$(_c, \"LegalDocumentsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDQVo7SUFDSixHQUNBWCxtREFBVUE7SUFHVixNQUFNK0MsMEJBQTBCLENBQUNDLGtCQUFvQjtRQUNqRDFDLGVBQWUwQztRQUNmRixVQUNBLFFBQ0FFLGdCQUFnQm5DLEdBQUcsQ0FBQyxDQUFDb0MsU0FBV0EsT0FBT25CLEtBQUs7SUFFaEQ7SUFFQSxNQUFNb0IsZ0NBQWdDLENBQUNGLGtCQUFvQjtRQUN2RHhDLHFCQUFxQndDO1FBQ3JCRixVQUNJLGNBQ0pFLGdCQUFnQm5DLEdBQUcsQ0FBQyxDQUFDb0MsU0FBV0EsT0FBT25CLEtBQUs7SUFFaEQ7SUFHQSxxQkFDSTtrQkFDSSw0RUFBQ3pDLGlFQUFNQTtzQkFFSCw0RUFBQzhEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkM7R0FySU1uRDs7UUFDYUwsa0RBQVNBO1FBQ1BELDJFQUFpQkE7UUE2RjlCSSxpREFBUUE7OztLQS9GVkU7QUF1SU4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWdhbF9kb2N1bWVudC9pbmRleC5qcz8xNjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBDb3VudGVyVXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZWxlbWVudHMvQ291bnRlcnVwXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyLCB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgRG93bmxvYWQgfSBmcm9tICdoZXJvaWNvbnMtcmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlRmlsdGVycyB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuXG5jb25zdCBMZWdhbERvY3VtZW50c1RhYmxlID0gKHsgbGVnYWxEb2N1bWVudHMgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcbiAgICBcbiAgICBjb25zdCBbZmlsdGVyVHlwZXMsIHNldEZpbHRlclR5cGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtmaWx0ZXJEZXBhcnRtZW50cywgc2V0RmlsdGVyRGVwYXJ0bWVudHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2ZpbHRlcklzc3VlRGF0ZSwgc2V0RmlsdGVySXNzdWVEYXRlXSA9IHVzZVN0YXRlKCcnKVxuICAgIFxuICAgIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIGxlZ2FsRG9jdW1lbnRzLm1hcCgoZG9jKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICB0aXRsZTogZG9jLnRpdGxlLFxuICAgICAgICAgICAgICB0eXBlOiBkb2MubGVnYWxfdHlwZS5uYW1lLFxuICAgICAgICAgICAgICBkZXBhcnRtZW50OiBkb2MuZGVwYXJ0bWVudC5uYW1lLFxuICAgICAgICAgICAgICBpc3N1ZV9kYXRlOiBkb2MuaXNzdWVfZGF0ZSxcbiAgICAgICAgICAgICAgZG9jX3VybDogZG9jLmRvY191cmwsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIFtsZWdhbERvY3VtZW50c11cbiAgICApXG5cbiAgICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICAgKCkgPT4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ05vJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnaWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnVGl0bGUnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICd0aXRsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdUeXBlJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndHlwZScsXG4gICAgICAgICAgICBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcbiAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zOiBbXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdMYXcnLCBsYWJlbDogJ0xhdycgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ1BvbGljeScsIGxhYmVsOiAnUG9saWN5JyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAnUmVndWxhdGlvbicsIGxhYmVsOiAnUmVndWxhdGlvbicgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ0RlY2lzaW9uJywgbGFiZWw6ICdEZWNpc2lvbicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZGVwYXJ0bWVudCcsXG4gICAgICAgICAgICBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcbiAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zOiBbXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdkZXB0MScsIGxhYmVsOiAnRGVwYXJ0bWVudCAxJyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAnZGVwdDInLCBsYWJlbDogJ0RlcGFydG1lbnQgMicgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2RlcHQzJywgbGFiZWw6ICdEZXBhcnRtZW50IDMnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnSXNzdWUgRGF0ZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2lzc3VlX2RhdGUnLFxuICAgICAgICAgICAgRmlsdGVyOiBEYXRlUmFuZ2VDb2x1bW5GaWx0ZXIsXG4gICAgICAgICAgICBmaWx0ZXI6ICdiZXR3ZWVuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0Rvd25sb2FkIEZpbGUnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdkb2NfdXJsJyxcbiAgICAgICAgICAgIENlbGw6ICh7IGNlbGw6IHsgdmFsdWUgfSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBbXVxuICAgIClcblxuICAgIGNvbnN0IGZpbHRlclR5cGVzT3B0aW9ucyA9IFtcbiAgICAgICAgeyB2YWx1ZTogJ0xhdycsIGxhYmVsOiAnTGF3JyB9LFxuICAgICAgICB7IHZhbHVlOiAnUG9saWN5JywgbGFiZWw6ICdQb2xpY3knIH0sXG4gICAgICAgIHsgdmFsdWU6ICdSZWd1bGF0aW9uJywgbGFiZWw6ICdSZWd1bGF0aW9uJyB9LFxuICAgICAgICB7IHZhbHVlOiAnRGVjaXNpb24nLCBsYWJlbDogJ0RlY2lzaW9uJyB9LFxuICAgIF1cblxuICAgIGNvbnN0IGZpbHRlckRlcGFydG1lbnRzT3B0aW9ucyA9IFtcbiAgICAgICAgeyB2YWx1ZTogJ2RlcHQxJywgbGFiZWw6ICdEZXBhcnRtZW50IDEnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdkZXB0MicsIGxhYmVsOiAnRGVwYXJ0bWVudCAyJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZGVwdDMnLCBsYWJlbDogJ0RlcGFydG1lbnQgMycgfSxcbiAgICBdXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgICAgICBoZWFkZXJHcm91cHMsXG4gICAgICAgIHJvd3MsXG4gICAgICAgIHByZXBhcmVSb3csXG4gICAgICAgIHNldEZpbHRlcixcbiAgICB9ID0gdXNlVGFibGUoXG4gICAge1xuICAgICAgICBjb2x1bW5zLFxuICAgICAgICBkYXRhLFxuICAgIH0sXG4gICAgdXNlRmlsdGVyc1xuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUZpbHRlclR5cGVzQ2hhbmdlID0gKHNlbGVjdGVkT3B0aW9ucykgPT4ge1xuICAgICAgICBzZXRGaWx0ZXJUeXBlcyhzZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgIHNldEZpbHRlcihcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICBzZWxlY3RlZE9wdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcbiAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRmlsdGVyRGVwYXJ0bWVudHNDaGFuZ2UgPSAoc2VsZWN0ZWRPcHRpb25zKSA9PiB7XG4gICAgICAgIHNldEZpbHRlckRlcGFydG1lbnRzKHNlbGVjdGVkT3B0aW9ucylcbiAgICAgICAgc2V0RmlsdGVyKFxuICAgICAgICAgICAgJ2RlcGFydG1lbnQnLFxuICAgICAgICBzZWxlY3RlZE9wdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSlcbiAgICApXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWdhbERvY3VtZW50c1RhYmxlOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJDb3VudGVyVXAiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwidXNlUm91dGVyIiwiRGF0ZVBpY2tlciIsIkRvd25sb2FkIiwidXNlVGFibGUiLCJ1c2VGaWx0ZXJzIiwiTGVnYWxEb2N1bWVudHNUYWJsZSIsImxlZ2FsRG9jdW1lbnRzIiwicm91dGVyIiwic3VwYWJhc2UiLCJmaWx0ZXJUeXBlcyIsInNldEZpbHRlclR5cGVzIiwiZmlsdGVyRGVwYXJ0bWVudHMiLCJzZXRGaWx0ZXJEZXBhcnRtZW50cyIsImZpbHRlcklzc3VlRGF0ZSIsInNldEZpbHRlcklzc3VlRGF0ZSIsImRhdGEiLCJ1c2VNZW1vIiwibWFwIiwiZG9jIiwiaWQiLCJ0aXRsZSIsInR5cGUiLCJsZWdhbF90eXBlIiwibmFtZSIsImRlcGFydG1lbnQiLCJpc3N1ZV9kYXRlIiwiZG9jX3VybCIsImNvbHVtbnMiLCJIZWFkZXIiLCJhY2Nlc3NvciIsIkZpbHRlciIsIlNlbGVjdENvbHVtbkZpbHRlciIsImZpbHRlciIsImZpbHRlck9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiRGF0ZVJhbmdlQ29sdW1uRmlsdGVyIiwiQ2VsbCIsImNlbGwiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImZpbHRlclR5cGVzT3B0aW9ucyIsImZpbHRlckRlcGFydG1lbnRzT3B0aW9ucyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic2V0RmlsdGVyIiwiaGFuZGxlRmlsdGVyVHlwZXNDaGFuZ2UiLCJzZWxlY3RlZE9wdGlvbnMiLCJvcHRpb24iLCJoYW5kbGVGaWx0ZXJEZXBhcnRtZW50c0NoYW5nZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/legal_document/index.js\n"));

/***/ })

});