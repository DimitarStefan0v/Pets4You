const express = require('express');

const expressConfig = require('./config/expressConfig');
const ejsConfig = require('./config/ejsConfig');

const routes = require('./routes');

const PORT = 5000;

const app = express();

expressConfig(app);
ejsConfig(app);

app.use(routes);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
