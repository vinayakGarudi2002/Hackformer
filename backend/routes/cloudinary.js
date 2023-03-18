const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'silenceiv',
  api_key: 626847416757451,
  api_secret: '3NzQ5GbrcSjW0EERTJd5XZvfcT8'
//   CLOUDINARY_NAME: 'silenceiv',
//   CLOUDINARY_API_KEY: ,
//   CLOUDINARY_API_SECRET: ,
//   CLOUDINARY_STORAGE: 'pza5zln6'
});

// POST /api/cloudinary/upload-image
router.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file);
    
    // Return URL of uploaded image
    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
