import express from 'express';
import bodyParser from 'body-parser';
import { config } from './config/config.js';
import { Request, Response } from 'express';
import { AppDataSource } from './config/data-source.js';
import { Routes } from './routes.js';
import { Audience } from './entity/Audience.js';
import Logging from './library/Logging.js';

AppDataSource.initialize()
    .then(async () => {
        // create express app
        const app = express();
        app.use(bodyParser.json());

        // register express routes from defined application routes
        Routes.forEach((route) => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = new (route.controller as any)()[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then((result) => (result !== null && result !== undefined ? res.send(result) : undefined));
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });

        // setup express app here
        // ...

        // start express server
        app.listen(config.server.port);

        /*
        // insert new users for test
        await AppDataSource.manager.save(
            AppDataSource.manager.create(Audience, {
                name: 'Timber',
                discord_id: 'Saw',
                inserted_at: new Date(),
            }),
        );
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )
*/
        //console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`));
        Logging.info(`Express server has started on port ${config.server.port}.\nOpen http://localhost:${config.server.port}/users to see results`);
    })
    .catch((error) => console.log(error));
