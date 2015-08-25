Points = new UniCollection('points');

Points.setSchema({
    x: {type: Number},
    y: {type: Number}
});

Points.allow({
    insert: function (userId) {
        return userId && UniUsers.getLoggedIn().isActive;
    },
    remove: function (userId) {
        return userId && UniUsers.getLoggedIn().isActive;
    },
    update: function (userId) {
        return userId && UniUsers.getLoggedIn().isActive;
    }
});

if (!Meteor.isServer) {
    window.Points = Points;
}