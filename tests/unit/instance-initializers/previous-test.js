import Ember from 'ember';
import { initialize } from 'dummy/instance-initializers/previous';
import { module } from 'qunit';
import test from 'ember-sinon-qunit/test-support/test';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | previous', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

test('it works', function(assert) {
  let appMock = this.mock(this.appInstance);
  appMock
    .expects('register')
    .withArgs('previous:main', {
      path: null,
      url: null,
      route: null
    }, {instantiate: false});
  appMock
    .expects('inject')
    .withArgs('route', 'previous', 'previous:main');
  initialize(this.appInstance);

  assert.ok(true);
});
