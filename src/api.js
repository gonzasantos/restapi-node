const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env'})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./routes/index'))
app.use('/api/countries', require('./routes/countries'))
app.use('/api/users', require('./routes/users'))

app.set('json spaces', 2)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server on port ${3000}')
});