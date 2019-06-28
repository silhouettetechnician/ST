const env = process.env.NODE_ENV || 'dev'
const PORT = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/silhouettetechnician${env}`
const secret = process.env.SECRET || 'shhh...secret'

module.exports = { PORT, dbURI, env, secret }