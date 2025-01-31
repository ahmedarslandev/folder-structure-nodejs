import { NextFunction, Request, Response } from 'express'
import httpResponse from '../utils/httpResponse'
import responseMessage from '../constants/responseMessage'
import httpError from '../utils/httpError'
import quicker from '../utils/quicker'

export default {
    self: (req: Request, res: Response, NextFn: NextFunction) => {
        try {
            // throw new Error('this is error')
             httpResponse(req, res, 200, responseMessage.SUCCESS, { imageUrl: 'http://localhost:8080/images' })
        } catch (error) {
             httpError(NextFn, error, req, 500)
        }
    },

    health: (req: Request, res: Response, NextFn: NextFunction) => {
        try {
            const systemHealth = quicker.getSystemDetails()
            const applicationHealth = quicker.getApplicationDetails()

             httpResponse(req, res, 200, responseMessage.SUCCESS, { systemHealth, applicationHealth })
        } catch (error) {
             httpError(NextFn, error, req, 500)
        }
    }
}
