/*jshint esversion: 6*/
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'queue'
    },
  }, {
    classMethods: {
      associate: function(models) {
        Card.belongsTo(models.User, {
          as: 'Creator',
          foreignKey: {
            name: 'created_by',
            allowNull: false
          }
        });
        Card.belongsTo(models.User, {
          as: 'Assignee',
          foreignKey: {
            name: 'assigned_to',
            allowNull: false
          }
        });
      }
    }
  });

  return Card;
};