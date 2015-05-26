taskApp.controller("DashBoardCtrl", function($rootScope,$scope, $http,$location,$q) {

    $scope.heading = "Simple expense manager project";
    $scope.expLists = [];
    $scope.formType = 'add';

    $scope.friendLists = [
        {"name":"Andy","value":"Andy"},
        {"name":"Sandy","value":"Sandy"},
        {"name":"Randy","value":"Randy"},
        {"name":"Mandy","value":"Mandy"}
    ];

    $scope.types = [
        {"name":"cash","value":"cash"},
        {"name":"card","value":"card"},
        {"name":"other","value":"other"}
    ];

    $scope.currencies = [
        {"value":"dollar","name":"USD"},
        {"value":"rupee","name":"INR"},
        {"value":"euro","name":"EUR"}
    ];

    initialize();

    $scope.addFriendFunction = function(addFriend){
        var obj = {
            "name" : addFriend,
            "value" : addFriend
        };
        $scope.friendLists.push(obj);
        $scope.addFriend = "";
        $scope.toggleAdd = false;
    };

    $scope.submitAddForm = function(userForm){
        $scope.expLists.push(userForm);
        initialize();
    }

    $scope.editForm = function(index,form){
        $scope.formType = 'edit';
        $scope.userForm = form;
    }

    $scope.editAddForm = function(index,form){
        $scope.expLists[index] = form;
        $scope.formType = 'add';
        initialize();
    }

    $scope.deleteEntry = function(form){
        $scope.expLists.splice($scope.expLists.indexOf(form),1);
    }

    function initialize(){
        $scope.userForm = {};
        $scope.addFriend = "";
    }

});
