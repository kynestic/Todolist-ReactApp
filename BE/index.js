const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


app.get('/', (req, res) => {
    res.status(200).end()
})

const PORT = 3001
app.listen(PORT, () => {console.log(`Server is running on PORT ${PORT}`);})