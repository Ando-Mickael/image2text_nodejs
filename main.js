const Tesseract = require('tesseract.js');

const imagePath = './test.png';

Tesseract.recognize(
    imagePath,
    'eng',
    {
        logger: info => console.log(info)
    }
)
    .then(({ data: { text } }) => {
        console.log('\nExtracted text:\n---\n');
        console.log(text);
    })
    .catch(error => {
        console.error('Error:', error);
    });
