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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-components/meeting-slots */ \"./src/ui-components/meeting-slots.js\");\n/* harmony import */ var _ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timeSlotModule */ \"./src/modules/timeSlotModule.js\");\n\r\n\r\n\r\nlet duration = 15;\r\nlet min_nr_pizza_experts = 5;\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const mainDiv = document.querySelector('.main');\r\n    displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)\r\n\r\n    //Event handlers\r\n    document.querySelector(\"button#bt_search\").addEventListener(\"click\", function () {\r\n        min_nr_pizza_experts = parseInt(document.querySelector(\"#min_number_experts\").value);\r\n        duration = parseInt(document.querySelector(\"#duration\").value);\r\n\r\n        displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)\r\n\r\n    });\r\n})\r\n\r\n\r\nconst displayAvailableTimeSlots = (duration, min_number_experts, parentDomElement) => {\r\n\r\n    parentDomElement.innerHTML = ''\r\n    const docFrag = document.createDocumentFragment()\r\n\r\n    _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__[\"setMeetingDuration\"](duration)\r\n    _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__[\"getAvailableTimeSlots\"](min_number_experts)\r\n        .then(results => {\r\n\r\n            results.map(pizza_expert => {\r\n                const meetingSlotComponent = document.createElement('meeting-slot')\r\n                meetingSlotComponent.timeSlot = pizza_expert\r\n\r\n                docFrag.appendChild(meetingSlotComponent)\r\n\r\n            })\r\n            parentDomElement.appendChild(docFrag)\r\n        })\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/api_url.js":
/*!********************************!*\
  !*** ./src/modules/api_url.js ***!
  \********************************/
/*! exports provided: remoteServerUrl, localDataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remoteServerUrl\", function() { return remoteServerUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localDataUrl\", function() { return localDataUrl; });\n\r\n//Using proxy server to avoid Cross site scripting problem. Our API is not allowing cross site requests\r\nconst proxyServer = 'https://cors-anywhere.herokuapp.com/';\r\n\r\nconst remoteServerUrl = `${proxyServer}http://pizzacabininc.azurewebsites.net/PizzaCabinInc.svc/schedule/`;\r\n\r\n//When using our local data\r\nconst localDataUrl='./../src/mock-data/pizza_experts.json?';\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/api_url.js?");

/***/ }),

/***/ "./src/modules/timeSlotModule.js":
/*!***************************************!*\
  !*** ./src/modules/timeSlotModule.js ***!
  \***************************************/
