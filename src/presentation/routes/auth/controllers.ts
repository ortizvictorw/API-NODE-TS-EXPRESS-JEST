import { Request, Response } from "express";
import { RegisterUser } from "../../../domain/dtos/auth/register-user.dto";

export class AuthController {
    constructor() { }

    login = (req: Request, res: Response)=> {
        console.log(req.body)

        res.json('login controller')
    }

    register = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUser.create(req.body)
        if (error) return res.status(400).json({ error })
        return res.json(req.body);
    }
}