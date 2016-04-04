import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(job) {
      if (confirm('Are you sure you want to delete this job?')) {
        this.sendAction('destroyJob', job);
      }
    }
  }

});
