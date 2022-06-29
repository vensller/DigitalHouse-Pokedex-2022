const database = require('../database/models');

const LegendariesService = {
  ListLegendaries: async () => {
    const legendaries = await database.Legendary.findAll();
    return legendaries;
  },
  ListPokemonData: async (pokemonName) => {
    // Fazer um find usando Sequelize com WHERE name = pokemonName
    // return pokemon;
    const legendary = await database.Legendary.findOne({
      where: {
        name: pokemonName
      }
    });
    return legendary;
  },
  createLegendary: async (
    name,
    description,
    type,
    healthPoints,
    specialAttack,
    defense,
    attack,
    experience,
    specialDefense
  ) => {
    const newLegendary = await database.Legendary.create({
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    });

    return newLegendary;
  }
}

module.exports = LegendariesService;