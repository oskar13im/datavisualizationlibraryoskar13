# Image Compression Utility

A lightweight Node.js utility for compressing images using the Sharp library.

## Installation

You can install the utility via npm:

```bash
npm install image-compression-utility
```

## Usage

```javascript
const compressImage = require('image-compression-utility');

// Example usage
const inputPath = 'input.jpg';
const outputPath = 'output.jpg';
const options = {
    quality: 80,
    maxWidth: 1024,
    maxHeight: 768
};

// Compress the image
compressImage(inputPath, outputPath, options);
```

## API

### `compressImage(inputPath, outputPath, options)`

Compresses an image using the Sharp library.

- `inputPath`: The file path of the original image.
- `outputPath`: The file path where the compressed image will be saved.
- `options` (optional): An object containing compression options. Available options are:
  - `quality`: The quality of the compressed image (default: `80`).
  - `maxWidth`: The maximum width of the compressed image (default: `1024`).
  - `maxHeight`: The maximum height of the compressed image (default: `768`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
