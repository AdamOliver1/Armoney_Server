const db = require('../configs/db_config');

class DatbaseRequests {
    async getAllUsers (){
        try{
        const users = await db.users.findAll();
        return users;
        }catch(error){
            console.log(error);
            return [];
        }
    }

    async addUser (props) {
        try {
            const newUser = await db.users.create({ email: props.email, password: props.password, phone: props.phone, first_name: props.first_name, last_name: props.last_name });
            const moneyData = await db.money_data.create({ money_target: props.money_target, current_money: props.current_money });
            const newSoldier = await db.soldiers.create({ soldier_type: props.soldier_type, soldier_tash_type: props.soldier_tash_type, money_addons: props.money_addons, additional_income: props.additional_income, days_home: props.days_home, user_id: newUser.user_id, is_lone_soldier: props.is_lone_soldier, money_data_id: moneyData.money_data_id });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }


    }
}
module.exports = new DatbaseRequests();