import { Service, Context } from 'egg';

import { ImagesResult, SimplifyImageItem } from './interfaces';

export default class ImagesBiduService extends Service {
  SEARCH_API: string;
  DOWNLOAD_API: string;

  constructor(ctx: Context) {
    super(ctx);
    this.SEARCH_API = 'https://image.baidu.com/search/acjson';
    this.DOWNLOAD_API = 'https://image.baidu.com/search/down';
  }

  public async findImages(word: string) {
    const params = {
      // tn 字段说明：http://bitjoy.net/2015/08/13/baidu-image-downloader-python3-pyqt5-eric6-cx_freeze4/
      tn: 'resultjson',
      ipn: 'rj',
      is: '',
      fp: 'result',
      queryWord: word,
      ie: 'utf-8',
      oe: 'utf-8',
      ic: '0',
      hd: '1',
      word,
      istype: '2',
      nc: '1',
      cg: 'star',
      pn: '30',
      rn: '30',
    };

    const result = await this.ctx.curl<string>(this.SEARCH_API, {
      method: 'GET',
      data: params,
      dataType: 'text',
    });

    if (result.status === 200) {
      // 修复 Trailing commas
      const data: ImagesResult = JSON.parse(result.data.replace(/,}/g, '}'));
      this.ctx.logger.info(`query word, ${data.queryExt}`);

      if (data.displayNum > 0) {
        const pureImageItems: SimplifyImageItem[] = data.data.map((item) => ({
          thumbURL: item.thumbURL,
          middleURL: item.middleURL,
          objURL: item.objURL,
          largeTnImageUrl: item.largeTnImageUrl,
          replaceUrl: item.replaceUrl,
          is_gif: item.is_gif,
          fromPageTitle: item.fromPageTitle,
          fromPageTitleEnc: item.fromPageTitleEnc,
        }));
        return pureImageItems;
      }
      this.ctx.throw(200, `未找到 [${word}] 相关图片 _(:3J∠)_`);
    }

    this.ctx.throw(result.status, '百度搜图服务异常 ╮(╯_╰)╭');
  }
}
