// function test(name, testFunction) {
//   function equal(x, y, message = `Expected ${x} to equal ${y}`) {
//     if (x === y) {
//       console.info("Pass: " + message);
//     } else {
//       console.error("Fail: " + message);
//     }
//   }

//   function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
//     if (x !== y) {
//       console.info("Pass: " + message);
//     } else {
//       console.error("Fail: " + message);
//     }
//   }

//   const assertions = {
//     equal,
//     notEqual,
//   };

//   console.group(name);
//   testFunction(assertions);
//   console.groupEnd(name);
// }

// test("check if the name equal", (t) => {
//   const dataList = document.querySelector("#auto-complete");
//   const results1 = [
//     {
//       code: "TLV",
//       lat: "32.0117",
//       lon: "34.8861",
//       name: "Ben Gurion Airport",
//       city: "Petah\u0331 Tiqwa",
//       state: "HaMerkaz",
//       country: "Israel",
//       woeid: "12513775",
//       tz: "Asia/Jerusalem",
//       phone: "",
//       type: "Airports",
//       email: "",
//       url: "http://www.iaa.gov.il/Rashat/en-US/Airports/BenGurion",
//       runway_length: "11998",
//       elev: "135",
//       icao: "LLBG",
//       direct_flights: "87",
//       carriers: "56",
//     },
//   ];
//   renderList(results1);
//   // const obj = [{ name: "Ben Gurion Airport", city: "Petah\u0331 Tiqwa" }];
//   t.equal(dataList.children[0].value, "Ben Gurion Airport"); // step 4
//   t.equal(dataList.children[0].textContent, "Petaẖ Tiqwa, Israel"); // step 4
//   //   result.textContent = ""; // reset so it doesn't affect the page/other tests
// });
