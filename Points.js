Points = new Meteor.Collection('points');

Points.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;}
});

Meteor.methods({
    clear: function () {
        Points.remove({});
    }
});

if (Meteor.isServer) {
    Meteor.publish('points', function () {
        return Points.find();
    });
} else {
    window.Points = Points;
}