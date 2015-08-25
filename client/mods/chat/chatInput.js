Template.chatInput.events({
	'submit': function(e,t)
		{
            var inputfield = t.$('[name="messageInput"]');
			var message = inputfield.val();
			var user_id = UniUsers.getLoggedInId();
			Chat.insert({
					message: message
					,user_id: user_id
				}, function () {
                inputfield.val("");
            });

            e.stopPropagation();
			return false;
		}
});
