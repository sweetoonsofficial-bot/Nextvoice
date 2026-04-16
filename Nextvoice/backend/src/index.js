const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sample endpoint
app.get('/api', (req, res) => {
    res.send('Nextvoice API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});