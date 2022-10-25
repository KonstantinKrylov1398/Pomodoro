/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst MainJoin_1 = __webpack_require__(/*! ./shared/MainJoin */ \"./src/shared/MainJoin/index.ts\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst redux_2 = __webpack_require__(/*! ./redux/redux */ \"./src/redux/redux.tsx\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Statistics_1 = __webpack_require__(/*! ./shared/Statistics */ \"./src/shared/Statistics/index.ts\");\r\nconst store = (0, redux_1.createStore)(redux_2.myReducer);\r\nfunction AppComponent() {\r\n    const [mounted, setMounted] = (0, react_1.useState)(false);\r\n    (0, react_1.useEffect)(() => {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(MainJoin_1.MainJoin, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/statistics\", element: react_1.default.createElement(Statistics_1.Statistics, null) }))))));\r\n}\r\nexports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\r\\n    padding: 0;\\r\\n    margin: 0 auto;\\r\\n    background: #E5E5E5;\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    overflow: visible;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/redux/changeCounterRedux.tsx":
/*!******************************************!*\
  !*** ./src/redux/changeCounterRedux.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.changeCounterRedux = exports.CHANGE_COUNTER = void 0;\r\nexports.CHANGE_COUNTER = \"CHANGE_COUNTER\";\r\nconst changeCounterRedux = (counter) => ({\r\n    type: exports.CHANGE_COUNTER,\r\n    number: counter,\r\n});\r\nexports.changeCounterRedux = changeCounterRedux;\r\n\n\n//# sourceURL=webpack:///./src/redux/changeCounterRedux.tsx?");

/***/ }),

/***/ "./src/redux/changeStateModal.tsx":
/*!****************************************!*\
  !*** ./src/redux/changeStateModal.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.changeStateModal = exports.STATE_MODAL = void 0;\r\nexports.STATE_MODAL = \"STATE_MODAL\";\r\nconst changeStateModal = (state) => ({\r\n    type: exports.STATE_MODAL,\r\n    stateBoolean: state,\r\n});\r\nexports.changeStateModal = changeStateModal;\r\n\n\n//# sourceURL=webpack:///./src/redux/changeStateModal.tsx?");

/***/ }),

/***/ "./src/redux/dispatchForm.tsx":
/*!************************************!*\
  !*** ./src/redux/dispatchForm.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.changeDispatchForm = exports.DISPATCH_FORM = void 0;\r\nexports.DISPATCH_FORM = \"DISPATCH_FORM\";\r\nconst changeDispatchForm = (state) => ({\r\n    type: exports.DISPATCH_FORM,\r\n    dispatchForm: state,\r\n});\r\nexports.changeDispatchForm = changeDispatchForm;\r\n\n\n//# sourceURL=webpack:///./src/redux/dispatchForm.tsx?");

/***/ }),

/***/ "./src/redux/editTaskFunction.tsx":
/*!****************************************!*\
  !*** ./src/redux/editTaskFunction.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.actionTaskGetObject = exports.TASK_GET_STRING = void 0;\r\nexports.TASK_GET_STRING = \"TASK_GET_FUNCTION\";\r\nconst actionTaskGetObject = (functionTask) => ({\r\n    type: exports.TASK_GET_STRING,\r\n    taskGetFunction: functionTask,\r\n});\r\nexports.actionTaskGetObject = actionTaskGetObject;\r\n\n\n//# sourceURL=webpack:///./src/redux/editTaskFunction.tsx?");

/***/ }),

/***/ "./src/redux/exportPomidorsInStatistics.tsx":
/*!**************************************************!*\
  !*** ./src/redux/exportPomidorsInStatistics.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.exportTomateFunction = exports.EXPORT_TOMATE = void 0;\r\nexports.EXPORT_TOMATE = \"EXPORT_TOMATE\";\r\nconst exportTomateFunction = (number) => ({\r\n    type: exports.EXPORT_TOMATE,\r\n    exportTomate: number,\r\n});\r\nexports.exportTomateFunction = exportTomateFunction;\r\n\n\n//# sourceURL=webpack:///./src/redux/exportPomidorsInStatistics.tsx?");

/***/ }),

/***/ "./src/redux/getTask.tsx":
/*!*******************************!*\
  !*** ./src/redux/getTask.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.functionGetTask = exports.GET_TASK = void 0;\r\nexports.GET_TASK = \"GET_TASK\";\r\nconst functionGetTask = (todo) => ({\r\n    type: exports.GET_TASK,\r\n    todo: todo,\r\n});\r\nexports.functionGetTask = functionGetTask;\r\n\n\n//# sourceURL=webpack:///./src/redux/getTask.tsx?");

/***/ }),

/***/ "./src/redux/intervalWork.tsx":
/*!************************************!*\
  !*** ./src/redux/intervalWork.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.intervalWorkFunction = exports.INTERVAL_WORK = void 0;\r\nexports.INTERVAL_WORK = \"INTERVAL_WORK\";\r\nconst intervalWorkFunction = (number) => ({\r\n    type: exports.INTERVAL_WORK,\r\n    intervalWorkNumber: number,\r\n});\r\nexports.intervalWorkFunction = intervalWorkFunction;\r\n\n\n//# sourceURL=webpack:///./src/redux/intervalWork.tsx?");

/***/ }),

/***/ "./src/redux/pauseInterval.tsx":
/*!*************************************!*\
  !*** ./src/redux/pauseInterval.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.intervalPauseFunction = exports.PAUSE_INTERVAL = void 0;\r\nexports.PAUSE_INTERVAL = \"PAUSE_INTERVAL\";\r\nconst intervalPauseFunction = (number) => ({\r\n    type: exports.PAUSE_INTERVAL,\r\n    intervalPauseNumber: number,\r\n});\r\nexports.intervalPauseFunction = intervalPauseFunction;\r\n\n\n//# sourceURL=webpack:///./src/redux/pauseInterval.tsx?");

/***/ }),

/***/ "./src/redux/quantityStop.tsx":
/*!************************************!*\
  !*** ./src/redux/quantityStop.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stopQuantityFunction = exports.STOP_QUANTITY = void 0;\r\nexports.STOP_QUANTITY = \"STOP_QUANTITY\";\r\nconst stopQuantityFunction = (number) => ({\r\n    type: exports.STOP_QUANTITY,\r\n    quantityStopNumber: number,\r\n});\r\nexports.stopQuantityFunction = stopQuantityFunction;\r\n\n\n//# sourceURL=webpack:///./src/redux/quantityStop.tsx?");

/***/ }),

