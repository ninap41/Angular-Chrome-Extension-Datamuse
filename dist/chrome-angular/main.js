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
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");








var routes = [
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], pathMatch: 'full', },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], pathMatch: 'full', data: { state: 'settings' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], pathMatch: 'full', data: { state: 'about' } },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], pathMatch: 'full', data: { state: 'help' } },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"], pathMatch: 'full', data: { state: 'favorites' } },
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

module.exports = "   \n<div class=\"background\">\n    <mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\n        <button mat-menu-item class=\"active\" routerLinkActive=\"active\"[routerLink]=\"['']\">Search Words</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['about']\">About</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['settings']\">Settings</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['help']\">Help</button>\n        <button mat-menu-item routerLinkActive=\"active\"[routerLink]=\"['favorites']\">Session Favorites</button>\n    </mat-menu>\n    <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n      <h2 class=\"m-heading\"><span class=\"font-fam1\">Words. </span><span class=\"font-fam2\">Words? </span><span  class=\"font-fam3\">Words!</span></h2>\n    <br><mat-divider></mat-divider>\n    <main [@routerTransition]=\"getState(o)\">\n        <router-outlet class=\"main\" #o=\"outlet\"></router-outlet>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Nothing+You+Could+Do|Rock+Salt\");\n.background {\n  margin: 0 auto;\n  padding: 1em 0em;\n  width: 750px;\n  height: 750px;\n  position: absolute;\n  left: 0;\n  right: 0; }\n.background > .m-heading {\n    left: 0;\n    right: 0;\n    padding: 0 10%; }\n.m-heading {\n  z-index: 2;\n  position: relative;\n  padding-left: 1.5em;\n  padding-bottom: 1em;\n  vertical-align: top;\n  display: inline-block; }\n.font-fam1 {\n  font-family: 'Rock Salt', cursive; }\n.font-fam2 {\n  font-family: 'Nothing You Could Do', cursive;\n  font-size: 1.2em; }\n.mat-fab {\n  position: absolute;\n  top: 0; }\n.gray {\n  color: rgba(128, 128, 128, 0.671); }\n.font-fam3 {\n  font-family: 'Covered By Your Grace', cursive;\n  font-size: 1.4em; }\n.mat-chip-list, button {\n  margin: 1em 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkdBQVk7QUFDWjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVEsRUFBQTtBQVBaO0lBVVEsT0FBTztJQUNQLFFBQVE7SUFDUixjQUNKLEVBQUE7QUFJSDtFQUNHLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQW9CLEVBQUE7QUFHeEI7RUFDSSxpQ0FBaUMsRUFBQTtBQUdyQztFQUNFLDRDQUE0QztFQUM1QyxnQkFDRixFQUFBO0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFBO0FBR1Y7RUFDSSxpQ0FBaUMsRUFBQTtBQUdyQztFQUNDLDZDQUE2QztFQUM3QyxnQkFDRCxFQUFBO0FBTUE7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvdmVyZWQrQnkrWW91citHcmFjZXxOb3RoaW5nK1lvdStDb3VsZCtEb3xSb2NrK1NhbHQnKTtcbi5iYWNrZ3JvdW5ke1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDFlbSAwZW07XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGhlaWdodDogNzUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICA+IC5tLWhlYWRpbmcge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMCAxMCVcbiAgICB9XG5cbn1cblxuIC5tLWhlYWRpbmcgIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLmZvbnQtZmFtMSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2NrIFNhbHQnLCBjdXJzaXZlO1xufVxuXG4uZm9udC1mYW0yIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RoaW5nIFlvdSBDb3VsZCBEbycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS4yZW1cbn1cbi5tYXQtZmFiIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xufVxuXG4uZ3JheSB7XG4gICAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42NzEpO1xufVxuXG4uZm9udC1mYW0zIHtcbiBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XG4gZm9udC1zaXplOiAxLjRlbVxufVxuXG4vLyBmb250LWZhbWlseTogJ1JvY2sgU2FsdCcsIGN1cnNpdmU7XG4vLyBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgY3Vyc2l2ZTtcbi8vIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcblxuLm1hdC1jaGlwLWxpc3QsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn0iXX0= */"

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



