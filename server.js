const express = require('express')
const app = express()
const books = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
  })

app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
  })

app.get('/', (req, res) => {
  res.send('HI Wanatip')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})