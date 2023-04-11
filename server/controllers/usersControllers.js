import users from "./../models/usersSchema.js";
import moment from "moment";


const userpost = async (req, res) => {
    const file = req.file.filename;
    const { fname, lname, email, mobile, gender, status, location } = req.body;

    if (!fname || !lname || !email || !mobile || !gender || !status || !file || !location) {
        res.status(401).json("All inputs is required");
    }
    try {
        const paruser = await users.findOne({ email: email });
        if(paruser) {
            res.status(401).json("This user already exists in our database.")
        } else {
            const dateCreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            const userData = new users({
                fname, lname, email, mobile, gender, status, location, profile:file , dateCreated
            });
            await userData.save();
            res.status(200).json(userData);
        }
    }catch(error){
        res.status(401).json(error);
        console.log("catch block error");
    }
}

export default userpost;