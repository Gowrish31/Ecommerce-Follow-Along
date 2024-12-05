const express = require('express')

const router  = express.Router()
router.get('./create-user','middleware','controller')
 module.exports = router;