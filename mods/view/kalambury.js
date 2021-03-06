if (Meteor.isClient) {
    Template.panelBody.onRendered(function () {
        

        function draw(x, y) {
            Points.insert({
                x: x, 
                y: y,
                color: Session.get("color") || "rgb(0,0,0)"
            });
        }

        var $canvas = $('canvas');
        var context = $canvas.get(0).getContext('2d');

        var offset = $canvas.offset();
        var isPainting = false;

        $canvas
            .mouseup   (function () {isPainting = false;})
            .mousedown (function () {isPainting = true;})
            .mouseleave(function () {isPainting = false;})
            .mousemove(function (event) {
                if (isPainting) {
                    draw(
                        Math.round(event.pageX - offset.left),
                        Math.round(event.pageY - offset.top)
                    );
                }
            });

        this.autorun(function () {
            context.clearRect(0, 0, 600, 600);

            Points.find().map(function (point) {
                context.beginPath();
                context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
                context.fillStyle = point.color;
                context.fill();
            });
        });
    });

    Template.kalambury.helpers({
        getClassName: function () {
            console.log(UniUsers.getLoggedIn() && UniUsers.getLoggedIn().isActive);
            if (UniUsers.getLoggedIn() && UniUsers.getLoggedIn().isActive) {
                return 'panel panel-primary';
            }

            return 'panel panel-default';
        }
    });

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
} else {
    Meteor.publish(null, function () {
        return UniUsers.find();
    });
}