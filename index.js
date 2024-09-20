const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const videoRoute = require('./routes/video')


dotenv.config()

// console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('DB Connection successful'))
.catch((err) => {
    console.log(err)
})

const port = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/api/video', videoRoute)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})