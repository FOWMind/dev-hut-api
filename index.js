const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
require('./src/lib/mongoose')

const app = express()

const {
  technologyRoute,
  technologiesRoute,
  courseRoute,
  coursesRoute,
  lessonRoute,
  lessonsRoute,
} = require('./src/routes')

const { requestHandler, errorHandler } = require('./src/middleware')

const { PORT = 3001 } = process.env.PORT || {}

app.use(cors())
app.use(express.json())

// Routes
app.use('/technology', technologyRoute)
app.use('/technologies', technologiesRoute)
app.use('/course', courseRoute)
app.use('/courses', coursesRoute)
app.use('/lesson', lessonRoute)
app.use('/lessons', lessonsRoute)

// Middlewares
app.use(requestHandler)
app.use(errorHandler)


app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})

module.exports = app
