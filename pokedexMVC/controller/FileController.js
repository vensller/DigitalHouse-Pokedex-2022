const controller = {
  storeFile: (req, res) => {
    const { filename } = req.file;

    return res.json({
      url: `http://localhost:3000/uploads/${filename}`
    })
  }
}

module.exports = controller;