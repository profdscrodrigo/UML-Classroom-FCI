import { StatusCodes } from 'http-status-codes';

class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static BadRequest(message: string): ApiError {
    return new ApiError( StatusCodes.BAD_REQUEST, message);
  }

  static Unauthorized(message: string): ApiError {
    return new ApiError(StatusCodes.UNAUTHORIZED, message);
  }

  static Forbidden(message: string): ApiError {
    return new ApiError(StatusCodes.FORBIDDEN, message);
  }

  static NotFound(message: string): ApiError {
    return new ApiError(StatusCodes.NOT_FOUND, message);
  }

  static Conflict(message: string): ApiError {
    return new ApiError(StatusCodes.CONFLICT, message);
  }

  static InternalServerError(message: string): ApiError {
    return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR	, message);
  }
}

export default ApiError;
