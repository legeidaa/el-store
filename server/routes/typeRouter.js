const Router = require('express')
const router = new Router()
const typeController  = require('../controllers/typeController')

router.post('/', typeController.create)
router.get('/', typeController.getAll)

/* router.get = ('/', (req,res) => {
    res.json({message: 'router get'})
})
 */
module.exports = router