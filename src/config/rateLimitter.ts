import { Connection } from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'
import config from './config'

export let rateLimitterMongo: RateLimiterMongo | null = null

export const initRateLimitter = (mongooseConnection: Connection) => {
    rateLimitterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: parseInt(config.POINTS_PER_SECOND as string),
        duration: parseInt(config.DURATION as string)
    })
}
