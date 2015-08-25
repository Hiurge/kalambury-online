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

window.addEventListener('DOMContentLoaded', function () {
    var canvas  = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var isPainting = false;

    window.addEventListener('contextmenu', function (event) {
        Meteor.call('clear');
        event.preventDefault();
    });

    canvas.addEventListener('mouseup', function () {
        isPainting = false;
    });

    canvas.addEventListener('mousedown', function (event) {
        isPainting = true;
    });

    canvas.addEventListener('mousemove', function (event) {
        if (isPainting) {
            var mousex = event.pageX - this.offsetLeft;
            var mousey = event.pageY - this.offsetTop;

            draw(mousex, mousey);
        }
    });

    canvas.addEventListener('mouseleave', function () {
        isPainting = false;
    });

    __draw = function () {
        context.clearRect(0, 0, 600, 600);

        Points.find().map(function (point) {
            context.beginPath();
            context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
            context.fillStyle = 'black';
            context.fill();
        });
    };

    Meteor.subscribe('points', function () {
        drawAll();
    });
});