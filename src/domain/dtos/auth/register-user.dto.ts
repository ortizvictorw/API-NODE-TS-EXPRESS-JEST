import { Validator } from "../../../config/validator";

export class RegisterUser {
    constructor(
        public email: string,
        public password: string,
    ) {}

    static create(object: { email: string, password: string }): [string?, RegisterUser?] {

        const { email, password } = object;
        if (!Validator.email.test(email)) return ['email is invalid']

        return [
            undefined,
            new RegisterUser(email, password)
        ]
    }

} 