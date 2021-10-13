'use strict'

import { createServer } from 'http'
import { createApp } from 'h3'

const app = createApp()

app.use('/req', (req) => ({...req.url}))

app.use('/', () => '<h1>Hello world!</h1>')



createServer(app).listen({port:process.env.PORT || 3000},() => {
    console.log('server started')
})