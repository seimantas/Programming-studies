const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');

require('./config');

const LOCAL_PORT = +process.env.serverPort || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`${PORT} Server is running`);
});
