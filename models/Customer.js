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
		remarks: {
			type: String,
			max: 50,
		},
		isConverted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Customer = mongoose.model(
	'Customer',
	customerSchema
);
module.exports = Customer;
