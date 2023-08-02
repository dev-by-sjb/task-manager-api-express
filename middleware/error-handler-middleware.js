const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  return res.status(500).json({ errorMessage: err.message });
};

export default errorHandler;
