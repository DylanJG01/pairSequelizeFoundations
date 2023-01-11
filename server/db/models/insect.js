'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isTitledCased(value){
          let isTrue = true;
          value.split(" ")
          .forEach(el => {
            console.log(el)
            if (el[0] !== el[0].toUpperCase()){
              isTrue = false;
            }
          })
          if(!isTrue) throw new Error("ERROR ERROR ERROR")
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 240]
      }
    },
    millimeters: {
     type: DataTypes.FLOAT,
     allowNull: false,
     validate : {
      min: 0
     }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};