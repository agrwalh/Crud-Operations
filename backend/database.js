const mongoose = require('mongoose');

async function dbConn() {
    try {
        const conn = await mongoose.connect('mongodb+srv://agarwalharsh8909:Harsh123@harsh.3kn84aw.mongodb.net/?retryWrites=true&w=majority&appName=HARSH', {
            ssl: true,
            tls: true,
            tlsAllowInvalidCertificates: false,
            tlsAllowInvalidHostnames: false
        });
        console.log('Database connected successfully');
        return conn;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
    }
}

module.exports = dbConn;