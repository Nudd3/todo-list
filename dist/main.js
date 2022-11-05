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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Roboto', sans-serif;\\n}\\nhtml, body {\\n  margin: 0;\\n  min-height: 100%;\\n  height: 100%;\\n  width: 100%;\\n}\\nbody {\\n  background-color: blue;\\n \\n  display: grid;\\n  grid-template-rows: 1fr 4fr;\\n  \\n}\\n\\n/* HEADER header, logo-section, title, */\\n.header {\\n  grid-row: 1 / 2;\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #F76C6C;\\n  \\n  color: white;\\n  padding: 0 25px;\\n}\\n\\n.header-title-section{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 15px 0;\\n  gap: 20px;\\n  font-weight: bold;\\n}\\n\\n/* NAV (LEFT SIDE) main, nav, section-title, add-list, new-list-section, addListButton, lists*/\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 5fr;\\n}\\n\\n.nav {\\n  background-color: #eeeeee;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  min-width: 100%;\\n}\\n\\n.add-list-section {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n#addListButton {\\n  border: none;\\n  background-color: #78df80;\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  font-size: 0.5rem;\\n  padding: 5px;\\n  margin-right: 15px;\\n}\\n\\n#addListButton:hover {\\n  cursor:pointer;\\n  background-color: #8aea92;\\n\\n}\\n\\n.section-title {\\n  padding: 10px 0 10px 10px;\\n}\\n\\n.lists {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  z-index: 2;\\n}\\n\\n.list {\\n  padding: 10px 15px;\\n  background-color: #BDC2BF;\\n  border-bottom: 2px solid #9a9f9c;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.list:last-child {\\n  border-bottom: none;\\n}\\n\\n.list:hover {\\n  background-color: #9f9f9f;\\n}\\n\\n/* Main Content (Right Side) */\\n\\n.content {\\n  background-color: #feffff;\\n}\\n\\n.list-tasks {\\n  padding: 0 25px;\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  gap: 15px;\\n}\\n\\n.task {\\n  width: 100%;\\n  height: 50px;\\n  background-color: #d5dbd7;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border: none;\\n}\\n\\n.task:hover {\\n  background-color: #d1d1d1;\\n}\\n\\n.task-title {\\n  font-size: 1.5rem;\\n  padding-left: 25px;\\n}\\n\\n.task-right {\\n  display: flex;\\n  gap: 25px;\\n  padding-right: 25px;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.delete:hover {\\n  cursor: pointer;\\n}\\n\\n\\n/* Add new list menu */\\n#newList {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\ninput[name=title] {\\n  font-size: 15px;\\n  padding: 5px 0 5px 15px;\\n  border: none;\\n}\\ninput[name=title]:active {\\n  border: none;\\n  appearance: none;\\n}\\n\\ninput[name=title]:focus {\\n  border: none;\\n  appearance: none;\\n  outline: none;\\n}\\n\\ninput[name=description]{\\n  font-size: 15px;\\n  border: none;\\n  padding: 25px 0 25px 15px;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\nselect{\\n  appearance: none;\\n  padding: 5px 0 5px 15px;\\n  font-size: 15px;\\n  border:none;\\n  color: rgb(160, 160, 160);\\n}\\n\\n.buttons {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 15px;\\n}\\n\\n.submit-list-button,\\n.cancel-list-button {\\n  margin-top: 15px;\\n  padding: 10px 15px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  //const ui = new UI();\n  //ui.load();\n  new _modules_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().load();\n})\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  // THIS IS WHERE I WILL STORE ALL THE LISTS!\n  constructor() {\n    this.storage = [];\n  }\n\n  storeList(todoList) {\n    this.storage.push(todoList)\n  }\n\n  deleteList(todoList) {\n    \n  }\n\n  getLists() {\n    return this.storage;\n  }\n\n  // testing purposes\n  printStorage() {\n    this.storage.forEach(element => {\n      console.log(element);\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, priority, dueDate) {\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n    this.complete = false;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(name){\n    this.name = name;\n  }\n\n  getDescription(){\n    return this.description;\n  }\n\n  getPriority(){\n    return this.priority;\n  }\n\n  getDueDate(){\n    return this.dueDate;\n  }\n\n  setComplete(){\n    this.complete = true;\n  }\n\n  testFunction(){\n    console.log('Hello from a task with name' + this.name);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todo-list.js":
/*!**********************************!*\
  !*** ./src/modules/todo-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setName(value){\n    this.name = value;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  setTasks(value){\n    this.tasks = value;\n  }\n\n  addTask(newTask) {\n    this.tasks.push(newTask);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.name !== taskName);\n  }\n\n  nrOfTasks(){\n    return this.tasks.length;\n  }\n\n  toString() {\n    const output = '';\n    this.tasks.forEach(task => {\n      output += `Title: ${task.getTitle()}, `;\n      output += `Prio: ${task.getPriority()}, \\n`;\n    })\n    return output;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todo-list.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ \"./src/modules/todo-list.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\n\nclass UI {\n  constructor() {\n    this.storage = new _storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n  // Display Lists\n  // Add Lists\n  // Remove Lists\n  // Display Tasks\n  // Remove Tasks\n  load() {\n    this.createExamples();\n    //UI.addListButton();\n    this.displayTodoContent();\n  }\n\n  loadProjects() {}\n\n  static createTodoList() {\n    const todoListDiv = document.createElement('div');\n    todoListDiv.classList.add('list');\n    const title = todoList.getName();\n    todoListDiv.textContent = title;\n\n    // Should this happen here? \n    // Should createTodoList just add a list to the \n    // storage and then display them through the storage?\n    todoListDiv.addEventListener('click', () => {\n      //UI.displayTodoContent(todoList);\n    });\n    return todoListDiv;\n  }\n\n  static addListButton() {\n    const addListBtn = document.getElementById('addListButton');\n    addListBtn.addEventListener('click', () => {\n      this.clearTasksSection();\n      const lists = document.getElementById('lists');\n      /** Most Likely not necessary\n      while (lists.firstChild) {\n        lists.removeChild(lists.firstChild);\n      }\n      */\n\n      lists.innerHTML = `\n      <div id=\"newList\">\n        <input type=\"textfield\" id=\"title\" name=\"title\" placeholder=\"TITLE\">\n        <input type=\"textfield\" id=\"description\" name=\"description\" placeholder=\"DESCRIPTION\">\n        <select id=\"priority\" name=\"priority\">\n          <option value=\"\" disabled selected>PRIORITY</option>\n          <option value=\"low\">Low</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"high\">High</option>\n        </select>\n        <label for=\"dueDate\">Due Date:\n        <input type=\"date\" name=\"dueDate\", id=\"dueDate\">\n        </label>\n        <div class=\"buttons\">\n          <button class=\"submit-list-button\" id=\"submitListButton\">Add List</button>\n          <button class=\"cancel-list-button\" id=\"cancelListButton\">Cancel</button>\n        </div>\n      </div>\n      `;\n\n      const submitListButton = document.getElementById('submitListButton');\n      submitListButton.addEventListener('click', () => {\n        const newList = this.createTodoList();\n        this.storage.storeList(newList);\n      });\n    });\n  }\n\n  //static displayTodoContent() {\n  displayTodoContent() {\n    UI.clearTasksSection();\n    const lists = document.getElementById('lists');\n    this.storage.getLists().forEach((list) => {\n      const listDiv = document.createElement('div');\n      listDiv.textContent = list.getName();\n      listDiv.classList.add('list');\n      lists.appendChild(listDiv);\n    })\n  }\n  // Should just loop through some storage and show \n  // like: storage.forEach(todoList, displayTodoContent(todoList))\n  /*static displayTodoContent(todoList) {\n    UI.clearTasksSection();\n    const lists = document.getElementById('listTasks');\n\n    // Show the tasks\n    todoList.getTasks().forEach((task) => {\n      const taskDiv = document.createElement('div');\n      taskDiv.classList.add('task');\n      taskDiv.innerHTML = `\n      <div class=\"task-title\">${task.getTitle()}</div>\n      <div>${task.getDescription()}</div>\n      <div class=\"task-right\">\n        <div>${task.getPriority()}</div>\n        <div>${task.getDueDate()}</div>\n        <i class=\"fa-solid fa-trash-can delete\"></i>\n        <div><input type='checkbox'></div>\n      </div>\n      `;\n      lists.appendChild(taskDiv);\n    });\n\n    // Add option to remove a task\n    const removeTask = document.querySelectorAll('.delete');\n    removeTask.forEach((btn) => {\n      btn.addEventListener('click', () => {\n        console.log('remove');\n        btn.parentElement.parentElement.remove(); // WORKS!\n        todoList.deleteTask(todoList.getName()); // This needs to happen on storage level\n      });\n    });\n  }\n  */\n  \n\n  static clearTasksSection() {\n    const lists = document.getElementById('listTasks');\n    while (lists.firstChild) {\n      lists.removeChild(lists.firstChild);\n    }\n  }\n\n  /* 'Showcase Todo List' -> The list that's included when user loads the page */\n  createExamples() {\n    const lists = document.getElementById('lists');\n    const todoList = new _todo_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Shopping (Example)');\n    const task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Avocados', 'I really need them!', 'High', 'none');\n    const task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Milk', 'For my cereal addiction', 'High', 'none');\n    todoList.addTask(task1);\n    todoList.addTask(task2);\n\n    const todoList2 = new _todo_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Cleaning (Example)');\n    const tasks1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Bathroom', 'I really need them!', 'High', 'none');\n    const tasks2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      'Kitchen',\n      'For my cereal addiction',\n      'High',\n      'none'\n    );\n    todoList2.addTask(tasks1);\n    todoList2.addTask(tasks2);\n\n    // lists.appendChild(UI.createTodoList(todoList));\n    // lists.appendChild(UI.createTodoList(todoList2));\n\n    this.storage.storeList(todoList);\n    this.storage.storeList(todoList2);\n    this.storage.printStorage();\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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