FlowRouter.route('/', {
    action: function(params, queryParams) {
        console.log("points", params.postId);
        BlazeLayout.render('mainLayout', {main: "kalambury", top: 'topMenu'});
    }
});

FlowRouter.route('/points', {
    action: function(params, queryParams) {
        console.log("Poczatek");
        BlazeLayout.render('mainLayout', {main: "pointsView", top: 'topMenu'});
        console.log("Koniec");
    }
});