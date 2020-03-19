const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: String,
  author: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: { type: Date, default: Date.now },
  images:[{url: String, description: String}],
  meta:{
      favs: Number,
      votes: Number,
  },
  // Minutes
  prepTime: Number,
  utensils: [ String ],
  tags: [String],
  instructions: [ { step: Number, description: String, image: String}],
  category: [String],
  public: Boolean,
  notes: String
});

// You can add helper functions to your documents
module.exports = user = mongoose.model('recipe', RecipeSchema);