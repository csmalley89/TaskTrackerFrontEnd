"use strict";

app.controller("NavCtrl", function($scope, SearchTermData, $location){
  $scope.searchText = SearchTermData;
  $scope.navItems = [
      {url: "#/newtask", name: "New Task"},
      {url: "#/alltasks", name: "home"}
  ];
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
