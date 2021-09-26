const catchAsync = require("../utils/catchAsync");

const login = catchAsync(async (req, res) => {
  res.send("trying to login");
});

const register = catchAsync(async (req, res) => {
  res.send("trying to register");
});

module.exports = {
  login,
  register,
};
