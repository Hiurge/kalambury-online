FlowRouter.route('/points', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});