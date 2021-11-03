const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const customerRouter = require('./routes/customer');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use('/api/customer', customerRouter);

mongoose
	.connect(process.env.MONGO_URI)
	.then((data) => {
		console.log(
			'MongoDb connected successfully....'
		);
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(port, () => {
	console.log(`Server is running at Port ${port}`);
});
