import { Service, Context } from 'egg';
import * as crypto from 'crypto';

import { TulingResult } from './interfaces';

function contextId(id: string) {
  return crypto.createHash('md5').update(Buffer.from(id, 'ascii')).digest('hex');
}

export default class TulingService extends Service {
  TULING_API: string;
  API_KEY: string;

  constructor(ctx: Context) {
    super(ctx);
    this.TULING_API = 'http://openapi.tuling123.com/openapi/api/v2';
    this.API_KEY = this.app.config.service.tuling.API_KEY;
  }

  public async callTuling(message: string, userId: string, groupId?: string) {
    if (!this.API_KEY) {
      this.ctx.throw('未配置图灵 API Key');
    }

    this.ctx.logger.info(`get message: ${message}`);
    if (!message) {
      return null;
    }

    const payload: any = {
      reqType: 0,
      perception: {
        inputText: {
          text: message,
        },
      },
      userInfo: {
        apiKey: this.API_KEY,
        userId: contextId(userId),
      },
    };

    if (groupId) {
      payload.userInfo.groupId = contextId(groupId);
    }

    const result = await this.ctx.curl<TulingResult>(this.TULING_API, {
      method: 'POST',
      contentType: 'json',
      data: payload,
      dataType: 'json',
    });

    if (result.status === 200) {
      const response = result.data.results.find((item) => item.resultType === 'text');
      if (response?.values?.text) {
        return response.values.text;
      }

      this.ctx.logger.info('response', result.data);
      return `返回结果异常 _(:3J∠)_`;
    }

    this.ctx.throw(result.status, '图灵服务异常 ╮(╯_╰)╭');
  }
}
