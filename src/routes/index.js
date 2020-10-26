const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    const data = {
        "name": "kolke"
    }
    res.json(data)
})

module.exports = router