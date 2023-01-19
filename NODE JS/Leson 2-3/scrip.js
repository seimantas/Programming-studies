const getCarsBrandsList = async (user) => {
	try {
		const response = await fetch('http://localhost:5000/carsList');
		const carsBrandslist = await response.json();

		return carsBrandslist;
	} catch (error) {
		console.error(error);
	}
};

const renderMakers = async () => {
	const makersList = await getCarsBrandsList();

	makersList.forEach((makers) => {
		const makersBrandElement = document.createElement('li');

		makersBrandElement.innerText = makers;

		document.querySelector('#makers-list').append(makersBrandElement);
	});
};

renderMakers();
