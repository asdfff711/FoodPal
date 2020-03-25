const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CalenderDaySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Ingredient"
  },
  notes: [String],
  breakfast: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ],
  lunch: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ],
  dinner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ],
  snack: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ]
});

// You can add helper functions to your documents
module.exports = CalenderDay = mongoose.model("calenderDay", CalenderDaySchema);
