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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navBar {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: baseline;\\r\\n    margin-left: 5%;\\r\\n    margin-right: 20%;\\r\\n}\\r\\n\\r\\n.navMenu {\\r\\n    display: flex;\\r\\n    gap: 100%;\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    padding-left: 0;\\r\\n    justify-content: space-evenly;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n\\r\\n}\\r\\n\\r\\n.logoImg {\\r\\n   width: 300; \\r\\n   height: 150;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n    gap: 10px;\\r\\n    grid-auto-rows: minmax(100px, auto);\\r\\n  }\\r\\n\\r\\n\\r\\n.items {\\r\\ndisplay: flex;\\r\\nflex-direction: column;\\r\\nalign-items: center;\\r\\nmargin-top: 20px;\\r\\n}\\r\\n\\r\\n.titleDiv {\\r\\n    display: flex;\\r\\n    width: 300px;\\r\\n    align-self: center;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n margin-top: 15px;\\r\\n padding: 10px 20px;\\r\\n border-radius: 8px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n    display: flex;\\r\\n    justify-content: flex-end!important;\\r\\n    text-align: right;\\r\\n    width: 200px;\\r\\n}\\r\\n\\r\\n.popUpComment {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.popComment.active {\\r\\n    display: flex;  \\r\\n}\\r\\n\\r\\n.popupitems {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  position: absolute;\\r\\n  width: 170%;\\r\\n  height: auto;\\r\\n  z-index: 10;\\r\\n  padding-top: 30%;\\r\\n  padding-left: 70%;\\r\\n  padding-bottom: 30%;\\r\\n  margin: auto;\\r\\n}\\r\\n \\r\\n.info {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  text-align: center;\\r\\n  padding-left: 0%;\\r\\n}\\r\\n\\r\\n.infoChild {\\r\\n  font-size: 60%;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  align-self: flex-end;\\r\\n  margin-right: 35%;\\r\\n  cursor: pointer;\\r\\n  font-size: 125%;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _assets_filmtube1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/filmtube1.png */ \"./src/assets/filmtube1.png\");\n\r\n\r\n\r\n\r\n(0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)();\r\nconst append = document.querySelector('#menu');\r\nconst display = (scores) => {\r\n  for (let i = 0; i < scores?.slice(0, 6).length; i += 1) {\r\n    // create the display page of the project.\r\n    const items = scores[i]\r\n    const div = document.createElement('div');\r\n    div?.classList.add('items')\r\n    const commentButton = document.createElement('button')\r\n    commentButton.innerHTML = \"comments\";\r\n    commentButton.classList = 'commentBtn';\r\n    const reservationButton = document.createElement('button')\r\n    reservationButton.innerHTML = \"Reservations\"\r\n    const icon = document.createElement('i')\r\n    icon.className = 'fa-regular fa-heart'\r\n    const likes = document.createElement('div')\r\n    likes.innerHTML = '5 likes'\r\n    likes.classList.add('likes')\r\n    const snacksimg = new Image(300, 300);\r\n    snacksimg.className = 'img';\r\n    snacksimg.setAttribute('src', items?.image);\r\n    const titleDiv = document.createElement('div')\r\n    titleDiv?.classList.add('titleDiv')\r\n    icon.style.lineHeight = 3.3\r\n    icon.style.marginLeft = '18px'\r\n    const title = document.createElement('p')\r\n    title.innerHTML = items?.title\r\n    titleDiv.appendChild(title)\r\n    titleDiv.appendChild(icon)\r\n    div.appendChild(snacksimg)\r\n    div.appendChild(titleDiv)\r\n    div.appendChild(likes)\r\n    div.appendChild(commentButton)\r\n    div.appendChild(reservationButton)\r\n    append.appendChild(div)\r\n    commentButton.addEventListener('click', () => {\r\n      //create the Pop up window to the comments.\r\n      const commentPopUp = document.querySelector('.popComment');\r\n      const div = document.createElement('div');\r\n      div?.classList.add('popupitems')\r\n      const deleteBtn = document.createElement('button');\r\n      deleteBtn.type = 'button';\r\n      deleteBtn.classList = 'delete';\r\n      deleteBtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\r\n      div.appendChild(deleteBtn);\r\n      const movieImg = new Image(300, 300);\r\n      movieImg.className = 'img';\r\n      movieImg.setAttribute('src', items?.image);\r\n      const titleDiv = document.createElement('div')\r\n      titleDiv?.classList.add('titleDiv')\r\n      const title = document.createElement('h2')\r\n      title.innerHTML = items?.title\r\n      const ul = document.createElement('ul');\r\n      ul.classList.add('info');\r\n      const li1 = document.createElement('li')\r\n      li1.classList = 'infoChild';\r\n      li1.innerText = items?.titleOriginal;\r\n      ul.appendChild(li1);\r\n      const li3 = document.createElement('li')\r\n      li3.classList = 'infoChild';\r\n      li3.innerHTML = items?.rating;\r\n      ul.appendChild(li3);\r\n      const li4 = document.createElement('li')\r\n      li4.classList = 'infoChild';\r\n      li4.innerText = items?.release;      \r\n      ul.appendChild(li4);\r\n      title.appendChild(ul);\r\n      div.appendChild(movieImg);\r\n      div.appendChild(title);\r\n      titleDiv.appendChild(div);\r\n      commentPopUp.appendChild(titleDiv);\r\n      commentPopUp.classList.add('.active');\r\n    });\r\n\r\n    reservationButton.addEventListener('click', () => {\r\n      // create the Pop up window to the reservation.\r\n      const commentPopUp = document.querySelector('.popComment');\r\n      const div = document.createElement('div');\r\n      div?.classList.add('popupitems')\r\n      const deleteBtn = document.createElement('button');\r\n      deleteBtn.type = 'button';\r\n      deleteBtn.classList = 'delete';\r\n      deleteBtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\r\n      div.appendChild(deleteBtn);\r\n      const movieImg = new Image(300, 300);\r\n      movieImg.className = 'img';\r\n      movieImg.setAttribute('src', items?.image);\r\n      const titleDiv = document.createElement('div')\r\n      titleDiv?.classList.add('titleDiv')\r\n      const title = document.createElement('h2')\r\n      title.classList = 'title';\r\n      title.innerHTML = items?.title\r\n      const ul = document.createElement('ul');\r\n      ul.classList.add('info');\r\n      const li1 = document.createElement('li')\r\n      li1.classList = 'infoChild';\r\n      li1.innerText = items?.titleOriginal;\r\n      ul.appendChild(li1);\r\n      const li3 = document.createElement('li')\r\n      li3.classList = 'infoChild';\r\n      li3.innerHTML = items?.rating;\r\n      ul.appendChild(li3);\r\n      const li4 = document.createElement('li')\r\n      li4.classList = 'infoChild';\r\n      li4.innerText = items?.release;      \r\n      ul.appendChild(li4);\r\n      title.appendChild(ul);\r\n      div.appendChild(movieImg);\r\n      div.appendChild(title);\r\n      titleDiv.appendChild(div);\r\n      commentPopUp.appendChild(titleDiv);\r\n      commentPopUp.classList.add('.active');\r\n    });\r\n  }\r\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'\r\n\r\n;\r\n\r\nconst fetchData = async () => {\r\n    let scores = [];\r\n    await fetch('https://movies-app1.p.rapidapi.com/api/movies', {\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n        Accept: 'application/json',\r\n        'X-RapidAPI-Key': '23e1d48543msh69a29a6c279791ap1bca45jsn8e0256d8d8f5',\r\n    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'\r\n      },\r\n    })\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n          scores = data?.results;\r\n          console.log(scores);\r\n          (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.display)(scores)\r\n      })\r\n      .catch((error) => {\r\n        throw error;\r\n      });\r\n      return scores\r\n  };\r\n  \r\n  \r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/utils.js?");

/***/ }),

