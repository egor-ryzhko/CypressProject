const fs = require('fs');
const pdf = require('pdf-parse');

function parsePdf(path) {
    let dataBuffer = fs.readFileSync(path);
    return pdf(dataBuffer);
}

module.exports = (on, config) => {
    on('task', {
        parsePdf,
    });
}