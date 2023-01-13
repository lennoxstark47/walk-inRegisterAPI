const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const customerRouter = require('./routes/customer');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
app.use(cors())
app.use(express.json());
app.use('/api/customer', customerRouter);

mongoose
	.connect(process.env.MONGO_URI)
	.then((data) => {
		if(data) {

			console.log(
				'MongoDb connected successfully....'
			);
			// console.log(data);
		}
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(port, () => {
	console.log(`Server is running at Port ${port}`);
});