var AppComponent = /** @class */ (function () {
    function AppComponent() {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _search_related_related_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/related/related.component */ "./src/app/search/related/related.component.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _search_db_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/db.service */ "./src/app/search/db.service.ts");








// Material Girl
 // only needs to be in module;
// Routing

// Components








// Services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _search_related_related_component__WEBPACK_IMPORTED_MODULE_17__["RelatedComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__["FavoritesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["DemoMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [
                _loader_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
                _search_search_service__WEBPACK_IMPORTED_MODULE_19__["SearchService"],
                _search_db_service__WEBPACK_IMPORTED_MODULE_20__["DbService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br> \n  <h3>History</h3>\n  <br>\n  <mat-chip-list *ngIf=\"this.his\">\n      <span *ngFor=\"let word of this.his; let idx\">\n        <mat-chip >\n          <span (click)=\"searchAgain(word, true)\">{{word}}</span>\n        </mat-chip>\n      </span>\n  </mat-chip-list>\n  <span *ngIf=\"this.his.length === 0\">\n      <p>You have no history yet.</p>\n  </span>\n  <br>\n  <h3>Favorites</h3>\n  <br>\n  <span *ngIf=\"this.fav.length === 0 || this.fav === undefined\">\n    <p>You have no favorites yet.</p>\n  </span>\n  <mat-chip-list>\n      <span *ngFor=\"let word of this.fav; let idx\">\n        <mat-chip >\n          <span (click)=\"searchAgain(word, true)\">{{word}}</span>\n        </mat-chip>\n      </span>\n  </mat-chip-list>\n  <br>\n  <button class=\"btn btn-primary\"(click) =\"downloadFile(this.fav)\">Save Words</button>\n</div>"

/***/ }),

/***/ "./src/app/favorites/favorites.component.sass":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.service */ "./src/app/search/search.service.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(s) {
        this.s = s;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.fav = this.s.context.favorites;
        this.his = this.s.history;
    };
    FavoritesComponent.prototype.downloadFile = function (favs) {
        this.s.downloadFile(favs);
    };
    FavoritesComponent.prototype.searchAgain = function (word, isNotBackFor) {
        this.s.createSearch(word, isNotBackFor);
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.sass */ "./src/app/favorites/favorites.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
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
        this.uniSpinner = new _loader_class__WEBPACK_IMPORTED_MODULE_2__["DataLoader"]();
    }
    LoaderService.prototype.startSpinner = function () {
        this.uniSpinner.loading = true;
    };
    LoaderService.prototype.stopSpinner = function () {
        this.uniSpinner.loading = false;
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

/***/ "./src/app/search/db.service.ts":
/*!**************************************!*\
  !*** ./src/app/search/db.service.ts ***!
  \**************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbService = /** @class */ (function () {
    function DbService(
    // private low: low,
    // private db : db
    ) {
        // this.dbase = new db();
        // const adapter = new FileSync('db.json')
        // this.dbase = this.low(adapter);
    }
    DbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/search/related/related.component.html":
/*!*******************************************************!*\
  !*** ./src/app/search/related/related.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div *ngIf=\"this.con.length > 0\" class=\"container\">\n  <p>{{ this.title }}</p>\n        <mat-chip-list>\n          <span *ngFor=\"let word of this.con; let idx\">\n            <mat-chip  \n            class=\"example-action-button\"\n            value=\"word.word\">\n            <span (click)=\"searchAgain(word.word, false)\">{{ word.word }}    </span> \n                &nbsp;<mat-icon class=\"heart\" (click)=\"saveWord(word.word)\" aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n          </mat-chip>\n          <br>\n            <div *ngIf=\"this.title === 'Word'\" class=\"\">\n              <ul *ngFor=\"let def of word.defs\">\n                <li>{{def}}</li>\n              </ul>\n            </div>\n          </span>\n        </mat-chip-list>\n  </div>  "

/***/ }),

/***/ "./src/app/search/related/related.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/search/related/related.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Neucha\");\n.example-container > * {\n  width: 100%; }\n.button-left {\n  margin: 0em 1em; }\n.mat-form-field, .mat-tab-group {\n  padding-top: 1em; }\n.font-fam3 {\n  font-family: 'Nothing You Could Do', cursive; }\n.err {\n  font-family: 'Nothing You Could Do', cursive;\n  word-spacing: 2px;\n  font-size: 1.5em;\n  font-weight: 600; }\n.mat-progress-spinner {\n  margin: 0 auto;\n  background-color: #bdbdbd; }\n.remove {\n  cursor: pointer; }\n.heart {\n  cursor: pointer;\n  color: #cf1d7f;\n  white-space: pre;\n  max-height: 10px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9zZWFyY2gvcmVsYXRlZC9yZWxhdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDZEQUFZO0FBS1o7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsNENBQTRDLEVBQUE7QUFHOUM7RUFDRSw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGNBQWM7RUFDZCx5QkFBb0MsRUFBQTtBQUd0QztFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGVBQWU7RUFDZixjQUF3QjtFQUN4QixnQkFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvcmVsYXRlZC9yZWxhdGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ldWNoYScpO1xuXG4uZXhhbXBsZS1jb250YWluZXIge1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tbGVmdCB7XG4gIG1hcmdpbjogMGVtIDFlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLCAubWF0LXRhYi1ncm91cCB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5mb250LWZhbTMge1xuICBmb250LWZhbWlseTogJ05vdGhpbmcgWW91IENvdWxkIERvJywgY3Vyc2l2ZTtcbn1cblxuLmVyciB7XG4gIGZvbnQtZmFtaWx5OiAnTm90aGluZyBZb3UgQ291bGQgRG8nLCBjdXJzaXZlO1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSlcbn1cblxuLnJlbW92ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYXJ0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmdiKDIwNywgMjksIDEyNyk7XG4gIHdoaXRlLXNwYWNlOnByZTtcbiAgbWF4LWhlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/search/related/related.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/search/related/related.component.ts ***!
  \*****************************************************/
/*! exports provided: RelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedComponent", function() { return RelatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/search/search.service.ts");




var RelatedComponent = /** @class */ (function () {
    function RelatedComponent(snackBar, s) {
        this.snackBar = snackBar;
        this.s = s;
    }
    RelatedComponent.prototype.ngOnInit = function () {
    };
    RelatedComponent.prototype.searchAgain = function (word, boole) {
        if (word === '') {
            this.snackBar.open("Please Enter Word", '', {
                duration: 5000,
            });
        }
        else {
            this.s.context.word === word ?
                this.snackBar.open("That word is already displayed (" + word + ")", '', {
                    duration: 5000,
                }) : this.s.createSearch(word, false);
        }
    };
    RelatedComponent.prototype.saveWord = function (word) {
        var bool = null;
        this.s.context.favorites.forEach(function (w) {
            if (word === w) {
                bool = true;
            }
        });
        if (bool === true) {
            this.snackBar.open("That word is already in your favorites (" + word + ")", '', {
                duration: 5000,
            });
        }
        else {
            this.s.context.favorites.push(word);
            this.snackBar.open('You favorited', word, {
                duration: 5000,
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RelatedComponent.prototype, "con", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RelatedComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RelatedComponent.prototype, "index", void 0);
    RelatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-related',
            template: __webpack_require__(/*! ./related.component.html */ "./src/app/search/related/related.component.html"),
            styles: [__webpack_require__(/*! ./related.component.scss */ "./src/app/search/related/related.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], RelatedComponent);
    return RelatedComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-search\">\n    <br>\n    <form name=\"wordForm\" (ngSubmit)=\"onSubmit(word.value, false)\">\n        <mat-form-field>\n            <input matInput #word placeholder=\"Search Word\">\n        </mat-form-field>\n        <button type=\"submit\" \n          class=\"button-left\" \n          mat-flat-button color=\"primary\">Search</button>\n        <button *ngIf=\"this.s.history.length > 0\" \n          matTooltip=\"Check History\"\n          [routerLink]=\"['favorites']\"\n          mat-flat-button color=\"warning\"><i class=\"fas fa-history\"></i></button>\n        <button *ngIf=\"this.s.historyIndex > 0\" \n          [disabled]=\"this.ls.uniSpinner.loading === true\" \n          (click)=\"this.s.goBack(true)\" \n          mat-icon-button\n          matTooltip=\"Back\"  \n          color=\"warning\"><i class=\"fas fa-chevron-left\"></i></button>\n        <button *ngIf=\"this.s.historyIndex !== this.s.history.length - 1 && this.s.historyIndex  !== this.s.history.length\" \n          [disabled]=\"this.ls.uniSpinner.loading === true\" \n          (click)=\"this.s.goForward(true)\" \n          matTooltip=\"Forward\"  \n          mat-icon-button color=\"warning\"  \n          color=\"warning\"><i class=\"fas fa-chevron-right\"></i></button>\n     </form>\n</div>\n\n<app-loader *ngIf=\"this.ls.uniSpinner.loading === true\"></app-loader>\n\n<span *ngIf=\"this.ls.uniSpinner.loading === false\" [innerHTML]=\"context.errMessage\"  class=\"\"></span>\n\n<div class=\"\" *ngIf=\"this.ls.uniSpinner.loading === false\" >\n  <br>\n  <app-related [con]=\"this.context.searchDict.defList\" [index]=\"this.currentIndex\" [title]='this.title[0]'></app-related>\n  <br>\n  <app-related [con]=\"this.context.searchDict.synList\" [index]=\"this.currentIndex\" [title]='this.title[1]'></app-related>\n  <br>\n  <app-related [con]=\"this.context.searchDict.relList\" [index]=\"this.currentIndex\" [title]='this.title[3]'></app-related>\n  <br>\n  <app-related [con]=\"this.context.searchDict.rhymList\" [index]=\"this.currentIndex\" [title]='this.title[4]'></app-related>\n  <br>\n  <app-related [con]=\"this.context.searchDict.antList\" [index]=\"this.currentIndex\" [title]='this.title[2]'></app-related>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-left {\n  margin: 0 1em; }\n\n.container-search {\n  position: relative;\n  width: 100%;\n  margin: 0 auto; }\n\nform {\n  position: relative;\n  right: 0;\n  margin: 0 auto;\n  padding-left: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaW5lci9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vY2hyb21lLWFuZ3VsYXIvc3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUlsQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tbGVmdCB7XG4gICAgbWFyZ2luOiAwIDFlbTtcbn1cblxuLmNvbnRhaW5lci1zZWFyY2gge1xuICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gXG59XG5cbmZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDowO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(s, ls, snackBar) {
        this.s = s;
        this.ls = ls;
        this.snackBar = snackBar;
        this.title = ['Word', 'Synonym', 'Antonyms', 'Related Words', 'Rhymes'];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.context = this.s.context;
    };
    SearchComponent.prototype.onSubmit = function (word, isNotBackFor) {
        if (word === '') {
            this.snackBar.open("Please Enter Word", 'You Left The Field Blank', {
                duration: 5000,
            });
        }
        else {
            this.s.context.word === word ?
                this.snackBar.open("That word is already displayed (" + word + ")", '', {
                    duration: 5000,
                }) : this.s.createSearch(word, isNotBackFor); // boolean is for if we DONT want to push to history
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _search_searches_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/searches.class */ "./src/app/search/searches.class.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SearchService = /** @class */ (function () {
    function SearchService(http, ls, snackBar) {
        this.http = http;
        this.ls = ls;
        this.snackBar = snackBar;
        this.context = new _search_searches_class__WEBPACK_IMPORTED_MODULE_5__["Context"]().createContext();
        this.history = [];
        this.historyIndex = -1;
        this.history = [];
    }
    SearchService.prototype.createSearch = function (word, isNotBackFor) {
        var _this = this;
        this.ls.startSpinner();
        var list = ['rhymList', 'synList', 'defList', 'relList', 'antList'];
        this.context.word = word;
        // tslint:disable-next-line:prefer-for-of
        setTimeout(function () {
            var _loop_1 = function (i) {
                // tslint:disable-next-line:prefer-const
                var url = _this.context.createUrl(list[i]);
                _this.http.get(url)
                    .subscribe(function (data) {
                    // console.log(data.json());
                    _this.context.searchDict[list[i]] = data.json();
                    i === list.length - 1 ? _this.validator(_this.context.searchDict, list) : console.log('continue');
                }, function (err) { return _this.context.errMessage = "Datamuse API problem. Ain't me!" + '\n' + ("" + JSON.stringify(err)); }, function () { return i === list.length - 1 ? _this.finished(_this.context.word, isNotBackFor) : console.log('continue'); });
            };
            for (var i = 0; i < list.length; i++) {
                _loop_1(i);
            }
        }, 2000);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.context);
    };
    SearchService.prototype.validator = function (searchDict, keys) {
        var emptyBreakPoint = keys.length;
        var emptyCount = 0;
        keys.forEach(function (key) {
            searchDict[key].length === 0 ? emptyCount += 1 : console.log('nah');
        });
        emptyCount === emptyBreakPoint ?
            this.context.errMessage = "\n          <br> Sorry Nothing Found For '" + this.context.word + ".'<br><br>\n          <img width=\"100%\" src=\"https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif\">\n          " : this.context.errMessage = '';
        return this.context.errMessage;
    };
    SearchService.prototype.finished = function (word, isNotBackFor) {
        var _this = this;
        isNotBackFor === true ? function () {
            console.log('dont push history');
            console.log(_this.historyIndex);
            console.log(JSON.stringify(_this.history));
        }
            : this.isNotBackForward();
        this.ls.stopSpinner();
    };
    SearchService.prototype.isNotBackForward = function () {
        console.log('pushing into history');
        this.history.push(this.context.word);
        this.historyIndex = this.history.length - 1;
        console.log(this.historyIndex);
        console.log(JSON.stringify(this.history));
    };
    SearchService.prototype.goBack = function (isNotBackFor) {
        this.historyIndex -= 1;
        if (this.historyIndex == 0) {
            this.snackBar.open('You went all the way back in your history', '', {
                duration: 2000,
            });
            var previousWord = this.history[this.historyIndex];
            this.createSearch(previousWord, isNotBackFor); // we dont want to push to history
        }
        else {
            var previousWord = this.history[this.historyIndex];
            this.createSearch(previousWord, isNotBackFor); // we dont want to push to history
            this.snackBar.open("Went back to previous word...", "\"" + this.context.word + "\"", {
                duration: 5000,
            });
        }
        console.log('dont push history');
        console.log(this.historyIndex);
        console.log(JSON.stringify(this.history));
    };
    // WIP forward button
    SearchService.prototype.goForward = function (isNotBackFor) {
        this.historyIndex += 1;
        if (this.historyIndex === this.history.length) {
            this.snackBar.open(' You went forward. You are at the END of your history', '<span>ViewHistory</span>', {
                duration: 2000,
            });
            this.createSearch(this.context.word, isNotBackFor); // we dont want to push to history
        }
        else {
            var nextWord = this.history[this.historyIndex];
            this.createSearch(nextWord, true);
            this.historyIndex += 1;
            this.snackBar.open("Went back to next word...", "\"" + this.context.word + "\"", {
                duration: 5000,
            });
        }
    };
    // WIP forward button
    SearchService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SearchService);
    return SearchService;
}()); // end of class



/***/ }),

/***/ "./src/app/search/searches.class.ts":
/*!******************************************!*\
  !*** ./src/app/search/searches.class.ts ***!
  \******************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
var Context = /** @class */ (function () {
    function Context() {
        this.url = 'https://api.datamuse.com';
        this.word = '';
        this.sdKeys = ['rhymList', 'synList', 'defList', 'relList', 'antList']; // however many lists you want to populate
        this.searchDict = {
            rhymList: [],
            synList: [],
            defList: [],
            relList: [],
            antList: []
        };
        this.settings = {
            rhymeShow: true,
            definitionShow: true,
            synonymShow: true,
            antonymShow: true
        };
        this.errMessage = '';
        this.loadState = false;
        this.loadStateMessage = 'getting info....';
        this.favorites = [];
    }
    Context.prototype.createContext = function () {
        return this;
    };
    Context.prototype.createUrl = function (key) {
        var formattedUrl = null;
        // tslint:disable-next-line:prefer-const
        var urls = {
            rhymList: this.url + "/words?&ml=" + this.word,
            defList: this.url + "/words?sp=" + this.word + "&md=d&max=1",
            synList: this.url + "/words?rel_syn=" + this.word + "&ml=" + this.word,
            antList: this.url + "/words?rel_ant=" + this.word,
            relList: this.url + "/words?&ml=" + this.word,
        };
        formattedUrl = urls[key];
        return formattedUrl;
    };
    return Context;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Satans </h1>\n    <p>Settings for limiting words and showing different kinds of words</p>\n</div>"

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