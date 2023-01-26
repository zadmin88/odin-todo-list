/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: '';\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n/* :root {\\r\\n  --primary-color: #ee5739;\\r\\n  --secundary-color: #342a28;\\r\\n  --bg-color-1: rgba(244, 240, 231, 0.5);\\r\\n  --bg-color-2: rgba(244, 240, 231, 0.35);\\r\\n} */\\r\\n\\r\\n:root {\\r\\n  --primary-color: rgb(245, 112, 3);\\r\\n  --secundary-color: rgb(241, 241, 241);\\r\\n}\\r\\n\\r\\n* {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 230px 4fr;\\r\\n  grid-template-rows: 1fr 20fr;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: grid;\\r\\n  grid-column: 1 / 3;\\r\\n  grid-row: 1;\\r\\n  padding-top: 25px;\\r\\n  padding-bottom: 25px;\\r\\n  background-color: var(--primary-color);\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.navbar h1 {\\r\\n  font-size: 32px;\\r\\n  color: rgb(252, 252, 252);\\r\\n}\\r\\n\\r\\n.navbar span {\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  display: grid;\\r\\n  background-color: var(--secundary-color);\\r\\n  justify-content: center;\\r\\n  padding-top: 20px;\\r\\n  grid-column: 0 / 1;\\r\\n  /* grid-row: 1 / 3; */\\r\\n  grid-template-rows: 200px 500px;\\r\\n  gap: 50px;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.sidebar ul {\\r\\n  display: grid;\\r\\n  gap: 10px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-left: 0;\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.projects {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.projects h1 {\\r\\n  border-bottom: solid var(--primary-color) 1px;\\r\\n  padding-bottom: 10px;\\r\\n  margin-bottom: 20px;\\r\\n  color: rgb(73, 73, 73);\\r\\n}\\r\\n\\r\\n.sidebar li,\\r\\n.projects li {\\r\\n  display: grid;\\r\\n  cursor: pointer;\\r\\n  padding: 5px 10px 5px 10px;\\r\\n  background-color: white;\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 5px;\\r\\n  color: rgb(73, 73, 73);\\r\\n}\\r\\n\\r\\n.sidebar .selected {\\r\\n  color: white;\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.sidebar li:hover {\\r\\n  color: white;\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n/* The Modal (background) */\\r\\n.modal,\\r\\n.modal2,\\r\\n.modal3 {\\r\\n  display: none; /* Hidden by default */\\r\\n  position: fixed; /* Stay in place */\\r\\n  z-index: 1; /* Sit on top */\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%; /* Full width */\\r\\n  height: 100%; /* Full height */\\r\\n  overflow: auto; /* Enable scroll if needed */\\r\\n  background-color: var(--secundary-color); /* Fallback color */\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  /* //Black w/ opacity */\\r\\n}\\r\\n\\r\\n/* Modal Content/Box */\\r\\n.modal-content,\\r\\n.modal-content2,\\r\\n.modal-content3 {\\r\\n  background-color: var(--secundary-color);\\r\\n  margin: 15% auto; /* 15% from the top and centered */\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 20%; /* Could be more or less, depending on screen size */\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.formData,\\r\\n.formData3,\\r\\n.formData2 {\\r\\n  font-family: inherit;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.formData input,\\r\\n.formData3 input,\\r\\n.formData2 input {\\r\\n  border: none;\\r\\n  padding-top: 5px;\\r\\n  padding-bottom: 5px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.formData input[type='text']:active,\\r\\n.formData3 input[type='text']:active,\\r\\n.formData2 input[type='text']:active {\\r\\n  border: 2px solid #862d59;\\r\\n}\\r\\n\\r\\n.formData button,\\r\\n.formData3 button,\\r\\n.formData2 button {\\r\\n  margin-top: 30px;\\r\\n  cursor: pointer;\\r\\n  background-color: var(--primary-color);\\r\\n  color: white;\\r\\n  padding: 8px 19px 8px 19px;\\r\\n  border-radius: 5px;\\r\\n  border: none;\\r\\n  box-shadow: 0 4px 15px -2px gray;\\r\\n}\\r\\n\\r\\n#state {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#state:checked {\\r\\n  /* color: white; */\\r\\n  accent-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.formData .checkbox,\\r\\n.formData3 .checkbox,\\r\\n.formData2 .checkbox {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n/* The Close Button */\\r\\n/* .close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n} */\\r\\n\\r\\n.mainTasks {\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  grid-template-rows: 50px 50px;\\r\\n  /* width: 800px; */\\r\\n  /* grid-column: 0 / 2; */\\r\\n}\\r\\n\\r\\n.titleAdd {\\r\\n  display: flex;\\r\\n  gap: 50px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-bottom: solid 1px var(--primary-color);\\r\\n  padding-bottom: 10px;\\r\\n  margin-top: 30px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.titleAdd h1 {\\r\\n  color: var(--primary-color);\\r\\n  padding-top: 10px;\\r\\n}\\r\\n\\r\\n.btnAddTask {\\r\\n  font-weight: 700;\\r\\n  font-size: 20px;\\r\\n  /* padding: 0; */\\r\\n  background: var(--primary-color);\\r\\n  border: solid 1px var(--primary-color);\\r\\n  border-radius: 5px;\\r\\n  color: white;\\r\\n  padding: 0px 20px 0px 20px;\\r\\n}\\r\\n\\r\\n.btnAddTask:active {\\r\\n  background-color: white;\\r\\n  border: solid 1px var(--primary-color);\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.cardsDiv {\\r\\n  margin-top: 80px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.editBtn,\\r\\n.deleteBtn {\\r\\n  /* font-weight: 700; */\\r\\n  /* font-size: 10px; */\\r\\n  /* padding: 0; */\\r\\n  background: var(--primary-color);\\r\\n  border: solid 1px var(--primary-color);\\r\\n  border-radius: 5px;\\r\\n  color: white;\\r\\n  padding: 0px 20px 0px 20px;\\r\\n}\\r\\n\\r\\n.editBtn:active,\\r\\n.deleteBtn:active {\\r\\n  background-color: white;\\r\\n  border: solid 1px var(--primary-color);\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.card h1,\\r\\n.card p {\\r\\n  color: rgb(99, 98, 98);\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _showTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showTasks */ \"./src/showTasks.js\");\n/* harmony import */ var _showProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showProjects */ \"./src/showProjects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet projects = []\r\nwindow.currProject = []\r\nwindow.currTodo = {}\r\n\r\nconst noProject = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)('NoProject')\r\nconst allTasksProject = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)('All Tasks')\r\nconst completedTasks = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)('Completed Tasks')\r\n\r\nprojects.push(noProject)\r\nprojects.push(allTasksProject)\r\nprojects.push(completedTasks)\r\n\r\nconst todo1 = (0,_toDos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\r\n  'Climb everest',\r\n  'without any clothes',\r\n  '22/01/2023',\r\n  'high',\r\n  'true'\r\n)\r\n\r\nconst todo2 = (0,_toDos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\r\n  'descent Everest',\r\n  'Breathing',\r\n  '22/01/2023',\r\n  'high',\r\n  'true'\r\n)\r\n\r\nnoProject.addTodo(todo1)\r\nnoProject.addTodo(todo2)\r\n\r\nconst filteredProjects = projects\r\n  .filter((project) => project.name !== 'All Tasks')\r\n  .filter((project) => project.name !== 'Completed Tasks')\r\n\r\nconst modal = document.getElementById('myModal')\r\nconst modal2 = document.getElementById('myModal2')\r\nconst modal3 = document.getElementById('myModal3')\r\nconst addTask = document.querySelector('.addTask')\r\nconst allTasks = document.querySelector('.allTasks')\r\nconst form = document.querySelector('.formData')\r\nconst form2 = document.querySelector('.formData2')\r\nconst form3 = document.querySelector('.formData3')\r\nconst mainTasks = document.querySelector('.mainTasks')\r\nconst completeTasks = document.querySelector('.completeTasks')\r\nconst addProject = document.querySelector('.addProject')\r\nconst projectsDiv = document.querySelector('.projects')\r\n\r\n;(0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(noProject, mainTasks, modal, modal3)\r\naddTask.addEventListener('click', () => {\r\n  modal.style.display = 'block'\r\n})\r\n\r\n;(0,_showProjects__WEBPACK_IMPORTED_MODULE_4__.showProjects)(filteredProjects, projectsDiv, modal, modal3)\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n\r\n  const formData = new FormData(form)\r\n  const title = `${formData.get('title')}`\r\n  const description = `${formData.get('description')}`\r\n  const dueDate = `${formData.get('dueDate')}`\r\n  const priority = `${formData.get('priority')}`\r\n\r\n  const todo = (0,_toDos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, dueDate, priority)\r\n  if (window.currProject.length === 0) {\r\n    noProject.addTodo(todo)\r\n    ;(0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(noProject, mainTasks, modal, modal3)\r\n  } else {\r\n    window.currProject[0].addTodo(todo)\r\n    ;(0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(window.currProject[0], mainTasks, modal, modal3)\r\n  }\r\n\r\n  form.reset()\r\n  modal.style.display = 'none'\r\n})\r\n\r\nform3.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n\r\n  const formData = new FormData(form3)\r\n  window.currTodo.title = `${formData.get('title')}`\r\n  window.currTodo.description = `${formData.get('description')}`\r\n  window.currTodo.dueDate = `${formData.get('dueDate')}`\r\n  window.currTodo.priority = `${formData.get('priority')}`\r\n\r\n  if (window.currProject.length === 0) {\r\n    (0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(noProject, mainTasks, modal, modal3)\r\n  } else {\r\n    (0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(window.currProject[0], mainTasks, modal, modal3)\r\n  }\r\n  form3.reset()\r\n  modal3.style.display = 'none'\r\n})\r\n\r\nform2.addEventListener('submit', (e) => {\r\n  e.preventDefault()\r\n  const formData = new FormData(form2)\r\n  const name = `${formData.get('name')}`\r\n\r\n  filteredProjects.push((0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)(name))\r\n\r\n  ;(0,_showProjects__WEBPACK_IMPORTED_MODULE_4__.showProjects)(filteredProjects, projectsDiv, modal, currProject)\r\n  form2.reset()\r\n  modal2.style.display = 'none'\r\n})\r\n\r\nallTasks.addEventListener('click', () => {\r\n  allTasksProject.todos = []\r\n  filteredProjects.forEach((project) => {\r\n    allTasksProject.todos = allTasksProject.todos.concat(project.todos)\r\n  })\r\n\r\n  ;(0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(allTasksProject, mainTasks, modal)\r\n  allTasks.classList.add('selected')\r\n  completeTasks.classList.remove('selected')\r\n})\r\n\r\ncompleteTasks.addEventListener('click', () => {\r\n  completedTasks.todos = []\r\n  filteredProjects.forEach((project) => {\r\n    completedTasks.todos = completedTasks.todos.concat(\r\n      project.todos.filter((todo) => todo.state === false)\r\n    )\r\n    allTasks.classList.remove('selected')\r\n    completeTasks.classList.remove('selected')\r\n  })\r\n\r\n  ;(0,_showTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(completedTasks, mainTasks, modal)\r\n})\r\n\r\naddProject.addEventListener('click', () => {\r\n  modal2.style.display = 'block'\r\n  allTasks.classList.remove('selected')\r\n  completeTasks.classList.remove('selected')\r\n})\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.onclick = function (event) {\r\n  if (event.target == modal) {\r\n    modal.style.display = 'none'\r\n  }\r\n\r\n  if (event.target == modal2) {\r\n    modal2.style.display = 'none'\r\n  }\r\n\r\n  if (event.target == modal3) {\r\n    modal3.style.display = 'none'\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\nconst projectActions = {\r\n  addTodo(todo) {\r\n    return this.todos.push(todo)\r\n  },\r\n\r\n  deleteTodo(id) {\r\n    const objIndex = this.todos.findIndex((todo) => todo.id === id)\r\n\r\n    return this.todos.splice(objIndex, 1)\r\n  },\r\n}\r\n\r\nconst createProject = (name) => {\r\n  let project = Object.create(projectActions)\r\n  project.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  project.name = name\r\n  project.todos = []\r\n\r\n  return project\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/showProjects.js":
/*!*****************************!*\
  !*** ./src/showProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProjects\": () => (/* binding */ showProjects)\n/* harmony export */ });\n/* harmony import */ var _showTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTasks */ \"./src/showTasks.js\");\n\r\n\r\nconst showProjects = (projects, element, modal, modal3) => {\r\n  element.innerHTML = ''\r\n  const mainTasks = document.querySelector('.mainTasks')\r\n  const name = document.createElement('h1')\r\n  name.textContent = 'Projects'\r\n  const ul = document.createElement('ul')\r\n  projects.forEach((project) => {\r\n    const li = document.createElement('li')\r\n    li.textContent = `${project.name}`\r\n    li.addEventListener('click', () => {\r\n      window.currProject = []\r\n      window.currProject.push(project)\r\n\r\n      ;(0,_showTasks__WEBPACK_IMPORTED_MODULE_0__.showTasks)(project, mainTasks, modal, modal3)\r\n\r\n      const items = ul.getElementsByTagName('li')\r\n      for (let i = 0; i < items.length; ++i) {\r\n        items[i].classList.remove('selected')\r\n      }\r\n      li.classList.add('selected')\r\n    })\r\n    ul.appendChild(li)\r\n  })\r\n\r\n  element.appendChild(name)\r\n  element.appendChild(ul)\r\n\r\n  return element\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/showProjects.js?");

/***/ }),

/***/ "./src/showTasks.js":
/*!**************************!*\
  !*** ./src/showTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTasks\": () => (/* binding */ showTasks)\n/* harmony export */ });\nconst showTasks = (project, element, modal, modal3) => {\r\n  const cardsDiv = document.createElement('div')\r\n  cardsDiv.classList.add('cardsDiv')\r\n  element.innerHTML = ''\r\n  const titleAddDiv = document.createElement('div')\r\n  titleAddDiv.classList.add('titleAdd')\r\n\r\n  const projectName = document.createElement('h1')\r\n  projectName.innerText = `${project.name}`\r\n  titleAddDiv.appendChild(projectName)\r\n\r\n  if (project.name !== 'All Tasks' && project.name !== 'Completed Tasks') {\r\n    const addTaskToProject = document.createElement('button')\r\n    addTaskToProject.textContent = '+'\r\n    addTaskToProject.classList.add('btnAddTask')\r\n    addTaskToProject.addEventListener('click', (e) => {\r\n      modal.style.display = 'block'\r\n    })\r\n    titleAddDiv.appendChild(addTaskToProject)\r\n  }\r\n\r\n  project.todos\r\n    .sort((a, b) => b.state - a.state)\r\n    .forEach((todo) => {\r\n      const cardDiv = document.createElement('div')\r\n      cardDiv.classList.add('card')\r\n      if (todo.state === false) {\r\n        cardDiv.classList.add('completed')\r\n      }\r\n      const stateChck = document.createElement('input')\r\n      if (todo.state === false) {\r\n        stateChck.checked = true\r\n      }\r\n      stateChck.setAttribute('id', 'state')\r\n      stateChck.setAttribute('name', 'state')\r\n      stateChck.setAttribute('type', 'checkbox')\r\n\r\n      stateChck.addEventListener('change', function () {\r\n        todo.changeState()\r\n        cardDiv.classList.toggle('completed')\r\n      })\r\n\r\n      const title = document.createElement('h1')\r\n      title.textContent = `${todo.title}`\r\n\r\n      const description = document.createElement('p')\r\n      description.textContent = `${todo.description}`\r\n\r\n      const dueDate = document.createElement('p')\r\n      dueDate.textContent = `${todo.dueDate}`\r\n\r\n      const priority = document.createElement('p')\r\n      priority.textContent = `${todo.priority}`\r\n\r\n      const editBtn = document.createElement('button')\r\n      editBtn.classList.add('editBtn')\r\n      editBtn.textContent = 'Edit'\r\n      const deleteBtn = document.createElement('button')\r\n      deleteBtn.classList.add('deleteBtn')\r\n      deleteBtn.textContent = 'Delete'\r\n\r\n      deleteBtn.addEventListener('click', () => {\r\n        const idxTodo = project.todos.findIndex((elm) => elm.id === todo.id)\r\n\r\n        project.todos.splice(idxTodo, 1)\r\n\r\n        showTasks(project, element, modal, modal3)\r\n      })\r\n\r\n      editBtn.addEventListener('click', () => {\r\n        window.currTodo = {}\r\n        window.currTodo = todo\r\n        // const form3 = document.querySelector('.formData3')\r\n        const title = document.getElementById('title')\r\n        const description = document.getElementById('description')\r\n        const dueDate = document.getElementById('dueDate')\r\n        const priority = document.getElementById('priority')\r\n\r\n        title.value = todo.title\r\n        description.value = todo.description\r\n        dueDate.value = todo.dueDate\r\n        priority.value = todo.priority\r\n\r\n        modal3.style.display = 'block'\r\n      })\r\n\r\n      cardDiv.appendChild(stateChck)\r\n      cardDiv.appendChild(title)\r\n      cardDiv.appendChild(description)\r\n      cardDiv.appendChild(dueDate)\r\n      cardDiv.appendChild(priority)\r\n      cardDiv.appendChild(editBtn)\r\n      cardDiv.appendChild(deleteBtn)\r\n\r\n      cardsDiv.appendChild(cardDiv)\r\n\r\n      // element.appendChild(cardDiv)\r\n    })\r\n\r\n  element.prepend(titleAddDiv)\r\n  element.appendChild(cardsDiv)\r\n\r\n  return element\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/showTasks.js?");

/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\nconst todoActions = {\r\n  changeState() {\r\n    if (this.state) {\r\n      return (this.state = false)\r\n    } else {\r\n      return (this.state = true)\r\n    }\r\n  },\r\n\r\n  changePriority(priority) {\r\n    return (this.priority = priority)\r\n  },\r\n}\r\n\r\nconst createTodo = (title, description, dueDate, priority) => {\r\n  let todo = Object.create(todoActions)\r\n  todo.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  todo.title = title\r\n  todo.description = description\r\n  todo.dueDate = dueDate\r\n  todo.priority = priority\r\n  todo.state = true\r\n  return todo\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/toDos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;