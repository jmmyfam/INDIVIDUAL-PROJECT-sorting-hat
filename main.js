let students = [
  {
    name: 'Harry Potter',
    id: 1,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Ron Weasley',
    id: 2,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Hermione Granger',
    id: 3,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Neville Longbottom',
    id: 4,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Seamus Finnigan',
    id: 5,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Remus Lupin',
    id: 6,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Cedric Diggory',
    id: 7,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Bridget Wenlock',
    id: 8,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Fat Friar',
    id: 9,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Silvanus Kettleburn',
    id: 10,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Newton Scamander',
    id: 11,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Pamona Sprout',
    id: 12,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Cho Chang',
    id: 13,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png' 
  },
  {
    name: 'Luna Lovegood',
    id: 14,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Marcus Belby',
    id: 15,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Filius Fitwick',
    id: 16,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Padma Patil',
    id: 17,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Uric the Oddball',
    id: 18,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Draco Malfoy',
    id: 19,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Severus Snape',
    id: 20,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Tom Riddle',
    id: 21,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Dolores Umbridge',
    id: 22,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },

  {
    name: 'Marcus Flint',
    id: 23,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },

  {
    name: 'Barnaby Lee',
    id: 24,
    house: 'Slytherin',
    image: './images/slytherin.png'
  }
];


const eStudents = [];

// hide/show form toggle function
let toggle = button => {
  let element = document.getElementById("form");
  let hidden = element.getAttribute("hidden");
  
  if (hidden) {
    element.removeAttribute("hidden");
    
  } else {
    element.setAttribute("hidden", "hidden");
    
  }
};


// utility function 
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// students cards on DOM function
const cardsOnDom = (array) => {
  let html = '';
  for (const stu of array) {
    html += `<div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${stu.image}" class="img-fluid rounded-start"  alt="..." style="background: transparent;" >
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${stu.name}</h5>
    <p class="card-text">${stu.house}</p>
    </div>
    </div>
    </div>
    <button id="expelButton--${stu.id}" class="btn btn-danger" style="font-family: 'Harry Potter', sans serif">Expelliarmus</button>
    </div>`;
    
    
  }
  
  renderToDom('#students', html);
  
  document.querySelector('#students').addEventListener('click', expelStudent);
  
};

const expelCardsOnDom = (array) => {
  let html = "";
  for (const ex of array) {
    html += `<div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="./images/death.png" class="img-fluid rounded-start"  alt="..." style="background: transparent;" >
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${ex.name}</h5>
    <p class="card-text">Formally ${ex.house}</p>
    </div>
    </div>
    </div>
    </div>`;
  }
  
  
  renderToDom("#expelled", html);
};


const expelStudent = (e) => {
  
  if (e.target.id.includes("expelButton")) {
    const [, studentId] = e.target.id.split('--');

    const studentIndex = students.findIndex(
      (stu) => Number(studentId) === stu.id 
      );
      
        const expelledStudent = students.splice(studentIndex, 1);
        
        eStudents.push(expelledStudent[0]);


        expelCardsOnDom(eStudents);
        cardsOnDom(students);
      }
    };




//function to filter students by house

const filter = (array, byHouse) => {
  const stuArray = [];
  
  for (const stu of array) {
    if (stu.house === byHouse) {
      stuArray.push(stu);
    }
  }
    return stuArray;
  };
  
  const showAll = document.querySelector('#viewAll');
  const showGryff = document.querySelector('#viewGryff');
  const showHuff = document.querySelector('#viewHuff');
  const showRave = document.querySelector('#viewRave');
  const showSlyth = document.querySelector('#viewSlyth');
  
  showAll.addEventListener('click', () => {
    cardsOnDom(students);
    
  });
  
  showGryff.addEventListener('click', () => {
    const gryffs = filter(students, 'Gryffindor');
    cardsOnDom(gryffs);
  });
  
  showHuff.addEventListener('click', () => {
    const huffs = filter(students, 'Hufflepuff');
    cardsOnDom(huffs);
  });
  
  showRave.addEventListener('click', () => {
    const raves = filter(students, 'Ravenclaw');
    cardsOnDom(raves);
  });
  
  showSlyth.addEventListener('click', () => {
    const slyths = filter(students, 'Slytherin');
    cardsOnDom(slyths);
  });          
  
  
  
  const assignHouse = () => {
    const studentName = document.getElementById('studentName').value;
    
    const randomIndex = Math.floor(Math.random() * students.length);
    
    const assignedHouse = students[randomIndex].house;
    
    document.getElementById('assignedHouse').innerHTML = `${studentName} has been assigned to ${assignedHouse}!`;
    
    
    const createCard = (e) => {
      e.preventDefault();


      
      
    }
    
    
    
    document.querySelector("form").reset();
    
    
    
  };
  
  document.getElementById('submit').addEventListener('click', assignHouse);
  
  
  
  
  
  
  
  // expelled student on DOM

  
  
    
    
    
    
    
    
    
    
    
    













// const startApp = () => {
//   cardsOnDom(students);
// };

// startApp();
