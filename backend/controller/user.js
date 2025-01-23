import bcrypt from "bcryptjs";
import User from "../models/usermodel.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body); // Debugging

    try {
        // Check for missing fields
        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(res, newUser._id);

        // Return success response
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user: { ...newUser._doc, password: undefined },
        });
    } catch (error) {
        console.error("Error in creating user:", error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};


export const login = async (req, res) => {


    const { email, password } = req.body

    try {
        // Check for missing fields
        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "User doesnot exist exists" });
        }

        const decoded = await bcrypt.compare(password, user.password)
        if (!decoded) {

            return res.status(404).json({ success: false, message: "INvalid password" })

        }

        generateTokenAndSetCookie(res, user._id)
        res.status(200).json({ success: true, message: "User logged in" })


    } catch (error) {
        console.error("Error in login user:", error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }




}
export const logout = async (req, res) => {
    try {

        res.clearCookie("token")
        return res.status(200).json({ scuccess: true, message: "user logged out successfully" })

    } catch (error) {
        console.log(error)
    }
}