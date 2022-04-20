function isAuthenticated(request, response, next) {
  if (!request.headers.authorization) {
    // return response.status(401).json({
    //   error: 'User not authenticated'
    // });
    // Código para redirecionar o usuário para a tela de login
    // return response.redirect('/login');
  }  
  next();
}

module.exports = isAuthenticated;