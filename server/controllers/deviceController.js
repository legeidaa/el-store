const uuid = require('uuid')
const path = require('path')

const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')


class DeviceController {
    async create(req, res, next) {
        try {
            const{name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) // mv функция из express-fiileupload
    
            const device = Device.create({name, price, brandId, typeId, img: fileName  })
    
            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const devices = await Device.findAll()
        return res.json(devices)
    }
 
    async getOne(req, res) {

    }
}

module.exports = new DeviceController()