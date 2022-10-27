import jwt from 'jsonwebtoken';

export const checkAuth = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new Error('you are not authorized');
    }
    const token = authHeader.split(' ')[1].trim();
    if (!token) {
        throw new Error('Authentication token must be provided');
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return user;
    } catch (error) {
        throw new Error('Invalid/expired token');
    }
};
