# bot-core

基于 Egg.js 的<del>即将诞生的</del>机器人后台接口服务。

## 背景

之前使用 Python 断断续续开发过一些 QQ 机器人的功能，后来因为一些变故导致最近想尝试通过 TypeScript 开发机器人，又由于没有一个相对成熟的框架，遂又回到 Python 去开发。仔细想想，如果不把业务逻辑耦合到具体的机器人实现中去，那不就可以复用各种各样的逻辑了吗？最好的方式应该就是通过 RESTful 接口去实现了。

说干就干，于是有了这么一个项目。

## 功能说明

- [x] 百度搜图
- [x] 图灵机器人

TODO

- [ ] B 站视频解析

## 配套 SDK

TODO

## 如何使用

- 克隆仓库
- 安装依赖
- [功能配置](/config/config.demo.ts#L14)，相关 service 配置，如图灵机器人的 API key，配置完成完成后需要将文件重命名为 config.default.ts 以正确加载配置
- 启动 `npm run start`
- 关闭 `npm run stop`
- 开发 `npm run dev`

## Egg.js 踩坑

### 项目初始化

由于官方文档是通过 `npm init egg --type=ts` 来初始化 TypeScript 项目，而国内网络环境对于 npm 非常之不友好，故而导致初始化项目的时候都一度想放弃这个框架。最后在一个 [issue](https://github.com/eggjs/egg/issues/3916#issuecomment-526476973) 中找到了答案。

### eslint 与 prettier 冲突

参考 [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) 安装并使用 eslint-config-prettier 即可。
