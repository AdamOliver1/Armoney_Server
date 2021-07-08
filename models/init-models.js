var DataTypes = require("sequelize").DataTypes;
var _expenses = require("./expenses");
var _expenses_money_data = require("./expenses_money_data");
var _money_data = require("./money_data");
var _soldiers = require("./soldiers");
var _users = require("./users");

function initModels(sequelize) {
  var expenses = _expenses(sequelize, DataTypes);
  var expenses_money_data = _expenses_money_data(sequelize, DataTypes);
  var money_data = _money_data(sequelize, DataTypes);
  var soldiers = _soldiers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  expenses_money_data.belongsTo(expenses, { as: "expenses_expense", foreignKey: "expenses_expense_id"});
  expenses.hasMany(expenses_money_data, { as: "expenses_money_data", foreignKey: "expenses_expense_id"});
  expenses_money_data.belongsTo(money_data, { as: "money_data_money_datum", foreignKey: "money_data_money_data_id"});
  money_data.hasMany(expenses_money_data, { as: "expenses_money_data", foreignKey: "money_data_money_data_id"});
  soldiers.belongsTo(money_data, { as: "money_datum", foreignKey: "money_data_id"});
  money_data.hasMany(soldiers, { as: "soldiers", foreignKey: "money_data_id"});
  soldiers.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(soldiers, { as: "soldiers", foreignKey: "user_id"});

  return {
    expenses,
    expenses_money_data,
    money_data,
    soldiers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
