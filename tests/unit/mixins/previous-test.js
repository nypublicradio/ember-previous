import Ember from 'ember';
import PreviousMixin from 'ember-previous/mixins/previous';
import { module, test } from 'qunit';

module('Unit | Mixin | previous');

// Replace this with your real tests.
test('it works', function(assert) {
  let PreviousObject = Ember.Object.extend(PreviousMixin, {
    previous: {},
    currentPath: 'foo',
    currentURL: '/foo',
    currentRouteName: 'foo-route'
  });
  let subject = PreviousObject.create();
  assert.ok(subject);
  subject.willTransition();
  assert.deepEqual(subject.previous, {
    path: 'foo',
    url: '/foo',
    route: 'foo-route'
  })
});