/***/ "./src/redux/redux.tsx":
/*!*****************************!*\
  !*** ./src/redux/redux.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.myReducer = void 0;\r\nconst changeCounterRedux_1 = __webpack_require__(/*! ./changeCounterRedux */ \"./src/redux/changeCounterRedux.tsx\");\r\nconst changeStateModal_1 = __webpack_require__(/*! ./changeStateModal */ \"./src/redux/changeStateModal.tsx\");\r\nconst dispatchForm_1 = __webpack_require__(/*! ./dispatchForm */ \"./src/redux/dispatchForm.tsx\");\r\nconst editTaskFunction_1 = __webpack_require__(/*! ./editTaskFunction */ \"./src/redux/editTaskFunction.tsx\");\r\nconst exportPomidorsInStatistics_1 = __webpack_require__(/*! ./exportPomidorsInStatistics */ \"./src/redux/exportPomidorsInStatistics.tsx\");\r\nconst getTask_1 = __webpack_require__(/*! ./getTask */ \"./src/redux/getTask.tsx\");\r\nconst intervalWork_1 = __webpack_require__(/*! ./intervalWork */ \"./src/redux/intervalWork.tsx\");\r\nconst pauseInterval_1 = __webpack_require__(/*! ./pauseInterval */ \"./src/redux/pauseInterval.tsx\");\r\nconst quantityStop_1 = __webpack_require__(/*! ./quantityStop */ \"./src/redux/quantityStop.tsx\");\r\nconst initialState = {\r\n    number: [],\r\n    state: () => true,\r\n    functionTask: 0,\r\n    intervalWork: 0,\r\n    exportTomate: 0,\r\n    intervalPauseNumber: 0,\r\n    quantityStopNumber: 0,\r\n    dispatchForm: [],\r\n    getTask: {},\r\n};\r\nconst myReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case changeCounterRedux_1.CHANGE_COUNTER: {\r\n            return Object.assign(Object.assign({}, state), { number: action.number });\r\n        }\r\n        case changeStateModal_1.STATE_MODAL: {\r\n            return Object.assign(Object.assign({}, state), { state: action.stateBoolean });\r\n        }\r\n        case editTaskFunction_1.TASK_GET_STRING: {\r\n            return Object.assign(Object.assign({}, state), { functionTask: action.taskGetFunction });\r\n        }\r\n        case intervalWork_1.INTERVAL_WORK: {\r\n            return Object.assign(Object.assign({}, state), { intervalWork: action.intervalWorkNumber });\r\n        }\r\n        case exportPomidorsInStatistics_1.EXPORT_TOMATE: {\r\n            return Object.assign(Object.assign({}, state), { exportTomate: action.exportTomate });\r\n        }\r\n        case pauseInterval_1.PAUSE_INTERVAL: {\r\n            return Object.assign(Object.assign({}, state), { intervalPauseNumber: action.intervalPauseNumber });\r\n        }\r\n        case quantityStop_1.STOP_QUANTITY: {\r\n            return Object.assign(Object.assign({}, state), { quantityStopNumber: action.quantityStopNumber });\r\n        }\r\n        case dispatchForm_1.DISPATCH_FORM: {\r\n            return Object.assign(Object.assign({}, state), { dispatchForm: action.dispatchForm });\r\n        }\r\n        case getTask_1.GET_TASK: {\r\n            return Object.assign(Object.assign({}, state), { getTask: action.todo });\r\n        }\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.myReducer = myReducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/redux.tsx?");

/***/ }),

/***/ "./src/server/indextemplate.js":
/*!*************************************!*\
  !*** ./src/server/indextemplate.js ***!
  \*************************************/
/*! exports provided: indexTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexTemplate\", function() { return indexTemplate; });\nconst indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n    <script src=\"/static/client.js\" type=\"application/javascript\">    </script>\r\n</head>\r\n\r\n<body>\r\n    <div id=\"react-root\">${content}</div>\r\n</body>\r\n\r\n</html>`\n\n//# sourceURL=webpack:///./src/server/indextemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _indextemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indextemplate */ \"./src/server/indextemplate.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst PORT = process.env.PORT || 3000;\r\nconst IS_DEV = \"development\" !== \"production\"\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\nif (!IS_DEV) {\r\n    app.use(compression__WEBPACK_IMPORTED_MODULE_5___default()())\r\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()({\r\n        contentSecurityPolicy: false\r\n    }))\r\n\r\n}\r\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"./dist/client\"))\r\n\r\napp.get(\"*\", (req, res) => {\r\n    res.send(\r\n        Object(_indextemplate__WEBPACK_IMPORTED_MODULE_2__[\"indexTemplate\"])(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(Object(_App__WEBPACK_IMPORTED_MODULE_3__[\"App\"])()))\r\n\r\n    );\r\n});\r\napp.listen(PORT, () => {\r\n\r\n    console.log(`Server started on http://localhost:${PORT}`);\r\n})\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"div\", { className: header_css_1.default.header_main },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/\", className: header_css_1.default.header_position },\r\n            react_1.default.createElement(\"svg\", { width: \"40\", height: \"40\", viewBox: \"0 0 40 40\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_6371_152)\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z\", fill: \"#DC3E22\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z\", fill: \"#899441\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z\", fill: \"#A8B64F\" })),\r\n                react_1.default.createElement(\"defs\", null)),\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.header }, \"pomodoro_box\")),\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/statistics\", className: header_css_1.default.header_position },\r\n            react_1.default.createElement(\"svg\", { className: header_css_1.default.header_position_svg, width: \"16\", height: \"16\", viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z\", fill: \"#DC3E22\" })),\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.header_statistics }, \" \\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430\"))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"header_statistics\": \"header__header_statistics--1zsgc\",\n\t\"header_position\": \"header__header_position--gw1Z6\",\n\t\"header_main\": \"header__header_main--8jC1J\",\n\t\"header_position_svg\": \"header__header_position_svg--2aWZZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout({ children }) {\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Dropdown/Dropdown.tsx":
/*!***************************************************!*\
  !*** ./src/shared/MainJoin/Dropdown/Dropdown.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/MainJoin/Dropdown/dropdown.css\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst changeStateModal_1 = __webpack_require__(/*! ../../../redux/changeStateModal */ \"./src/redux/changeStateModal.tsx\");\r\nconst DeleteTodo_1 = __webpack_require__(/*! ../Main/DeleteTodo */ \"./src/shared/MainJoin/Main/DeleteTodo/index.ts\");\r\nconst exportPomidorsInStatistics_1 = __webpack_require__(/*! ../../../redux/exportPomidorsInStatistics */ \"./src/redux/exportPomidorsInStatistics.tsx\");\r\nfunction Dropdown({ setOpenDropdown, todo, todos, setOpenInput, quantityTomate, setTime, setStateCounter, }) {\r\n    let intervalWork = (0, react_redux_1.useSelector)((state) => state.intervalWork);\r\n    const ref = (0, react_1.useRef)(null);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const [modalDelete, setModalDelete] = (0, react_1.useState)(false);\r\n    const [tomate, setTomate] = quantityTomate;\r\n    dispatch((0, exportPomidorsInStatistics_1.exportTomateFunction)(tomate));\r\n    dispatch((0, changeStateModal_1.changeStateModal)(setModalDelete));\r\n    function openModal() {\r\n        setModalDelete(true);\r\n    }\r\n    function changePlus() {\r\n        setStateCounter((number) => number + 1);\r\n        setTomate(tomate + 1);\r\n        setTime(intervalWork);\r\n    }\r\n    function changeMinus() {\r\n        setStateCounter((number) => (number > 0 ? number - 1 : 0));\r\n        setTomate(tomate - 1);\r\n        setTime(intervalWork);\r\n    }\r\n    const editTodo = () => {\r\n        setOpenInput(true);\r\n    };\r\n    (0, react_1.useEffect)(() => {\r\n        function closedModal(event) {\r\n            if (event.target instanceof Node &&\r\n                ref.current &&\r\n                !ref.current.contains(event.target))\r\n                setOpenDropdown(false);\r\n        }\r\n        document.body.addEventListener(\"click\", closedModal);\r\n        return () => {\r\n            document.body.removeEventListener(\"click\", closedModal);\r\n        };\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { ref: ref, className: dropdown_css_1.default.dropdown },\r\n        react_1.default.createElement(\"ul\", { className: dropdown_css_1.default.ul },\r\n            react_1.default.createElement(\"li\", { className: dropdown_css_1.default.li },\r\n                react_1.default.createElement(\"svg\", { className: dropdown_css_1.default.svg, width: \"16\", height: \"16\", viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z\", fill: \"#A8B64F\" })),\r\n                react_1.default.createElement(\"div\", { onClick: changePlus }, \"\\u0423\\u0432\\u0435\\u043B\\u0438\\u0447\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"li\", { className: dropdown_css_1.default.li },\r\n                react_1.default.createElement(\"svg\", { className: dropdown_css_1.default.svg, width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_35_103)\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z\", fill: \"#A8B64F\" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z\", fill: \"#A8B64F\" })),\r\n                    react_1.default.createElement(\"defs\", null,\r\n                        react_1.default.createElement(\"clipPath\", { id: \"clip0_35_103\" },\r\n                            react_1.default.createElement(\"rect\", { width: \"18\", height: \"18\", fill: \"white\" })))),\r\n                react_1.default.createElement(\"div\", { onClick: changeMinus }, \"\\u0423\\u043C\\u0435\\u043D\\u044C\\u0448\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"li\", { className: dropdown_css_1.default.li },\r\n                react_1.default.createElement(\"svg\", { className: dropdown_css_1.default.svg, width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.825 2.9875 13.825 2.515 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z\", fill: \"#A8B64F\" })),\r\n                react_1.default.createElement(\"div\", { onClick: editTodo }, \"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"li\", { className: dropdown_css_1.default.li },\r\n                react_1.default.createElement(\"svg\", { className: dropdown_css_1.default.svg, width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z\", fill: \"#A8B64F\" })),\r\n                react_1.default.createElement(\"div\", { onClick: openModal }, \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C\"))),\r\n        modalDelete && react_1.default.createElement(DeleteTodo_1.DeleteTodo, { todo: todo, todos: todos })));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Dropdown/dropdown.css":
