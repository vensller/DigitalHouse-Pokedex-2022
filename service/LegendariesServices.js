const LegendaryModel = require('../models/LegendaryModel')
const { uuid } = require('uuidv4')

const LegendariesService = {
  ListLegendaries: () => {
    const mewTwo = new LegendaryModel(
      1,
      'MewTwo',
      'Its DNA is almost the same as Mews. However, its size and disposition are vastly different',
      'Fogo',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
    )
    const moltres = new LegendaryModel(
      2,
      'Moltres',
      'Its DNA is almost the same as Mews. However, its size and disposition are vastly different',
      'Fogo',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
    )

    return [mewTwo, moltres];
  },
  ListPokemonData: (pokemonName) => {
    const pokemonList = LegendariesService.ListLegendaries();
    const pokemon = pokemonList.find(item => item.name === pokemonName);
    return pokemon;
  },
  createLegendary: (
    name,
    description,
    type,
    healthPoints,
    specialAttack,
    defense,
    attack,
    experience,
    especialDefense
  ) => {
    const newLegendary = new LegendaryModel(
      uuid(),
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

    return newLegendary;
  }
}

module.exports = LegendariesService;