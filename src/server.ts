import mongoose from "mongoose";
import app from "./app";
import dotenv from "../src/config/index";

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${dotenv.dbUser}:${dotenv.dbPass}@cluster0.bhwsqpg.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(dotenv.port, () => {
      console.log(`Example app listening on port ${dotenv.port}`);
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect Database", error);
  }
}

main();
