import { Router } from "express";

export interface IOptions {
    port?: number;
    hostname: string;
}

export interface IOptionsExpress extends IOptions {
    routes: Router
}
