
const listContainer = document.getElementById("listContainer")

async function loadMovies(searchTerm){ 
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=2331a4a6`
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if(data.Response == "True") displayMovieList(data.Search);
    console.log(data.Search)
}
function findMovie(){
    let searchTerm = (document.getElementById("input-box").value).trim();
    loadMovies(searchTerm)
}

function displayMovieList(movies){
    listContainer.innerHTML = ""
   for(let i = 0 ; i < movies.length ; i++){
    let movieListItem = document.createElement('div');
    movieListItem.dataset.id = movies[i].imdbID; // setting movie id in  data-id
    movieListItem.innerHTML = `
    <div>
        <h3>🎥 ${ movies[i].Title} | 📅 </h3>
        <p>${movies[i].Year }</p>
        
    </div>
    `;
    listContainer.appendChild(movieListItem)
   }
   let button = document.createElement('button');
   listContainer.appendChild(button)
   button.innerHTML="Reset"
   button.className="button2";
   button.addEventListener("click",()=>{
    reset()
   })
   
}
function reset(){
    listContainer.innerHTML=""
    document.getElementById("input-box").value = ""
}