const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true }
});

const keyPointSchema = new mongoose.Schema({
  point_title: { type: String, required: true },
  details: { type: String, required: true }
});

const subtopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  key_points: { type: [keyPointSchema], required: true },
  examples: { type: [exampleSchema], required: true }
});

const systemDesignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  subtopics: { type: [subtopicSchema], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const SystemDesignSchema = mongoose.model('SystemDesignSchema', systemDesignSchema);

module.exports = SystemDesignSchema;
