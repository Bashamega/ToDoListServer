const express = require('express');
const api = require("./api")
const cors = require('cors');
const app = express();
const port = 3000;

const whitelist = ["http://localhost:3001"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions))

// Serve the HTML file
app.get('/', (req, res) => {
  res.json({
    message: "Welcome"
  })
});
app.use("/api", api)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
