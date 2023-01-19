const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const PORT = +process.env.PORT;
const URI = process.env.URI;
const client = new MongoClient(URI);

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (_, res) => {
	const con = await client.connect();
	const data = await con.db('users').collection('people').find().toArray();
	await con.close();
	return res.send(data);
});

app.get('/people/:gender', async (req, res) => {
	const { gender } = req.params;
	const con = await client.connect();
	const data = await con.db('users').collection('people').find({ gender }).toArray();
	console.log(data);
	await con.close();
	return res.send(data);
});

app.get('/sort-by-oldest', async (_, res) => {
	const con = await client.connect();
	const data = await con.db('users').collection('people').find().sort({ age: -1 }).toArray();
	await con.close();
	return res.send(data);
});

app.post('/people', async (req, res) => {
	const { firstName, lastName, age } = req.body;
	try {
		const con = await client.connect();
		const dbRes = await con.db('users').collection('people').insertOne({ firstName, lastName, age });
		await con.close();
		return res.send(dbRes);
	} catch (err) {
		res.status(500).send({ err });
	}
});

app.listen(PORT, () => {
	console.log(`${PORT} Server is running`);
});
