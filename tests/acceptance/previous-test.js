import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | previous');

test('tracking previous', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('#path').text().trim(), 'path:');
    assert.equal(find('#url').text().trim(), 'url:');
    assert.equal(find('#route').text().trim(), 'route:');
    
    click('.foo-link');
  });

  andThen(function() {
    assert.equal(find('#path').text().trim(), 'path: index');
    assert.equal(find('#url').text().trim(), 'url: /');
    assert.equal(find('#route').text().trim(), 'route: index');
    
    click('.query-params');
  });

  andThen(function() {
    assert.equal(find('#path').text().trim(), 'path: foo');
    assert.equal(find('#url').text().trim(), 'url: /foo');
    assert.equal(find('#route').text().trim(), 'route: foo');
    
    click('.to-home');
  });

  andThen(function() {
    assert.equal(find('#path').text().trim(), 'path: bar');
    assert.equal(find('#url').text().trim(), 'url: /bar?baz=biz');
    assert.equal(find('#route').text().trim(), 'route: bar');
  });
});
