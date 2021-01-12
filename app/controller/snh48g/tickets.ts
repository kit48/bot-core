import { Controller } from 'egg';

// 定义创建接口的请求参数规则
const queryRule = {
  gid: { type: 'string', required: true, converType: 'int' },
};

export default class ImagesBaiduController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.validate(queryRule, ctx.request.query);
    ctx.body = await ctx.service.snh48g.tickets.index.getRecentTickets(parseInt(ctx.request.query.gid, 10));
    ctx.status = 200;
  }
}
