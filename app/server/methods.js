/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({

	newComment: function(content) {
		if(!Meteor.userId()) {
			throw new Meteor.Error("unauthorized", "Unauthorized");
		}

		var data = {
			content: content,
			owner: Meteor.userId()
		};

		Comments.insert(data);
	}
});



