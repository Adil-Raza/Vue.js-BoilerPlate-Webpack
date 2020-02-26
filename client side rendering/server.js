const express = require('express')
const app = express()
const fs = require('fs') // used to read file content
const path = require('path') // used to get relative path

const port = process.env.PORT || 3000

// path.resolve(__dirname, "./index.html") : this is used to return relative path from server.js
const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(app)

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})

app.listen(port, () => {
  console.log(`server started at http"//localhost:${port}`)
})
