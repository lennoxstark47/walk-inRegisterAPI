const router = require('express').Router();
const Customer = require('../models/Customer');

router.post('/add', (req, res) => {
	const newCustomer = new Customer({
		name: req.body.name,
		phone: req.body.phone,
		address: req.body.address,
		pin: req.body.pin,
	});
	newCustomer
		.save()
		.then((cx) => {
			if (!cx) {
				res
					.status(400)
					.send('Error creating a new customer');
			} else {
				res.send(cx);
			}
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.get('/list', (req, res) => {
	Customer.find()
		.then((cx) => {
			if (!cx) {
				res
					.status(400)
					.send('Error getting customer');
			} else {
				res.send(cx);
			}
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.get('/getbyphone/:phone', (req, res) => {
	Customer.findOne({ phone: req.params.phone })
		.then((cx) => {
			if (!cx) {
				res
					.status(400)
					.send('Error getting customer');
			} else {
				res.send(cx);
			}
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.get('/getbyname', (req, res) => {
	Customer.findOne({ name: req.body.name })
		.then((cx) => {
			if (!cx) {
				res
					.status(400)
					.send('Error getting customer');
			} else {
				res.send(cx);
			}
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.put('/:id', (req, res) => {
	Customer.findByIdAndUpdate(req.params.id, {
		remarks: req.body.remarks,
		isConverted: req.body.isConverted,
	})
		.then((response) => {
			res.send('Successfully updated');
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

module.exports = router;
