const mongoose = require('mongoose')
const { mongooseConfig } = require('../config')

const connection = (connectionString) => {
	if (!connectionString) {
		throw new Error('\nNeed to provide a connection string.')
	}

	mongoose
		.connect(connectionString)
		.then(() => console.log('Connected to MongoDB'))
		.catch((err) => console.error(err))
}

connection(mongooseConfig.connectionString)