/*!***************************************************!*\
  !*** ./src/shared/MainJoin/Dropdown/dropdown.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdown\": \"dropdown__dropdown--GDQxZ\",\n\t\"ul\": \"dropdown__ul--tYJVu\",\n\t\"li\": \"dropdown__li--3EDNm\",\n\t\"svg\": \"dropdown__svg--tuaLG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Dropdown/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/MainJoin/Dropdown/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/MainJoin/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/DeleteTodo/DeleteTodo.tsx":
/*!************************************************************!*\
  !*** ./src/shared/MainJoin/Main/DeleteTodo/DeleteTodo.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DeleteTodo = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst deletetodo_css_1 = __importDefault(__webpack_require__(/*! ./deletetodo.css */ \"./src/shared/MainJoin/Main/DeleteTodo/deletetodo.css\"));\r\nfunction DeleteTodo({ todo, todos }) {\r\n    const state = (0, react_redux_1.useSelector)((state) => state.state);\r\n    const [getTodo, setGetTodo] = todos;\r\n    function deleteTodo() {\r\n        setGetTodo([\r\n            ...getTodo.filter((todoDelete) => todoDelete.id !== todo.id),\r\n        ]);\r\n        state(false);\r\n    }\r\n    function closedModalWindow() {\r\n        state(false);\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { className: deletetodo_css_1.default.modal },\r\n            react_1.default.createElement(\"svg\", { onClick: closedModalWindow, className: deletetodo_css_1.default.svg, width: \"15\", height: \"14\", viewBox: \"0 0 15 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"div\", { className: deletetodo_css_1.default.answer }, \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0437\\u0430\\u0434\\u0430\\u0447\\u0443?\"),\r\n            react_1.default.createElement(\"button\", { onClick: deleteTodo, className: deletetodo_css_1.default.button }, \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C\"),\r\n            react_1.default.createElement(\"a\", { onClick: closedModalWindow, className: deletetodo_css_1.default.a }, \"\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430\")),\r\n        react_1.default.createElement(\"div\", { className: deletetodo_css_1.default.background })));\r\n}\r\nexports.DeleteTodo = DeleteTodo;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/DeleteTodo/DeleteTodo.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/DeleteTodo/deletetodo.css":
/*!************************************************************!*\
  !*** ./src/shared/MainJoin/Main/DeleteTodo/deletetodo.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"deletetodo__modal--3oco0\",\n\t\"background\": \"deletetodo__background--2z2hi\",\n\t\"answer\": \"deletetodo__answer--1jf6y\",\n\t\"button\": \"deletetodo__button--2ZQq5\",\n\t\"a\": \"deletetodo__a--3qfH5\",\n\t\"svg\": \"deletetodo__svg--2ZZys\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/DeleteTodo/deletetodo.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/DeleteTodo/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/MainJoin/Main/DeleteTodo/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DeleteTodo */ \"./src/shared/MainJoin/Main/DeleteTodo/DeleteTodo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/DeleteTodo/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/Form/Form.tsx":
