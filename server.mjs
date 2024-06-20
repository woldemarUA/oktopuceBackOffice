import { config } from 'dotenv';
import * as url from 'url';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJS from 'adminjs';

import multer from 'multer';

import frenchTranslations from './adminjs-app/utilities/translationFR.json' assert { type: 'json' };
import Plugin from '@adminjs/express';

import { componentLoader } from './adminjs-app/setUp/componentLoader.mjs';
import { Components } from './adminjs-app/components/components.mjs';

import { light, dark } from '@adminjs/themes';

// importation des resources

import resourcesAll from './adminjs-app/db/resources/allResources.mjs';

config();

const port = process.env.PORT || 3003;
const app = express();
// upload path config
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, './public')));
// end upload path config

// multer

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folder = `public/uploads/${req.query.resourceId}/${encodeURIComponent(
      req.query.propertyName
    )}`;
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to handle file uploads
app.post('/upload', upload.single('myfile'), (req, res) => {
  // Sending back file path to client (this could vary depending on your needs)
  const url = req.file.path;
  res.json({ path: url.replace('public/', '') });
});
// end multer
AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

app.use(cors());

app.use(express.json());
const server = createServer(app);
app.get('/backoffice', (req, res) => {
  res.send(`Hello Woldemar`);
});

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
    defaultTheme: 'dark', // same as `dark` from id in the theme index file,
    availableThemes: [light, dark],
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
