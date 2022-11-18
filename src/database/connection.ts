import { DataSource } from "typeorm";

const connection = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    "./entities/*.ts"
  ],
  migrations: [
    "./migrations/*.ts"
  ],
  synchronize: true,
});

export { connection };