angular.module('rtfmApp')
  .controller('threadCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'threadRef', 'commentsRef', function($scope, $firebaseObject, $firebaseArray, threadRef, commentsRef) {
    var thread = $firebaseObject(threadRef);
    thread.$bindTo($scope, 'thread');
    $scope.comments = $firebaseArray(commentsRef);
    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
      $scope.newCommentText = '';
    };
  }]);
