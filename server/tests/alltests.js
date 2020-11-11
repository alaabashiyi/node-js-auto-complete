const test = require("tape");
const supertest = require("supertest");
const router = require("../router");

const results = {
  code: "TLV",
  lat: "32.0117",
  lon: "34.8861",
  name: "Ben Gurion Airport",
  city: "Petah\u0331 Tiqwa",
  state: "HaMerkaz",
  country: "Israel",
  woeid: "12513775",
  tz: "Asia/Jerusalem",
  phone: "",
  type: "Airports",
  email: "",
  url: "http://www.iaa.gov.il/Rashat/en-US/Airports/BenGurion",
  runway_length: "11998",
  elev: "135",
  icao: "LLBG",
  direct_flights: "87",
  carriers: "56",
};

//test 1
test("should returns if the name in the object  of the body equals to  the name  'Tambolaka Airport'", (t) => {
  supertest(router)
    .get("/getdata?name=Tambolaka Airport")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      console.log(res.body[0].name);
      t.equal(res.body[0].name, "Tambolaka Airport");
      t.end();
    });
});
//test 2
test("should returns if the object in the body equals to the object of the results", (t) => {
  supertest(router)
    .get("/getdata?name=ben gurion")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      console.log(res.body[0]);
      t.deepEqual(res.body[0], results);
      t.end();
    });
});

//test3
test(" testing missing airport", (t) => {
  supertest(router)
    .get("/getdata?name=Tamra Airport")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      console.log(res.body[0].name);
      t.equal(res.body[0].name, "cannotfind");
      t.end();
    });
});

// test 4
const expected = {
  code: "VDA",
  lat: "29.9528",
  lon: "34.9583",
  name: "Ovda Airport",
  city: "Ovda",
  state: "HaDarom",
  country: "Israel",
  woeid: "12513788",
  tz: "Asia/Jerusalem",
  phone: "",
  type: "Airports",
  email: "",
  url: "",
  runway_length: "9843",
  elev: "1490",
  icao: "LLOV",
  direct_flights: "1",
  carriers: "1",
};

test("compare obj", (t) => {
  supertest(router)
    .get("/getdata?name=israel")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.body[4], expected);
      t.end();
    });
});
// test 5
test("compare length", (t) => {
  supertest(router)
    .get("/getdata?name=new")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      t.equal(res.body.length, 285);
      t.end();
    });
});
//test 6
test("compare obj key", (t) => {
  supertest(router)
    .get("/getdata?name=noo")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      t.equal(res.body[2].country, "United States");
      t.end();
    });
});
// test 7

test("home page", (t) => {
  supertest(router)
    .get("/jf")
    .expect(404)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      console.log(res);
      t.equal(res.text, "<h1>Not found</h1>");
      t.end();
    });
});
