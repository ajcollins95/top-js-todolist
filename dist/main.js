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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/application */ \"./src/modules/application.js\");\n\n\n_modules_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/appItems.js":
/*!*********************************!*\
  !*** ./src/modules/appItems.js ***!
  \*********************************/
/*! exports provided: Task, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n\n\n//Contains Tasks, Projects, and their parent, AppItem\n\n//AppItem Factory function\n//AppItem is a 'parent class'\nconst AppItem = () => {\n    let _data = {\n        type: \"default\",\n        name: \"untitled\"\n    }\n\n    const validTypes = ['Project','Task']\n\n    //getters and setters\n    const setType = (newType) => {\n        if (validTypes.includes(newType)){\n            _data.type = newType\n        }\n        else {\n            throws `${newType} is invalid type`\n        } \n    }\n\n    const getType = () => {\n        return _data.type\n    }\n\n    const setName = (newName) => {\n        _data.name = newName\n    }\n    \n    const getName = () => {\n        return _data.name \n    }\n\n    const setList = (list) => {\n        _data['list'] = list\n    }\n\n    const getList = (list) => {\n        return _data.list\n    }\n\n    //log display data\n    const show = () => {\n        console.log(_data)\n    }\n    \n    //duck initialization function\n    const _init = (args) => {\n        setName(args['name'])\n    }\n\n    const addTask = (task) => {\n        //adds a task to the Project List of this Item\n        if (_data.list) {\n            _data.list.add(task)\n        }\n        else {\n            throw 'This Project has no list property'\n        }\n    }\n\n    return {\n        setType,\n        getType,\n        getName,\n        setName,\n        setList,\n        getList,\n        _init,\n        addTask\n    }\n}\n\n\n//Task Factory function\n//Task is a 'class'\nconst Task = (arg) => {\n    //inheritance\n    const {\n        setType,\n        getType,\n        getName,\n        setName,\n        _init\n    } = AppItem()\n\n    //class variables\n\n\n    const initTask = (args) => {\n        setType('Task')\n        _init(args)\n        \n    }\n    const showItem = (args) => {\n        console.log(`Task: ${getName()}`)\n    }\n\n    initTask(arg)\n\n    return {\n        getType,\n        showItem\n    }\n}\n\n\n//Project Factory function\n//Project is a 'class'\nconst Project = (arg) => {\n    //inheritance\n    const {\n        setType,\n        getType,\n        setName,\n        getName,\n        addTask,\n        setList,\n        getList,\n        _init\n    } = AppItem()\n\n    //class variables\n\n\n    const initProject = (args) => {\n        setType('Project')\n        _init(args)\n        setList(Object(_lists__WEBPACK_IMPORTED_MODULE_0__[\"TaskList\"])())\n    }\n\n    const showItem = (args) => {\n        //displays a project to console\n        console.log(`Project: ${getName()}`)\n        getList().showList()\n    }\n       \n\n\n    initProject(arg)\n\n    return {\n        showItem,\n        getType,\n        addTask\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/appItems.js?");

/***/ }),

