// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportBilibiliCovers from '../../../app/controller/bilibili/covers';
import ExportImagesBaidu from '../../../app/controller/images/baidu';
import ExportSnh48gTickets from '../../../app/controller/snh48g/tickets';
import ExportTulingIndex from '../../../app/controller/tuling/index';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    bilibili: {
      covers: ExportBilibiliCovers;
    }
    images: {
      baidu: ExportImagesBaidu;
    }
    snh48g: {
      tickets: ExportSnh48gTickets;
    }
    tuling: {
      index: ExportTulingIndex;
    }
  }
}
