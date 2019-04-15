(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./frontend/src/$$_lazy_route_resource lazy recursive":
/*!*******************************************************************!*\
  !*** ./frontend/src/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
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
webpackEmptyAsyncContext.id = "./frontend/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./frontend/src/app/app-routing.module.ts":
/*!************************************************!*\
  !*** ./frontend/src/app/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/case-study/case-study.component */ "./frontend/src/app/components/case-study/case-study.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./frontend/src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./frontend/src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./frontend/src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./frontend/src/app/components/register/register.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./frontend/src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_session_template_session_one_session_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/session-template/session-one/session-one.component */ "./frontend/src/app/components/session-template/session-one/session-one.component.ts");
/* harmony import */ var _components_session_template_session_three_session_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/session-template/session-three/session-three.component */ "./frontend/src/app/components/session-template/session-three/session-three.component.ts");
/* harmony import */ var _components_session_template_session_two_session_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/session-template/session-two/session-two.component */ "./frontend/src/app/components/session-template/session-two/session-two.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./frontend/src/app/services/auth-guard.service.ts");










// import { SessionTemplateComponent } from './components/session-template/session-template.component';



var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'quiz', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'session-one', component: _components_session_template_session_one_session_one_component__WEBPACK_IMPORTED_MODULE_9__["SessionOneComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'session-two', component: _components_session_template_session_two_session_two_component__WEBPACK_IMPORTED_MODULE_11__["SessionTwoComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'session-three', component: _components_session_template_session_three_session_three_component__WEBPACK_IMPORTED_MODULE_10__["SessionThreeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'case-study', component: _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_3__["CaseStudyComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./frontend/src/app/app.component.html":
/*!*********************************************!*\
  !*** ./frontend/src/app/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"fixed-top navbar navbar-expand-sm\">\r\n  <div class=\"container-fluid\">\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" aria-expanded=\"false\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto pt-2\" >\r\n      <li class=\"nav-item routerLinkActive  active\" >\r\n        <a class=\"nav-link mr-3\" routerLink=\"/home\" routerLinkActive=\"defaultLightBlue\" \r\n            [routerLinkActiveOptions]=\"{exact: true}\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item routerLinkActive active\" >\r\n        <a class=\"nav-link mr-3\" routerLink=\"/login\" routerLinkActive=\"defaultLightBlue\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item routerLinkActive active\" >\r\n        <a class=\"nav-link mr-3\" routerLink=\"/register\" routerLinkActive=\"defaultLightBlue\">Register</a>\r\n      </li>\r\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item routerLinkActive active\" >\r\n        <a class=\"nav-link mr-3\" routerLink=\"/profile\" routerLinkActive=\"defaultLightBlue\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item routerLinkActive active dropdown\" dropdown>\r\n        <a class=\"nav-link mr-3 dropdown-toggle\" [ngClass]=\"{'defaultLightBlue' : dropActive}\" dropdownToggle href=\"javascript:void(0);\" role=\"button\">Session{{ activeSession  }}</a>\r\n        <div class=\"dropdown-menu bg-light active\" *dropdownMenu aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item  h4\" routerLink=\"/session-one\" routerLinkActive=\"defaultLightBlue\">Session One</a>\r\n          <a class=\"dropdown-item  h4\" routerLink=\"/session-two\" routerLinkActive=\"defaultLightBlue\">Session Two</a>\r\n          <a class=\"dropdown-item  h4\" routerLink=\"/session-three\" routerLinkActive=\"defaultLightBlue\">Session Three</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item  h4\" routerLink=\"/case-study\" routerLinkActive=\"defaultLightBlue\">Case Study</a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item routerLinkActive d-flex align-items-center routerLinkActive\" \r\n           routerLinkActive=\"defaultLightBlue\" >\r\n        <button mat-button color=\"accent\" (click)=\"auth.logout()\" routerLink=\"/login\">Log Out</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"navbar-brand\" routerLink=\"/\" (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\r\n    <span class=\"logoBlue\">< </span>\r\n    <span class=\"logoWhite\">Project</span>\r\n    <span class=\"logoBlue\">Sensei</span>\r\n    <span class=\"logoWhite\"> ></span>\r\n  </div>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-11 center\">\r\n      <div class=\"m-t-1\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./frontend/src/app/app.component.scss":
/*!*********************************************!*\
  !*** ./frontend/src/app/app.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".defaultborder {\n  border: 2px #000000; }\n\n.defaultLightBlue {\n  color: #3d9eb3; }\n\n.defaultMargin {\n  margin: 0 auto; }\n\n.defaultMargin10 {\n  margin: 10 auto; }\n\n.defaultMargin20 {\n  margin: 20 auto; }\n\n.defaultMargin30 {\n  margin: 30 auto; }\n\n.defaultMargin40 {\n  margin: 40 auto; }\n\n.defaultMargin50 {\n  margin: 50 auto; }\n\n.navbar {\n  background: linear-gradient(361deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);\n  max-height: 50px !important; }\n\n.navbar-nav {\n  margin: 0 !important;\n  text-shadow: 0px 1px 3px black; }\n\n.nav-link {\n  font-size: 1.5em !important; }\n\n.navbar-collapse {\n  padding-top: 0px !important;\n  margin-bottom: 10px !important; }\n\n.dropdown a:focus {\n  color: #3d9eb3; }\n\n.dropdown-menu {\n  text-shadow: none !important; }\n\n.dropdown-menu .dropdown-item:hover {\n    color: #3d9eb3; }\n\n.dropdown-menu .dropdown-item:active {\n    background-color: #f8f9fa; }\n\na.defaultLightBlue:hover, a.defaultLightBlue:focus {\n  color: #3d9eb3 !important; }\n\n.logoWhite {\n  color: #f5f5f5;\n  font-size: 1.5em;\n  text-shadow: 0px 1px 3px black; }\n\n.logoBlue {\n  color: #3d9eb3;\n  font-size: 1.5em;\n  text-shadow: 0px 1px 3px black; }\n\n.navbar-brand {\n  line-height: 2 !important;\n  margin: 0 auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvQzpcXEdpdFxccHJvamVjdC1zZW5zZWkvZnJvbnRlbmRcXHNyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJmcm9udGVuZC9zcmMvYXBwL0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNJLG1CQXRCa0IsRUFBQTs7QUF5QnRCO0VBQ0ksY0Fac0IsRUFBQTs7QUF1QjFCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FDcERuQjtFQUNJLDBFQUEwRTtFQUMxRSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxvQkFBb0I7RUFDcEIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBOztBQUdsQztFQUVRLGNEUmtCLEVBQUE7O0FDWTFCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRGhDO0lBR1EsY0Rma0IsRUFBQTs7QUNZMUI7SUFNUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSx5QkFBbUMsRUFBQTs7QUFHdkM7RUFDSSxjRDVCa0I7RUM2QmxCLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxjRGhDc0I7RUNpQ3RCLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUEiLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbG91cnNcclxuJGRlZmF1bHREYXJrR3JleTogICM1NjU2NTY7XHJcbiRkZWZhdWx0QmxhY2s6ICMwMDAwMDA7XHJcbiRkZWZhdWx0TGlnaHRHcmV5OiAjRTVFNUU1O1xyXG5cclxuXHJcbi8vSW1hZ2VzXHJcbi8vICRrYXRhbmE6IHVybCguL2ljb25zL2thdGFuYS5zdmcpO1xyXG4vLyAkbG9jazogdXJsKC4vaWNvbnMvaWNvbnM4LWxvY2stNTAucG5nKTtcclxuLy8gJGtpbW9ubzogdXJsKC4vaWNvbnMvaWNvbnM4LWtpbW9uby01MC5wbmcpO1xyXG5cclxuLy9CYWNrZ3JvdW5kICAgIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNhMWM0ZmQgMCUsICNjMmU5ZmIgMTAwJSk7ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZDZlYTAgMCUsICNlYzhjNjkgMTAwJSk7XHJcbiRkZWZhdWx0QmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICMzRDRFODEgMCUsICM1NzUzQzkgNDglLCAjNkU3RkYzIDEwMCUpO1xyXG5cclxuLy9Mb2dvXHJcbiRkZWZhdWx0V2hpdGU6ICNmNWY1ZjU7XHJcbiRkZWZhdWx0TGlnaHRCbHVlOiAjM2Q5ZWIzO1xyXG5cclxuLy9Gb250XHJcbiRkZWZhdWx0Rm9udDogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcblxyXG4vL0JvcmRlclxyXG4kZGVmYXVsdEJvcmRlcjogMnB4ICRkZWZhdWx0QmxhY2s7XHJcbi5kZWZhdWx0Ym9yZGVyIHtcclxuICAgIGJvcmRlcjogJGRlZmF1bHRCb3JkZXI7XHJcbn1cclxuXHJcbi5kZWZhdWx0TGlnaHRCbHVlIHtcclxuICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxufVxyXG5cclxuLy9NYXJnaW5cclxuJGRlZmF1bHRNYXJnaW46IDAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4xMDogMTAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4yMDogMjAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4zMDogMzAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW40MDogNDAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW41MDogNTAgYXV0bztcclxuXHJcbi5kZWZhdWx0TWFyZ2luIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMTAge1xyXG4gICAgbWFyZ2luOiAxMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMjAge1xyXG4gICAgbWFyZ2luOiAyMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMzAge1xyXG4gICAgbWFyZ2luOiAzMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luNDAge1xyXG4gICAgbWFyZ2luOiA0MCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luNTAge1xyXG4gICAgbWFyZ2luOiA1MCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBJTVBPUlQgVkFSSUFCTEVTXHJcbkBpbXBvcnQgXCIuLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjFkZWcsICMzRDRFODEgMCUsICM1NzUzQzkgNDglLCAjNkU3RkYzIDEwMCUpO1xyXG4gICAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDNweCBibGFjaztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBhOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogJGRlZmF1bHRMaWdodEJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRkZWZhdWx0TGlnaHRCbHVlO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5hLmRlZmF1bHRMaWdodEJsdWU6aG92ZXIsIGEuZGVmYXVsdExpZ2h0Qmx1ZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGRlZmF1bHRMaWdodEJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ29XaGl0ZSB7XHJcbiAgICBjb2xvcjogJGRlZmF1bHRXaGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAzcHggYmxhY2s7XHJcbn1cclxuLmxvZ29CbHVlIHtcclxuICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIHVsLm9uZS1uYXZiYXIge1xyXG4vLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwRjA1MDE7XHJcbi8vIH1cclxuXHJcbi8vIHVsLm9uZS1uYXZiYXIgbGkge2Zsb2F0OiBsZWZ0O31cclxuXHJcbi8vIHVsLm9uZS1uYXZiYXIgbGkgYSB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gdWwub25lLW5hdmJhciAgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICM1RDE0NUY7fVxyXG5cclxuLy8gdWwub25lLW5hdmJhciAgbGkgYS5hY3RpdmUge2JhY2tncm91bmQtY29sb3I6ICNEMTAwMDA7fVxyXG5cclxuLy8gIC5vbmUtaGVhZGVyIHtcclxuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCNUQzO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgcGFkZGluZzogMTAwcHg7XHJcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyB1bCBsaSBhLCAub25lLW5hdmJhciB7XHJcbi8vICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIGxpIGEsIC5vbmUtZHJvcGJ0biB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjb2xvcjogIzAwMDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gfVxyXG4vLyBsaSBhOmhvdmVyLCAub25lLWRyb3Bkb3duOmhvdmVyIC5vbmUtZHJvcGJ0biB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbi8vIH1cclxuXHJcbi8vIGxpLm9uZS1kcm9wZG93biB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5vbmUtZHJvcGRvd24tY29udGVudCB7XHJcbi8vICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4vLyB9XHJcblxyXG4vLyAub25lLWRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbi8vICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm9uZS1kcm9wZG93bi1jb250ZW50IGEge1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4vLyAub25lLWRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm9uZS1kcm9wZG93bjpob3ZlciAub25lLWRyb3Bkb3duLWNvbnRlbnQge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vICAgIC5mb3JtLWNvbnRyb2wge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7IFxyXG4vLyAgIH1cclxuXHJcbi8vICNjb250YWN0IHtcclxuLy8gICBwYWRkaW5nOiAxODBweCAxNXB4O1xyXG5cclxuLy8gfVxyXG4vLyAgICBidXR0b24ge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGQkMyODsgXHJcbi8vICAgICBjb2xvcjogd2hpdGU7IFxyXG4vLyAgICAgcGFkZGluZzogMTZweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbi8vIH1cclxuXHJcbi8vICBidXR0b246aG92ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOEUwMDsgXHJcbi8vICAgfVxyXG5cclxuLy8gLm9uZS1uYXZiYXIge1xyXG4vLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubmF2YmFyLWJvZHl7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuXHJcbi8vICAgICAubmF2YmFyLWZyYW1lIHtcclxuLy8gICAgICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcblxyXG4vLyAgICAgICAgIC5uYXZiYXItaXRlbSB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGNhbGMod2lkdGggLyAxMCk7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4vLyAgICAgICAgICAgICAubmF2YmFyLWl0ZW0tdGV4dCB7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdFdoaXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAubmF2YmFyLWl0ZW06aG92ZXIge1xyXG4vLyAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgICAgIC5uYXZiYXItaXRlbS10ZXh0IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICAubmF2YmFyLWl0ZW06YWN0aXZlIDo6YWZ0ZXIge1xyXG4vLyAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbi8vICAgICAgICAgICAgIC5uYXZiYXItaXRlbS10ZXh0IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICAubmF2YmFyLXNlcGVyYXRvciAge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDphdXRvO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGVmYXVsdFdoaXRlO1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogTE9HTyAqL1xyXG4vLyAgICAgLmxvZ28ge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlOyAgICBcclxuLy8gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuLy8gICAgICAgICBtYXJnaW46IDEwcHggMjBweCA1cHggMHB4O1xyXG4gICAgXHJcbi8vICAgICAgICAgLnByb2plY3Qge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHRXaGl0ZTtcclxuLy8gICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zZW5zZWkge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHRMaWdodEJsdWU7XHJcbi8vICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./frontend/src/app/app.component.ts":
/*!*******************************************!*\
  !*** ./frontend/src/app/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./frontend/src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.hideSidebar = ['/register', '/login'];
        // Dropdown Menu Variables
        this.isCollapsed = true;
        this.dropActive = false;
        this.activeSession = '';
        this.route = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getUser();
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (navEnd) {
            _this.route = navEnd.urlAfterRedirects;
            switch (navEnd.urlAfterRedirects) {
                case '/session-one':
                    _this.dropActive = true;
                    _this.activeSession = ': One';
                    break;
                case '/session-two':
                    _this.dropActive = true;
                    _this.activeSession = ': Two';
                    break;
                case '/session-three':
                    _this.dropActive = true;
                    _this.activeSession = ': Three';
                    break;
                case '/case-study':
                    _this.dropActive = true;
                    _this.activeSession = ': Case Study';
                    break;
                default:
                    _this.dropActive = false;
                    _this.activeSession = '';
                    break;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "routerLinkActiveOptions", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./frontend/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./frontend/src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./frontend/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./frontend/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./frontend/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./frontend/src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./frontend/src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./frontend/src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./frontend/src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./frontend/src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./frontend/src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_session_template_session_one_session_one_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/session-template/session-one/session-one.component */ "./frontend/src/app/components/session-template/session-one/session-one.component.ts");
/* harmony import */ var _components_session_template_session_two_session_two_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/session-template/session-two/session-two.component */ "./frontend/src/app/components/session-template/session-two/session-two.component.ts");
/* harmony import */ var _components_session_template_session_three_session_three_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/session-template/session-three/session-three.component */ "./frontend/src/app/components/session-template/session-three/session-three.component.ts");
/* harmony import */ var _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/case-study/case-study.component */ "./frontend/src/app/components/case-study/case-study.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./frontend/src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/material.module */ "./frontend/src/app/modules/material.module.ts");
/* harmony import */ var _components_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/lesson/lesson.component */ "./frontend/src/app/components/lesson/lesson.component.ts");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/activity/activity.component */ "./frontend/src/app/components/activity/activity.component.ts");
/* harmony import */ var _components_activity_list_maker_list_maker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/activity/list-maker/list-maker.component */ "./frontend/src/app/components/activity/list-maker/list-maker.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__["LessonComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_21__["ActivityComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"],
                _components_session_template_session_one_session_one_component__WEBPACK_IMPORTED_MODULE_14__["SessionOneComponent"],
                _components_session_template_session_two_session_two_component__WEBPACK_IMPORTED_MODULE_15__["SessionTwoComponent"],
                _components_session_template_session_three_session_three_component__WEBPACK_IMPORTED_MODULE_16__["SessionThreeComponent"],
                _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_17__["CaseStudyComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"],
                _components_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__["LessonComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_21__["ActivityComponent"],
                _components_activity_list_maker_list_maker_component__WEBPACK_IMPORTED_MODULE_22__["ListMakerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                _modules_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./frontend/src/app/components/activity/activity.component.html":
/*!**********************************************************************!*\
  !*** ./frontend/src/app/components/activity/activity.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-header class=\"m-3\">\r\n  <h1 class=\"center text-capitalize\">{{ activity$.title }}</h1>\r\n</div>\r\n<div mat-dialog-content class=\"h-100 activity-component\">\r\n  <mat-card class=\"activity-card-content\">\r\n    <!-- <mat-card-header>\r\n        <mat-card-title>Quiz Time! - {{ mcqName }}</mat-card-title>\r\n      </mat-card-header> -->\r\n    <mat-card-content class=\"activity-component\">\r\n      <!-- <app-activity *ngIf=\"activity$.type == 'listMaker'\"></app-activity> -->\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div class=\"center d-flex justify-content-center m-3\">\r\n  <button class=\"btn btn-lg btn-outline-success\" (click)=\"onSubmit();\">Continue</button>\r\n  <h4 class=\"text-monospace ml-5\">OR Press Enter to Continue</h4>\r\n</div>\r\n<div mat-dialog-actions class=\"d-flex justify-content-center m-1\">\r\n  <button class=\"btn-outline-danger col-11\" mat-button [mat-dialog-close]=\"data.lessonComplete\" cdkFocusInitial>Close\r\n    Activity</button>\r\n</div>\r\n"

/***/ }),

