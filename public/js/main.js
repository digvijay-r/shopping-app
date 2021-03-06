var shoppingApp = angular.module("shoppingApp", ["ui.router", "AppCtrls"])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            
            .state('register', {
                url: "/register",
                templateUrl: "views/register.html",
                data: { pageTitle: '' },
                controller: "registerCtrl",
            })
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                data: { pageTitle: '' },
                controller: "loginCtrl",
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "views/dashboard.html",
                data: { pageTitle: '' },
                controller: "dashboardCtrl",
            })
            .state('addProducts', {
                url: "/addProducts",
                templateUrl: "views/addProducts.html",
                data: { pageTitle: '' },
                controller: "addProductsCtrl",
            })
            .state('purchaseList', {
                url: "/purchaseList",
                templateUrl: "views/purchaseList.html",
                data: { pageTitle: '' },
                controller: "purchaseListCtrl",
            })
            .state("state2", {
                url: "#",
                template: "<p>Logout successfull</p>",
                controller: "Ctrl2"
            });
    });

var ctrls = angular.module("AppCtrls", []);

ctrls.controller("Ctrl2", function ($scope) {
    console.log("Ctrl2 loaded.");
});
