
Meteor.publish('cars', () => {
  return Cars.find();
});

Meteor.publish('Mountains', function() {
	return Mountains.find();
});

Meteor.publish('Comments', function(limit) {
	return Comments.find({}, {limit: limit});
});
