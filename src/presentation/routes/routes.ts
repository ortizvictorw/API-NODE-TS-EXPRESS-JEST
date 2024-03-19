import { Router } from "express"
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {

    static get routes() {
        const routes = Router()
        routes.use('/api/auth/', AuthRoutes.routes)
        return routes;
    }

}