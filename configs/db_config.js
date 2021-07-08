const db = require('../database/db');
const initModels = require('../models/init-models');
module.exports = initModels(db)
