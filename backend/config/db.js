const mongoose = require("mongoose");

const connectDB = async () => {

    try {
       const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        writeConcern: {
            w: "majority",
            j: true,
            wtimeout: 1000,
          },
       });
       
       console.log(process.env.MONGO_URI)
       console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;
