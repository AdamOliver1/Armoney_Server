const expenses = require('../models/expenses');
const datbaseRequests = require('../database/database_requests');



const getPercentSavings = async (user_id) => {
    let current = 20, target = 100;
    return (current / target) * 100;
}

const getExpensesById = async(user_id) => {

}

const getUserSalary = async(user_id) => {
const f = datbaseRequests.getAllUsers();
console.log(f);
}

getUserSalary(1)


