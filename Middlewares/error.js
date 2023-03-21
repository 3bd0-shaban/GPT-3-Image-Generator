import ErrorHandler from '../Utils/errorHandler.js'
const errorMiddleware = (err, req, res, next) => {

  let customError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  }

  // if (err.name === "TypeError") {
  //   const message = `Resource not found. Invalid: you may forget to specify await`;
  //   err = new ErrorHandler(message, 400);
  //   console.log(err)
  // }

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }
  res.status(customError.statusCode).json({
    success: false,
    msg: customError.message,
  });
};
export default errorMiddleware