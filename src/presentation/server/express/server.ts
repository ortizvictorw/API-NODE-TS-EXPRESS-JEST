import express, { Router } from 'express';
import dotenv from 'dotenv';
import { IOptionsExpress } from '../interface';
import { running } from '../../../types';

dotenv.config({ path: '../' });

export class InitServerExpress implements running {
    private readonly hostname: string;
    private readonly port: number;
    private readonly app = express();
    private readonly routes: Router;

    constructor({ hostname, port = 3001, routes }: IOptionsExpress) {
        this.port = port;
        this.hostname = hostname;
        this.routes = routes;
    }

    running() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(this.routes);
        this.app.listen(this.port, this.hostname, () => console.log(`Server running at http://${this.hostname}:${this.port}`));
    }
    

    getExpressApp() {
        return this.app;
    }
}
