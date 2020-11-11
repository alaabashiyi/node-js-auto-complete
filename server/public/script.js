const search = document.querySelector("#search");
const list = document.querySelector("#auto-complete");
const datalisto = document.querySelector(".datalisto");
const hotels = document.querySelector(".hotels");

const local = `http://localhost:3000/getdata?name=`;
const placesUrl = `http://localhost:3000/getplaces?country=`;

const online = `https://fly-webahead.herokuapp.com/getdata?name=`;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const mapLink = `http://www.google.com/maps/place/`;

let globalData;

function getData(searched) {
  fetch(`${local}${searched}`)
    .then((res) => res.json())
    .then((res) => {
      renderList(res);
      globalData = res[0];
    })
    .catch((err) => {
      console.log(err);
    });
}

function getPlaces(searched) {
  fetch(`${placesUrl}${searched}`)
    .then((res) => res.json())
    .then((res) => {
      let first_five = res.results.slice(0, 5);
      renderHotels(first_five);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderHotels(arr) {
  hotels.innerHTML = "";
  arr.forEach((curr) => {
    const div = document.createElement("div");
    div.classList.add("hotel");
    div.id = curr.reference;
    div.innerHTML = generateHotels(curr);
    hotels.appendChild(div);
  });
}

function renderList(arr) {
  list.innerHTML = "";
  arr.forEach((curr) => {
    const option = document.createElement("option");
    option.innerText = `${curr["city"]}, ${curr["country"]}`;
    if (curr["name"] == "not found") {
      option.innerText = curr["name"];
      option.value = `${search.value}`;
      list.appendChild(option);
    } else {
      option.value = curr["name"];
      list.appendChild(option);
    }
  });
}

search.addEventListener("input", (e) => {
  const searched = e.target.value;

  searched.length >= 3 && getData(searched);
  search.value == "" ? (list.innerHTML = "") : null;
});

searchBtn.addEventListener("click", (e) => {
  getPlaces(globalData["city"]);
  info.innerHTML = generateElement(globalData);
});
