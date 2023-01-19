const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = +process.env.PORT || 5000;

const app = express();

let cars = [{ car: 'BMW' }, { car: 'WV' }, { car: 'PORSHE' }, { car: 'AUDI' }];

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
	res.send(cars).end;
});

app.post('/', (req, res) => {
	const { car } = req.body;

	if (!car || typeof car !== 'string') {
		res.status(400).end('You posting an invalid car name!');
		return;
	}
	const newCar = { car };

	console.log(newCar);

	cars.push(newCar);

	res.send({ message: 'New car is addet' }).end;
});

app.delete('/cars/:car', (req, res) => {
	const { car } = req.params;
	const deletedCar = cars.find((curCar) => curCar.car === car);

	if (deletedCar) {
		cars = cars.filter((curCar) => curCar.car !== car);
		return res.status(200).send(`${car} is deleted`).end();
	}

	res.status(404).send('Car not found!').end();
});

app.patch('/cars/:car', (req, res) => {
	const { car } = req.params;

	const carToUpdate = cars.find((curCar) => curCar.car === car);

	if (!car) {
		return res.status(404).send('Car was not provided').end();
	}

	res.send(carToUpdate).end();
});
console.log(cars);
app.listen(PORT, () => {
	console.log(`${PORT} Server is running`);
});
