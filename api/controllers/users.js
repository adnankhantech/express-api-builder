
let getUsers = (req, res) => {
	let data = [{
		id: 1,
		name: 'John Smith'
	},
	{
		id: 2,
		name: 'Steve John'
	}]	
	let formattedResponse = { status: "", code: "", errorType: "", message: "", data: data};
	return res.status(200).send(formattedResponse);
};

module.exports = {
	getUsers
};
