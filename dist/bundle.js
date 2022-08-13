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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/extrenalAPI.js */ \"./src/modules/extrenalAPI.js\");\n/* harmony import */ var _modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvement.js */ \"./src/modules/involvement.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\r\n\r\n\r\n\r\n\r\nconst countResults = document.querySelector('h2');\r\n\r\n// Update Likes\r\nconst updateLikes = async () => {\r\n  const response = await (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n  document.querySelectorAll('.starCount').forEach((button) => {\r\n    for (let i = 0; i < response.length; i += 1) {\r\n      if (response[i].item_id === Number(button.id)) {\r\n        button.lastChild.textContent = response[i].likes;\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n// Display Cards\r\nconst cards = document.querySelector('.cards');\r\nconst createElement = async (requestURL) => {\r\n  cards.innerHTML = '';\r\n  await (0,_modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\r\n    .then((data) => {\r\n      let elementCount = 0;\r\n      const dataArray = data.embedded.episodes;\r\n      dataArray.forEach((el) => {\r\n        const div = document.createElement('div');\r\n        div.classList.add('cardItem');\r\n        const divImg = document.createElement('div');\r\n        divImg.classList.add('cardImg');\r\n        divImg.style.backgroundImage = `url(${el.image.original})`;\r\n        const h1 = document.createElement('h1');\r\n        h1.classList.add('cardName');\r\n        h1.textContent = `S${el.season}E${el.number} ${el.name}`;\r\n        const details = document.createElement('p');\r\n        details.classList.add('cardDetails');\r\n        details.innerHTML = `Plot Summary: <br>${el.summary}`;\r\n        const h2 = document.createElement('h2');\r\n        h2.classList.add('cardRuntime');\r\n        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;\r\n\r\n        const starContainer = document.createElement('div');\r\n        starContainer.classList.add('starContainer');\r\n\r\n        const starRate = document.createElement('span');\r\n        starRate.classList.add('material-icons-round');\r\n        starRate.classList.add('icons');\r\n        starRate.classList.add('starRate');\r\n        starRate.textContent = 'star_rate';\r\n\r\n        const starCount = document.createElement('span');\r\n        starCount.classList.add('starCount');\r\n        starCount.setAttribute('id', el.id);\r\n        starCount.textContent = '0';\r\n\r\n        const starBorder = document.createElement('span');\r\n        starBorder.classList.add('material-icons-round');\r\n        starBorder.classList.add('icons');\r\n        starBorder.classList.add('starBorder');\r\n        starBorder.textContent = 'star_border';\r\n        starBorder.setAttribute('id', el.id);\r\n\r\n        // Like\r\n        starBorder.addEventListener('click', () => {\r\n          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.show.id);\r\n          starBorder.classList.toggle('liked');\r\n          starCount.setAttribute('disabled', true);\r\n          setTimeout(updateLikes, 100);\r\n        });\r\n\r\n        const cBtn = document.createElement('button');\r\n        cBtn.classList.add('commentBtn');\r\n        cBtn.textContent = 'Comments';\r\n        starContainer.append(starRate, starCount, starBorder);\r\n        div.append(divImg, starContainer, h1, h2, details, cBtn);\r\n        cards.append(div);\r\n        elementCount += 1;\r\n        countResults.textContent = `Search Results (${elementCount})`;\r\n      });\r\n    });\r\n};\r\ncreateElement('https://api.tvmaze.com/shows');\r\n\r\nconst createElementForShows = async (requestURL) => {\r\n  cards.innerHTML = '';\r\n  await (0,_modules_extrenalAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\r\n    .then((data) => {\r\n      let elementCount = 0;\r\n      data.forEach((el) => {\r\n        const div = document.createElement('div');\r\n        div.classList.add('cardItem');\r\n        const divImg = document.createElement('div');\r\n        divImg.classList.add('cardImg');\r\n        divImg.style.backgroundImage = `url(${el.image.original})`;\r\n        const h1 = document.createElement('h1');\r\n        h1.classList.add('cardName');\r\n        h1.textContent = el.name;\r\n\r\n        const starContainer = document.createElement('div');\r\n        starContainer.classList.add('starContainer');\r\n\r\n        const starRate = document.createElement('span');\r\n        starRate.classList.add('material-icons-round');\r\n        starRate.classList.add('icons');\r\n        starRate.classList.add('starRate');\r\n        starRate.textContent = 'star_rate';\r\n\r\n        const starCount = document.createElement('span');\r\n        starCount.classList.add('starCount');\r\n        starCount.setAttribute('id', el.id);\r\n        starCount.textContent = '0';\r\n\r\n        const starBorder = document.createElement('span');\r\n        starBorder.classList.add('material-icons-round');\r\n        starBorder.classList.add('icons');\r\n        starBorder.classList.add('starBorder');\r\n        starBorder.textContent = 'star_border';\r\n        starBorder.setAttribute('id', el.id);\r\n\r\n        // Like\r\n        starBorder.addEventListener('click', () => {\r\n          (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.id);\r\n          starBorder.classList.toggle('liked');\r\n          starCount.setAttribute('disabled', true);\r\n          setTimeout(updateLikes, 1000);\r\n        });\r\n\r\n        const cBtn = document.createElement('button');\r\n        cBtn.classList.add('commentBtn');\r\n        cBtn.setAttribute('id', `b${el.id}`);\r\n        cBtn.textContent = 'Comments';\r\n        starContainer.append(starRate, starCount, starBorder);\r\n        div.append(divImg, starContainer, h1, cBtn);\r\n        cards.append(div);\r\n        elementCount += 1;\r\n        countResults.textContent = `Number of Elements: ${elementCount}`;\r\n\r\n        cBtn.addEventListener('click', () => {\r\n          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el.id);\r\n        });\r\n      });\r\n    });\r\n};\r\n\r\nwindow.onload = () => {\r\n  const defaultURL = 'https://api.tvmaze.com/shows';\r\n  createElementForShows(defaultURL);\r\n  setTimeout(updateLikes, 100);\r\n};\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/extrenalAPI.js":
/*!************************************!*\
  !*** ./src/modules/extrenalAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return data;\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://todolist/./src/modules/extrenalAPI.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst appID = '69OY6E73yjavl4eR3trH';\r\n\r\nconst postLike = async (itemID) => {\r\n  const response = await fetch(`${url}${appID}/likes`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: itemID }),\r\n  });\r\n  const post = await response.text();\r\n  return post;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${url}${appID}/likes`);\r\n  const likes = await response.json();\r\n  return likes;\r\n};\r\n\r\nconst postComment = async (_id, _name, _comment) => {\r\n  const response = await fetch(`${url}${appID}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: _id,\r\n      username: _name,\r\n      comment: _comment,\r\n    }),\r\n  });\r\n  const post = await response.text();\r\n  return post;\r\n};\r\n\r\nconst getComments = async (_id) => {\r\n  const response = await fetch(`${url}${appID}/comments?item_id=${_id}`);\r\n  const comments = await response.json();\r\n  return comments;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\r\n\r\nlet numComments = 0;\r\nconst popup = (id) => {\r\n  let i = 0;\r\n  const body = document.querySelector('body');\r\n  const popup = document.createElement('section');\r\n  const content = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  const rating = document.createElement('div');\r\n  const puntuation = document.createElement('h3');\r\n  const image = document.createElement('img');\r\n  const category = document.createElement('div');\r\n  const description = document.createElement('div');\r\n  const line = document.createElement('div');\r\n  const revh2 = document.createElement('h2');\r\n  const line2 = document.createElement('div');\r\n  const commentUl = document.createElement('ul');\r\n  const reviewForm = document.createElement('form');\r\n  const formh2 = document.createElement('h2');\r\n  const nameBox = document.createElement('input');\r\n  const msgBox = document.createElement('textarea');\r\n  const btnInput = document.createElement('button');\r\n  const close = document.createElement('button');\r\n\r\n  popup.className = 'popup';\r\n  content.className = 'popup-content';\r\n  title.className = 'popup-title';\r\n  rating.className = 'popup-rating-div';\r\n  puntuation.className = 'popup-punt';\r\n  image.className = 'popup-img';\r\n  category.className = 'popup-category';\r\n  description.className = 'popup-description';\r\n  line.className = 'popup-line';\r\n  line2.className = 'popup-line';\r\n  revh2.className = 'popup-subtilte';\r\n  commentUl.className = 'popup-comment-list';\r\n  reviewForm.className = 'popup-form';\r\n  formh2.className = 'popup-subtilte';\r\n  nameBox.className = 'popup-form-name';\r\n  msgBox.className = 'popup-form-msg';\r\n  btnInput.className = 'popup-submit';\r\n  close.className = 'close-popup';\r\n\r\n  puntuation.setAttribute('id', 'punt');\r\n  formh2.setAttribute('id', 'popup-subtitle');\r\n  nameBox.setAttribute('name', 'name');\r\n  nameBox.setAttribute('placeholder', 'Name');\r\n  nameBox.setAttribute('type', 'text');\r\n  nameBox.setAttribute('maxlength', '30');\r\n  msgBox.setAttribute('name', 'message');\r\n  msgBox.setAttribute('placeholder', 'Comments');\r\n  msgBox.setAttribute('type', 'text');\r\n  msgBox.setAttribute('maxlength', '500');\r\n  btnInput.setAttribute('type', 'submit');\r\n  body.appendChild(popup);\r\n  popup.appendChild(content);\r\n  content.appendChild(title);\r\n  content.appendChild(close);\r\n  content.appendChild(rating);\r\n  rating.appendChild(puntuation);\r\n  content.appendChild(image);\r\n  content.appendChild(category);\r\n  content.appendChild(description);\r\n  content.appendChild(line);\r\n  content.appendChild(revh2);\r\n  content.appendChild(commentUl);\r\n  content.appendChild(line2);\r\n  content.appendChild(reviewForm);\r\n  reviewForm.appendChild(formh2);\r\n  reviewForm.appendChild(nameBox);\r\n  reviewForm.appendChild(msgBox);\r\n  reviewForm.appendChild(btnInput);\r\n\r\n  const popupData = async () => {\r\n    const gameUrl = `https://api.tvmaze.com/shows/${id}`;\r\n    const result = await fetch(gameUrl);\r\n    const data = await result.json();\r\n\r\n    document.querySelector('.popup-title').textContent = data.name;\r\n    document.querySelector('.popup-punt').textContent = `⭐  ${data.rating.average}`;\r\n    document.querySelector('.popup-img').src = data.image.original;\r\n    document.querySelector('.popup-description').innerHTML = data.summary;\r\n    document.querySelector('#popup-subtitle').textContent = 'Add review';\r\n    document.querySelector('.popup-submit').textContent = 'submit';\r\n    document.querySelector('.close-popup').textContent = 'X';\r\n\r\n    data.genres.forEach((e) => {\r\n      const genre = document.createElement('p');\r\n      genre.className = 'popup-cat-des';\r\n      genre.setAttribute('id', `p${i}`);\r\n      document.querySelector('.popup-category').appendChild(genre);\r\n      document.getElementById(`p${i}`).textContent = e;\r\n      i += 1;\r\n    });\r\n  };\r\n  popupData();\r\n\r\n  const updateComments = async (id) => {\r\n    let comments = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\r\n    comments = Array.isArray(comments) ? comments : [];\r\n    if (comments) {\r\n      comments.forEach((comment) => {\r\n        commentUl.innerHTML += `\r\n          <li class=\"comment-item\">\r\n            <h4 class=\"user\">${comment.username}</h4>\r\n            <span class=\"date\">${comment.creation_date}</span>\r\n            <p class=\"user-comment\">${comment.comment}</p>\r\n          </li>`;\r\n      });\r\n      numComments = comments.length;\r\n      document.querySelector('.popup-subtilte').textContent = `Reviews (${numComments})`;\r\n    }\r\n  };\r\n  updateComments(id);\r\n\r\n  reviewForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(id, nameBox.value, msgBox.value);\r\n    commentUl.innerHTML = '';\r\n    setTimeout(() => {\r\n      updateComments(id);\r\n    }, '500');\r\n    nameBox.value = '';\r\n    msgBox.value = '';\r\n  });\r\n\r\n  close.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    popup.remove();\r\n  });\r\n  window.addEventListener('click', (e) => {\r\n    if (e.target === popup) {\r\n      popup.remove();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://todolist/./src/modules/popup.js?");

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