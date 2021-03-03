const { Model, DataTypes } = require("sequelize");

class User extends Model {}

var userFields = {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
};

module.exports = { User, userFields };
