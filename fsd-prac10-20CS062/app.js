require('dotenv').config();

require('./database');
const express = require('express');
const cors = require('cors');

const app = express();
const Users = require('./models/user');

const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'email or password not provided!' });
        return;
    }

    const user = await Users.findOne({ email });

    if (user != null) {
        res.status(400).json({ error: 'User already exists!' });
        return;
    }

    const newUser = new Users({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registed!' });

});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'email or password not provided!' });
        return;
    }

    const user = await Users.findOne({ email });

    if (user == null) {
        res.status(400).json({ error: 'Incorrect email or password' });
        return;
    }

    if (user.password != password) {
        res.status(400).json({ error: 'Incorrect email or password' });
        return;
    }

    res.status(200).json({ message: 'Logged In!' });
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});