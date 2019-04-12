export class QuizConfig {
    autoMove: boolean;  // if boolean; it will move to next question automatically when answered.
    duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    requiredAll: boolean;  // indicates if you must answer all the questions before submitting.
    shuffleQuestions: boolean;

    constructor(data: any) {
        data = data || {};
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.requiredAll = data.requiredAll;
        this.shuffleQuestions = data.shuffleQuestions;
    }
}
