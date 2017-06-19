export function initialize(appInstance) {
  let previous = {
    path: null,
    url: null,
    route: null
  };
  appInstance.register('previous:main', previous, {instantiate: false})
  appInstance.inject('route', 'previous', 'previous:main');
  appInstance.inject('router:main', 'previous', 'previous:main');
}

export default {
  name: 'previous',
  initialize
};
