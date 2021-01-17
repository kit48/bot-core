import { Controller } from 'egg';

import { RawReg } from '@/constants/bilibili';

// 定义创建接口的请求参数规则
const queryRule = {
  url: {
    type: 'string',
    required: true,
    format: new RegExp(`${RawReg.ShortUrl}|${RawReg.Url}`),
  },
};

export default class ImagesBaiduController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.validate(queryRule, ctx.request.query);
    ctx.body = await ctx.service.bilibili.covers.index.getCover(ctx.request.query.url);
    ctx.status = 200;
  }
}
