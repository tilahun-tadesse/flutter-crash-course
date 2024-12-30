function errorHandler(err, req, res, next) {
    if (typeof err === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Invalid Token!' });

    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.code === 11000) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    return res.status(500).json({ message: err.message });
}
module.exports = errorHandler;