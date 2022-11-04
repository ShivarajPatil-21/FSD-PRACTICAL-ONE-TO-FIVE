const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

mongoose.connect(URL);

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
    process.exit(1);
})
