import express, { Application, NextFunction, Request, Response } from 'express'
import { join } from 'path'
import router from './router/apiRouter'
import globalErrorHandler from './middleware/globalErrorHandler'
import responseMessage from './constants/responseMessage'
import httpError from './utils/httpError'
import helmet from 'helmet'
import cors from 'cors'

const app: Application = express()

// MIDDLEWARE
app.use(helmet())
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: ['http://localhost:5173'],
        credentials: true
    })
)
app.use(express.json())
app.use(express.static(join(__dirname, '../', './public')))

// ROUTES
app.use('/api/v1', router)

// GLOBAL ERROR HANDLER
app.use((req: Request, _: Response, NextFn: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (error) {
        httpError(NextFn, error, req, 404)
    }
})

app.use(globalErrorHandler)

export default app
