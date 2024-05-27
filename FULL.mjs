const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');

const express = require('express');
const app = express();

const adminJs = new AdminJS({
  databases: [], // add your database connection here
  rootPath: '/admin',
  branding: {
    companyName: 'Awesome Company',
    logo: 'https://path.to/logo.png',
    theme: {
      colors: {
        primary100: '#f0f0f0', // just an example
      },
    },
  },
  locale: {
    translations: {
      labels: {
        loginWelcome: 'Welcome to the Admin Panel',
      },
    },
  },
  auth: {
    authenticate: async (email, password) => {
      // Your authentication logic here
      return { email };
    },
    cookiePassword: 'session_secret',
    cookieName: 'adminjs_session',
  },
});

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  cookieName: 'adminjs_session',
  cookiePassword: 'session_secret',
  authenticate: async (email, password) => {
    // Your authentication logic here
    return { email };
  },
});

app.use(adminJs.options.rootPath, router);
app.listen(3000, () =>
  console.log('AdminJS running on http://localhost:3000/admin')
);
