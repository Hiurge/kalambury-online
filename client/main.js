'use strict';

function draw(x, y) {
    Points.insert({
        x: x,
        y: y
    });
}

var drawAll;

Points.after.insert(function () {
    drawAll && drawAll();
});

Points.after.remove(function () {
    drawAll && drawAll();
});

window.addEventListener('DOMContentLoaded', function () {
    var canvas  = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var isPainting = false;

    context.fillStyle = 'black';

    canvas.addEventListener('contextmenu', function () {
        Points.find().map(function (point) {
            Points.remove(point._id);
        });

        return false;
    });

    canvas.addEventListener('mouseup', function () {
        isPainting = false;
    });

    canvas.addEventListener('mousedown', function (event) {
        var mousex = event.pageX - this.offsetLeft;
        var mousey = event.pageY - this.offsetTop;

        draw(mousex, mousey);

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

    drawAll = function () {
        context.clearRect(0, 0, 600, 600);

        Points.find().map(function (point) {
            context.beginPath();
            context.arc(point.x, point.y, 1, 0, 2 * Math.PI, false);
            context.fill();
        });
    };

    setTimeout(function () {
        drawAll();
    }, 100);
});