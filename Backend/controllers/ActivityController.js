const Activity = require("../models/Activity");
const User = require("../models/User"); // Assuming you have a User model
const DailyData = require("../models/DailyData");

const addactivity = async (req, res) => {
  try {
    const { title, carbonFactor, user, Date ,electricity,petrol,gas,diesel,paper,water} = req.body;

    if (!title||!carbonFactor||!user||!Date) {
      throw Error("Fill All The Data Carefully");
    }

    // Create the activity
    // all data like electricity paper water saved
    const addac = await Activity.create(req.body);

    // Find or create DailyData  orr Update DailyData for the specified Date
    let findDailyData = await DailyData.findOne({$and: [{ Date: Date },{user:user}]});
    if (!findDailyData) {
      findDailyData = await DailyData.create({
        carbonFactorTotal: carbonFactor,
        user: user,
        Date: Date,
      });
    } else {
      // Update the existing DailyData
      const updatedCf = findDailyData.carbonFactorTotal + carbonFactor;

      findDailyData = await DailyData.findOneAndUpdate(
        {$and: [{ Date: Date },{user:user}]},
        { carbonFactorTotal: updatedCf },
        { new: true }
      );
    }
// getting all the data in the daily activity 

    // Update the user with the new activity and DailyData
    const updateUser = await User.findOneAndUpdate(
      { _id: user },
      {
        $push: { Activity: addac },
        // DailyData:[newdailyactivty]

      },
      { new: true }
    ).populate("DailyData").populate("Activity");

    res.status(200).json(updateUser);
  } catch (e) {
    res.status(400).json({
      error: e.message,
      message: "Issue at adding the activity",
    });
  }
};

module.exports = { addactivity };
