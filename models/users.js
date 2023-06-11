const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const TweetsSchema = new Schema({
  content: { type: String, required: true},
  imageUrl: String,
  author: {type: Schema.Types.ObjectId,ref:'Users'},
  createdAt:{type: Date,required:true,default:Date.now}
});

const UsersModel = mongoose.model("Users", UsersSchema);