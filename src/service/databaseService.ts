import mongoose from 'mongoose'
import config from '../config/config'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL as string, {
                dbName: 'nodejs-production-setup',
            })
            return mongoose.connection
        } catch (error) {
            throw error
        }
    }
}
