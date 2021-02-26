const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
// mongodb
// +srv://admin:urlshortener@cluster0.akeuj.mongodb.net
// /urlshortened?retryWrites=true&w=majority
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
