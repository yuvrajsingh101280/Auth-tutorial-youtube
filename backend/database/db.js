import mongoose from "mongoose";
const connectToDB = async () => {

    try {

        await mongoose.connect(process.env.MONG_URL)

        console.log("databse connected successfully")



    } catch (error) {

        console.log("Error in connecting database:----------", error)


    }



}
export default connectToDB