module.exports = (sequelize, DataTypes) => {
  const CoachLegendary = sequelize.define("CoachLegendary", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    tableName: 'coaches_legendaries'
  }
  );

  CoachLegendary.associate = function(models) {
    CoachLegendary.belongsTo(models.Legendary, {
      as: 'legendary',
      foreignKey: 'legendary_id'
    });
    CoachLegendary.belongsTo(models.Coach, {
      as: 'coach',
      foreignKey: 'coach_id'
    });
  }

  return CoachLegendary;
};