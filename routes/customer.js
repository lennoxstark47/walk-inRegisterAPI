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
	const {remarks, isConverted, name, phone, address, pin} = req.body
	Customer.findByIdAndUpdate(req.params.id, {
		remarks: remarks,
		isConverted: isConverted,
		name: name,
		phone: phone,
		address : address,
		pin : pin

	})
		.then((response) => {
			res.send('Successfully updated');
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.get('/:id', (req, res) => {
	Customer.findById(req.params.id)
		.then((cx) => {
			res.send(cx);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/getByDate', (req, res) => {
	Customer.find({
		createdAt: {
			$gt: req.body.min,
			$lt: req.body.max,
		},
	})
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

router.get('/get/allconverted', (req, res) => {
	Customer.find({ isConverted: true })
		.then((respnse) => {
			res.send(respnse);
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

router.get('/get/nonconverted', (req, res) => {
	Customer.find({ isConverted: false })
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

module.exports = router;
