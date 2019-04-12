import { Component, OnInit, Inject } from '@angular/core';
import { Quiz, QuizConfig, Question, Option } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { timeout } from 'rxjs/operators';
import { Timeouts } from 'selenium-webdriver';
import { tick } from '@angular/core/testing';

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
     allowBack: true,
     allowReview: true,
     autoMove: true,  // if true, it will move to next question automatically when answered.
     duration: 10,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
     pageSize: 1,
     requiredAll: true,  // indicates if you must answer all the questions before submitting.
     richText: false,
     shuffleQuestions: false,
     shuffleOptions: false,
     showClock: false,
     showPager: true,
     theme: 'none'
   };

   questionsAnswered = 0;
   correctAnswers = 0;

   pager = {
     index: 0,
     size: 1,
     count: 1
   };

   timer: any = null;
   startTime: Date;
   endTime: Date;
   ellapsedTime = '00:00';
   duration = '';

  constructor( public dialogRef: MatDialogRef<QuizComponent>, @Inject(MAT_DIALOG_DATA) public data: Quiz) {
    this.quiz$ = new Quiz(this.data);
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
    if(this.mode === 'quiz') {
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
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) { x.selected = false; } });
    }

    if (this.config.autoMove) {
      setTimeout(() => {
        this.goTo(this.pager.index + 1);
      }, 500);
    }
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

  // allQuestionsAnswered() {
  //   this.quiz$.questions.forEach(x => {
  //     x.answered ? this.questionsAnswered++ : null;
  //   });

  //   return this.questionsAnswered === this.quiz$.questions.length ? true : false;
  // }

  onSubmit() {
    const result = [];
    this.quiz$.questions.forEach(x => {
      result.push({ quizId: this.quiz$.id,
                        questionId: x.id,
                        answered: this.isAnswered(x),
                        correctAnswers: this.isCorrect(x) ? this.correctAnswers += 1 : null
                      });
    });

    // Post your data to the server here. answers contains the questionId and the users' answer.
    // console.log(this.quiz$.questions);
    console.log('Quiz Results: ', result);
    this.mode = 'result';
  }
}
