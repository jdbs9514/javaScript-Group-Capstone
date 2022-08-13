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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imgPath\": () => (/* binding */ imgPath)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/popupcoment.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';\r\nconst key = '367c6d3a0d8f351d5debe2e3965cfebc';\r\n// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=367c6d3a0d8f351d5debe2e3965cfebc&page=1\r\n\r\nconst imgPath = 'https://image.tmdb.org/t/p/w1280/';\r\nconst bigContainer = document.querySelector('.title-div');\r\n\r\n\r\n\r\nfetch(`${url}&api_key=${key}&page=1`)\r\n  .then((response) => response.json())\r\n  .then((data) => {\r\n    const array = data.results;\r\n    console.log(array.title)\r\n    console.log(data);\r\n    array.forEach((movie) => {\r\n      const movieCard = document.createElement('div');\r\n      movieCard.classList.add('items');\r\n      movieCard.id = movie.id;\r\n      movieCard.innerHTML = `\r\n              <img class=\"movie-img\" \r\n                src=\"${imgPath + movie.poster_path}\" alt=\"\">\r\n              <h2 class=\"movie-title\">${movie.title}</h2>\r\n              <div class=\"reaction\">\r\n                <button class=\"commentsBtn\">comments</button>\r\n                <button class=\"reservations\">reservations</button>\r\n              </div>\r\n              <div class=\"like-comments\">\r\n                <i class=\"fa-regular fa-heart\">  5 likes</i> \r\n                <i class=\"fa-solid fa-comment\">  5 comments</i>\r\n              </div>`;\r\n      bigContainer.appendChild(movieCard);\r\n    });\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/popupcoment.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(array);\r\n  });\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;