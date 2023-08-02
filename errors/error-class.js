//extend Error Contractor to Custom API class
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//function to create new custom error with custom api error class
const createCustomError = (message, statusCode) => {
  return new CustomAPIError(message, statusCode);
};

export { CustomAPIError, createCustomError };
