function isAuthenticated(request, response, next) {
  if (!request.headers.authorization) {
    return response.status(401).json({
      error: 'User not authenticated'
    });
  }  
  next();
}

module.exports = isAuthenticated;