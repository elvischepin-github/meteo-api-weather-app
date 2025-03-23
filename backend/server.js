const express = require("express");
const winston = require("winston");
const cors = require("cors");
const app = express();
const port = 3005;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: () => {
        const date = new Date();
        const GMTplus2 = 2;

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours() + GMTplus2).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
      },
    }),
    winston.format.json()
  ),
  transports: [new winston.transports.File({ filename: "logs/app.log" })],
});

app.use(cors());
app.use(express.json());

app.post("/api/log", (req, res) => {
  const { action, details } = req.body;

  if (
    action !== "search_again_storage" &&
    action !== "search_type_field" &&
    action !== "page_view"
  ) {
    return res.status(400).json({ message: "Not allowed action" });
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
