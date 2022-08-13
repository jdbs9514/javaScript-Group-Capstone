/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: white;\n  list-style: none;\n  text-decoration: none;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: black;\n  box-sizing: inherit;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  padding: 0.7em;\n  border-radius: 50%;\n}\n\n.icons {\n  font-family: \"Material Icons\", sans-serif;\n  font-size: 2.4rem;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.4rem;\n  background-color: #402e27;\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n}\nheader h1,\nheader h2 {\n  font-size: 1.2rem;\n  color: white;\n}\nheader button {\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup {\n  margin-top: 2rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  padding: 1rem 1.5rem 1.5rem;\n  position: fixed;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  max-height: 95%;\n  overflow: hidden;\n  overflow-y: scroll;\n  backdrop-filter: blur(10px);\n}\n\n.popup-content {\n  width: 40%;\n  height: max-content;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n  margin-top: 1rem;\n  margin-bottom: 5rem;\n}\n\n.popup-title {\n  color: #f2a413;\n  font-size: 2rem;\n  margin: 0;\n  align-self: flex-start;\n  margin-right: 3rem;\n}\n\n.close-popup {\n  width: 1.5rem;\n  height: 1.5rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-style: none;\n  background-color: red;\n  align-self: flex-end;\n  position: absolute;\n  transition: 0.1s;\n  border-radius: 30px;\n  color: white;\n  font-size: large;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.close-popup:hover {\n  width: 1.8rem;\n  height: 1.8rem;\n  transition: 0.1s;\n}\n\n.popup-rating-div {\n  align-self: flex-start;\n  height: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 0.3rem;\n  gap: 0.5rem;\n}\n\n.popup-star {\n  height: 1.5rem;\n}\n\n.popup-punt {\n  color: white;\n}\n\n.popup-img {\n  margin-top: 2rem;\n  width: auto;\n  height: 50vh;\n  object-fit: scale-down;\n  align-self: flex-start;\n  margin-left: 2rem;\n}\n\n.popup-description {\n  color: white;\n  margin-top: 1rem;\n  align-self: flex-start;\n  margin-left: 2rem;\n  text-align: justify;\n  line-height: 1.2em;\n  margin-right: 2rem;\n}\n\n.popup-category {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: row;\n  margin-left: 2rem;\n  gap: 0.5rem;\n}\n\n.popup-cat-des {\n  color: white;\n  margin-top: 1rem;\n  align-self: flex-start;\n  border: 1.5px solid #a68c6d;\n  border-radius: 30px;\n  padding: 0.5rem;\n}\n\n.popup-line {\n  margin-top: 2rem;\n  width: 100%;\n  border: 1px solid #a68c6d;\n}\n\n.popup-subtilte {\n  color: #f2a413;\n  margin-top: 0.5rem;\n  margin-left: 2rem;\n  align-self: flex-start;\n  margin-bottom: 1rem;\n}\n\n.popup-comment-list {\n  align-self: flex-start;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-left: 2rem;\n}\n\n.comment-item {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  border: 1px solid #a68c6d;\n  width: 100%;\n  list-style: none;\n  border-radius: 5px;\n}\n\n.user {\n  color: white;\n}\n\n.date {\n  color: white;\n}\n\n.user-comment {\n  color: white;\n}\n\n/* review form */\n.popup-form {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-left: 2rem;\n  margin-top: 0.5rem;\n  width: 60%;\n  margin-bottom: 2rem;\n}\n\n#popup-subtitle {\n  align-self: flex-start;\n  margin-left: 0;\n}\n\n.popup-form-name {\n  width: 14rem;\n  height: 2rem;\n  border-radius: 5px;\n  padding-left: 0.5rem;\n  border-style: none;\n  color: black;\n}\n\n.popup-form-msg {\n  width: 100%;\n  height: 5rem;\n  border-radius: 5px;\n  padding-left: 0.5rem;\n  padding-top: 0.5rem;\n  border-style: none;\n  color: black;\n}\n\n.popup-submit {\n  width: 5rem;\n  height: 2.5rem;\n  border-radius: 5px;\n  padding-left: 0.5rem;\n  align-self: flex-start;\n  background-color: #f2a413;\n  font-size: 1rem;\n  text-decoration: none;\n  font-weight: bold;\n  border-width: 2px;\n}\n\n.cards {\n  margin-top: 6rem;\n  padding-bottom: 4rem;\n  display: grid;\n  grid-template-columns: auto;\n  place-items: center;\n  position: relative;\n  gap: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n  overflow-y: scroll;\n}\n.cards .cardItem {\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  background-color: #592533;\n  width: 310px;\n  height: 600px;\n  border-radius: 1rem;\n  box-shadow: 0 4px 5px #592533;\n}\n.cards .cardItem .cardImg {\n  border: 4px solid #592533;\n  width: 100%;\n  height: 400px;\n  border-radius: 1rem;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.cards .cardItem .cardImg:hover {\n  box-shadow: 0 0 30px black inset;\n}\n.cards .cardItem .cardName {\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  color: white;\n  height: 50px;\n  text-align: center;\n}\n.cards .cardItem .cardName:hover {\n  cursor: pointer;\n  color: #a68c6d;\n}\n.cards .cardItem .starContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  width: 80%;\n}\n.cards .cardItem .starRate {\n  font-size: 1.5rem;\n  margin-left: 5rem;\n  color: #f2a413;\n}\n.cards .cardItem .starCount {\n  font-size: 1rem;\n  border-radius: 1rem;\n  color: white;\n  width: 10%;\n  text-align: center;\n  margin-right: auto;\n}\n.cards .cardItem .starBorder {\n  color: #a67417;\n  cursor: pointer;\n  margin-right: auto;\n}\n.cards .cardItem .starBorder:hover {\n  background-color: #f2a413;\n}\n.cards .cardItem .liked {\n  color: #f2a413;\n}\n.cards .cardItem .commentBtn {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1rem;\n  font-weight: 900;\n  border-radius: 0.8rem;\n  color: #592533;\n  background-color: white;\n  width: 40%;\n  border: 2px solid white;\n  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  opacity: 0.7;\n}\n.cards .cardItem .commentBtn:hover {\n  opacity: 1;\n}\n\nfooter {\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 1rem;\n  position: fixed;\n  bottom: 0;\n  background-color: #402e27;\n  z-index: 1000;\n}\nfooter a {\n  margin-left: 1rem;\n  color: white;\n}\n\n@media screen and (min-width: 768px) {\n  header {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  header button {\n    margin-left: 2rem;\n  }\n  header h1 {\n    font-size: 1.3rem;\n    margin-left: 2rem;\n  }\n  header h2 {\n    font-size: 0.9rem;\n    margin-left: 2rem;\n  }\n  header h3 {\n    margin-top: 1rem;\n    font-size: 1.5rem;\n    margin-left: 2rem;\n    color: white;\n  }\n  header h3:hover {\n    text-decoration: underline;\n  }\n  .cards {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .cards .cardItem .cardName {\n    height: 75px;\n  }\n  .cards .cardItem .starCount {\n    width: 10%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\r\n\r\n// Mix-ins\r\n@mixin margin-sides($size) {\r\n  margin-left: $size;\r\n  margin-right: $size;\r\n}\r\n\r\n// color pellete\r\n$color-1: #592533;\r\n$color-2: #f2a413;\r\n$color-3: #a67417;\r\n$color-4: #a68c6d;\r\n$color-5: #402e27;\r\n\r\n// Global\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  color: white;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  box-sizing: inherit;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton {\r\n  padding: 0.7em;\r\n  border-radius: 50%;\r\n}\r\n\r\n.icons {\r\n  font-family: 'Material Icons', sans-serif;\r\n  font-size: 2.4rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.4rem;\r\n  background-color: $color-5;\r\n  position: fixed;\r\n  width: 100vw;\r\n  z-index: 1000;\r\n\r\n  h1,\r\n  h2 {\r\n    font-size: 1.2rem;\r\n    color: white;\r\n  }\r\n\r\n  button {\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.popup {\r\n  margin-top: 2rem;\r\n  border-radius: 1rem;\r\n  font-size: 0.8rem;\r\n  padding: 1rem 1.5rem 1.5rem;\r\n  position: fixed;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  max-height: 95%;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popup-content {\r\n  width: 40%;\r\n  height: max-content;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border-radius: 20px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.popup-title {\r\n  color: $color-2;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  align-self: flex-start;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.close-popup {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-style: none;\r\n  background-color: red;\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  transition: 0.1s;\r\n  border-radius: 30px;\r\n  color: white;\r\n  font-size: large;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.close-popup:hover {\r\n  width: 1.8rem;\r\n  height: 1.8rem;\r\n  transition: 0.1s;\r\n}\r\n\r\n.popup-rating-div {\r\n  align-self: flex-start;\r\n  height: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-top: 0.3rem;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.popup-star {\r\n  height: 1.5rem;\r\n}\r\n\r\n.popup-punt {\r\n  color: white;\r\n}\r\n\r\n.popup-img {\r\n  margin-top: 2rem;\r\n  width: auto;\r\n  height: 50vh;\r\n  object-fit: scale-down;\r\n  align-self: flex-start;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.popup-description {\r\n  color: white;\r\n  margin-top: 1rem;\r\n  align-self: flex-start;\r\n  margin-left: 2rem;\r\n  text-align: justify;\r\n  line-height: 1.2em;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.popup-category {\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-left: 2rem;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.popup-cat-des {\r\n  color: white;\r\n  margin-top: 1rem;\r\n  align-self: flex-start;\r\n  border: 1.5px solid $color-4;\r\n  border-radius: 30px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.popup-line {\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n  border: 1px solid $color-4;\r\n}\r\n\r\n.popup-subtilte {\r\n  color: $color-2;\r\n  margin-top: 0.5rem;\r\n  margin-left: 2rem;\r\n  align-self: flex-start;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup-comment-list {\r\n  align-self: flex-start;\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.comment-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.5rem;\r\n  border: 1px solid $color-4;\r\n  width: 100%;\r\n  list-style: none;\r\n  border-radius: 5px;\r\n}\r\n\r\n.user {\r\n  color: white;\r\n}\r\n\r\n.date {\r\n  color: white;\r\n}\r\n\r\n.user-comment {\r\n  color: white;\r\n}\r\n\r\n/* review form */\r\n\r\n.popup-form {\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-left: 2rem;\r\n  margin-top: 0.5rem;\r\n  width: 60%;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#popup-subtitle {\r\n  align-self: flex-start;\r\n  margin-left: 0;\r\n}\r\n\r\n.popup-form-name {\r\n  width: 14rem;\r\n  height: 2rem;\r\n  border-radius: 5px;\r\n  padding-left: 0.5rem;\r\n  border-style: none;\r\n  color: black;\r\n}\r\n\r\n.popup-form-msg {\r\n  width: 100%;\r\n  height: 5rem;\r\n  border-radius: 5px;\r\n  padding-left: 0.5rem;\r\n  padding-top: 0.5rem;\r\n  border-style: none;\r\n  color: black;\r\n}\r\n\r\n.popup-submit {\r\n  width: 5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  padding-left: 0.5rem;\r\n  align-self: flex-start;\r\n  background-color: $color-2;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  border-width: 2px;\r\n}\r\n\r\n// Cards Section\r\n.cards {\r\n  margin-top: 6rem;\r\n  padding-bottom: 4rem;\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  place-items: center;\r\n  position: relative;\r\n  gap: 1rem;\r\n\r\n  @include margin-sides(auto);\r\n\r\n  z-index: 1;\r\n  overflow-y: scroll;\r\n\r\n  .cardItem {\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    background-color: $color-1;\r\n    width: 310px;\r\n    height: 600px;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 4px 5px $color-1;\r\n\r\n    .cardImg {\r\n      border: 4px solid $color-1;\r\n      width: 100%;\r\n      height: 400px;\r\n      border-radius: 1rem;\r\n      background-size: cover;\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n\r\n      &:hover {\r\n        box-shadow: 0 0 30px black inset;\r\n      }\r\n    }\r\n\r\n    .cardName {\r\n      margin-top: 1rem;\r\n      font-size: 1.5rem;\r\n      color: white;\r\n      height: 50px;\r\n      text-align: center;\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n        color: $color-4;\r\n      }\r\n    }\r\n\r\n    .starContainer {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin-top: 1rem;\r\n      width: 80%;\r\n    }\r\n\r\n    .starRate {\r\n      font-size: 1.5rem;\r\n      margin-left: 5rem;\r\n      color: $color-2;\r\n    }\r\n\r\n    .starCount {\r\n      font-size: 1rem;\r\n      border-radius: 1rem;\r\n      color: white;\r\n      width: 10%;\r\n      text-align: center;\r\n      margin-right: auto;\r\n    }\r\n\r\n    .starBorder {\r\n      color: $color-3;\r\n      cursor: pointer;\r\n      margin-right: auto;\r\n\r\n      &:hover {\r\n        background-color: $color-2;\r\n      }\r\n    }\r\n\r\n    .liked {\r\n      color: $color-2;\r\n    }\r\n\r\n    .commentBtn {\r\n      @include margin-sides(auto);\r\n\r\n      margin-bottom: 1rem;\r\n      font-weight: 900;\r\n      border-radius: 0.8rem;\r\n      color: $color-1;\r\n      background-color: white;\r\n      width: 40%;\r\n      border: 2px solid white;\r\n      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);\r\n      cursor: pointer;\r\n      opacity: 0.7;\r\n\r\n      &:hover {\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  position: fixed;\r\n  bottom: 0;\r\n  background-color: $color-5;\r\n  z-index: 1000;\r\n\r\n  a {\r\n    margin-left: 1rem;\r\n    color: white;\r\n  }\r\n}\r\n\r\n// Desktop Version\r\n@media screen and (min-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n\r\n    button {\r\n      margin-left: 2rem;\r\n    }\r\n\r\n    h1 {\r\n      font-size: 1.3rem;\r\n      margin-left: 2rem;\r\n    }\r\n\r\n    h2 {\r\n      font-size: 0.9rem;\r\n      margin-left: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-top: 1rem;\r\n      font-size: 1.5rem;\r\n      margin-left: 2rem;\r\n      color: white;\r\n\r\n      &:hover {\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n\r\n  .cards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n\r\n    .cardItem {\r\n      .cardName {\r\n        height: 75px;\r\n      }\r\n\r\n      .starCount {\r\n        width: 10%;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/extrenalAPI.js":
/*!************************************!*\
  !*** ./src/modules/extrenalAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "postLike": () => (/* binding */ postLike)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = '69OY6E73yjavl4eR3trH';

