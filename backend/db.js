const uri ="mongodb+srv://vinayak:J2f3G6pwu66jD4bL@cluster0.durlpfe.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas: ', error.message);
  }
};

module.exports = connectToMongo;
