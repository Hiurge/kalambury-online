'use strict';

var ROUND_TIME = 60000;
var lastUserId;

var run = function () {
    var user = UniUsers.findOne({isActive: true});
    if (!user) {
        var users = UniUsers.find({'status.online': true}).fetch() || [];
        if (users.length) {
            user = users[_.random(0, users.length - 1)];
            user.update({$set: {isActive: true}});
            lastUserId = user._id;
            return;
        }
        return;
    }

    if (lastUserId === user._id) {
        user.update({$set: {isActive: true}});
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
            clear();
        }
    },
    removed: function (id) {
        var user = UniUsers.findOne({isActive: true});
        if(user && user._id === id) {
            clear();
        }
    }
});