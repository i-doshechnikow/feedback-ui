const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

let a = axios.get("https://619801f0164fa60017c22f19.mockapi.io/api/test/users");

app.get("/", async (req, res) => {
  let a = await axios.get(
    "https://619801f0164fa60017c22f19.mockapi.io/api/test/users"
  );
  console.log(a);
  res.send(a.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
