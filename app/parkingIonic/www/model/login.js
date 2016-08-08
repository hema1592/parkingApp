angular.module('login')
    .service('loginService', ['$http', function ($http) {
        this.verifyLogin = function () {
            return $http({
                method: "POST",
                url: "http://192.168.10.5:7337/login/" + $scope.login.input + "/" + $scope.login.passkey
            }).then(function success(response) {
                alert(JSON.stringify(response.data));
            }, function error(response) {
                alert(JSON.stringify(response.statusText));
            });
        }
    }]);