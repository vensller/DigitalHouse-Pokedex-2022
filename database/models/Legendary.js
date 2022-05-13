module.exports = (sequelize, DataTypes) => sequelize.define("Legendary", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  healthPoints: {
    type: DataTypes.FLOAT,
  },      
  specialAttack: {
    type: DataTypes.FLOAT,
  },
  defense: {
    type: DataTypes.FLOAT,
  },
  attack: {
    type: DataTypes.FLOAT,
  },
  experience: {
    type: DataTypes.FLOAT,
  },
  specialDefense: {
    type: DataTypes.FLOAT,
  }
}, {
  tableName: "legendaries",
  timestamps: true
});