import { Quiz } from './quiz/quiz';
import { Lesson } from './lesson/lesson';
import { Activity } from './activity/activity';
import { SessionStructure } from './session-structure';


export class Session {
    id: number;
    name: string;
    structure: SessionStructure;
    quiz: Quiz[];
    lesson: Lesson[];
    activity: Activity[];
    completed: boolean;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.structure = data.structure;
            if (data.quiz) {
                this.quiz = [];
                data.quiz.forEach(q => {
                    this.quiz.push(new Quiz(q));
                });
            }
            if (data.lesson) {
                this.lesson = [];
                data.lesson.forEach(l => {
                    this.lesson.push(new Lesson(l));
                });
            }
            if (data.activity) {
                this.activity = [];
                data.activity.forEach(a => {
                    this.activity.push(new Activity(a));
                });
            }
        }
    }
}
