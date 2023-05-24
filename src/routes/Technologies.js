const express = require('express')

const router = express.Router()

router.get('/', (req, res, nex) => {
  res.send([{ id: 0, name: 'html', description: 'HTML is a markup language' }])
})

module.exports = router
