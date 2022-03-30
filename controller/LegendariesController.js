const LegendariesService = require('../service/LegendariesServices')

const controller = {
  index: (request, response) => {  
    const { id } = request.params;
   const { name } = request.query;

   const legendary = LegendariesService.ListPokemonData(name);

   return response.json(legendary)
  },
  create: (request, response) => {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      especialDefense
    } = request.body

    const legendary = LegendariesService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      especialDefense
    )

    return response.json(legendary)
  }
}

module.exports = controller;