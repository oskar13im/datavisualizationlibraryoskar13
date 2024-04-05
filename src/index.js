// image-compression-utility.js

const sharp = require('sharp');
const fs = require('fs');

// Function to compress an image
function compressImage(inputPath, outputPath, options) {
    // Default options
    const defaultOptions = {
        quality: 80,
        maxWidth: 1024,
        maxHeight: 768
    };

    // Merge default options with user-defined options
    options = { ...defaultOptions, ...options };

    // Compress the image
    sharp(inputPath)
        .resize({
            width: options.maxWidth,
            height: options.maxHeight,
            fit: 'inside'
        })
        .toFormat('jpeg', { quality: options.quality })
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error('Error compressing image:', err);
            } else {
                console.log('Image compressed successfully:', info);
            }
        });
}

module.exports = compressImage;