/*!************************************************!*\
  !*** ./src/shared/MainJoin/Main/Form/Form.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Form = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst hookTimeRender_1 = __webpack_require__(/*! ../../../Statistics/Table/hookTimeRender */ \"./src/shared/Statistics/Table/hookTimeRender.tsx\");\r\nconst TodoTask_1 = __webpack_require__(/*! ../TodoTask */ \"./src/shared/MainJoin/Main/TodoTask/index.ts\");\r\nconst form_css_1 = __importDefault(__webpack_require__(/*! ./form.css */ \"./src/shared/MainJoin/Main/Form/form.css\"));\r\nfunction Form() {\r\n    const [todos, setTodos] = (0, react_1.useState)([]);\r\n    const inputRef = (0, react_1.useRef)(null);\r\n    const [quantityTomate, setQuantityTomate] = (0, react_1.useState)(0);\r\n    const [inputValue, setInputValue] = (0, react_1.useState)(\"\");\r\n    const [time, setTime] = (0, react_1.useState)(0);\r\n    const [serialNumber, setSerialNumber] = (0, react_1.useState)(1);\r\n    function addTask() {\r\n        if (inputValue.length === 0) {\r\n            return;\r\n        }\r\n        else {\r\n            const newItem = {\r\n                number: serialNumber,\r\n                id: Math.random(),\r\n                task: inputValue,\r\n                edit: false,\r\n            };\r\n            setTodos([...todos, newItem]);\r\n            setSerialNumber(todos.length + 2);\r\n        }\r\n    }\r\n    function handleChange(input) {\r\n        setInputValue(input.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        addTask();\r\n        setInputValue(\"\");\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"form\", { className: form_css_1.default.form, onSubmit: handleSubmit, action: \"\" },\r\n            react_1.default.createElement(\"input\", { ref: inputRef, placeholder: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\", onChange: handleChange, value: inputValue, className: form_css_1.default.form_input, type: \"text\" }),\r\n            react_1.default.createElement(\"button\", { className: form_css_1.default.form_button }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")),\r\n        todos.map((todo) => {\r\n            return (react_1.default.createElement(\"div\", { key: todo.id },\r\n                react_1.default.createElement(TodoTask_1.TodoTask, { setTime: setTime, quantityTomate: [quantityTomate, setQuantityTomate], input: inputRef, todo: todo, todos: [todos, setTodos] })));\r\n        }),\r\n        react_1.default.createElement(\"div\", { className: form_css_1.default.time }, time === 0 ? \"\" : (0, hookTimeRender_1.timeRender)(time))));\r\n}\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/Form/Form.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/Form/form.css":
/*!************************************************!*\
  !*** ./src/shared/MainJoin/Main/Form/form.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"form__form--1z0l0\",\n\t\"form_input\": \"form__form_input--gmBLA\",\n\t\"form_button\": \"form__form_button--3wB6A\",\n\t\"form_button_edit\": \"form__form_button_edit--tL34Q\",\n\t\"time\": \"form__time--mT_Ry\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/Form/form.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/Form/index.ts":
/*!************************************************!*\
  !*** ./src/shared/MainJoin/Main/Form/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Form */ \"./src/shared/MainJoin/Main/Form/Form.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/Form/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/Main.tsx":
/*!*******************************************!*\
  !*** ./src/shared/MainJoin/Main/Main.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Main = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Form_1 = __webpack_require__(/*! ./Form */ \"./src/shared/MainJoin/Main/Form/index.ts\");\r\nconst MainOne_1 = __webpack_require__(/*! ./MainOne */ \"./src/shared/MainJoin/Main/MainOne/index.ts\");\r\nfunction Main() {\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(MainOne_1.MainOne, null),\r\n        react_1.default.createElement(Form_1.Form, null)));\r\n}\r\nexports.Main = Main;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/Main.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/MainOne/MainOne.tsx":
/*!******************************************************!*\
  !*** ./src/shared/MainJoin/Main/MainOne/MainOne.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainOne = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst mainone_css_1 = __importDefault(__webpack_require__(/*! ./mainone.css */ \"./src/shared/MainJoin/Main/MainOne/mainone.css\"));\r\nfunction MainOne() {\r\n    return (react_1.default.createElement(\"div\", { className: mainone_css_1.default.mainOne },\r\n        react_1.default.createElement(\"h2\", { className: mainone_css_1.default.mainOne_h2 }, \"\\u0423\\u0440\\u0430! \\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u043C\\u043E\\u0436\\u043D\\u043E \\u043D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C:\"),\r\n        react_1.default.createElement(\"ul\", { className: mainone_css_1.default.mainOne_ul },\r\n            react_1.default.createElement(\"li\", { className: mainone_css_1.default.mainOne_li }, \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E \\u0438 \\u043D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435 \\u043D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0435\\u0439 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\"),\r\n            react_1.default.createElement(\"li\", { className: mainone_css_1.default.mainOne_li }, \"\\u0417\\u0430\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u0435 \\u0442\\u0430\\u0439\\u043C\\u0435\\u0440 (\\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB)\"),\r\n            react_1.default.createElement(\"li\", { className: mainone_css_1.default.mainOne_li },\r\n                \" \",\r\n                \"\\u0420\\u0430\\u0431\\u043E\\u0442\\u0430\\u0439\\u0442\\u0435 \\u043F\\u043E\\u043A\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u043D\\u0435 \\u043F\\u0440\\u043E\\u0437\\u0432\\u043E\\u043D\\u0438\\u0442\"),\r\n            react_1.default.createElement(\"li\", { className: mainone_css_1.default.mainOne_li },\r\n                \" \",\r\n                \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u043A\\u043E\\u0440\\u043E\\u0442\\u043A\\u0438\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (3-5 \\u043C\\u0438\\u043D\\u0443\\u0442)\"),\r\n            react_1.default.createElement(\"li\", { className: mainone_css_1.default.mainOne_li },\r\n                \" \",\r\n                \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0430\\u0439\\u0442\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u0437\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u043E\\u043C\\u00BB, \\u043F\\u043E\\u043A\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043D\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430. \\u041A\\u0430\\u0436\\u0434\\u044B\\u0435 4 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u0430\\u00BB \\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u0434\\u043B\\u0438\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (15-30 \\u043C\\u0438\\u043D\\u0443\\u0442).\"))));\r\n}\r\nexports.MainOne = MainOne;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/MainOne/MainOne.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/MainOne/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/MainJoin/Main/MainOne/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MainOne */ \"./src/shared/MainJoin/Main/MainOne/MainOne.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/MainOne/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/MainOne/mainone.css":
/*!******************************************************!*\
  !*** ./src/shared/MainJoin/Main/MainOne/mainone.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"mainOne\": \"mainone__mainOne--1sJfY\",\n\t\"mainOne_ul\": \"mainone__mainOne_ul--DaNvh\",\n\t\"mainOne_h2\": \"mainone__mainOne_h2--3gShi\",\n\t\"mainOne_li\": \"mainone__mainOne_li--6a7ra\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/MainOne/mainone.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/TodoTask/TodoTask.tsx":
/*!********************************************************!*\
  !*** ./src/shared/MainJoin/Main/TodoTask/TodoTask.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TodoTask = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst getTask_1 = __webpack_require__(/*! ../../../../redux/getTask */ \"./src/redux/getTask.tsx\");\r\nconst Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/MainJoin/Dropdown/index.ts\");\r\nconst todotask_css_1 = __importDefault(__webpack_require__(/*! ./todotask.css */ \"./src/shared/MainJoin/Main/TodoTask/todotask.css\"));\r\nfunction TodoTask({ todo, todos, input, quantityTomate, setTime }) {\r\n    const inputEditRef = (0, react_1.useRef)(null);\r\n    const refTask = (0, react_1.useRef)(null);\r\n    const [inputValue, setInputValue] = (0, react_1.useState)(todo.task);\r\n    const [openInput, setOpenInput] = (0, react_1.useState)(false);\r\n    const [stateCounter, setStateCounter] = (0, react_1.useState)(1);\r\n    const [openDropdown, setOpenDropdown] = (0, react_1.useState)(false);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleChange(event) {\r\n        setInputValue(event.target.value);\r\n    }\r\n    function blurInput() {\r\n        setOpenInput(false);\r\n        todo.task = inputValue;\r\n    }\r\n    (0, react_1.useEffect)(() => {\r\n        if (openInput) {\r\n            inputEditRef.current.focus();\r\n        }\r\n    }, [openInput, inputEditRef]);\r\n    const clickOnDropdown = () => {\r\n        setOpenDropdown(true);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { onClick: () => dispatch((0, getTask_1.functionGetTask)(todo)), className: todotask_css_1.default.todo },\r\n        react_1.default.createElement(\"div\", { className: todotask_css_1.default.number }, stateCounter),\r\n        react_1.default.createElement(\"div\", { ref: refTask, className: todotask_css_1.default.task }, todo.task),\r\n        react_1.default.createElement(\"svg\", { onClick: clickOnDropdown, className: todotask_css_1.default.svg, width: \"26\", height: \"6\", viewBox: \"0 0 26 6\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"3\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"13\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"23\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" })),\r\n        openDropdown === true && (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { setStateCounter: setStateCounter, setTime: setTime, quantityTomate: quantityTomate, setOpenInput: setOpenInput, input: input, refTask: refTask, todo: todo, todos: todos, openDropdown: openDropdown, setOpenDropdown: setOpenDropdown }))),\r\n        openInput && (react_1.default.createElement(\"input\", { value: inputValue, onBlur: blurInput, ref: inputEditRef, onChange: handleChange, className: todotask_css_1.default.inputEdit, type: \"text\" }))));\r\n}\r\nexports.TodoTask = TodoTask;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/TodoTask/TodoTask.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/TodoTask/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/MainJoin/Main/TodoTask/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TodoTask */ \"./src/shared/MainJoin/Main/TodoTask/TodoTask.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/TodoTask/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/TodoTask/todotask.css":
/*!********************************************************!*\
  !*** ./src/shared/MainJoin/Main/TodoTask/todotask.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"todo\": \"todotask__todo--1tMpq\",\n\t\"number\": \"todotask__number--2X8OW\",\n\t\"task\": \"todotask__task--1Yy4z\",\n\t\"svg\": \"todotask__svg--3uy-c\",\n\t\"inputEdit\": \"todotask__inputEdit--3kEkA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/TodoTask/todotask.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Main/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/MainJoin/Main/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Main */ \"./src/shared/MainJoin/Main/Main.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Main/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/MainJoin.tsx":
/*!******************************************!*\
  !*** ./src/shared/MainJoin/MainJoin.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainJoin = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Main_1 = __webpack_require__(/*! ./Main */ \"./src/shared/MainJoin/Main/index.ts\");\r\nconst Window_1 = __webpack_require__(/*! ./Window */ \"./src/shared/MainJoin/Window/index.ts\");\r\nconst mainjoin_css_1 = __importDefault(__webpack_require__(/*! ./mainjoin.css */ \"./src/shared/MainJoin/mainjoin.css\"));\r\nfunction MainJoin() {\r\n    return (react_1.default.createElement(\"div\", { className: mainjoin_css_1.default.mainJoin },\r\n        react_1.default.createElement(Main_1.Main, null),\r\n        react_1.default.createElement(Window_1.Window, null)));\r\n}\r\nexports.MainJoin = MainJoin;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/MainJoin.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/TaskGet/TaskGet.tsx":
/*!********************************************************!*\
  !*** ./src/shared/MainJoin/Window/TaskGet/TaskGet.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskGet = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction TaskGet() {\r\n    const todo = (0, react_redux_1.useSelector)((state) => state.getTask);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\r\n        todo.number,\r\n        \" - \",\r\n        todo.task));\r\n}\r\nexports.TaskGet = TaskGet;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/TaskGet/TaskGet.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/TaskGet/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/MainJoin/Window/TaskGet/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskGet */ \"./src/shared/MainJoin/Window/TaskGet/TaskGet.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/TaskGet/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/TitleTask/TitleTask.tsx":
/*!************************************************************!*\
  !*** ./src/shared/MainJoin/Window/TitleTask/TitleTask.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TitleTask = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst titletask_css_1 = __importDefault(__webpack_require__(/*! ./titletask.css */ \"./src/shared/MainJoin/Window/TitleTask/titletask.css\"));\r\nfunction TitleTask() {\r\n    const todo = (0, react_redux_1.useSelector)((state) => state.getTask);\r\n    return react_1.default.createElement(\"div\", { className: titletask_css_1.default.titleTask }, todo.task);\r\n}\r\nexports.TitleTask = TitleTask;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/TitleTask/TitleTask.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/TitleTask/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/MainJoin/Window/TitleTask/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TitleTask */ \"./src/shared/MainJoin/Window/TitleTask/TitleTask.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/TitleTask/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/TitleTask/titletask.css":
/*!************************************************************!*\
  !*** ./src/shared/MainJoin/Window/TitleTask/titletask.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"titleTask\": \"titletask__titleTask--1gRP3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/TitleTask/titletask.css?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/Window.tsx":
/*!***********************************************!*\
  !*** ./src/shared/MainJoin/Window/Window.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Window = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst PadStart_1 = __webpack_require__(/*! ./function/PadStart */ \"./src/shared/MainJoin/Window/function/PadStart.tsx\");\r\nconst intervalWork_1 = __webpack_require__(/*! ../../../redux/intervalWork */ \"./src/redux/intervalWork.tsx\");\r\nconst pauseInterval_1 = __webpack_require__(/*! ../../../redux/pauseInterval */ \"./src/redux/pauseInterval.tsx\");\r\nconst quantityStop_1 = __webpack_require__(/*! ../../../redux/quantityStop */ \"./src/redux/quantityStop.tsx\");\r\nconst window_css_1 = __importDefault(__webpack_require__(/*! ./window.css */ \"./src/shared/MainJoin/Window/window.css\"));\r\nconst TitleTask_1 = __webpack_require__(/*! ./TitleTask */ \"./src/shared/MainJoin/Window/TitleTask/index.ts\");\r\nconst TaskGet_1 = __webpack_require__(/*! ./TaskGet */ \"./src/shared/MainJoin/Window/TaskGet/index.ts\");\r\nfunction Window() {\r\n    const [textContent, setTextContent] = (0, react_1.useState)(\"Помидор\");\r\n    const [pauseAfterDone, setPauseAfterDone] = (0, react_1.useState)(false);\r\n    const [startResumeAfterDone, setStartResumeAfterDone] = (0, react_1.useState)(false);\r\n    const [quantityStopInterval, setQuantityStopInterval] = (0, react_1.useState)(0);\r\n    const [pause, setPause] = (0, react_1.useState)(0);\r\n    const [pauseInterval, setPauseInterval] = (0, react_1.useState)(false);\r\n    const [stopStart, setStopStart] = (0, react_1.useState)(true);\r\n    const [skipStart, setSkipStart] = (0, react_1.useState)(false);\r\n    const [doneStart, setDoneStart] = (0, react_1.useState)(false);\r\n    const [startResume, setStartResume] = (0, react_1.useState)(false);\r\n    const [startPause, setStartPause] = (0, react_1.useState)(false);\r\n    const [style, setStyle] = (0, react_1.useState)(\"open\");\r\n    const [interval, setIntervalState] = (0, react_1.useState)(25 * 60);\r\n    const [intervalWork, setIntervalStateWork] = (0, react_1.useState)(0);\r\n    const [startRender, setStartRender] = (0, react_1.useState)(true);\r\n    const [startTimer, setstartTimer] = (0, react_1.useState)(false);\r\n    const minutes = (0, PadStart_1.padStart)(Math.floor(interval / 60));\r\n    const second = (0, PadStart_1.padStart)(interval - minutes * 60);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    dispatch((0, quantityStop_1.stopQuantityFunction)(quantityStopInterval));\r\n    (0, react_1.useEffect)(() => {\r\n        document.documentElement.setAttribute(\"data-open\", style);\r\n    }, [style]);\r\n    (0, react_1.useEffect)(() => {\r\n        dispatch((0, intervalWork_1.intervalWorkFunction)(intervalWork));\r\n        dispatch((0, pauseInterval_1.intervalPauseFunction)(pause));\r\n        const start = setInterval(() => {\r\n            startTimer && setIntervalStateWork(intervalWork + 1);\r\n            startTimer && setIntervalState(interval - 1);\r\n            pauseInterval && setPause(pause + 1);\r\n            startResumeAfterDone || pauseAfterDone\r\n                ? setTextContent(\"Перерыв\")\r\n                : setTextContent(\"Помидор\");\r\n        }, 1000);\r\n        return () => {\r\n            clearInterval(start);\r\n        };\r\n    }, [startTimer, interval, intervalWork, pause]);\r\n    function handleStart() {\r\n        setStartRender(false);\r\n        setStartPause(true);\r\n        setStyle(\"start\");\r\n        setstartTimer(true);\r\n        setPauseInterval(false);\r\n    }\r\n    function changeInterval() {\r\n        setIntervalState(interval + 60);\r\n    }\r\n    function handlePause() {\r\n        setStartPause(false);\r\n        setstartTimer(false);\r\n        setStartResume(true);\r\n        setStyle(\"pause\");\r\n        setStopStart(false);\r\n        setDoneStart(true);\r\n        setSkipStart(false);\r\n        setPause(pause + 1);\r\n        setPauseInterval(true);\r\n    }\r\n    function handleResume() {\r\n        setStartPause(true);\r\n        setstartTimer(true);\r\n        setPauseInterval(false);\r\n        setStopStart(true);\r\n        setStartResume(false);\r\n        setDoneStart(false);\r\n        setSkipStart(false);\r\n    }\r\n    function handleStop() {\r\n        if (interval === 25 * 60) {\r\n            return;\r\n        }\r\n        setIntervalState(25 * 60);\r\n        setStartRender(true);\r\n        setStartPause(false);\r\n        setstartTimer(false);\r\n        setStopStart(true);\r\n        setStyle(\"afterSkip\");\r\n        setPauseInterval(false);\r\n        setQuantityStopInterval(quantityStopInterval + 1);\r\n        setPauseAfterDone(false);\r\n    }\r\n    function skipStop() {\r\n        setPauseInterval(false);\r\n        setIntervalState(25 * 60);\r\n        setstartTimer(false);\r\n        setStartPause(false);\r\n        setStartResume(false);\r\n        setStartRender(true);\r\n        setSkipStart(false);\r\n        setStopStart(true);\r\n        setStyle(\"afterSkip\");\r\n        setStartResumeAfterDone(false);\r\n        setPauseAfterDone(false);\r\n    }\r\n    function doneStop() {\r\n        setStartResume(false);\r\n        setStopStart(false);\r\n        setStartRender(false);\r\n        setPauseInterval(false);\r\n        setDoneStart(false);\r\n        setIntervalState(5 * 60);\r\n        setStyle(\"stop\");\r\n        setstartTimer(true);\r\n        setSkipStart(true);\r\n        setPauseAfterDone(true);\r\n    }\r\n    function pauseAfterDoneFunction() {\r\n        setstartTimer(false);\r\n        setStyle(\"stop\");\r\n        setDoneStart(false);\r\n        setStartResumeAfterDone(true);\r\n        setSkipStart(true);\r\n        setPauseAfterDone(false);\r\n        setStopStart(false);\r\n        setPauseInterval(true);\r\n    }\r\n    function startResumeAfterDoneFunction() {\r\n        setPauseAfterDone(true);\r\n        setstartTimer(true);\r\n        setPauseInterval(false);\r\n        setStopStart(true);\r\n        setStartResumeAfterDone(false);\r\n        setDoneStart(false);\r\n        setSkipStart(false);\r\n        setPauseInterval(false);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: window_css_1.default.window },\r\n        react_1.default.createElement(\"div\", { className: window_css_1.default.window_header },\r\n            react_1.default.createElement(TitleTask_1.TitleTask, null),\r\n            react_1.default.createElement(\"div\", { className: window_css_1.default.window_header_text_two }, textContent)),\r\n        react_1.default.createElement(\"div\", { className: window_css_1.default.window_timer_main },\r\n            react_1.default.createElement(\"div\", { className: window_css_1.default.window_timer }, minutes),\r\n            react_1.default.createElement(\"div\", { className: window_css_1.default.window_timer }, \":\"),\r\n            react_1.default.createElement(\"div\", { className: window_css_1.default.window_timer }, second),\r\n            react_1.default.createElement(\"svg\", { onClick: changeInterval, className: window_css_1.default.window_timer_svg, width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\r\n        react_1.default.createElement(\"div\", { className: window_css_1.default.window_task },\r\n            react_1.default.createElement(\"div\", { className: window_css_1.default.window_task_text_one },\r\n                react_1.default.createElement(TaskGet_1.TaskGet, null))),\r\n        react_1.default.createElement(\"div\", { className: window_css_1.default.window_form },\r\n            startResume && (react_1.default.createElement(\"button\", { onClick: handleResume, className: window_css_1.default.window_button_one }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\")),\r\n            startResumeAfterDone && (react_1.default.createElement(\"button\", { onClick: startResumeAfterDoneFunction, className: window_css_1.default.window_button_one }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\")),\r\n            startPause && (react_1.default.createElement(\"button\", { onClick: handlePause, className: window_css_1.default.window_button_one }, \"\\u041F\\u0430\\u0443\\u0437\\u0430\")),\r\n            startRender && (react_1.default.createElement(\"button\", { onClick: handleStart, className: window_css_1.default.window_button_one }, \"\\u0421\\u0442\\u0430\\u0440\\u0442\")),\r\n            pauseAfterDone && (react_1.default.createElement(\"button\", { onClick: pauseAfterDoneFunction, className: window_css_1.default.window_button_one }, \"\\u041F\\u0430\\u0443\\u0437\\u0430\")),\r\n            stopStart && (react_1.default.createElement(\"button\", { onClick: handleStop, className: window_css_1.default.window_button_two }, \"\\u0421\\u0442\\u043E\\u043F\")),\r\n            skipStart && (react_1.default.createElement(\"button\", { onClick: skipStop, className: window_css_1.default.window_button_two }, \"\\u041F\\u0440\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u044C\")),\r\n            doneStart && (react_1.default.createElement(\"button\", { onClick: doneStop, className: window_css_1.default.window_button_two }, \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u043D\\u043E\")))));\r\n}\r\nexports.Window = Window;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/Window.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/function/PadStart.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/MainJoin/Window/function/PadStart.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.padStart = void 0;\r\nfunction padStart(time) {\r\n    return time.toString().padStart(2, \"0\");\r\n}\r\nexports.padStart = padStart;\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/function/PadStart.tsx?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/MainJoin/Window/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Window */ \"./src/shared/MainJoin/Window/Window.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/Window/window.css":
/*!***********************************************!*\
  !*** ./src/shared/MainJoin/Window/window.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"window\": \"window__window--1Itq7\",\n\t\"window_header\": \"window__window_header--27zrQ\",\n\t\"window_header_text_one\": \"window__window_header_text_one--1g3gK\",\n\t\"window_header_text_two\": \"window__window_header_text_two--11cQS\",\n\t\"window_timer\": \"window__window_timer--2LF8a\",\n\t\"window_timer_main\": \"window__window_timer_main--ZK82V\",\n\t\"window_timer_svg\": \"window__window_timer_svg--25O_m\",\n\t\"window_task\": \"window__window_task--3zRsl\",\n\t\"window_task_text_one\": \"window__window_task_text_one--8TU4U\",\n\t\"window_task_text_two\": \"window__window_task_text_two--3EOJX\",\n\t\"window_form\": \"window__window_form--IhIgk\",\n\t\"window_button_one\": \"window__window_button_one--27ewo\",\n\t\"window_button_two\": \"window__window_button_two--1ORTu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/Window/window.css?");

/***/ }),

/***/ "./src/shared/MainJoin/index.ts":
/*!**************************************!*\
  !*** ./src/shared/MainJoin/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MainJoin */ \"./src/shared/MainJoin/MainJoin.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/index.ts?");

/***/ }),

