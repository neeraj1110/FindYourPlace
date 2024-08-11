// Created a function to handle errors (manually)
const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
// it is creating a new error with our given statusCode and message and returning it
