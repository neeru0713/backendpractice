const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();

dotenv.config({ quiet: true });
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.post("/api/studentRecord", (req, res) => {
    try {
        const studentData = req.body;
        res
          .status(200)
          .json({
            message: "student record received sucessfully",
            data: studentData,
          });
       
    } catch (error) {
        res.status((404).json({message:"doesnot received student record sucessfully", error: error.message}),)
   }
});



app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
