import { Quiz } from './quiz/quiz';
import { Lesson } from './lesson/lesson';
import { Activity } from './activity/activity';


export class Session {
    id: number;
    name: string;
    quiz: Quiz;
    lesson: Lesson;
    activity: Activity;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            if (data.quiz) { this.quiz = new Quiz(data.quiz); }
            if (data.lesson) { this.lesson = new Lesson(data.lesson); }
            if (data.activity) { this.activity = new Activity(data.activity); }
        }
    }
}
