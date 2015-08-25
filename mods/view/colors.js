if (Meteor.isClient) {
	Template.colorsButton.events ({
		"click #red": function () {
			Session.set("color",'rgb(255, 0, 0)');
		},
		"click #black": function() {
			Session.set("color",'rgb(0, 0, 0)');
		},
		"click #blue": function() {
			Session.set("color",'rgb(0, 0, 255)');
		},
		"click #green": function() {
			Session.set("color",'rgb(0, 255, 0)');
		}				
	});
};