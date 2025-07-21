'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/suggestion/send',
      handler: 'suggestion.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
