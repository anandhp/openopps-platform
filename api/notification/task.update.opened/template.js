module.exports = {
  subject: 'Your opportunity is approved and open',
  to: '<%= user.username %>',
  data: function (model, done) {
    var data = {
      task: model.task,
      user: model.user,
    };
    done(null, data);
  },
};
