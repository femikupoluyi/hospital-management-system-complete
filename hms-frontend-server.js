const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8083;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the HMS frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hms-frontend-fully-functional.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', service: 'HMS Frontend' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🏥 HMS Frontend Server running on port ${PORT}`);
    console.log(`📱 Access the application at http://localhost:${PORT}`);
});
