function start() {
    console.log('start function called');
    return 'hello start';
}

function upload() {
    console.log('upload function called');
    return 'hello upload';
}

exports.start = start;
exports.upload = upload;
