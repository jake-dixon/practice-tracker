
Meteor.publish('cars', () => {
  return Cars.find();
});

Meteor.publish('Mountains', function() {
	return Mountains.find();
});