/***/ "./src/modules/application.js":
/*!************************************!*\
  !*** ./src/modules/application.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _appItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appItems */ \"./src/modules/appItems.js\");\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n\n\n\n\n//TODO Application Module\nconst application = (() => {\n    let appData = {}\n\n    const _init = () => {\n        _setAppData()\n    };\n\n    const _setAppData = () => {\n        if (0) {}\n        else {\n            appData = _makeDefault()\n        }\n    };\n\n    const _makeDefault = () => {\n        //make the default data for an empty cache\n        let projects = Object(_lists__WEBPACK_IMPORTED_MODULE_2__[\"ProjectList\"])()\n        let project = Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])({name: 'Accept/Enjoy Life as it Arrives'})\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Drink water'}))\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Meditate' }))\n        projects.add(project)\n        project = Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])({name: 'Hokey Pokey'})\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Insert Right Foot'}))\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Remove Right Foot' }))\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Replace Right Foot in Previous Position'}))\n        project.addTask(Object(_appItems__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])({ name: 'Shake Right Foot Vigorously' }))\n        projects.add(project)\n        projects.showList()\n\n    }\n\n\n\n    const run = () => {\n        _init()\n    };\n    \n    return {\n      run\n    };\n  })();\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (application);\n\n\n//# sourceURL=webpack:///./src/modules/application.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/modules/element.js\");\n\n\n//DOM Manipulator module for HTML display\n//use \"class\" data to display objects\nconst DOM = ((doc) => {\n    let page = doc.getElementById('content')\n\n    const createElem = (args) => {\n        //creates element form an argument list\n        let tag = args.tag || div\n        let elem = document.createElement(args.tag)\n\n        if (args.class) {\n            elem.classList.add(args.class)\n        }\n        if (args.text) {\n            elem.innerText = args.text\n        }\n        if (args.id) {\n          elem.id = args.id\n      }\n\n        return elem\n    }\n\n    const createProjectWindow = () => {\n        let projectWindow = createElem({\n            tag: 'div', \n            id: 'project-window'})\n        let projectTitle = createElem({\n            tag: 'div', \n            class: 'title',\n            text: 'Projects'})\n        let projects = createElem({\n            tag: 'div', \n            id: 'project-list',\n            text: 'projects here '})\n\n        projectWindow.appendChild(projectTitle)\n        projectWindow.appendChild(projects)\n        \n        return projectWindow\n    }\n\n    const createTaskWindow = () => {\n      let taskWindow = createElem({\n          tag: 'div', \n          id: 'task-window'})\n      let taskTitle = createElem({\n          tag: 'div', \n          class: 'title',\n          text: 'Tasks'})\n      let tasks = createElem({\n          tag: 'div', \n          id: 'task-list',\n          text: 'tasks here '})\n\n      taskWindow.appendChild(taskTitle)\n      taskWindow.appendChild(tasks)\n      \n      return taskWindow\n  }\n\n\n    const createHeader = () => {\n\n        let header = createElem({tag: 'header'})\n        /*let title = createElem({\n            tag: 'p', \n            id: 'title',\n            text: titleText})\n        let subtitle = createElem({\n            tag: 'p', \n            id: 'subtitle',\n            text: subtitleText}) */\n        let to = createElem({\n            tag: 'span', \n            text: 'to'})\n        let dot = createElem({\n            tag: 'span', \n            text: '.'})\n        let doo = createElem({\n            tag: 'span', \n            text: 'Do'})\n\n        header.appendChild(to)\n        header.appendChild(dot)\n        header.appendChild(doo)\n        \n        return header\n    }\n\n    const createAppWindow = () => {\n      let appWindow = createElem({\n          tag: 'div', \n          id: 'app-window'})\n\n      let taskWindow = createTaskWindow()  \n      let projectWindow = createProjectWindow()\n      \n      appWindow.appendChild(projectWindow)\n      appWindow.appendChild(taskWindow)\n      \n                                                                                          \n      return appWindow\n  }\n\n    const loadFrame = () => {\n        let header = createHeader()\n        let appWindow = createAppWindow()\n\n        page.appendChild(header)\n        page.appendChild(appWindow)\n    };\n\n    const init = () => {\n        loadFrame()\n\n  };\n\n    init()\n    \n    return {\n        init\n    };\n})(document);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOM);\n  /*\n\n  function loadPage() {\n    //returns an element that contains a skeleton of the page\n    //ie Nav Bar, content frame, and footer\n\n    let title = createTitle()\n    let nav = createNav()\n    let frame = createContentWindow()\n    let footer = createFooter()\n    let spacer = createSpacer()\n    let page = document.createElement('div')\n\n    page.appendChild(nav)\n    page.appendChild(title)\n    page.appendChild(frame)\n    page.appendChild(spacer)\n    page.appendChild(footer)\n\n    return page\n}\n\n//Title Creator\nfunction createTitle() {\n    //Show restaurant name\n    let h2 = document.createElement('h2')\n    let restaurantName = 'The Rusty Spatula(r)'\n\n    h2.id = 'title'\n    h2.innerText = restaurantName\n\n    return h2\n}\n\n\n//Navbar function and helpers\nfunction createNav() {\n    //creates a navbar with three buttons\n    let nav = document.createElement('nav')\n    let tabs = ['Home','Menu','Contact']\n\n    nav.classList.add('flex-container')\n    tabs.forEach( (tab) => {\n        let btn = createButton(tab)\n        nav.appendChild(btn)\n    })\n\n    return nav\n}\n\nfunction createButton(name) {\n    //makes a button named name and has a lowercase name as the id\n    let id = name.toLowerCase()\n    let btn = document.createElement('button')\n\n    btn.id = id\n    btn.innerText = name\n\n    return btn\n}\n\n//ContentWindow function\nfunction createContentWindow() {\n    let content = document.createElement('div')\n\n    content.id = 'content-frame'\n\n    return content\n}\n\n//Create footer \nfunction createFooter() {\n    //creates footer content and positions it.\n    let footer = document.createElement('footer')\n    let p = document.createElement('p')\n\n    p.innerText = '*tetanus shots not included'\n    p.style['text-align'] = 'center'\n    p.style.margin = 'auto'\n\n    footer.appendChild(p)\n\n    return footer\n}\n\nLOL\nLOL\nLOL\nLOL\n I HATE THE NEW LOOK\n LOL\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//Create spacer \nfunction createSpacer() {\n    //creates spacer element\n    let spacer = document.createElement('div')\n    spacer.classList.add('spacer')\n    return spacer\n}\n\nexport default loadPage;\n*/\n\n//# sourceURL=webpack:///./src/modules/domManipulation.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//AppItem Factory function\n//AppItem is a 'parent class'\nconst HTMLElement = (args) => {\n    let _data = {\n        tag: args.tag || 'div',\n    }\n\n    let elem = ''\n\n    const get = () => {\n        return elem\n    }\n\n    const logData = () => {\n        console.log(_data)\n    }\n\n    const init = () => {\n        elem = document.createElement(_data.tag)\n    }\n\n    init()\n\n    return {\n        logData\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTMLElement);\n\n//# sourceURL=webpack:///./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/*! exports provided: List, TaskList, ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskList\", function() { return TaskList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n//List Factory function\n//List is a 'parent class' to tasklist and projectlist\nconst List = () => {\n    let _data = []\n\n    const len = () => {\n        return _data.length\n    }\n\n    const addToList = (item, type) => {\n        if (item.getType() == type) {\n            _data.push(item)\n        }\n        else {\n            throw `Item cannot be added to a ${type} list`\n        }\n    }\n\n    const show = () => {\n        for (let i = 0; i < len(); i++) {\n            _data[i].showItem()\n        }\n    }\n\n    return {\n        addToList,\n        show,\n        len\n\n    }\n}\n\n//TaskList Factory function\n//TaskList is a 'class'\nconst TaskList = () => {\n    //inheritance\n    const {\n        addToList, \n        show,\n        len\n    } = List()\n\n    //class variables\n    const _type = 'Task'\n\n\n    //public methods\n    const add = (item) => {\n        addToList(item, _type)\n    }\n\n    const showList = () => {\n        //display task list in console\n        show()\n    }\n\n    return {\n        add,\n        showList,\n        len\n    }\n}\n\n//ProjectList Factory function\n//ProjectList is a 'class'\nconst ProjectList = () => {\n    //inheritance\n    const {\n        addToList, \n        show \n    } = List()\n\n    //class variables\n    const _type = 'Project'\n\n    //public methods\n    const add = (item) => {\n        addToList(item, _type)\n    }\n\n    const showList = () => {\n        //displays a project list in the console\n        show()\n    }\n\n    return {\n        add,\n        showList\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/lists.js?");

/***/ })

/******/ });