require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb://localhost/medical_assistance')

module.exports = {
  Port: Port,
  MongodbUrl: 'mongodb+srv://megdi:megdi@cluster0.mzjtqra.mongodb.net/medical_assistance?retryWrites=true&w=majority'
}