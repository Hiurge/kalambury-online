Points.methods({
    clear: function () {
        Points.remove({});
    }
});

Points.allow({
    clear: function () {return true;}
});