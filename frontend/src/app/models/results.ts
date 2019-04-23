export class Results {
    quiz_id: number;
    quiz_name: string;
    result: number;

    constructor(quiz_id: number, quiz_name: string, result: number) {
        this.quiz_id = quiz_id;
        this.quiz_name = quiz_name;
        this.result = result;
    }
}
