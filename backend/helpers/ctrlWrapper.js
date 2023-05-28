const ctrlWrapper = (ctrl) => {
  const fn = async (req, res, next) => {
    try {
      console.log("try");
      await ctrl(req, res, next);
    } catch (error) {
      console.log("catch");
      next(error);
    }
  };

  return fn;
};

module.exports = ctrlWrapper;
