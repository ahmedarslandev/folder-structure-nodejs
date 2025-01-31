import { Request } from 'express'
import { THttpError } from '../types/types'
import responseMessage from '../constants/responseMessage'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'
import logger from './logger'


// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (error: Error | unknown, req: Request, errorStatusCode: number = 500) => {
    const errorObj: THttpError = {
        success: false,
        status: errorStatusCode,
        message: error instanceof Error ? error.message : responseMessage.ERROR,
        trace: error instanceof Error ? { error: error.stack } : null,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        }
    }

     // LOG

     logger.info('CONTROLLER_ERROR', { meta: errorObj })

    // Production ENV check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj
}
