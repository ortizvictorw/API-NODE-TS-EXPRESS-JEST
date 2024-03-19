import http from 'node:http';
import dotenv from 'dotenv';
import { IServer } from '../../types';
import { IOptions } from '../interface';

dotenv.config({ path: '../' });

export class InitServer implements IServer {
    private readonly hostname: string;
    private readonly port: number;
    private readonly httpModule: typeof http;
    private server: http.Server | null = null;

    constructor({ hostname, port = 3000 }: IOptions) {
        this.port = port;
        this.hostname = hostname;
        this.httpModule = http;
    }

    running() {
        this.server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                data: 'Hello World!',
            }));
        });
        this.server.listen(this.port, this.hostname, () => {
            console.log(`Server running at http://${this.hostname}:${this.port}`);
        });
    }

    closed() {
        if (this.server) {
            this.server.close(() => {
                console.log(`Server closed`);
            });
        }
    }
}
