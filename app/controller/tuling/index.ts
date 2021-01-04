import { Controller } from 'egg';

const queryRule = {
  message: 'string',
  userId: 'string',
  groupId: { type: 'string', required: false },
};

export default class TulingController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.validate(queryRule, ctx.request.query);
    const { message, userId, groupId } = ctx.request.query;
    ctx.body = await ctx.service.tuling.index.callTuling(message, userId, groupId);
    ctx.status = 200;
  }
}
