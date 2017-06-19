import Ember from 'ember';
import PreviousMixin from 'ember-previous/mixins/previous';
import { module } from 'qunit';
import test from 'ember-sinon-qunit/test-support/test';

module('Unit | Mixin | previous');

// Replace this with your real tests.
test('it works', function(assert) {
  let previous = {};
  this.stub(Ember, 'getOwner')
    .returns({
      lookup: () => previous
    });
  let PreviousObject = Ember.Object.extend(PreviousMixin, {
    currentPath: 'foo',
    currentURL: '/foo',
    currentRouteName: 'foo-route'
  });
  let subject = PreviousObject.create();
  assert.ok(subject);
  subject.willTransition();
  assert.deepEqual(previous, {
    path: 'foo',
    url: '/foo',
    route: 'foo-route'
  })
});
