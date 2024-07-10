import { config } from 'dotenv';
import * as url from 'url';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import Plugin from '@adminjs/express';
import AdminJS, { Login } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import multer from 'multer';
import { DefaultAuthProvider } from 'adminjs';
import resourcesAll from './adminjs-app/db/resources/allResources.mjs';
import frenchTranslations from './adminjs-app/utilities/translationFR.json' assert { type: 'json' };
import { componentLoader } from './adminjs-app/setUp/componentLoader.mjs';

import { Components } from './adminjs-app/components/components.mjs';
import { light, dark, noSidebar } from '@adminjs/themes';

import { authenticate } from './adminjs-app/auth/authActions.mjs';

config();

const port = process.env.PORT || 3003;
const app = express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const SECRET_KEY = 'oktopuce-secret';

app.use(express.static(path.join(__dirname, './public')));
app.use(cors());
app.use(bodyParser.json());

// Multer configuration
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

app.post('/upload', upload.single('myfile'), (req, res) => {
  const url = req.file.path;
  res.json({ path: url.replace('public/', '') });
});

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const server = createServer(app);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

async function run() {
  // createUser('vlad.timchenko@gmail.com', 'chinaboy', 1);

  const adminOptions = {
    resources: await resourcesAll(),
  };

  // authenticate
  const authProvider = new DefaultAuthProvider({
    componentLoader,
    authenticate,
  });

  const admin = new AdminJS({
    ...adminOptions,
    componentLoader,
    rootPath: '/',
    dashboard: {
      component: Components.DashboardCard,
    },

    branding: {
      companyName: 'OKTOPUCE',
      logo: '/logo/logo.5fd235f1.svg',
      softwareBrothers: false,
      withMadeWithLove: false,
    },
    defaultTheme: 'dark',
    availableThemes: [light, dark, noSidebar],
    locale: {
      debug: false,
      language: 'fr',
      availableLanguages: ['en', 'pl', 'fr', 'ua', 'de', 'es', 'it'],
      localeDetection: false,
      translations: {
        fr: {
          ...frenchTranslations,
          components: {
            Login: {
              welcomeHeader: "Bienvenue dans l'application de gestion Oktopuce",
              welcomeMessage: 'Merci de vous connecter pour continuer',
              properties: {
                email: 'Votre email',
                password: 'Votre mot de pass',
              },
              loginButton: 'Se connecter',
            },
          },
        },
      },
    },
    assets: {
      styles: ['/styles/styles.css'],
    },
  });

  // const adminRouter = Plugin.buildRouter(admin);
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: 'test',
      provider: authProvider,
    },
    null,
    {
      secret: 'test',
      resave: false,
      saveUninitialized: true,
    }
  );

  app.use(admin.options.rootPath, adminRouter);

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

run();
