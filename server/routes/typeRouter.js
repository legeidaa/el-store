const Router = require('express')
const router = new Router()
const typeController  = require('../controllers/typeController')
const { check } = require('../controllers/userController')
const checkRole  = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

/* router.get = ('/', (req,res) => {
    res.json({message: 'router get'})
})
 */
module.exports = router