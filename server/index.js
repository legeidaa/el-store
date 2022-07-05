require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models//models')
const cors = require('cors')
const fileupload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000 //загуглить
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
/* app.use('/api', (req,res) => {
    res.json({message: 'asdasd'})
}) */
app.use('/api', router)


app.use(errorHandler) //мидлвер с ошибками должен быть в самом конце

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'it works'})
// })

const start = async () => {
    try {
        await sequelize.authenticate() //подключается к бд
        await sequelize.sync({alter: true}) //сверяет состояние бд со схемой бд, alter позовляет добавлять колонки при инициализации таблицы

        app.listen(PORT, () => {
            console.log(`Started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start()