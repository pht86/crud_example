var myApp = angular.module('crudApp', []);
myApp.controller('crudCtrl', function ($scope){
    var students = [
        {name: "Nguyễn Minh Phương", birthYear: "1986", address: "Hà Nội"},
        {name: "Nguyễn Minh Phương", birthYear: "1986", address: "Hà Nội"},
        {name: "Nguyễn Minh Phương", birthYear: "1986", address: "Hà Nội"},
        {name: "Nguyễn Minh Phương", birthYear: "1986", address: "Hà Nội"}
    ]
    $scope.students = students;
    $scope.addUser = function(){
        $scope.students.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "Thêm mới thành công!";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editUser = function(){
        $scope.message = "Sửa thành công!";
    };
    $scope.deleteUser = function(){
        $scope.students.splice($scope.students.indexOf($scope.clickedUser), 1);
        $scope.message = "Đã xóa thành công!";
    };
    $scope.clearMessage = function(){
        $scope.message = "";
    };
});



