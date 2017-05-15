# Starter for Webpack Hot Module Replacement for Backend apps

This starter contains Webpack 2 and Babel configurations for development and production build of backend services.

You can enjoy:
- Fast reloading with Webpack Hot Module Replacement (say goodbye to nodemon)
- Next-gen javascript features with Babel (stage-3 in this example)
- Fast and easy testing with [Jest](https://facebook.github.io/jest/)
- Better debugging in development and production with source maps

We included express for show case but any other framework could be used.

## Getting Started

```bash
git clone https://github.com/saicoder/backend-webpack-hmr myapp
cd myapp && npm install # or yarn install
npm start #or yarn start if you are using yarn
```

## Going full Express

If you decide to stick with express consider:

- exporting Routers directly from route handlers and use supertest npm package for testing them
- adding middlewares for body parsing, serving static assets, etc..
- adding middlewares for error handling and logging in production

## Testing

We use [Jest](https://facebook.github.io/jest/) in this starter but feel free to change your test framework.

You can run your test with `npm test` or `yarn test` if you are using yarn.
If you want to access all features of jest, consider installing jest-cli globally.

Then you can access coverage reports with `jest --coverage` or automatic test re-run
on change with `jest --watch`.

Check `jest --help` for additional features

## Building for production

- Run `npm build`
- `dist/server.js` will be generated with source maps.
- Start your app with `node dist/server`
