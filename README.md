# Strapi Plugin Basic Auth
Basic Authentication Middleware for Strapi CMS

## Usage
### Admin User Interface
Use your regular Strapi CMS user to login through basic authentication.

### Programmatic access (Serverless Functions, ..)
```
curl "http://localhost:1337/graphql" \
     -H 'x-api-key: X_API_KEY'
```

`X_API_KEY` is set as environment variable on the Strapi CMS machine.