/***/ "./src/shared/MainJoin/mainjoin.css":
/*!******************************************!*\
  !*** ./src/shared/MainJoin/mainjoin.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"mainJoin\": \"mainjoin__mainJoin--c6TJw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/MainJoin/mainjoin.css?");

/***/ }),

/***/ "./src/shared/Statistics/Result/Result.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Statistics/Result/Result.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Result = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst result_css_1 = __importDefault(__webpack_require__(/*! ./result.css */ \"./src/shared/Statistics/Result/result.css\"));\r\nconst timePauseRender_1 = __webpack_require__(/*! ./timePauseRender */ \"./src/shared/Statistics/Result/timePauseRender.tsx\");\r\nfunction Result() {\r\n    const [style, setStyle] = (0, react_1.useState)(\"falseQuantity\");\r\n    let intervalWork = (0, react_redux_1.useSelector)((state) => state.intervalWork);\r\n    let stopQuantity = (0, react_redux_1.useSelector)((state) => state.quantityStopNumber);\r\n    const importTomate = (0, react_redux_1.useSelector)((state) => state.exportTomate);\r\n    let pauseInterval = (0, react_redux_1.useSelector)((state) => state.intervalPauseNumber);\r\n    (0, react_1.useEffect)(() => {\r\n        document.documentElement.setAttribute(\"data-open\", style);\r\n        if (intervalWork > 0) {\r\n            setStyle(\"trueQuantity\");\r\n        }\r\n    }, [style]);\r\n    const focus = () => {\r\n        if (intervalWork > 0 && importTomate > 0) {\r\n            return intervalWork / (importTomate * 25);\r\n        }\r\n        else {\r\n            return 0;\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: result_css_1.default.result_flex },\r\n        react_1.default.createElement(\"div\", { className: result_css_1.default.result_block_one },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_header }, \"\\u0424\\u043E\\u043A\\u0443\\u0441\"),\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_result },\r\n                    focus(),\r\n                    \"%\")),\r\n            react_1.default.createElement(\"svg\", { className: result_css_1.default.result_svg_one, width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }))),\r\n        react_1.default.createElement(\"div\", { className: result_css_1.default.result_block_two },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_header }, \"\\u0412\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430 \\u043F\\u0430\\u0443\\u0437\\u0435\"),\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_result }, (0, timePauseRender_1.timeRenderPause)(pauseInterval))),\r\n            react_1.default.createElement(\"svg\", { className: result_css_1.default.result_svg_two, width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M57.3154 30.1579V57.3158L70.8944 70.8947\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }))),\r\n        react_1.default.createElement(\"div\", { className: result_css_1.default.result_block_three },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_header }, \"\\u041E\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u043A\\u0438\"),\r\n                react_1.default.createElement(\"div\", { className: result_css_1.default.result_result }, stopQuantity)),\r\n            react_1.default.createElement(\"svg\", { className: result_css_1.default.result_svg_three, width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M21 20L95 94\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })))));\r\n}\r\nexports.Result = Result;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Result/Result.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Result/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Statistics/Result/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Result */ \"./src/shared/Statistics/Result/Result.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Result/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/Result/result.css":
/*!*************************************************!*\
  !*** ./src/shared/Statistics/Result/result.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"result_block_one\": \"result__result_block_one--19FKx\",\n\t\"result_block_two\": \"result__result_block_two--3iqgk\",\n\t\"result_block_three\": \"result__result_block_three--1SKAn\",\n\t\"result_block\": \"result__result_block--3AL5l\",\n\t\"result_flex\": \"result__result_flex--2yyEa\",\n\t\"result_header\": \"result__result_header--3Cep-\",\n\t\"result_result\": \"result__result_result--2pJsg\",\n\t\"result_svg_one\": \"result__result_svg_one--37_OY\",\n\t\"result_svg_two\": \"result__result_svg_two--CLQuq\",\n\t\"result_svg_three\": \"result__result_svg_three--Bxp3Q\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Result/result.css?");

/***/ }),

