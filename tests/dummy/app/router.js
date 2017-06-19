import Ember from 'ember';
import config from './config/environment';
import PreviousMixin from 'ember-previous/mixins/previous';

const Router = Ember.Router.extend(PreviousMixin, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo');
  this.route('bar');
});

export default Router;
