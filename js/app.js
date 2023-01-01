const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("country-input");
let searchResult = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const countryName = searchInput.value;
  const searchCountry = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  const fetchUrl = fetch(searchCountry);
  fetchUrl
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].capital[0]);
      console.log(data[0].continents[0]);
      console.log(data[0].name.common);
      console.log(data[0].flags.svg);
      console.log(data[0].population);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );

      //rendering into HTML
      searchResult.innerHTML = `
  <img src="${data[0].flags.svg}" class="flag-img"/>
      <p>${data[0].name.common}</p>


  `;
    });
});
