Template.chatInput.events({
    submit: function(event, template) {
        var $input = template.$('[name="messageInput"]');

        Chat.insert({
            message: $input.val(),
            user_id: UniUsers.getLoggedInId()
        }, function () {
            $input.val('');
        });

        event.stopPropagation();
        return false;
    }
});
