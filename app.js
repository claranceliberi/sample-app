'use strict'

import { createServer } from 'http'
import { createApp } from 'h3'

const app = createApp()
app.use('/', () => 'Hello world!')

createServer(app).listen({port:process.env.PORT || 3000},() => {
    console.log('server started')
})