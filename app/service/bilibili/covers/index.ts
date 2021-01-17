import { Service } from 'egg';
import _last from 'lodash/last';

import { RawReg } from '@/constants/bilibili';
import { CoverResult } from './interfaces';

export default class BilibiliCoversService extends Service {
  API = 'https://api.magecorn.com/bilicover/get-cover.php';

  async getUrl(url: string) {
    if (new RegExp(RawReg.ShortUrl).test(url)) {
      const result = await this.ctx.curl<string>(url, {
        method: 'GET',
        dataType: 'text',
      });

      if (result.status === 302) {
        const execReult = new RegExp(RawReg.Url).exec(result.headers.location as string);
        console.log(execReult);
        if (typeof execReult?.[0] === 'string') {
          return execReult?.[0];
        }
      }
    }
    return null;
  }

  getBv(url: string) {
    return _last(url.split(/\//g))?.replace('BV', '');
  }

  /**
   * 测试 url: https://b23.tv/EE3MD0 or https://www.bilibili.com/video/BV1zr4y1T7HD
   *
   * @param url 链接，支持短链
   */
  public async getCover(url: string) {
    const parsedUrl = await this.getUrl(url);

    if (parsedUrl) {
      const bv = this.getBv(parsedUrl);
      const params = {
        type: 'bv',
        id: bv,
        clien: '2.2.0',
      };

      const result = await this.ctx.curl<CoverResult>(this.API, {
        method: 'GET',
        data: params,
        headers: {
          referer: 'https://bilicover.magecorn.com/',
        },
        dataType: 'json',
      });

      if (result.status === 200) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { base, ...rest } = result.data;
        return rest;
      }

      this.ctx.throw(result.status, '外部服务异常 ╮(╯_╰)╭');
    }
    this.ctx.throw(500, '短链接解析失败 ╮(╯_╰)╭');
  }
}
