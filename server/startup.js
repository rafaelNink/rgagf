Meteor.startup(function(){
  Meteor.publish("rgagf", function(){
    return RGA.find({});
  });
});
