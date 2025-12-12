const express = require("express");
const app = express();
const PORT = 3000;

// allow frontend access
const cors = require("cors");
app.use(cors());

// API endpoint
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from your Azure cloud server!" });
});

// Start server
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
