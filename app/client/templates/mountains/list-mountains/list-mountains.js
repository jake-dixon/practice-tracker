/*****************************************************************************/
/* ListMountains: Event Handlers */
/*****************************************************************************/
Template.listMountains.events({

	 "click .edit": function(event) {
	 	Router.go('editMountain', {_id: this._id})
	 },

	 "click .create": function(event) {
	 	Router.go('createMountain');
	 },

	 "click .delete": function(event) {
	 	Comments.remove(this._id);
	 },

	 "click .load": function(event) {
	 	event.preventDefault();

	 	if (Session.get("limit") <= Comments.find().count()) {
	 	Session.set("limit", Session.get("limit") + 3);
	 	//console.log(Session.get("limit"));
	 	}
	 },

	 "click .less": function(event) {
	 	event.preventDefault();

	 	if (Session.get("limit") >= 6) {
	 	Session.set("limit", Session.get("limit") - 3);
	 	//console.log(Session.get("limit"));
	 	}
	 }
});

/*****************************************************************************/
/* ListCars: Helpers */
/*****************************************************************************/
Template.listMountains.helpers({
	mountains: function () {
		return Mountains.find();
	},

	comments: function () {
		var limit = Session.get("limit");
		return Comments.find({}, {limit: limit});
	}
});

/*****************************************************************************/
/* ListCars: Lifecycle Hooks */
/*****************************************************************************/
Template.listMountains.onCreated(() => {
	Session.set("limit", 3);
});

Template.listMountains.onRendered(() => {

});

Template.listMountains.onDestroyed(() => {
});