/***/ "./frontend/src/app/components/activity/activity.component.scss":
/*!**********************************************************************!*\
  !*** ./frontend/src/app/components/activity/activity.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content.activity-component {\n  min-height: 68vh !important;\n  min-width: 68vw;\n  margin-top: 0rem;\n  padding: 0.5rem;\n  margin: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9hY3Rpdml0eS9DOlxcR2l0XFxwcm9qZWN0LXNlbnNlaS9mcm9udGVuZFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjdGl2aXR5XFxhY3Rpdml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQuYWN0aXZpdHktY29tcG9uZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDY4dmggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNjh2dztcclxuICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./frontend/src/app/components/activity/activity.component.ts":
/*!********************************************************************!*\
  !*** ./frontend/src/app/components/activity/activity.component.ts ***!
  \********************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_session_activity_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/session/activity/activity */ "./frontend/src/app/models/session/activity/activity.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.activity$ = new src_app_models_session_activity_activity__WEBPACK_IMPORTED_MODULE_2__["Activity"](this.data.selectedActivity);
    }
    ActivityComponent.prototype.ngOnInit = function () { };
    ActivityComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ActivityComponent.prototype.exitLesson = function () {
        this.activity$ = null;
        this.dialogRef.close();
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./frontend/src/app/components/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./frontend/src/app/components/activity/activity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], src_app_models_session_activity_activity__WEBPACK_IMPORTED_MODULE_2__["Activity"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/activity/list-maker/list-maker.component.html":
/*!***********************************************************************************!*\
  !*** ./frontend/src/app/components/activity/list-maker/list-maker.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list-maker works!\n</p>\n"

/***/ }),

