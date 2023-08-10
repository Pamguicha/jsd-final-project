console.log('hanna raini', axios);
const apiKey= "AIzaSyC3T-tPbe_9EhXXwJ1BzCxiY5LRSfjySYw";




axios.get(`https://www.googleapis.com/youtube/v3/search?q=music&key=${apiKey}`).then(function(res){
  console.log(res.data);
}).catch(err=> {
  console.log('Error', err);
});
