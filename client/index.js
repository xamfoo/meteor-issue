Items = [];

Session.set('show', true);

Template.list.onCreated(function () {
  for (var count = 0; count<1000; count+=1) {
    Items.push({index: count});
  }
})

Template.list.events({
  'click .js-toggle': function () {
    Session.set('show', !Session.get('show'));
  }
});

Template.list.helpers({
  items: function () { return Items; },

  show: function () { return Session.get('show'); }
});