/*! exports provided: splitTaskInSlots, getAvailableTimeSlots, setMeetingDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"splitTaskInSlots\", function() { return splitTaskInSlots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAvailableTimeSlots\", function() { return getAvailableTimeSlots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMeetingDuration\", function() { return setMeetingDuration; });\n/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_url */ \"./src/modules/api_url.js\");\n\r\nconst fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\")\r\nconst EXCLUDED_TASKS = [\"Lunch\", \"Short break\"];\r\nconst POSSIBLE__TIMES = [0, 15, 30, 45];\r\n\r\nconst apiUrl = _api_url__WEBPACK_IMPORTED_MODULE_0__[\"remoteServerUrl\"];\r\nlet meetingDuration = 15;\r\nlet schedules = [];\r\n\r\nconst getSchedules = async (date) => {\r\n\r\n    if (schedules.length > 0) return schedules;\r\n\r\n    const res = await fetch(`${apiUrl}${date}`);\r\n    const output = await res.json();\r\n    schedules = output.ScheduleResult.Schedules;\r\n\r\n    return schedules;\r\n}\r\n\r\nconst generateTimeSlots = (schedules, meetingDuration) => {\r\n\r\n    const results = schedules.reduce((timeSlots, pizzaExpert) => {\r\n        const { Name, PersonId } = pizzaExpert;\r\n\r\n        if (!pizzaExpert.IsFullDayAbsence) {\r\n\r\n            pizzaExpert.Projection.forEach(task => {\r\n                //only get tasks where pizza expert is available\r\n                if (!isPizzaExpertOnABreak(task.Description)) {\r\n                    //we calculate all possible time slots based meeting duration within this task.    \r\n                    const timeSlotsOfCurrentTask = splitTaskInSlots(task.Start, task.minutes, meetingDuration)\r\n                    timeSlotsOfCurrentTask.forEach(slot => {\r\n                        if (!timeSlots[slot]) {\r\n                            timeSlots[slot] = { time: slot, team: [] }\r\n                        }\r\n                        timeSlots[slot].team.push({ Name: Name, PersonId: PersonId });\r\n                    })\r\n                }\r\n            })\r\n        }\r\n        return timeSlots\r\n    }, [])\r\n\r\n    return Object.values(results)\r\n}\r\n\r\n//@export only for unit testing\r\nconst splitTaskInSlots = (taskStart, taskDuration, meetingDuration) => {\r\n    let timeSlots = [];\r\n    const startTime = new Date(extractTimeStamp(taskStart));\r\n    const slot = new Date(startTime.getTime());\r\n\r\n    //next possible point in time this worker can participate in a meeting\r\n    const nextPossibleSlot = getNextPossibleTimeSlot(slot.getMinutes(), meetingDuration);\r\n    slot.setMinutes(nextPossibleSlot);\r\n\r\n    //we are adding this employee to as many slots as this activity allows\r\n    for (let i = 1; i <= (taskDuration / meetingDuration); i++) {\r\n        if (isValidStartTime(slot.getMinutes())) {\r\n            timeSlots.push(new Date(slot.getTime()));\r\n        }\r\n        //we reset time for next slot. \r\n        slot.setMinutes(slot.getMinutes() + meetingDuration);\r\n    }\r\n    return timeSlots;\r\n}\r\n\r\nconst getAvailableTimeSlots = (nr_experts, date = '2015-12-14') => {\r\n\r\n    return getSchedules(date)\r\n        .then(schedules => {\r\n            const timeSlots = generateTimeSlots(schedules, meetingDuration);\r\n\r\n            return timeSlots.filter(el => el.team.length >= nr_experts);\r\n        })\r\n        .catch(err => console.error(err))\r\n}\r\n\r\nconst setMeetingDuration = (value) => {\r\n    meetingDuration = value;\r\n}\r\n\r\n\r\n\r\n//helper functions\r\nconst getNextPossibleTimeSlot = (minutes, meetingDuration) => closestMultiple(minutes, meetingDuration);\r\nconst isPizzaExpertOnABreak = (task) => EXCLUDED_TASKS.includes(task);\r\nconst isValidStartTime = (time) => POSSIBLE__TIMES.includes(time);\r\n\r\nconst extractTimeStamp = (str) => parseInt(RegExp(/(\\d+)/).exec(str)[0]);\r\nconst closestMultiple = (n, x) => n % x ? n + (x - n % x) : n;\n\n//# sourceURL=webpack:///./src/modules/timeSlotModule.js?");

/***/ }),

/***/ "./src/ui-components/meeting-slots.js":
/*!********************************************!*\
  !*** ./src/ui-components/meeting-slots.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MeetingSlot extends HTMLElement {\r\n\r\n    constructor() {\r\n        super()\r\n        this.addEvents()\r\n\r\n    }\r\n    set timeSlot(value) {\r\n        this._timeSlot = value\r\n        this.render()\r\n    }\r\n    get timeSlot() {\r\n        return this._timeSlot\r\n    }\r\n\r\n    formatDate(date) {\r\n        const addZero = (i) => i < 10 ? \"0\" + i : i\r\n        return addZero(date.getHours()) + \":\" + addZero(date.getMinutes())\r\n    }\r\n    render() {\r\n        const div = document.createElement('div')\r\n\r\n        div.innerHTML = `\r\n            <div class='card'>\r\n                <div><b>${this.formatDate(this._timeSlot.time)} -  (${this._timeSlot.team.length}) </b></div>       \r\n                <div class='team show'>\r\n                    ${this._timeSlot.team.map(el => {\r\n            return `<div>${el.Name}</div>`\r\n        }).join('')}\r\n                </div>\r\n            </div>\r\n            `\r\n        this.appendChild(div)\r\n    }\r\n\r\n    addEvents() {\r\n        this.addEventListener('mouseenter', e => {\r\n            this.querySelector(\".team\").classList.toggle(\"show\")\r\n        });\r\n        this.addEventListener('mouseleave', e => {\r\n            this.querySelector(\".team\").classList.toggle(\"show\")\r\n        });\r\n    }\r\n}\r\n\r\ncustomElements.define('meeting-slot', MeetingSlot)\n\n//# sourceURL=webpack:///./src/ui-components/meeting-slots.js?");

/***/ })

/******/ });