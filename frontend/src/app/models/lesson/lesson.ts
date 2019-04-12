
export class Lesson {
    id: number;
    name: string;
    description: string;
    // config: QuizConfig;
    // questions: Question[];
    completed: boolean;
    // correctAnswers: number;

    constructor(data: any) {
        // data = data.res[0];
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            // this.config = new QuizConfig(data.config);
            // this.questions = [];
            // data.questions.forEach(q => {
            //     this.questions.push(new Question(q));
            // });
            this.completed = false;
            // this.correctAnswers = 0;
        }
    }
}