import * as model from './model.js';
import userLogin from './View/userLogin.js';
import QuestionView from './View/questionView.js';
import Pagination from './View/pagination.js';
import SubmitView from './View/submitView.js';

const controlUserLogin = function(){
  userLogin.getUser(model.state.candidates);
  //userLogin.renderTimer();
}

const controlQuestions = function(){
  QuestionView.render(model.state.questions);
  Pagination.gotoSlide();
  Pagination.displayButtons();
};
const controlNextBtn = function(goto){
  Pagination.gotoSlide(goto);
  Pagination.updateCurrSlide(goto);
  Pagination.nextButton();
};
const controlPrevBtn = function(goto){
  Pagination.gotoSlide(goto);
  Pagination.updateCurrSlide(goto);
  Pagination.prevButton();
};

const controlButtons = function(goto){
  Pagination.gotoSlide(goto);
  Pagination.updateCurrSlide(goto);
  Pagination.addHandlerButton();
};


const controlSubmit = function(){
  SubmitView.render(model.state.questions);
};

const controlRemoveUser = function(id){
  model.deleteCandidate(id);
  console.log(model.state.candidates)
};


const init = function(){
QuestionView.addHandlerQuestions(controlQuestions);
userLogin.addHandlerrender(controlUserLogin);
Pagination.nextButton(controlNextBtn);
Pagination.prevButton(controlPrevBtn);
Pagination.addHandlerButton(controlButtons);
SubmitView.addHandlerSubmit(controlSubmit);
SubmitView.addHandlerExit(controlRemoveUser);
};
init();

if(module.hot){
  module.hot.accept();
}