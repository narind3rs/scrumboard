/**
 * Created by narinder on 5/2/17.
 */
(function(){
    'use strict';

    angular.module('scrumboard.demo', ['ngRoute'])
        .controller('ScrumboardController',
            ['$scope', '$http', '$location', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, $location, Login) {
        $scope.add = function(list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('scrumboard/cards/', card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                function(error){
                    alert('Could not save card with error: ' + error);
                });
        };

        Login.redirectIfNotLoggedIn();

        $scope.data = [];

        $scope.logout = Login.logout;
        $scope.sortBy='story_points';
        $scope.reverse=true;
        $scope.showFilters=false;

        $http.get('/scrumboard/lists/')
            .then(function(response) {
                $scope.data = response.data;
            }
        );
    }

}());
