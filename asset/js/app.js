const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const SECRET_KEY = 'your-secret-key';

// Mock database
const images = [];
const users = [
    {
        id: 1,
        username: 'admin',
        password: 'password', // Em um ambiente real, use hashing de senha
        role: 'admin'
    }
];

// Middleware
app.use(bodyParser.json());

// Auth middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Auth route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Upload route
app.post('/api/upload', authMiddleware, (req, res) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    const { imageUrl } = req.body;
    if (imageUrl) {
        images.push(imageUrl);
        res.json({ message: 'Imagem adicionada com sucesso!' });
    } else {
        res.status(400).json({ message: 'URL da imagem é obrigatória.' });
    }
});

// Serve static files
app.use(express.static('public'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
