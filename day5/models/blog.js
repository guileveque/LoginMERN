const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
    idlog: {
        type: String
    },
    titre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
      },
      contenue: {
        type: String,
      },
      
    },
    {
      timestamps: true,
    }
  );
  
  // play function before save into display: 'block',

  
  const BlogModel = mongoose.model("blog", blogSchema);
  
  module.exports = BlogModel;