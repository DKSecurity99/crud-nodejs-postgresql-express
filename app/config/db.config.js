module.exports = {
    HOST: 'localhost',
    USER: 'dksecurity',
    PASSWORD: 'dk',
    DB: 'testedb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

