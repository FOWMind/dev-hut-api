const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
require('./src/lib/mongoose')

const app = express()

const { technologyRoute, technologiesRoute } = require('./src/routes')

const { PORT = 3001 } = process.env.PORT || {}

app.use(express.json())

// Routes
app.use('/technology', technologyRoute)
app.use('/technologies', technologiesRoute)

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})

module.exports = app
