const asyncWrapper = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export { asyncWrapper };
