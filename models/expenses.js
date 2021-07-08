const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expenses', {
    expense_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    home_pleasure: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    home_mandatory: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    army_pleasure: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    army_mandatory: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    month: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    savings: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expenses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expenses_pkey",
        unique: true,
        fields: [
          { name: "expense_id" },
        ]
      },
    ]
  });
};
