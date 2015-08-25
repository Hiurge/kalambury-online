Points = new UniCollection('points');

Points.setSchema({
    x: {type: Number},
    y: {type: Number}
});

Points.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;},
});

if (!Meteor.isServer) {
    window.Points = Points;
}