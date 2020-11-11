const getPlaces = require("./axios-api");
const url = require("url");
const cJson = require("circular-json");

const nodata = { name: "Place choose a country" };

const placesHandler = async (req, res) => {
  try {
    const placeUrl = url.parse(req.url, true);
    const { country } = placeUrl.query;
    if (!country) {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(nodata));
      return;
    }
    const places = await getPlaces(country);

    if (places.data.status == "ZERO_RESULTS") {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify(places.data));
      return;
    }

    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(places.data));
    res.end();
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = placesHandler;
