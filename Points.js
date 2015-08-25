Points = new Meteor.Collection('points');

Points.allow({
    insert: function () {
        return true;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return true;
    }
});

if (Meteor.isServer) {
    Meteor.publish('points', function () {
        return Points.find();
    });
} else {
    window.Points = Points;
}