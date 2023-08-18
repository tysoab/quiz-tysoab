import View from "./view.js";

class QuestionView extends View{
  _parentElement = document.querySelector('.main-container');

  addHandlerQuestions(handler){
    //load once
    window.addEventListener('load', handler);
    //available throughout the session
    //handler();
  };

  _generateMarkup(){
    const markUp = this._questions.map((exam,index) => `
    <div class="wrap-question slide">
    <div class="question-container">
    <h2>${index + 1}.</h2>
    <h2 class="question">${exam.question}</h2>
    </div>
    <div class="">
    <p><input type="radio" name="${index}" value="A"> A: ${exam.options.a}</p>
    <p><input type="radio" name="${index}" value="B"> B: ${exam.options.b}</p>
    <p><input type="radio" name="${index}" value="C"> C: ${exam.options.c}</p>
    </div>
    </div>
    `).join('');
    return markUp;
}
}

export default new QuestionView();