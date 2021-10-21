'use strict';

module.exports = ({ strapi }) => {
  // registeration phase

  strapi.config.middlewares.unshift({
    resolve: __dirname + '/middlewares/auth.js',
    config: {},
  });
};
