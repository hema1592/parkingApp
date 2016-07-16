angular.module('starter.services', [])
/*.service('service', function($http, $rootScope) {
  var urls = {
    addLocation : /location/:loc_address/:loc_area/:loc_landmark/:loc_city,
    deleteLocation : /location/:locationid/:uid/:upass,
    updateLocation : /location/:locationid/:loc_address/:loc_area/:loc_landmark/:loc_city,
    getLocationById : /location/:locationid,

    getLoginVerified : /login/:user_id/:user_pass,

    addParkingLotDetails : /parking/:parking_name/:parking_vendor_id/:parking_loc_id/:parking_tariff_id/:parking_slots/:parking_from_time/:parking_to_time/:parking_workdays_id/:parking_managed_status,
    deleteParkingLotDetails : /parking/:parkingid/:uid/:upass,
    updateParkingLotDetails : /parking/:parkingid/:vendorid/:parkingname/:locationid/:tariffid/:totalslots/:fromtime/:totime/:workdaysid/:managedstatus,
    getParkingLotDetailsById : /parking/:parkingid,

    addPaymentMethodDetails : /payment_method/:method_desc/:method_redirect_url,
    deletePaymentMethodDetails : /payment_method/:method_id/:uid/:upass,
    updatePaymentMethodDetails : /payment_method/:paymentmethodid/:methodname/:methodurl,

    addSeasonalBookingDetails : /seasonal_booking/:sp_parkingid/:sp_vendorid/:sp_carid/:sp_bookingfrom/:sp_bookingto/:sp_workdaysid/:sp_paymentmethodid/:sp_paymentstatus,
    deleteSeasonalBookingDetails : /seasonal_booking/:bookingid/:uid/:upass,
    updateSeasonalBookingDetails : /seasonal_booking/:bookingid/:parkingid/:vendorid/:usercarid/:fromtime/:totime/:workdaysid/:paymentmethodid/:paymentstatus,

    addTariffDetails : /tariff/:locationid/:vehicletypeid/:tariffamount,
    deleteTariffDetails : /tariff/:tariffid/:uid/:upass,
    updateTariffDetails : /tariff/:tariffid/:locationid/:vehicletypeid/:tariffamount,
    getTariffDetailsById : /tariff/:tariffid,

    addUserType : /user_type/:newusertype,
    deleteUserType : /user_type/:usertypeid/:uid/:upass,
    updateUserType : /user_type/:usertypeid/:newusertype,

    getUserDetails : /users/all,
    getUserDetailsById : /users/:id,
    addUserDetails : /users/:username/:phoneno/:firstname/:lastname/:email/:userpass/:usertype,
    deleteUserDetails : /users/:userid/:uid/:upass,
    updateUserDetails : /users/:userid/:username/:phoneno/:firstname/:lastname/:email/:userpass/:usertype,
    getUserDetailsByUserType : /users/type/:usertype,

    addUserVehicleDetails : /uservehicle/:userid/:vehicledimensionid/:regnum,
    deleteUserVehicleDetails : /uservehicle/:userid/:uid/:upass,
    updateUserVehicleDetails : /uservehicle/:uservehicleid/:userid/:carid/:vehicledimensionid/:regnum,
    getUserVehicleDetailsById : /uservehicle/:uservehicleid,

    getListAllVehiclesByVehicleType : /vehicle/types/:vehicletypeid,
    getVehicleDescByVehicleMake : /vehicle/make/:vehiclemake,
    getVehicleDetailsById : /vehicle/:vehicleid,
    getVehicleMakeByVehicleType : /vehicle/type/:vehicletype,
    getVehiclesByVehicleType : /vehicle/all/:vehicletypeid,

    addVehicleType : /vehicle_type/:newvehicletype,
    deleteVehicleType : /vehicle_type/:vehicletypeid/:uid/:upass,
    updateVehicleType : /vehicle_type/:vehicletypeid/:newvehicletype,
    getListAllVehicleTypes : /vehicle_type/all,
    getVehicleTypeById : /vehicle_type/:id,

    addVendorDetails : /vendor/:userid/:ownername/:owneraddress/:ownerlocationid,
    deleteVendorDetails : /vendor/:vendorid/:uid/:upass,
    updateVendorDetails : /vendor/:vendorid/:userid/:ownername/:owneraddress/:ownerlocationid,
    getVendorDetailsById : /vendor/:vendorid,

    getWorkdaysById : /workdays/:workdaysid
  }
})*/

/*.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx123',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})*/

