(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Abooottt </h1>\n    <p>Shall go here soon</p>\n    <a target=\"_blank\" href=\"https://www.datamuse.com/api\">Datamuse</a><br>\n    <a target=\"_blank\" href=\"https://github.com/ninap41/Angular-Chrome-Extension-Datamuse\">View Project Code</a>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.sass":
/*!********************************************!*\
  !*** ./src/app/about/about.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.sass */ "./src/app/about/about.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/angular-material.ts":
/*!*************************************!*\
  !*** ./src/app/angular-material.ts ***!
  \*************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/animate.ts":
/*!****************************!*\
  !*** ./src/app/animate.ts ***!
  \****************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
    ]),
]);
// export const spinnerFade = //work on.
//     trigger('isSpinnerOpen', [
//         // ...
//         state('true', style({
//           opacity: 1,
//         })),
//         state('false', style({
//           opacity: 0,
//         })),
//         transition('true => false', [
//           animate('2s')
//         ]),
//         transition('false => true', [
//           animate('2s')
//         ]),
//       ]);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full', },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], pathMatch: 'full', data: { state: 'settings' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], pathMatch: 'full', data: { state: 'about' } },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"], pathMatch: 'full', data: { state: 'help' } },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n<div class=\"background\">\n    <mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\n        <button mat-menu-item class=\"active\" routerLinkActive=\"active\"[routerLink]=\"['']\">Search Words</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['about']\">About</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['settings']\">Settings</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['help']\">Help</button>\n    </mat-menu>\n    <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n      <h2 class=\"m-heading\"><span class=\"font-fam1\">Words. </span><span class=\"font-fam2\">Words? </span><span  class=\"font-fam3\">Words!</span></h2>\n      <!-- <span class=\"gray\"> Find the words; find all the words; learn, discover, and go.</span> -->\n      <!-- <button mat-fab color=\"primary\">W</button>\n      <button mat-fab color=\"accent\">0</button>\n      <button mat-fab color=\"warn\">R</button>\n      <button mat-fab disabled>D</button>\n      <button mat-fab>S</button> -->\n      \n    <br><mat-divider></mat-divider>\n    <main [@routerTransition]=\"getState(o)\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n    </main>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Nothing+You+Could+Do|Rock+Salt\");\n.background {\n  margin: 0 auto;\n  padding: 1em 0em;\n  width: 450px;\n  height: 450px; }\n.m-heading {\n  z-index: 2;\n  position: relative;\n  padding-left: 1.5em;\n  padding-bottom: 1em;\n  vertical-align: top;\n  display: inline-block; }\n.font-fam1 {\n  font-family: 'Rock Salt', cursive; }\n.font-fam2 {\n  font-family: 'Nothing You Could Do', cursive;\n  font-size: 1.2em; }\n.mat-fab {\n  position: absolute;\n  top: 0; }\n.gray {\n  color: rgba(128, 128, 128, 0.671); }\n.font-fam3 {\n  font-family: 'Covered By Your Grace', cursive;\n  font-size: 1.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkdBQVk7QUFDWjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBQUdoQjtFQUNHLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQW9CLEVBQUE7QUFHeEI7RUFDSSxpQ0FBaUMsRUFBQTtBQUdyQztFQUNFLDRDQUE0QztFQUM1QyxnQkFDRixFQUFBO0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFBO0FBR1Y7RUFDSSxpQ0FBaUMsRUFBQTtBQUdyQztFQUNDLDZDQUE2QztFQUM3QyxnQkFDRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3ZlcmVkK0J5K1lvdXIrR3JhY2V8Tm90aGluZytZb3UrQ291bGQrRG98Um9jaytTYWx0Jyk7XG4uYmFja2dyb3VuZHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxZW0gMGVtO1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4gLm0taGVhZGluZyAge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4uZm9udC1mYW0xIHtcbiAgICBmb250LWZhbWlseTogJ1JvY2sgU2FsdCcsIGN1cnNpdmU7XG59XG5cbi5mb250LWZhbTIge1xuICBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxLjJlbVxufVxuLm1hdC1mYWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5cbi5ncmF5IHtcbiAgICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjY3MSk7XG59XG5cbi5mb250LWZhbTMge1xuIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcbiBmb250LXNpemU6IDEuNGVtXG59XG5cbi8vIGZvbnQtZmFtaWx5OiAnUm9jayBTYWx0JywgY3Vyc2l2ZTtcbi8vIGZvbnQtZmFtaWx5OiAnTm90aGluZyBZb3UgQ291bGQgRG8nLCBjdXJzaXZlO1xuLy8gZm9udC1mYW1pbHk6ICdDb3ZlcmVkIEJ5IFlvdXIgR3JhY2UnLCBjdXJzaXZlOyJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate */ "./src/app/animate.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(ds) {
        this.ds = ds;
        this.title = 'chrome-angular';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _animate__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");

// import './polyfills';















// import { Observable } from 'rxjs';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                // Observable,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"],
                _loader_loader_service__WEBPACK_IMPORTED_MODULE_17__["LoaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _home_searches_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/searches.class */ "./src/app/home/searches.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DataService = /** @class */ (function () {
    function DataService(http, ls, router) {
        this.http = http;
        this.ls = ls;
        this.router = router;
        this.url = 'https://api.datamuse.com';
        // START not in current functionality WIP
        this.Context = new _home_searches_class__WEBPACK_IMPORTED_MODULE_4__["Context"]();
        // START not in current functionality WIP
        this.Context.getAndAssign('RhymObjList', { meh: 'meh' });
        // END not in current functionality WIP
    }
    DataService.prototype.getData = function (setWord, types) {
        var _this = this;
        this.word = setWord;
        this.any = types;
        switch (types) {
            case 'rhyme': {
                this.formatUrl = this.url + "/words?rel_rhy=" + this.word;
                this.objRef = 'RhymObjList';
                break;
            }
            case 'definition': {
                this.formatUrl = this.url + "/words?sp=" + this.word + "&md=d&max=1";
                this.objRef = 'DefObjList';
                console.log('definition');
                break;
            }
            case 'antonym': {
                this.formatUrl = this.url + "/words?rel_ant=" + this.word;
                this.objRef = 'AntObjList';
                break;
            }
            case 'synonym': {
                this.formatUrl = this.url + "/words?rel_syn=" + this.word + "&ml=" + this.word;
                this.objRef = 'SynObjList';
                break;
            }
            case 'related': {
                this.formatUrl = this.url + "/words?&ml=" + this.word;
                this.objRef = 'RelObjList';
                break;
            }
            default: {
                console.log('no link reference');
                break;
            }
        }
        this.clearData(this.objRef);
        this.ls.createSpinner(this.objRef + "Spinner");
        setTimeout(function () {
            return _this.http.get(_this.formatUrl)
                .subscribe(function (data) {
                console.log(data.json());
                _this[_this.objRef] = data.json();
                data.json().length === 0 ? _this.errMessage = "\n              <br> Sorry No '" + _this.any + "(s)' Found For '" + _this.word + ".'<br><br>\n              <img width=\"100%\" src=\"https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif\">\n              " : _this.errMessage = '';
            }, function (err) { return _this.errMessage = "\n            Sorry Something Is Wrong With The Datamuse API at this time."; }, function () { return _this.finished(); });
        }, 2000);
    };
    DataService.prototype.finished = function () {
        this.ls.destroySpinner(this.objRef + "Spinner");
    };
    DataService.prototype.clearData = function (list) {
        var _this = this;
        // tslint:disable-next-line:variable-name
        var arr_list = ['AntObjList',
            'RhymObjList',
            'SynObjList',
            'DefObjList',
            'RelObjList'];
        arr_list.forEach(function (l) {
            if (l === list) {
                console.log(l);
                console.log(list);
                _this[l] = null;
            }
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>HALPPPPP </h1>\n    <p>Search for a word</p>\n    <p>Click one of the results to get a definition. ^_^</p>\n    <p>App is simple enough at this point</p>\n    <p>More Help coming soon.</p>\n\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.sass":
/*!******************************************!*\
  !*** ./src/app/help/help.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.sass */ "./src/app/help/help.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    \n<mat-tab-group  #mytab  >\n    <mat-tab   label=\"Definition\"> \n        <form (ngSubmit)=\"this.ds.getData(definition.value, 'definition')\">\n          <mat-form-field>\n            <input matInput #definition placeholder=\"Find Definition\">\n        </mat-form-field>\n        <button type=\"submit\" class=\"button-left\" mat-flat-button color=\"primary\">Search</button>\n        </form> \n        <div class=\"container\">\n            <span [innerHTML]=\"this.ds.errMessage\" class=\"err\"></span>\n            <span *ngIf=\"this.ds.DefObjList!== null || ls.DefObjListSpinner.loading === false\">\n                <span *ngFor=\"let word of this.ds.DefObjList;let idx\">\n                    <mat-chip-list>\n                    <mat-chip (click)=\"getServiceData(0, word.word, 'definition')\" [ngStyle]=\"setMyStyles(word)\" value=\"word.word\"> {{word.word}}  </mat-chip>\n                  </mat-chip-list>\n                  <br>\n                  <div *ngFor=\"let def of word.defs\">\n                      <p>-{{def}} </p>\n                  </div>\n\n              </span>\n            </span>\n            <app-loader *ngIf=\"ls.DefObjListSpinner.loading === true\"></app-loader>        \n          </div>\n      </mat-tab>\n    \n      <mat-tab  label=\"Related\"> \n          <form (ngSubmit)=\"this.ds.getData(related.value, 'related')\">\n            <mat-form-field>\n              <input #related  matInput placeholder=\"Related Words\">\n          </mat-form-field>\n          <button type=\"submit\" mat-flat-button class=\"button-left\" color=\"primary\">Search</button>\n          </form>\n          <div class=\"container\">\n              <span [innerHTML]=\"this.ds.errMessage\" class=\"err\"></span>\n              <span *ngIf=\"this.ds.RelObjList !== null ||  ls.RelObjListSpinner.loading === false\">\n                      <mat-chip-list>\n                        <span *ngFor=\"let word of this.ds.RelObjList; let idx\">\n                          <mat-chip  \n                          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n                          class=\"example-action-button\"\n                          (click)=\"getServiceData(1, word.word, 'definition')\"\n                          [ngStyle]=\"setMyStyles(word)\" \n                          value=\"word.word\">{{word.word}}</mat-chip>\n                        </span>\n                      </mat-chip-list>\n                      \n                </span>\n                <app-loader *ngIf=\"ls.RelObjListSpinner.loading === true\"></app-loader>\n            </div>\n      </mat-tab>\n\n    <mat-tab label=\"Synonym\">\n      <form (ngSubmit)=\"this.ds.getData(synonym.value, 'synonym')\">\n        <mat-form-field>\n            <input #synonym matInput placeholder=\"Find Synonym\">\n        </mat-form-field>\n        <button type=\"submit\" class=\"button-left\" mat-flat-button color=\"primary\">Search</button>\n      </form> \n      <div class=\"container\">\n          <span [innerHTML]=\"this.ds.errMessage\" class=\"err\"></span>\n          <span  *ngIf=\"this.ds.SynObjList !== null ||  ls.SynObjListSpinner.loading === false\">\n                  <mat-chip-list>\n                    <span *ngFor=\"let word of this.ds.SynObjList; let idx\">\n                      <mat-chip (click)=\"getServiceData(2, word.word, 'definition')\" [ngStyle]=\"setMyStyles(word)\" value=\"word.word\">{{word.word}}</mat-chip>\n                    </span>\n                  </mat-chip-list>\n          </span>\n          <app-loader *ngIf=\"ls.SynObjListSpinner.loading === true\"></app-loader> \n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"Antonym\"> \n        <form (ngSubmit)=\"this.ds.getData(antonym.value, 'antonym')\">\n          <mat-form-field>\n            <input #antonym  matInput placeholder=\"Find Antonym\">\n        </mat-form-field>\n        <button type=\"submit\" mat-flat-button class=\"button-left\" color=\"primary\">Search</button>\n        </form>\n        <div class=\"container\">\n            <span [innerHTML]=\"this.ds.errMessage\" class=\"err\"></span>\n            <span *ngIf=\"this.ds.AntObjList !== null ||  ls.AntObjListSpinner.loading === false\">\n            \n                    <mat-chip-list>\n                      <span *ngFor=\"let word of this.ds.AntObjList; let idx\">\n                        <mat-chip (click)=\"getServiceData(3, word.word, 'definition')\"  [ngStyle]=\"setMyStyles(word)\" value=\"word.word\">{{word.word}}</mat-chip>\n                      </span>\n                    </mat-chip-list>\n              </span>\n              <app-loader *ngIf=\"ls.AntObjListSpinner.loading === true\"></app-loader>\n          </div>\n    </mat-tab>\n\n    <mat-tab label=\"Rhyme\"> \n      <form (ngSubmit)=\"this.ds.getData(rhyme.value, 'rhyme')\">\n        <mat-form-field>\n            <input matInput #rhyme placeholder=\"Find Rhyme\">\n          </mat-form-field>\n           <button type=\"submit\" mat-flat-button class=\"button-left\" color=\"primary\">Search</button>\n        </form>\n        <div class=\"container\">\n            <span [innerHTML]=\"this.ds.errMessage\" class=\"err\"></span>\n            <span *ngIf=\"this.ds.RhymObjList !== null || ls.RhymObjListSpinner.loading === false\" >\n                    <mat-chip-list>\n                      <span *ngFor=\"let word of this.ds.RhymObjList\">\n                          <mat-chip (click)=\"getServiceData(4, word.word, 'definition')\" [ngStyle]=\"setMyStyles(word.word)\" value=\"word.word\">{{word.word}}</mat-chip>\n                      </span>\n                    </mat-chip-list>\n            </span>\n            <app-loader *ngIf=\"ls.RhymObjListSpinner.loading === true\"></app-loader>\n        </div>\n        </mat-tab>\n      \n\n        <mat-tab   label=\"Other Search\"> \n        <pre>\n            words with a meaning similar to ringing in the ears\t/words?ml=ringing+in+the+ears\n            words related to duck that start with the letter b\t/words?ml=duck&sp=b*\n            words related to spoon nvmthat end with the letter a\t/words?ml=spoon&sp=*a\n            words that sound like elefint\t/words?sl=elefint\n            words that start with t, end in k, and have two letters in between\t/words?sp=t??k\n            words that are spelled similarly to coneticut\t/words?sp=coneticut\n            words that rhyme with forgetful\t/words?rel_rhy=forgetful\n            words that rhyme with grape that are related to breakfast\t/words?ml=breakfast&rel_rhy=grape\n            adjectives that are often used to describe ocean\t/words?rel_jjb=ocean\n            adjectives describing ocean sorted by how related they are to temperature\t/words?rel_jjb=ocean&topics=temperature\n            nouns that are often described by the adjective yellow\t/words?rel_jja=yellow\n            words that often follow \"drink\" in a sentence, that start with the letter w\t/words?lc=drink&sp=w*\n            words that are triggered by (strongly associated with) the word \"cow\"\t/words?rel_trg=cow\n            suggestions for the user if they have typed in rawand so far\t/sug?s=rawand\n\n        </pre>\n      </mat-tab>\n  </mat-tab-group>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Neucha\");\n.example-container > * {\n  width: 100%; }\n.button-left {\n  margin: 0em 1em; }\n.mat-form-field, .mat-tab-group {\n  padding-top: 1em; }\n.font-fam3 {\n  font-family: 'Nothing You Could Do', cursive; }\n.err {\n  font-family: 'Nothing You Could Do', cursive;\n  word-spacing: 2px;\n  font-size: 1.5em;\n  font-weight: 600; }\n.mat-progress-spinner {\n  margin: 0 auto;\n  background-color: #bdbdbd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkRBQVk7QUFLWjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSw0Q0FBNEMsRUFBQTtBQUc5QztFQUNFLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsY0FBYztFQUNkLHlCQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ldWNoYScpO1xuXG4uZXhhbXBsZS1jb250YWluZXIge1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tbGVmdCB7XG4gIG1hcmdpbjogMGVtIDFlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLCAubWF0LXRhYi1ncm91cCB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5mb250LWZhbTMge1xuICBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgY3Vyc2l2ZTtcbn1cblxuLmVyciB7XG4gIGZvbnQtZmFtaWx5OiAnTm90aGluZyBZb3UgQ291bGQgRG8nLCBjdXJzaXZlO1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSlcbn1cblxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(ds, ls) {
        this.ds = ds;
        this.ls = ls;
        this.empty = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getServiceData = function (tab, word, type) {
        event.preventDefault();
        this.ds.getData(word, type);
        this.empty = this.ds.errMessage;
        if (type === 'definition') {
            this.tabGroup.selectedIndex = 0;
        }
    };
    HomeComponent.prototype.setMyStyles = function (word) {
        var styles = {
            'background-color': word.score > 70000 ? 'plum' : 'rgb(189, 189, 189)',
        };
        return styles;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mytab'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"])
    ], HomeComponent.prototype, "tabGroup", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [] // spinnerFade
            ,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/searches.class.ts":
/*!****************************************!*\
  !*** ./src/app/home/searches.class.ts ***!
  \****************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// START not in current functionality feature WIP

var Context = /** @class */ (function () {
    function Context() {
        this.con = new Map();
        this.searchDict = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](
        // Behavior subject so we can
        // subsribe to an observable thats a map of info that can be set...
        // instead of a bunch of seperate observables  in data.service
        this.con.set('RhymObjList', []).set('SynObjList', []).set('DefObjList', []).set('RelObjList', []));
    }
    Context.prototype.query = function (type, word) {
        return;
    };
    Context.prototype.returnSpecificContext = function () {
        return this.searchDict;
    };
    Context.prototype.addKeyAndList = function () {
        this.searchDict.con.set('newkey', []);
    };
    Context.prototype.newKey = function (newKey) {
        this.searchDict.con.set(newKey, []);
    };
    Context.prototype.getAndAssign = function (key, content) {
        var _this = this;
        this.searchDict._value.set(key, content);
        this.searchDict.asObservable().subscribe(function (data) {
            _this.searchDict._value.set(key, content);
            console.log(_this.searchDict._value);
        });
        // return  this.searchDict.con;
    };
    return Context;
}());

// END not in current functionality feature WIP


/***/ }),

/***/ "./src/app/loader/loader.class.ts":
/*!****************************************!*\
  !*** ./src/app/loader/loader.class.ts ***!
  \****************************************/
/*! exports provided: DataLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoader", function() { return DataLoader; });
var DataLoader = /** @class */ (function () {
    function DataLoader() {
        this.loading = false;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 'value';
    }
    return DataLoader;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  position: relative;\n  margin-top: 2em;\n  margin: 0 auto;\n  left: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(ls) {
        this.ls = ls;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: "\n          <mat-progress-spinner\n            class='spinner'\n            color='primary'\n            mode='indeterminate'\n            value='value'>\n          </mat-progress-spinner>\n        ",
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.class */ "./src/app/loader/loader.class.ts");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.RhymObjListSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
        this.DefObjListSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
        this.AntObjListSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
        this.SynObjListSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
        this.RelObjListSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
    }
    LoaderService.prototype.createSpinner = function (type) {
        this[type].loading = true;
        return;
    };
    LoaderService.prototype.destroySpinner = function (type) {
        this[type].loading = false;
        return;
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Satans </h1>\n    <p>WIP Shall go here soon. Settings for including definitions for related words </p>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.sass":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.sass */ "./src/app/settings/settings.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Niner/angular-chrome-extension/chrome-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map