App.controller('cadastroController', ['$scope', '$http', '$serviceTesting', function($scope, $http, $serviceTesting) {

    $scope.grid = {};

    ! function init() {

        $scope.grid = new $serviceTesting.Grid();
        $scope.grid.fill();

    }();

}]);