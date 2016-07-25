import {Mongo} from 'meteor/mongo';
Comments = new Mongo.Collection('Comments');

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