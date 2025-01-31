import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        // DATABASE_CONNECTION

        // eslint-disable-next-line no-console
        console.log('SERVER_STARTED', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL,
                MESSAGE: 'Server started successfully',
                TIME_STAMP: new Date().toISOString()
            }
        })

         
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('APPLICATION_ERROR', error)

        server.close((err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.error('SERVER_CLOSE_ERROR', err)
            }

            process.exit(1)
        })
    }
})()
