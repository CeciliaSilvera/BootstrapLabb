/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
            .when("/", {
                templateUrl: "Views/Home.html",
                controller: "HomeController",
                caseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/About", {
                templateUrl: "Views/About.html",
                controller: "AboutController",
                caseInsensitiveMatch: true,
                activeTab: "About"
            });
        }
    ]);