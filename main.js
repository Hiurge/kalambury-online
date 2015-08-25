if (Meteor.isClient) {
    Template.panelFooter.events({
        'submit form': function (event, template) {
            event.preventDefault();

            var word = template.$('[name="word"]').val();
            if (word.length) {
                Words.insert({
                    word: word
                });

                template.$('[name="word"]').val('');
            }
        }
    });

    Template.panelFooter.helpers({
        currentWord: function () {
            var wordDoc = Words.findOne();

            if (wordDoc) {
                return wordDoc.word;
            }
        }
    });
}