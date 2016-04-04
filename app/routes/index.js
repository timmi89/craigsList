import Ember from 'ember';
export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
       cities: this.store.findAll('city'),
       categories: this.store.findAll('category'),
       jobs: this.store.findAll('job')
   });
 },

 actions: {
   save3(params) {
    var newJob = this.store.createRecord('job', params);
    newJob.save();
    this.transitionTo('index');
  },
   destroyJob(job) {
     job.destroyRecord();
     this.transitionTo('index');
   }
 }
});
