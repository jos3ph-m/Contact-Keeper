// Entry point to backend
const express = require("express");

const app = express();

// add route
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeeper API" });
});

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
