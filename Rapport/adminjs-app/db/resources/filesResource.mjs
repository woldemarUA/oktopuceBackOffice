import { FilesModel } from '../entities/Utils/FileModel.mjs';
import { componentLoader } from '../../setUp/componentLoader.mjs';
import uploadFeature from '@adminjs/upload';

const localProvider = {
  bucket: 'public/files',
  opts: {
    baseUrl: '/files',
  },
};

export const FilesResource = async () => {
  return {
    resource: FilesModel,
    options: {
      navigation: false,
    },
    features: [
      uploadFeature({
        componentLoader,
        provider: { local: localProvider },
        properties: {
          file: 'file',
          key: 'filepath',
          bucket: 'bucket',
          mimeType: 'mime',
        },
        validation: {
          mimeTypes: ['image/png', 'application/pdf', 'audio/mpeg'],
        },
      }),
    ],
  };
};
