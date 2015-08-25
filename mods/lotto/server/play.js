'use strict';

var ROUND_TIME = 60000;
var lastUserId;

var run = function () {
    var user = UniUsers.findOne({isActive: true});
    if (!user) {
        var users = UniUsers.find({'status.online': true}).fetch() || [];
        if (users.length) {
            var lenght = users.length - 1;
            user = users[lenght ? _.random(0, lenght): 0];
            user.update({$set: {isActive: true}});
            console.log('Active user ', user.getFirstEmailAddress());
            lastUserId = user._id;
            return;
        }
        return;
    }

    if (lastUserId === user._id) {
        user.update({$set: {isActive: true}});
        console.log('Active user ', user.getFirstEmailAddress());
        run();
    }
    lastUserId = user._id;
};

run();

var id = Meteor.setInterval(run, ROUND_TIME);

var clear = function() {
    Meteor.clearInterval(id);
    run();
    id = Meteor.setInterval(run, ROUND_TIME);
};


Meteor.users.find({'status.online': true}, {fields: {status: 1}}).observe({
    added: function(){
        if(!UniUsers.find({isActive: true}).count()){
            console.log('Add first active ', user.getFirstEmailAddress());
            clear();
        }
    },
    removed: function (id) {
        var user = UniUsers.findOne({isActive: true});
        if(user && user._id === id) {
            console.log('Remove active ', user.getFirstEmailAddress());
            clear();
        }
    }
});