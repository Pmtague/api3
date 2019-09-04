const express = require('express');

const router = express.Router();

// const router = require('express').Router();  <-- alternative to two lines above

function uppercaser(req, res, next) {
	const name = req.params.name;

	if(name) {
		name = name.toUpperCase();
	}
	res.send(`the name is: ${name}`)
}

router.use(express.json());

router.get('/', (req, res) => {
	res.send('get to /suppliers/')
})
router.get('/:name', uppercaser, (req, res) => {
	res.send('get to /suppliers/${req.name}');
});

module.exports = router;