// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportImagesBaidu from '../../../app/controller/images/baidu';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    images: {
      baidu: ExportImagesBaidu;
    }
  }
}
