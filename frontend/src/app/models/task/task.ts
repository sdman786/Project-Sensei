import { Quiz } from './quiz/quiz';
import { Lesson } from './lesson/lesson';
import { Activity } from './activity/activity';
import { Question } from './quiz/question';


export class Task {
    id: number;
    name: string;
    type: Quiz | Lesson | Activity;
    questions: Question[];
    completed: boolean;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.type = data.type;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
            this.completed = data.completed;
        }
    }
}
