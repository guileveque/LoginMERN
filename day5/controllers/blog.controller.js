const BlogModel = require('../models/blog');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

module.exports.BlogCreate = async (req, res) => {
    const {idlog, titre, contenue} = req.body
  
    try {
      const user = await BlogModel.create({idlog, titre, contenue });
      res.status(201).json({ user: user._id});
    }
    catch(err) {
      const errors = signUpErrors(err);
      res.status(200).send({ errors })
    }
}

module.exports.getAllPost = async (req, res) => {
  const billets = await BlogModel.find();
  res.status(200).json(billets);
};

module.exports.deleteBillet = async (req, res) => {
  try {
    await BlogModel.deleteOne({ _id: req.params.id }).exec();
    console.log(req.params.id)
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};