/**
 * Created by narinder on 5/3/17.
 */
(function () {
    'use strict';

    angular
        .module('scrumboard.demo')
        .controller('LoginController',
            ['$scope', '$location', 'Login', LoginController]);

    function LoginController($scope, $location, Login) {

        $scope.login = function() {
            // $http.post('/auth_api/login/', $scope.user)
            //     .then(function () {
            //         $location.url('/');
            //     },
            //     function() {
            //         $scope.login_error="Invalid Username/ Password combination";
            //     });

            Login.login($scope.user)
                .then(function () {
                    $location.url('/');
                },
                function () {
                    $scope.login_error="Invalid Username/ Password combination";
                });
        };

        if (Login.isLoggedIn()){
            $location.url('/');
        }
    }
})();
