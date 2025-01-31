import { NextFunction, Request } from 'express'
import errorObjects from './errorObjects'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (NextFn: NextFunction, err: Error | unknown, req: Request, errorStatusCode: number = 500) => {
    const errorObj = errorObjects(err, req, errorStatusCode)

    return NextFn(errorObj)
}
