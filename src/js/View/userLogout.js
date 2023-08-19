import * as model from '../model.js';
import Pagination from './pagination.js';

const candidateContainer = document.querySelector('.candidate-info');

const clearForm = function(){
  const questionConatiner = document.querySelector('.main-container')
    const getQuestions = questionConatiner.querySelectorAll('.slide');
    getQuestions.forEach((question, i) => {
      const btnRadio = question.querySelectorAll(`input[name="${i}"]`)
      btnRadio.forEach(btn => {
          if(btn.checked){
            btn.checked = false;
          }
      })
    });
}

const logoutUser = function(){
  const userID = candidateContainer.querySelector('.user-id').textContent;
  model.deleteCandidate(userID);
  Pagination.gotoSlide(0);
  Pagination.updateCurrSlide(0)
  Pagination._activeButton(0);
  Pagination._preNxtBtnContainer.querySelector('.nextslide').disabled = false;
  clearForm();
  Pagination.hideShowFormToggle();
};

export { logoutUser };