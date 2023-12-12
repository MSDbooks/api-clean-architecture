import pgPromise from "pg-promise"
const db = pgPromise()({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: 'cromale',
});
export default db;