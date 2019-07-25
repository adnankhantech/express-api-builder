const admin = require('firebase-admin');
const moment = require('moment');
const serviceAccount = require("../../google-services.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

let getCollectionData = (req, res) => {
	console.log(req.params.collection)
	let queryResult = db.collection(req.params.collection).doc(req.params.doc_id);
	// console.log(moment("2019-04-17 17:51:19").format('YYYY-DD-MM hh:mm:ss'))
	// let dateResult = db.collection(req.params.collection).where('loginDate')
	let getDoc = queryResult.get()
		.then(doc => {
			if (!doc.exists) {
			let formattedResponse = { status: "error", code: "500", errorType: "Record Not Found", message: "No such document!", data: "" };
			console.log('No such document!');
			return res.status(formattedResponse.code).send(formattedResponse)
			} else {
			// console.log('Document data:', doc.data());
			return res.status(200).send(doc.data());
			}
		})
		.catch(err => {
			console.log('Error getting document', err);
		});
};

module.exports = {
	getCollectionData
};
