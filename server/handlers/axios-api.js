const axios = require("axios");

const getPlaces = async (place) => {
  try {
    return axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${place}&key=AIzaSyCCMZkHcfHJhNKBhAOzr9PoAqcetEB3W1A`
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = getPlaces;
