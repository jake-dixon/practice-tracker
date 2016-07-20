import {Mongo} from 'meteor/mongo';
Mountains = new Mongo.Collection('Mountains');


  Mountains.allow({
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

MountainsSchema = new SimpleSchema ({
  name: {
    type: String,
    label: "Name"
  },
  altitude: {
    type: Number,
    label: "Altitude (ft)"
 
  },
  trailNumber: {
    type: String,
    label: "Trail Number",
    max: 50
  },
  liftNumber: {
    type: Number,
    label: "Lift Number"
  },
  coast: {
    type: String,
    label: "Coast",
    allowedValues: ['East', 'West']
  },
});

Mountains.attachSchema(MountainsSchema);

TabularTables = {}

TabularTables.Mountains = new Tabular.Table({
  name: "Mountains",
  collection: Mountains,
  columns: [

    {data: "name", title: "Name"},
    {data: "altitude", title: "Altitude (ft)"},
    {data: "trailNumber", title: "Trail Number"},
    {data: "liftNumber", title: "Lift Number"},
    {data: "coast", title: "Coast"},
    {tmpl: Meteor.isClient && Template.EditButton}
  ],
});

//********************************************
//Illustration of the collection hooks package 
//********************************************

Mountains.after.insert(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

Mountains.after.update(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

Mountains.after.remove(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});
