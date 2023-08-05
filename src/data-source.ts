import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host:"db.axyjrtjnheepvdfmprvt.supabase.co",
    port:5432,
    username:"postgres",
    password: "7Uu5wHkjz5lS5kvO",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
