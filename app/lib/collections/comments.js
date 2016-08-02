import {Mongo} from 'meteor/mongo';
Comments = new Mongo.Collection('Comments');

  Comments.allow({
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

Schema = {}

 Schema.Comment = new SimpleSchema({
  // This is so that we can only pull comments for specific posts
  content: {
    type: String
  },
  owner: {
    type: String,
    autoValue: function (userId) {
      return Meteor.user().emails[0].address;
    }
  },
  time: {
    type: String,
    autoValue: function () {
      return moment().calendar();
    }
  }
});

Comments.attachSchema(Schema.Comment);

//********************************************
//Illustration of the collection hooks package 
//********************************************

Comments.after.insert(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});

Comments.after.remove(function (userId, doc) {
  console.log(Meteor.userId());
  console.log(Date());
});