Template.addMessage.events({
	'submit': function(e,t)
		{
			var message = t.$('[name="messageInput"]').val();
			var user_id = UniUsers.getLoggedInId();
			Chat.insert({
					message: message
					,user_id: user_id
				})
		}
});
