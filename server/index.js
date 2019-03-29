const express = require('express')
require('dotenv').config()

const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const CTLR = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then((db)=> {
    app.set('db', db)
    console.log('DB set')
    console.log(db.listTables())
    })
    .catch(err => console.log(err))

    app.get('/api/inventory', CTLR.getAll)
    app.post('/api/product', CTLR.create)
    app.put('/api/product/:id', CTLR.update)
    app.delete('/api/product/:id', CTLR.delete)
    




app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))