import { Service, Context } from 'egg';

import { ImagesResult, PureImageItem } from './interfaces';

export default class ImagesBiduService extends Service {
  SEARCH_API: string;
  DOWNLOAD_API: string;

  constructor(ctx: Context) {
    super(ctx);
    this.SEARCH_API = 'https://image.baidu.com/search/acjson';
    this.DOWNLOAD_API = 'https://image.baidu.com/search/down';
  }

  public async searchImages(word: string) {
    const params = {
      tn: 'resultjson_com',
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

    const result = await this.ctx.curl<ImagesResult>(this.SEARCH_API, {
      method: 'GET',
      data: params,
      dataType: 'json',
    });

    this.ctx.logger.info(`query word, ${result.data.queryExt}`);

    const pureImageItems: PureImageItem[] = result.data.data.map(item => ({
      thumbURL: item.thumbURL,
      middleURL: item.middleURL,
      largeTnImageUrl: item.largeTnImageUrl,
      replaceUrl: item.replaceUrl,
      is_gif: item.is_gif,
      fromPageTitle: item.fromPageTitle,
      fromPageTitleEnc: item.fromPageTitleEnc,
    }));

    return pureImageItems;
  }
}
