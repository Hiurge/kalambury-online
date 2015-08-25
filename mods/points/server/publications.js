Meteor.publish('points', function () {
    return Points.find();
});