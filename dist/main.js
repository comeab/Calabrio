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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-components/meeting-slots */ \"./src/ui-components/meeting-slots.js\");\n/* harmony import */ var _ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_components_meeting_slots__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timeSlotModule */ \"./src/modules/timeSlotModule.js\");\n\r\n\r\n\r\nlet duration = 15;\r\nlet min_nr_pizza_experts = 1;\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const mainDiv = document.querySelector('.main');\r\n    displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)\r\n\r\n    //Event handlers\r\n    document.querySelector(\"button#bt_search\").addEventListener(\"click\", function () {\r\n        min_nr_pizza_experts = parseInt(document.querySelector(\"#min_number_experts\").value);\r\n        duration = parseInt(document.querySelector(\"#duration\").value);\r\n\r\n        displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)\r\n\r\n    });\r\n})\r\n\r\n\r\nconst displayAvailableTimeSlots = (duration, min_number_experts, parentDomElement) => {\r\n\r\n    parentDomElement.innerHTML = ''\r\n    const docFrag = document.createDocumentFragment()\r\n\r\n    _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__[\"setMeetingDuration\"](duration)\r\n    _modules_timeSlotModule__WEBPACK_IMPORTED_MODULE_1__[\"getAvailableTimeSlots\"](min_number_experts)\r\n        .then(results => {\r\n\r\n            results.map(pizza_expert => {\r\n                const meetingSlotComponent = document.createElement('meeting-slot')\r\n                meetingSlotComponent.timeSlot = pizza_expert\r\n\r\n                docFrag.appendChild(meetingSlotComponent)\r\n\r\n            })\r\n            parentDomElement.appendChild(docFrag)\r\n        })\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/api_url.js":
/*!********************************!*\
  !*** ./src/modules/api_url.js ***!
  \********************************/
/*! exports provided: remoteServerUrl, localDataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remoteServerUrl\", function() { return remoteServerUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localDataUrl\", function() { return localDataUrl; });\n\r\n//Using proxy server to avoid Cross site scripting problem. Our API is not allowing cross site requests\r\nconst proxyServer = 'https://cors-anywhere.herokuapp.com/';\r\n\r\nconst remoteServerUrl = `${proxyServer}http://pizzacabininc.azurewebsites.net/PizzaCabinInc.svc/schedule/`;\r\n\r\n//When using our local data\r\nconst localDataUrl='./../src/mock-data/pizza_experts.json?';\r\n\n\n//# sourceURL=webpack:///./src/modules/api_url.js?");

/***/ }),

/***/ "./src/modules/timeSlotModule.js":
/*!***************************************!*\
  !*** ./src/modules/timeSlotModule.js ***!
  \***************************************/
