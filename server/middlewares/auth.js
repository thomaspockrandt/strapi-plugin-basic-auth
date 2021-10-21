'use strict';

const auth = require('basic-auth');

module.exports = (_, { strapi }) => {
  return async (ctx, next) => {
    // Programmatic access
    if (
      ctx.url.startsWith('/graphql') ||
      ctx.url.startsWith('/api')
      ) {
      if (ctx.get('x-api-key') === process.env.X_API_KEY) {
        return await next();
      }
      return ctx.unauthorized();
    }

    // For Chrome (Chrome overwrites Authorization header with Bearer)
    if (
      ctx.request.header.authorization &&
      ctx.request.header.authorization.split(' ')[0] === 'Bearer'
      ) {
      const token = ctx.request.header.authorization.split(' ')[1];

      const { isValid } = strapi.admin.services.token.decodeJwtToken(token);

      if (isValid) {
        return await next();
      }
    }

    // Basic Auth
    const credentials = auth(ctx.request);
    if (!credentials) {
      ctx.response.status = 401;
      ctx.response.set('WWW-Authenticate', 'Basic');
    }
    
    if (credentials) {
      const email = credentials.name;
      const password = credentials.pass;

      const [error, user, message] = await strapi.admin.services.auth.checkCredentials({ email, password });

      if (user) {
        const token = strapi.admin.services.token.createJwtToken(user);
        ctx.request.header.authorization = `Bearer ${token}`;
        return await next();
      }
    }
    
    return ctx.unauthorized();
  };
};
