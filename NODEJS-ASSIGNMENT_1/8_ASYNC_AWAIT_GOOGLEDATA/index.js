const fetch = require("node-fetch");

(async () => {
  try {
    const response = await fetch("https://www.google.com/");
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log(error.response.body);
  }
})();
