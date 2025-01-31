import env from '#start/env'
import { defineConfig } from '@arthurfranckpat/adonis-prisma'

const prismaConfig = defineConfig({
    connection : 'postgres',
    connections : {
        postgres : {
            host: env.get('DB_HOST'),
            port: env.get('DB_PORT'),
            database: env.get('DB_DATABASE'),
            user: env.get('DB_USER'),
            password: env.get('DB_PASSWORD')
        }
    },
    auth : {
        uids: ['email'],
        passwordColumnName: 'password',
        sanitizePassword: true,
    }
 
})

export default prismaConfig