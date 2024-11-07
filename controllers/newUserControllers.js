const User = require('../models/userModel');

exports.addNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      responseData: user,
      message: 'user is created successfully'
    });
  } catch (err) {
    console.log('error while creating the user', err);
  }
};
