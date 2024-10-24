import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`);
        console.log("Connected with DB")
    } catch (error) {
        console.log(error)
    }
})()