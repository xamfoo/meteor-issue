Items = [];

Session.set('show', true);

var generateItems = function () {
  for (var count=0; count<1000; count+=1) {
    Items.push({index: count});
  }
}

if (Template.list.onCreated)
  Template.list.onCreated(generateItems);
else
  Template.list.created = generateItems;

Template.list.events({
  'click .js-toggle': function () {
    Session.set('show', !Session.get('show'));
  }
});

Template.list.helpers({
  items: function () { return Items; },

  show: function () { return Session.get('show'); }
});
