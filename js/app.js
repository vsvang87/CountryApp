const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("country-input");
let searchResult = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const countryName = searchInput.value;
  //setting api to a variable
  const searchCountry = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  //fetch api
  const fetchUrl = fetch(searchCountry);
  fetchUrl
    .then((response) => response.json())
    .then((data) => {
      //grabbing data from api and rendering into HTML
      //passing data from api inside template string
      searchResult.innerHTML = `
      <div class="flag-div">   
      <h2 class="country-title">${data[0].name.common}</h2>
       <img src="${data[0].flags.svg}" class="flag-img"/>
  
      </div>
 
  <div class="description"> 
      <p><span class="country-name">Capitol: </span>${data[0].capital[0]}</p>
      <p><span class="country-name">Continent: </span> ${
        data[0].continents[0]
      }</p>
      <p> <span class="country-name">Populations: </span> ${
        data[0].population
      }</p>
      <p> <span class="country-name">Language: </span> ${Object.values(
        data[0].languages
      )
        .toString()
        .split(",")
        .join(", ")}</p>
      <p> <span class="country-name">Currencies: </span> ${
        data[0].currencies[Object.keys(data[0].currencies)].name
      }</p>
  </div>
      


  `;
    })
    //catch error
    .catch(() => {
      if (countryName.length === 0) {
        searchResult.innerHTML = "*Input field cannot be empty*";
      } else {
        searchResult.innerHTML = "*Please enter a valid Country name*";
      }
    });
});
