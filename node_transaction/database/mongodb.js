import mongoose, { connect } from "mongoose";

const connectDb = async () => {
 await mongoose
    .connect(
      "mongodb+srv://mern_test:mern_test@cluster0.tw22qtc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("mongoose connected "))
    .catch((err) => console.err(err));
};
export default connectDb;
