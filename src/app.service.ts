import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): unknown {
    return {
      name: 'UPA Helper',
      version: '1.0.0',
    };
  }
}
