'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('')
      .service('myService')
      .getWelcomeMessage();
  },
};
