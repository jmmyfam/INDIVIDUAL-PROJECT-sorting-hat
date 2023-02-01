const students = [
  {
    name: 'Harry Potter',
    id: 1,
    house: 'Gryffindor',
    image: 'https://e1.pngegg.com/pngimages/542/343/png-clipart-harry-potter-gryffindor-logo-thumbnail.png'
  },
  {
    name: 'Ron Weasley',
    id: 2,
    house: 'Gryffindor',
    image: 'https://e1.pngegg.com/pngimages/542/343/png-clipart-harry-potter-gryffindor-logo-thumbnail.png'
  },
  {
    name: 'Hermione Granger',
    id: 3,
    house: 'Gryffindor',
    image: 'https://e1.pngegg.com/pngimages/542/343/png-clipart-harry-potter-gryffindor-logo-thumbnail.png'
  },
  {
    name: 'Cedric Diggory',
    id: 4,
    house: 'Hufflepuff',
    image: 'https://e7.pngegg.com/pngimages/537/516/png-clipart-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-thumbnail.png'
  },
  {
    name: 'Newton Scamander',
    id: 5,
    house: 'Hufflepuff',
    image: 'https://e7.pngegg.com/pngimages/537/516/png-clipart-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-thumbnail.png'
  },
  {
    name: 'Pamona Sprout',
    id: 6,
    house: 'Hufflepuff',
    image: 'https://e7.pngegg.com/pngimages/537/516/png-clipart-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-thumbnail.png'
  },
  {
    name: 'Cho Chang',
    id: 7,
    house: 'Ravenclaw',
    image: 'https://e7.pngegg.com/pngimages/61/949/png-clipart-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-thumbnail.png' 
  },
  {
    name: 'Luna Lovegood',
    id: 8,
    house: 'Ravenclaw',
    image: 'https://e7.pngegg.com/pngimages/61/949/png-clipart-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-thumbnail.png'
  },
  {
    name: 'Marcus Belby',
    id: 9,
    house: 'Ravenclaw',
    image: 'https://e7.pngegg.com/pngimages/61/949/png-clipart-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-thumbnail.png'
  },
  {
    name: 'Draco Malfoy',
    id: 10,
    house: 'Slytherin',
    image: 'https://e7.pngegg.com/pngimages/546/868/png-clipart-harry-potter-slytherin-logo-slytherin-house-hogwarts-harry-potter-gryffindor-ravenclaw-house-harry-potter-emblem-logo-thumbnail.png'
  },
  {
    name: 'Severus Snape',
    id: 11,
    house: 'Slytherin',
    image: 'https://e7.pngegg.com/pngimages/546/868/png-clipart-harry-potter-slytherin-logo-slytherin-house-hogwarts-harry-potter-gryffindor-ravenclaw-house-harry-potter-emblem-logo-thumbnail.png'
  },
  {
    name: 'Tom Riddle',
    id: 12,
    house: 'Slytherin',
    image: 'https://e7.pngegg.com/pngimages/546/868/png-clipart-harry-potter-slytherin-logo-slytherin-house-hogwarts-harry-potter-gryffindor-ravenclaw-house-harry-potter-emblem-logo-thumbnail.png'
  }

  
];




const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (array) => {
  let html = '';
  for (const stu of array) {
    html += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${stu.image}" class="img-fluid rounded-start" alt="...">
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


const sort = document.querySelector('#sort');
const form = document.querySelector('form');

sort.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {form.style.display = 'none'};

})


          
          