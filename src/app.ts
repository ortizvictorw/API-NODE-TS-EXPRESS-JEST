import { AppRoutes } from "./presentation/routes/routes"
import { InitServerExpress } from "./presentation/server/express/server"
import { InitServer } from "./presentation/server/httpModule/server"

const main = async () => {
    new InitServer({hostname: process.env.HOST_NAME}).running()
    new InitServerExpress({hostname: process.env.HOST_NAME, routes: AppRoutes.routes}).running()
}

(async () => await main())()
