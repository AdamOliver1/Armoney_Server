const expenses = require('../models/expenses');
const datbaseRequests = require('../database/database_requests');



const getPercentSavings = async (user_id) => {
    const { current_money, money_target } = datbaseRequests.getMoneyDataOfUser({ "user_id": user_id })
    return (current_money / money_target) * 100;
}

const getExpensesById = async (user_id) => {
    const expenses = await datbaseRequests.getAllUserExpenses({ "user_id": user_id });
    return expenses;
}

const getSavingsPercentById = async (user_id) => {
    const expenses = await getExpensesById({ "user_id": user_id });
    return expenses.map(e => (e.army_mandatory + e.army_mandatory + e.home_pleasure + e.home_mandatory) / e.savings);
}

const addNewExpense = async (expense) => {
    
    return await datbaseRequests.addNewExpense({"expenses":expense});
}


module.exports = {
    getPercentSavings, getExpensesById, getSavingsPercentById,addNewExpense
}

