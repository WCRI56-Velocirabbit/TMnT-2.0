// const mongoose = require('mongoose');

// const MONGO_URI =
//   'mongodb+srv://mleong:DYSbDaQKtjpcwOPn@tmnt-iteration.x6poia7.mongodb.net/?retryWrites=true&w=majority';
// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     'connected to Mongo DB';
//   })
//   .catch((err) => console.log(err));

// const Schema = mongoose.Schema;

// /**
//  * Check out the `createdAt` field below. This is set up to use Mongo's automatic document
//  * expiration service by giving the Mongoose schema the `expires` property.
//  * After 30 seconds, the session will automatically be removed from the collection!
//  * (actually, Mongo's cleanup service only runs once per minute so the session
//  * could last up to 90 seconds before it's deleted, but still pretty cool!)
//  */
// const sessionSchema = new Schema({
//   cookieId: { type: String, required: true, unique: true },
//   createdAt: { type: Date, expires: 30, default: Date.now },
// });

// const Session = mongoose.model("session", sessionSchema);
// // module.exports = Session;
