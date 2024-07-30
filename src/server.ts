import express from "express";
import { reportRouter } from "./api/report/reportRouter";
import { readerLogFile } from "./common/readerLogFile";

const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reports", reportRouter);

readerLogFile.import("resources/qgames.log").then(() => {
  console.log("Games imported successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
