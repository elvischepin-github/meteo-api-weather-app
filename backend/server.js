const express = require("express");
const winston = require("winston");
const app = express();
const port = 3005;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "logs/app.log", level: "info" }),
  ],
});

app.use(express.json());

app.post("/api/log", (req, res) => {
  const { action, details } = req.body;

  if (action !== "button_click" && action !== "page_view") {
    return res.status(400).json({ message: "Invalid action" });
  }

  logger.info({
    method: "POST",
    action,
    details,
  });
  res.status(200).json({ message: "Logged" });
});

app.listen(port, () => {
  console.log(`Logger on ${port}`);
});
