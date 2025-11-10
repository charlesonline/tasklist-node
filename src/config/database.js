module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tasklist',
    username: 'postgres',
    password: 'postgres123',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};