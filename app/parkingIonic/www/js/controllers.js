angular.module('starter.controllers', [])

/*
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
*/

.controller('LoginCtrl', function($scope) {
  $scope.input = '';
  $scope.passkey = '';
})

.controller('HomeCtrl', function($scope) {
  $scope.app = '';
})

.controller('AddUserCtrl', function($scope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.mobile = '';
})

.controller('AddVendorCtrl', function($scope) {
  $scope.agencyName = '';
  $scope.ownerName = '';
  $scope.address = '';
  $scope.email = '';
  $scope.mobile = '';
})

.controller('WorkingDaysCtrl', function($scope) {
  $scope.serializeData = '';
  debugger;
  $scope.serializaDataFunction = function(checkedMon,checkedTue,checkedWed,checkedThu,checkedFri,checkedSat,checkedSun) {    
    $scope.serializeData = '';  
    if(checkedMon) 
      $scope.serializeData = $scope.serializeData + "Mon,";
    if(checkedTue) 
      $scope.serializeData = $scope.serializeData + "Tue,";
    if(checkedWed) 
      $scope.serializeData = $scope.serializeData + "Wed,";
    if(checkedThu) 
      $scope.serializeData = $scope.serializeData + "Thu,";
    if(checkedFri) 
      $scope.serializeData = $scope.serializeData + "Fri,";
    if(checkedSat) 
      $scope.serializeData = $scope.serializeData + "Sat,";
    if(checkedSun) 
      $scope.serializeData = $scope.serializeData + "Sun";
    //return $scope.serializeData;
  }
})

.controller('AddParkingCtrl', function($scope, Hours, Minutes, Vendors) {
  $scope.hours = Hours.all();
  $scope.mins = Minutes.all();
  $scope.vendors = Vendors.all();
  $scope.ackData = false;     
})

.controller('AddTariffCtrl', function($scope,VehicleTypes,Vendors) {
  $scope.vehicleTypes = VehicleTypes.all();
  $scope.vendors = Vendors.all();
})

.controller('RegisterVehicleCtrl', function($scope,Vehicles,VehicleTypes,Users) {
  $scope.vehicleTypes = VehicleTypes.all();
  $scope.users = Users.all();
  $scope.vehicles = Vehicles.all();  
});
