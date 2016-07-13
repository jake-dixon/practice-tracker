/*****************************************************************************/
/* CreateCar: Event Handlers */
/*****************************************************************************/
Template.CreateCar.events({
	"click .create": function (event) {
//make it so that the event handler checks if the fields are filled out
//before just re-routing to the cars list after clicking Create. 
		Router.go('/cars');
	}
});

/*****************************************************************************/
/* CreateCar: Helpers */
/*****************************************************************************/
Template.CreateCar.helpers({
});

/*****************************************************************************/
/* CreateCar: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateCar.onCreated(() => {
});

Template.CreateCar.onRendered(() => {
});

Template.CreateCar.onDestroyed(() => {
});
