'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  
  strapi.config.middlewares.unshift({
    resolve: './src/plugins/basic-auth/server/middlewares/auth.js',
    config: {},
  });
};
