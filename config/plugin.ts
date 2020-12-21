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
