import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/post"
import { User } from "./entity/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "restapi",
    synchronize: true,
    logging: false,
    entities: [Post,User],
    migrations: [],
    subscribers: [],
})
