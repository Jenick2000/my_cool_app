import { Template } from 'meteor/templating';
import { Tasks } from '../../api/tasks.js'; 
import './body.html';

Template.Post.helpers({
  tasks(){
    return Tasks.find({owner : Meteor.userId()}, { sort: { createdAt: -1 } });
  },
  incompleteCount(){
    return Tasks.find({owner : Meteor.userId(),checked : {$ne : true}}).count();
  },
  
});

Template.Post.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'(){ 
    if (confirm('Are You Sure?')){
      Tasks.remove(this._id);
   }
  }
});
Template.PostAside.events({
  'submit .new-event'(event){
     // Prevent default browser form submit
     event.preventDefault();
     const target = event.target;
     const title = target.title.value;
     const desc = target.desc.value;
     // Insert a task into the collection
    Tasks.insert({
      title,
      desc,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
 
    // Clear form
    $('#exampleModal').modal('hide');
    target.title.value = '';
    target.desc.value = '';
  }
});