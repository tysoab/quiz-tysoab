import View from "./view.js";

class UserLogin extends View{
  _parentElement = document.querySelector('.form-group');
  _userProfileElement = document.querySelector('.candidate-info');
  _minutes = 5;
  _seconds = 60;
  _countdownContainer = document.querySelector('.stopwatch');

  addHandlerrender(handler){
    this._parentElement.addEventListener('submit', this._formValidate.bind(this));
    handler();
  }

  _formValidate(e){
    e.preventDefault();
    const [username, password] = this._parentElement.querySelectorAll('input');
    if(username.value === '' || password.value === '') alert('All Fields is Required');
    this._currentAccount = this._candidates
    .find(account => account.username === username.value &&
      account.password === password.value);
      if(!this._currentAccount) return;
      
      this._userProfileElement.innerHTML = `Welcome, ${this._currentAccount.fullname.toLowerCase().split(' ').map(name => name.replace(name.at(0),name.at(0).toUpperCase())).join(' ')} 
      <div type="text" class="user-id hidden">${this._currentAccount.password}</div>`;
      this._hideShowForm();
  }

  _hideShowForm(){
    document.querySelector('.form-overlay').classList.toggle('hidden');
    document.querySelector('.container--login').classList.toggle('hidden');
  }

  _render(){
    this._countdownContainer.querySelector('.minute-el').textContent = this._minutes;
    this._countdownContainer.querySelector('.seonds-el').textContent = this._seconds;
  }

}

export default new UserLogin();