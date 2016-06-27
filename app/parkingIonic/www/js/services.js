angular.module('starter.services', [])

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
    name: '01'
  }, {    id: 1,
    name: '02'
  }, {    id: 2,
    name: '03'
  }, {    id: 3,
    name: '04'
  }, {    id: 4,
    name: '05'
  }, {    id: 5,
    name: '06'
  }, {    id: 6,
    name: '07'
  }, {    id: 7,
    name: '08'
  }, {    id: 8,
    name: '09'
  }, {    id: 9,
    name: '10'
  }, {    id: 10,
    name: '11'
  }, {    id: 11,
    name: '12'
  }, {    id: 12,
    name: '13'
  }, {    id: 13,
    name: '14'
  }, {    id: 14,
    name: '15'
  }, {    id: 15,
    name: '16'
  }, {    id: 16,
    name: '17'
  }, {    id: 17,
    name: '18'
  }, {    id: 18,
    name: '19'
  }, {    id: 19,
    name: '20'
  }, {    id: 20,
    name: '21'
  }, {    id: 21,
    name: '22' 
  }, {    id: 22,
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