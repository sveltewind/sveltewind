// imports
import _ from 'dotenv/config';
import jwt from 'jsonwebtoken';

export default async (_id) => {
	// sign token
	const token = await jwt.sign({ _id }, process.env.JWT_SECRET);

	return token;
};
