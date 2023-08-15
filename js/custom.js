const API_Key = "live_vc6D7YmPdqnKm4n6LhTnlKKfnnSfvRCoCDlz9sJCIW67gReazVKUARr2vKsAdR3x";
const imageRandom = document.querySelector("#randomDog");

imageRandom.addEventListener( "click", ev => {
  changeRandomImage(ev.target);
}
)

const changeRandomImage = () => {
axios.get(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=${API_Key}`).then(res => {
  imageRandom.src = res.data[0].url;
  })
.catch(err => {
  console.log('Error loading search results', err);
  });
}
