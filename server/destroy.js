'use strict';

module.exports = ({ strapi }) => {
  // destroy phase
  
  strapi.config.middlewares.unshift({
    resolve: __dirname + '/middlewares/auth.js',
    config: {},
  });
};