/***/ "./src/shared/Statistics/Result/timePauseRender.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Statistics/Result/timePauseRender.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.timeRenderPause = void 0;\r\nfunction timeRenderPause(intervalWork) {\r\n    if (intervalWork < 60) {\r\n        return `${intervalWork} с `;\r\n    }\r\n    if (intervalWork > 60) {\r\n        const minute = Math.floor(intervalWork / 60);\r\n        return `${minute} м `;\r\n    }\r\n    if (intervalWork > 3600) {\r\n        const hours = Math.floor(intervalWork / 3600);\r\n        return `${hours} ч `;\r\n    }\r\n}\r\nexports.timeRenderPause = timeRenderPause;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Result/timePauseRender.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Select/Select.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Statistics/Select/Select.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Select = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst select_css_1 = __importDefault(__webpack_require__(/*! ./select.css */ \"./src/shared/Statistics/Select/select.css\"));\r\nfunction Select() {\r\n    const [stateItemAll, setStateItemAll] = (0, react_1.useState)(false);\r\n    const [stateItemOneSvg, setStateItemOneSvg] = (0, react_1.useState)(true);\r\n    const [stateItemOneRes, setStateItemOneRes] = (0, react_1.useState)(true);\r\n    const [stateItemTwoRes, setStateItemTwoRes] = (0, react_1.useState)(false);\r\n    const [stateItemThreeRes, setStateItemThreeRes] = (0, react_1.useState)(false);\r\n    const refOne = (0, react_1.useRef)(null);\r\n    const refTwo = (0, react_1.useRef)(null);\r\n    const refThree = (0, react_1.useRef)(null);\r\n    function openSelect(state) {\r\n        setStateItemOneSvg(false);\r\n        setStateItemAll(true);\r\n        state;\r\n    }\r\n    (0, react_1.useEffect)(() => {\r\n        document.body.addEventListener(\"click\", (event) => {\r\n            console.log(event.target === refOne.current);\r\n            if (event.target === refOne.current) {\r\n                setStateItemAll(false);\r\n                setStateItemOneRes(true);\r\n                setStateItemOneSvg(true);\r\n            }\r\n            if (event.target === refTwo.current) {\r\n                setStateItemAll(false);\r\n                setStateItemTwoRes(true);\r\n                setStateItemOneSvg(true);\r\n            }\r\n            if (event.target === refThree.current) {\r\n                setStateItemAll(false);\r\n                setStateItemThreeRes(true);\r\n                setStateItemOneSvg(true);\r\n            }\r\n        });\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: select_css_1.default.select },\r\n        react_1.default.createElement(\"div\", null,\r\n            stateItemOneSvg && (react_1.default.createElement(\"svg\", { className: select_css_1.default.select_svg, width: \"16\", height: \"10\", viewBox: \"0 0 16 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M15 1L8 8L1 1\", stroke: \"#B7280F\", strokeWidth: \"2\" }))),\r\n            stateItemOneRes && (react_1.default.createElement(\"div\", { className: select_css_1.default.options, onClick: () => openSelect(setStateItemOneRes(false)) }, \"\\u042D\\u0442\\u0430 \\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\")),\r\n            stateItemTwoRes && (react_1.default.createElement(\"div\", { className: select_css_1.default.options, onClick: () => openSelect(setStateItemTwoRes(false)) }, \"\\u041F\\u0440\\u043E\\u0448\\u043B\\u0430\\u044F \\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\")),\r\n            stateItemThreeRes && (react_1.default.createElement(\"div\", { className: select_css_1.default.options, onClick: () => openSelect(setStateItemThreeRes(false)) }, \"2 \\u043D\\u0435\\u0434\\u0435\\u043B\\u0438 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n            stateItemAll && (react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: select_css_1.default.options, ref: refOne }, \"\\u042D\\u0442\\u0430 \\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\"),\r\n                react_1.default.createElement(\"div\", { className: select_css_1.default.options, ref: refTwo }, \"\\u041F\\u0440\\u043E\\u0448\\u043B\\u0430\\u044F \\u043D\\u0435\\u0434\\u0435\\u043B\\u044F\"),\r\n                react_1.default.createElement(\"div\", { className: select_css_1.default.options, ref: refThree }, \"2 \\u043D\\u0435\\u0434\\u0435\\u043B\\u0438 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n                react_1.default.createElement(\"svg\", { className: select_css_1.default.select_svg, width: \"16\", height: \"10\", viewBox: \"0 0 16 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M1 9L8 2L15 9\", stroke: \"#B7280F\", strokeWidth: \"2\" })))))));\r\n}\r\nexports.Select = Select;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Select/Select.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Select/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Statistics/Select/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Select */ \"./src/shared/Statistics/Select/Select.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Select/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/Select/select.css":
/*!*************************************************!*\
  !*** ./src/shared/Statistics/Select/select.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"select\": \"select__select--1fDdB\",\n\t\"options\": \"select__options--NlwRV\",\n\t\"select_svg\": \"select__select_svg--1mI9t\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Select/select.css?");

/***/ }),

