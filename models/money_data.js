const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money_data', {
    money_data_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    money_target: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    current_money: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    target_type: {
      type: "\"CHAR\"",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'money_data',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "money_data_pkey",
        unique: true,
        fields: [
          { name: "money_data_id" },
        ]
      },
    ]
  });
};
