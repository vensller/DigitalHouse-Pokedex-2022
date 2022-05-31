module.exports = (sequelize, DataTypes) => {
  const Legendary = sequelize.define("Legendary", {
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

  Legendary.associate = function(models) {
    Legendary.belongsToMany(models.Coach, {
      through: models.CoachLegendary,
      foreignKey: 'legendary_id',
      otherKey: 'coach_id'
    });
  }

  return Legendary;
} 