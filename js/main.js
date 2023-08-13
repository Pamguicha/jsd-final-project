
console.log('hello dogs', axios);

const apiKey = 'J0GvRGzkHEE/3HmmtvTKJA==pXp4BWMraSlgHrMp';
const formSearch = document.querySelector("#searchForm");
const resultsParent = document.querySelector('#resultsPage');


const searchDog = (event) => {
  event.preventDefault();

const dogName = document.querySelector("#dogQuery").value;

axios.get('https://api.api-ninjas.com/v1/dogs', {
  params: {
    name: `${dogName}`
    },
  headers: {
    'X-Api-Key': `${apiKey}`
    }
  })
.then(res => {
  resultsParent.innerHTML = '';
  renderSearchResult(res.data[0]);
  console.log(res.data[0]);
  })
.catch(err => {
  console.log('Error loading search results', err);
  });

};

const valueLevelToString = (level) => {
  switch (level) {
    case 1:
     return "Low level";
     break;
    case 2:
     return "Low-medium level";
     break;
    case 3:
     return "Medium level";
     break;
    case 4:
     return "Medium-high";
     break;
    case 5:
    return "Excellent";
    default: 
    return "Unknown level";
  
  }

};


const renderSearchResult = (breed) => {

  const divTag = document.createElement('div');
  divTag.innerHTML = `
  <h1 class="dog"> ${breed.name} </h1>
  <img class="mainDog" src= "${breed.image_link}" />
  <ol> 
  <li> <strong>Energy Level:</strong> ${valueLevelToString(breed.energy)}. </li>
  <li> <strong>Good with kids:</strong> ${valueLevelToString(breed.good_with_children)}. </li>
  <li> <strong>Sociable with dogs:</strong> ${valueLevelToString(breed.good_with_other_dogs)} </li>
  <li> <strong>Playfulness Level:</strong> ${valueLevelToString(breed.playfulness)}. </li>
  <li> <strong>Protectiveness:</strong> ${valueLevelToString(breed.protectiveness)}. </li>
  <li> <strong>Grooming Level:</strong> ${valueLevelToString(breed.grooming)}. </li>
  <li> <strong>Maximum Life Expectancy:</strong> ${breed.max_life_expectancy} years old. </li>
  <li> <strong>Minimum Life Expectancy:</strong> ${breed.min_life_expectancy} years old. </li>
  <li> <strong>Barking Level:</strong> ${valueLevelToString(breed.barking)}. </li>
  <li> <strong>Trainability Level:</strong> ${valueLevelToString(breed.trainability)}. </li>
   
  </ol>
  `
  resultsParent.appendChild(divTag);
};


formSearch.addEventListener("submit", searchDog);

//Name dog: res.data[0].name
//life expectansi: res.data[0].max_life_expectancy
// trainiability: trainability:
//barking
//energy
//image_link
//playfulness
//gromming



  
const dogFactText = document.querySelector("#dogFact");

 axios.get(`https://dogapi.dog/api/v2/facts`).then(function(res){
  dogFactText.innerHTML = res.data.data[0].attributes.body;
   }).catch(err=> {
     console.log('Error', err);
   });

const buttonFunFact = document.querySelector("#fun-fact");
buttonFunFact.addEventListener('click', function(ev){
console.log('clicked', dogFactText.style.display);

  if( dogFactText.style.display === 'none') {
      return dogFactText.style.display = 'block';
  } else {
    dogFactText.style.display = 'none';
  }

});


//https://dogapi.dog/api/v2/facts (RANDOM FACTS ABOUT DOGS)

//https://dogapi.dog/docs/api-v2



//I am going to use this for the ID TASK: https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z#11045fd3-0890-4f23-b5ea-f268a3f5eced
