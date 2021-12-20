# Strapi Plugin Basic Authentication
Basic Authentication Middleware for Strapi CMS

## Integration
Enable the plugin by adding it to the plugins configurations file:
```
// path: /path/to/myDevelopmentProject/config/plugins.js

module.exports = {
  // ...
  'strapi-plugin-basic-auth': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-basic-auth'
  },
  // ...
}
```

## Admin User Interface
Use your regular Strapi CMS user to login with basic authentication.

## Programmatic access (Serverless Function, ..)
```
curl "https://localhost:1337/graphql" \
     -H 'x-api-key: X_API_KEY'
```

`X_API_KEY` is set as environment variable on the Strapi CMS host.
