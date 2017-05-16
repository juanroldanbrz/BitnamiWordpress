webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 137;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(152);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(218),
        styles: [__webpack_require__(208)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_bar_navigation_bar_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_manager_instance_manager_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__credentials_manager_credentials_manager_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_instance_new_instance_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__server_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'instance', component: __WEBPACK_IMPORTED_MODULE_6__instance_manager_instance_manager_component__["a" /* InstanceManagerComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_9__new_instance_new_instance_component__["a" /* NewInstanceComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_7__credentials_manager_credentials_manager_component__["a" /* CredentialsManagerComponent */] },
    { path: '**',
        redirectTo: '/instance',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__instance_manager_instance_manager_component__["a" /* InstanceManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__credentials_manager_credentials_manager_component__["a" /* CredentialsManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_instance_new_instance_component__["a" /* NewInstanceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__server_service__["a" /* ServerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialsManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CredentialsManagerComponent = (function () {
    function CredentialsManagerComponent(serverService) {
        this.serverService = serverService;
    }
    CredentialsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getKeys()
            .subscribe(function (data) { _this.keys = data; }, function (error) { return console.log(error); });
    };
    return CredentialsManagerComponent;
}());
CredentialsManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-credentials-manager',
        template: __webpack_require__(219),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], CredentialsManagerComponent);

var _a;
//# sourceMappingURL=credentials-manager.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstanceManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstanceManagerComponent = (function () {
    function InstanceManagerComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.timeout = 700;
        this.launchButtonEnabled = false;
        this.startButtonEnabled = false;
        this.stopButtonEnabled = false;
        this.resetButtonEnabled = false;
        this.terminateButtonEnabled = false;
    }
    InstanceManagerComponent.prototype.ngOnInit = function () {
        this.loadInitialData();
    };
    InstanceManagerComponent.prototype.loadInitialData = function () {
        var _this = this;
        this.serverService.getInstance()
            .subscribe(function (data) { return _this.initData(data); }, function (error) { return _this.enableLaunchButton(); });
    };
    InstanceManagerComponent.prototype.initData = function (data) {
        this.instance = data;
        this.renderState(data.state);
    };
    InstanceManagerComponent.prototype.renderState = function (state) {
        this.instance.state = state;
        if (state === 'running') {
            this.getInstanceUrl();
            this.startButtonEnabled = false;
            this.stopButtonEnabled = true;
            this.resetButtonEnabled = true;
            this.terminateButtonEnabled = true;
        }
        else if (state === 'stopped') {
            this.startButtonEnabled = true;
            this.stopButtonEnabled = false;
            this.resetButtonEnabled = false;
            this.terminateButtonEnabled = true;
        }
    };
    InstanceManagerComponent.prototype.enableLaunchButton = function () {
        this.instance = null;
        this.launchButtonEnabled = true;
    };
    InstanceManagerComponent.prototype.disableAllButtons = function () {
        this.startButtonEnabled = false;
        this.stopButtonEnabled = false;
        this.resetButtonEnabled = false;
        this.terminateButtonEnabled = false;
    };
    InstanceManagerComponent.prototype.parseInstanceStatus = function (instanceStatus) {
        this.disableAllButtons();
        this.instance.state = instanceStatus.state;
        this.instance.status = instanceStatus.status;
        this.renderState(instanceStatus.state);
    };
    InstanceManagerComponent.prototype.getInstanceUrl = function () {
        var _this = this;
        if (this.instance) {
            this.serverService.getInstanceUrl()
                .subscribe(function (url) { return _this.instance.url = url; }, function (error) { return _this.loadInitialData(); });
        }
    };
    InstanceManagerComponent.prototype.reloadInstanceStatus = function () {
        var _this = this;
        if (this.instance) {
            this.serverService.getInstanceStatus()
                .subscribe(function (data) { return _this.parseInstanceStatus(data); }, function (error) { return _this.loadInitialData(); });
        }
    };
    InstanceManagerComponent.prototype.stopInstance = function () {
        var _this = this;
        if (this.stopButtonEnabled) {
            this.disableAllButtons();
            this.serverService.stopInstance()
                .subscribe(function (data) {
                return setTimeout(function () { _this.reloadInstanceStatus(); }, _this.timeout);
            }, function (error) { return _this.loadInitialData(); });
        }
    };
    InstanceManagerComponent.prototype.startInstance = function () {
        var _this = this;
        if (this.startButtonEnabled) {
            this.disableAllButtons();
            this.serverService.startInstance()
                .subscribe(function (data) {
                return setTimeout(function () { _this.reloadInstanceStatus(); }, _this.timeout);
            }, function (error) { return _this.loadInitialData(); });
        }
    };
    InstanceManagerComponent.prototype.restartInstance = function () {
        var _this = this;
        if (this.resetButtonEnabled) {
            this.disableAllButtons();
            this.serverService.restartInstance()
                .subscribe(function (data) { return setTimeout(function () { _this.reloadInstanceStatus(); }, _this.timeout); }, function (error) { return _this.loadInitialData(); });
        }
    };
    InstanceManagerComponent.prototype.terminateInstance = function () {
        var _this = this;
        if (this.terminateButtonEnabled) {
            this.disableAllButtons();
            this.serverService.terminateInstance()
                .subscribe(function (data) { return _this.loadInitialData(); }, function (error) { return _this.loadInitialData(); });
        }
    };
    return InstanceManagerComponent;
}());
InstanceManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-instance-manager',
        template: __webpack_require__(220),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], InstanceManagerComponent);

var _a, _b;
//# sourceMappingURL=instance-manager.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    return NavigationBarComponent;
}());
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navigation-bar',
        template: __webpack_require__(221),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], NavigationBarComponent);

//# sourceMappingURL=navigation-bar.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInstanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewInstanceComponent = (function () {
    function NewInstanceComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.instanceName = 'wordpress';
        this.btnDisabled = false;
    }
    NewInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getLastConfig()
            .subscribe(function (data) { return _this.configuration = data; }, function (error) { return console.log(error); });
    };
    NewInstanceComponent.prototype.launchInstance = function () {
        var _this = this;
        if (!this.btnDisabled) {
            this.btnDisabled = true;
            this.serverService.launchInstance(this.instanceName, this.configuration.id)
                .subscribe(function (response) {
                _this.router.navigate(['/instance']);
            });
        }
    };
    return NewInstanceComponent;
}());
NewInstanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-instance',
        template: __webpack_require__(222),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewInstanceComponent);

var _a, _b;
//# sourceMappingURL=new-instance.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".row {\n  margin-top:5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\n  overflow: auto;\n  font-family: verdana;\n  font-size: 12px;\n  font-weight: 200;\n  background-color: #2e353d;\n  position: fixed;\n  top: 0px;\n  width: 300px;\n  height: 100%;\n  color: #e1ffff;\n}\n.nav-side-menu .brand {\n  background-color: #23282e;\n  line-height: 50px;\n  display: block;\n  text-align: center;\n  font-size: 14px;\n}\n.nav-side-menu .toggle-btn {\n  display: none;\n}\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer;  }\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\F078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: right;\n}\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n}\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: #181c20;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #23282e;\n  margin-left: 0px;\n}\n.nav-side-menu ul .sub-menu li:hover,\n.nav-side-menu li .sub-menu li:hover {\n  background-color: #020203;\n}\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.nav-side-menu li {\n  padding-left: 0px;\n  border-left: 3px solid #2e353d;\n  border-bottom: 1px solid #23282e;\n}\n.nav-side-menu li a {\n  text-decoration: none;\n  color: #e1ffff;\n}\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 20px;\n  padding-right: 20px;\n}\n.nav-side-menu li:hover {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n  transition: all 1s ease;\n}\n@media (max-width: 767px) {\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 10 !important;\n    padding: 3px;\n    background-color: #ffffff;\n    color: #000;\n    width: 40px;\n    text-align: center;\n  }\n  .brand {\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 20px;\n    line-height: 50px !important;\n  }\n}\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n}\nbody {\n  margin: 0px;\n  padding: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-3\">\n      <app-navigation-bar></app-navigation-bar>\n    </div>\n    <div class=\"col-xs-8\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"page-header\">\n    <h1>Here there are your AWS ID and Secret</h1>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"keys\">\n    <form class=\"form-horizontal\">\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\">AWS Access Key Id:</label>\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">{{keys.awsaccessKeyId}}</p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\">AWS Secret Key:</label>\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">{{keys.awssecretKey}}</p>\n        </div>\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"page-header\">\n    <h1>Wordpress Server <small>manager</small></h1>\n  </div>\n  <br>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-3\">\n    <button class=\"btn btn-primary\" routerLink=\"/new\" [ngClass]=\"{disabled: !launchButtonEnabled}\">Launch a new Wordpress AMI</button>\n  </div>\n  <div class=\"col-xs-1 col-md-offset-7\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"reloadInstanceStatus()\">\n      <span class=\"glyphicon glyphicon glyphicon-refresh\"></span>\n    </button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n      <tr>\n        <th>Instance ID</th>\n        <th>Instance name</th>\n        <th>Wordpress Version</th>\n        <th>OS Version</th>\n        <th>State</th>\n        <th>Status</th>\n        <th>URL</th>\n        <th>Actions</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"instance\">\n      <tr>\n        <td>{{instance.instance_identifier}}</td>\n        <td>{{instance.name}}</td>\n        <td>{{instance.configuration.wordpressVersion}}</td>\n        <td>{{instance.configuration.osVersion}}</td>\n        <td>{{instance.state}}</td>\n        <td>{{instance.status}}</td>\n        <td><a [href]=\"'http://' + instance.url\" target=\"_blank\" *ngIf=\"instance.status === 'ok'\">Wordpress</a> </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"startInstance()\" [ngClass]=\"{disabled: !startButtonEnabled}\">\n            <span class=\"glyphicon glyphicon-play\"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"stopInstance()\" [ngClass]=\"{disabled: !stopButtonEnabled}\">\n            <span class=\"glyphicon glyphicon-stop\"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"restartInstance()\" [ngClass]=\"{disabled: !resetButtonEnabled}\">\n            <span class=\"glyphicon glyphicon-repeat\"></span>\n          </button>\n\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"terminateInstance()\" [ngClass]=\"{disabled: !terminateButtonEnabled}\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <h1 style=\"color:red\" *ngIf=\"!instance\">No instance available</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\n  <div class=\"brand\">Bitnami Wordpress <a href=\"/logout\">Logout</a></div>\n\n  <i class=\"fa fa-bars fa-2x toggle-btn\"></i>\n\n  <div class=\"menu-list\">\n\n    <ul id=\"menu-content\" class=\"menu-content\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/instance\">\n          <i class=\"fa fa-hdd-o fa-lg\"></i>Instance</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/settings\">\n          <i class=\"fa fa-cog fa-lg\"></i>Settings</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"page-header\">\n    <h1><small>Create a Wordpress new instance</small></h1>\n  </div>\n  <br>\n</div>\n<div class=\"row\" *ngIf=\"configuration\">\n  <form class=\"form-horizontal\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">Instance name:</label>\n      <div class=\"col-xs-9\">\n        <input type=\"text\" [(ngModel)]=\"instanceName\" placeholder=\"WordpressInstance\" name=\"wordpress\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">Ami identifier:</label>\n      <div class=\"col-xs-9\">\n        <p class=\"form-control-static\">{{configuration.amiIdentifier}}</p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">Wordpress version:</label>\n      <div class=\"col-xs-9\">\n        <p class=\"form-control-static\">{{configuration.wordpressVersion}}</p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">OS Version:</label>\n      <div class=\"col-xs-9\">\n        <p class=\"form-control-static\">{{configuration.osVersion}}</p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">Instance Type:</label>\n      <div class=\"col-xs-9\">\n        <p class=\"form-control-static\">{{configuration.instanceType}}</p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-xs-3\">Region:</label>\n      <div class=\"col-xs-9\">\n        <p class=\"form-control-static\">{{configuration.region}}</p>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"row\" *ngIf=\"configuration\">\n  <div class=\"col-xs-3 col-xs-offset-5\">\n    <button class=\"btn btn-primary\" [ngClass]=\"{disabled: btnDisabled}\" (click)=\"launchInstance()\">Launch the instance</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.getLastConfig = function () {
        return this.http.get('/api/config').map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.getKeys = function () {
        return this.http.get('/api/keys').map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.getInstance = function () {
        return this.http.get('/api/instance').map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.launchInstance = function (instanceName, configurationId) {
        return this.http.get('/api/instance/new?instanceName=' + instanceName + "&configurationId=" + configurationId, "");
    };
    ServerService.prototype.stopInstance = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/instance/stop', "", { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.startInstance = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/instance/start', "", { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.restartInstance = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/instance/restart', "", { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.terminateInstance = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/instance/terminate', "", { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.getInstanceStatus = function () {
        return this.http.get('/api/instance/status').map(function (response) {
            return response.json();
        });
    };
    ServerService.prototype.getInstanceUrl = function () {
        return this.http.get('/api/instance/url').map(function (response) {
            return response.text();
        });
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ })

},[496]);
//# sourceMappingURL=main.bundle.js.map