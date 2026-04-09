"use strict";
const staticData = [
  { name: "Mickey Mouse", films: ["Fantasia", "Fun and Fancy Free"] },
  { name: "Elsa", films: ["Frozen", "Frozen II"] },
  { name: "Simba", films: ["The Lion King"] },
];

// Callbacks (DON'T USE THIS APPROACH)

const getCharactersCallback = (data, callback) => {
  setTimeout(() => {
    if (!data) {
      callback(new Error("No data available"), null);
    }
    callback(null, data);
  }, 1000);
};

console.log("Requesting Characters...");

getCharactersCallback(staticData, (error, result) => {
  if (error) {
    console.error("[callbacks] error: ", error.message);
  }
  console.log("[callbacks] Got characters: ", result);
});

// Promises
const getCharactersPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) {
        reject(new Error("no data available"));
      }
      resolve(data);
    }, 1000);
  });
};

console.log("[promises] requesting characters...");

getCharactersPromise(staticData)
  .then((result) => {
    console.log("Promises Got Characters: ", result);
    // add filtering etc and if needed pass to another then
  })
  .catch((error) => {
    console.error("Promises Error: ", error.message);
  });

// async await example (the modern approach!)

// use a promise to create the timeout delay
const asyncDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function to handle the request

const getCharacters = async (data) => {
  await asyncDelay(500);
  if (!data) throw new Error("No Data available");
  return data;
};

// execute an async function to run the request IIFE (Immediately Invoked Function Expression)
(async () => {
  console.log("async/await Requesting Characters...");
  try {
    const result = await getCharacters(staticData);
    console.log("async/await Got characters: ", result);
  } catch (error) {
    console.error("async/await error: ", error.message);
  }
})();
