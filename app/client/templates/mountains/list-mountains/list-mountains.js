/*****************************************************************************/
/* ListMountains: Event Handlers */
/*****************************************************************************/
Template.listMountains.events({
});

/*****************************************************************************/
/* ListCars: Helpers */
/*****************************************************************************/
Template.listMountains.helpers({
	mountains: function () {
		return Mountains.find();
	}
});

/*****************************************************************************/
/* ListCars: Lifecycle Hooks */
/*****************************************************************************/
Template.listMountains.onCreated(() => {
});

Template.listMountains.onRendered(() => {

});

Template.listMountains.onDestroyed(() => {
});
