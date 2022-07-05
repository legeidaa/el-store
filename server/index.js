require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const moedels = require('./models//models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000 //загуглить
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.use(errorHandler) //мидлвер с ошибками должен быть в самом конце

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'it works'})
// })

const start = async () => {
    try {
        await sequelize.authenticate() //подключается к бд
        await sequelize.sync() //сверяет состояние бд со схемой бд

        app.listen(PORT, () => {
            console.log(`Started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start()