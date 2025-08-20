'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/suggestion/send',
      handler: 'suggestion.create',
      config: {
        auth: false,                  // allow public access (no JWT needed)
        policies: [],
        middlewares: [],
      },
    },
  ],
};
