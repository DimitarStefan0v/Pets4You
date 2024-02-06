const express = require('express');

const app = express();

const PORT = 5005;

app.get('/', (req, res) => {
    res.send('Response from Express');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));