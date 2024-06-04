import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

import AdminJSSequelize from '@adminjs/sequelize';
import AdminJS from 'adminjs';

import frenchTranslations from './adminjs-app/utilities/translationFR.json' assert { type: 'json' };
import Plugin from '@adminjs/express';

import { componentLoader } from './adminjs-app/setUp/componentLoader.mjs';
import { Components } from './adminjs-app/components/components.mjs';

// import sequelize from './adminjs-app/db/db_connector.mjs';

// importation des resources

import resourcesAll from './adminjs-app/db/resources/allResources.mjs';

config();

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const port = process.env.PORT || 3003;
const app = express();
app.use(cors());
const server = createServer(app);
app.get('/backoffice', (req, res) => {
  res.send(`Hello Woldemar`);
});

// export const componentLoader = new ComponentLoader();
async function run() {
  const adminOptions = {
    // databases: [sequelize],
    resources: await resourcesAll(),
    // resources: [...resourcesAll, EquipmentsResource()],
  };

  // admin start
  const admin = new AdminJS({
    // databases: [sequelize],
    ...adminOptions,
    componentLoader,
    rootPath: '/',
    dashboard: {
      component: Components.DashboardCard,
    },
    branding: {
      companyName: 'OKTOPUCE',
      logo: 'https://oktopuce.com/build/images/logo.5fd235f1.svg',
      softwareBrothers: false,
      withMadeWithLove: false,
    },
    locale: {
      debug: false,
      language: 'fr',
      availableLanguages: ['en', 'pl', 'fr', 'ua', 'de', 'es', 'it'],
      localeDetection: false,
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

  // Use 'passenger' for Phusion Passenger, otherwise default to port
  if (typeof PhusionPassenger !== 'undefined') {
    server.listen('passenger', () => {
      console.log('Server running with Phusion Passenger');
    });
  } else {
    server.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  }
}

await run();