/***/ "./src/shared/Statistics/Statistics.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Statistics/Statistics.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Statistics = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Header_1 = __webpack_require__(/*! ../Header */ \"./src/shared/Header/index.ts\");\r\nconst Result_1 = __webpack_require__(/*! ./Result */ \"./src/shared/Statistics/Result/index.ts\");\r\nconst Select_1 = __webpack_require__(/*! ./Select */ \"./src/shared/Statistics/Select/index.ts\");\r\nconst statistics_css_1 = __importDefault(__webpack_require__(/*! ./statistics.css */ \"./src/shared/Statistics/statistics.css\"));\r\nconst Table_1 = __webpack_require__(/*! ./Table */ \"./src/shared/Statistics/Table/index.ts\");\r\nfunction Statistics() {\r\n    return (react_1.default.createElement(\"div\", { className: statistics_css_1.default.statistics },\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Select_1.Select, null),\r\n            react_1.default.createElement(Table_1.Table, null),\r\n            react_1.default.createElement(Result_1.Result, null))));\r\n}\r\nexports.Statistics = Statistics;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Statistics.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Table/QuantityTomate/QuantityTomate.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Statistics/Table/QuantityTomate/QuantityTomate.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.QuantityTomate = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst quantitytomate_css_1 = __importDefault(__webpack_require__(/*! ./quantitytomate.css */ \"./src/shared/Statistics/Table/QuantityTomate/quantitytomate.css\"));\r\nfunction QuantityTomate() {\r\n    const importTomate = (0, react_redux_1.useSelector)((state) => state.exportTomate);\r\n    return (react_1.default.createElement(\"div\", { className: quantitytomate_css_1.default.table_statistics },\r\n        importTomate > 0 ? (react_1.default.createElement(\"svg\", { className: quantitytomate_css_1.default.svg_two, width: \"81\", height: \"81\", viewBox: \"0 0 81 81\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_16_413)\" },\r\n                react_1.default.createElement(\"path\", { d: \"M78.8031 47.4452C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.081C2.37305 21.9757 20.017 9 41.1223 9C62.2283 9 78.8031 26.3393 78.8031 47.4452Z\", fill: \"#DC3E22\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3439 62.8917 17.3439C62.8917 17.3439 55.9932 13.7785 50.9492 14.0023C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92999 51.6862 6.93824 51.6862 6.93824C51.6862 6.93824 46.3974 7.22064 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65243 25.7565 8.44232 25.7565 8.44232C25.7565 8.44232 31.8459 11.8966 34.5857 15.3426C35.6554 16.6883 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7889 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0222 33.1722 24.0095C35.036 23.3474 37.0065 23.1719 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8532C34.88 32.3806 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7835 43.3412 31.6218C44.2905 28.9723 44.5255 26.3122 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283V25.5283Z\", fill: \"#899441\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8364 38.757 19.5894 38.7934 18.0901C38.7965 17.9604 38.9275 8.83154 33.8564 4.86224C32.6735 3.9365 32.4647 2.22717 33.3904 1.04373C34.3168 -0.139084 36.0261 -0.347962 37.2089 0.578393C44.4609 6.25332 44.2446 17.7416 44.2323 18.2279C44.1933 19.7049 42.9833 20.8766 41.5144 20.8766V20.8766Z\", fill: \"#A8B64F\" })),\r\n            react_1.default.createElement(\"defs\", null,\r\n                react_1.default.createElement(\"clipPath\", { id: \"clip0_16_413\" },\r\n                    react_1.default.createElement(\"rect\", { width: \"81\", height: \"81\", fill: \"white\" }))))) : (react_1.default.createElement(\"svg\", { className: quantitytomate_css_1.default.table_svg, width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_16_527)\" },\r\n                react_1.default.createElement(\"path\", { d: \"M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z\", fill: \"#DC3E22\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z\", fill: \"#899441\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z\", fill: \"#A8B64F\" }),\r\n                react_1.default.createElement(\"circle\", { cx: \"41.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\r\n                react_1.default.createElement(\"g\", { filter: \"url(#filter0_f_16_527)\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"29.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\r\n                react_1.default.createElement(\"g\", { filter: \"url(#filter1_f_16_527)\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"85.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\r\n                react_1.default.createElement(\"circle\", { cx: \"73.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M46 78C50 82 64.5 83 68.5 78\", stroke: \"black\" })),\r\n            react_1.default.createElement(\"defs\", null,\r\n                react_1.default.createElement(\"filter\", { id: \"filter0_f_16_527\", x: \"20\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\r\n                    react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\r\n                    react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\r\n                    react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\r\n                react_1.default.createElement(\"filter\", { id: \"filter1_f_16_527\", x: \"76\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\r\n                    react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\r\n                    react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\r\n                    react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\r\n                react_1.default.createElement(\"clipPath\", { id: \"clip0_16_527\" },\r\n                    react_1.default.createElement(\"rect\", { width: \"115\", height: \"115\", fill: \"white\" }))))),\r\n        importTomate > 0 ? (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: quantitytomate_css_1.default.table_statistics_text },\r\n                importTomate,\r\n                \" \\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u0430\"),\r\n            react_1.default.createElement(\"div\", { className: quantitytomate_css_1.default.x },\r\n                \"x\",\r\n                importTomate))) : (\"\")));\r\n}\r\nexports.QuantityTomate = QuantityTomate;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/QuantityTomate/QuantityTomate.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Table/QuantityTomate/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Statistics/Table/QuantityTomate/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./QuantityTomate */ \"./src/shared/Statistics/Table/QuantityTomate/QuantityTomate.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/QuantityTomate/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/Table/QuantityTomate/quantitytomate.css":
/*!***********************************************************************!*\
  !*** ./src/shared/Statistics/Table/QuantityTomate/quantitytomate.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"table_statistics\": \"quantitytomate__table_statistics--1OOIs\",\n\t\"table_svg\": \"quantitytomate__table_svg--iugNX\",\n\t\"table_statistics_text\": \"quantitytomate__table_statistics_text--3EK0K\",\n\t\"svg_two\": \"quantitytomate__svg_two--RxFAl\",\n\t\"x\": \"quantitytomate__x--1e8cS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/QuantityTomate/quantitytomate.css?");

/***/ }),

