Words = new UniCollection('words');

Words.setSchema({
    word:  {type: String},
    count: {type: Number}
});

Words.allow({
    insert: function () {return true;},
    remove: function () {return true;},
    update: function () {return true;}
});

Words.setDefaultSort({
    word:   1,
    count: -1
});

Words.before.insert(function (userId, doc) {
    doc.count = doc.count || 0;
});

if (!Meteor.isServer) {
    window.Words = Words;
}