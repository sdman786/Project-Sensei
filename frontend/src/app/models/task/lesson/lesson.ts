import { Question } from '../question/question';

export class Lesson {
    id: number;
    name: string;
    description: string;
    content: string;
    questions: Question[];

    constructor(data: any) {
        data = data.res[0];
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.content = data.content;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
