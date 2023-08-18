import View from "./view";

class RemoveUser extends View{
  _parentElement = document.querySelector('.candidate-info');

addHandlerRemove(handler){
  this._parentElement.addEventListener('click', function(){
    console.log(_parentElement);
    handler();
  })
}
}
export default new RemoveUser();