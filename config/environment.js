const env = process.env.NODE_ENV || 'dev'
const PORT = process.env.PORT || 4000
const dbURI = process.env.MONGO_URI || `mongodb://localhost/silhouettetechnician`

module.exports = { PORT, dbURI, env }