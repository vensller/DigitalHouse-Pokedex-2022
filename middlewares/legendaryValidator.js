const yup = require('yup');

function isLegendaryValid(request, response, next) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    type: yup.string().required()
  });

  if (!schema.isValidSync(request.body)) {
    return response.status(400).json({error: 'Invalid data'});
  }

  next();
}

module.exports = isLegendaryValid;