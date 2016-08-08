angular.module('starter.controllers', [])

  //define(['./model/login'], function (module) {
  //  return module
  .controller('LoginCtrl', function ($scope, parkingappservice) {    
    $scope.login = {};
    $scope.tryLoginVerification = function () {
      if ($scope.login.input != undefined && $scope.login.passkey != undefined) {
        return parkingappservice.getLoginVerified($scope.login.input, $scope.login.passkey).then(function () {
          //$state.go('login');
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }

    };
  })

  .controller('HomeCtrl', function ($scope) {
  $scope.app = '';
  google.maps.event.addDomListener(window, 'load', function () {
    var myLatlng = new google.maps.LatLng(13.082680199999999, 80.2707184);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function (pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      /*var myLocation = new google.maps.Marker({
          position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          map: map,
          title: "My Location"
      });*/
    });

    var icons = {
      parking: {
        icon: '../img/ParkingMarker.png'
      }
    };

    function addMarker(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
    }

    var features = [
      {
        position: new google.maps.LatLng(13.082630199999999, 80.2707184),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(13.082650199999999, 80.2701184),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(13.082680199999999, 80.27031842),
        type: 'parking'
      }
    ];

    for (var i = 0, feature; feature = features[i]; i++) {
      addMarker(feature);
    }

    $scope.map = map;
  });
})

  .controller('AddUserCtrl', function ($scope, parkingappservice) {
    $scope.signup = {};
    $scope.addNewUser = function () {
      $scope.signup.usertype = 2;
      alert(JSON.stringify($scope.signup));
      if ($scope.signup.username != undefined && $scope.signup.firstname != undefined && $scope.signup.lastname != undefined && $scope.signup.email != undefined && $scope.signup.phoneno != undefined && $scope.signup.password != undefined) {
        return parkingappservice.addUserDetails($scope.signup.username, $scope.signup.phoneno,$scope.signup.firstname,$scope.signup.lastname,$scope.signup.email,$scope.signup.password,$scope.signup.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }

    };
  })

  .controller('AddVendorCtrl', function ($scope) {
    $scope.vendor = '';
    $scope.addNewVendor = function () {
      alert(JSON.stringify($scope.vendor));
      if ($scope.vendor.agencyname != undefined && $scope.vendor.ownername != undefined && $scope.vendor.streetname != undefined && $scope.vendor.area != undefined && $scope.vendor.city != undefined && $scope.vendor.code != undefined && $scope.vendor.landmark != undefined) {
        return parkingappservice.addUserDetails($scope.vendor.username, $scope.vendor.phoneno,$scope.vendor.firstname,$scope.vendor.lastname,$scope.vendor.email,$scope.vendor.password,$scope.vendor.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }

    };
  })

  .controller('WorkingDaysCtrl', function ($scope) {
    $scope.serializeData = '';
    $scope.serializaDataFunction = function (checkedMon, checkedTue, checkedWed, checkedThu, checkedFri, checkedSat, checkedSun) {
      $scope.serializeData = '';
      if (checkedMon)
        $scope.serializeData = $scope.serializeData + "Mon,";
      if (checkedTue)
        $scope.serializeData = $scope.serializeData + "Tue,";
      if (checkedWed)
        $scope.serializeData = $scope.serializeData + "Wed,";
      if (checkedThu)
        $scope.serializeData = $scope.serializeData + "Thu,";
      if (checkedFri)
        $scope.serializeData = $scope.serializeData + "Fri,";
      if (checkedSat)
        $scope.serializeData = $scope.serializeData + "Sat,";
      if (checkedSun)
        $scope.serializeData = $scope.serializeData + "Sun";
      //return $scope.serializeData;
    }
  })

  .controller('AddParkingCtrl', function ($scope) {
    /*Hours, Minutes, Vendors
    $scope.hours = Hours.all();
    $scope.mins = Minutes.all();
    $scope.vendors = Vendors.all();
    $scope.ackData = false;
    getPosition();
    function getPosition() {

      var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
      }
      //var watchID = 
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

      function onSuccess(position) {
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
      };

      function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      }
    }*/
  })

  .controller('AddTariffCtrl', function ($scope) {
    /*VehicleTypes, Vendors
    $scope.vehicleTypes = VehicleTypes.all();
    $scope.vendors = Vendors.all();*/
  })

  .controller('RegisterVehicleCtrl', function ($scope) {
    /*, Vehicles, VehicleTypes, Users
    $scope.vehicleTypes = VehicleTypes.all();
    $scope.users = Users.all();
    $scope.vehicles = Vehicles.all();*/
  });