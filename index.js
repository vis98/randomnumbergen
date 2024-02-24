const express = require('express')
const app = express()
const {getRandomNumberBetween1And50}=require('./utils')
const port = 3000

app.get('/random', (req, res) => {
    let number=getRandomNumberBetween1And50()
  res.send('number generated is '+ number)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})