/*! exports provided: getAvailableTimeSlots, setMeetingDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAvailableTimeSlots\", function() { return getAvailableTimeSlots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMeetingDuration\", function() { return setMeetingDuration; });\n/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_url */ \"./src/modules/api_url.js\");\n\r\n\r\nconst EXCLUDED_ACTIVITIES = [\"Lunch\", \"Short break\"];\r\nconst POSSIBLE__TIMES = [0, 15, 30, 45];\r\n\r\nconst apiUrl=_api_url__WEBPACK_IMPORTED_MODULE_0__[\"remoteServerUrl\"];\r\nlet meeting_duration = 15;\r\nlet schedules = [];\r\n\r\nconst getSchedules = async (date) => {\r\n\r\n    if (schedules.length > 0) return schedules;\r\n\r\n    const res = await fetch(`${apiUrl}${date}`)\r\n    const output = await res.json()\r\n    schedules = output.ScheduleResult.Schedules\r\n\r\n    return schedules\r\n}\r\n\r\nconst processSchedules = (schedules) => {\r\n \r\n    const results = schedules.reduce((time_slot, pizza_expert) => {\r\n\r\n        if (!pizza_expert.IsFullDayAbsence) {\r\n            pizza_expert.Projection.forEach(p => {\r\n\r\n                if (!EXCLUDED_ACTIVITIES.includes(p.Description)) {\r\n\r\n                    const start_time = new Date(extractTimeStamp(p.Start))\r\n\r\n                    const _slot = new Date(start_time.getTime())\r\n                    const first_slot_time = getNextPossibleTimeSlot(_slot.getMinutes(), meeting_duration)\r\n                    _slot.setMinutes(first_slot_time)\r\n\r\n                    //we are adding this employee to as many slots as this activity allows\r\n                    for (let i = 1; i <= (p.minutes / meeting_duration); i++) {\r\n\r\n                        //extract only the information that we want exposed\r\n                        const {Name, PersonId}=pizza_expert\r\n\r\n                        if (POSSIBLE__TIMES.includes(_slot.getMinutes())) {\r\n                            if (time_slot[_slot]) {\r\n                                time_slot[_slot].team.push({Name:Name, PersonId:PersonId})\r\n                            }\r\n                            else {\r\n                                time_slot[_slot] = { time: new Date(_slot.getTime()), team: [{Name:Name, PersonId:PersonId}] }\r\n                            }\r\n                        }\r\n                        //we reset time for next slot. \r\n                        _slot.setMinutes(_slot.getMinutes() + meeting_duration)\r\n                    }\r\n                }\r\n            })\r\n        }\r\n        return time_slot\r\n    }, [])\r\n\r\n    return Object.values(results)\r\n\r\n}\r\n\r\n//helper functions\r\nconst extractTimeStamp = (str) => parseInt(RegExp(/(\\d+)/).exec(str)[0]);\r\nconst closestMultiple = (n, x) => n % x ? n + (x - n % x) : n;\r\nconst getNextPossibleTimeSlot = (minutes, meeting_duration) => closestMultiple(minutes, meeting_duration);\r\n\r\nconst getAvailableTimeSlots = (nr_experts, date = '2015-12-14') => {\r\n    return getSchedules(date)\r\n        .then(schedules => {\r\n\r\n            const time_slots = processSchedules(schedules)\r\n            return time_slots.filter(el => el.team.length >= nr_experts)\r\n        })\r\n        .catch(err => console.error(err));\r\n}\r\n\r\nconst setMeetingDuration = (value) => {\r\n    meeting_duration = value\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/timeSlotModule.js?");

/***/ }),

/***/ "./src/ui-components/meeting-slots.js":
/*!********************************************!*\
  !*** ./src/ui-components/meeting-slots.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MeetingSlot extends HTMLElement {\r\n\r\n    constructor() {\r\n        super()\r\n        this._addEvents()\r\n\r\n    }\r\n    set timeSlot(value) {\r\n        this._timeSlot = value\r\n        this._render()\r\n    }\r\n    get timeSlot() {\r\n        return this._timeSlot\r\n    }\r\n\r\n    _formatDate(date) {\r\n        const addZero = (i) => i < 10 ? \"0\" + i : i\r\n        return addZero(date.getHours()) + \":\" + addZero(date.getMinutes())\r\n    }\r\n    _render() {\r\n        const div = document.createElement('div')\r\n        div.className = \".expert\"\r\n        div.innerHTML = `\r\n            <div class='card'>\r\n                <div><b>${this._formatDate(this._timeSlot.time)} -  (${this._timeSlot.team.length}) </b></div>       \r\n                <div class='team show'>\r\n                    ${this._timeSlot.team.map(el => {\r\n            return `<div>${el.Name}</div>`\r\n        }).join('')}\r\n                </div>\r\n            </div>\r\n            `\r\n        this.appendChild(div)\r\n    }\r\n\r\n    _addEvents() {\r\n        this.addEventListener('mouseenter', e => {\r\n            this.querySelector(\".team\").classList.toggle(\"show\")\r\n        });\r\n        this.addEventListener('mouseleave', e => {\r\n            this.querySelector(\".team\").classList.toggle(\"show\")\r\n        });\r\n    }\r\n}\r\n\r\ncustomElements.define('meeting-slot', MeetingSlot)\n\n//# sourceURL=webpack:///./src/ui-components/meeting-slots.js?");

/***/ })

/******/ });