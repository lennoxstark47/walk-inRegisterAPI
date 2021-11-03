const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			max: 50,
		},
		phone: {
			type: String,
			required: true,
			max: 12,
		},
		address: {
			type: String,
			required: true,
			max: 100,
		},
		pin: {
			type: String,
			required: true,
			max: 6,
		},
	},
	{ timestamps: true }
);

const Customer = mongoose.model(
	'Customer',
	customerSchema
);
module.exports = Customer;
