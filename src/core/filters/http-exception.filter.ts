import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const messagesResponse = [exception.response.message]
      ? [exception.response.message]
      : [];
    const statusMessage =
      exception instanceof HttpException ? exception.message : '';
    const message: any[] = [];
    messagesResponse.forEach((element) => {
      message.push(element);
    });

    response.status(status).json({
      statusMessage: statusMessage,
      message: message ? message : [],
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