/***/ "./src/shared/Statistics/Table/Table.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Statistics/Table/Table.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Table = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst hooksTable_1 = __webpack_require__(/*! ./hooksTable */ \"./src/shared/Statistics/Table/hooksTable.tsx\");\r\nconst hookTimeRender_1 = __webpack_require__(/*! ./hookTimeRender */ \"./src/shared/Statistics/Table/hookTimeRender.tsx\");\r\nconst QuantityTomate_1 = __webpack_require__(/*! ./QuantityTomate */ \"./src/shared/Statistics/Table/QuantityTomate/index.ts\");\r\nconst table_css_1 = __importDefault(__webpack_require__(/*! ./table.css */ \"./src/shared/Statistics/Table/table.css\"));\r\nfunction Table() {\r\n    let intervalWork = (0, react_redux_1.useSelector)((state) => state.intervalWork);\r\n    let histogramTime = intervalWork / 60;\r\n    const minutes = 25;\r\n    const date = new Date();\r\n    let day = date.getDay();\r\n    console.log(day);\r\n    return (react_1.default.createElement(\"div\", { className: table_css_1.default.table_main },\r\n        react_1.default.createElement(\"h2\", { className: table_css_1.default.h2 }, \"\\u0412\\u0430\\u0448\\u0430 \\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E\\u0441\\u0442\\u044C\"),\r\n        react_1.default.createElement(\"div\", { className: table_css_1.default.table_statistics_flex },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.table_statistics_day },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.table_statistics_one },\r\n                        \" \",\r\n                        (0, hooksTable_1.todayDay)()),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.table_statistics_two }, intervalWork > 0\r\n                        ? `Вы работали над задачами в течение ${(0, hookTimeRender_1.timeRender)(intervalWork)}`\r\n                        : \"Нет данных\")),\r\n                react_1.default.createElement(QuantityTomate_1.QuantityTomate, null)),\r\n            react_1.default.createElement(\"div\", { className: table_css_1.default.table_statistics_table },\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.flex },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.block }),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.time },\r\n                        minutes + 75,\r\n                        \" \\u043C\\u0438\\u043D\")),\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.flex },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.block }),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.time },\r\n                        minutes + 50,\r\n                        \" \\u043C\\u0438\\u043D\")),\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.flex },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.block }),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.time },\r\n                        minutes + 25,\r\n                        \" \\u043C\\u0438\\u043D\")),\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.flex },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.block }),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.time },\r\n                        minutes,\r\n                        \" \\u043C\\u0438\\u043D\")),\r\n                react_1.default.createElement(\"div\", { className: table_css_1.default.week },\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 1 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u041F\\u043D\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 2 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u0412\\u0442\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 3 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u0421\\u0440\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 4 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u0427\\u0442\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 5 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u041F\\u0442\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 6 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u0421\\u0431\")),\r\n                    react_1.default.createElement(\"div\", { className: table_css_1.default.relative },\r\n                        react_1.default.createElement(\"div\", { style: { height: `${day === 0 ? histogramTime * 3.4 : 0}px` }, className: table_css_1.default.block_height }),\r\n                        react_1.default.createElement(\"div\", { className: table_css_1.default.day }, \"\\u0412\\u0441\")))))));\r\n}\r\nexports.Table = Table;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/Table.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Table/hookTimeRender.tsx":
/*!********************************************************!*\
  !*** ./src/shared/Statistics/Table/hookTimeRender.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.timeRender = void 0;\r\nfunction timeRender(intervalWork) {\r\n    if (intervalWork < 60) {\r\n        return `${intervalWork} секунд `;\r\n    }\r\n    if (intervalWork > 60) {\r\n        const minute = Math.floor(intervalWork / 60);\r\n        return `${minute} минут `;\r\n    }\r\n    if (intervalWork > 3600) {\r\n        const hours = Math.floor(intervalWork / 3600);\r\n        return `${hours} часов `;\r\n    }\r\n}\r\nexports.timeRender = timeRender;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/hookTimeRender.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Table/hooksTable.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Statistics/Table/hooksTable.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.todayDay = void 0;\r\nfunction todayDay() {\r\n    const day = new Date().getDay();\r\n    switch (day) {\r\n        case 0: {\r\n            return \"Воскресенье\";\r\n        }\r\n        case 1: {\r\n            return \"Понедельник\";\r\n        }\r\n        case 2: {\r\n            return \"Вторник\";\r\n        }\r\n        case 3: {\r\n            return \"Среда\";\r\n        }\r\n        case 4: {\r\n            return \"Четверг\";\r\n        }\r\n        case 5: {\r\n            return \"Пятница\";\r\n        }\r\n        case 6: {\r\n            return \"Суббота\";\r\n        }\r\n        default: {\r\n            return \"Ничего\";\r\n        }\r\n    }\r\n}\r\nexports.todayDay = todayDay;\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/hooksTable.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/Table/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Statistics/Table/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Table */ \"./src/shared/Statistics/Table/Table.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/Table/table.css":
/*!***********************************************!*\
  !*** ./src/shared/Statistics/Table/table.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"h2\": \"table__h2--3jkHZ\",\n\t\"table_statistics_day\": \"table__table_statistics_day--38J-B\",\n\t\"table_statistics_table\": \"table__table_statistics_table--3tpM5\",\n\t\"table_statistics_flex\": \"table__table_statistics_flex--3vrRo\",\n\t\"table_main\": \"table__table_main--1kYK5\",\n\t\"table_statistics_one\": \"table__table_statistics_one--2dWkO\",\n\t\"table_statistics_two\": \"table__table_statistics_two--3SZsd\",\n\t\"week\": \"table__week--3NdLA\",\n\t\"day\": \"table__day--2cbdW\",\n\t\"block\": \"table__block--5-1Ui\",\n\t\"time\": \"table__time--3Fi1E\",\n\t\"flex\": \"table__flex--3YbrU\",\n\t\"block_height\": \"table__block_height--nl5tN\",\n\t\"relative\": \"table__relative--1pntn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Table/table.css?");

/***/ }),

/***/ "./src/shared/Statistics/index.ts":
/*!****************************************!*\
  !*** ./src/shared/Statistics/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Statistics */ \"./src/shared/Statistics/Statistics.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/statistics.css":
/*!**********************************************!*\
  !*** ./src/shared/Statistics/statistics.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"statistics\": \"statistics__statistics--3lJVl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/statistics.css?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });