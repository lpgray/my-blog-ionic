// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('blog', ['ionic', 'controllers', 'services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

// 思考：
// $stateProvider, $urlRouterProvider

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "views/tabs.html"
    })

    .state('tab.articles', {
        url: '/articles',
        views: {
            'tab-articles': {
                templateUrl: 'views/tab-articles.html',
                controller: 'Articles'
            }
        }
    })
    .state('tab.article-detail', {
        url : '/article/:articleId',
        views: {
            'tab-articles': {
                templateUrl: 'views/article-detail.html',
                controller: 'ArticleDetail'
            }
        }
    })

    // .state('tab.dash', {
    //     url: '/dash',
    //     views: {
    //         'tab-dash': {
    //             templateUrl: 'templates/tab-dash.html',
    //             controller: 'DashCtrl'
    //         }
    //     }
    // })

    .state('tab.tags', {
        url: '/tags',
        views: {
            'tab-tags': {
                templateUrl: 'views/tab-tags.html',
                controller: 'Tags'
            }
        }
    })
    .state('tab.tag-result', {
        url: '/tag/:name',
        views: {
            'tab-tags': {
                templateUrl: 'views/tag-result.html',
                controller: 'TagResult'
            }
        }
    })

    $urlRouterProvider.otherwise('/tab/articles');
})