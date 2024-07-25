import dotenv from "dotenv";
import connnectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connnectDB()
  .then(() => {
    console.log("if success");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Some issue on Database Connection !!!");
  });
