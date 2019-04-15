import { Question } from '../question/question';

export class Lesson {
    id: number;
    name: string;
    title: string;
    description: string;
    content: string;
    questions: Question[];
    selectedLesson: Lesson;
    completed: boolean;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
            this.content = data.content;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
