// server.js - Update to include admin functionality
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'admin_secret_key',
    resave: false,
    saveUninitialized: true
}));

const ADMIN_PASSWORD = "admin123"; // Predefined admin password

let cars = { /* Existing car data with added availability */ };

app.post('/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        req.session.admin = true;
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Incorrect password' });
    }
});

app.get('/admin/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin.html');
});

app.post('/admin/update-car', (req, res) => {
    if (!req.session.admin) return res.status(403).json({ success: false, message: 'Unauthorized' });
    const { id, availability } = req.body;
    if (cars[id]) {
        cars[id].availability = availability;
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: 'Car not found' });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));