Template.chatList.helpers({
    chatItems: function() {
        return Chat.find({});
    }
});