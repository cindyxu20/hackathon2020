const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const nocache = require("nocache");
app.use(nocache());
app.set("etag", false);

app.use(cors());
app.use(bodyParser.urlencoded({
  urlencoded: { limit: '50mb', extended: true }
}));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

function serveReactApp(req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, "./public", "index.html"));
}

app.get("/", serveReactApp);
app.get("/scene", serveReactApp);

app.use(express.static(path.join(__dirname, "./public")));

// start server
const port = process.env.PORT || 3016;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Express server is running at http://localhost:" + port);
});
