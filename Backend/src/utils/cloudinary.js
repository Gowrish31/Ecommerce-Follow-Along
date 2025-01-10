const cloudinary = require('cloudinary').v2;
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: '../config/.env',
  });
}
cloudinary.config({
  cloud_name: process.env.cloud_name || 'dbysi9iez',
  api_key: process.env.api_key || 222126197332894,
  api_secret: process.env.api_secret || 'IDIj4IgejyqDi83eoaS73h84HTc',
});
module.exports = cloudinary;