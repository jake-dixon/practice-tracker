/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.editMountain.events({
	
});

/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.editMountain.helpers({
	beforeRemove: function () {
  	return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete mountain: "' + doc.name + '"?')) {
      this.remove();
      Router.go('mountainsList');  
    }
  };
 },

 //set it up so that update is false, but then if it is updated, make it true. Connect 
 //this to the quick form button edit thing in the same way as the remove button 

 
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.editMountain.onCreated(() => {
});

Template.editMountain.onRendered(() => {
});

Template.editMountain.onDestroyed(() => {
});
