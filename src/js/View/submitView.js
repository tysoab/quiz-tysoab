import View from "./view.js";

class SubmitView extends View{
  _parentElement = document.querySelector('.btn-submit-container');
  _userId = document.querySelector('.candidate-info');
  _removeUserId;
  container;
  overlay;

  addHandlerSubmit(handler){
    this._parentElement.addEventListener('click', this._submit.bind(this))
    handler();
  }

/**
 * 
 * @param {e} select the submit button
 * questionConatiner select the parent element that wrap thhe question
 * qetQuestion select all slide in the container then loop through it
 * question select the radio button group name = {i}
 * then check for checked and compare the answers
 * @returns total score
 */
  _submit(e){
    const submitBtn = e.target.closest('.submit');
    if(!submitBtn) return;
    const questionConatiner = document.querySelector('.main-container')
    const getQuestions = questionConatiner.querySelectorAll('.slide');
    getQuestions.forEach((question, i) => {
      const btnRadio = question.querySelectorAll(`input[name="${i}"]`)
      btnRadio.forEach(btn => {
          if(btn.checked){
              const qNo = btn.name;
              if(btn.value.toLowerCase() === this._questions[qNo].answer) this._score += 1;
          }
      })
    })
    this._removeUserId = this._userId.querySelector('.user-id').textContent;
    this._confirmSubmit();
  }

  _confirmSubmit(){
    this.container = document.querySelector('.confirm-submit-container');
    this.overlay = document.querySelector('.overlay-warning');
    this._hideshowModal();
    const markUp = `
      <h3>Thanks for ur Time...</h3>
      <p>Score: <span>${this._score}</span></p>
      <button id="exit-btn">Continue</button>
     `;
    this.container.innerHTML = '';
    this.container.insertAdjacentHTML('afterbegin', markUp);
    this.addHandlerExit();
  }

  addHandlerExit(){
    const btnExit = document.querySelector('#exit-btn');
    btnExit.addEventListener('click', ()=>{
      this._hideshowModal();
      console.log(this.container.querySelector('#exit-btn'))
    });
  };
  
  _hideshowModal(){
      this.container.classList.toggle('hidden');
      this.overlay.classList.toggle('hidden');
    }
  


};

export default new SubmitView();