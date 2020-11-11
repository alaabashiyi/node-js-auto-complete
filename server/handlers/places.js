const getPlaces = require("./axios-api");
const missingHandler = require("../handlers/missing");
const url = require("url");

const nodata = { name: "Place choose a country" };

const placesHandler = async (req, res) => {
  try {
    const placeUrl = url.parse(req.url, true);
    const { country } = placeUrl.query;
    if (!country) {
      missingHandler(req, res);
      return;
    }
    const places = await getPlaces(country);

    if (places.data.status == "ZERO_RESULTS") {
      missingHandler(req, res);
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
