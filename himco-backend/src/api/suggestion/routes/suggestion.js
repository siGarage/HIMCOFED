'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/suggestion/send',
      handler: 'api::suggestion.suggestion.create', // v4 syntax
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};

