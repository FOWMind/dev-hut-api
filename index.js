const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
require('./src/lib/mongoose')

const {
	technologyRoute,
	technologiesRoute,
	courseRoute,
	coursesRoute,
	lessonRoute,
	lessonsRoute,
	collaboratorsRoute,
} = require('./src/routes')

const { requestHandler, errorHandler } = require('./src/middleware')

const app = express()
app.use(cors())
app.use(express.json())

// Technology
app.use('/technology', technologyRoute)
app.use('/technologies', technologiesRoute)

// Course
app.use('/course', courseRoute)
app.use('/courses', coursesRoute)

// Lesson
app.use('/lesson', lessonRoute)
app.use('/lessons', lessonsRoute)

// Github
app.use('/collaborators', collaboratorsRoute)

// Middlewares
app.use(requestHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`)
})

module.exports = app
