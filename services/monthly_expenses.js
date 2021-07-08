const { getUsers } = require("./sign_up_service");

const expenses = [{ username: "tal", password: "123456", email: "sadsada" }];
const addNewExpense =(expense,id,month)=>{
    if(expense){
        expenses.push(expense)
    }
}
const getUserExpenses =(userId)=>{
    if(userId){
   const users=  await getUsers()
const user = users.find( u => u.user_id===userId)
if(user){
    
}
    }
}
module.exports ={ addNewExpense}