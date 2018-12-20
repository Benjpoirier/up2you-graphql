module.exports = {
    development: {
        database: 'up2you_dev',
        dialect: 'postgres',
        host: '127.0.0.1',
        password: null,
        operatorsAliases: false,
        port: 5432,
        username: 'postgres',
        /* eslint-disable no-console */
        logging: process.env.DATABASE_LOGGING === 'true' && console.log,
    },
};
