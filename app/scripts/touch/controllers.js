"use strict";

angular.module("playgroundApp")
  .controller("TouchCtrl", function ($scope) {
    $scope.dismiss = function () {
      var listItem = angular.element(this.element);
      listItem.classList.remove("active");
      listItem.classList.add("disabled");
    };
    $scope.save = function () {
      var listItem = angular.element(this.element);
      // listItem.classList.remove("disabled");
      // listItem.classList.add("active");
      console.log(listItem);
      console.log("Saved");
    };
    $scope.list = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
    ];
  });
