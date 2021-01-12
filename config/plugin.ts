/** ref: https://eggjs.org/zh-cn/tutorials/typescript.html#%E5%9C%A8-tsconfigjson-%E4%B8%AD%E9%85%8D%E7%BD%AE%E4%BA%86-paths-%E6%97%A0%E6%95%88 */
import 'tsconfig-paths/register';
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};

export default plugin;
