const PORT = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/silhouettetechnician'

module.exports = { PORT, dbURI }