import multer from 'multer';
import path from 'path';

const upload = (destFolder) => {
  console.log(destFolder);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public', destFolder));
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });

  return multer({ storage: storage });
};

export default upload;
