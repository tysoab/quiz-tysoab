export const state = {
    candidates: [],
    questions: []
};

 state.candidates = [
  {
      fullname: 'taiwo yusuf',
      username: 'tysoab',
      password: '0073',
  },
  {
      fullname: 'ogunoye oluwatobi',
      username: 'olutee',
      password: '0024',
  },
  {
      fullname: 'abolarinwa tope',
      username: 'teephrase',
      password: '0127',
  },
  {
      fullname: 'oyenekan tobi',
      username: 'mic',
      password: '0002',
  },
  {
      fullname: 'yakub damilola',
      username: 'yd4u2c',
      password: '0032',
  },
  {
      fullname: 'anonymous',
      username: 'user',
      password: '1111',
  }
];

state.questions = [
  {
      question: '_____ is a software used for managing the database',
      options: {
          a: 'database management system',
          b: 'database',
          c: 'All of the Above'
      },
      answer: 'a'
  },
  {
      question: 'what does the acronym CPU stands for',
      options: {
          a: 'Center Processing Utility',
          b: 'Central processing unit',
          c: 'Central processing Usage'
      },
      answer: 'b'
  },
  {
      question: 'All of the following are parts of computer except _____',
      options: {
          a: 'Monitor',
          b: 'Mouse',
          c: 'None of the Above'
      },
      answer: 'c'
  },
  {
      question: '_____ is a repository for storing related data',
      options: {
          a: 'Database',
          b: 'dbms',
          c: 'Microsoft word'
      },
      answer: 'a'
  },
  {
      question: 'Computer is an electronic _____',
      options: {
          a: 'software',
          b: 'Device',
          c: 'Utility'
      },
      answer: 'b'
  },
  {
      question: 'What is the sum of 20 + 50',
      options: {
          a: 'suf X',
          b: '70',
          c: '520'
      },
      answer: 'b'
  },
  {
      question: 'Nigeria has _____ state',
      options: {
          a: '36',
          b: '26',
          c: '37'
      },
      answer: 'a'
  },
  {
      question: 'Who is the President of Nigeria _____',
      options: {
          a: 'Yaradua',
          b: 'Obi',
          c: 'Bola Tinubu'
      },
      answer: 'c'
  },
  {
      question: 'Sanwo olu is the governor of _____ state',
      options: {
          a: 'lagos',
          b: 'Ekiti',
          c: 'Osun'
      },
      answer: 'a'
  },
  {
      question: 'Do you love ur Country',
      options: {
          a: 'Yes',
          b: 'No',
          c: 'Not sure'
      },
      answer: 'c'
  }
  
];

export const deleteCandidate = function(userId){
    const deleteUser = state.candidates.findIndex(index => index.password === userId);
    const copy = state.candidates.slice();
    copy.splice(deleteUser, 1);
    state.candidates =  copy;
};
