const db = require('../configs/db_config');



class DatbaseRequests {
    async getAllUsers() {
        try {
            const users = await db.users.findAll();
            return users;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async addUser(props) {
        try {
            const newUser = await db.users.create({ email: props.email, password: props.password, phone: props.phone, first_name: props.first_name, last_name: props.last_name });
            const moneyData = await db.money_data.create({ money_target: props.money_target, current_money: props.current_money, target_type:props.target_type });
            const newSoldier = await db.soldiers.create({ soldier_type: props.soldier_type, soldier_tash_type: props.soldier_tash_type, money_addons: props.money_addons, additional_income: props.additional_income, days_home: props.days_home, user_id: newUser.user_id, is_lone_soldier: props.is_lone_soldier, money_data_id: moneyData.money_data_id });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getAllUserExpenses(props) {
        try {
            const moneyFound = this.getMoneyDataOfUser(props)
            const expensesMoneyFound = await db.expenses_money_data.findAll({
                where: {
                    money_data_money_data_id: moneyFound.money_data_id
                }
            });
            const expensesFound = [];
            for (let index = 0; index < expensesMoneyFound.length; index++) {
                expensesFound.push(
                    await db.expenses.findByPk(expensesMoneyFound[index].expenses_expense_id)
                )
            };
            return expensesFound;


        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getMoneyDataOfUser(props) {
        try {
            const soldierFound = await db.soldiers.findAll({
                where: {
                    user_id: props.user_id
                }
            });
            const moneyFound = await db.money_data.findByPk(soldierFound.money_data_id);
            return moneyFound;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }
    async addNewExpense(props) {
        try {
            const moneyFound = this.getMoneyDataOfUser(props);
            const newExpense = db.expenses.create({ savings: props.savings, month: props.month, home_pleasure: props.home_pleasure, home_mandatory: props.home_mandatory, base_pleasure: props.base_pleasure, base_mandatory: props.base_mandatory });
            const newMoneyExpenses = db.expenses_money_data.create({ expenses_expense_id: newExpense.expense_id, money_data_money_data_id: moneyFound.money_data_id })
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
module.exports = new DatbaseRequests();