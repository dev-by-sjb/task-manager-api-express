import { CustomAPIError } from "../errors/error-class.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ errorMessage: err.message });
  }
  console.log(err.message);
  return res.status(500).json({ errorMessage: err.message });
};

export default errorHandler;
