import { Question } from '../question/question';

export class Activity {
    id: number;
    name: string;
    title: string;
    description: string;
    type: string;
    content: string;
    questions: Question[];
    selectedActivity: Activity;
    completed: boolean;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
            this.type = data.type;
            this.content = data.content;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
