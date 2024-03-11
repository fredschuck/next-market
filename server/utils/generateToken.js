import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => { 
    // Payload (data you want to include in the token)
    // -- You can also add user's name, email, and isAdmin to the payload 
    const token = jwt.sign({ userId }, 
        process.env.JWT_SECRET, {
        expiresIn: '30d' // Change to 1d for production
    });

    // Set JWT as HTTP only cookie
    res.cookie('jwt', token, { // 'jwt' is the cookie name
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Set to true for production (HTTPS only)
        sameSite: 'strict', // Prevents attacks such as cross-site request forgery
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds (Change to 1 day for production)
    });
};

export default generateToken;