import uploadFeature from '@adminjs/upload';
import { componentLoader } from '../setUp/componentLoader.mjs';

export function setupUploadFeature(key, bucketPath, allowedMimeTypes) {
  return uploadFeature({
    componentLoader,
    provider: { local: { bucket: bucketPath } },
    properties: {
      key, //definde in the Model
      // mimeType: 'mimetype',
    },
    validation: { mimeTypes: allowedMimeTypes },
  });
}
