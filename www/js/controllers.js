angular.module('controllers', [])

.controller('Articles', function($scope, Articles) {
    $scope.articles = Articles.all();
})

.controller('ArticleDetail', function($scope, $stateParams, Articles) {
    $scope.article = Articles.find();
})

.controller('Tags', function($scope, Tags) {
    $scope.tags = Tags.all();
})

.controller('TagResult', function($scope, $stateParams, Tags) {
    $scope.title = $stateParams.name;
    $scope.articles = Tags.find($scope.title);
})