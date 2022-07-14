import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    // const MONGO_CLIENT = "mongodb://localhost/march_task_list";
    // const MONGO_CLIENT = "mongodb://localhost/nottolist";

    
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
