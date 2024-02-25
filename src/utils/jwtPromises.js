const jsonwebtoken = require('jsonwebtoken');

const sign = (payload, secret, options) => {
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, secret, options, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });

    return promise;
};

