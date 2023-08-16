
console.log('hello dogs', axios);

const apiKey = 'J0GvRGzkHEE/3HmmtvTKJA==pXp4BWMraSlgHrMp';
const formSearch = document.querySelector("#searchForm");
const resultsParent = document.querySelector('#resultsPage');
const dogName = document.querySelector("#dogQuery");

// From RANDOM IMAGE
const imageRandom = document.querySelector("#randomDog");
const imageTitle = document.querySelector("#titleImg");

let breedNameToFind;


resultsParent.addEventListener("click", ev => {
  loadMoreDetailsBreed(ev.target.textContent);
});

const searchDog = (event) => {
  event.preventDefault();
imageRandom.style.display = "none";
imageTitle.style.display= "none";

axios.get('https://api.api-ninjas.com/v1/dogs', {
  params: {
    name: `${dogName.value}`
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
  <ol class="list-description"> 
  <li> <strong>Energy Level:</strong> ${valueLevelToString(breed.energy)}. </li>
  <li> <strong>Good with kids:</strong> ${valueLevelToString(breed.good_with_children)}. </li>
  <li> <strong>Sociable with dogs:</strong> ${valueLevelToString(breed.good_with_other_dogs)} </li>
  <li> <strong>Playfulness Level:</strong> ${valueLevelToString(breed.playfulness)}. </li>
  <li> <strong>Protectiveness:</strong> ${valueLevelToString(breed.protectiveness)}. </li>
   <li> <strong>Good with strangers:</strong> ${valueLevelToString(breed.good_with_strangers)}. </li>
  <li> <strong>Grooming Level:</strong> ${valueLevelToString(breed.grooming)}. </li>
  <li> <strong>Maximum Life Expectancy:</strong> ${breed.max_life_expectancy} years old. </li>
  <li> <strong>Minimum Life Expectancy:</strong> ${breed.min_life_expectancy} years old. </li>
  <li> <strong>Barking Level:</strong> ${valueLevelToString(breed.barking)}. </li>
  <li> <strong>Trainability Level:</strong> ${valueLevelToString(breed.trainability)}. </li>
  </ol>
    <button class="descriptionSupreme"> Read more </button>
  `
  resultsParent.appendChild(divTag);
};


formSearch.addEventListener("submit", searchDog);



//DETAILS DOG MORE INFO NEW API  

const loadMoreDetailsBreed = () => {
breedNameToFind = dogName.value;

axios.get('https://api.thedogapi.com/v1/breeds').then(function(res) {
  const breeds = res.data;
  
  const foundBreed = breeds.find(breed => breed.name.toLowerCase().includes(breedNameToFind.toLowerCase())
  );
  
  if (foundBreed) {
    console.log(foundBreed);
     resultsParent.innerHTML = `
     <div class="test">
     
     <h2 class="foundBreed"> ${foundBreed.name}</h2>
     <p> <strong> Temperament: </strong> ${foundBreed.temperament}. </p>
     <p> <strong> Breed for: </strong>${foundBreed.bred_for}. </p>
     <p> <strong> Breed group: </strong>${foundBreed.breed_group}. </p>
     <p> <strong> Weight: </strong>${foundBreed.weight.metric} kg. </p>
     <p> <strong> Height: </strong>${foundBreed.height.metric} Cm. </p>
     <img class = "detailImage" src="https://cdn2.thedogapi.com/images/${foundBreed.reference_image_id}_1280.jpg"</img>
     </div>
     `;
  } else {
    resultsParent.innerHTML = ` 
    <h1>Sorry information of Breed not found. <small> In the meantime, read about the <a <a href="https://www.dogsplanet.com/en/mixed-breeds/beagador/"class="beagador">Beagador,</a>a crazy but loveble mixed breed.</small></h1>
    
     <img class="mainDog" src= "css/images/chew.jpg" />
    
    `;
  }
}).catch(err => {
  console.log('Error', err);
});
}
  //<img class = "detailImage" src="${foundBreed.image.url}" </img></img> API DOES NOT HAVE IMAGE IN THEIR DATA ANYMORE :(

//(RANDOM FACTS ABOUT DOGS)
const dogFactText = document.querySelector("#dogFact");

 axios.get(`https://dogapi.dog/api/v2/facts`).then(res =>{
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

//Documentation for random picture feature
//Api Key Random Feature
const API_Key = "live_vc6D7YmPdqnKm4n6LhTnlKKfnnSfvRCoCDlz9sJCIW67gReazVKUARr2vKsAdR3x";


imageRandom.addEventListener( "click", ev => {
  changeRandomImage(ev.target);
}
)

const changeRandomImage = () => {
axios.get(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=${API_Key}`).then(res => {
  console.log(res.data[0].breeds[0].name);
  imageRandom.src = res.data[0].url;
  imageTitle.innerHTML = `<strong>Click to See Random Dog Pictures: </strong>${res.data[0].breeds[0].name}`;
  })
.catch(err => {
  console.log('Error loading search results', err);
  });
}





