// Handle Generic Errors:
exports.handleErrors = (fn, error_message) => {
    return function(...params) {
        return fn(...params).catch(err => {
            console.log(err);
            console.log(error_message, err.message);
            // console.log(err.stack);
        });
    };
};

exports.catchAPIError = fn => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

exports.catchAPIErrorHotShot = fn => (req, res, next) =>
    fn(req, res, next).catch(next);

exports.expressError = (err, req, res, next) => {
    console.log(err.message || err);
    console.log(err);
    res.status(400).json({ err: err.message || err });
};
