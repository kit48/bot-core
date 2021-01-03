import { Controller } from 'egg';

// 定义创建接口的请求参数规则
const queryRule = {
  word: 'string',
};

export default class ImagesBaiduController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.validate(queryRule, ctx.request.query);
    ctx.body = await ctx.service.images.baidu.index.findImages(ctx.request.query.word);
    ctx.status = 200;
  }
}
