/*****************************************************************************/
/* ListMountains: Event Handlers */
/*****************************************************************************/
Template.listMountains.events({

	 "click .edit": function(event) {
	 	Router.go('editMountain', {_id: this._id})
	 },

	 "click .create": function(event) {
	 	Router.go('createMountain');
	 }
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