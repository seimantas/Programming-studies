const LOCALHOST = 'http://localhost:5001';

const getCarsBrandsList = async () => {
	const response = await fetch(LOCALHOST);

	const cars = await response.json();

	return cars;
};

const renderCarsBrands = async () => {
	const makersList = await getCarsBrandsList();

	console.log(makersList);

	makersList.forEach((car) => {
		const carBrandElement = document.createElement('li');

		carBrandElement.innerText = car.car;

		document.querySelector('#cars-list').append(carBrandElement);
	});
};

renderCarsBrands();

document.querySelector('#new-car-post').addEventListener('submit', async (event) => {
	event.preventDefault();
	const car = document.querySelector('#new-car-input').value.trim();

	try {
		const response = await fetch(LOCALHOST, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({ car }),
		});

		newCars = await response.json();
	} catch (err) {
		alert(err);
	}

	document.querySelector('#cars-list').replaceChildren();

	await renderCarsBrands();
});
