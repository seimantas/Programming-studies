const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = +process.env.PORT;

const app = express();

const carsList = ['BMW', 'WV', 'Porshe', 'AUDI'];

app.use(express.json());
app.use(cors());

app.get('/carsList', (req, res) => {
	res.send(carsList);
});

app.listen(PORT, () => {
	console.log(`${PORT} Server is running`);
});
