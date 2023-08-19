import * as model from '../model.js';

const candidateContainer = document.querySelector('.candidate-info');

const logoutUser = function(){
  const userID = candidateContainer.querySelector('.user-id').textContent;
  model.deleteCandidate(userID);
  //window.location.reload();
};

export { logoutUser };