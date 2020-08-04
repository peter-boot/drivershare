// const _ = require('lodash');
// const qs = require('qs');
// const Q = require('q');
// const requireLogin = require('../middlewares/requireLogin');
const sd = require('./speaker_data');


module.exports = app => {
	
	app.get('/speakers', async (req, res) => {
		
		res.json(sd.speakers);
		
		//const { reqtype, searchValues } = req.params;

		//console.log('\n\n\nfetchDoughnuts() searchValuesObj=%s', JSON.stringify(searchValuesObj, null, 2));
		//console.log('\nfetchDoughnuts() dd.segment_detail_doughnut=%s', JSON.stringify(dd.segment_detail_doughnut, null, 2))

		//console.log('\nfetchDoughnuts() seriesIndex=%s campaignId=%s', searchValuesObj.seriesIndex, searchValuesObj.campaignId);
		//console.log('fetchDoughnuts() dataObj=%s', JSON.stringify(dataObj, null, 2));

		/*
		Q.when()
			.then(function () {
				return qs.parse(searchValues);
			})
			.then(function (searchValuesObj) {
				//console.log('\nfetchDoughnuts() searchValuesObj=%s', JSON.stringify(searchValuesObj, null, 2));
				return [searchValuesObj.contact_id, parseInt(searchValuesObj.seriesIndex), parseInt(searchValuesObj.campaignId)];
			})
			.spread(function (contact_id, seriesIndex, campaignId) {
				//console.log('\nfetchDoughnuts() contact_id=%s seriesIndex=%s campaignId=%s', contact_id, seriesIndex, campaignId);
				switch (seriesIndex) {
					case -1: // All
						return [{ index: seriesIndex, title: 'All' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 0: // Distribution
						return [{ index: seriesIndex, title: 'Distribution' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 1: // Engagement
						return [{ index: seriesIndex, title: 'Engagement' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 2: // Billable Events
						return [{ index: seriesIndex, title: 'Billable Events' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 3: // Premium Actions
						return [{ index: seriesIndex, title: 'Premium Actions' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 4: // Prescription Behaviour
						return [{ index: seriesIndex, title: 'Prescription Behaviour' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
				}
			})
			.spread(function (doughnutsObj, doughnuts) {
				//console.log('\nfetchDoughnuts() doughnutsObj=%s', JSON.stringify(doughnutsObj, null, 2));
				//console.log('\n\nfetchDoughnuts() doughnuts[0]=%s', JSON.stringify(doughnuts[0], null, 2));
				doughnutsObj.doughnuts = doughnuts;
				return doughnutsObj;
			})
			.catch(function (error) {
				console.error('fetchDoughnuts() Error: ' + error.stack);
			})
			.done(function (doughnutsObj) {
				//console.log('\nfetchDoughnuts() doughnutsObj=%s', JSON.stringify(doughnutsObj, null, 2));
				res.json(doughnutsObj);
			});
			*/

	});

	/* // fetchDoughnuts()
	app.get('/doughnuts/:reqtype?/:searchValues?', requireLogin, async (req, res) => {
		const { reqtype, searchValues } = req.params;

		//console.log('\n\n\nfetchDoughnuts() searchValuesObj=%s', JSON.stringify(searchValuesObj, null, 2));
		//console.log('\nfetchDoughnuts() dd.segment_detail_doughnut=%s', JSON.stringify(dd.segment_detail_doughnut, null, 2))

		//console.log('\nfetchDoughnuts() seriesIndex=%s campaignId=%s', searchValuesObj.seriesIndex, searchValuesObj.campaignId);
		//console.log('fetchDoughnuts() dataObj=%s', JSON.stringify(dataObj, null, 2));

		Q.when()
			.then(function () {
				return qs.parse(searchValues);
			})
			.then(function (searchValuesObj) {
				//console.log('\nfetchDoughnuts() searchValuesObj=%s', JSON.stringify(searchValuesObj, null, 2));
				return [searchValuesObj.contact_id, parseInt(searchValuesObj.seriesIndex), parseInt(searchValuesObj.campaignId)];
			})
			.spread(function (contact_id, seriesIndex, campaignId) {
				//console.log('\nfetchDoughnuts() contact_id=%s seriesIndex=%s campaignId=%s', contact_id, seriesIndex, campaignId);
				switch (seriesIndex) {
					case -1: // All
						return [{ index: seriesIndex, title: 'All' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 0: // Distribution
						return [{ index: seriesIndex, title: 'Distribution' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 1: // Engagement
						return [{ index: seriesIndex, title: 'Engagement' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 2: // Billable Events
						return [{ index: seriesIndex, title: 'Billable Events' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 3: // Premium Actions
						return [{ index: seriesIndex, title: 'Premium Actions' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
					case 4: // Prescription Behaviour
						return [{ index: seriesIndex, title: 'Prescription Behaviour' }, getDoughnutSeries(contact_id, seriesIndex, campaignId)];
						break;
				}
			})
			.spread(function (doughnutsObj, doughnuts) {
				//console.log('\nfetchDoughnuts() doughnutsObj=%s', JSON.stringify(doughnutsObj, null, 2));
				//console.log('\n\nfetchDoughnuts() doughnuts[0]=%s', JSON.stringify(doughnuts[0], null, 2));
				doughnutsObj.doughnuts = doughnuts;
				return doughnutsObj;
			})
			.catch(function (error) {
				console.error('fetchDoughnuts() Error: ' + error.stack);
			})
			.done(function (doughnutsObj) {
				//console.log('\nfetchDoughnuts() doughnutsObj=%s', JSON.stringify(doughnutsObj, null, 2));
				res.json(doughnutsObj);
			});

	}); */
};