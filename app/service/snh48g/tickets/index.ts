import { Service } from 'egg';

import { unescapeUTF16 } from '@/utils/utils';
import { GroupID } from '@/constants/snh48g';
import { TicketsReult } from './interfaces';

export default class Snh48gTicketsService extends Service {
  API = 'https://api.snh48.com/m/getmtickets.php';

  public async getRecentTickets(gid: GroupID) {
    const result = await this.ctx.curl<string>(this.API, {
      method: 'GET',
      data: { gid },
      headers: {
        host: 'api.snh48.com',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        accept: '*/*',
      },
      dataType: 'text',
    });

    if (result.status === 200) {
      /** 先解码再转换 URL 链接，形如 https:\\/\\/m.48.cn\\/tickets\\/item\\/3877 */
      const dataString = unescapeUTF16(result.data.trim()).replace('\\', '');
      const jsonString = dataString.match(/\{.*\}/g)?.[0];
      return jsonString ? (JSON.parse(jsonString) as TicketsReult).desc : [];
    }

    this.ctx.throw(result.status, 'SNH48 服务异常 ╮(╯_╰)╭');
  }
}
