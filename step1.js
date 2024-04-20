const fs = require("fs");

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

cat("one.txt");
// cat("on3e.txt");
