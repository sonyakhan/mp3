/* Details Controller */
app.controller('detailsController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        $scope.imdbID = $routeParams.imdbID;
        $scope.rank = $routeParams.rank;
        $scope.title = $routeParams.title;
        $scope.prev = $scope.rank - 1;
        $scope.next = $scope.rank - (-1);

        $http.get('./data/imdb250.json').success(function(response) {
            $scope.movies = response;
        });
}]);

/* Gallery Controller */
app.controller('galleryController', ['$scope', '$http', function ($scope, $http) {

    $scope.genreFilter = '';
    $http.get('./data/imdb250.json').success(function(response) {
        $scope.movies = response;
    });
}]);

/* List Controller */
app.controller('listController', ['$scope', '$http', function ($scope, $http) {

    $scope.sort = 'rank';
    $scope.movies = [];
    $scope.filterOptions = [
            {id: 1, name: 'Rank'},
            {id: 2, name: 'Title'}
    ];
    $http.get('./data/imdb250.json')
        .success(function (response) {
            $scope.movies = response;
        })
        .error(function (err) {
            console.log(err);
        })
}]);