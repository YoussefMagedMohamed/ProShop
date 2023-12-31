import express from 'express'
import products from './data/products.js'

const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/products', (req, res) => res.json(products))
app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id) 
    res.json(product)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))