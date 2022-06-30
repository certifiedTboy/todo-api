const validateTodoData = (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({
      error: "title and description are required to create or update a todo",
    });
  }
  next();
};

module.exports = {
  validateTodoData,
};
