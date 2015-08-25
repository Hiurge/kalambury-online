Points = new UniCollection('points');

Points.setSchema({
    x: {type: Number},
    y: {type: Number}
});

Points.methods({
    clear: function () {
        Points.remove({});
    }
});

Points.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;},

    clear: function () {return true;}
});

if (Meteor.isServer) {
    Meteor.publish('points', function () {
        return Points.find();
    });
} else {
    window.Points = Points;
}