const postLike = async (itemID) => {
  const response = await fetch(`${url}${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const post = await response.text();
  return post;
};

const getLikes = async () => {
  const response = await fetch(`${url}${appID}/likes`);
  const likes = await response.json();
  return likes;
};

const postComment = async (_id, _name, _comment) => {
  const response = await fetch(`${url}${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: _id,
      username: _name,
      comment: _comment,
    }),
  });
  const post = await response.text();
  return post;
};

const getComments = async (_id) => {
  const response = await fetch(`${url}${appID}/comments?item_id=${_id}`);
  const comments = await response.json();
  return comments;
};



/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ "./src/modules/involvement.js");


let numComments = 0;
const popup = (id) => {
  let i = 0;
  const body = document.querySelector('body');
  const popup = document.createElement('section');
  const content = document.createElement('div');
  const title = document.createElement('h1');
  const rating = document.createElement('div');
  const puntuation = document.createElement('h3');
  const image = document.createElement('img');
  const category = document.createElement('div');
  const description = document.createElement('div');
  const line = document.createElement('div');
  const revh2 = document.createElement('h2');
  const line2 = document.createElement('div');
  const commentUl = document.createElement('ul');
  const reviewForm = document.createElement('form');
  const formh2 = document.createElement('h2');
  const nameBox = document.createElement('input');
  const msgBox = document.createElement('textarea');
  const btnInput = document.createElement('button');
  const close = document.createElement('button');

  popup.className = 'popup';
  content.className = 'popup-content';
  title.className = 'popup-title';
  rating.className = 'popup-rating-div';
  puntuation.className = 'popup-punt';
  image.className = 'popup-img';
  category.className = 'popup-category';
  description.className = 'popup-description';
  line.className = 'popup-line';
  line2.className = 'popup-line';
  revh2.className = 'popup-subtilte';
  commentUl.className = 'popup-comment-list';
  reviewForm.className = 'popup-form';
  formh2.className = 'popup-subtilte';
  nameBox.className = 'popup-form-name';
  msgBox.className = 'popup-form-msg';
  btnInput.className = 'popup-submit';
  close.className = 'close-popup';

  puntuation.setAttribute('id', 'punt');
  formh2.setAttribute('id', 'popup-subtitle');
  nameBox.setAttribute('name', 'name');
  nameBox.setAttribute('placeholder', 'Name');
  nameBox.setAttribute('type', 'text');
  nameBox.setAttribute('maxlength', '30');
  msgBox.setAttribute('name', 'message');
  msgBox.setAttribute('placeholder', 'Comments');
  msgBox.setAttribute('type', 'text');
  msgBox.setAttribute('maxlength', '500');
  btnInput.setAttribute('type', 'submit');
  body.appendChild(popup);
  popup.appendChild(content);
  content.appendChild(title);
  content.appendChild(close);
  content.appendChild(rating);
  rating.appendChild(puntuation);
  content.appendChild(image);
  content.appendChild(category);
  content.appendChild(description);
  content.appendChild(line);
  content.appendChild(revh2);
  content.appendChild(commentUl);
  content.appendChild(line2);
  content.appendChild(reviewForm);
  reviewForm.appendChild(formh2);
  reviewForm.appendChild(nameBox);
  reviewForm.appendChild(msgBox);
  reviewForm.appendChild(btnInput);

  const popupData = async () => {
    const gameUrl = `https://api.tvmaze.com/shows/${id}`;
    const result = await fetch(gameUrl);
    const data = await result.json();

    document.querySelector('.popup-title').textContent = data.name;
    document.querySelector('.popup-punt').textContent = `⭐  ${data.rating.average}`;
    document.querySelector('.popup-img').src = data.image.original;
    document.querySelector('.popup-description').innerHTML = data.summary;
    document.querySelector('#popup-subtitle').textContent = 'Add review';
    document.querySelector('.popup-submit').textContent = 'submit';
    document.querySelector('.close-popup').textContent = 'X';

    data.genres.forEach((e) => {
      const genre = document.createElement('p');
      genre.className = 'popup-cat-des';
      genre.setAttribute('id', `p${i}`);
      document.querySelector('.popup-category').appendChild(genre);
      document.getElementById(`p${i}`).textContent = e;
      i += 1;
    });
  };
  popupData();

  const updateComments = async (id) => {
    let comments = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
    comments = Array.isArray(comments) ? comments : [];
    if (comments) {
      comments.forEach((comment) => {
        commentUl.innerHTML += `
          <li class="comment-item">
            <h4 class="user">${comment.username}</h4>
            <span class="date">${comment.creation_date}</span>
            <p class="user-comment">${comment.comment}</p>
          </li>`;
      });
      numComments = comments.length;
      document.querySelector('.popup-subtilte').textContent = `Reviews (${numComments})`;
    }
  };
  updateComments(id);

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(id, nameBox.value, msgBox.value);
    commentUl.innerHTML = '';
    setTimeout(() => {
      updateComments(id);
    }, '500');
    nameBox.value = '';
    msgBox.value = '';
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    popup.remove();
  });
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.remove();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/extrenalAPI.js */ "./src/modules/extrenalAPI.js");
/* harmony import */ var _modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvement.js */ "./src/modules/involvement.js");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");





