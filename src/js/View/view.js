export default class View{
  _questions;
  _candidates;
  _curSlide = 0;
  _score = 0;
  _currentAccount;
  
  getUser(data){
    if(!data) return;
    this._candidates = data;
  }

  render(data){
    if(!data) return;
    this._questions = data;
    const markUp = this._generateMarkup();
    if(!markUp) return;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  updateCurrSlide(data){
    this._curSlide = data;
    if(!data) return;
  }

  _clear(){
    this._parentElement.innerHTML = '';
  }

  hideShowFormToggle(){
    document.querySelector('.form-overlay').classList.toggle('hidden');
    document.querySelector('.container--login').classList.toggle('hidden');
  }
}