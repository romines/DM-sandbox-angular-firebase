var rtfm = angular.module('rtfmApp', ['firebase', 'ui.router']);

rtfm
  .constant('fb', {
    url: 'https://sandboxdm7.firebaseio.com/'
  })
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('threads', {
        url: '/threads',
        templateUrl: 'threads/threads.html',
        controller: 'threadsCtrl',
        resolve: {
          threadsRef: function(threadService) {
            return threadService.getThreads();
          }
        }
      })
      .state('thread', {
        url: '/threads/:threadId',
        templateUrl: 'threads/thread/thread.html',
        controller: 'threadCtrl',
        resolve: {
          threadRef: function (threadService, $stateParams) {
            return threadService.getThread($stateParams.threadId);
          },
          commentsRef: function (threadService, $stateParams) {
            return threadService.getComments($stateParams.threadId);
          }
        }
      });

      $urlRouterProvider
        .otherwise('/threads');

  }]);
