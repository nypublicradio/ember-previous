# ember-previous

An addon for exposing some useful states of the ember router.

Add the `PreviousMixin` to your app router:

```javascript
...
import PreviousMixin from 'ember-previous/mixins/previous';

const Router = Ember.Router.extend(PreviousMixin, {
  ...
});

```

You'll have access to a `previous` object on all your routes.

```javascript
// routes/foo.js
import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);
    let {
      path, // foo.bar
      url, // foo/bar
      route // foo.bar
    } = this.get('previous');
    controller.setProperties({ path, url, route });
  }
});
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-previous`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
