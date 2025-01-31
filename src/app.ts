import express, { Application } from 'express'
import { join } from 'path'
import router from './router/apiRouter'

const app: Application = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.static(join(__dirname, '../', './public')))

// ROUTES
app.use('/api/v1', router)

export default app
