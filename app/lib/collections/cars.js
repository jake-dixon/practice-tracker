import {Mongo} from 'meteor/mongo';
Cars = new Mongo.Collection('Cars');


  Cars.allow({
    insert(userId, doc) {
      return true;
    },

    update(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove(userId, doc) {
      return true;
    }
  });

CarSchema = new SimpleSchema ({
  brand: {
    type: String,
    label: "Brand",
    max: 100
  },
  model: {
    type: String,
    label: "Model",
    max: 100
  },
  fueltype: {
    type: String,
    label: "Fuel Type",
    allowedValues: ['Petrol', 'Diesel', 'Hybrid', 'Electric']
  },
  bodystyle: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'],
    optional: true
  },
  topspeed: {
    type: Number,
    label: "Top Speed (mph)",
    optional: true
  },
  power: {
    type: Number,
    label: "Power (HP)",
    optional: true
  }, 

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  
      }
    }
  },

  //make it so that the update date is forced to be the day that they updated
  //also make it so that the owner is attached 

  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      } else { 
        this.unset();
      }
    },
    denyInsert: true,
    optional: true
  },

  owner: {
    type: String,
    optional: true,
    autoValue: function(userId) {
      return Meteor.user().emails[0].address;
    }
  },
});


Cars.attachSchema(CarSchema);


//****************************************
//Illustration of Collection Hooks Package
//****************************************

Cars.after.insert(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

Cars.after.update(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

Cars.after.remove(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

