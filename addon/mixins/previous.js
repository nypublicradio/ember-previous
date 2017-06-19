import Ember from 'ember';

export default Ember.Mixin.create({
  willTransition() {
    this.setProperties({
      'previous.path': this.currentPath,
      'previous.url': this.currentURL,
      'previous.route': this.currentRouteName
    });
  
    let ret = this._super(...arguments);
    return ret === false ? ret : true;
  }
});
