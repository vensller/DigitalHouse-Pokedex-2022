const LegendaryModel = require('../models/LegendaryModel');

const controller = {
  getOneLegendary: (request, response) => {  
    const model = new LegendaryModel('123', 'Pineco', 'Bagworm', 'bug');
    return response.json(model);
  },
  getAllLegendaries: (request, response) => {
    const legendary1 = new LegendaryModel('123', 'Pineco', 'Bagworm', 'bug');
    const legendary2 = new LegendaryModel('124', 'Lazaro', 'Bagworm', 'bug');
    const legendary3 = new LegendaryModel('125', 'Ivens', 'Bagworm', 'bug');
    const legendary4 = new LegendaryModel('126', 'Bruno', 'Bagworm', 'sofredor');
    return response.json([
      legendary1,
      legendary2,
      legendary3,
      legendary4
    ]);
  }
}

module.exports = controller;