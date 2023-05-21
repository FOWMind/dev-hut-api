const express = require('express')
const app = express()

const { technologyRoute } = require('./src/routes')

const { PORT = 3001 } = process.env.PORT || {}

app.use(express.json())

// Routes
app.use('/technology', technologyRoute)

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})

module.exports = app
