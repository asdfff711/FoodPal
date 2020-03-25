const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../../middleware/auth");

// Models
const CalenderDay = require("../../models/CalenderDay");
const User = require("../../models/User");

// Create calender day
// @route POST api/day
// @desc Delete a post
// @access Private
router.post("/", [
  auth,
  [
    check("title", "Recipe title cannot be empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const userId = req.user.id;
    const { Date, notes } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newCalenderDay = new CalenderDay({
      date: date,
      notes: notes,
      user: userId
    });

    try {
      const calenderDay = await newCalenderDay.save();
      res.json(calenderDay);
    } catch (error) {
      console.log(error);
      //  Send errors back to client for now for debugging
      res.status(500).send(error);
    }
  }
]);

// Delete day
// @route DELETE api/posts/:id
// @desc Delete a post
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const calenderDay = await CalenderDay.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Day not found" });
    }

    // Check if user deleting the post is the same user who posted
    if (calender.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await calenderDay.remove();
    // res.json({ msg: "calender removed" });
    res.json(calenderDay);
  } catch (error) {
    // If error is an object id related error
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Update recipe
// @route PUT api/day/:id
// @desc Update a day
// @access Private
router.put("/:id", auth, async (req, res) => {
  try {
    const calenderDay = await CalenderDay.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Day not found" });
    }

    // Check if user deleting the post is the same user who posted
    if (calender.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Update fields
    // Not 100% sure this works!
    calenderDay.day = req.body.day;
    calenderDay.notes = req.body.notes;
    calenderDay.breakfast = req.body.breakfast;
    calenderDay.lunch = req.body.lunch;
    calenderDay.dinner = req.body.dinner;
    calender.snack = req.body.snack;

    calenderDay.save();
    // res.json({ msg: "calender removed" });
    res.json(calenderDay);
  } catch (error) {
    // If error is an object id related error
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Day not found" });
    }
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Read day
// @route GET api/day/:id
// @desc GET a day
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const calenderDay = await CalenderDay.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Day not found" });
    }

    // Check if user deleting the post is the same user who posted
    if (calender.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    res.json(calenderDay);
  } catch (error) {
    // If error is an object id related error
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Read day by date
// @route GET api/day/date/:day
// @desc GET a day
// @access Private
router.get("/date/:day", auth, async (req, res) => {
  try {
    const calenderDay = await CalenderDay.findOne({date: day, user: req.user.id}, function(
      err,
      calenderDay
    ) {
      if (err) {
        throw err;
      }

      if (!calenderDay) {
        return res.status(404).json({ msg: "Day not found" });
      }

      // Check if user deleting the post is the same user who posted
      if (calenderDay.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "User not authorized" });
      }

      console.log("Insider Calender Callback");
      res.json(calenderDay);
    });
  } catch (error) {
    // If error is an object id related error
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    console.error(error);
    res.status(500).send("Server error");
  }
});
