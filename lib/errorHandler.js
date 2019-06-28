function errorHandler(err, req, res, next) {
    if(err.message === 'Unauthorized') {
      return res.status(401).json({ message: 'Unauthorized'})
    }
    if (err.name === 'ValidationError') {
      const errors = {}
  
      for (const field in err.errors) {
        errors[field] = err.errors[field].message
      }
      // this will now get  a key of name or habitat or whatever, i want the value of this field to be the message
  
      err.errors = errors
  
      return res.status(422).json({ message: 'Unprocessable Entity', errors })
    }
  
    res.status(500).json({ message: 'Internal Server Error'})
    next(err)
  }
  
  module.exports = errorHandler
  
  // the first key of everthing is the name where the field was wrong. im going to