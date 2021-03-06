/*****************************************************************************/
/* ListCars: Event Handlers */
/*****************************************************************************/
Template.ListCars.events({
	"click .create": function (event) {
		Router.go('createCar');
	}
});

/*****************************************************************************/
/* ListCars: Helpers */
/*****************************************************************************/
Template.ListCars.helpers({
	cars: function () {
		return Cars.find();
	}
});

/*****************************************************************************/
/* ListCars: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCars.onCreated(() => {
});

Template.ListCars.onRendered(() => {

});

Template.ListCars.onDestroyed(() => {
});
