import express from 'express';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJS from 'adminjs';
import frenchTranslations from './utilities/translationFR.json' assert { type: 'json' };

import Plugin from '@adminjs/express';

import sequelize from './db/db_connector.mjs';

// importation des resources

import resourcesAll from './db/resources/allResources.mjs';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});
const app = express();
async function setUpAdmin(port) {
  const adminOptions = {
    databases: [sequelize],
    resources: resourcesAll,
  };

  // admin start
  const admin = new AdminJS({
    databases: [sequelize],
    ...adminOptions,
    rootPath: `/`,
    branding: {
      companyName: 'OKTOPUCE',
    },
    locale: {
      language: 'fr',
      availableLanguages: ['en', 'pl', 'fr', 'ua', 'de', 'es', 'it'],
      localeDetection: true,
      translations: {
        fr: frenchTranslations,
      },
    },
    // },
    // loginPath and logoutPath:
    // Example of adding authentication:
    // auth: {
    //   authenticate: async (email, password) => {
    //     // Your authentication logic here
    //   },
    //   cookiePassword: 'session_cookie_password',
    // },
  });

  const adminRouter = Plugin.buildRouter(admin);
  admin.watch();
  app.use(admin.options.rootPath, adminRouter);
  console.log('AdminJS setup complete and router attached');
  console.log(adminRouter);
}

export default setUpAdmin;
