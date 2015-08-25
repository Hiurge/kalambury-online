Points = new UniCollection('points');

Points.setSchema({
    x: {type: Number},
    y: {type: Number}
});

Points.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;}
});

Points.methods({
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