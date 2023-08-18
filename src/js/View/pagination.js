import View from "./view.js";

class Pagination extends View{
_slides;
_maxSlide;
_preNxtBtnContainer = document.querySelector('.prenext-container');
_displayBtnsContainer = document.querySelector('.btns-container');

gotoSlide(slide = 0){
  this._slides = (document.querySelectorAll('.slide'));
  this._maxSlide = this._slides.length;
  this._slides.forEach((s, i) =>{
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
});

this._preNxtBtnContainer.querySelector('.preslide').disabled = true;
}

nextButton(goto){
  this._preNxtBtnContainer.addEventListener('click', (e)=>{
    const btn = e.target.closest('.nextslide');
    if(!btn) return;
    if(this._curSlide >= this._maxSlide - 1) return btn.disabled = true;
    goto(this._curSlide + 1);
    btn.disabled = false;
    this._preNxtBtnContainer.querySelector('.preslide').disabled = false;
    this._activeButton(this._curSlide);
  })
}
prevButton(goto){
  
  this._preNxtBtnContainer.addEventListener('click', (e)=>{
    const btn = e.target.closest('.preslide');
    btn.disabled = false;
    if(!btn) return;
    if(this._curSlide <= 0) return btn.disabled = true;
    goto(this._curSlide - 1);
    btn.disabled = false;
    this._preNxtBtnContainer.querySelector('.nextslide').disabled = false;
    this._activeButton(this._curSlide);
  })
}
addHandlerButton(handler){
  this._displayBtnsContainer.addEventListener('click', (e)=>{
    const btn = e.target.closest('.opr-btn');
    if(!btn) return;
      const { goto } = btn.dataset;
      handler(+goto);
      this._preNxtBtnContainer.querySelectorAll('.slide-btn').forEach(btn => btn.disabled = false);
      this._activeButton(goto);
      //disable button
      if(this._curSlide <= 0) return this._preNxtBtnContainer.querySelector('.preslide').disabled = true;
      if(this._curSlide >= this._maxSlide - 1) return this._preNxtBtnContainer.querySelector('.nextslide').disabled = true;
  })
}
  
  displayButtons(){
    this._slides.forEach((_, i) => {
      this._displayBtnsContainer.insertAdjacentHTML('beforeend', `<button class="opr-btn" data-goto="${i}">${i + 1}</button>`);
  });
  this._displayBtnsContainer.querySelectorAll('.opr-btn')[0].classList.add('active-opr-btn');
  }

  _activeButton(btn){
    document.querySelectorAll('.opr-btn').forEach(btn => 
      btn.classList.remove('active-opr-btn')
      );
    document.querySelector(`.opr-btn[data-goto="${btn}"]`).classList.add('active-opr-btn');
  }

};

export default new Pagination();