const countResults = document.querySelector('h2');

// Update Likes
const updateLikes = async () => {
  const response = await (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  document.querySelectorAll('.starCount').forEach((button) => {
    for (let i = 0; i < response.length; i += 1) {
      if (response[i].item_id === Number(button.id)) {
        button.lastChild.textContent = response[i].likes;
      }
    }
  });
};

// Display Cards
const cards = document.querySelector('.cards');
const createElement = async (requestURL) => {
  cards.innerHTML = '';
  await (0,_modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(requestURL)
    .then((data) => {
      let elementCount = 0;
      const dataArray = data.embedded.episodes;
      dataArray.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const divImg = document.createElement('div');
        divImg.classList.add('cardImg');
        divImg.style.backgroundImage = `url(${el.image.original})`;
        const h1 = document.createElement('h1');
        h1.classList.add('cardName');
        h1.textContent = `S${el.season}E${el.number} ${el.name}`;
        const details = document.createElement('p');
        details.classList.add('cardDetails');
        details.innerHTML = `Plot Summary: <br>${el.summary}`;
        const h2 = document.createElement('h2');
        h2.classList.add('cardRuntime');
        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;

        const starContainer = document.createElement('div');
        starContainer.classList.add('starContainer');

        const starRate = document.createElement('span');
        starRate.classList.add('material-icons-round');
        starRate.classList.add('icons');
        starRate.classList.add('starRate');
        starRate.textContent = 'star_rate';

        const starCount = document.createElement('span');
        starCount.classList.add('starCount');
        starCount.setAttribute('id', el.id);
        starCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('icons');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', el.id);

        // Like
        starBorder.addEventListener('click', () => {
          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.show.id);
          starBorder.classList.toggle('liked');
          starCount.setAttribute('disabled', true);
          setTimeout(updateLikes, 100);
        });

        const cBtn = document.createElement('button');
        cBtn.classList.add('commentBtn');
        cBtn.textContent = 'Comments';
        starContainer.append(starRate, starCount, starBorder);
        div.append(divImg, starContainer, h1, h2, details, cBtn);
        cards.append(div);
        elementCount += 1;
        countResults.textContent = `Search Results (${elementCount})`;
      });
    });
};
createElement('https://api.tvmaze.com/shows');

