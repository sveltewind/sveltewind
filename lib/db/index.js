// imports
import _ from 'dotenv/config';
import { MongoClient } from 'mongodb';

// connection options
const options = { useUnifiedTopology: true };

// create a new MongoClient
const client = {};

// initial connection variable
const connection = {};

// close connection
const close = async (db = process.env.MONGO_DB || 'development') => client[db].close();

// create connection function
const connect = async (db = process.env.MONGO_DB || 'development') => {
	// initiate vairables
	const password = process.env.MONGO_PASSWORD || '';
	let uri = process.env.MONGO_URI || '';

	// update uri with env variables
	uri = uri.replace(/\<password\>/g, password).replace(/myFirstDatabase/g, db);

	// check if db client exists
	if (!(db in client)) client[db] = new MongoClient(uri, options);

	// check if db connection exists
	if (!(db in connection)) connection[db] = await client[db].connect();

	return client[db];
};

export { close, connect };
