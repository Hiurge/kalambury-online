Chat = new UniCollection("chat");

Chat.setSchema(new SimpleSchema({
    message: {type: String},
    user_id: {type: String}
}));

Chat.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;}
});

Chat.helpers({
    getEmail: function() {
        var user = UniUsers.findOne(this.user_id);
        return user && user.getFirstEmailAddress();
    }
});
