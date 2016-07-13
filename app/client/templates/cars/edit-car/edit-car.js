/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.EditCar.events({
});

/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.EditCar.helpers({
	beforeRemove: function () {
  	return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete car: "' + doc.brand + " " + doc.model + '"?')) {
      this.remove();
      Router.go('carsList');  
    }
  };
 },

 //set it up so that update is false, but then if it is updated, make it true. Connect 
 //this to the quick form button edit thing in the same way as the remove button 

 
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCar.onCreated(() => {
});

Template.EditCar.onRendered(() => {
});

Template.EditCar.onDestroyed(() => {
});
