FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'kalambury', top: 'topMenu'});
    }
});

FlowRouter.route('/points', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'pointsView', top: 'topMenu'});
    }
});