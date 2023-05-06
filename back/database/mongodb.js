import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Database connected. ✔️");
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("Disconnected", () => {
  console.log("MongoDB disconnected");
});

export default connect;
