(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is the router for the app. For good Angular practice, we load/configure the router
 * in a separate, top-level module (such as this one) dedicated to routing.
 */






/**
 * Routes tell the router which view to display when a user clicks on a link or pastes a URL
 * into the browser.
 * We must define routes or any other decorator before the @NgModule decorator
 * We must import the necessary components so we can reference it in a Route
 * @property {string} path - a string that matches the URL in the browser address bar
 * @property {string} component - the component that the router should create when navigating to this route
 *
 */
var routes = [
    //This route redirects a URL that fully matches the empty path to the specified route
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] /*, canActivate:[AuthGuardService]*/ }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //The method is called forRoot() because we configure the router at the app's root level
                //The forRoot() method supplies the service providers and directives needed for routing, 
                //and performs the intitial navigation based on the current browser URL
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The router-element tells the router where to display routed views.-->\n<!-- It's one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'accenture-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post('http://localhost:3000/api/'.concat(type), user);
        }
        else {
            var token = this.getToken();
            base = this.http.get('http://localhost:3000/api/profile', { headers: { Authorization: 'Bearer '.concat(token) } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class = \"navbar\"></div>\n  <div class=\"gallery\">\n    <div class=\"gallery__item\">\n      <img class=\"gallery__item--image\" src=\"../../assets/images/dog-and-man.jpg\" alt=\"a person walking a dog\">\n      <div class=\"text\">Retirement</div>\n    </div>\n    <div class=\"gallery__item\">\n      <img class=\"gallery__item--image\" src=\"../../assets/images/children.jpg\" alt=\"two boys walking\">\n      <div class=\"text\">Online Services</div>\n    </div>\n    <div class=\"gallery__item\">\n      <img class=\"gallery__item--image\" src=\"../../assets/images/disability.jpg\" alt=\"race\">\n      <div class=\"text\">Disability</div>\n    </div>\n    <div class=\"gallery__item\">\n      <img class=\"gallery__item--image\" src=\"../../assets/images/running.jpg\" alt=\"child running\">\n      <div class=\"text\">Survivor's Benefits</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n/*\n*This stylesheet is to be imported for the login and registration page.\n*/\n/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n.auth-container {\n  background-image: url(\"/assets/images/login-background.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'lato', sans-serif;\n  color: black; }\n/*this media query checks to see if the browser window is smaller than the image, and uses a combo \n*percentage-left and negative left margin to keep it centered regardless.\n*/\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n    /* 50% */ } }\n.company-name {\n  font-family: \"rajdhani\";\n  color: #b33939;\n  font-size: 40px;\n  text-align: center;\n  padding: 40px 20px 0;\n  margin: 0; }\n.container {\n  font-family: \"rajdhani\";\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-position: center;\n  background-size: cover;\n  background-color: white; }\n.container .gallery {\n    display: flex;\n    flex-wrap: wrap;\n    /* Compensate for excess margin on outer gallery flex items */\n    margin: -1rem -1rem;\n    align-items: center; }\n.container .gallery .gallery__item {\n      /* Minimum width of 24rem and grow to fit available space */\n      flex: 1 0 24rem;\n      /* Margin value should be half of grid-gap value as margins on flex items don't collapse */\n      margin: 2rem;\n      box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);\n      overflow: hidden;\n      position: relative; }\n.container .gallery .gallery__item .gallery__item--image {\n        display: block;\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        transition: -webkit-transform 400ms ease-out;\n        transition: transform 400ms ease-out;\n        transition: transform 400ms ease-out, -webkit-transform 400ms ease-out;\n        background-image: url(\"/assets/images/login-background.jpg\"); }\n.container .gallery .gallery__item .gallery__item--image:hover {\n        -webkit-transform: scale(1.15);\n                transform: scale(1.15); }\n.container .gallery .gallery__item .text {\n        position: absolute;\n        top: 90%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        color: white;\n        font-weight: bold; }\n@supports (display: grid) {\n    .container .gallery {\n      display: -ms-grid;\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));\n      grid-gap: 2rem; }\n    .container .gallery,\n    .container .gallery-item {\n      margin: 0; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
        this.showLink = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showProfileLink;
    };
    HomeComponent.prototype.showProfileLink = function () {
        if (this.auth.isLoggedIn) {
            this.showLink = true;
            console.log("not Logged in");
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-container\">\n  <div class=\"login-container\">\n    <div class=\"company-name\">Accenture</div>\n    <div class=\"login-item\">\n      <form (submit)=\"login()\" class=\"form form-login\">\n        <div class=\"form-field\">\n          <div><span class=\"hidden\">Username</span></div>\n          <input type = \"text\" name =\"email\" id=\"login-username\"  class=\"form-input\" placeholder=\"Email\" required [(ngModel)] =\"credentials.email\">\n        </div>\n\n        <div class=\"form-field\">\n          <div><span class=\"hidden\">Password</span></div>\n          <input type = \"password\" name = \"password\" id=\"login-password\" class=\"form-input\" placeholder=\"Password\" required [(ngModel)] = \"credentials.password\">\n        </div>\n\n        <div class=\"form-field\">\n          <input type=\"submit\" value=\"Log in\">\n        </div>\n      </form>\n      <div class=\"wrapper-link\">\n        <div class=\"register-link\" routerLink=\"../register\">\n          Register\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n/*\n*This stylesheet is to be imported for the login and registration page.\n*/\n/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n.auth-container {\n  background-image: url(\"/assets/images/login-background.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'lato', sans-serif;\n  color: black; }\n/*this media query checks to see if the browser window is smaller than the image, and uses a combo \n*percentage-left and negative left margin to keep it centered regardless.\n*/\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n    /* 50% */ } }\n.company-name {\n  font-family: \"rajdhani\";\n  color: #b33939;\n  font-size: 40px;\n  text-align: center;\n  padding: 40px 20px 0;\n  margin: 0; }\n/*this media query checks to see if the browser window is smaller than the image, and uses a combo \n*percentage-left and negative left margin to keep it centered regardless.\n*/\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n    /* 50% */ } }\n.wrapper {\n  margin-right: auto;\n  /* 1 */\n  margin-left: auto;\n  /* 1 */\n  max-width: 960px;\n  /* 2 */\n  padding-right: 10px;\n  /* 3 */\n  padding-left: 10px;\n  /* 3 */ }\n.login-container {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n  opacity: .90;\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  height: 450px;\n  overflow-y: scroll; }\n.login-item {\n  color: #ffff;\n  padding: 25px 25px 0;\n  margin: 20px 20px 0;\n  border-radius: 3px; }\ninput {\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color .3s, color .3s; }\n.form input[type=\"password\"], .form input[type=\"text\"], .form input[type=\"submit\"] {\n  width: 100%; }\n.form-login label,\n.form-login input[type=\"text\"],\n.form-login input[type=\"password\"],\n.form-login input[type=\"submit\"] {\n  border-radius: 0.25rem;\n  padding: 1rem;\n  color: #3A3F44; }\n.form-login label {\n  background-color: #222222;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem; }\n.form-login input[type=\"text\"], .form-login input[type=\"password\"] {\n  font-family: \"rajdhani\";\n  background-color: #ffffff;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.555);\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.form-login input[type=\"text\"]:focus, .form-login input[type=\"text\"]:hover, .form-login input[type=\"password\"]:focus, .form-login input[type=\"password\"]:hover {\n  background-color: #eeeeee; }\n.form-login input[type=\"submit\"] {\n  background-color: #b33939;\n  color: #eee;\n  font-weight: bold;\n  text-transform: uppercase; }\n.form-login input[type=\"submit\"]:focus, .form-login input[type=\"submit\"]:hover {\n  color: #b33939;\n  cursor: pointer;\n  background-color: white; }\n.form-field {\n  font-family: \"rajdhani\";\n  display: flex;\n  margin-bottom: 2rem; }\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n.wrapper-link {\n  display: flex;\n  flex-flow: row nowrap; }\n.register-link {\n  font-family: \"rajdhani\";\n  color: #b33939;\n  font-size: 15px;\n  text-align: left;\n  cursor: pointer; }\n.register-link:hover {\n    text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        //faCoffee = faCoffee;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <img class = \"logo\" src = \"../assets/images/ssa-logo.svg\">\n    <a routerLink=\"../home\" class=\"navbar--title\"> Accenture</a>\n    <a routerLink=\"../login\" class=\"navbar--links\">Log In</a>\n    <a routerLink=\"../register\" class=\"navbar--links\"> Register</a>\n  </div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n.navbar {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  position: relative;\n  padding: 10px 0px;\n  background-color: #b33939; }\n.navbar .logo {\n    align-content: center;\n    height: 35px;\n    width: 35px;\n    justify-content: center;\n    align-items: center;\n    padding-left: 20px; }\n.navbar a {\n    text-decoration: none;\n    color: white; }\n.navbar .navbar--title {\n    text-transform: uppercase;\n    font-size: 25px;\n    flex-grow: 1;\n    padding-left: 10px; }\n.navbar .navbar--links {\n    padding: 0px 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"profile-container\">\n    <form>\n      <div class=\"title\">{{ details?.first_name }} {{ details?.last_name }}</div>\n      <div class=\"details\">\n        <div>{{ details?.email }}</div>\n        <button type = \"button\" (click)=\"auth.logout()\">Logout</button>\n      </div>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n.container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(to top, #b33939, #a03d3c, #8d3f3f, #7a4040, #664141); }\n.container .profile-container {\n    font-family: \"rajdhani\";\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n    opacity: .90;\n    width: 450px;\n    display: flex;\n    flex-direction: column;\n    width: 450px;\n    overflow-y: scroll;\n    padding: 30px; }\n.container .profile-container .title {\n      text-align: center;\n      font-size: 40px;\n      text-align: center;\n      padding: 20px 20px 0;\n      margin-bottom: 10px;\n      color: #353b48; }\n.container .profile-container .details {\n      color: #353b48;\n      align-items: center;\n      display: flex;\n      flex-direction: column; }\n.container .profile-container .details button[type=\"button\"] {\n        font-family: \"rajdhani\";\n        background-color: #b33939;\n        text-transform: uppercase;\n        border: none;\n        text-align: center;\n        color: white;\n        padding: 5px 32px;\n        text-align: center;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        border-radius: 0.25rem;\n        margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-container\">\n  <div class=\"register-container\">\n    <div class=\"company-name\">Accenture</div>\n    <form novalidate [formGroup]=\"registerForm\" (submit)=\" register()\">\n      <ul class=\"flex-outer\">\n        <li>\n          <label for=\"firstname\">First Name</label>\n          <input type=\"text\" name= \"firstname\" formControlName = \"first_name\"required placeholder=\"First Name\" id = \"firstname\" [(ngModel)]= \"credentials.first_name\">\n          <p class= \"warnings\"*ngIf=\"registerForm.controls.first_name.invalid && (registerForm.controls.first_name.dirty || registerForm.controls.first_name.touched)\"> First Name is required </p>\n        </li>\n        <li>  \n          <label for=\"lastname\">Last Name</label>\n          <input type=\"text\"  name = \"lastname\" formControlName = \"last_name\"required placeholder=\"Last Name\" id = \"lastname\" [(ngModel)]= \"credentials.last_name\">\n          <p class = \"warnings\" *ngIf=\"registerForm.controls.last_name.invalid && (registerForm.controls.last_name.dirty || registerForm.controls.last_name.touched)\"> Last Name is required </p>\n        </li>\n        <li>\n          <label for=\"email\">Email</label>\n          <input type=\"text\" name = \"email\" formControlName = \"email\"required placeholder=\"Email\" id = \"email\" [(ngModel)]= \"credentials.email\">\n          <p class = \"warnings\"*ngIf=\"registerForm.controls.email.invalid && (registerForm.controls.email.dirty || registerForm.controls.email.touched)\"> Email is required and should be valid address</p>\n        </li>\n        <li>\n          <label for=\"username\">Username</label>\n          <input type=\"text\" name= \"username\" formControlName = \"user_name\"required placeholder=\"Username\" id = \"username\" [(ngModel)]= \"credentials.user_name\">\n          <p class = \"warnings\" *ngIf=\"registerForm.controls.first_name.invalid && (registerForm.controls.user_name.dirty || registerForm.controls.user_name.touched)\"> Username is required </p>\n        </li>\n        <li>\n          <label for=\"password\">Password</label>\n\n          <input type=\"password\" name = \"password\" formControlName = \"password\"required placeholder=\"Password\" id = \"password\" [(ngModel)]= \"credentials.password\" >\n          <p class = \"warnings\" *ngIf=\"registerForm.controls.password.invalid && (registerForm.controls.password.dirty || registerForm.controls.password.touched)\"> Password is required and should contain 1 \n            uppercase letter, one lowercase letter, one number, and should be at least 8 characters long </p>\n        </li>\n        <li>\n            <label for=\"confirm-password\"> Confirm Password</label>\n            <input name = \"confirm-password\" type=\"password\" formControlName = \"password_confirm\" required id = \"confirm-password\" placeholder=\"Confirm Password\">\n            <p class = \"warnings\" *ngIf=\"registerForm.controls.password_confirm.invalid && (registerForm.controls.password_confirm.dirty || registerForm.controls.password_confirm.touched)\"> Password is required and should contain 1 \n                uppercase letter, one lowercase letter, one number, and should be at least 8 characters long </p>\n          </li>\n        \n        <li>\n            <i routerLink = \"../login\" class=\"fa fa-arrow-left back-button\"></i>\n          <button type=\"submit\" \n          *ngIf=\"registerForm.controls.first_name.valid && registerForm.controls.last_name.valid \n          && registerForm.controls.password.valid && registerForm.controls.password_confirm.valid && registerForm.controls.email.valid && registerForm.controls.user_name.valid\">Submit</button>\n        </li>\n      </ul>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n/*\n*This stylesheet is to be imported for the login and registration page.\n*/\n/* You can add global styles to this file, and also import other style files */\n/**\n*The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, \n*the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.\n**/\n@font-face {\n  font-family: Rajdhani;\n  src: url(/assets/fonts/Rajdhani/Rajdhani-Regular.ttf); }\n.auth-container {\n  background-image: url(\"/assets/images/login-background.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'lato', sans-serif;\n  color: black; }\n/*this media query checks to see if the browser window is smaller than the image, and uses a combo \n*percentage-left and negative left margin to keep it centered regardless.\n*/\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n    /* 50% */ } }\n.company-name {\n  font-family: \"rajdhani\";\n  color: #b33939;\n  font-size: 40px;\n  text-align: center;\n  padding: 40px 20px 0;\n  margin: 0; }\n.register-container {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n  opacity: .90;\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  height: 650px; }\n.flex-outer,\n.flex-inner {\n  list-style-type: none;\n  padding: 30px 30px 0px; }\n.flex-outer {\n  max-width: 800px;\n  margin: 0 auto; }\n.flex-outer li,\n.flex-inner {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n.flex-inner {\n  padding: 0 8px;\n  justify-content: space-between; }\n.flex-outer > li:not(:last-child) {\n  margin-bottom: 20px; }\n.flex-outer li label,\n.flex-outer li p {\n  font-family: \"rajdhani\";\n  color: #b33939;\n  font-size: 18px;\n  padding: 8px;\n  font-weight: 300;\n  letter-spacing: .09em;\n  text-transform: uppercase; }\n.flex-outer > li > label,\n.flex-outer li p {\n  flex: 1 0 120px;\n  max-width: 220px; }\n.flex-outer > li > label + *,\n.flex-inner {\n  font-family: \"rajdhani\";\n  flex: 1 0 220px; }\n.flex-outer li p {\n  margin: 0; }\n.flex-outer li input {\n  outline: 0;\n  padding: 15px;\n  border: none;\n  font-size: 14px;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.555); }\n.flex-outer li button {\n  font-family: \"rajdhani\";\n  margin-left: auto;\n  padding: 12px 45px;\n  border: none;\n  background: #b33939;\n  color: white;\n  font-size: 18px;\n  text-transform: uppercase;\n  letter-spacing: .09em;\n  border-radius: 2px; }\n.flex-outer li button:hover {\n    color: #b33939;\n    cursor: pointer;\n    background-color: white;\n    transition: background-color .3s, color .3s; }\n.flex-inner li {\n  width: 100px; }\n.warnings {\n  font-size: 7px; }\nform input[type=\"text\"]:hover, form input[type=\"password\"]:hover {\n  background-color: #eeeeee; }\n.back-button {\n  color: #b33939; }\n.back-button:hover {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            first_name: '',
            last_name: '',
            user_name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[^ @]*@[^ @]*")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            password_confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jewel/git-good-accenture/accenture-app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/jewel/git-good-accenture/accenture-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map