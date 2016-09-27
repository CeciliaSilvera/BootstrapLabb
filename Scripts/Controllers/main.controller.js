/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("MainController", [
        "$scope",
        "$routeParams",
        "$route",
        "$location",
        function ($scope, $routeParams, $route, $location) {

            $scope.$route = $route;
            $scope.posts = [
                {
                    id: "1",
                    title: "John",
                    body: "här står det lite åsikter"
                },
                {
                    id: "2",
                    title: "Stina",
                    body: "här har någon sagt något helt annat!"
                },
                {
                    id: "3",
                    title: "Andreea",
                    body: "kommentarer kommentarer!"
                }

            ];

            $scope.newPost =
                {
                    id: $scope.posts.length + 1
                };

            $scope.addPost = function () {
                $scope.posts.push($scope.newPost);
                $scope.newPost =
                    {
                        id: $scope.posts.length + 1
                    }
            }

                    $scope.savePosts = function () {
                        var jsonString = JSON.stringify($scope.posts);
                        localStorage.setItem("posts", jsonString);
                    }

                    $scope.loadPosts = function () {
                        var data = localStorage.getItem("posts");
                        if (data) {
                            $scope.posts = JSON.parse(data);

                        }
                    }

                    $scope.delete = function (index) {

                        $scope.posts.splice(index,1);

                    }

                    $scope.go = function (url) {
                        $location.path(url);
                    }
       }
]);