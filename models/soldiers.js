const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soldiers', {
    soldier_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    soldier_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soldier_tash_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    money_addons: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    additional_income: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    days_home: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    money_data_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'money_data',
        key: 'money_data_id'
      }
    },
    is_lone_soldier: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soldiers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "soldiers_pkey",
        unique: true,
        fields: [
          { name: "soldier_id" },
        ]
      },
    ]
  });
};
