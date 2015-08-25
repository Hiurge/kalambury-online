Template.chatList.helpers({
    chatItems: function() {
        return Chat.find();
    },

    getEmail: function () {
        var user = UniUsers.findOne(this.user_id);
        return user && user.getFirstEmailAddress() || 'someone@mail.com';
    }
});