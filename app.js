const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use("/video", require("./routes/routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});