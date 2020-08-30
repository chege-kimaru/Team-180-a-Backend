// this response handler must be used to handle all api responses to make them uniform
exports.responseHandler = (
  res,
  message,
  statusCode,
  success = false,
  data = {}
) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
