function isAuthenticated(request, response, next) {
  if (!request.session.isLogged) {
    return response.redirect('/login')
  }  
  next();
}

module.exports = isAuthenticated;