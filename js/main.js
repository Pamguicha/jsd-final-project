
console.log('hello dogs', axios);

const apiKey = 'J0GvRGzkHEE/3HmmtvTKJA==pXp4BWMraSlgHrMp';
const resultsParent = document.querySelector('#resultsPage');



axios.get('https://api.api-ninjas.com/v1/dogs', {
  params: {
    name: 'beagle'
  },
  headers: {
    'X-Api-Key': `${apiKey}`
  }
})
.then(function(res) {
  console.log(res.data[0]);
})
.catch(function(err) {
  console.log('Error:', err);
});



//Name dog: res.data[0].name
//life expectansi: res.data[0].max_life_expectancy
// trainiability: trainability:
//barking
//energy
//image_link
//playfulness
//gromming



  

// axios.get(`https://dogapi.dog/api/v2/breeds/30f62219-e225-42cd-bd07-02425f944c07`).then(function(res){
  //   console.log(res.data.data);
  // }).catch(err=> {
  //   console.log('Error', err);
  // });




//https://dogapi.dog/api/v2/facts (RANDOM FACTS ABOUT DOGS)

//https://dogapi.dog/docs/api-v2



//I am going to use this for the ID TASK: https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z#11045fd3-0890-4f23-b5ea-f268a3f5eced
