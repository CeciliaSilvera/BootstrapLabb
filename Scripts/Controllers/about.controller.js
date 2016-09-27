/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("AboutController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "About";
            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];
        }
    ]);