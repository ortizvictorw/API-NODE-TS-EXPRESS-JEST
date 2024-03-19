import { Router } from "express";

export class AuthRoutes {
    static get routes() {
        const routes = Router()
        routes.post('/login', (req, res) => console.log(res.json('Login')))
        routes.post('/register', (req, res) => console.log(res.json('Register')))
        return routes;
    }


}