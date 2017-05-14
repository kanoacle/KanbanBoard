/*jshint esversion: 6*/
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Card, {
          as: 'Creator',
        });
        User.hasMany(models.Card, {
          as: 'Assignee',
        });
      }
    }
  });

  return User;
};