const createElementForShows = async (requestURL) => {
  cards.innerHTML = '';
  await (0,_modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(requestURL)
    .then((data) => {
      let elementCount = 0;
      data.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('cardItem');
        const divImg = document.createElement('div');
        divImg.classList.add('cardImg');
        divImg.style.backgroundImage = `url(${el.image.original})`;
        const h1 = document.createElement('h1');
        h1.classList.add('cardName');
        h1.textContent = el.name;

        const starContainer = document.createElement('div');
        starContainer.classList.add('starContainer');

        const starRate = document.createElement('span');
        starRate.classList.add('material-icons-round');
        starRate.classList.add('icons');
        starRate.classList.add('starRate');
        starRate.textContent = 'star_rate';

        const starCount = document.createElement('span');
        starCount.classList.add('starCount');
        starCount.setAttribute('id', el.id);
        starCount.textContent = '0';

        const starBorder = document.createElement('span');
        starBorder.classList.add('material-icons-round');
        starBorder.classList.add('icons');
        starBorder.classList.add('starBorder');
        starBorder.textContent = 'star_border';
        starBorder.setAttribute('id', el.id);

        // Like
        starBorder.addEventListener('click', () => {
          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.id);
          starBorder.classList.toggle('liked');
          starCount.setAttribute('disabled', true);
          setTimeout(updateLikes, 1000);
        });

        const cBtn = document.createElement('button');
        cBtn.classList.add('commentBtn');
        cBtn.setAttribute('id', `b${el.id}`);
        cBtn.textContent = 'Comments';
        starContainer.append(starRate, starCount, starBorder);
        div.append(divImg, starContainer, h1, cBtn);
        cards.append(div);
        elementCount += 1;
        countResults.textContent = `Number of Elements: ${elementCount}`;

        cBtn.addEventListener('click', () => {
          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__["default"])(el.id);
        });
      });
    });
};

