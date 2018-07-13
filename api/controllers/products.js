
let getProducts = (req, res) => {
	let data = [{
		id: 1,
		name: 'Apple iphone'
	},
	{
		id: 2,
		name: 'Samsung S8'
	}]	
	let formattedResponse = { status: "", code: "200", errorType: "", message: "", data: data};
	return res.status(200).send(formattedResponse);
};

module.exports = {
	getProducts
};
