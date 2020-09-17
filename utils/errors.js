/* eslint-disable max-classes-per-file */

class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends BaseError {
  constructor(message) {
    super(message);
    this.message = message || 'Resource not found';
  }
}
exports.NotFoundError = NotFoundError;
