Chat = new UniCollection("chat");

Chat.setSchema(new SimpleSchema({
	message: {type: String}
	,user_id: {type: String}
}));

Chat.helpers(
{
	getUser: function()
	{
		return UniUsers.findOne(this.user_id);
	}
});
