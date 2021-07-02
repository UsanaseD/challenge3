const request = require('request');

_EXTERNAL_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

const callExtrenalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        return callback(body)
    })
}
module.exports.callApi = callExtrenalApiUsingRequest;