/* eslint-disable */
module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'nanatsunotaizai',
        user: process.env.DB_USER || 'meliodas',
        password: process.env.DB_PASS || 'meliodas',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './nanatsunotaizai.sqlite'
        }
    }
}