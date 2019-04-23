import { QuizConfig } from './quiz-config';
import { Question } from '../question/question';
import { Results } from '../../results';

export class Quiz {
    id: number;
    name: string;
    title: string;
    description: string;
    config: QuizConfig;
    questions: Question[];
    selectedTask: Quiz;
    completed: boolean;
    result: Results;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
            this.completed = false;
        }
    }
}
