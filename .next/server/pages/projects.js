"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\mauro\\\\OneDrive\\\\Bureaublad\\\\portfolio\\\\components\\\\Navigation.jsx\";\n\n\n\n\n\nconst Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({\n  displayName: \"Navigation__Nav\",\n  componentId: \"sc-172nwdr-0\"\n})([\"display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(37,41,52,1) 80%);color:white;font-size:1.25rem;\"]);\nconst NavItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({\n  displayName: \"Navigation__NavItems\",\n  componentId: \"sc-172nwdr-1\"\n})([\"display:flex;justify-content:space-between;align-items:center;list-style:none;li{margin-left:3rem;}.active{color:#E31B6D;}\"]);\nconst Navigation = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const navItems = document.querySelectorAll('li');\n    navItems.forEach(item => {\n      const itemText = `/${item.innerText.toLocaleLowerCase()}`;\n\n      if (itemText === router.pathname) {\n        item.classList.add('active');\n      }\n    });\n  }), [];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Nav, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n      children: \"Mauro Scheltens\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavItems, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 32\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"projects\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 39\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"contact\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 38\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLEdBQUcsR0FBR0osdUVBQUg7RUFBQTtFQUFBO0FBQUEsK0xBQVQ7QUFVQSxNQUFNTSxRQUFRLEdBQUdOLHNFQUFIO0VBQUE7RUFBQTtBQUFBLGtJQUFkO0FBZU8sTUFBTVEsVUFBVSxHQUFHLE1BQU07RUFDNUIsTUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUF4QjtFQUVBRCxnREFBUyxDQUFDLE1BQU07SUFDWixNQUFNUyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsSUFBMUIsQ0FBakI7SUFDQUYsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxJQUFJLElBQUk7TUFDckIsTUFBTUMsUUFBUSxHQUFJLElBQUdELElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxpQkFBZixFQUFtQyxFQUF4RDs7TUFDQSxJQUFJRixRQUFRLEtBQUtOLE1BQU0sQ0FBQ1MsUUFBeEIsRUFBa0M7UUFDOUJKLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO01BQ0g7SUFDSixDQUxEO0VBTUgsQ0FSUSxDQUFULEVBUUksRUFSSjtFQVVBLG9CQUNJLDhEQUFDLEdBQUQ7SUFBQSx3QkFDSTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURKLGVBRUksOERBQUMsUUFBRDtNQUFBLHdCQUNJLDhEQUFDLGtEQUFEO1FBQU0sSUFBSSxFQUFDLEdBQVg7UUFBQSx1QkFBZTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFmO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFESixlQUVJLDhEQUFDLGtEQUFEO1FBQU0sSUFBSSxFQUFDLFVBQVg7UUFBQSx1QkFBc0I7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBdEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZKLGVBR0ksOERBQUMsa0RBQUQ7UUFBTSxJQUFJLEVBQUMsU0FBWDtRQUFBLHVCQUFxQjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFyQjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBSEo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREo7QUFVSCxDQXZCTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3g/YzVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5cclxuY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgzNyw0MSw1MiwxKSA4MCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG5gXHJcblxyXG5jb25zdCBOYXZJdGVtcyA9IHN0eWxlZC51bGBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNFMzFCNkQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVRleHQgPSBgLyR7aXRlbS5pbm5lclRleHQudG9Mb2NhbGVMb3dlckNhc2UoKX1gO1xyXG4gICAgICAgICAgICBpZiAoaXRlbVRleHQgPT09IHJvdXRlci5wYXRobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSksIFtdO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxzcGFuPk1hdXJvIFNjaGVsdGVuczwvc3Bhbj5cclxuICAgICAgICAgICAgPE5hdkl0ZW1zPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+PGxpPkhvbWU8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9J3Byb2plY3RzJz48bGk+UHJvamVjdHM8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9J2NvbnRhY3QnPjxsaT5Db250YWN0PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbXM+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIk5hdiIsIm5hdiIsIk5hdkl0ZW1zIiwidWwiLCJOYXZpZ2F0aW9uIiwicm91dGVyIiwibmF2SXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsIml0ZW1UZXh0IiwiaW5uZXJUZXh0IiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwYXRobmFtZSIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.jsx\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\mauro\\\\OneDrive\\\\Bureaublad\\\\portfolio\\\\pages\\\\projects.js\";\n\n\n\n\n\nfunction Index() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Index\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Navigation, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNHLEtBQVQsR0FBaUI7RUFDNUIsb0JBQ0k7SUFBQSx3QkFDSSw4REFBQyxrREFBRDtNQUFBLHVCQUNJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBSUksOERBQUMsOERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpKO0VBQUEsZ0JBREo7QUFRSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL3Byb2plY3RzLmpzPzI1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5JbmRleDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZCIsIk5hdmlnYXRpb24iLCJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/projects.js"));
module.exports = __webpack_exports__;

})();