.factory('Vendors', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vendors = {
    id: 0,
    VendorId: '01',
    AgencyName: 'Agency01',
    GPSLocation: '33.582095, -117.7291435' 
  }; 

  return {
    all: function() {
      return vendors;
    },
    get: function(vendorId) {
      for (var i = 0; i < vendors.length; i++) {
        if (vendors[i].id === parseInt(vendorId)) {
          return vendors[i];
        }
      }
      return null;
    }
  };
})

.factory('Hours', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var hours = [{
    id: 0,
    name: '00'
  }, {
    id: 1,
    name: '01'
  }, {    
    id: 2,
    name: '02'
  }, {    
    id: 3,
    name: '03'
  }, {    
    id: 4,
    name: '04'
  }, {    
    id: 5,
    name: '05'
  }, {    
    id: 6,
    name: '06'
  }, {    
    id: 7,
    name: '07'
  }, {    
    id: 8,
    name: '08'
  }, {    
    id: 9,
    name: '09'
  }, {    
    id: 10,
    name: '10'
  }, {    
    id: 11,
    name: '11'
  }, {    
    id: 12,
    name: '12'
  }, {    
    id: 13,
    name: '13'
  }, {    
    id: 14,
    name: '14'
  }, {    
    id: 15,
    name: '15'
  }, {    
    id: 16,
    name: '16'
  }, {    
    id: 17,
    name: '17'
  }, {    
    id: 18,
    name: '18'
  }, {    
    id: 19,
    name: '19'
  }, {    
    id: 20,
    name: '20'
  }, {    
    id: 21,
    name: '21'
  }, {    
    id: 22,
    name: '22' 
  }, {    
    id: 23,
    name: '23' 
  }]; 

  return {
    all: function() {
      return hours;
    },
    get: function(hourId) {
      for (var i = 0; i < hours.length; i++) {
        if (hours[i].id === parseInt(hourId)) {
          return hours[i];
        }
      }
      return null;
    }
  };
})

.factory('Minutes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var mins = [{
    id: 0,
    name: '00'
  }, {    id: 1,
    name: '15'
  }, {    id: 2,
    name: '30'
  }, {    id: 3,
    name: '45'  
  }]; 

  return {
    all: function() {
      return mins;
    },
    get: function(minId) {
      for (var i = 0; i < mins.length; i++) {
        if (mins[i].id === parseInt(minId)) {
          return mins[i];
        }
      }
      return null;
    }
  };
})

.factory('VehicleTypes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vehicleTypes = [{
    id: 0,
    type: 'Hatchback'
  }, {    id: 1,
    type: 'Sedan'
  }, {    id: 2,
    type: 'SUV'
  }, {    id: 3,
    type: 'Van' 
  }, {    id: 4,
    type: 'Tempo'
  }, {    id: 5,
    type: 'Canter'
  }, {    id: 6,
    type: 'Bus' 
  }]; 

  return {
    all: function() {
      return vehicleTypes;
    },
    get: function(vehicleTypeId) {
      for (var i = 0; i < mins.length; i++) {
        if (vehicleTypes[i].id === parseInt(vehicleTypeId)) {
          return vehicleTypes[i];
        }
      }
      return null;
    }
  };
})

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = {
    id: 1,
    firstName: 'George',
    lastName: 'Davis',
    mobile: '9962822593',
    email: 'georgejosephdavis@gmail.com'
  };
  
  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      for (var i = 0; i < mins.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    }
  };
})

.factory('UserVehicles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var userVehicles = {
    userId: 1,
    carId: 1,
    vehicleId: 1,
    registrationNumber: 'TN01AD6890'
  };
  
  return {
    all: function() {
      return userVehicles;
    },
    get: function(userVehicleId) {
      for (var i = 0; i < mins.length; i++) {
        if (userVehicles[i].id === parseInt(userVehicleId)) {
          return userVehicles[i];
        }
      }
      return null;
    }
  };
})

.factory('Vehicles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vehicles = [{
    id: 1,
    typeId: 2,
    vehicleLength: 4490,
    vehicleBreadth: 1735,
    vehicleManufacturer: 'Maruti Suzuki',
    vehicleModel: 'SX4'
  }]; 

  return {
    all: function() {
      return vehicles;
    },
    get: function(vehicleId) {
      for (var i = 0; i < mins.length; i++) {
        if (vehicles[i].id === parseInt(vehicleId)) {
          return vehicles[i];
        }
      }
      return null;
    }
  };
});