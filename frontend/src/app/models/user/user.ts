import { Session } from '../session/session';

export class User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    sessionOne: Session;
    sessionTwo: Session;
    sessionThree: Session;
    exp: number;
    iat: number;
}
