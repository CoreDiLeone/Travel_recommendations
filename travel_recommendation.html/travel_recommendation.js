
const btnSearch = document.getElementById("btn-search")
const searchResult = document.getElementById("search-result");
const magnify = document.getElementsByClassName("bi-search")[0];
function getInfo(e){
    e.preventDefault()
const JSON = "./travel_recommendation_api.json";

fetch(JSON)
.then (response => response.json())
.then(data => {
    const input = document.getElementById("input-search").value.toLowerCase();
    const condition = data.countries.find(
        (item) => item.name.toLowerCase() === input
      );
 if(condition){
    searchResult.innerHTML = "";
    searchResult.innerHTML += `<div class="result">
    <img src=${condition.cities[0].imageUrl} alt=${condition.name} class="result-img"/>
    <h3 class="result-title">${condition.cities[0].name}</h3>
    <p class="result-description">${condition.cities[0].description}</p>
    <button class="result-btn cursor">Visit</button>
    </div>
    <div class="result">
    <img src=${condition.cities[1].imageUrl} alt=${condition.name} class="result-img"/>
    <h3 class="result-title">${condition.cities[1].name}</h3>
    <p class="result-description">${condition.cities[1].description}</p>
    <button class="result-btn cursor">Visit</button>
    </div>`
    console.log(condition)
 }     
    }).catch((error) => {
        console.error("Error:", error);
        resultDiv.innerHTML = "An error occurred while fetching data.";
      });
  
}
const btnClear = document.getElementById("btn-clear");

function clear(e){
    e.preventDefault()
    searchResult.innerHTML = "";
}
btnClear.addEventListener("click", clear)
btnSearch.addEventListener("click", getInfo)
magnify.addEventListener("click", getInfo)

