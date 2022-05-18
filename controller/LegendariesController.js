const LegendariesService = require('../service/LegendariesServices')

const controller = {
  indexAll: async (request, response) => {
    const legendaries = await LegendariesService.ListLegendaries();
    return response.json(legendaries);
  },
  index: async (request, response) => {  
    const { name } = request.query;

    const legendary = await LegendariesService.ListPokemonData(name);

    return response.json(legendary)
  },
  create: async (request, response) => {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    } = request.body

    const legendary = await LegendariesService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    )

    return response.json(legendary);
  }
}

module.exports = controller;