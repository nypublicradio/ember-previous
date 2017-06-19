import Ember from 'ember';

export default Ember.Mixin.create({
  willTransition() {
    this._super(...arguments);
    let previous = Ember.getOwner(this).lookup('previous:main');
    Ember.setProperties(previous, {
      'path': this.currentPath,
      'url': this.currentURL,
      'route': this.currentRouteName
    });
  }
});
