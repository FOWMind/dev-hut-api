const mongooseConfig = {
	username: process.env.MONGODB_USERNAME,
	password: process.env.MONGODB_PASSWORD,
	clusterUrl: process.env.MONGODB_CLUSTER_URL,
	params: 'retryWrites=true&w=majority',
	get connectionString() {
		return `mongodb+srv://${this.username}:${this.password}@${this.clusterUrl}.mongodb.net/?${this.params}`
	},
}

module.exports = { mongooseConfig }
