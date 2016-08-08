angular.module('starter.services', [])
  .service('parkingappservice', function ($http, $rootScope) {
    var baseUrl = "http://localhost:7337";
    var urls = {
      addLocation: '/location/{0}/{1}/{2}/{3}',
      deleteLocation: '/location/{0}/{1}/{2}',
      updateLocation: '/location/{0}/{1}/{2}/{3}/{4}',
      getLocationById: '/location/{0}',
      getNearbyLocationsByLocation : '/location/{0}',

      getLoginVerified: '/login/{0}/{1}',

      addParkingLotDetails: '/parking/{0}/{1}/{2}/{3}/{4}/{5}/{6}/{7}/{8}',
      deleteParkingLotDetails: '/parking/{0}/{1}/{2}',
      updateParkingLotDetails: '/parking/{0}/{1}/{2}/{3}/{4}/{5}/{6}/{7}/{8}/{9}',
      getParkingLotDetailsById: '/parking/{0}',

      addPaymentMethodDetails: '/payment_method/{0}/{1}',
      deletePaymentMethodDetails: '/payment_method/{0}/{1}/{2}',
      updatePaymentMethodDetails: '/payment_method/{0}/{1}/{2}',

      addSeasonalBookingDetails: '/seasonal_booking/{0}/{1}/{2}/{3}/{4}/{5}/{6}/{7}',
      deleteSeasonalBookingDetails: '/seasonal_booking/{0}/{1}/{2}',
      updateSeasonalBookingDetails: '/seasonal_booking/{0}/{1}/{2}/{3}/{4}/{5}/{6}/{7}/{8}',

      addTariffDetails: '/tariff/{0}/{1}/{2}',
      deleteTariffDetails: '/tariff/{0}/{1}/{2}',
      updateTariffDetails: '/tariff/{0}/{1}/{2}/{3}',
      getTariffDetailsById: '/tariff/{0}',

      addUserType: '/user_type/{0}',
      deleteUserType: '/user_type/{0}/{1}/{2}',
      updateUserType: '/user_type/{0}/{1}',

      getUserDetails: '/users/all',
      getUserDetailsById: '/users/{0}',
      addUserDetails: '/users/{0}/{1}/{2}/{3}/{4}/{5}/{6}',
      deleteUserDetails: '/users/{0}/{1}/{2}',
      updateUserDetails: '/users/{0}/{1}/{2}/{3}/{4}/{5}/{6}/{7}',
      getUserDetailsByUserType: '/users/type/{0}',

      addUserVehicleDetails: '/uservehicle/{0}/{1}/{2}',
      deleteUserVehicleDetails: '/uservehicle/{0}/{1}/{2}',
      updateUserVehicleDetails: '/uservehicle/{0}/{1}/{2}/{3}',
      getUserVehicleDetailsById: '/uservehicle/{0}',

      getListAllVehiclesByVehicleType: '/vehicle/types/{0}',
      getVehicleDescByVehicleMake: '/vehicle/make/{0}',
      getVehicleDetailsById: '/vehicle/{0}',
      getVehicleMakeByVehicleType: '/vehicle/type/{0}',
      getVehiclesByVehicleType: '/vehicle/all/{0}',

      addVehicleType: '/vehicle_type/{0}',
      deleteVehicleType: '/vehicle_type/{0}/{1}/{2}',
      updateVehicleType: '/vehicle_type/{0}/{1}',
      getListAllVehicleTypes: '/vehicle_type/all',
      getVehicleTypeById: '/vehicle_type/{0}',

      addVendorDetails: '/vendor/{0}/{1}/{2}/{3}',
      deleteVendorDetails: '/vendor/{0}/{1}/{2}',
      updateVendorDetails: '/vendor/{0}/{1}/{2}/{3}/{4}',
      getVendorDetailsById: '/vendor/{0}',

      getWorkdaysById: '/workdays/{0}'
    };

    function format() {
      var args = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {
        var reg_exp = new RegExp("\\{" + i + "\\}");
        args = args.replace(reg_exp, arguments[i + 1]);
      }
      $rootScope.lastExecutedCall = args;
      return args;
    }

    function makeGetCall(serviceUrl) {
      return $http.get(serviceUrl)
        .then(function (response) {
          response.data.url = serviceUrl;
          return response;
        }).then(returnData)
        .then(function (data) {
          return data;
        });
    }

    function returnData(res) {
      if(res.data) {
        return res.data;      
      }
      throw new Error('Return data error ... ');
    }

    return {
      getLocationById: function (locationid) {
        var serviceUrl = baseUrl + format(urls.getLocationById, locationid);
        return makeGetCall(serviceUrl);
      },

      addLocation: function (loc_address, loc_area, loc_landmark, loc_city) {
        var fields = {
          "loc_address": loc_address,
          "loc_area": loc_area,
          "loc_landmark": loc_landmark,
          "loc_city": loc_city
        };
        var serviceUrl = baseUrl + format(urls.addLocation, loc_address, loc_area, loc_landmark, loc_city);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteLocation: function (locationid, uid, upass) {
        var fields = {
          "locationid": locationid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteLocation, locationid, uid, upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateLocation: function (locationid, loc_address, loc_area, loc_landmark, loc_city) {
        var fields = {
          "locationid": locationid,
          "loc_address": loc_address,
          "loc_area": loc_area,
          "loc_landmark": loc_landmark,
          "loc_city": loc_city
        };
        var serviceUrl = baseUrl + format(urls.updateLocation, locationid, loc_address, loc_area, loc_landmark, loc_city);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getLoginVerified: function (user_id, user_pass) {
        var fields = {
          "user_id": user_id,
          "user_pass": user_pass
        };
        var serviceUrl = baseUrl + format(urls.getLoginVerified, user_id, user_pass);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      addParkingLotDetails: function (parking_name,parking_vendor_id,parking_loc_id,parking_tariff_id,parking_slots,parking_from_time,parking_to_time,parking_workdays_id,parking_managed_status) {
        var fields = {
          "parking_name": parking_name,
          "parking_vendor_id": parking_vendor_id,
          "parking_loc_id": parking_loc_id,
          "parking_tariff_id": parking_tariff_id,
          "parking_slots": parking_slots,
          "parking_from_time": parking_from_time,
          "parking_to_time": parking_to_time,
          "parking_workdays_id": parking_workdays_id,
          "parking_managed_status": parking_managed_status
        };
        var serviceUrl = baseUrl + format(urls.addLocation, parking_name,parking_vendor_id,parking_loc_id,parking_tariff_id,parking_slots,parking_from_time,parking_to_time,parking_workdays_id,parking_managed_status);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteParkingLotDetails: function (parkingid, uid, upass) {
        var fields = {
          "parkingid": parkingid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteParkingLotDetails, parkingid, uid, upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateParkingLotDetails: function (parkingid,parking_vendor_id,parking_name,parking_loc_id,parking_tariff_id,parking_slots,parking_from_time,parking_to_time,parking_workdays_id,parking_managed_status) {
        var fields = {
          "parkingid": parkingid,
          "parking_name": parking_name,
          "parking_vendor_id": parking_vendor_id,
          "parking_loc_id": parking_loc_id,
          "parking_tariff_id": parking_tariff_id,
          "parking_slots": parking_slots,
          "parking_from_time": parking_from_time,
          "parking_to_time": parking_to_time,
          "parking_workdays_id": parking_workdays_id,
          "parking_managed_status": parking_managed_status
        };
        var serviceUrl = baseUrl + format(urls.updateParkingLotDetails,parkingid,parking_vendor_id,parking_name,parking_loc_id,parking_tariff_id,parking_slots,parking_from_time,parking_to_time,parking_workdays_id,parking_managed_status);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getParkingLotDetailsById: function (parkingid) {
        var serviceUrl = baseUrl + format(urls.getParkingLotDetailsById, parkingid);
        return makeGetCall(serviceUrl);
      },

      addPaymentMethodDetails: function (method_desc,method_redirect_url) {
        var fields = {
          "method_desc": method_desc,
          "method_redirect_url": method_redirect_url        
        };
        var serviceUrl = baseUrl + format(urls.addPaymentMethodDetails,method_desc,method_redirect_url);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deletePaymentMethodDetails: function (method_id,uid,upass) {
        var fields = {
          "method_id": method_id,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deletePaymentMethodDetails,method_id,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updatePaymentMethodDetails: function (paymentmethodid,methodname,methodurl) {
        var fields = {
          "paymentmethodid": paymentmethodid,
          "methodname": methodname,
          "methodurl": methodurl
        };
        var serviceUrl = baseUrl + format(urls.updatePaymentMethodDetails,paymentmethodid,methodname,methodurl);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      addSeasonalBookingDetails: function (sp_parkingid,sp_vendorid,sp_carid,sp_bookingfrom,sp_bookingto,sp_workdaysid,sp_paymentmethodid,sp_paymentstatus) {
        var fields = {
          "sp_parkingid": sp_parkingid,
          "sp_vendorid": sp_vendorid,
          "sp_carid": sp_carid,
          "sp_bookingfrom": sp_bookingfrom,
          "sp_bookingto": sp_bookingto,
          "sp_workdaysid": sp_workdaysid,
          "sp_paymentmethodid": sp_paymentmethodid,
          "sp_paymentstatus": sp_paymentstatus
        };
        var serviceUrl = baseUrl + format(urls.addSeasonalBookingDetails,sp_parkingid,sp_vendorid,sp_carid,sp_bookingfrom,sp_bookingto,sp_workdaysid,sp_paymentmethodid,sp_paymentstatus);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteSeasonalBookingDetails: function (bookingid,uid,upass) {
        var fields = {
          "bookingid": bookingid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteSeasonalBookingDetails,bookingid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateSeasonalBookingDetails: function (bookingid,sp_parkingid,sp_vendorid,sp_carid,sp_bookingfrom,sp_bookingto,sp_workdaysid,sp_paymentmethodid,sp_paymentstatus) {
        var fields = {
          "bookingid" : bookingid,
          "sp_parkingid": sp_parkingid,
          "sp_vendorid": sp_vendorid,
          "sp_carid": sp_carid,
          "sp_bookingfrom": sp_bookingfrom,
          "sp_bookingto": sp_bookingto,
          "sp_workdaysid": sp_workdaysid,
          "sp_paymentmethodid": sp_paymentmethodid,
          "sp_paymentstatus": sp_paymentstatus
        };
        var serviceUrl = baseUrl + format(urls.updateSeasonalBookingDetails,bookingid,sp_parkingid,sp_vendorid,sp_carid,sp_bookingfrom,sp_bookingto,sp_workdaysid,sp_paymentmethodid,sp_paymentstatus);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      addTariffDetails: function (locationid,vehicletypeid,tariffamount) {
        var fields = {
          "locationid": locationid,
          "vehicletypeid": vehicletypeid,
          "tariffamount": tariffamount
        };
        var serviceUrl = baseUrl + format(urls.addTariffDetails,locationid,vehicletypeid,tariffamount);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteTariffDetails: function (tariffid,uid,upass) {
        var fields = {
          "tariffid": tariffid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteTariffDetails,tariffid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateTariffDetails: function (tariffid,locationid,vehicletypeid,tariffamount) {
        var fields = {
          "tariffid" : tariffid,
          "locationid": locationid,
          "vehicletypeid": vehicletypeid,
          "tariffamount": tariffamount
        };
        var serviceUrl = baseUrl + format(urls.updateTariffDetails,tariffid,locationid,vehicletypeid,tariffamount);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getTariffDetailsById: function (tariffid) {
        var serviceUrl = baseUrl + format(urls.getTariffDetailsById, tariffid);
        return makeGetCall(serviceUrl);
      },

      addUserType: function (newusertype) {
        var fields = {
          "newusertype": newusertype
        };
        var serviceUrl = baseUrl + format(urls.addUserType,newusertype);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteUserType: function (usertypeid,uid,upass) {
        var fields = {
          "usertypeid": usertypeid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteUserType,usertypeid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateUserType: function (usertypeid,newusertype) {
        var fields = {
          "usertypeid" : usertypeid,
          "newusertype": newusertype
        };
        var serviceUrl = baseUrl + format(urls.updateUserType,usertypeid,newusertype);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getUserDetails: function () {
        var serviceUrl = baseUrl + format(urls.getUserDetails);
        return makeGetCall(serviceUrl);
      },

      getUserDetailsById: function (id) {
        var serviceUrl = baseUrl + format(urls.getUserDetailsById, id);
        return makeGetCall(serviceUrl);
      },

      getUserDetailsByUserType: function (usertype) {
        var serviceUrl = baseUrl + format(urls.getUserDetailsByUserType, usertype);
        return makeGetCall(serviceUrl);
      },

      addUserDetails: function (username,phoneno,firstname,lastname,email,userpass,usertype) {
        var fields = {
          "username": username,
          "phoneno": phoneno,
          "firstname": firstname,
          "lastname": lastname,
          "email": email,
          "userpass": userpass,
          "usertype": usertype          
        };
        var serviceUrl = baseUrl + format(urls.addUserDetails,username,phoneno,firstname,lastname,email,userpass,usertype);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteUserDetails: function (userid,uid,upass) {
        var fields = {
          "userid": userid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteUserDetails,userid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateUserDetails: function (userid,username,phoneno,firstname,lastname,email,userpass,usertype) {
        var fields = {
          "userid" : userid,
          "username": username,
          "phoneno": phoneno,
          "firstname": firstname,
          "lastname": lastname,
          "email": email,
          "userpass": userpass,
          "usertype": usertype          
        };
        var serviceUrl = baseUrl + format(urls.updateUserDetails,userid,username,phoneno,firstname,lastname,email,userpass,usertype);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      addUserVehicleDetails: function (userid,vehicledimensionid,regnum) {
        var fields = {
          "userid": userid,
          "vehicledimensionid": vehicledimensionid,
          "regnum": regnum          
        };
        var serviceUrl = baseUrl + format(urls.addUserVehicleDetails,userid,vehicledimensionid,regnum);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteUserVehicleDetails: function (userid,carid,uid,upass) {
        var fields = {
          "userid": userid,
          "carid" : carid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteUserVehicleDetails,userid,carid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateUserVehicleDetails: function (userid,carid,vehicledimensionid,regnum) {
        var fields = {
          "userid" : userid,
          "carid": carid,
          "vehicledimensionid": vehicledimensionid,
          "regnum": regnum          
        };
        var serviceUrl = baseUrl + format(urls.updateUserVehicleDetails,userid,carid,vehicledimensionid,regnum);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getUserVehicleDetailsById: function (uservehicleid) {
        var serviceUrl = baseUrl + format(urls.getUserVehicleDetailsById, uservehicleid);
        return makeGetCall(serviceUrl);
      },

      getListAllVehiclesByVehicleType: function (vehicletypeid) {
        var serviceUrl = baseUrl + format(urls.getListAllVehiclesByVehicleType, vehicletypeid);
        return makeGetCall(serviceUrl);
      },

      getVehicleDescByVehicleMake: function (vehiclemake) {
        var serviceUrl = baseUrl + format(urls.getVehicleDescByVehicleMake, vehiclemake);
        return makeGetCall(serviceUrl);
      },

      getVehicleDetailsById: function (vehicleid) {
        var serviceUrl = baseUrl + format(urls.getVehicleDetailsById, vehicleid);
        return makeGetCall(serviceUrl);
      },

      getVehicleMakeByVehicleType: function (vehicletype) {
        var serviceUrl = baseUrl + format(urls.getVehicleMakeByVehicleType, vehicletype);
        return makeGetCall(serviceUrl);
      },

      getVehiclesByVehicleType: function (vehicletypeid) {
        var serviceUrl = baseUrl + format(urls.getVehiclesByVehicleType, vehicletypeid);
        return makeGetCall(serviceUrl);
      },

      addVehicleType: function (newvehicletype) {
        var fields = {
          "newvehicletype": newvehicletype         
        };
        var serviceUrl = baseUrl + format(urls.addVehicleType,newvehicletype);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteVehicleType: function (vehicletypeid,uid,upass) {
        var fields = {
          "vehicletypeid": vehicletypeid,      
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteVehicleType,vehicletypeid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateVehicleType: function (vehicletypeid,newvehicletype) {
        var fields = {
          "vehicletypeid" : vehicletypeid,
          "newvehicletype": newvehicletype
        };
        var serviceUrl = baseUrl + format(urls.updateVehicleType,vehicletypeid,newvehicletype);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getListAllVehicleTypes: function () {
        var serviceUrl = baseUrl + format(urls.getListAllVehicleTypes);
        return makeGetCall(serviceUrl);
      },

      getVehicleTypeById: function (id) {
        var serviceUrl = baseUrl + format(urls.getVehicleTypeById, id);
        return makeGetCall(serviceUrl);
      },

      addVendorDetails: function (userid,ownername,owneraddress,ownerlocationid) {
        var fields = {
          "userid": userid,
          "ownername" : ownername,
          "owneraddress" : owneraddress,          
          "ownerlocationid": ownerlocationid
        };
        var serviceUrl = baseUrl + format(urls.addVendorDetails,userid,ownername,owneraddress,ownerlocationid);
        var request = {
          url: serviceUrl,
          method: 'POST',
          data: fields
        };
        return $http(request).then(returnData);
      },

      deleteVendorDetails: function (vendorid,uid,upass) {
        var fields = {
          "vendorid": vendorid,
          "uid": uid,
          "upass": upass
        };
        var serviceUrl = baseUrl + format(urls.deleteVendorDetails,vendorid,uid,upass);
        var request = {
          url: serviceUrl,
          method: 'DELETE',
          data: fields
        };
        return $http(request).then(returnData);
      },

      updateVendorDetails: function (vendorid,userid,ownername,owneraddress,ownerlocationid) {
        var fields = {
          "vendorid" : vendorid,
          "userid": userid,
          "ownername": ownername,
          "owneraddress": owneraddress,
          "ownerlocationid" : ownerlocationid
        };
        var serviceUrl = baseUrl + format(urls.updateVendorDetails,vendorid,userid,ownername,owneraddress,ownerlocationid);
        var request = {
          url: serviceUrl,
          method: 'PUT',
          data: fields
        };
        return $http(request).then(returnData);
      },

      getVendorDetailsById: function (vendorid) {
        var serviceUrl = baseUrl + format(urls.getVendorDetailsById, vendorid);
        return makeGetCall(serviceUrl);
      },

      getWorkdaysById: function (workdaysid) {
        var serviceUrl = baseUrl + format(urls.getWorkdaysById, workdaysid);
        return makeGetCall(serviceUrl);
      }
    };
  });

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
})

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
});*/