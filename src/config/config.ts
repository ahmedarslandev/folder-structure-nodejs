import { config } from 'dotenv-flow'

config()

export default {
    // SERVER
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // DATABASE
    DATABASE_URL: process.env.DATABASE_URL,

    // APPLICATION
    JWT_TOKEN: process.env.JWT_TOKEN
}