window.onload = () => {
  const defaultURL = 'https://api.tvmaze.com/shows';
  createElementForShows(defaultURL);
  setTimeout(updateLikes, 100);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssT0FBTyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsY0FBYyxlQUFlLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sY0FBYyxlQUFlLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdB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QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlFQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGFBQWE7QUFDbkUsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlFQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBLFVBQVUsNkRBQUs7QUFDZixTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2V4dHJlbmFsQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN2VtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDJlMjc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5oZWFkZXIgaDEsXFxuaGVhZGVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxLjVyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDk1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5wb3B1cC1jb250ZW50IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4ucG9wdXAtdGl0bGUge1xcbiAgY29sb3I6ICNmMmE0MTM7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDA7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICB3aWR0aDogMS44cmVtO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ucG9wdXAtcmF0aW5nLWRpdiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wb3B1cC1zdGFyIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ucG9wdXAtcHVudCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucG9wdXAtY2F0ZWdvcnkge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBvcHVwLWNhdC1kZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNhNjhjNmQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ucG9wdXAtbGluZSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTY4YzZkO1xcbn1cXG5cXG4ucG9wdXAtc3VidGlsdGUge1xcbiAgY29sb3I6ICNmMmE0MTM7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudC1saXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uY29tbWVudC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2OGM2ZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnVzZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VyLWNvbW1lbnQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiByZXZpZXcgZm9ybSAqL1xcbi5wb3B1cC1mb3JtIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiNwb3B1cC1zdWJ0aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5wb3B1cC1mb3JtLW5hbWUge1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3B1cC1mb3JtLW1zZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvcHVwLXN1Ym1pdCB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyYTQxMztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbi5jYXJkcyB7XFxuICBtYXJnaW4tdG9wOiA2cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgei1pbmRleDogMTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmNhcmRzIC5jYXJkSXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTkyNTMzO1xcbiAgd2lkdGg6IDMxMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggIzU5MjUzMztcXG59XFxuLmNhcmRzIC5jYXJkSXRlbSAuY2FyZEltZyB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjNTkyNTMzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5jYXJkSW1nOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IGJsYWNrIGluc2V0O1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5jYXJkTmFtZSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJkcyAuY2FyZEl0ZW0gLmNhcmROYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjYTY4YzZkO1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5zdGFyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5jYXJkcyAuY2FyZEl0ZW0gLnN0YXJSYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICBjb2xvcjogI2YyYTQxMztcXG59XFxuLmNhcmRzIC5jYXJkSXRlbSAuc3RhckNvdW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5zdGFyQm9yZGVyIHtcXG4gIGNvbG9yOiAjYTY3NDE3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5zdGFyQm9yZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmE0MTM7XFxufVxcbi5jYXJkcyAuY2FyZEl0ZW0gLmxpa2VkIHtcXG4gIGNvbG9yOiAjZjJhNDEzO1xcbn1cXG4uY2FyZHMgLmNhcmRJdGVtIC5jb21tZW50QnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBjb2xvcjogIzU5MjUzMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5jYXJkcyAuY2FyZEl0ZW0gLmNvbW1lbnRCdG46aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwMmUyNztcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbmZvb3RlciBhIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcbiAgaGVhZGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcbiAgaGVhZGVyIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuICBoZWFkZXIgaDM6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG4gIC5jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY2FyZHMgLmNhcmRJdGVtIC5jYXJkTmFtZSB7XFxuICAgIGhlaWdodDogNzVweDtcXG4gIH1cXG4gIC5jYXJkcyAuY2FyZEl0ZW0gLnN0YXJDb3VudCB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFkRjs7QUFpQkE7RUFDRSx1QkFBQTtBQWRGOztBQWlCQTtFQUNFLHVCQUFBO0VBQ0Es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O0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXpCTjtBQTRCSTtFQUNFLGNBaFdJO0VBaVdKLGVBQUE7RUFDQSxrQkFBQTtBQTFCTjtBQTRCTTtFQUNFLHlCQXRXRTtBQTRVVjtBQThCSTtFQUNFLGNBM1dJO0FBK1VWO0FBK0JJO0VBcFhGLGlCQXFYMEI7RUFwWDFCLGtCQW9YMEI7RUFFdEIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FyWEk7RUFzWEosdUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBN0JOO0FBK0JNO0VBQ0UsVUFBQTtBQTdCUjs7QUFtQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBdllRO0VBd1lSLGFBQUE7QUFoQ0Y7QUFrQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFoQ0o7O0FBcUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VBbENGO0VBb0NFO0lBQ0UsaUJBQUE7RUFsQ0o7RUFxQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBbkNKO0VBc0NFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQXBDSjtFQXVDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFyQ0o7RUF1Q0k7SUFDRSwwQkFBQTtFQXJDTjtFQTBDQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtFQXhDRjtFQTJDSTtJQUNFLFlBQUE7RUF6Q047RUE0Q0k7SUFDRSxVQUFBO0VBMUNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcXHJcXG5cXHJcXG4vLyBNaXgtaW5zXFxyXFxuQG1peGluIG1hcmdpbi1zaWRlcygkc2l6ZSkge1xcclxcbiAgbWFyZ2luLWxlZnQ6ICRzaXplO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAkc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gY29sb3IgcGVsbGV0ZVxcclxcbiRjb2xvci0xOiAjNTkyNTMzO1xcclxcbiRjb2xvci0yOiAjZjJhNDEzO1xcclxcbiRjb2xvci0zOiAjYTY3NDE3O1xcclxcbiRjb2xvci00OiAjYTY4YzZkO1xcclxcbiRjb2xvci01OiAjNDAyZTI3O1xcclxcblxcclxcbi8vIEdsb2JhbFxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC43ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5pY29ucyB7XFxyXFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgaDEsXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxLjVyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDk1JTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtdGl0bGUge1xcclxcbiAgY29sb3I6ICRjb2xvci0yO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcclxcbiAgd2lkdGg6IDEuOHJlbTtcXHJcXG4gIGhlaWdodDogMS44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXJhdGluZy1kaXYge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc3RhciB7XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXB1bnQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXNjcmlwdGlvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNhdGVnb3J5IHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jYXQtZGVzIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAkY29sb3ItNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1saW5lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci00O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc3VidGlsdGUge1xcclxcbiAgY29sb3I6ICRjb2xvci0yO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtbGlzdCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci00O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIHJldmlldyBmb3JtICovXFxyXFxuXFxyXFxuLnBvcHVwLWZvcm0ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLXN1YnRpdGxlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZvcm0tbmFtZSB7XFxyXFxuICB3aWR0aDogMTRyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZvcm0tbXNnIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc3VibWl0IHtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi8vIENhcmRzIFNlY3Rpb25cXHJcXG4uY2FyZHMge1xcclxcbiAgbWFyZ2luLXRvcDogNnJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtYXJnaW4tc2lkZXMoYXV0byk7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcclxcbiAgLmNhcmRJdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMTtcXHJcXG4gICAgd2lkdGg6IDMxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggJGNvbG9yLTE7XFxyXFxuXFxyXFxuICAgIC5jYXJkSW1nIHtcXHJcXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAkY29sb3ItMTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IGJsYWNrIGluc2V0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZE5hbWUge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yLTQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdGFyQ29udGFpbmVyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN0YXJSYXRlIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN0YXJDb3VudCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3RhckJvcmRlciB7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci0zO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpa2VkIHtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbW1lbnRCdG4ge1xcclxcbiAgICAgIEBpbmNsdWRlIG1hcmdpbi1zaWRlcyhhdXRvKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItMTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItNTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gRGVza3RvcCBWZXJzaW9uXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLmNhcmRJdGVtIHtcXHJcXG4gICAgICAuY2FyZE5hbWUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc3RhckNvdW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuY29uc3QgYXBwSUQgPSAnNjlPWTZFNzN5amF2bDRlUjN0ckgnO1xyXG5cclxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaXRlbUlEKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHthcHBJRH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JRCB9KSxcclxuICB9KTtcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBwb3N0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHthcHBJRH0vbGlrZXNgKTtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gbGlrZXM7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChfaWQsIF9uYW1lLCBfY29tbWVudCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7YXBwSUR9L2NvbW1lbnRzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBfaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBfbmFtZSxcclxuICAgICAgY29tbWVudDogX2NvbW1lbnQsXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBwb3N0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoX2lkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHthcHBJRH0vY29tbWVudHM/aXRlbV9pZD0ke19pZH1gKTtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gY29tbWVudHM7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHBvc3RMaWtlLFxyXG4gIGdldExpa2VzLFxyXG4gIHBvc3RDb21tZW50LFxyXG4gIGdldENvbW1lbnRzLFxyXG59OyIsImltcG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9IGZyb20gJy4vaW52b2x2ZW1lbnQuanMnO1xyXG5cclxubGV0IG51bUNvbW1lbnRzID0gMDtcclxuY29uc3QgcG9wdXAgPSAoaWQpID0+IHtcclxuICBsZXQgaSA9IDA7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHB1bnR1YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByZXZoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb21tZW50VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IHJldmlld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgZm9ybWgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBuYW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBtc2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGNvbnN0IGJ0bklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwJztcclxuICBjb250ZW50LmNsYXNzTmFtZSA9ICdwb3B1cC1jb250ZW50JztcclxuICB0aXRsZS5jbGFzc05hbWUgPSAncG9wdXAtdGl0bGUnO1xyXG4gIHJhdGluZy5jbGFzc05hbWUgPSAncG9wdXAtcmF0aW5nLWRpdic7XHJcbiAgcHVudHVhdGlvbi5jbGFzc05hbWUgPSAncG9wdXAtcHVudCc7XHJcbiAgaW1hZ2UuY2xhc3NOYW1lID0gJ3BvcHVwLWltZyc7XHJcbiAgY2F0ZWdvcnkuY2xhc3NOYW1lID0gJ3BvcHVwLWNhdGVnb3J5JztcclxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAncG9wdXAtZGVzY3JpcHRpb24nO1xyXG4gIGxpbmUuY2xhc3NOYW1lID0gJ3BvcHVwLWxpbmUnO1xyXG4gIGxpbmUyLmNsYXNzTmFtZSA9ICdwb3B1cC1saW5lJztcclxuICByZXZoMi5jbGFzc05hbWUgPSAncG9wdXAtc3VidGlsdGUnO1xyXG4gIGNvbW1lbnRVbC5jbGFzc05hbWUgPSAncG9wdXAtY29tbWVudC1saXN0JztcclxuICByZXZpZXdGb3JtLmNsYXNzTmFtZSA9ICdwb3B1cC1mb3JtJztcclxuICBmb3JtaDIuY2xhc3NOYW1lID0gJ3BvcHVwLXN1YnRpbHRlJztcclxuICBuYW1lQm94LmNsYXNzTmFtZSA9ICdwb3B1cC1mb3JtLW5hbWUnO1xyXG4gIG1zZ0JveC5jbGFzc05hbWUgPSAncG9wdXAtZm9ybS1tc2cnO1xyXG4gIGJ0bklucHV0LmNsYXNzTmFtZSA9ICdwb3B1cC1zdWJtaXQnO1xyXG4gIGNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZS1wb3B1cCc7XHJcblxyXG4gIHB1bnR1YXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdwdW50Jyk7XHJcbiAgZm9ybWgyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wdXAtc3VidGl0bGUnKTtcclxuICBuYW1lQm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XHJcbiAgbmFtZUJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05hbWUnKTtcclxuICBuYW1lQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmFtZUJveC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xyXG4gIG1zZ0JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xyXG4gIG1zZ0JveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0NvbW1lbnRzJyk7XHJcbiAgbXNnQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbXNnQm94LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzUwMCcpO1xyXG4gIGJ0bklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICBwb3B1cC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHJhdGluZyk7XHJcbiAgcmF0aW5nLmFwcGVuZENoaWxkKHB1bnR1YXRpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChyZXZoMik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb21tZW50VWwpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZTIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3Rm9ybSk7XHJcbiAgcmV2aWV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtaDIpO1xyXG4gIHJldmlld0Zvcm0uYXBwZW5kQ2hpbGQobmFtZUJveCk7XHJcbiAgcmV2aWV3Rm9ybS5hcHBlbmRDaGlsZChtc2dCb3gpO1xyXG4gIHJldmlld0Zvcm0uYXBwZW5kQ2hpbGQoYnRuSW5wdXQpO1xyXG5cclxuICBjb25zdCBwb3B1cERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lVXJsID0gYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goZ2FtZVVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtdGl0bGUnKS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1wdW50JykudGV4dENvbnRlbnQgPSBg4q2QICAke2RhdGEucmF0aW5nLmF2ZXJhZ2V9YDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1pbWcnKS5zcmMgPSBkYXRhLmltYWdlLm9yaWdpbmFsO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5zdW1tYXJ5O1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwLXN1YnRpdGxlJykudGV4dENvbnRlbnQgPSAnQWRkIHJldmlldyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtc3VibWl0JykudGV4dENvbnRlbnQgPSAnc3VibWl0JztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpLnRleHRDb250ZW50ID0gJ1gnO1xyXG5cclxuICAgIGRhdGEuZ2VucmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgY29uc3QgZ2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGdlbnJlLmNsYXNzTmFtZSA9ICdwb3B1cC1jYXQtZGVzJztcclxuICAgICAgZ2VucmUuc2V0QXR0cmlidXRlKCdpZCcsIGBwJHtpfWApO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2F0ZWdvcnknKS5hcHBlbmRDaGlsZChnZW5yZSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwJHtpfWApLnRleHRDb250ZW50ID0gZTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBwb3B1cERhdGEoKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQ29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGxldCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcclxuICAgIGNvbW1lbnRzID0gQXJyYXkuaXNBcnJheShjb21tZW50cykgPyBjb21tZW50cyA6IFtdO1xyXG4gICAgaWYgKGNvbW1lbnRzKSB7XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICBjb21tZW50VWwuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgIDxsaSBjbGFzcz1cImNvbW1lbnQtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJ1c2VyXCI+JHtjb21tZW50LnVzZXJuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ1c2VyLWNvbW1lbnRcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XHJcbiAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBudW1Db21tZW50cyA9IGNvbW1lbnRzLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXN1YnRpbHRlJykudGV4dENvbnRlbnQgPSBgUmV2aWV3cyAoJHtudW1Db21tZW50c30pYDtcclxuICAgIH1cclxuICB9O1xyXG4gIHVwZGF0ZUNvbW1lbnRzKGlkKTtcclxuXHJcbiAgcmV2aWV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcG9zdENvbW1lbnQoaWQsIG5hbWVCb3gudmFsdWUsIG1zZ0JveC52YWx1ZSk7XHJcbiAgICBjb21tZW50VWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdXBkYXRlQ29tbWVudHMoaWQpO1xyXG4gICAgfSwgJzUwMCcpO1xyXG4gICAgbmFtZUJveC52YWx1ZSA9ICcnO1xyXG4gICAgbXNnQm94LnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvcHVwLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XHJcbiAgICAgIHBvcHVwLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wdXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2V4dHJlbmFsQVBJLmpzJztcclxuaW1wb3J0IHsgZ2V0TGlrZXMsIHBvc3RMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2ludm9sdmVtZW50LmpzJztcclxuaW1wb3J0IHBvcHVwIGZyb20gJy4vbW9kdWxlcy9wb3B1cC5qcyc7XHJcblxyXG5jb25zdCBjb3VudFJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpO1xyXG5cclxuLy8gVXBkYXRlIExpa2VzXHJcbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhckNvdW50JykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZVtpXS5pdGVtX2lkID09PSBOdW1iZXIoYnV0dG9uLmlkKSkge1xyXG4gICAgICAgIGJ1dHRvbi5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSByZXNwb25zZVtpXS5saWtlcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gRGlzcGxheSBDYXJkc1xyXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xyXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gYXN5bmMgKHJlcXVlc3RVUkwpID0+IHtcclxuICBjYXJkcy5pbm5lckhUTUwgPSAnJztcclxuICBhd2FpdCBnZXREYXRhKHJlcXVlc3RVUkwpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgZWxlbWVudENvdW50ID0gMDtcclxuICAgICAgY29uc3QgZGF0YUFycmF5ID0gZGF0YS5lbWJlZGRlZC5lcGlzb2RlcztcclxuICAgICAgZGF0YUFycmF5LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRJdGVtJyk7XHJcbiAgICAgICAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2SW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmRJbWcnKTtcclxuICAgICAgICBkaXZJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsLmltYWdlLm9yaWdpbmFsfSlgO1xyXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCdjYXJkTmFtZScpO1xyXG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gYFMke2VsLnNlYXNvbn1FJHtlbC5udW1iZXJ9ICR7ZWwubmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjYXJkRGV0YWlscycpO1xyXG4gICAgICAgIGRldGFpbHMuaW5uZXJIVE1MID0gYFBsb3QgU3VtbWFyeTogPGJyPiR7ZWwuc3VtbWFyeX1gO1xyXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKCdjYXJkUnVudGltZScpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gYFJ1bnRpbWU6ICR7ZWwucnVudGltZX0gbWlucyBSYXRpbmc6ICR7ZWwucmF0aW5nLmF2ZXJhZ2V9YDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0YXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhckNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFyUmF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzdGFyUmF0ZS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1yb3VuZCcpO1xyXG4gICAgICAgIHN0YXJSYXRlLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XHJcbiAgICAgICAgc3RhclJhdGUuY2xhc3NMaXN0LmFkZCgnc3RhclJhdGUnKTtcclxuICAgICAgICBzdGFyUmF0ZS50ZXh0Q29udGVudCA9ICdzdGFyX3JhdGUnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFyQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3RhckNvdW50LmNsYXNzTGlzdC5hZGQoJ3N0YXJDb3VudCcpO1xyXG4gICAgICAgIHN0YXJDb3VudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWwuaWQpO1xyXG4gICAgICAgIHN0YXJDb3VudC50ZXh0Q29udGVudCA9ICcwJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzdGFyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLXJvdW5kJyk7XHJcbiAgICAgICAgc3RhckJvcmRlci5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xyXG4gICAgICAgIHN0YXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnc3RhckJvcmRlcicpO1xyXG4gICAgICAgIHN0YXJCb3JkZXIudGV4dENvbnRlbnQgPSAnc3Rhcl9ib3JkZXInO1xyXG4gICAgICAgIHN0YXJCb3JkZXIuc2V0QXR0cmlidXRlKCdpZCcsIGVsLmlkKTtcclxuXHJcbiAgICAgICAgLy8gTGlrZVxyXG4gICAgICAgIHN0YXJCb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBwb3N0TGlrZShlbC5zaG93LmlkKTtcclxuICAgICAgICAgIHN0YXJCb3JkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbGlrZWQnKTtcclxuICAgICAgICAgIHN0YXJDb3VudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZUxpa2VzLCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY0J0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50QnRuJyk7XHJcbiAgICAgICAgY0J0bi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XHJcbiAgICAgICAgc3RhckNvbnRhaW5lci5hcHBlbmQoc3RhclJhdGUsIHN0YXJDb3VudCwgc3RhckJvcmRlcik7XHJcbiAgICAgICAgZGl2LmFwcGVuZChkaXZJbWcsIHN0YXJDb250YWluZXIsIGgxLCBoMiwgZGV0YWlscywgY0J0bik7XHJcbiAgICAgICAgY2FyZHMuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZWxlbWVudENvdW50ICs9IDE7XHJcbiAgICAgICAgY291bnRSZXN1bHRzLnRleHRDb250ZW50ID0gYFNlYXJjaCBSZXN1bHRzICgke2VsZW1lbnRDb3VudH0pYDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuY3JlYXRlRWxlbWVudCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudEZvclNob3dzID0gYXN5bmMgKHJlcXVlc3RVUkwpID0+IHtcclxuICBjYXJkcy5pbm5lckhUTUwgPSAnJztcclxuICBhd2FpdCBnZXREYXRhKHJlcXVlc3RVUkwpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgZWxlbWVudENvdW50ID0gMDtcclxuICAgICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkSXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkltZy5jbGFzc0xpc3QuYWRkKCdjYXJkSW1nJyk7XHJcbiAgICAgICAgZGl2SW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlbC5pbWFnZS5vcmlnaW5hbH0pYDtcclxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaDEuY2xhc3NMaXN0LmFkZCgnY2FyZE5hbWUnKTtcclxuICAgICAgICBoMS50ZXh0Q29udGVudCA9IGVsLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXJDb250YWluZXInKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhclJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3RhclJhdGUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtcm91bmQnKTtcclxuICAgICAgICBzdGFyUmF0ZS5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xyXG4gICAgICAgIHN0YXJSYXRlLmNsYXNzTGlzdC5hZGQoJ3N0YXJSYXRlJyk7XHJcbiAgICAgICAgc3RhclJhdGUudGV4dENvbnRlbnQgPSAnc3Rhcl9yYXRlJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhckNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHN0YXJDb3VudC5jbGFzc0xpc3QuYWRkKCdzdGFyQ291bnQnKTtcclxuICAgICAgICBzdGFyQ291bnQuc2V0QXR0cmlidXRlKCdpZCcsIGVsLmlkKTtcclxuICAgICAgICBzdGFyQ291bnQudGV4dENvbnRlbnQgPSAnMCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3RhckJvcmRlci5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1yb3VuZCcpO1xyXG4gICAgICAgIHN0YXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcclxuICAgICAgICBzdGFyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ3N0YXJCb3JkZXInKTtcclxuICAgICAgICBzdGFyQm9yZGVyLnRleHRDb250ZW50ID0gJ3N0YXJfYm9yZGVyJztcclxuICAgICAgICBzdGFyQm9yZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBlbC5pZCk7XHJcblxyXG4gICAgICAgIC8vIExpa2VcclxuICAgICAgICBzdGFyQm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgcG9zdExpa2UoZWwuaWQpO1xyXG4gICAgICAgICAgc3RhckJvcmRlci5jbGFzc0xpc3QudG9nZ2xlKCdsaWtlZCcpO1xyXG4gICAgICAgICAgc3RhckNvdW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlTGlrZXMsIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY0J0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50QnRuJyk7XHJcbiAgICAgICAgY0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGIke2VsLmlkfWApO1xyXG4gICAgICAgIGNCdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xyXG4gICAgICAgIHN0YXJDb250YWluZXIuYXBwZW5kKHN0YXJSYXRlLCBzdGFyQ291bnQsIHN0YXJCb3JkZXIpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoZGl2SW1nLCBzdGFyQ29udGFpbmVyLCBoMSwgY0J0bik7XHJcbiAgICAgICAgY2FyZHMuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZWxlbWVudENvdW50ICs9IDE7XHJcbiAgICAgICAgY291bnRSZXN1bHRzLnRleHRDb250ZW50ID0gYE51bWJlciBvZiBFbGVtZW50czogJHtlbGVtZW50Q291bnR9YDtcclxuXHJcbiAgICAgICAgY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHBvcHVwKGVsLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFVSTCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcclxuICBjcmVhdGVFbGVtZW50Rm9yU2hvd3MoZGVmYXVsdFVSTCk7XHJcbiAgc2V0VGltZW91dCh1cGRhdGVMaWtlcywgMTAwKTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=