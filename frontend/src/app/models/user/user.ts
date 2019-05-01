import { Upload } from '../upload';
import { Results } from '../results';

export class User {
    name: string;
    email: string;
    username: string;
    password: string;
    session?: string;
    task?: string;
    upload: Upload[];
    results: Results[];
}
