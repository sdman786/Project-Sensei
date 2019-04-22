import { Upload } from '../session/upload';

export class User {
    _id: string;
    name?: string;
    email?: string;
    username: string;
    password: string;
    exp?: number;
    session?: string;
    task?: string;
    upload: Upload;
}
