Template.commentRow.events ({
	"click .trash": function (event) {
		Comments.remove({_id: this._id});
	}
});

Template.commentRow.helpers ({
	time: function() {
		return moment(new Date()).format('MMMM Do YYYY, h:mm a');
	}
});

