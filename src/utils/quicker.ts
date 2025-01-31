import os from 'os'
import config from '../config/config'

export default {
    getSystemDetails: () => {
        return {
            cpuUsage: os.loadavg(),
            totalmemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
        }
    },

    getApplicationDetails: () => {
        return {
            environment: config.ENV,
            uptime: `${process.uptime().toFixed(2)} Seconds`,
            memoryUsage: {
                heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                external: `${(process.memoryUsage().external / 1024 / 1024).toFixed(2)} MB`
            }
        }
    }
}
