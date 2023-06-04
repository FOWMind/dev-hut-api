const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
require('./src/lib/mongoose')

const app = express()

const { technologyRoute, technologiesRoute, courseRoute, coursesRoute, lessonRoute } = require('./src/routes')
const { requestHandler, errorHandler } = require('./src/middleware')

const { PORT = 3001 } = process.env.PORT || {}

app.use(express.json())

// Routes
app.use('/technology', technologyRoute)
app.use('/technologies', technologiesRoute)
app.use('/course', courseRoute)
app.use('/courses', coursesRoute)
app.use('/lesson', lessonRoute)

// Middlewares
app.use(requestHandler)
app.use(errorHandler)


app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})

module.exports = app
