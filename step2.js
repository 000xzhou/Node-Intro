const fs = require("fs");
const process = require("process");
const axios = require("axios");

function cat(path) {
  console.log(`reading ${path}`);

  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      // handle possible error
      console.error(`Error: no such ${path} path, ${err}`);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    console.log(`file contents: ${data}`);
  });
}

// cat("one.txt");
// cat("on3e.txt");

function webCat(url) {
  try {
    axios.get(url).then(function (resp) {
      console.log(resp.data.slice(0, 80), "...");
    });
  } catch (err) {
    console.error(`Error: ${url}`);
    process.exit(1);
  }
}

// webCat("http://google.com");

let path = process.argv[2];
if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
