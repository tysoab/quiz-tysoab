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
        question: 'What is the internet?',
        options: {
            a: 'Container that keeps a specific number of similar data types.',
            b: ' global network of a computer that offers a wide range of information and communication facility',
            c: 'World Wide Web'
        },
        answer: 'b'
    },
    {
        question: 'What is an array?',
        options: {
            a: 'Container that keeps a specific number of similar data types.',
            b: 'collection of abstract methods',
            c: 'Dbms'
        },
        answer: 'a'
    },
    {
        question: 'What is an Interface?',
        options: {
            a: 'Blueprint for creating objects',
            b: 'collection of abstract methods',
            c: 'A recored for file collection'
        },
        answer: 'b'
    },
  {
      question: 'List out some computer processors',
      options: {
          a: 'Intel core i9',
          b: 'AMD',
          c: 'All of the Above'
      },
      answer: 'c'
  },
  {
    question: 'Explain the meaning of file',
    options: {
        a: 'A file is a named location that stores information or data permanently',
        b: 'A repository for storing related data',
        c: 'A recored for file collection'
    },
    answer: 'a'
},
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
    if(deleteUser >= 0){
    state.candidates.splice(deleteUser, 1);
    }
};

