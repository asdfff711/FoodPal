const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../../middleware/auth");

// Models
const User = require("../../models/Users");
const Recipe = require("../../models/Recipe");

// Create new recipe
// @route POST api/recipe/post
// @desc Register user
// @access Public
router.post("/", [
  auth,
  [
    check("title", "Recipe title cannot be empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newRecipe = new Recipe({
        title: req.body.title,
        author: user.id,
        date: Date.now(),
        images: req.body.images,
        prepTime: req.body.prepTime,
        utensils: req.body.utensils,
        tags: req.body.tags,
        public: req.body.public,
        category: req.body.category,
        instructions: req.body.instructions,
        notes: req.body.notes
      });

      const recipe = await newRecipe.save();
      res.json(recipe);
    } catch (error) {
      console.log(error);
      //  Send errors back to client for now for debugging
      res.status(500).send(error);
    }
  }
]);

// Get all recipes
// Todo: pagination / private / public
// @route GET api/recipe/
// @desc Get a list of recipes
// @access Public

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ date: -1 });
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Get specific post
// @route GET api/posts/:id
// @desc Get post by ID
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(recipe);
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
router.put("/:id", [
  auth,
  [
    check("title", "Recipe title cannot be empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    } catch (error) {
      console.log(error);
      //  Send errors back to client for now for debugging
      res.status(500).send(error);
    }
  }
]);
