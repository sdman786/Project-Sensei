import { Component, OnInit, Inject } from '@angular/core';
import { Quiz, QuizConfig, Question, Option } from 'src/app/models/session/quiz';
import { Results } from 'src/app/models/results';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { timeout } from 'rxjs/operators';
import { Timeouts } from 'selenium-webdriver';
import { tick } from '@angular/core/testing';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

   quiz$: Quiz;
   mode = 'quiz';
   quizName: string;

   config: QuizConfig = {
     autoMove: false,  // if true, it will move to next question automatically when answered.
     duration: 100,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
     requiredAll: true,  // indicates if you must answer all the questions before submitting.
     shuffleQuestions: true
   };

   timer: any = null;
   startTime: Date;
   endTime: Date;
   ellapsedTime = '00:00';
   duration = '';

   pager = {
     index: 0,
     size: 1,
     count: 1
   };

   questionsAnswered = 0;
   correctAnswers = 0;
   quizResult = 0;

  constructor( public dialogRef: MatDialogRef<QuizComponent>, @Inject(MAT_DIALOG_DATA) public data: Quiz,
               private userService: UserService) {
    this.quiz$ = this.data.selectedTask as Quiz;
    this.quizName = this.quiz$.name;
    this.pager.count = this.quiz$.questions.length;
    this.startTime = new Date();
    this.timer = setInterval(() => { this.tick(); }, 1000);
    this.duration = this.parseTime(this.config.duration);
    this.mode = 'quiz';
   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  tick() {
    if (this.mode === 'quiz') {
      const now = new Date();
      const diff = (now.getTime() - this.startTime.getTime()) / 1000;
      if (Math.round(diff) === (this.config.duration)) {
        this.onSubmit();
      }
      this.ellapsedTime = this.parseTime(diff);
  }
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz$.questions) ?
      this.quiz$.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    question.options.forEach((x) => {
      if (x.id !== option.id) { x.selected = false; }
    });
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? true : false;
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? true : false;
  }

  onSubmit() {
    this.mode = 'result';
    const result = [];
    this.quiz$.questions.forEach(x => {
      result.push({ quizId: this.quiz$.id,
                        questionId: x.id,
                        answered: this.isAnswered(x),
                        correctAnswers: this.isCorrect(x) ? this.correctAnswers += 1 : null
                      });
    });

    // QUIZ RESULT AS A PERCENTAGE
    this.updateQuizData();
    console.log(this.quiz$.completed);
  }

  completed(): boolean {
    return this.quiz$.completed;
  }

  private updateQuizData() {
    this.quiz$.result = new Results(this.quiz$.id, this.quiz$.name, this.correctAnswers * 10);
    if (this.quiz$.result.result >= 80) {
      this.quiz$.completed = true;
    }
  }

  exitQuiz() {
    this.quiz$.completed = false;
    this.dialogRef.close();
  }
}
