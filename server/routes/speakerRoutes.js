// const _ = require('lodash');
// const qs = require('qs');
// const Q = require('q');
// const requireLogin = require('../middlewares/requireLogin');
//const inspect = require('util');
const sd = require('./speaker_data');

module.exports = app => {

	app.put('/speakers/:id?', function (req, res) {
		const { id } = req.params;
		console.log(`app.put(/speakers/${id})`);

		res.json({});
	});
	
	app.get('/speakers', async (req, res) => {
		//console.log(req);
		
		res.json(sd.speakers);
	});
	
};