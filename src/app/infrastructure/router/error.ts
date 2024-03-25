import { CustomErrorType } from "@infrastructure/router/interfaces";

class RouterError extends Error implements CustomErrorType {
  public status: number;

  constructor(public message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default RouterError;
