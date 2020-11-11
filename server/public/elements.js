const searchBtn = document.querySelector("#search-btn");
const info = document.querySelector(".airport");

// const KEYY = process.env.API_KEY;

function generateElement(airport) {
  info.innerHTML = "";
  let newDom = `<div class="airport-info"><h1>${airport.name}</h1><div class="more-info">
      <h2>City: <span>${airport.city}</span></h2>
      <h2>Country: <span>${airport.country}</span></h2>
      <h3>Id <span>${airport.woeid}</span></h3>
    </div>
  </div>
  <div class="maps">
    <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBvqF0ACveCzTRXhG8cl1-7v-mEjsBCrRU&center=${airport.lat},${airport.lon}&zoom=13"></iframe>
    </iframe>
  </div>`;

  return newDom;
}
