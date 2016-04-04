import Ember from 'ember';

export default Ember.Component.extend({
  addNewJob: false,
  actions: {
    jobFormShow() {
      this.set('addNewJob', true);
    },

    save1() {
     var params = {
       title: this.get('title'),
       description: this.get('description'),
     };
     this.set('addNewJob', false);
     this.sendAction('save2', params);
   }
 }
});
