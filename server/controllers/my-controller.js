'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-basic-auth')
      .service('myService')
      .getWelcomeMessage();
  },
};
