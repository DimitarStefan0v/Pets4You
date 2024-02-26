const express = require('express');

const expressConfig = require('./config/expressConfig');
const ejsConfig = require('./config/ejsConfig');
const dbConnect = require('./config/dbConfig');

const { seedInitialCategories } = require('./services/categoriesService');

const routes = require('./routes');

const app = express();

expressConfig(app);
ejsConfig(app);

dbConnect()
	.then(() => {
		console.log('DB connected successfully');
		seedInitialCategories()
			.then((res) => console.log(res))
			.catch((err) => console.log('Seeder error', err));
	})
	.catch((err) => console.log('DB error', err));

app.use(routes);

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server is running on port ${process.env.PORT || 5000}`)
);
