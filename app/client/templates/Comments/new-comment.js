Template.newComment.events ({
	"click .comment": function(event) {
		
		var content = $("#comment-section").val();

		Meteor.call("newComment", 
					content,
					function(error, response) {
			if(error) {
				console.log(error);
			}
			else {
				console.log(response);
			}
		});
	}
});

//**********************************************
//New Comment Helpers
//**********************************************

Template.newComment.helpers ({

	address: function(userId) {
		return Meteor.user().emails[0].address;
	}

});