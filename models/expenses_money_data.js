const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expenses_money_data', {
    expenses_expense_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'expenses',
        key: 'expense_id'
      }
    },
    money_data_money_data_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'money_data',
        key: 'money_data_id'
      }
    }
  }, {
    sequelize,
    tableName: 'expenses_money_data',
    schema: 'public',
    timestamps: false
  });
};