/***/ "./frontend/src/app/components/activity/list-maker/list-maker.component.scss":
/*!***********************************************************************************!*\
  !*** ./frontend/src/app/components/activity/list-maker/list-maker.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpdHkvbGlzdC1tYWtlci9saXN0LW1ha2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./frontend/src/app/components/activity/list-maker/list-maker.component.ts":
/*!*********************************************************************************!*\
  !*** ./frontend/src/app/components/activity/list-maker/list-maker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListMakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMakerComponent", function() { return ListMakerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListMakerComponent = /** @class */ (function () {
    function ListMakerComponent() {
    }
    ListMakerComponent.prototype.ngOnInit = function () {
    };
    ListMakerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-maker',
            template: __webpack_require__(/*! ./list-maker.component.html */ "./frontend/src/app/components/activity/list-maker/list-maker.component.html"),
            styles: [__webpack_require__(/*! ./list-maker.component.scss */ "./frontend/src/app/components/activity/list-maker/list-maker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListMakerComponent);
    return ListMakerComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/case-study/case-study.component.html":
/*!**************************************************************************!*\
  !*** ./frontend/src/app/components/case-study/case-study.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n\r\n  <label class=\"title-label\">Case <span class=\"defaultLightBlue\">Study</span></label>\r\n  <!-- SESSION1 START -->\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-11 custom-modal mt-sm-3\">\r\n      <div class=\"row\">\r\n        <div class=\"center col-11 mb-5 mt-5 text-justify\">\r\n          <div class=\"row mb-3\">\r\n            <h1 class=\"center pr-5\">\r\n              < PerfoSpace >\r\n            </h1>\r\n          </div>\r\n          <hr class=\"shadow-sm\">\r\n          <div class=\"mb-3\">\r\n            <p class=\"lead\">PerfoSpace is a music and theatre venue management company that was founded in 2003. The company owns and operates a number of venues all over the UK which offer performances to the public i.e. live music concerts and theatrical plays. PerfoSpace employs a large number of staff who work at the various venues run by the firm. The company has as its heart to offer the best possible entertainment experience to the audience. Not only does PerfoSpace offers performances such as theatre plays or music concerts but, as part of their evening out, customers can also have a meal at the venue if they so wish, either before or after the performance. The meals on offer as part of an evening out all operate a standard menu. </p>\r\n\r\n            <p class=\"lead\">To attend an event, customers need to register their personal and payment details with PerfoSpace. They can then select events they are interested in – performances and/or meals – and book tickets for them. The booking will be accepted if there are sufficient tickets available and also if the age rating for the performance is suitable for the registered customers. They have the option to book tickets only for a performance (concert or play), just for a meal or for both on the same evening or on different evenings. The date, start time and end time of these various entertainment elements need to be recorded accurately to allow for proper coordination to offer the best possible choice to the customers. Once they have selected the particular set of events they wish to attend for one or more evenings, the total cost of the booking needs to be calculated. This needs to take into accounts the number of events the customer wishes to attend, the number of tickets he/she wishes to book for each event, the price of a ticket for a particular event and the potential membership discount they may benefit from if they are VIPs, as explained below.</p>\r\n              \r\n            <p class=\"lead\">Customers may get a yearly membership with PerfoSpace, if they so wish, and thus become VIPs. This membership scheme allows VIPs to get a 20% discount on performance tickets and/or meal tickets. Furthermore, VIPs can get allocated a personal member of staff who cares for them during their evenings at any PerfoSpace venues, if they are interested in this service. Membership payments need to be made on a yearly basis and consist of a flat fee which is fixed by PerfoSpace and can vary depending on the years. The date and the status of the membership payment (paid, pending, suspended, etc.) need to be recorded.</p>\r\n              \r\n            <p class=\"lead\">As mentioned earlier, PerfoSpace hosts both theatre plays and concerts. The details of the bands or musical ensembles which play these concerts need to be kept accurately – but not the details of the individual musicians – as fee payment is made to the whole band or group for performing. On the other hand, all the members of the cast of a play need to be registered as separate fee payments are made to each individual member of the cast for each play, as different actors/actresses may be paid differently depending on their involvements. Upon request, some actors, perhaps lead roles or high profile performers, can be assigned a particular member of staff to look after them at the venue and provide for their needs. It is essential for the payments of all fees to performers – bands or individual cast members – to be carefully recorded to ensure that the correct payments are being made to the correct people. </p>\r\n                 \r\n            <p class=\"lead\">You have been hired by PerfoSpace as a consultant to undertake an IT project to support the business processes and needs of the company.</p>\r\n          </div>\r\n          \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- PerfoSpace\r\n\r\nPerfoSpace is a music and theatre venue management company that was founded in 2003. The company owns and operates a number of venues all over the UK which offer performances to the public i.e. live music concerts and theatrical plays. PerfoSpace employs a large number of staff who work at the various venues run by the firm. The company has as its heart to offer the best possible entertainment experience to the audience. Not only does PerfoSpace offers performances such as theatre plays or music concerts but, as part of their evening out, customers can also have a meal at the venue if they so wish, either before or after the performance. The meals on offer as part of an evening out all operate a standard menu. \r\n\r\nTo attend an event, customers need to register their personal and payment details with PerfoSpace. They can then select events they are interested in – performances and/or meals – and book tickets for them. The booking will be accepted if there are sufficient tickets available and also if the age rating for the performance is suitable for the registered customers. They have the option to book tickets only for a performance (concert or play), just for a meal or for both on the same evening or on different evenings. The date, start time and end time of these various entertainment elements need to be recorded accurately to allow for proper coordination to offer the best possible choice to the customers. Once they have selected the particular set of events they wish to attend for one or more evenings, the total cost of the booking needs to be calculated. This needs to take into accounts the number of events the customer wishes to attend, the number of tickets he/she wishes to book for each event, the price of a ticket for a particular event and the potential membership discount they may benefit from if they are VIPs, as explained below.\r\n\r\nCustomers may get a yearly membership with PerfoSpace, if they so wish, and thus become VIPs. This membership scheme allows VIPs to get a 20% discount on performance tickets and/or meal tickets. Furthermore, VIPs can get allocated a personal member of staff who cares for them during their evenings at any PerfoSpace venues, if they are interested in this service. Membership payments need to be made on a yearly basis and consist of a flat fee which is fixed by PerfoSpace and can vary depending on the years. The date and the status of the membership payment (paid, pending, suspended, etc.) need to be recorded.\r\n\r\nAs mentioned earlier, PerfoSpace hosts both theatre plays and concerts. The details of the bands or musical ensembles which play these concerts need to be kept accurately – but not the details of the individual musicians – as fee payment is made to the whole band or group for performing. On the other hand, all the members of the cast of a play need to be registered as separate fee payments are made to each individual member of the cast for each play, as different actors/actresses may be paid differently depending on their involvements. Upon request, some actors, perhaps lead roles or high profile performers, can be assigned a particular member of staff to look after them at the venue and provide for their needs. It is essential for the payments of all fees to performers – bands or individual cast members – to be carefully recorded to ensure that the correct payments are being made to the correct people. \r\n   \r\nYou have been hired by PerfoSpace as a consultant to undertake an IT project to support the business processes and needs of the company. -->"

/***/ }),

/***/ "./frontend/src/app/components/case-study/case-study.component.scss":
/*!**************************************************************************!*\
  !*** ./frontend/src/app/components/case-study/case-study.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2FzZS1zdHVkeS9jYXNlLXN0dWR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./frontend/src/app/components/case-study/case-study.component.ts":
/*!************************************************************************!*\
  !*** ./frontend/src/app/components/case-study/case-study.component.ts ***!
  \************************************************************************/
/*! exports provided: CaseStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function() { return CaseStudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CaseStudyComponent = /** @class */ (function () {
    function CaseStudyComponent() {
    }
    CaseStudyComponent.prototype.ngOnInit = function () {
    };
    CaseStudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-case-study',
            template: __webpack_require__(/*! ./case-study.component.html */ "./frontend/src/app/components/case-study/case-study.component.html"),
            styles: [__webpack_require__(/*! ./case-study.component.scss */ "./frontend/src/app/components/case-study/case-study.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CaseStudyComponent);
    return CaseStudyComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/home/home.component.html":
/*!**************************************************************!*\
  !*** ./frontend/src/app/components/home/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\" style=\"width:99%\">\r\n\r\n  <label class=\"title-label\">Agile <span class=\"defaultLightBlue\">Crash</span> Course <span\r\n      class=\"defaultLightBlue\">Content</span></label>\r\n\r\n  <!-- SESSION 1 START -->\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-11 custom-modal mt-sm-3\">\r\n      <div class=\"center mb-5 mt-5 text-justify\" style=\"width: 95%;\">\r\n        <div class=\"row mb-3 mr-3\">\r\n          <p class=\"lead home-paragraph\">\r\n            This course is divided into 3 Sessions. In these sessions you will cover\r\n            all the key components of project development using the Scrum Methodology.\r\n            These sessions are designed to give you a strong understanding of how scrum\r\n            is implemented in the real world. The sessions will be driven by a\r\n            pre-defined case study which provides a good example of a real project\r\n            scenario.\r\n          </p>\r\n        </div>\r\n        <hr class=\"shadow-sm\">\r\n        <br>\r\n        <tabset>\r\n          <tab heading=\"< Session 1 >\" class=\"active ml-4 m4-5 tab-pane\">\r\n            <!-- <div class=\"row mb-3\">\r\n                  <h1 class=\"center pr-5\">\r\n                    < Session 1>\r\n                  </h1>\r\n                </div>\r\n                <hr class=\"shadow-sm\"> -->\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Introduction –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">The course will begin with an introduction into what this course is\r\n                about, how it will be taught and what you will learn from it. </p>\r\n\r\n              <p class=\"lead home-paragraph\">An Introduction into Session 1 and Your Learning Objectives</p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Agile –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">A brief history about Agile</p>\r\n              <p class=\"lead home-paragraph pl-4\">- What methodologies were used before Agile existed </p>\r\n              <p class=\"lead home-paragraph pl-4\">- What the Agile movement is </p>\r\n              <p class=\"lead home-paragraph pl-4\">- How Agile is Today </p>\r\n              <p class=\"lead home-paragraph\"> Introduction to the Agile Manifesto </p>\r\n              <p class=\"lead home-paragraph pl-4\">- What the core principles and values mean </p>\r\n\r\n              <p class=\"lead home-paragraph\"> The Agile Effect </p>\r\n              <p class=\"lead home-paragraph pl-4\">- What implementing Agile can do </p>\r\n              <p class=\"lead home-paragraph\"> A Quiz regarding Agile</p>\r\n              <p class=\"lead home-paragraph pl-4\">- Scoring enough points will enable you to continue through the\r\n                course </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">Introducing Agile Frameworks</p>\r\n              <p class=\"lead home-paragraph pl-4\">- Explaining what Agile Frameworks are</p>\r\n              <p class=\"lead home-paragraph pl-4\">- The most commonly used Frameworks</p>\r\n              <p class=\"lead home-paragraph pl-4\">- Introducing Scrum</p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                A brief History on Scrum\r\n                - How Scrum came to be\r\n                - How Scrum is used today\r\n              </p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                What Scrum Values\r\n                - What the Scrum Guide is\r\n                - What Scrums principles and values are\r\n              </p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                Scrums Framework\r\n                - What Sprints are and what they consist of\r\n                - How work is measure in Scrum\r\n                - What the Scrum Roles are and what they mean\r\n                - What the Scrum Events are\r\n                - What other Resources Scrum utipses\r\n              </p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                An Average Scrum daily\r\n                - What each role does on a day-to-day basis\r\n              </p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                A Quiz regarding Scrum\r\n                - Scoring enough points will enable you to continue through the course\r\n              </p>\r\n\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Case Study –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">\r\n                Introduction to the Case Study </p>\r\n              <p class=\"lead home-paragraph pl-4\">- What the case study is about</p>\r\n              <p class=\"lead home-paragraph pl-4\">- What your position is in the case study</p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                What you need to do</p>\r\n              <p class=\"lead home-paragraph pl-4\">- Based on the Case Study and Your Position in the Case Study you\r\n                will be\r\n                required to create a pst of requirements which will be known as the\r\n                Product Backlog</p>\r\n              <p class=\"lead home-paragraph pl-4\">- A Submission of the Product Backlog will allow you to continue to\r\n                the\r\n                next stage</p>\r\n\r\n              <p class=\"lead home-paragraph\">\r\n                A Quiz regarding the Case Study</p>\r\n              <p class=\"lead home-paragraph pl-4\">- Scoring enough points will enable you to continue through the\r\n                course</p>\r\n\r\n              <div class=\"d-flex justify-content-center m-5\">\r\n                <button mat-raised-button routerLink=\"/session-one\">Go To Session 1</button>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n\r\n          <tab heading=\"< Session Two >\" class=\"active col-11 ml-4 tab-pane\">\r\n            <!-- <div class=\"row mb-3\">\r\n                      <h1 class=\"center pr-5\">\r\n                        < Session 2>\r\n                      </h1>\r\n                    </div>\r\n                    <hr class=\"shadow-sm\"> -->\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Introduction –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">An Introduction into Session 2 and what you will complete by the end of\r\n                the Session\r\n              </p>\r\n              <p class=\"lead home-paragraph\">How the Scrum roles will be utipsed throughout the Session\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Sprint Planning Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - Based on the Product Backlog You created in Session 1, you will be asked\r\n                to analyse, prioritise and define a pst of requirements to be implemented\r\n                during the first Sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be following Scrum methods in order to gather these requirements\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit these requirements in order to continue\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Daily Scrum Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be conducting a daily scrum meeting\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will base the content of this meeting on the tasks you have been\r\n                assigned to complete on this sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit what you discussed during the meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Product Design\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - This stage is the official start of your First Sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be designing some Diagram based on the context of the case study\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then be required to submit the diagram(‘s) in order to continue\r\n                to the next stage\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Product Development\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will begin the first stage of development for the project based on\r\n                the requirements you gathered\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - A submission will be required in order to continue to the next stage\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Sprint Review &amp; Retrospective Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will complete and informal review of the progress made during the\r\n                sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then document an assessment of the quapty of the sprint based\r\n                on the requirements, assessing whether the assigned tasks were detailed\r\n                enough, if there are any new requirements that need to be made and any\r\n                other issues faces during the sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit a document in order to conclude the first Sprint\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                A Quiz regarding Session 2\r\n              </p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center m-5\">\r\n              <button mat-raised-button routerLink=\"/session-two\">Go To Session 2</button>\r\n            </div>\r\n          </tab>\r\n\r\n          <tab heading=\"< Session Three >\" class=\"active col-11 ml-4 tab-pane\">\r\n            <!-- <div class=\"row mb-3\">\r\n                      <h1 class=\"center pr-5\">\r\n                        < Session 3>\r\n                      </h1>\r\n                    </div>\r\n                    <hr class=\"shadow-sm\"> -->\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Introduction –\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph\">An Introduction into Session 3 and what you will complete by the end of\r\n                the Session\r\n              </p>\r\n              <p class=\"lead home-paragraph\">How Session 2 will affect the structure of Session 3\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - How the Scrum roles will be utipsed throughout the Session\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Sprint Planning Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - Based on the Product Backlog You created in Session 1 and the\r\n                Review/Retrospective Meeting Notes, you will be asked to analyse,\r\n                prioritise and define a pst of requirements to be implemented during the\r\n                second Sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be following Scrum methods in order to gather these requirements\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit these requirements in order to continue\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Daily Scrum Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be conducting a daily scrum meeting\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will base the content of this meeting on the tasks you completed on\r\n                the last sprint followed by the tasks you have been assigned to complete\r\n                this sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit what you discussed during the meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Product Design\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - This stage is the official start of your First Sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will be designing some Diagram based on the context of the case study\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then be required to submit the diagram(‘s) in order to continue\r\n                to the next stage\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Product Development\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will begin the first stage of development for the project based on\r\n                the requirements you gathered\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - A submission will be required in order to continue to the next stage\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                Scrum Event – Sprint Review &amp; Retrospective Meeting\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will complete and informal review of the progress made during the\r\n                sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then document an assessment of the quapty of the sprint based\r\n                on the requirements, assessing whether the assigned tasks were detailed\r\n                enough, if there are any new requirements that need to be made and any\r\n                other issues faces during the sprint\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - You will then submit a document in order to conclude the first Sprint\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-3 defaultLightBlue\">\r\n                A Quiz regarding Session 3\r\n              </p>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <p class=\"mb-1 defaultLightBlue home-subheading\">\r\n                A Review of the Course\r\n              </p>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - What you have covered in the course\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - What you haven’t covered in the course\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - Your results in each quiz\r\n              </p>\r\n              <p class=\"lead home-paragraph home-paragraph-indent\">\r\n                - A review of all the documents you created\r\n              </p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center mt-5 mb-5\">\r\n              <button mat-raised-button routerLink=\"/session-three\">Go To Session 3</button>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n\r\n      <br>\r\n      <hr class=\"shadow-sm mb-5\">\r\n      <p class=\"lead home-paragraph text-danger\">\r\n        ** Documents created during the sprint will be visible once the Sprint is\r\n        completed\r\n      </p>\r\n      <p class=\"lead home-paragraph text-danger\">\r\n        ** Throughout the Process you will be provided examples of how each\r\n        required document should be structured\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./frontend/src/app/components/home/home.component.scss":
/*!**************************************************************!*\
  !*** ./frontend/src/app/components/home/home.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".defaultborder {\n  border: 2px #000000; }\n\n.defaultLightBlue {\n  color: #3d9eb3; }\n\n.defaultMargin {\n  margin: 0 auto; }\n\n.defaultMargin10 {\n  margin: 10 auto; }\n\n.defaultMargin20 {\n  margin: 20 auto; }\n\n.defaultMargin30 {\n  margin: 30 auto; }\n\n.defaultMargin40 {\n  margin: 40 auto; }\n\n.defaultMargin50 {\n  margin: 50 auto; }\n\n.mat-raised-button {\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #3d9eb3; }\n\n.home-subheading {\n  font-size: 1.6em;\n  margin-left: 15px; }\n\n.home-paragraph {\n  font-size: 1.4em;\n  margin-left: 20px; }\n\n.home-paragraph-indent {\n  font-size: 1.4em;\n  margin-left: 30px; }\n\n.nav {\n  margin-bottom: 1.5rem !important; }\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n  margin: 0 auto; }\n\n.nav-tabs .nav-item a {\n    color: black !important; }\n\n.nav-tabs .nav-link {\n  border-radius: 5px;\n  color: black !important; }\n\n.nav-tabs .nav-link.active {\n    box-shadow: 0px 0px 3px black;\n    background-color: transparent !important;\n    border-color: unset !important; }\n\n.nav-tabs .nav-link:focus {\n    box-shadow: 0px 0px 3px black;\n    background-color: transparent !important;\n    border-color: unset !important; }\n\n.nav-tabs .nav-link:hover {\n    box-shadow: 0px 0px 2px black;\n    background-color: transparent !important;\n    border-color: unset !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvQzpcXEdpdFxccHJvamVjdC1zZW5zZWkvZnJvbnRlbmRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNJLG1CQXRCa0IsRUFBQTs7QUF5QnRCO0VBQ0ksY0Fac0IsRUFBQTs7QUF1QjFCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FDcERqQjtFQUNFLGdDQUFnQztFQUNoQyx5QkRXc0IsRUFBQTs7QUNQMUI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFJbEM7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUZoQjtJQUlJLHVCQUF1QixFQUFBOztBQUkzQjtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFGekI7SUFJSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0lBQ3hDLDhCQUE4QixFQUFBOztBQU5sQztJQVNJLDZCQUE2QjtJQUM3Qix3Q0FBd0M7SUFDeEMsOEJBQThCLEVBQUE7O0FBWGxDO0lBZUksNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4Qyw4QkFBOEIsRUFBQSIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db2xvdXJzXHJcbiRkZWZhdWx0RGFya0dyZXk6ICAjNTY1NjU2O1xyXG4kZGVmYXVsdEJsYWNrOiAjMDAwMDAwO1xyXG4kZGVmYXVsdExpZ2h0R3JleTogI0U1RTVFNTtcclxuXHJcblxyXG4vL0ltYWdlc1xyXG4vLyAka2F0YW5hOiB1cmwoLi9pY29ucy9rYXRhbmEuc3ZnKTtcclxuLy8gJGxvY2s6IHVybCguL2ljb25zL2ljb25zOC1sb2NrLTUwLnBuZyk7XHJcbi8vICRraW1vbm86IHVybCguL2ljb25zL2ljb25zOC1raW1vbm8tNTAucG5nKTtcclxuXHJcbi8vQmFja2dyb3VuZCAgICBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpOyAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWQ2ZWEwIDAlLCAjZWM4YzY5IDEwMCUpO1xyXG4kZGVmYXVsdEJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjM0Q0RTgxIDAlLCAjNTc1M0M5IDQ4JSwgIzZFN0ZGMyAxMDAlKTtcclxuXHJcbi8vTG9nb1xyXG4kZGVmYXVsdFdoaXRlOiAjZjVmNWY1O1xyXG4kZGVmYXVsdExpZ2h0Qmx1ZTogIzNkOWViMztcclxuXHJcbi8vRm9udFxyXG4kZGVmYXVsdEZvbnQ6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG5cclxuLy9Cb3JkZXJcclxuJGRlZmF1bHRCb3JkZXI6IDJweCAkZGVmYXVsdEJsYWNrO1xyXG4uZGVmYXVsdGJvcmRlciB7XHJcbiAgICBib3JkZXI6ICRkZWZhdWx0Qm9yZGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdExpZ2h0Qmx1ZSB7XHJcbiAgICBjb2xvcjogJGRlZmF1bHRMaWdodEJsdWU7XHJcbn1cclxuXHJcbi8vTWFyZ2luXHJcbiRkZWZhdWx0TWFyZ2luOiAwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMTA6IDEwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMjA6IDIwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMzA6IDMwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luNDA6IDQwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luNTA6IDUwIGF1dG87XHJcblxyXG4uZGVmYXVsdE1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjEwIHtcclxuICAgIG1hcmdpbjogMTAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjIwIHtcclxuICAgIG1hcmdpbjogMjAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjMwIHtcclxuICAgIG1hcmdpbjogMzAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjQwIHtcclxuICAgIG1hcmdpbjogNDAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjUwIHtcclxuICAgIG1hcmdpbjogNTAgYXV0bztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gSU1QT1JUIFZBUklBQkxFU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxufVxyXG5cclxuXHJcbi5ob21lLXN1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ob21lLXBhcmFncmFwaCB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmhvbWUtcGFyYWdyYXBoLWluZGVudCB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4ubmF2e1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICYuYWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./frontend/src/app/components/home/home.component.ts":
/*!************************************************************!*\
  !*** ./frontend/src/app/components/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./frontend/src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./frontend/src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/lesson/lesson.component.html":
/*!******************************************************************!*\
  !*** ./frontend/src/app/components/lesson/lesson.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-header class=\"m-3\">\n  <h1 class=\"center text-capitalize\">{{ lesson$.title }}</h1>\n</div>\n<div mat-dialog-content class=\"h-100 lesson-component\">\n  <mat-card class=\"session-card-content lesson-component mat-card\">\n    <!-- <mat-card-header>\n        <mat-card-title>Quiz Time! - {{ mcqName }}</mat-card-title>\n      </mat-card-header> -->\n    <mat-card-content class=\"lesson-component\">\n      <h2>{{ lesson$.content }}</h2>\n    </mat-card-content>\n  </mat-card>\n</div>\n<div class=\"center d-flex justify-content-center m-3\">\n  <button class=\"btn btn-lg btn-outline-success\" (click)=\"onSubmit();\">Continue</button>\n  <h4 class=\"text-monospace ml-5\">OR Press Enter to Continue</h4>\n</div>\n<div mat-dialog-actions class=\"d-flex justify-content-center m-1\">\n  <button class=\"btn-outline-danger col-11\" mat-button [mat-dialog-close]=\"data.lessonComplete\" cdkFocusInitial>Close\n    Lesson</button>\n</div>\n"

/***/ }),

/***/ "./frontend/src/app/components/lesson/lesson.component.scss":
/*!******************************************************************!*\
  !*** ./frontend/src/app/components/lesson/lesson.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lesson-content-card {\n  margin: 5% 2.5% 5% 2.5%;\n  min-width: 90%;\n  width: 100%;\n  flex-basis: 45%; }\n\n.mat-dialog-content.lesson-component {\n  min-height: 69vh !important;\n  min-width: 80vw;\n  margin-top: 0rem;\n  width: 50vw;\n  margin: 0 -0.5rem;\n  padding: 1.5rem; }\n\n.mat-dialog-container {\n  max-width: 80vw !important;\n  margin: 0 auto;\n  margin-top: 5rem;\n  min-width: 80vw !important;\n  max-height: 91vh !important;\n  padding: 5px !important;\n  border-radius: 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sZXNzb24vQzpcXEdpdFxccHJvamVjdC1zZW5zZWkvZnJvbnRlbmRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxsZXNzb25cXGxlc3Nvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2Qiw4QkFBOEIsRUFBQSIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGVzc29uL2xlc3Nvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXNzb24tY29udGVudC1jYXJkIHtcclxuICAgIG1hcmdpbjogNSUgMi41JSA1JSAyLjUlO1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudC5sZXNzb24tY29tcG9uZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDY5dmggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogODB2dztcclxuICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIG1hcmdpbjogMCAtMC41cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBtaW4td2lkdGg6IDgwdncgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDkxdmggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./frontend/src/app/components/lesson/lesson.component.ts":
/*!****************************************************************!*\
  !*** ./frontend/src/app/components/lesson/lesson.component.ts ***!
  \****************************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_models_session_lesson_lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/session/lesson/lesson */ "./frontend/src/app/models/session/lesson/lesson.ts");




var LessonComponent = /** @class */ (function () {
    function LessonComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.lesson$ = new src_app_models_session_lesson_lesson__WEBPACK_IMPORTED_MODULE_3__["Lesson"](this.data.selectedLesson);
    }
    LessonComponent.prototype.ngOnInit = function () { };
    LessonComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LessonComponent.prototype.exitLesson = function () {
        this.lesson$ = null;
        this.dialogRef.close();
    };
    LessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson',
            template: __webpack_require__(/*! ./lesson.component.html */ "./frontend/src/app/components/lesson/lesson.component.html"),
            styles: [__webpack_require__(/*! ./lesson.component.scss */ "./frontend/src/app/components/lesson/lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_models_session_lesson_lesson__WEBPACK_IMPORTED_MODULE_3__["Lesson"]])
    ], LessonComponent);
    return LessonComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/login/login.component.html":
/*!****************************************************************!*\
  !*** ./frontend/src/app/components/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <form (submit)=\"login()\">\r\n    <label class=\"title-label\">Account <span class=\"defaultLightBlue\">Login</span></label>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"center col-12 col-lg-7 col-md-9 col-sm-12 col-xl-6\">\r\n        <div class=\"custom-modal\">\r\n          <div class=\"row\">\r\n            <div class=\"center col-10 col-lg-10 col-md-10 col-sm-10 col-xl-10\" style=\"text-align:start !important\">\r\n              <div class=\"login-input-container\">\r\n                <mat-form-field class=\"login-input-block\">\r\n                  <input matInput class=\"login-input-field\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\">\r\n                  <mat-placeholder for=\"username\" class=\"login-label\">Username</mat-placeholder>\r\n                  <span class=\"login-input-icon-clear\" *ngIf=\"user.username\" matSuffix mat-icon-button\r\n                    (click)=\"user.username=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"login-input-block\">\r\n                  <input matInput class=\"login-input-field\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\">\r\n                  <mat-placeholder for=\"password\" class=\"login-label\">Password</mat-placeholder>\r\n                  <span class=\"login-input-icon-clear\" *ngIf=\"user.password\" matSuffix mat-icon-button\r\n                    (click)=\"user.password=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-1 ml-5 mr-5 mt-4 row\">\r\n            <div class=\"center col-10\">\r\n              <div class=\"login-input-submit\">\r\n                <div class=\"row\">\r\n                  <div class=\"center\">\r\n                    <button type=\"submit\" class=\"btn btn-default submit-button\">Sign In</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-4 row\">\r\n                  <div class=\"center\">\r\n                    <span class=\"login-login-text mr-3\">Don't have an Account?</span>\r\n                    <a class=\"register-button\" routerLink=\"/register\">Sign Up</a> </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./frontend/src/app/components/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./frontend/src/app/components/login/login.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".defaultborder {\n  border: 2px #000000; }\n\n.defaultLightBlue {\n  color: #3d9eb3; }\n\n.defaultMargin {\n  margin: 0 auto; }\n\n.defaultMargin10 {\n  margin: 10 auto; }\n\n.defaultMargin20 {\n  margin: 20 auto; }\n\n.defaultMargin30 {\n  margin: 30 auto; }\n\n.defaultMargin40 {\n  margin: 40 auto; }\n\n.defaultMargin50 {\n  margin: 50 auto; }\n\n.login-input-container {\n  position: relative;\n  top: 20px;\n  /* Username & Password */ }\n\n.login-input-container .mat-input-element {\n    height: 50px; }\n\n.login-input-container .mat-input-element .mat-focused .login-label {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 30px;\n      margin: 0 auto;\n      color: #E5E5E5;\n      letter-spacing: 0.1em;\n      background: #565656; }\n\n.login-input-container .login-input-block {\n    width: 70%;\n    margin: 5% 15%; }\n\n.login-input-container .login-input-block .login-label {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 25px;\n      margin: 0 auto;\n      color: #565656;\n      letter-spacing: 0.1em; }\n\n.login-input-container .login-input-block .login-input-field {\n      width: 100%; }\n\n.login-input-container .login-input-block .mat-input-element {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 20px;\n      margin: 10px 0 -10px 15px; }\n\n.login-input-container .login-input-block .mat-form-field-suffix {\n      font-size: 20px;\n      color: #565656; }\n\n.login-input-container .login-input-block .mat-form-field-underline {\n      background-color: #565656; }\n\n.login-input-container .login-input-block .mat-form-field-underline::after {\n        background-color: #565656; }\n\n.login-input-submit {\n  text-align: center;\n  /* Submit Button */\n  /* Register Text & Button */ }\n\n.login-input-submit .submit-button {\n    width: 130px;\n    height: 40px;\n    background: #516374;\n    box-sizing: border-box;\n    border-radius: 15px;\n    font-family: \"righteous\", cursive;\n    font-style: normal;\n    line-height: normal;\n    font-size: 20px;\n    text-align: center;\n    color: #fff;\n    letter-spacing: 0.1em;\n    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25); }\n\n.login-input-submit .login-login-text {\n    font-size: 13px; }\n\n.login-input-submit .register-button {\n    width: 115px;\n    height: 35px;\n    font-family: \"Righteous\", cursive;\n    font-style: normal;\n    font-weight: normal;\n    line-height: unset;\n    font-size: 15px;\n    text-align: center;\n    color: #3d9eb3;\n    letter-spacing: 0.1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcR2l0XFxwcm9qZWN0LXNlbnNlaS9mcm9udGVuZFxcc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcR2l0XFxwcm9qZWN0LXNlbnNlaS9mcm9udGVuZFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkE7RUFDSSxtQkF0QmtCLEVBQUE7O0FBeUJ0QjtFQUNJLGNBWnNCLEVBQUE7O0FBdUIxQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQ3BEakI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQWtCVCx3QkFBQSxFQUF5Qjs7QUFwQjNCO0lBS00sWUFBWSxFQUFBOztBQUxsQjtNQVFRLGlDRFF3QjtNQ1B4QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsY0RnQlk7TUNmWixjRGRnQjtNQ2VoQixxQkFBcUI7TUFDckIsbUJEbEJnQixFQUFBOztBQ0V4QjtJQXNCSSxVQUFVO0lBQ1YsY0FBYyxFQUFBOztBQXZCbEI7TUEwQlEsaUNBQWlDO01BQ2pDLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixjREZZO01DR1osY0RsQ2dCO01DbUNoQixxQkFBcUIsRUFBQTs7QUFqQzdCO01Bc0NVLFdBQVcsRUFBQTs7QUF0Q3JCO01BeUNVLGlDRHpCc0I7TUMwQnRCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix5QkFBeUIsRUFBQTs7QUE5Q25DO01BaURVLGVBQWU7TUFDZixjRHBEYyxFQUFBOztBQ0V4QjtNQXFEVSx5QkR2RGMsRUFBQTs7QUNFeEI7UUF1RFkseUJEekRZLEVBQUE7O0FDOER4QjtFQUNFLGtCQUFrQjtFQUVsQixrQkFBQTtFQWdCQSwyQkFBQSxFQUE0Qjs7QUFuQjlCO0lBS0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNENBQTRDLEVBQUE7O0FBakJoRDtJQXFCSSxlQUFlLEVBQUE7O0FBckJuQjtJQXlCSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUIsRUFBQSIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbG91cnNcclxuJGRlZmF1bHREYXJrR3JleTogICM1NjU2NTY7XHJcbiRkZWZhdWx0QmxhY2s6ICMwMDAwMDA7XHJcbiRkZWZhdWx0TGlnaHRHcmV5OiAjRTVFNUU1O1xyXG5cclxuXHJcbi8vSW1hZ2VzXHJcbi8vICRrYXRhbmE6IHVybCguL2ljb25zL2thdGFuYS5zdmcpO1xyXG4vLyAkbG9jazogdXJsKC4vaWNvbnMvaWNvbnM4LWxvY2stNTAucG5nKTtcclxuLy8gJGtpbW9ubzogdXJsKC4vaWNvbnMvaWNvbnM4LWtpbW9uby01MC5wbmcpO1xyXG5cclxuLy9CYWNrZ3JvdW5kICAgIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNhMWM0ZmQgMCUsICNjMmU5ZmIgMTAwJSk7ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZDZlYTAgMCUsICNlYzhjNjkgMTAwJSk7XHJcbiRkZWZhdWx0QmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICMzRDRFODEgMCUsICM1NzUzQzkgNDglLCAjNkU3RkYzIDEwMCUpO1xyXG5cclxuLy9Mb2dvXHJcbiRkZWZhdWx0V2hpdGU6ICNmNWY1ZjU7XHJcbiRkZWZhdWx0TGlnaHRCbHVlOiAjM2Q5ZWIzO1xyXG5cclxuLy9Gb250XHJcbiRkZWZhdWx0Rm9udDogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcblxyXG4vL0JvcmRlclxyXG4kZGVmYXVsdEJvcmRlcjogMnB4ICRkZWZhdWx0QmxhY2s7XHJcbi5kZWZhdWx0Ym9yZGVyIHtcclxuICAgIGJvcmRlcjogJGRlZmF1bHRCb3JkZXI7XHJcbn1cclxuXHJcbi5kZWZhdWx0TGlnaHRCbHVlIHtcclxuICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0Qmx1ZTtcclxufVxyXG5cclxuLy9NYXJnaW5cclxuJGRlZmF1bHRNYXJnaW46IDAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4xMDogMTAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4yMDogMjAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW4zMDogMzAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW40MDogNDAgYXV0bztcclxuJGRlZmF1bHRNYXJnaW41MDogNTAgYXV0bztcclxuXHJcbi5kZWZhdWx0TWFyZ2luIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMTAge1xyXG4gICAgbWFyZ2luOiAxMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMjAge1xyXG4gICAgbWFyZ2luOiAyMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luMzAge1xyXG4gICAgbWFyZ2luOiAzMCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luNDAge1xyXG4gICAgbWFyZ2luOiA0MCBhdXRvO1xyXG59XHJcbi5kZWZhdWx0TWFyZ2luNTAge1xyXG4gICAgbWFyZ2luOiA1MCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBJTVBPUlQgVkFSSUFCTEVTXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4gIC5sb2dpbi1pbnB1dC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG5cclxuICAgIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBcclxuICAgICAgICAubWF0LWZvY3VzZWQgLmxvZ2luLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogJGRlZmF1bHRNYXJnaW47XHJcbiAgICAgICAgICBjb2xvcjogJGRlZmF1bHRMaWdodEdyZXk7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGVmYXVsdERhcmtHcmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIC8qIFVzZXJuYW1lICYgUGFzc3dvcmQgKi9cclxuICAgIC5sb2dpbi1pbnB1dC1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIG1hcmdpbjogNSUgMTUlO1xyXG5cclxuICAgICAgICAubG9naW4tbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIG1hcmdpbjogJGRlZmF1bHRNYXJnaW47XHJcbiAgICAgICAgICBjb2xvcjogJGRlZmF1bHREYXJrR3JleTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAubG9naW4taW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgLTEwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRkZWZhdWx0RGFya0dyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0RGFya0dyZXk7XHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0RGFya0dyZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dpbi1pbnB1dC1zdWJtaXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC8qIFN1Ym1pdCBCdXR0b24gKi9cclxuICAgIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1MTYzNzQ7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuICAgIC8qIFJlZ2lzdGVyIFRleHQgJiBCdXR0b24gKi9cclxuICAgIC5sb2dpbi1sb2dpbi10ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzNkOWViMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./frontend/src/app/components/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./frontend/src/app/components/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./frontend/src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./frontend/src/app/app.component.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
        this.appComponent = new src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"](this.auth, this.router);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user).subscribe(function () {
            alert('Login Successful! Welcome ' + _this.user.username);
            _this.router.navigateByUrl('/home');
            // this.appComponent.getUser();
        }, function (err) {
            console.error(err);
            alert('Login Unsuccessful! Incorrect Username/Password');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./frontend/src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./frontend/src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./frontend/src/app/components/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\">\r\n\r\n  <p class=\"title-label\">My <span class=\"defaultLightBlue\">Profile</span></p>\r\n  <!-- PERSONAL user -->\r\n  <div class=\"mt-2 row\">\r\n    <div class=\"col-12 custom-modal mt-sm-3\"\r\n      style=\"min-height: fit-content;max-height: 50vh;width: max-content;padding: 1.5rem;\">\r\n      <div class=\"row\">\r\n        <div class=\"col-5 mb-3 mt-3 text-justify center\">\r\n          <div class=\"form-horizontal center\">\r\n            <div class=\"form-group\">\r\n              <h1 class=\"center\">Personal Details</h1>\r\n              <hr class=\"shadow-sm\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <h4 class=\"form-control-static font-weight-bold\">Full Name:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue\">{{ user?.name | titlecase }}</h4>\r\n              <h4 class=\"form-control-static font-weight-bold\">Username:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue\">{{ user?.username }}</h4>\r\n              <h4 class=\"form-control-static font-weight-bold\">Email:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue\">{{ user?.email }}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-5 mb-3 mt-3 text-justify center\">\r\n          <div class=\"form-horizontal center\">\r\n            <div class=\"form-group\">\r\n              <h1 class=\"center\">Course Progress</h1>\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\"control-label font-weight-bold profile-headings\">\r\n                < Current Session >\r\n              </h4>\r\n              <h4 class=\"form-control-static defaultLightBlue center\">{{ user?.session | titlecase }}</h4>\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\"control-label font-weight-bold profile-headings\">\r\n                < Current Task >\r\n              </h4>\r\n              <h4 class=\"form-control-static defaultLightBlue center\">{{ user?.task | titlecase }}</h4>\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\"control-label font-weight-bold profile-headings\">\r\n                < Course Complete (%) >\r\n              </h4>\r\n              <h4 class=\"form-control-static defaultLightBlue center\">{{ user?.task | titlecase }}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"center col-11 text-justify\">\r\n          <div class=\"form-horizontal\">\r\n\r\n            <div class=\"form-group\">\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\" control-label font-weight-bold profile-headings\">\r\n                < Uploaded Documents >\r\n              </h4>\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\"form-control-static ml-3\">Session 1: </h4>\r\n              <h4 class=\"form-control-static defaultLightBlue ml-3\">UPLOAD #1</h4>\r\n              <h4 class=\"form-control-static ml-3\">Session 2:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue ml-3\">UPLOAD #2</h4>\r\n              <h4 class=\"form-control-static ml-3\">Session 3:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue ml-3\">UPLOAD #3</h4>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\" control-label font-weight-bold profile-headings\">\r\n                < Quiz Results >\r\n              </h4>\r\n              <hr class=\"shadow-sm\">\r\n              <h4 class=\"form-control-static ml-3\">Quiz Name:</h4>\r\n              <h4 class=\"form-control-static defaultLightBlue ml-3\"></h4>\r\n              <h4 class=\"form-control-static ml-3\">Result: </h4>\r\n              <h4 class=\"form-control-static defaultLightBlue ml-3\"></h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./frontend/src/app/components/profile/profile.component.scss":
/*!********************************************************************!*\
  !*** ./frontend/src/app/components/profile/profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-headings {\n  text-align: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QixFQUFBIiwiZmlsZSI6ImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkaW5ncyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./frontend/src/app/components/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./frontend/src/app/components/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./frontend/src/app/services/authentication.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./frontend/src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./frontend/src/app/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/quiz/quiz.component.html":
/*!**************************************************************!*\
  !*** ./frontend/src/app/components/quiz/quiz.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\r\n  <div mat-dialog-header class=\"m-3\">\r\n    <div class=\"row\">\r\n      <mat-chip-list>\r\n        <mat-chip class=\"mr-2 ml-sm-4\" [ngClass]=\"{'bg-warning': mode == 'result', 'bg-info': mode == 'quiz'}\">Question\r\n          {{pager.index + 1}} of {{pager.count}}</mat-chip>\r\n      </mat-chip-list>\r\n      <h1 class=\"center text-capitalize mt-sm-3\">Quiz Time! - {{ quizName }}</h1>\r\n      <mat-chip-list>\r\n        <mat-chip *ngIf=\"config.duration\" [ngClass]=\"{'bg-warning': mode == 'result', 'bg-info': mode == 'quiz' }\"\r\n          class=\"ml-2\">Time: {{ellapsedTime}} / {{duration}}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-content class=\"h-100\">\r\n    <mat-card style=\"width:auto\">\r\n      <!-- <mat-card-header>\r\n          <mat-card-title>Quiz Time! - {{ quizName }}</mat-card-title>\r\n        </mat-card-header> -->\r\n      <mat-card-content>\r\n        <div id=\"quiz\">\r\n          <div *ngIf=\"mode=='quiz' && quiz$\">\r\n            <div *ngFor=\"let question of filteredQuestions;\">\r\n              <h3 class=\"center font-weight-normal mt-5 mb-5\">{{pager.index + 1}}.\r\n                <span [innerHTML]=\"question.name\"></span>\r\n              </h3>\r\n              <div class=\"col-12 row text-left options\">\r\n                <div class=\"center\" *ngFor=\"let option of question.options\">\r\n                  <div class=\"option ml-5 mr-5\">\r\n                    <label class=\"font-weight-normal\" [attr.for]=\"option.id\">\r\n                      <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\"\r\n                        (change)=\"onSelect(question, option);\" required /> {{option.name}}\r\n                      <!-- <mat-radio-group aria-label=\"Select an option\">\r\n                        <mat-radio-button id=\"{{option.id}}\" [(ngModel)]=\"option.selected\"\r\n                          (change)=\"onSelect(question, option);\" ngDefaultControl> {{option.name}} </mat-radio-button>\r\n                        </mat-radio-group> -->\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"text-center\">\r\n              <!-- <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button> -->\r\n              <button class=\"btn btn-lg btn-primary mr-4 ml-4 mt-3 mb-3\" *ngIf=\"pager.index != 0\"\r\n                (click)=\"goTo(pager.index - 1);\">Prev</button>\r\n              <button class=\"btn btn-lg btn-primary mr-4 ml-4 mt-3 mb-3\" *ngIf=\"pager.index != 9\"\r\n                (click)=\"goTo(pager.index + 1);\">Next</button>\r\n              <!-- <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row text-center\" *ngIf=\"mode=='review'\">\r\n            <div class=\"col-4 cursor-pointer\" *ngFor=\"let question of quiz$.questions; let index = index;\">\r\n              <div (click)=\"goTo(index)\"\r\n                class=\"p-3 mb-2 {{ isAnswered(question) == 'Answered'? 'bg-info': 'bg-warning' }}\">{{index + 1}}.\r\n                {{ isAnswered(question) }}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"result\" [ngClass]=\"\" *ngIf=\"mode=='result'\">\r\n            <h2 class=\"center\">Results: {{ quizResults }}%</h2>\r\n            <div *ngFor=\"let question of quiz$.questions; let index = index\">\r\n              <div class=\"p-1 m-2 alert {{ isCorrect(question) ? 'alert-success': 'alert-danger'}}\">\r\n                <div class=\"result-question \">\r\n                  <h5 class=\"font-weight-normal mb-3 mt-3 center\">{{index + 1}}. {{question.name}}</h5>\r\n                  <!-- <div class=\"text-nowrap ml-3 col d-flex justify-content-start row\"> -->\r\n                  <div class=\"text-monospace\">\r\n                    <div class=\"m-3\" style=\"font-size: 12px;font-weight: 500;\" *ngFor=\"let Option of question.options\">\r\n                      <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" />\r\n                      {{Option.name}}\r\n                    </div>\r\n                  </div>\r\n                  <h5 class=\"m-3 center\"> Your answer is {{isCorrect(question) ? 'Correct': 'Incorrect'}}.</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div class=\"d-flex justify-content-center row\" *ngIf=\"mode!='result'\">\r\n            <!-- <button class=\"btn btn-lg btn-default ml-4 mr-4\" (click)=\"mode = 'quiz'\">Quiz</button>\r\n              <button class=\"btn btn-lg btn-info ml-4 mr-4\" (click)=\"mode = 'review'\">Review</button> -->\r\n            <button class=\"btn btn-lg btn-danger ml-4 mt-4 mr-4\" (click)=\"exitQuiz();\">Exit Quiz</button>\r\n            <button class=\"btn btn-lg btn-success ml-4 mt-4 mr-4\" (click)=\"onSubmit();\">Submit Quiz</button>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div mat-dialog-actions [ngClass]=\"{'hidden' : mode != 'result'}\" class=\"h-100\">\r\n    <button *ngIf=\"mode == 'result'\" class=\"col\" mat-button [mat-dialog-close]=\"data.completed\" cdkFocusInitial>Save and\r\n      Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./frontend/src/app/components/quiz/quiz.component.scss":
/*!**************************************************************!*\
  !*** ./frontend/src/app/components/quiz/quiz.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-content-card {\n  margin: 5% 2.5% 5% 2.5%;\n  min-width: 90%;\n  width: 100%;\n  flex-basis: 45%; }\n\n.mat-dialog-container {\n  padding: 26px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccXVpelxccXVpei5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotY29udGVudC1jYXJkIHtcclxuICAgIG1hcmdpbjogNSUgMi41JSA1JSAyLjUlO1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI2cHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./frontend/src/app/components/quiz/quiz.component.ts":
/*!************************************************************!*\
  !*** ./frontend/src/app/components/quiz/quiz.component.ts ***!
  \************************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_session_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/session/quiz */ "./frontend/src/app/models/session/quiz/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var QuizComponent = /** @class */ (function () {
    function QuizComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.mode = 'quiz';
        this.config = {
            autoMove: false,
            duration: 100,
            requiredAll: true,
            shuffleQuestions: true
        };
        this.timer = null;
        this.ellapsedTime = '00:00';
        this.duration = '';
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        this.quizResult = 0;
        this.quiz$ = this.data.selectedQuiz;
        this.quizName = this.quiz$.name;
        this.pager.count = this.quiz$.questions.length;
        this.startTime = new Date();
        this.timer = setInterval(function () { _this.tick(); }, 1000);
        this.duration = this.parseTime(this.config.duration);
        this.mode = 'quiz';
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    QuizComponent.prototype.tick = function () {
        if (this.mode === 'quiz') {
            var now = new Date();
            var diff = (now.getTime() - this.startTime.getTime()) / 1000;
            if (Math.round(diff) === (this.config.duration)) {
                this.onSubmit();
            }
            this.ellapsedTime = this.parseTime(diff);
        }
    };
    QuizComponent.prototype.parseTime = function (totalSeconds) {
        var mins = Math.floor(totalSeconds / 60);
        var secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return mins + ":" + secs;
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz$.questions) ?
                this.quiz$.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (question, option) {
        question.options.forEach(function (x) {
            if (x.id !== option.id) {
                x.selected = false;
            }
        });
        this.autoMoveQuestion();
    };
    // Move to Next Question once an option is selected
    QuizComponent.prototype.autoMoveQuestion = function () {
        var _this = this;
        if (this.config.autoMove) {
            setTimeout(function () {
                _this.goTo(_this.pager.index + 1);
            }, 500);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? true : false;
    };
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? true : false;
    };
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.mode = 'result';
        var result = [];
        this.quiz$.questions.forEach(function (x) {
            result.push({ quizId: _this.quiz$.id,
                questionId: x.id,
                answered: _this.isAnswered(x),
                correctAnswers: _this.isCorrect(x) ? _this.correctAnswers += 1 : null
            });
        });
        // QUIZ RESULT AS A PERCENTAGE
        this.quizResult = this.correctAnswers * 10;
        // Post your data to the server here. answers contains the questionId and the users' answer.
        // console.log(this.quiz$.questions);
        this.quiz$.quizResult = this.quizResult;
        console.log('Quiz Results: ', this.quiz$.quizResult);
    };
    QuizComponent.prototype.exitQuiz = function () {
        this.quiz$ = null;
        this.dialogRef.close();
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./frontend/src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.scss */ "./frontend/src/app/components/quiz/quiz.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], src_app_models_session_quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./frontend/src/app/components/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <form (submit)=\"register()\">\r\n    <label class=\"title-label\">Account <span class=\"defaultLightBlue\">Registration</span></label>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"center col-11 col-lg-7 col-md-9 col-sm-12 col-xl-6\">\r\n        <div class=\"custom-modal\">\r\n          <div class=\"row\">\r\n            <div class=\"center col-10 col-lg-10 col-md-10 col-sm-10 col-xl-10\" style=\"text-align:start !important\">\r\n              <div class=\"register-input-container\">\r\n                <mat-form-field class=\"register-input-block\">\r\n                  <input matInput class=\"register-input-field\" type=\"text\" name=\"name\" [(ngModel)]=\"user.name\">\r\n                  <mat-placeholder for=\"name\" class=\"register-label\">Full name</mat-placeholder>\r\n                  <span class=\"register-input-icon-clear\" *ngIf=\"user.username\" matSuffix mat-icon-button\r\n                    (click)=\"user.name=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"register-input-block\">\r\n                  <input matInput class=\"register-input-field\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\">\r\n                  <mat-placeholder for=\"email\" class=\"register-label\">Email</mat-placeholder>\r\n                  <span class=\"register-input-icon-clear\" *ngIf=\"user.email\" matSuffix mat-icon-button\r\n                    (click)=\"user.email=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"register-input-block\">\r\n                  <input matInput class=\"register-input-field\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\">\r\n                  <mat-placeholder for=\"username\" class=\"register-label\">Username</mat-placeholder>\r\n                  <span class=\"register-input-icon-clear\" *ngIf=\"user.username\" matSuffix mat-icon-button\r\n                    (click)=\"user.username=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"register-input-block\">\r\n                  <input matInput class=\"register-input-field\" type=\"password\" name=\"password\"\r\n                    [(ngModel)]=\"user.password\">\r\n                  <mat-placeholder for=\"password\" class=\"register-label\">Password</mat-placeholder>\r\n                  <span class=\"register-input-icon-clear\" *ngIf=\"user.password\" matSuffix mat-icon-button\r\n                    (click)=\"user.password=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </span>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-1 ml-5 mr-5 mt-5 row\">\r\n            <div class=\"center col-10\">\r\n              <div class=\"register-input-submit\">\r\n                <div class=\"row\">\r\n                  <div class=\"center\">\r\n                    <button type=\"submit\" class=\"btn btn-default submit-button\">Sign Up</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-4 row\">\r\n                  <div class=\"center\">\r\n                    <span class=\"register-login-text mr-3\">Have an Account?</span>\r\n                    <a class=\"login-button\" routerLink=\"/login\">Sign In</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./frontend/src/app/components/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./frontend/src/app/components/register/register.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".defaultborder {\n  border: 2px #000000; }\n\n.defaultLightBlue {\n  color: #3d9eb3; }\n\n.defaultMargin {\n  margin: 0 auto; }\n\n.defaultMargin10 {\n  margin: 10 auto; }\n\n.defaultMargin20 {\n  margin: 20 auto; }\n\n.defaultMargin30 {\n  margin: 30 auto; }\n\n.defaultMargin40 {\n  margin: 40 auto; }\n\n.defaultMargin50 {\n  margin: 50 auto; }\n\n.register-input-container {\n  position: relative;\n  top: 20px;\n  /* Username & Password */ }\n\n.register-input-container .mat-input-element {\n    height: 50px; }\n\n.register-input-container .mat-input-element .mat-focused .register-label {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 30px;\n      margin: 0 auto;\n      color: #E5E5E5;\n      letter-spacing: 0.1em;\n      background: #565656; }\n\n.register-input-container .register-input-block {\n    width: 40%;\n    margin: 4.5% 3% 3% 5.5%; }\n\n.register-input-container .register-input-block .register-label {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 25px;\n      margin: 0 auto;\n      color: #565656;\n      letter-spacing: 0.1em; }\n\n.register-input-container .register-input-block .register-input-field {\n      width: 100%; }\n\n.register-input-container .register-input-block .mat-input-element {\n      font-family: \"Righteous\", cursive;\n      font-style: normal;\n      font-weight: normal;\n      line-height: normal;\n      font-size: 20px;\n      margin: 10px 0 -10px 0px; }\n\n.register-input-container .register-input-block .mat-form-field-suffix {\n      font-size: 20px;\n      color: #565656; }\n\n.register-input-container .register-input-block .mat-form-field-underline {\n      background-color: #565656; }\n\n.register-input-container .register-input-block .mat-form-field-underline::after {\n        background-color: #565656; }\n\n.register-input-submit {\n  /* Submit Button */\n  /* Register Text & Button */ }\n\n.register-input-submit .submit-button {\n    width: 130px;\n    height: 40px;\n    background: #516374;\n    box-sizing: border-box;\n    border-radius: 15px;\n    font-family: \"righteous\", cursive;\n    font-style: normal;\n    line-height: normal;\n    font-size: 20px;\n    text-align: center;\n    color: #fff;\n    letter-spacing: 0.1em;\n    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25); }\n\n.register-input-submit .register-login-text {\n    font-size: 13px; }\n\n.register-input-submit .login-button {\n    width: 115px;\n    height: 35px;\n    font-family: \"Righteous\", cursive;\n    font-style: normal;\n    font-weight: normal;\n    line-height: unset;\n    font-size: 15px;\n    text-align: center;\n    color: #3d9eb3;\n    letter-spacing: 0.1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcR2l0XFxwcm9qZWN0LXNlbnNlaS9mcm9udGVuZFxcc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcR2l0XFxwcm9qZWN0LXNlbnNlaS9mcm9udGVuZFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkE7RUFDSSxtQkF0QmtCLEVBQUE7O0FBeUJ0QjtFQUNJLGNBWnNCLEVBQUE7O0FBdUIxQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQ25EakI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQWtCVCx3QkFBQSxFQUF5Qjs7QUFwQjNCO0lBS00sWUFBWSxFQUFBOztBQUxsQjtNQVFRLGlDRE93QjtNQ054QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsY0RlWTtNQ2RaLGNEZmdCO01DZ0JoQixxQkFBcUI7TUFDckIsbUJEbkJnQixFQUFBOztBQ0d4QjtJQXNCTSxVQUFVO0lBQ1YsdUJBQXVCLEVBQUE7O0FBdkI3QjtNQTBCUSxpQ0FBaUM7TUFDakMsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGNESFk7TUNJWixjRG5DZ0I7TUNvQ2hCLHFCQUFxQixFQUFBOztBQWpDN0I7TUFzQ1UsV0FBVyxFQUFBOztBQXRDckI7TUF5Q1UsaUNEMUJzQjtNQzJCdEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHdCQUF3QixFQUFBOztBQTlDbEM7TUFpRFUsZUFBZTtNQUNmLGNEckRjLEVBQUE7O0FDR3hCO01BcURVLHlCRHhEYyxFQUFBOztBQ0d4QjtRQXVEWSx5QkQxRFksRUFBQTs7QUNnRXhCO0VBRUUsa0JBQUE7RUFnQkEsMkJBQUEsRUFBNEI7O0FBbEI5QjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRDQUE0QyxFQUFBOztBQWhCaEQ7SUFvQkksZUFBZSxFQUFBOztBQXBCbkI7SUF3QkksWUFBWTtJQUNaLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCLEVBQUEiLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db2xvdXJzXHJcbiRkZWZhdWx0RGFya0dyZXk6ICAjNTY1NjU2O1xyXG4kZGVmYXVsdEJsYWNrOiAjMDAwMDAwO1xyXG4kZGVmYXVsdExpZ2h0R3JleTogI0U1RTVFNTtcclxuXHJcblxyXG4vL0ltYWdlc1xyXG4vLyAka2F0YW5hOiB1cmwoLi9pY29ucy9rYXRhbmEuc3ZnKTtcclxuLy8gJGxvY2s6IHVybCguL2ljb25zL2ljb25zOC1sb2NrLTUwLnBuZyk7XHJcbi8vICRraW1vbm86IHVybCguL2ljb25zL2ljb25zOC1raW1vbm8tNTAucG5nKTtcclxuXHJcbi8vQmFja2dyb3VuZCAgICBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpOyAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWQ2ZWEwIDAlLCAjZWM4YzY5IDEwMCUpO1xyXG4kZGVmYXVsdEJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjM0Q0RTgxIDAlLCAjNTc1M0M5IDQ4JSwgIzZFN0ZGMyAxMDAlKTtcclxuXHJcbi8vTG9nb1xyXG4kZGVmYXVsdFdoaXRlOiAjZjVmNWY1O1xyXG4kZGVmYXVsdExpZ2h0Qmx1ZTogIzNkOWViMztcclxuXHJcbi8vRm9udFxyXG4kZGVmYXVsdEZvbnQ6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG5cclxuLy9Cb3JkZXJcclxuJGRlZmF1bHRCb3JkZXI6IDJweCAkZGVmYXVsdEJsYWNrO1xyXG4uZGVmYXVsdGJvcmRlciB7XHJcbiAgICBib3JkZXI6ICRkZWZhdWx0Qm9yZGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdExpZ2h0Qmx1ZSB7XHJcbiAgICBjb2xvcjogJGRlZmF1bHRMaWdodEJsdWU7XHJcbn1cclxuXHJcbi8vTWFyZ2luXHJcbiRkZWZhdWx0TWFyZ2luOiAwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMTA6IDEwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMjA6IDIwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luMzA6IDMwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luNDA6IDQwIGF1dG87XHJcbiRkZWZhdWx0TWFyZ2luNTA6IDUwIGF1dG87XHJcblxyXG4uZGVmYXVsdE1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjEwIHtcclxuICAgIG1hcmdpbjogMTAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjIwIHtcclxuICAgIG1hcmdpbjogMjAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjMwIHtcclxuICAgIG1hcmdpbjogMzAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjQwIHtcclxuICAgIG1hcmdpbjogNDAgYXV0bztcclxufVxyXG4uZGVmYXVsdE1hcmdpbjUwIHtcclxuICAgIG1hcmdpbjogNTAgYXV0bztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gSU1QT1JUIFZBUklBQkxFU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbiAgLnJlZ2lzdGVyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcblxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYXQtZm9jdXNlZCAucmVnaXN0ZXItbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAkZGVmYXVsdE1hcmdpbjtcclxuICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdExpZ2h0R3JleTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRkZWZhdWx0RGFya0dyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgLyogVXNlcm5hbWUgJiBQYXNzd29yZCAqL1xyXG4gICAgLnJlZ2lzdGVyLWlucHV0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbjogNC41JSAzJSAzJSA1LjUlO1xyXG5cclxuICAgICAgICAucmVnaXN0ZXItbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIG1hcmdpbjogJGRlZmF1bHRNYXJnaW47XHJcbiAgICAgICAgICBjb2xvcjogJGRlZmF1bHREYXJrR3JleTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAucmVnaXN0ZXItaW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgLTEwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGRlZmF1bHREYXJrR3JleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHREYXJrR3JleTtcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHREYXJrR3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlZ2lzdGVyLWlucHV0LXN1Ym1pdCB7XHJcblxyXG4gICAgLyogU3VibWl0IEJ1dHRvbiAqL1xyXG4gICAgLnN1Ym1pdC1idXR0b24geyBcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1MTYzNzQ7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuICAgIC8qIFJlZ2lzdGVyIFRleHQgJiBCdXR0b24gKi9cclxuICAgIC5yZWdpc3Rlci1sb2dpbi10ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzNkOWViMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./frontend/src/app/components/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./frontend/src/app/components/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./frontend/src/app/services/authentication.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            username: '',
            name: '',
            email: '',
            password: '',
            session: 'session-one',
            task: 'agile-intro'
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.user).subscribe(function () {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./frontend/src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./frontend/src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/session-template/session-one/session-one.component.html":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-one/session-one.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"title-label\">Session <span class=\"defaultLightBlue\">One</span></p>\r\n<!-- SIDE BAR COMPONENT -->\r\n<div class=\"m-t-1\">\r\n  <app-sidebar></app-sidebar>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div *ngIf=\"user$\" class=\"col-11 custom-modal mt-sm-3\" style=\"max-width:1000px\">\r\n    <div class=\"row\">\r\n      <div class=\"center col-11 mb-5 mt-5 text-justify\">\r\n        <h2 class=\"center\">Session 1 Lessons</h2>\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <h2 class=\"center\">Agile</h2>\r\n        <hr class=\"shadow-sm\">\r\n        <!-- BEGINNING OF AGILE LESSONS -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- AGILE INTRODCUTION -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Introduction to Agile</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                In this lesson we will introduce you to the Agile Methodology, teach you about Agile's History and tell\r\n                you\r\n                how popular Agile is today\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openLesson('agile-intro')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- AGILE MANIFESTO -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>The Agile Manifesto</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                In this lesson we will discuss the Agile Manifesto, we will be dicussing the 12 core priciples and\r\n                explain what they mean.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('agile-manifesto')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- AGILE EFFECT -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>The Agile Effect</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                In this lesson we will discuss the Meaning of The Agile Effect and the difference Agile can make.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('agile-effect')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- AGILE QUIZ -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Quiz Time!</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This quiz will test your knowledge on Agile\r\n                Completing this quiz will allow you to proceed to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openQuiz('agile')\">Start Quiz</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <!-- END OF AGILE LESSONS -->\r\n\r\n        <hr class=\"shadow-sm\">\r\n        <h2 class=\"center\">Scrum</h2>\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- BEGINNING OF SCRUM LESSONS -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- SCRUM INTRODUCTION -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Introduction to Agile Frameworks</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                Explaining what Agile Frameworks are.\r\n                The most commonly used Frameworks.\r\n                Introducing Scrum.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('scrum-intro')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM HISTORY -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>The History of Scrum</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1458040937381-49c067dfd49a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                How Scrum came to be.\r\n                How Popular Scrum is.\r\n                How Scrum is used today.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('scrum-history')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM VALUE -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Guide</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1504807959081-3dafd3871909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                What the Scrum Guide is.\r\n                What Scrums principles and values are.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('scrum')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM VALUE -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Framework</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                What Sprints are and what they consist of.\r\n                How work is measure in Scrum.\r\n                What the Scrum Roles are and what they mean.\r\n                What the Scrum Events are.\r\n                What other Resources Scrum utilises.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('scrum-framework')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EXAMPLE -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>An Example Scrum</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                What each role does on a day-to-day basis.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('scrum-example')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM QUIZ -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Quiz Time!</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\"\r\n              alt=\"Scrum Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This quiz will test your knowledge on Scrum\r\n                Completing this quiz will allow you to proceed to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openQuiz('scrum')\">Start Quiz</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <!-- END OF SCRUM LESSONS -->\r\n\r\n        <hr class=\"shadow-sm\">\r\n        <h2 class=\"center\">Case Study</h2>\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- BEGINNING OF CASE STUDY LESSONS -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- CASE STUDY LESSON 1 -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n\r\n              <mat-card-title>Introduction to Case Study</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Case Study Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                We will introduce the Case Study.\r\n                What your position is in the Case Study.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg \"\r\n                  (click)=\"openLesson('case-study-intro')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- CASE STUDY LESSON 2 -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n\r\n              <mat-card-title>Product Backlog</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80\"\r\n              alt=\"Case Study Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                Based on the Case Study and Your Position in the Case Study you will be required to create a list of\r\n                requirements which will be known as the Product Backlog.\r\n                A Submission of the Product Backlog will allow you to continue to the next stage.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg  \"\r\n                  (click)=\"openActivity('case-study-backlog')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- CASE STUDY QUIZ -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n\r\n              <mat-card-title>Quiz Time!</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\"\r\n              alt=\"Case Study Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This quiz will test your knowledge on Case Study\r\n                Completing this quiz will allow you to proceed to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openQuiz('case-study')\">Start Quiz</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./frontend/src/app/components/session-template/session-one/session-one.component.ts":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-one/session-one.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SessionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionOneComponent", function() { return SessionOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../quiz/quiz.component */ "./frontend/src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lesson/lesson.component */ "./frontend/src/app/components/lesson/lesson.component.ts");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session.service */ "./frontend/src/app/services/session.service.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../activity/activity.component */ "./frontend/src/app/components/activity/activity.component.ts");
/* harmony import */ var src_app_models_session_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/session/session */ "./frontend/src/app/models/session/session.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication.service */ "./frontend/src/app/services/authentication.service.ts");









var SessionOneComponent = /** @class */ (function () {
    function SessionOneComponent(dialog, auth, sessionService) {
        this.dialog = dialog;
        this.auth = auth;
        this.sessionService = sessionService;
        this.sessionID = 1;
        this.quiz = [];
        this.lesson = [];
        this.activity = [];
    }
    SessionOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.user$ = user;
        });
        this.sessionService.getSession(this.sessionID).then(function (session) {
            _this.sessionOne = new src_app_models_session_session__WEBPACK_IMPORTED_MODULE_7__["Session"](session);
            _this.sessionOne.quiz.forEach(function (q) {
                _this.quiz.push(q);
            });
            _this.sessionOne.lesson.forEach(function (l) {
                _this.lesson.push(l);
            });
            _this.sessionOne.activity.forEach(function (a) {
                _this.activity.push(a);
            });
        });
    };
    SessionOneComponent.prototype.openQuiz = function (quizName) {
        var _this = this;
        this.quiz.forEach(function (selectedQuiz) {
            if (selectedQuiz.name === quizName) {
                var dialogRef = _this.dialog.open(_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"], {
                    disableClose: true,
                    data: { selectedQuiz: selectedQuiz }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionOneComponent.prototype.openLesson = function (lessonName) {
        var _this = this;
        this.lesson.forEach(function (selectedLesson) {
            if (selectedLesson.name === lessonName) {
                var dialogRef = _this.dialog.open(_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__["LessonComponent"], {
                    disableClose: true,
                    data: { selectedLesson: selectedLesson }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionOneComponent.prototype.openActivity = function (activityName) {
        var _this = this;
        this.activity.forEach(function (selectedActivity) {
            if (selectedActivity.name === activityName) {
                var dialogRef = _this.dialog.open(_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"], {
                    disableClose: true,
                    data: { selectedActivity: selectedActivity }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-one',
            template: __webpack_require__(/*! ./session-one.component.html */ "./frontend/src/app/components/session-template/session-one/session-one.component.html"),
            styles: [__webpack_require__(/*! ../session-template.component.scss */ "./frontend/src/app/components/session-template/session-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
    ], SessionOneComponent);
    return SessionOneComponent;
}());

//   getTaskData(): any {
//     this.sessionService.get_Session('session-one').subscribe(res => {
//        const result = res[0];
//        return result;
//     });
//   }
// }
// @Component({
//   selector: 'lesson-component',
//   template: ''
// })
// export class LessonComponent {
//   constructor() { }
//   ngAfterViewInit(): void {
//     // typeformEmbed.makePopup('https://salman829964.typeform.com/to/FOxG0c', { mode: 'popup', autoOpen: true });
//     // const reference = typeformEmbed.makePopup(
//     //   'https://salman829964.typeform.com/to/FOxG0c',
//     //   {
//     //     mode: 'popup',
//     //     autoClose: 3000,
//     //     hideHeaders: true,
//     //     hideFooters: true,
//     //     onSubmit: function () {
//     //       console.log('Typeform successfully submitted')
//     //     }
//     //   }
//     // )
//     // reference.open();
//   }
// }


/***/ }),

/***/ "./frontend/src/app/components/session-template/session-template.component.scss":
/*!**************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-template.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-content-card {\n  margin: 5% 2.5% 5% 2.5%;\n  min-width: 90%;\n  width: 100%;\n  flex-basis: 45%; }\n\n.mat-dialog-container {\n  padding: 26px !important; }\n\n.mat-card-header-text {\n  margin: 0 auto !important; }\n\n.content-card {\n  margin: 2.5% 2.5%;\n  max-width: 250px;\n  width: auto;\n  flex-basis: 45%;\n  border-radius: 10px; }\n\n.mat-card-image {\n  padding: 10px 10px; }\n\n.center-items {\n  margin: 0 auto;\n  text-align: center; }\n\n.btn-primary:hover {\n  box-shadow: 0px 0px 5px #007f9a;\n  text-shadow: 0px 0px 3px black;\n  background-color: #13a4bb;\n  border-color: #00000026; }\n\n.mat-card-actions {\n  margin-bottom: 0px !important; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.7); }\n\n.mat-dialog-container {\n  max-width: 80vw !important;\n  margin: 0 auto;\n  margin-top: 5rem;\n  min-width: 50vw !important;\n  max-height: 90vh !important;\n  padding: 5px !important;\n  border-radius: 15px !important; }\n\n.activity-card-content {\n  min-width: 67vw;\n  min-height: 66vh;\n  margin-top: 0rem;\n  padding: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLXRlbXBsYXRlL0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccXVpelxccXVpei5jb21wb25lbnQuc2NzcyIsImZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLXRlbXBsYXRlL0M6XFxHaXRcXHByb2plY3Qtc2Vuc2VpL2Zyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2Vzc2lvbi10ZW1wbGF0ZVxcc2Vzc2lvbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx3QkFBd0IsRUFBQTs7QUNENUI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUczQjtFQUNBLDZCQUE2QixFQUFBOztBQUk3QjtFQUNFLDhCQUE0QixFQUFBOztBQUc5QjtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi10ZW1wbGF0ZS9zZXNzaW9uLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotY29udGVudC1jYXJkIHtcclxuICAgIG1hcmdpbjogNSUgMi41JSA1JSAyLjUlO1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI2cHggIWltcG9ydGFudDtcclxufSIsIkBpbXBvcnQgJy4vc2Vzc2lvbi1vbmUvc2Vzc2lvbi1vbmUuY29tcG9uZW50LnNjc3MnO1xyXG5AaW1wb3J0ICcuL3Nlc3Npb24tdHdvL3Nlc3Npb24tdHdvLmNvbXBvbmVudC5zY3NzJztcclxuQGltcG9ydCAnLi9zZXNzaW9uLXRocmVlL3Nlc3Npb24tdGhyZWUuY29tcG9uZW50LnNjc3MnO1xyXG5AaW1wb3J0ICcuLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MnO1xyXG5AaW1wb3J0ICcuLi9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MnO1xyXG5cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50LWNhcmQge1xyXG4gICAgbWFyZ2luOiAyLjUlMi41JTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuICAuY2VudGVyLWl0ZW1zIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDA3ZjlhO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzYTRiYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDI2O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucyB7XHJcbm1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43MCk7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBtaW4td2lkdGg6IDUwdncgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZpdHktY2FyZC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDY3dnc7XHJcbiAgbWluLWhlaWdodDogNjZ2aDtcclxuICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./frontend/src/app/components/session-template/session-three/session-three.component.html":
/*!*************************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-three/session-three.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"title-label\">Session <span class=\"defaultLightBlue\">Three</span></p>\r\n<!-- SIDE BAR COMPONENT -->\r\n<div class=\"m-t-1\">\r\n  <app-sidebar></app-sidebar>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-11 custom-modal mt-sm-3\">\r\n    <div class=\"row\">\r\n      <div class=\"center col-11 mb-5 mt-5 text-justify\">\r\n        <h2 class=\"center\">Session 3 Tasks</h2>\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <h2 class=\"center\">Sprint # 2</h2>\r\n        <hr class=\"shadow-sm\">\r\n        <!-- Task Group 1 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- SCRUM EVENT - SPRINT PLANNING MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Introduction</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-1.2.1&auto=format&fit=crop&w=1138&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>An Introduction into Session 3 and what you will complete by the end of the Session.\r\n                How the Scrum roles will be utilised throughout the Session</p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-intro')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - SPRINT PLANNING MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Sprint Planning</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1512805668868-1608a189cc2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                Based on the Product Backlog You created in Session 1, you will be asked to analyse, prioritise and\r\n                define a list of requirements to be implemented during the first Sprint.\r\n                You will be following Scrum methods in order to gather these requirements.\r\n                You will then submit these requirements in order to continue.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-SP')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - DAILY SCRUM MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Daily Scrum</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                You will be conducting a daily scrum meeting.\r\n                You will base the content of this meeting on the tasks you have been assigned to complete on this\r\n                sprint.\r\n                You will then submit what you discussed during the meeting.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-DS')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- Task Group 2 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- PRODUCT DESIGN -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Product Design</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This stage is the official task of your First Sprint.\r\n                You will be designing some Diagram based on the context of the case study.\r\n                You will then be required to submit the diagram(‘s) in order to continue to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-PDesign')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- PRODUCT DEVELOPMENT -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Product Development</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                You will begin the first stage of development for the project based on the requirements you gathered.\r\n                A submission will be required in order to continue to the next stage.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-PDevelopment')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- Task Group 3 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- SCRUM EVENT - SPRINT REIVEW & RETROSPECTIVE MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Sprint Review & Retrospective</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1535209039648-9524289505fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                In this task you will complete an informal review of the progress made during the sprint.\r\n                You will then document an assessment of the quality of the sprint based on the requirements, assessing\r\n                whether the assigned tasks were detailed enough, if there are any new requirements that need to be made\r\n                and any other issues faces during the sprint.\r\n                You will then submit a document in order to conclude the first Sprint.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openLesson('session-three-SPRR')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - DAILY SCRUM MEETING -->\r\n          \r\n          <mat-card class=\"center content-card shadow\">\r\n            <div>\r\n            <mat-card-header>\r\n              <mat-card-title>Session 3 Quiz!</mat-card-title>\r\n              <mat-card-subtitle>Test What You Have Learned</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\"\r\n              alt=\"Case Study Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This quiz will test everything you learned this session\r\n                Completing this quiz will allow you to proceed to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openQuiz('session-three')\">Start Quiz</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </div>\r\n          </mat-card>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./frontend/src/app/components/session-template/session-three/session-three.component.ts":
/*!***********************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-three/session-three.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SessionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionThreeComponent", function() { return SessionThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../quiz/quiz.component */ "./frontend/src/app/components/quiz/quiz.component.ts");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session.service */ "./frontend/src/app/services/session.service.ts");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lesson/lesson.component */ "./frontend/src/app/components/lesson/lesson.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../activity/activity.component */ "./frontend/src/app/components/activity/activity.component.ts");
/* harmony import */ var src_app_models_session_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/session/session */ "./frontend/src/app/models/session/session.ts");








var SessionThreeComponent = /** @class */ (function () {
    function SessionThreeComponent(dialog, sessionService) {
        this.dialog = dialog;
        this.sessionService = sessionService;
        this.sessionID = 3;
        this.quiz = [];
        this.lesson = [];
        this.activity = [];
    }
    SessionThreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getSession(this.sessionID).then(function (session) {
            _this.sessionThree = new src_app_models_session_session__WEBPACK_IMPORTED_MODULE_7__["Session"](session);
            _this.sessionThree.quiz.forEach(function (q) {
                _this.quiz.push(q);
            });
            _this.sessionThree.lesson.forEach(function (l) {
                _this.lesson.push(l);
            });
            _this.sessionThree.activity.forEach(function (a) {
                _this.activity.push(a);
            });
        });
    };
    SessionThreeComponent.prototype.openQuiz = function (quizName) {
        var _this = this;
        this.quiz.forEach(function (selectedQuiz) {
            if (selectedQuiz.name.toLowerCase() === quizName) {
                var dialogRef = _this.dialog.open(_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"], {
                    disableClose: true,
                    data: { selectedQuiz: selectedQuiz }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionThreeComponent.prototype.openLesson = function (lessonName) {
        var _this = this;
        this.lesson.forEach(function (selectedLesson) {
            if (selectedLesson.name.toLowerCase() === lessonName) {
                var dialogRef = _this.dialog.open(_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__["LessonComponent"], {
                    disableClose: true,
                    data: { selectedLesson: selectedLesson }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionThreeComponent.prototype.openActivity = function (activityName) {
        var _this = this;
        this.activity.forEach(function (selectedActivity) {
            if (selectedActivity.name.toLowerCase() === activityName) {
                var dialogRef = _this.dialog.open(_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"], {
                    disableClose: true,
                    data: { selectedActivity: selectedActivity }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-three',
            template: __webpack_require__(/*! ./session-three.component.html */ "./frontend/src/app/components/session-template/session-three/session-three.component.html"),
            styles: [__webpack_require__(/*! ../session-template.component.scss */ "./frontend/src/app/components/session-template/session-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], SessionThreeComponent);
    return SessionThreeComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/session-template/session-two/session-two.component.html":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-two/session-two.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"title-label\">Session <span class=\"defaultLightBlue\">Two</span></p>\r\n<!-- SIDE BAR COMPONENT -->\r\n<div class=\"m-t-1\">\r\n  <app-sidebar></app-sidebar>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-11 custom-modal mt-sm-3\">\r\n    <div class=\"row\">\r\n      <div class=\"center col-11 mb-5 mt-5 text-justify\">\r\n        <h2 class=\"center\">Session 2 Tasks</h2>\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <h2 class=\"center\">Sprint # 1</h2>\r\n        <hr class=\"shadow-sm\">\r\n        <!-- Task Group 1 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- SCRUM EVENT - SPRINT PLANNING MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Introduction</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-1.2.1&auto=format&fit=crop&w=1138&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>An Introduction into Session 2 and what you will complete by the end of the Session.\r\n                How the Scrum roles will be utilised throughout the Session</p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('session-two-intro')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - SPRINT PLANNING MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Sprint Planning</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1512805668868-1608a189cc2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                Based on the Product Backlog You created in Session 1, you will be asked to analyse, prioritise and\r\n                define a list of requirements to be implemented during the first Sprint.\r\n                You will be following Scrum methods in order to gather these requirements.\r\n                You will then submit these requirements in order to continue.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('sprint-planning')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - DAILY SCRUM MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Daily Scrum</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                You will be conducting a daily scrum meeting.\r\n                You will base the content of this meeting on the tasks you have been assigned to complete on this\r\n                sprint.\r\n                You will then submit what you discussed during the meeting.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('daily-scrum')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- Task Group 2 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- PRODUCT DESIGN -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Product Design</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This stage is the official task of your First Sprint.\r\n                You will be designing some Diagram based on the context of the case study.\r\n                You will then be required to submit the diagram(‘s) in order to continue to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('product-design')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- PRODUCT DEVELOPMENT -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Product Development</mat-card-title>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                You will begin the first stage of development for the project based on the requirements you gathered.\r\n                A submission will be required in order to continue to the next stage.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('product-development')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n\r\n        <hr class=\"shadow-sm\">\r\n\r\n        <!-- Task Group 3 -->\r\n        <div class=\"d-flex justify-content-center row\">\r\n          <!-- SCRUM EVENT - SPRINT REIVEW & RETROSPECTIVE MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Scrum Meeting!</mat-card-title>\r\n              <mat-card-subtitle>Sprint Review & Retrospective</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1535209039648-9524289505fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80\"\r\n              alt=\"Agile Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                In this task you will complete an informal review of the progress made during the sprint.\r\n                You will then document an assessment of the quality of the sprint based on the requirements, assessing\r\n                whether the assigned tasks were detailed enough, if there are any new requirements that need to be made\r\n                and any other issues faces during the sprint.\r\n                You will then submit a document in order to conclude the first Sprint.\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg disabled\"\r\n                  (click)=\"openActivity('sprint-review')\">Begin Lesson</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- SCRUM EVENT - DAILY SCRUM MEETING -->\r\n          <mat-card class=\"center content-card shadow\">\r\n            <mat-card-header>\r\n              <mat-card-title>Session 2 Quiz!</mat-card-title>\r\n              <mat-card-subtitle>Test What You Have Learned</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <hr class=\"shadow-sm\">\r\n            <img mat-card-image class=\"col-auto m-auto\"\r\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\"\r\n              alt=\"Case Study Picture\">\r\n            <hr class=\"shadow-sm\">\r\n            <mat-card-content>\r\n              <p>\r\n                This quiz will test everything you learned this session\r\n                Completing this quiz will allow you to proceed to the next stage\r\n              </p>\r\n            </mat-card-content>\r\n            <div class=\"center-items\">\r\n              <mat-card-actions>\r\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\r\n                  (click)=\"openQuiz('session-two')\">Start Quiz</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./frontend/src/app/components/session-template/session-two/session-two.component.ts":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/app/components/session-template/session-two/session-two.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SessionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionTwoComponent", function() { return SessionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_session_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/session/session */ "./frontend/src/app/models/session/session.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session.service */ "./frontend/src/app/services/session.service.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../quiz/quiz.component */ "./frontend/src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lesson/lesson.component */ "./frontend/src/app/components/lesson/lesson.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../activity/activity.component */ "./frontend/src/app/components/activity/activity.component.ts");








var SessionTwoComponent = /** @class */ (function () {
    function SessionTwoComponent(dialog, sessionService) {
        this.dialog = dialog;
        this.sessionService = sessionService;
        this.sessionID = 2;
        this.quiz = [];
        this.lesson = [];
        this.activity = [];
    }
    SessionTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getSession(this.sessionID).then(function (session) {
            _this.sessionTwo = new src_app_models_session_session__WEBPACK_IMPORTED_MODULE_2__["Session"](session);
            _this.sessionTwo.quiz.forEach(function (q) {
                _this.quiz.push(q);
            });
            _this.sessionTwo.lesson.forEach(function (l) {
                _this.lesson.push(l);
            });
            _this.sessionTwo.activity.forEach(function (a) {
                _this.activity.push(a);
            });
        });
    };
    SessionTwoComponent.prototype.openQuiz = function (quizName) {
        var _this = this;
        this.quiz.forEach(function (selectedQuiz) {
            if (selectedQuiz.name.toLowerCase() === quizName) {
                var dialogRef = _this.dialog.open(_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"], {
                    disableClose: true,
                    data: { selectedQuiz: selectedQuiz }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionTwoComponent.prototype.openLesson = function (lessonName) {
        var _this = this;
        this.lesson.forEach(function (selectedLesson) {
            if (selectedLesson.name.toLowerCase() === lessonName) {
                var dialogRef = _this.dialog.open(_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_6__["LessonComponent"], {
                    disableClose: true,
                    data: { selectedLesson: selectedLesson }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionTwoComponent.prototype.openActivity = function (activityName) {
        var _this = this;
        this.activity.forEach(function (selectedActivity) {
            if (selectedActivity.name.toLowerCase() === activityName) {
                var dialogRef = _this.dialog.open(_activity_activity_component__WEBPACK_IMPORTED_MODULE_7__["ActivityComponent"], {
                    disableClose: true,
                    data: { selectedActivity: selectedActivity }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            }
        });
    };
    SessionTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-two',
            template: __webpack_require__(/*! ./session-two.component.html */ "./frontend/src/app/components/session-template/session-two/session-two.component.html"),
            styles: [__webpack_require__(/*! ../session-template.component.scss */ "./frontend/src/app/components/session-template/session-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], SessionTwoComponent);
    return SessionTwoComponent;
}());



/***/ }),

/***/ "./frontend/src/app/components/sidebar/sidebar.component.html":
/*!********************************************************************!*\
  !*** ./frontend/src/app/components/sidebar/sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pr-5\">\n  <div class=\"row mt-2\">\n    <div class=\"col-11 custom-modal mt-sm-3\" style=\"max-width: 650px;\">\n      <div class=\"center col-11 mb-5 mt-5 text-justify\">\n        <h2 class=\"center\">Next Lesson</h2>\n        <hr class=\"shadow-sm\">\n        <div class=\"d-flex justify-content-center row\">\n        <!-- TASK DESCRIPTION -->\n          <mat-card class=\"content-card shadow mt-5\">\n            <mat-card-header>\n              <mat-card-title>Task Description</mat-card-title>\n            </mat-card-header>\n            <hr class=\"shadow-sm\">\n            <!-- TODO Fill Task from User Model Next Lesson ID -->\n            <mat-card-content class=\"ml-3 mt-4 text-left\">\n                <p style=\"font-weight: 500; font-size: 15px;\">This Quiz will test your knowledge on the Agile Methodology.</p>\n                <p style=\"font-weight: 500;font-size: 15px;\">Complete this Quiz with 80% Score or more in order to continue to the next stage of the course.</p>\n                <p class=\"center mt-5\" style=\"font-weight: bold;font-size: 15px;\">Good Luck!</p>\n              </mat-card-content>\n          </mat-card>\n        <!-- TASK ACTION -->\n          <mat-card class=\"content-card shadow mt-5\">\n            <!-- TODO Fill Task from User Model Next Lesson ID -->\n            <mat-card-header>\n              <mat-card-title>Quiz Time! - Agile</mat-card-title>\n            </mat-card-header>\n            <hr class=\"shadow-sm\">\n            <img mat-card-image class=\"col-auto m-auto\"\n              src=\"https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80\" alt=\"Agile Picture\">\n              <hr class=\"shadow-sm\">\n            <div class=\"center-items pt-3\">\n              <mat-card-actions>\n                <!-- TODO OPEN NEXT TASK BASED ON USERS NEXT TASK (DB>CURRENT_TASK+1->'next task') -->\n                <button mat-button type=\"button\" class=\"btn align-middle btn-primary btn-lg\"\n                 (click)=\"openTask('agile')\" >Start Quiz</button>\n              </mat-card-actions>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./frontend/src/app/components/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./frontend/src/app/components/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { SessionTemplateComponent } from '../session-template/session-template.component';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(
    //  private sessionTemplate: SessionTemplateComponent
    ) {
    }
    SidebarComponent.prototype.openTask = function (taskType, taskName) {
        // this.sessionTemplate.openTask(taskType, taskName);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./frontend/src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ../session-template/session-template.component.scss */ "./frontend/src/app/components/session-template/session-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/activity/activity.ts":
/*!**************************************************************!*\
  !*** ./frontend/src/app/models/session/activity/activity.ts ***!
  \**************************************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../question/question */ "./frontend/src/app/models/session/question/question.ts");

var Activity = /** @class */ (function () {
    function Activity(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
            this.type = data.type;
            this.content = data.content;
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new _question_question__WEBPACK_IMPORTED_MODULE_0__["Question"](q));
            });
        }
    }
    return Activity;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/lesson/lesson.ts":
/*!**********************************************************!*\
  !*** ./frontend/src/app/models/session/lesson/lesson.ts ***!
  \**********************************************************/
/*! exports provided: Lesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson", function() { return Lesson; });
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../question/question */ "./frontend/src/app/models/session/question/question.ts");

var Lesson = /** @class */ (function () {
    function Lesson(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
            this.content = data.content;
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new _question_question__WEBPACK_IMPORTED_MODULE_0__["Question"](q));
            });
        }
    }
    return Lesson;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/question/question.ts":
/*!**************************************************************!*\
  !*** ./frontend/src/app/models/session/question/question.ts ***!
  \**************************************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _quiz_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quiz/option */ "./frontend/src/app/models/session/quiz/option.ts");

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new _quiz_option__WEBPACK_IMPORTED_MODULE_0__["Option"](o));
        });
    }
    return Question;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/quiz/index.ts":
/*!*******************************************************!*\
  !*** ./frontend/src/app/models/session/quiz/index.ts ***!
  \*******************************************************/
/*! exports provided: Option, Question, Quiz, QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./frontend/src/app/models/session/quiz/option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./frontend/src/app/models/session/quiz/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz */ "./frontend/src/app/models/session/quiz/quiz.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]; });

/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-config */ "./frontend/src/app/models/session/quiz/quiz-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return _quiz_config__WEBPACK_IMPORTED_MODULE_3__["QuizConfig"]; });







/***/ }),

/***/ "./frontend/src/app/models/session/quiz/option.ts":
/*!********************************************************!*\
  !*** ./frontend/src/app/models/session/quiz/option.ts ***!
  \********************************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    return Option;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/quiz/question.ts":
/*!**********************************************************!*\
  !*** ./frontend/src/app/models/session/quiz/question.ts ***!
  \**********************************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./frontend/src/app/models/session/quiz/option.ts");

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new _option__WEBPACK_IMPORTED_MODULE_0__["Option"](o));
        });
    }
    return Question;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/quiz/quiz-config.ts":
/*!*************************************************************!*\
  !*** ./frontend/src/app/models/session/quiz/quiz-config.ts ***!
  \*************************************************************/
/*! exports provided: QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return QuizConfig; });
var QuizConfig = /** @class */ (function () {
    function QuizConfig(data) {
        data = data || {};
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.requiredAll = data.requiredAll;
        this.shuffleQuestions = data.shuffleQuestions;
    }
    return QuizConfig;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/quiz/quiz.ts":
/*!******************************************************!*\
  !*** ./frontend/src/app/models/session/quiz/quiz.ts ***!
  \******************************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-config */ "./frontend/src/app/models/session/quiz/quiz-config.ts");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./frontend/src/app/models/session/quiz/question.ts");


var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new _quiz_config__WEBPACK_IMPORTED_MODULE_0__["QuizConfig"](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new _question__WEBPACK_IMPORTED_MODULE_1__["Question"](q));
            });
        }
    }
    return Quiz;
}());



/***/ }),

/***/ "./frontend/src/app/models/session/session.ts":
/*!****************************************************!*\
  !*** ./frontend/src/app/models/session/session.ts ***!
  \****************************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var _quiz_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz/quiz */ "./frontend/src/app/models/session/quiz/quiz.ts");
/* harmony import */ var _lesson_lesson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson/lesson */ "./frontend/src/app/models/session/lesson/lesson.ts");
/* harmony import */ var _activity_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity/activity */ "./frontend/src/app/models/session/activity/activity.ts");



var Session = /** @class */ (function () {
    function Session(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            if (data.quiz) {
                this.quiz = [];
                data.quiz.forEach(function (q) {
                    _this.quiz.push(new _quiz_quiz__WEBPACK_IMPORTED_MODULE_0__["Quiz"](q));
                });
            }
            if (data.lesson) {
                this.lesson = [];
                data.lesson.forEach(function (l) {
                    _this.lesson.push(new _lesson_lesson__WEBPACK_IMPORTED_MODULE_1__["Lesson"](l));
                });
            }
            if (data.activity) {
                this.activity = [];
                data.activity.forEach(function (a) {
                    _this.activity.push(new _activity_activity__WEBPACK_IMPORTED_MODULE_2__["Activity"](a));
                });
            }
        }
    }
    return Session;
}());



/***/ }),

/***/ "./frontend/src/app/modules/material.module.ts":
/*!*****************************************************!*\
  !*** ./frontend/src/app/modules/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]
            ], providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], useValue: {} },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], useValue: [] },
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./frontend/src/app/services/auth-guard.service.ts":
/*!*********************************************************!*\
  !*** ./frontend/src/app/services/auth-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./frontend/src/app/services/authentication.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./frontend/src/app/services/authentication.service.ts":
/*!*************************************************************!*\
  !*** ./frontend/src/app/services/authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// export interface TokenPayload {
//   username: string;
//   password: string;
//   name?: string;
//   email?: string;
// }
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.baseAuthUrl = 'http://localhost:3000/authapi/';
    }
    // Token Handler
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
    // User Data from Token
    AuthenticationService.prototype.getUserToken = function () {
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
    /**
     * getUserDetails
     */
    AuthenticationService.prototype.getUserDetails = function () {
        this.profile().subscribe(function (user) {
            return user;
        });
    };
    // Check if User is logged in or not
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserToken();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    // Token Removal when user Logs Out
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/login');
    };
    // Structuring the API Calls
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post(this.baseAuthUrl + type, user);
        }
        else {
            base = this.http.get(this.baseAuthUrl + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    // Calling the Register and Login API Endpoints
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./frontend/src/app/services/session.service.ts":
/*!******************************************************!*\
  !*** ./frontend/src/app/services/session.service.ts ***!
  \******************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.baseSessionUrl = 'http://localhost:8080/session';
    }
    SessionService.prototype.getSession = function (sessionID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseSessionUrl).subscribe(function (res) {
                res.forEach(function (session) {
                    if (session.id === sessionID) {
                        resolve(session);
                    }
                });
            });
        });
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./frontend/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./frontend/src/environments/environment.ts ***!
  \**************************************************/
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

/***/ "./frontend/src/main.ts":
/*!******************************!*\
  !*** ./frontend/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./frontend/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./frontend/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./frontend/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\project-sensei\frontend\src\main.ts */"./frontend/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map