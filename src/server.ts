import app from './app'
import config from './config/config'
import logger from './utils/logger'

const server = app.listen(config.PORT)

;(() => {
    try {
        // DATABASE_CONNECTION

        logger.info('SERVER_STARTED', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL,
                MESSAGE: 'Server started successfully',
                TIME_STAMP: new Date().toISOString()
            }
        })
    } catch (error) {
        logger.error('APPLICATION_ERROR', error)

        server.close((err) => {
            if (err) {
                logger.error('SERVER_CLOSE_ERROR', err)
            }

            process.exit(1)
        })
    }
})()
