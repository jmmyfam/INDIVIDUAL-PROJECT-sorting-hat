const students = [
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
    name: 'Cedric Diggory',
    id: 4,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Newton Scamander',
    id: 5,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Pamona Sprout',
    id: 6,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Cho Chang',
    id: 7,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png' 
  },
  {
    name: 'Luna Lovegood',
    id: 8,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Marcus Belby',
    id: 9,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Draco Malfoy',
    id: 10,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Severus Snape',
    id: 11,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Tom Riddle',
    id: 12,
    house: 'Slytherin',
    image: './images/slytherin.png'
  }

  
];




const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

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
          <h5 class="card-title">${stu.name}</h5>
          <p class="card-text">${stu.house}</p>
          </div>
        </div>
      </div>
    </div>`;

    
    }

    renderToDom('#students', html);

  };

  cardsOnDom(students);


// const sort = document.querySelector('#sort');
// const form = document.querySelector('form');

// sort.addEventListener('click', () => {
//   if (form.style.display === 'none') {
//     form.style.display = 'block';
//   } else {form.style.display = 'none'};

// })

let toggle = button => {
  let element = document.getElementById("form");
  let hidden = element.getAttribute("hidden");

  if (hidden) {
     element.removeAttribute("hidden");
     
  } else {
     element.setAttribute("hidden", "hidden");
     
  }
}

          
          