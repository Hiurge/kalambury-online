'use strict';

function draw(x, y) {
    Points.insert({
        x: x,
        y: y
    });
}

var __draw;
var drawAll = function () {
    __draw && __draw();
};

Points.after.insert(drawAll);
Points.after.remove(drawAll);
Points.after.update(drawAll);

$(function () {
    var $canvas = $('canvas');
    var context = $canvas.get(0).getContext('2d');

    var offset = $canvas.offset();
    var isPainting = false;

    $(window)
        .resize(function () {
            offset = $canvas.offset();
        })
        .on('contextmenu', function (event) {
            Points.call('clear');
            event.preventDefault();
        });

    $canvas
        .mouseup   (function () {isPainting = false;})
        .mousedown (function () {isPainting = true;})
        .mouseleave(function () {isPainting = false;})
        .mousemove(function (event) {
            if (isPainting) {
                draw(
                    event.pageX - offset.left,
                    event.pageY - offset.top
                );
            }
        });

    __draw = function () {
        context.clearRect(0, 0, 600, 600);

        Points.find().map(function (point) {
            context.beginPath();
            context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
            context.fillStyle = randomColor();
            context.fill();
        });
    };

    Meteor.subscribe('points', function () {
        drawAll();
    });
});