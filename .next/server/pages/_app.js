(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./public/assets/css/animate.min.css
var animate_min = __webpack_require__(2759);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/assets/css/tailwind-built.css
var tailwind_built = __webpack_require__(764);
;// CONCATENATED MODULE: ./components/elements/Preloader.js


const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "preloader-active",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "preloader flex-1 content-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "logo absolute inset-y-2/4 jump",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/imgs/logos/knu-favicon.png",
                            alt: "KECS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-lg font-semibold",
                            children: "KECS"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const elements_Preloader = (Preloader);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./pages/styles/tailwind.css
var tailwind = __webpack_require__(4993);
;// CONCATENATED MODULE: external "@supabase/auth-helpers-nextjs"
const auth_helpers_nextjs_namespaceObject = require("@supabase/auth-helpers-nextjs");
// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
;// CONCATENATED MODULE: ./pages/_app.js







// import "/pages/styles/globals.css"



function MyApp({ Component , pageProps  }) {
    const [supabase] = (0,external_react_.useState)(()=>(0,auth_helpers_nextjs_namespaceObject.createBrowserSupabaseClient)());
    const [loading, setLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "KECS"
                })
            }),
            !loading ? /*#__PURE__*/ jsx_runtime_.jsx(auth_helpers_react_.SessionContextProvider, {
                supabaseClient: supabase,
                initialSession: pageProps.initialSession,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(elements_Preloader, {})
        ]
    });
}
// export default MyApp
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 4993:
/***/ (() => {



/***/ }),

/***/ 2759:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 6749:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7942));
module.exports = __webpack_exports__;

})();