/***/ "./src/assets/filmtube1.png":
/*!**********************************!*\
  !*** ./src/assets/filmtube1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fee0412e0755cff503bc.png\";\n\n//# sourceURL=webpack://javascript-group-capstone/./src/assets/filmtube1.png?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n \n\n const cards = [\n  {\n    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',\n    heading: 'Movies',\n    badge1: 'comments',\n    badge2: 'reservation',\n    icon: '<i class=\"fa-solid fa-heart\"></i>'\n  },\n];\n\nconst divContainer = document.querySelector('.main');\n\nfor (let i = 0; i < cards.length; i +=1) {\n  const firstSection = document.querySelector('append');\n  divContainer.appendChild(firstSection);\n\n\n  const imageTheme = document.createElement('img');\n  imageTheme.classList.add('image');\n  imageTheme.src = cards[i].image;\n  firstSection.appendChild(imageTheme);\n\n  const subTitle = document.createElement('h2');\n  subTitle.classList.add('subtitle');\n  subTitle.innerText = cards[i].heading;\n  firstSection.appendChild(subTitle);\n\n  const commentBtn = document.createElement('button');\n  commentBtn.type = 'button';\n  commentBtn.textContent = cards[i].badge1;\n  firstSection.appendChild(commentBtn);\n\n  const reservationBtn = document.createElement('button');\n  reservationBtn.type = 'button';\n  reservationBtn.textContent = cards[i].badge2;\n  firstSection.appendChild(reservationBtn);\n}\n\n\n\n\n// const span = document.getElementById('popUpComments');\n// const popUp1Ul = document.getElementById('commentUl');\n// const popUpCommentCont = document.createElement('li');\n// popUpCommentCont.classList = 'popUp1';\n// popUpCommentCont.innerText = \"my comment\"/* `<li class=\"popUp1\"><span>${user}</span><span class=\"span\">${comment}</span></li>`;  */\n// popUp1Ul.appendChild(popUpCommentCont);\n// document.span.appendChild(popUp1Ul);\n\n\n\n// https://static.tvmaze.com/js/paq.js?v=1626190720\n/* let baseUrl = 'https://www.tvmaze.com/'\nconst retrieveFromAPI = async () => {\n  const com = await fetch(`${baseUrl}js/paq.js?v=1626190720/comments`);\n  const comm = await com.json();\n  const comments = comm.result;\n  return comments;\n};\nconst commentBoardWrapper = document.getElementById('commentList');\nconst commentBoard = ({ user, comment }) => {\n  commentBoardWrapper.innerHTML += `<li class=\"animated bounce\"><span>${user}</span><span class=\"span\">${comment}</span></li>`;\n};\n\nconst displayComments = async () => {\n  const comment = await retrieveFromAPI();\n  comments.forEach((comment) => {\n    scoreBoard(comment);\n  });\n};\n\n// https://static.tvmaze.com/js/paq.js?v=1626190720\n\n const retrieveFromAPIres = async () => {\n  const res = await fetch(`${baseUrl}js/paq.js?v=1626190720/reserves`);\n  const reserv = await res.json();\n  const reserves = reserv.result;\n  return reserves;\n };\n\nconst reserveBoardWrapper = document.getElementById('reserveList');\nconst reserveBoard = ({ user, reserve }) => {\n  reserveBoardWrapper.innerHTML += `<li class=\"animated bounce\"><span>${user}</span><span class=\"span\">${reserve}</span></li>`;\n};\n\nconst displayReserved = async () => {\n  const reserves = await retrieveFromAPI();\n  reserves.forEach((reserve) => {\n    reserveBoard(reserve);\n  });\n};\n\nconst comments = document.querySelector('button#comments');\ncomments.addEventListener('click', displayComments);\n\nconst reservations = document.querySelector('button#reservations');\nreservations.addEventListener('click', displayReserved);\n */\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");
>>>>>>> 6f7715cad4f9ceca523952b1aaf9fe16578670e7

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;