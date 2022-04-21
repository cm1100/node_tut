const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      "name":"cm100",
      "gmail":"cm@gmail.com"
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
