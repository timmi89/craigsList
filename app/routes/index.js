import Ember from 'ember';

var cities = [{
  city: "Portland",
  state: "Oregon"
}, {
  city: "Seattle",
  state: "Washington"
},{
  city: "Tulsa",
  state: "Oklahoma"
}, {
  city: "Salem",
  state: "Oregon"
}, {
  city: "Chicken",
  state: "Alaska"
}];

export default Ember.Route.extend({
  model() {
    return cities;
  },
});
